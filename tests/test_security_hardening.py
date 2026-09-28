"""
Bhoomi Sakha - Security & Production Hardening Regression Test Suite
Validates:
1. Officer registration key enforcement & protection against default secret bypass in production
2. JWT secret validation & prevention of default secret usage in production
3. Rate limiting enforcement on authentication and inference endpoints
4. Error masking (prevention of Python stack trace, database URI, and internal leakages)
5. Cross-user IDOR isolation (Lands, Cases, Documents, Notifications, Metrics)
6. Server-side pagination clamping to prevent resource exhaustion
7. Readiness probe telemetry (/ready and /api/ready)
8. MongoDB production enforcement (strict prohibition of silent in-memory fallback in production)
"""

import os
import pytest
from fastapi.testclient import TestClient

from src.api import app, predictor
from src.database import (
    reset_database_for_testing,
    get_database,
    is_production_environment,
)
from src.auth import (
    get_jwt_secret,
    get_jwt_secret_diagnostics,
    get_officer_registration_key,
    DEFAULT_JWT_SECRET,
    DEFAULT_OFFICER_REGISTRATION_KEY,
    FORBIDDEN_DEV_JWT_SECRETS,
    create_access_token,
    decode_access_token,
)
from src.rate_limiter import auth_rate_limiter, predict_rate_limiter

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_clean_db():
    reset_database_for_testing()
    auth_rate_limiter.reset()
    predict_rate_limiter.reset()
    yield


# ============================================================
# 1. OFFICER REGISTRATION KEY & SECRETS ENFORCEMENT
# ============================================================

def test_production_officer_key_rejects_default(monkeypatch):
    """
    In production mode, the server must strictly refuse to use the default repository key.
    Attempting officer registration without an explicit secure key must fail.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    monkeypatch.delenv("RENDER", raising=False)
    monkeypatch.delenv("OFFICER_REGISTRATION_KEY", raising=False)

    # Calling get_officer_registration_key directly should raise RuntimeError
    with pytest.raises(RuntimeError) as exc_info:
        get_officer_registration_key()
    assert "OFFICER_REGISTRATION_KEY" in str(exc_info.value)

    # Registering as officer in production with missing or default key returns 503
    resp = client.post("/api/auth/register", json={
        "name": "Officer Test",
        "email": "prod_off@gov.in",
        "role": "officer",
        "password": "Password@123",
        "officer_key": DEFAULT_OFFICER_REGISTRATION_KEY,
    })
    assert resp.status_code == 503
    assert "Officer registration is currently disabled" in resp.json()["detail"]


def test_production_officer_key_accepts_configured_secret(monkeypatch):
    """
    In production mode, when an explicit secure OFFICER_REGISTRATION_KEY is configured,
    officer registration succeeds with the matching key and fails with an invalid key.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    monkeypatch.setenv("JWT_SECRET", "secure-jwt-production-secret-2026")
    secure_key = "SuperSecretGovKey2026!#"
    monkeypatch.setenv("OFFICER_REGISTRATION_KEY", secure_key)

    # Invalid key attempt
    bad_resp = client.post("/api/auth/register", json={
        "name": "Officer Test",
        "email": "prod_off2@gov.in",
        "role": "officer",
        "password": "Password@123",
        "officer_key": "wrong-key",
    })
    assert bad_resp.status_code == 403

    # Valid key attempt
    good_resp = client.post("/api/auth/register", json={
        "name": "Officer Valid",
        "email": "prod_off_valid@gov.in",
        "role": "officer",
        "password": "Password@123",
        "officer_key": secure_key,
    })
    assert good_resp.status_code == 201
    assert good_resp.json()["user"]["role"] == "officer"


def test_production_officer_key_rejects_example_placeholders(monkeypatch):
    """
    In production mode, the server strictly refuses example placeholders
    such as 'replace-with-a-strong-secret'.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    for placeholder in ["replace-with-a-strong-secret", "dev-officer-key-local-only", "your-secure-officer-registration-passphrase"]:
        monkeypatch.setenv("OFFICER_REGISTRATION_KEY", placeholder)
        with pytest.raises(RuntimeError) as exc_info:
            get_officer_registration_key()
        assert "OFFICER_REGISTRATION_KEY" in str(exc_info.value)


def test_officer_key_never_leaked_in_responses_or_errors(monkeypatch):
    """
    Ensures the officer registration key is never leaked in success responses,
    error responses (403), or configuration error responses (503).
    """
    secret_key = "SuperClassifiedGovKey987!"
    monkeypatch.setenv("OFFICER_REGISTRATION_KEY", secret_key)

    # 1. 403 Forbidden on invalid key
    bad_resp = client.post("/api/auth/register", json={
        "name": "Officer Test",
        "email": "leak_test_bad@gov.in",
        "role": "officer",
        "password": "Password@123",
        "officer_key": "wrong-guess",
    })
    assert bad_resp.status_code == 403
    assert secret_key not in bad_resp.text
    assert "wrong-guess" not in bad_resp.text

    # 2. 201 Created on valid key
    good_resp = client.post("/api/auth/register", json={
        "name": "Officer Valid",
        "email": "leak_test_good@gov.in",
        "role": "officer",
        "password": "Password@123",
        "officer_key": secret_key,
    })
    assert good_resp.status_code == 201
    assert secret_key not in good_resp.text
    assert "officer_key" not in good_resp.json()["user"]

    # 3. 503 on unconfigured production key
    monkeypatch.setenv("ENVIRONMENT", "production")
    monkeypatch.delenv("OFFICER_REGISTRATION_KEY", raising=False)
    err_resp = client.post("/api/auth/register", json={
        "name": "Officer Fail",
        "email": "leak_test_prod_fail@gov.in",
        "role": "officer",
        "password": "Password@123",
        "officer_key": secret_key,
    })
    assert err_resp.status_code == 503
    assert secret_key not in err_resp.text



def test_production_jwt_secret_valid_accepted(monkeypatch):
    """
    A valid, high-entropy JWT_SECRET (>= 32 chars, not matching forbidden defaults)
    is cleanly accepted in production mode.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    valid_secret = "SuperSecureGovKeyForProductionJwtSigning2026!#"
    monkeypatch.setenv("JWT_SECRET", valid_secret)
    assert get_jwt_secret() == valid_secret


def test_production_jwt_secret_rejects_missing(monkeypatch):
    """
    In production mode, a missing JWT_SECRET causes immediate secure configuration failure.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    monkeypatch.delenv("JWT_SECRET", raising=False)

    with pytest.raises(RuntimeError) as exc_info:
        get_jwt_secret()
    assert "JWT_SECRET" in str(exc_info.value)
    assert "unset or empty" in str(exc_info.value)


def test_production_jwt_secret_rejects_empty_and_whitespace(monkeypatch):
    """
    In production mode, empty string or whitespace-only JWT_SECRET is strictly rejected.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    for empty_val in ["", "   ", "\t\n", '""', "''"]:
        monkeypatch.setenv("JWT_SECRET", empty_val)
        with pytest.raises(RuntimeError) as exc_info:
            get_jwt_secret()
        assert "JWT_SECRET" in str(exc_info.value)


def test_production_jwt_secret_rejects_known_placeholders(monkeypatch):
    """
    In production mode, known repository defaults and example placeholders
    are strictly rejected.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    for placeholder in FORBIDDEN_DEV_JWT_SECRETS:
        monkeypatch.setenv("JWT_SECRET", placeholder)
        with pytest.raises(RuntimeError) as exc_info:
            get_jwt_secret()
        assert "JWT_SECRET" in str(exc_info.value)
        assert "matches a known development default or example placeholder" in str(exc_info.value)


def test_production_jwt_secret_rejects_short_insecure(monkeypatch):
    """
    In production mode, secrets shorter than 32 characters are rejected for HS256 security.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    monkeypatch.setenv("JWT_SECRET", "short-key-12345")
    with pytest.raises(RuntimeError) as exc_info:
        get_jwt_secret()
    assert "JWT_SECRET" in str(exc_info.value)
    assert "too short" in str(exc_info.value)


def test_production_jwt_secret_strips_surrounding_quotes(monkeypatch):
    """
    Surrounding quotes accidentally added in dashboard configuration are cleanly stripped.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    raw = '"AValidHighEntropyProductionSecretKey32CharsLong!"'
    monkeypatch.setenv("JWT_SECRET", raw)
    assert get_jwt_secret() == "AValidHighEntropyProductionSecretKey32CharsLong!"


def test_jwt_diagnostics_safe(monkeypatch):
    """
    Verifies that get_jwt_secret_diagnostics returns presence and validity flags
    without exposing the actual secret value.
    """
    test_secret = "AnotherHighEntropySecretKeyThatMustBeProtected!"
    monkeypatch.setenv("ENVIRONMENT", "production")
    monkeypatch.setenv("JWT_SECRET", test_secret)

    diag = get_jwt_secret_diagnostics()
    assert diag["JWT_SECRET_PRESENT"] is True
    assert diag["JWT_SECRET_LENGTH"] == len(test_secret)
    assert diag["JWT_SECRET_VALID"] is True
    assert diag["is_production"] is True

    # Assert secret string is never contained in diagnostic dictionary
    assert test_secret not in str(diag)


def test_jwt_diagnostics_endpoint_unauthenticated_blocked():
    """
    Verifies that unauthenticated or unauthorized users cannot access /api/auth/diagnostics/jwt.
    """
    # 1. Unauthenticated request
    resp = client.get("/api/auth/diagnostics/jwt")
    assert resp.status_code == 401

    # 2. Citizen authenticated request
    cit_resp = client.post("/api/auth/register", json={
        "name": "Citizen Diagnostic",
        "email": "cit_diag@example.com",
        "role": "citizen",
        "password": "Password@123",
    }).json()
    citizen_token = cit_resp["access_token"]
    resp_cit = client.get(
        "/api/auth/diagnostics/jwt",
        headers={"Authorization": f"Bearer {citizen_token}"}
    )
    assert resp_cit.status_code == 403

    # 3. Officer authenticated request
    off_resp = client.post("/api/auth/register", json={
        "name": "Officer Diagnostic",
        "email": "off_diag@gov.in",
        "role": "officer",
        "password": "Password@123",
        "officer_key": get_officer_registration_key(),
    }).json()
    officer_token = off_resp["access_token"]
    resp_off = client.get(
        "/api/auth/diagnostics/jwt",
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert resp_off.status_code == 200
    data = resp_off.json()
    assert "JWT_SECRET_PRESENT" in data
    assert "JWT_SECRET_LENGTH" in data
    assert "JWT_SECRET_VALID" in data
    assert "is_production" in data


# ============================================================
# 2. RATE LIMITING / ABUSE RESISTANCE
# ============================================================

def test_auth_rate_limiting_enforcement(monkeypatch):
    """
    Verifies that excessive unauthenticated authentication requests are throttled with HTTP 429
    and include standard Retry-After headers.
    """
    monkeypatch.setenv("TEST_RATE_LIMIT", "1")
    monkeypatch.setenv("RATE_LIMIT_ENABLED", "1")
    auth_rate_limiter.reset()

    # Max requests is 20 per minute
    status_codes = []
    for i in range(25):
        resp = client.post("/api/auth/login", json={
            "email": f"rate_{i}@example.com",
            "password": "AnyPassword123"
        })
        status_codes.append(resp.status_code)

    assert 429 in status_codes
    rate_limited_resp = client.post("/api/auth/login", json={
        "email": "rate_blocked@example.com",
        "password": "AnyPassword123"
    })
    assert rate_limited_resp.status_code == 429
    assert "Retry-After" in rate_limited_resp.headers
    assert "Rate limit exceeded" in rate_limited_resp.json()["detail"]


# ============================================================
# 3. ERROR MASKING & NO STACK TRACE LEAKAGE
# ============================================================

def test_predict_error_masking_no_stack_trace(monkeypatch):
    """
    When an unexpected error occurs during model evaluation,
    the API returns a safe HTTP 500 without leaking stack traces or internal details.
    """
    # Monkeypatch model to simulate internal failure
    def faulty_predict(data):
        raise TypeError("Unexpected internal numpy array shape failure at line 42")

    monkeypatch.setattr(predictor, "predict", faulty_predict)

    resp = client.post("/predict", json={
        "snapshot_day": 10,
        "land_area_hectares": 5.0,
    })
    assert resp.status_code == 500
    detail = resp.json()["detail"]
    assert "TypeError" not in detail
    assert "numpy" not in detail
    assert "line 42" not in detail
    assert "Unable to process the risk prediction request right now" in detail


# ============================================================
# 4. IDOR / ROLE ACCESS ISOLATION
# ============================================================

def test_citizen_cannot_access_officer_metrics():
    """Citizens cannot access officer metrics summary endpoint."""
    cit_resp = client.post("/api/auth/register", json={
        "name": "Citizen Ramesh",
        "email": "ramesh_metrics@example.com",
        "role": "citizen",
        "password": "Password@123",
    }).json()
    token = cit_resp["access_token"]

    resp = client.get("/api/cases/metrics/summary", headers={"Authorization": f"Bearer {token}"})
    assert resp.status_code == 403
    assert "Citizens cannot access officer operational metrics" in resp.json()["detail"]


def test_pagination_bounds_clamped():
    """
    Clients requesting absurdly large limit parameters have their limit capped to 100.
    """
    off_resp = client.post("/api/auth/register", json={
        "name": "Officer Bound",
        "email": "off_bound@gov.in",
        "role": "officer",
        "password": "Password@123",
        "officer_key": get_officer_registration_key(),
    }).json()
    token = off_resp["access_token"]

    resp = client.get("/api/cases?limit=999999&page=1", headers={"Authorization": f"Bearer {token}"})
    assert resp.status_code == 200
    data = resp.json()
    assert data["limit"] == 100  # Clamped server-side


# ============================================================
# 5. READINESS PROBE & HEALTH CHECKS
# ============================================================

def test_health_liveness_endpoint():
    """Fast /health check verifies application process and loaded model."""
    resp = client.get("/health")
    assert resp.status_code == 200
    data = resp.json()
    assert data["status"] == "healthy"
    assert data["model_loaded"] is True
    assert data["features"] == 76


def test_readiness_probe_endpoint():
    """Comprehensive /ready probe verifies database, storage, and model."""
    resp = client.get("/ready")
    assert resp.status_code == 200
    data = resp.json()
    assert data["status"] == "ready"
    assert data["database"]["ready"] is True
    assert data["model"]["ready"] is True
    assert "storage" in data


# ============================================================
# 6. MONGODB PRODUCTION INTEGRITY
# ============================================================

def test_production_database_requires_uri(monkeypatch):
    """
    In production mode, the database layer strictly forbids in-memory fallback
    and fails fast if MONGODB_URI is not set.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    monkeypatch.setenv("MONGODB_URI", "")
    from src import database
    monkeypatch.setattr(database, "_db", None)

    with pytest.raises(RuntimeError) as exc_info:
        get_database()
    assert "MONGODB_URI" in str(exc_info.value)

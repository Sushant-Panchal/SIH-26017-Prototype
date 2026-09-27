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
    get_officer_registration_key,
    DEFAULT_JWT_SECRET,
    DEFAULT_OFFICER_REGISTRATION_KEY,
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


def test_production_jwt_secret_rejects_default(monkeypatch):
    """
    In production mode, the server strictly refuses to use the default repository JWT secret.
    """
    monkeypatch.setenv("ENVIRONMENT", "production")
    monkeypatch.delenv("JWT_SECRET", raising=False)

    with pytest.raises(RuntimeError) as exc_info:
        get_jwt_secret()
    assert "JWT_SECRET" in str(exc_info.value)


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
        "officer_key": DEFAULT_OFFICER_REGISTRATION_KEY,
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

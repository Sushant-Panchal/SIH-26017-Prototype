"""
Bhoomi Sakha - Authentication & Security Test Suite
Verifies identity management, password hashing, JWT expiration,
role-based access control, citizen isolation, and prevention of privilege escalation.
"""

from datetime import timedelta
import pytest
from fastapi.testclient import TestClient

from src.api import app
from src.database import reset_database_for_testing
from src.auth import create_access_token, hash_password, verify_password, OFFICER_REGISTRATION_KEY

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_clean_db():
    reset_database_for_testing()


def test_password_hashing():
    pwd = "SecurePassword@123"
    hashed = hash_password(pwd)
    assert hashed != pwd
    assert "$" in hashed
    assert verify_password(pwd, hashed) is True
    assert verify_password("WrongPassword", hashed) is False


def test_register_citizen_success():
    resp = client.post("/api/auth/register", json={
        "name": "Kisan Shinde",
        "email": "kisan.shinde@example.com",
        "role": "citizen",
        "password": "MyStrongPassword@123",
        "phone": "+91 9822001122"
    })
    assert resp.status_code == 201
    data = resp.json()
    assert "access_token" in data
    assert data["user"]["role"] == "citizen"
    assert data["user"]["email"] == "kisan.shinde@example.com"
    assert "password" not in data["user"]
    assert "password_hash" not in data["user"]


def test_register_officer_success():
    resp = client.post("/api/auth/register", json={
        "name": "SLAO officer Deshmukh",
        "email": "slao.deshmukh@gov.in",
        "role": "officer",
        "password": "OfficerPassword@2026",
        "officer_key": OFFICER_REGISTRATION_KEY,
        "designation": "Special Land Acquisition Officer"
    })
    assert resp.status_code == 201
    data = resp.json()
    assert data["user"]["role"] == "officer"
    assert "access_token" in data


def test_role_escalation_attempt_rejected():
    # Citizen attempts to sign up as officer without secret key
    resp = client.post("/api/auth/register", json={
        "name": "Attacker",
        "email": "attacker@example.com",
        "role": "officer",
        "password": "AttackPassword@123",
        "officer_key": "wrong_key"
    })
    assert resp.status_code == 403
    assert "Officer Registration Key" in resp.json()["detail"]


def test_duplicate_email_registration_rejected():
    payload = {
        "name": "First User",
        "email": "duplicate@example.com",
        "role": "citizen",
        "password": "Password@123"
    }
    resp1 = client.post("/api/auth/register", json=payload)
    assert resp1.status_code == 201

    resp2 = client.post("/api/auth/register", json=payload)
    assert resp2.status_code == 409


def test_login_success_and_me():
    # Register user
    client.post("/api/auth/register", json={
        "name": "Pooja Patil",
        "email": "pooja.patil@example.com",
        "role": "citizen",
        "password": "PoojaSecure@123"
    })

    # Login
    login_resp = client.post("/api/auth/login", json={
        "email": "pooja.patil@example.com",
        "password": "PoojaSecure@123"
    })
    assert login_resp.status_code == 200
    token = login_resp.json()["access_token"]
    assert token

    # Check /me with token
    me_resp = client.get("/api/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert me_resp.status_code == 200
    assert me_resp.json()["email"] == "pooja.patil@example.com"


def test_login_invalid_credentials():
    client.post("/api/auth/register", json={
        "name": "Valid User",
        "email": "valid@example.com",
        "role": "citizen",
        "password": "CorrectPassword@123"
    })

    # Wrong password
    resp1 = client.post("/api/auth/login", json={
        "email": "valid@example.com",
        "password": "WrongPassword@123"
    })
    assert resp1.status_code == 401

    # Nonexistent email
    resp2 = client.post("/api/auth/login", json={
        "email": "nonexistent@example.com",
        "password": "AnyPassword@123"
    })
    assert resp2.status_code == 401


def test_expired_token_rejected():
    # Generate token that expired 1 hour ago
    expired_token = create_access_token(
        user_id="USR-EXPIRED",
        role="citizen",
        email="expired@example.com",
        name="Expired User",
        expires_delta=timedelta(hours=-1)
    )
    resp = client.get("/api/auth/me", headers={"Authorization": f"Bearer {expired_token}"})
    assert resp.status_code == 401
    assert "expired" in resp.json()["detail"].lower()


def test_citizen_data_isolation():
    # Register Citizen A
    resp_a = client.post("/api/auth/register", json={
        "name": "Citizen A",
        "email": "citizen.a@example.com",
        "role": "citizen",
        "password": "PasswordA@123"
    })
    token_a = resp_a.json()["access_token"]
    user_a_id = resp_a.json()["user"]["user_id"]

    # Register Citizen B
    resp_b = client.post("/api/auth/register", json={
        "name": "Citizen B",
        "email": "citizen.b@example.com",
        "role": "citizen",
        "password": "PasswordB@123"
    })
    token_b = resp_b.json()["access_token"]
    user_b_id = resp_b.json()["user"]["user_id"]

    # Citizen A adds land and case
    land_a = client.post("/api/lands", json={
        "owner_id": user_a_id,
        "state": "Maharashtra",
        "district": "Pune",
        "taluka": "Haveli",
        "village": "Wagholi",
        "survey_number": "100/1",
        "area_hectares": 1.5,
        "land_type": "Agricultural",
    }).json()

    case_a = client.post("/api/cases", json={
        "citizen_id": user_a_id,
        "land_id": land_a["land_id"],
        "category": "compensation_not_received",
        "description": "Compensation pending for 10 months.",
    }, headers={"Authorization": f"Bearer {token_a}"}).json()

    # Citizen B tries to access Citizen A's lands -> 403
    lands_b_attempt = client.get(
        f"/api/users/{user_a_id}/lands",
        headers={"Authorization": f"Bearer {token_b}"}
    )
    assert lands_b_attempt.status_code == 403

    # Citizen B tries to access Citizen A's cases -> 403
    cases_b_attempt = client.get(
        f"/api/users/{user_a_id}/cases",
        headers={"Authorization": f"Bearer {token_b}"}
    )
    assert cases_b_attempt.status_code == 403

    # Citizen B tries to view Citizen A's case directly -> 403
    case_b_view = client.get(
        f"/api/cases/{case_a['case_id']}",
        headers={"Authorization": f"Bearer {token_b}"}
    )
    assert case_b_view.status_code == 403

    # Citizen A can access their own cases -> 200
    case_a_view = client.get(
        f"/api/cases/{case_a['case_id']}",
        headers={"Authorization": f"Bearer {token_a}"}
    )
    assert case_a_view.status_code == 200


def test_officer_can_access_cases():
    # Setup Citizen with case
    cit = client.post("/api/auth/register", json={
        "name": "Farmer",
        "email": "farmer@example.com",
        "role": "citizen",
        "password": "Password@123"
    }).json()
    cit_token = cit["access_token"]
    cit_id = cit["user"]["user_id"]

    land = client.post("/api/lands", json={
        "owner_id": cit_id,
        "state": "Maharashtra",
        "district": "Pune",
        "taluka": "Haveli",
        "village": "Wagholi",
        "survey_number": "200/1",
        "area_hectares": 2.0,
        "land_type": "Agricultural",
    }).json()

    case = client.post("/api/cases", json={
        "citizen_id": cit_id,
        "land_id": land["land_id"],
        "category": "land_measurement",
        "description": "Boundary issue.",
    }, headers={"Authorization": f"Bearer {cit_token}"}).json()

    # Officer registers
    off = client.post("/api/auth/register", json={
        "name": "Officer Pawar",
        "email": "pawar@gov.in",
        "role": "officer",
        "password": "PawarPassword@123",
        "officer_key": OFFICER_REGISTRATION_KEY,
    }).json()
    off_token = off["access_token"]

    # Officer accesses citizen case -> 200
    officer_view = client.get(
        f"/api/cases/{case['case_id']}",
        headers={"Authorization": f"Bearer {off_token}"}
    )
    assert officer_view.status_code == 200
    assert officer_view.json()["case_id"] == case["case_id"]


def test_citizen_cannot_access_other_citizen_land_or_impersonate():
    # Citizen A
    resp_a = client.post("/api/auth/register", json={
        "name": "Citizen A",
        "email": "cit.a@example.com",
        "role": "citizen",
        "password": "PasswordA@123"
    }).json()
    token_a = resp_a["access_token"]
    user_a_id = resp_a["user"]["user_id"]

    # Citizen B
    resp_b = client.post("/api/auth/register", json={
        "name": "Citizen B",
        "email": "cit.b@example.com",
        "role": "citizen",
        "password": "PasswordB@123"
    }).json()
    token_b = resp_b["access_token"]
    user_b_id = resp_b["user"]["user_id"]

    # Citizen A adds land
    land_a = client.post("/api/lands", json={
        "owner_id": user_a_id,
        "state": "Maharashtra",
        "district": "Pune",
        "taluka": "Haveli",
        "village": "Wagholi",
        "survey_number": "100/1",
        "area_hectares": 1.5,
        "land_type": "Agricultural",
    }, headers={"Authorization": f"Bearer {token_a}"}).json()

    # 1. Citizen B cannot view Citizen A's land by land_id -> 403
    resp_get_land = client.get(f"/api/lands/{land_a['land_id']}", headers={"Authorization": f"Bearer {token_b}"})
    assert resp_get_land.status_code == 403

    # 2. Citizen B cannot impersonate Citizen A when creating land -> 403
    resp_impersonate_land = client.post("/api/lands", json={
        "owner_id": user_a_id,
        "state": "Maharashtra",
        "district": "Pune",
        "taluka": "Haveli",
        "village": "Wagholi",
        "survey_number": "999/1",
        "area_hectares": 2.5,
        "land_type": "Agricultural",
    }, headers={"Authorization": f"Bearer {token_b}"})
    assert resp_impersonate_land.status_code == 403


def test_citizen_cannot_mark_other_citizen_notification_read():
    # Citizen A
    resp_a = client.post("/api/auth/register", json={
        "name": "Citizen Alpha",
        "email": "alpha@example.com",
        "role": "citizen",
        "password": "PasswordA@123"
    }).json()
    token_a = resp_a["access_token"]
    user_a_id = resp_a["user"]["user_id"]

    # Citizen B
    resp_b = client.post("/api/auth/register", json={
        "name": "Citizen Beta",
        "email": "beta@example.com",
        "role": "citizen",
        "password": "PasswordB@123"
    }).json()
    token_b = resp_b["access_token"]

    # Create notification for Citizen A
    notif = client.post("/api/cases", json={
        "citizen_id": user_a_id,
        "land_id": client.post("/api/lands", json={
            "owner_id": user_a_id,
            "state": "Maharashtra",
            "district": "Pune",
            "taluka": "Haveli",
            "village": "Wagholi",
            "survey_number": "50/1",
            "area_hectares": 1.0,
            "land_type": "Agricultural",
        }, headers={"Authorization": f"Bearer {token_a}"}).json()["land_id"],
        "category": "compensation_not_received",
        "description": "Compensation delay issue.",
    }, headers={"Authorization": f"Bearer {token_a}"})
    assert notif.status_code == 201

    # Fetch Citizen A's notifications
    notifs_a = client.get(f"/api/users/{user_a_id}/notifications", headers={"Authorization": f"Bearer {token_a}"}).json()
    assert len(notifs_a) > 0
    notif_id = notifs_a[0]["notification_id"]

    # Citizen B tries to mark Citizen A's notification as read -> 403
    resp_mark = client.post(f"/api/notifications/{notif_id}/read", headers={"Authorization": f"Bearer {token_b}"})
    assert resp_mark.status_code == 403

    # Citizen A can mark their own notification as read -> 200
    resp_mark_own = client.post(f"/api/notifications/{notif_id}/read", headers={"Authorization": f"Bearer {token_a}"})
    assert resp_mark_own.status_code == 200
    assert resp_mark_own.json()["read"] is True


def test_citizen_cannot_perform_officer_actions():
    # Setup Citizen with case
    cit = client.post("/api/auth/register", json={
        "name": "Citizen Commoner",
        "email": "commoner@example.com",
        "role": "citizen",
        "password": "Password@123"
    }).json()
    cit_token = cit["access_token"]
    cit_id = cit["user"]["user_id"]

    land = client.post("/api/lands", json={
        "owner_id": cit_id,
        "state": "Maharashtra",
        "district": "Pune",
        "taluka": "Haveli",
        "village": "Wagholi",
        "survey_number": "300/1",
        "area_hectares": 2.0,
        "land_type": "Agricultural",
    }, headers={"Authorization": f"Bearer {cit_token}"}).json()

    case = client.post("/api/cases", json={
        "citizen_id": cit_id,
        "land_id": land["land_id"],
        "category": "compensation_not_received",
        "description": "Case for officer test.",
    }, headers={"Authorization": f"Bearer {cit_token}"}).json()
    case_id = case["case_id"]

    # 1. Citizen cannot assign case -> 403
    assign_resp = client.post(
        f"/api/cases/{case_id}/assign",
        json={"actor_user_id": cit_id, "assigned_officer_id": cit_id},
        headers={"Authorization": f"Bearer {cit_token}"}
    )
    assert assign_resp.status_code == 403

    # 2. Citizen cannot update case status to resolved -> 403
    status_resp = client.post(
        f"/api/cases/{case_id}/status",
        json={"actor_user_id": cit_id, "status": "resolved"},
        headers={"Authorization": f"Bearer {cit_token}"}
    )
    assert status_resp.status_code == 403

    # 3. Citizen cannot request documents -> 403
    doc_req_resp = client.post(
        f"/api/cases/{case_id}/request-document",
        json={"actor_user_id": cit_id, "document_type": "7_12_extract", "reason": "Need check"},
        headers={"Authorization": f"Bearer {cit_token}"}
    )
    assert doc_req_resp.status_code == 403


"""
Bhoomi Sakha - Case Lifecycle, Document Workflow, and Audit Privacy Tests
Verifies state machine transitions, document requests/verifications,
officer case queue filtering, dashboard metrics, and internal note privacy.
"""

import pytest
from fastapi.testclient import TestClient

from src.api import app
from src.database import reset_database_for_testing
from src.auth import OFFICER_REGISTRATION_KEY

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_clean_db():
    reset_database_for_testing()


def test_invalid_status_transition_rejected():
    cit = client.post("/api/auth/register", json={
        "name": "Citizen Ram", "email": "ram@ex.com", "role": "citizen", "password": "Pass@123"
    }).json()
    off = client.post("/api/auth/register", json={
        "name": "Officer Sharma", "email": "sharma@gov.in", "role": "officer",
        "password": "Pass@123", "officer_key": OFFICER_REGISTRATION_KEY
    }).json()

    land = client.post("/api/lands", json={
        "owner_id": cit["user"]["user_id"], "state": "MH", "district": "Pune",
        "taluka": "Haveli", "village": "V", "survey_number": "1", "area_hectares": 1.0, "land_type": "Mixed"
    }).json()

    case = client.post("/api/cases", json={
        "citizen_id": cit["user"]["user_id"], "land_id": land["land_id"],
        "category": "compensation_not_received", "description": "Payment missing."
    }).json()

    # Case is in 'submitted'. Attempting to jump directly to 'closed' is an invalid transition -> 400 Bad Request
    invalid_jump = client.post(
        f"/api/cases/{case['case_id']}/status",
        json={"status": "closed", "actor_user_id": off["user"]["user_id"]},
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )
    assert invalid_jump.status_code == 400
    assert "Invalid case status transition" in invalid_jump.json()["detail"]


def test_document_request_and_verification_workflow():
    # Setup Citizen & Officer
    cit = client.post("/api/auth/register", json={
        "name": "Citizen Sita", "email": "sita@ex.com", "role": "citizen", "password": "Pass@123"
    }).json()
    off = client.post("/api/auth/register", json={
        "name": "Officer Kulkarni", "email": "kulkarni@gov.in", "role": "officer",
        "password": "Pass@123", "officer_key": OFFICER_REGISTRATION_KEY
    }).json()

    land = client.post("/api/lands", json={
        "owner_id": cit["user"]["user_id"], "state": "MH", "district": "Thane",
        "taluka": "Kalyan", "village": "V", "survey_number": "45", "area_hectares": 2.0, "land_type": "Agricultural"
    }).json()

    case = client.post("/api/cases", json={
        "citizen_id": cit["user"]["user_id"], "land_id": land["land_id"],
        "category": "documentation", "description": "Need measurement verification."
    }).json()

    # 1. Officer requests document from citizen
    req_resp = client.post(
        f"/api/cases/{case['case_id']}/request-document",
        json={
            "document_type": "7_12_extract",
            "reason": "Mutation entry number 458 is required to verify ownership.",
            "message": "Please upload certified copy.",
            "actor_user_id": off["user"]["user_id"]
        },
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )
    assert req_resp.status_code == 200
    assert req_resp.json()["status"] == "documents_required"

    # Verify notification was sent to citizen
    cit_notifs = client.get(
        f"/api/users/{cit['user']['user_id']}/notifications",
        headers={"Authorization": f"Bearer {cit['access_token']}"}
    ).json()
    assert any(n["type"] == "document_required" for n in cit_notifs)

    # 2. Citizen uploads requested document metadata
    doc_resp = client.post(
        f"/api/cases/{case['case_id']}/documents",
        json={
            "uploaded_by": cit["user"]["user_id"],
            "document_type": "7_12_extract",
            "file_name": "certified_7_12.pdf",
            "storage_reference": "storage/cases/CAS-SITA/certified_7_12.pdf"
        },
        headers={"Authorization": f"Bearer {cit['access_token']}"}
    )
    assert doc_resp.status_code == 201
    doc_id = doc_resp.json()["document_id"]

    # 3. Officer verifies document
    verify_resp = client.post(
        f"/api/cases/{case['case_id']}/documents/{doc_id}/verify",
        json={
            "verification_status": "verified",
            "actor_user_id": off["user"]["user_id"]
        },
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )
    assert verify_resp.status_code == 200
    assert verify_resp.json()["verification_status"] == "verified"
    assert verify_resp.json()["verified_at"] is not None


def test_internal_officer_notes_privacy():
    cit = client.post("/api/auth/register", json={
        "name": "Citizen Anand", "email": "anand@ex.com", "role": "citizen", "password": "Pass@123"
    }).json()
    off = client.post("/api/auth/register", json={
        "name": "Officer Joshi", "email": "joshi@gov.in", "role": "officer",
        "password": "Pass@123", "officer_key": OFFICER_REGISTRATION_KEY
    }).json()

    land = client.post("/api/lands", json={
        "owner_id": cit["user"]["user_id"], "state": "MH", "district": "Pune",
        "taluka": "Haveli", "village": "V", "survey_number": "88", "area_hectares": 1.1, "land_type": "Agricultural"
    }).json()

    case = client.post("/api/cases", json={
        "citizen_id": cit["user"]["user_id"], "land_id": land["land_id"],
        "category": "other", "description": "Inquiry on gazette publication."
    }).json()

    # Officer adds internal note (is_internal=True)
    internal_evt = client.post(
        f"/api/cases/{case['case_id']}/events",
        json={
            "actor_user_id": off["user"]["user_id"],
            "action": "officer_note_added",
            "comment": "Confidential: Awaiting vigilance clearance from district office.",
            "is_internal": True
        },
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )
    assert internal_evt.status_code == 201

    # Officer viewing events sees internal note
    off_events = client.get(
        f"/api/cases/{case['case_id']}/events",
        headers={"Authorization": f"Bearer {off['access_token']}"}
    ).json()
    assert any(e["is_internal"] is True for e in off_events)

    # Citizen viewing events DOES NOT see internal note
    cit_events = client.get(
        f"/api/cases/{case['case_id']}/events",
        headers={"Authorization": f"Bearer {cit['access_token']}"}
    ).json()
    assert not any(e["is_internal"] is True for e in cit_events)
    assert not any("Confidential" in (e.get("comment") or "") for e in cit_events)


def test_officer_case_queue_and_metrics():
    # Register officer
    off = client.post("/api/auth/register", json={
        "name": "Officer Rao", "email": "rao@gov.in", "role": "officer",
        "password": "Pass@123", "officer_key": OFFICER_REGISTRATION_KEY
    }).json()

    # Register citizen & create multiple cases
    cit = client.post("/api/auth/register", json={
        "name": "Citizen Vikas", "email": "vikas@ex.com", "role": "citizen", "password": "Pass@123"
    }).json()

    land = client.post("/api/lands", json={
        "owner_id": cit["user"]["user_id"], "state": "MH", "district": "Pune",
        "taluka": "Haveli", "village": "V", "survey_number": "10", "area_hectares": 3.0, "land_type": "Agricultural"
    }).json()

    # Case 1: High risk
    client.post("/api/cases", json={
        "citizen_id": cit["user"]["user_id"], "land_id": land["land_id"],
        "category": "compensation_not_received", "description": "High delay dispute",
        "risk_probability": 0.82, "risk_level": "HIGH"
    })

    # Case 2: Normal
    client.post("/api/cases", json={
        "citizen_id": cit["user"]["user_id"], "land_id": land["land_id"],
        "category": "land_measurement", "description": "Boundary check",
        "risk_probability": 0.25, "risk_level": "LOW"
    })

    # Query metrics summary
    metrics_resp = client.get(
        "/api/cases/metrics/summary",
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )
    assert metrics_resp.status_code == 200
    m = metrics_resp.json()
    assert m["total_cases"] == 2
    assert m["new_cases"] == 2
    assert m["high_risk"] == 1

    # Query case table with pagination
    cases_resp = client.get(
        "/api/cases?limit=10&page=1",
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )
    assert cases_resp.status_code == 200
    c_data = cases_resp.json()
    assert c_data["total"] == 2
    assert len(c_data["items"]) == 2
    assert c_data["page"] == 1


def test_citizen_edit_own_land():
    cit = client.post("/api/auth/register", json={
        "name": "Farmer Arjun", "email": "arjun@ex.com", "role": "citizen", "password": "Pass@123"
    }).json()

    land = client.post("/api/lands", json={
        "owner_id": cit["user"]["user_id"], "state": "MH", "district": "Pune",
        "taluka": "Haveli", "village": "Wagholi", "survey_number": "101/A",
        "area_hectares": 1.25, "land_type": "Agricultural"
    }).json()

    # Citizen updates land area and type
    patch_resp = client.patch(
        f"/api/lands/{land['land_id']}",
        json={"area_hectares": 1.75, "land_type": "Mixed"},
        headers={"Authorization": f"Bearer {cit['access_token']}"}
    )
    assert patch_resp.status_code == 200
    assert patch_resp.json()["area_hectares"] == 1.75
    assert patch_resp.json()["land_type"] == "Mixed"

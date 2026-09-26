"""
Bhoomi Sakha - Complete End-to-End Citizen <-> Officer Integration Workflow
Validates the full production lifecycle on the shared MongoDB persistence layer:
Citizen Register -> Add Land -> Assess Risk -> File Grievance -> Case Tracking
Officer Queue -> Open Dossier -> Assign -> Request Document -> Citizen Upload ->
Officer Verify -> Status Transitions (Investigation -> Action -> Resolved) ->
Audit Trail Integrity -> Notification Delivery.
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


def test_full_citizen_to_officer_workflow():
    # ============================================================
    # 1. CITIZEN REGISTRATION & AUTHENTICATION
    # ============================================================
    reg_citizen_resp = client.post("/api/auth/register", json={
        "name": "Eknath Shinde",
        "email": "eknath.shinde@example.com",
        "role": "citizen",
        "password": "CitizenSecret@2026",
        "phone": "+91 9822114477",
        "district": "Pune",
    })
    assert reg_citizen_resp.status_code == 201, reg_citizen_resp.text
    citizen_auth = reg_citizen_resp.json()
    citizen_token = citizen_auth["access_token"]
    citizen_id = citizen_auth["user"]["user_id"]
    assert citizen_id.startswith("USR-")
    assert citizen_auth["user"]["role"] == "citizen"

    # Verify session via /api/auth/me
    me_resp = client.get("/api/auth/me", headers={"Authorization": f"Bearer {citizen_token}"})
    assert me_resp.status_code == 200
    assert me_resp.json()["user_id"] == citizen_id

    # ============================================================
    # 2. CITIZEN REGISTERS LAND PARCEL
    # ============================================================
    land_resp = client.post(
        "/api/lands",
        json={
            "owner_id": citizen_id,
            "state": "Maharashtra",
            "district": "Pune",
            "taluka": "Haveli",
            "village": "Wagholi",
            "survey_number": "142/3B",
            "area_hectares": 2.25,
            "land_type": "Agricultural",
            "acquisition_status": "section_4_notified",
            "project_id": "BF-NH-2024-09",
        },
        headers={"Authorization": f"Bearer {citizen_token}"}
    )
    assert land_resp.status_code == 201, land_resp.text
    land_data = land_resp.json()
    land_id = land_data["land_id"]
    assert land_id.startswith("LND-")
    assert land_data["owner_id"] == citizen_id

    # Verify citizen retrieves their own land holdings
    user_lands_resp = client.get(
        f"/api/users/{citizen_id}/lands",
        headers={"Authorization": f"Bearer {citizen_token}"}
    )
    assert user_lands_resp.status_code == 200
    lands_list = user_lands_resp.json()
    assert len(lands_list) == 1
    assert lands_list[0]["land_id"] == land_id

    # ============================================================
    # 3. CITIZEN CHECKS DELAY RISK (XGBoost ML INFERENCE)
    # ============================================================
    risk_resp = client.post("/predict", json={
        "snapshot_day": 180,
        "project_type": "Highway",
        "land_type": "Agricultural",
        "priority": "High",
        "current_stage": "Compensation",
        "land_area_hectares": 2.25,
        "affected_families": 12,
        "complexity_score": 5.0,
        "days_since_notification": 180,
        "budget_allocated_cr": 45.0,
        "budget_spent_cr": 20.0,
        "compensation_disbursed_pct": 10.0,
        "litigation_cases_count": 1,
        "encroachment_cases_count": 0,
        "survey_completed_pct": 100.0,
        "docs_required": 850,
        "docs_pending": 399,
        "slao_experience_years": 4,
        "administrative_district": "Pune",
    })
    assert risk_resp.status_code == 200
    risk_result = risk_resp.json()
    assert "delay_probability" in risk_result
    assert "risk_level" in risk_result

    # ============================================================
    # 4. CITIZEN FILES FORMAL GRIEVANCE (CASE CREATED)
    # ============================================================
    case_create_resp = client.post(
        "/api/cases",
        json={
            "citizen_id": citizen_id,
            "land_id": land_id,
            "category": "compensation_not_received",
            "priority": "high",
            "description": "Compensation amount not credited into SBI account despite joint measurement 6 months ago.",
            "risk_probability": risk_result["delay_probability"],
            "risk_level": risk_result["risk_level"],
            "project_id": "BF-NH-2024-09",
        },
        headers={"Authorization": f"Bearer {citizen_token}"}
    )
    assert case_create_resp.status_code == 201, case_create_resp.text
    case_data = case_create_resp.json()
    case_id = case_data["case_id"]
    assert case_id.startswith("CAS-")
    assert case_data["status"] == "submitted"
    assert case_data["citizen_id"] == citizen_id
    assert case_data["land_id"] == land_id

    # Verify citizen receives initial confirmation notification
    cit_notifs_resp = client.get(
        f"/api/users/{citizen_id}/notifications",
        headers={"Authorization": f"Bearer {citizen_token}"}
    )
    assert cit_notifs_resp.status_code == 200
    assert any(n["case_id"] == case_id for n in cit_notifs_resp.json())

    # ============================================================
    # 5. OFFICER REGISTRATION & CASE QUEUE INSPECTION
    # ============================================================
    reg_officer_resp = client.post("/api/auth/register", json={
        "name": "Dr. Sunita Deshmukh",
        "email": "sunita.deshmukh@revenue.gov.in",
        "role": "officer",
        "password": "OfficerAuthKey@2026",
        "officer_key": OFFICER_REGISTRATION_KEY,
        "designation": "Special Land Acquisition Officer",
        "district": "Pune",
    })
    assert reg_officer_resp.status_code == 201, reg_officer_resp.text
    officer_auth = reg_officer_resp.json()
    officer_token = officer_auth["access_token"]
    officer_id = officer_auth["user"]["user_id"]
    assert officer_id.startswith("USR-")
    assert officer_auth["user"]["role"] == "officer"

    # Officer checks summary metrics
    summary_resp = client.get(
        "/api/cases/metrics/summary",
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert summary_resp.status_code == 200
    summary = summary_resp.json()
    assert summary["total_cases"] >= 1
    assert summary["new_cases"] >= 1

    # Officer lists case queue
    queue_resp = client.get(
        "/api/cases?status=submitted",
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert queue_resp.status_code == 200
    queue_items = queue_resp.json()["items"]
    assert any(c["case_id"] == case_id for c in queue_items)

    # ============================================================
    # 6. OFFICER OPENS CASE DOSSIER & REVIEWS DATA
    # ============================================================
    case_detail_resp = client.get(
        f"/api/cases/{case_id}",
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert case_detail_resp.status_code == 200
    dossier = case_detail_resp.json()
    assert dossier["citizen_id"] == citizen_id
    assert dossier["land_id"] == land_id
    assert dossier["description"] == case_data["description"]

    # ============================================================
    # 7. OFFICER ASSIGNS CASE TO SELF
    # ============================================================
    assign_resp = client.post(
        f"/api/cases/{case_id}/assign",
        json={
            "actor_user_id": officer_id,
            "assigned_officer_id": officer_id,
            "comment": "Assigned to SLAO Deshmukh for urgent compensation verification.",
        },
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert assign_resp.status_code == 200, assign_resp.text
    assert assign_resp.json()["status"] == "assigned"
    assert assign_resp.json()["assigned_officer_id"] == officer_id

    # ============================================================
    # 8. OFFICER REQUESTS SUPPORTING DOCUMENT FROM CITIZEN
    # ============================================================
    req_doc_resp = client.post(
        f"/api/cases/{case_id}/request-document",
        json={
            "actor_user_id": officer_id,
            "document_type": "7_12_extract",
            "reason": "Verify latest mutation entry and ownership title.",
            "message": "Please attach updated 7/12 extract reflecting Talathi mutation endorsement.",
        },
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert req_doc_resp.status_code == 200, req_doc_resp.text
    assert req_doc_resp.json()["status"] == "documents_required"

    # ============================================================
    # 9. CITIZEN RECEIVES NOTIFICATION & UPLOADS DOCUMENT
    # ============================================================
    cit_notifs_2 = client.get(
        f"/api/users/{citizen_id}/notifications",
        headers={"Authorization": f"Bearer {citizen_token}"}
    ).json()
    doc_req_notif = next(n for n in cit_notifs_2 if n["type"] == "document_required")
    assert doc_req_notif["case_id"] == case_id

    # Citizen marks notification as read
    read_resp = client.post(
        f"/api/notifications/{doc_req_notif['notification_id']}/read",
        headers={"Authorization": f"Bearer {citizen_token}"}
    )
    assert read_resp.status_code == 200
    assert read_resp.json()["read"] is True

    # Citizen uploads document
    upload_resp = client.post(
        f"/api/cases/{case_id}/documents",
        json={
            "uploaded_by": citizen_id,
            "land_id": land_id,
            "document_type": "7_12_extract",
            "file_name": "7_12_mutation_certified_wagholi.pdf",
            "storage_reference": f"storage/cases/{case_id}/7_12_mutation_certified_wagholi.pdf",
        },
        headers={"Authorization": f"Bearer {citizen_token}"}
    )
    assert upload_resp.status_code == 201, upload_resp.text
    doc_data = upload_resp.json()
    doc_id = doc_data["document_id"]
    assert doc_data["verification_status"] == "pending"

    # ============================================================
    # 10. OFFICER VERIFIES DOCUMENT
    # ============================================================
    verify_resp = client.post(
        f"/api/cases/{case_id}/documents/{doc_id}/verify",
        json={
            "actor_user_id": officer_id,
            "verification_status": "verified",
        },
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert verify_resp.status_code == 200, verify_resp.text
    assert verify_resp.json()["verification_status"] == "verified"
    assert verify_resp.json()["verified_by"] == officer_id

    # ============================================================
    # 11. OFFICER PROGRESSES CASE LIFECYCLE (STATE MACHINE)
    # ============================================================
    # documents_required -> under_review
    st_review = client.post(
        f"/api/cases/{case_id}/status",
        json={
            "actor_user_id": officer_id,
            "status": "under_review",
            "comment": "7/12 extract authenticated. Validating compensation award schedule.",
        },
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert st_review.status_code == 200
    assert st_review.json()["status"] == "under_review"

    # under_review -> investigation
    st_inv = client.post(
        f"/api/cases/{case_id}/status",
        json={
            "actor_user_id": officer_id,
            "status": "investigation",
            "comment": "Escalated to sub-divisional accounts officer to check treasury disbursement log.",
        },
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert st_inv.status_code == 200
    assert st_inv.json()["status"] == "investigation"

    # investigation -> action_taken
    st_action = client.post(
        f"/api/cases/{case_id}/status",
        json={
            "actor_user_id": officer_id,
            "status": "action_taken",
            "comment": "Treasury electronic NEFT batch #TXN-998822 generated for INR 18,50,000.",
        },
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert st_action.status_code == 200
    assert st_action.json()["status"] == "action_taken"

    # action_taken -> resolved
    st_resolved = client.post(
        f"/api/cases/{case_id}/status",
        json={
            "actor_user_id": officer_id,
            "status": "resolved",
            "comment": "Full compensation credited into SBI account. Case successfully resolved.",
        },
        headers={"Authorization": f"Bearer {officer_token}"}
    )
    assert st_resolved.status_code == 200
    assert st_resolved.json()["status"] == "resolved"
    assert st_resolved.json()["resolved_at"] is not None

    # ============================================================
    # 12. CITIZEN RECEIVES FINAL RESOLUTION & CHECKS AUDIT TRAIL
    # ============================================================
    final_case = client.get(
        f"/api/cases/{case_id}",
        headers={"Authorization": f"Bearer {citizen_token}"}
    ).json()
    assert final_case["status"] == "resolved"

    cit_notifs_final = client.get(
        f"/api/users/{citizen_id}/notifications",
        headers={"Authorization": f"Bearer {citizen_token}"}
    ).json()
    assert any(n["type"] == "case_resolved" for n in cit_notifs_final)

    # Verify append-only audit trail
    events_resp = client.get(
        f"/api/cases/{case_id}/events",
        headers={"Authorization": f"Bearer {citizen_token}"}
    )
    assert events_resp.status_code == 200
    events = events_resp.json()
    actions = [e["action"] for e in events]
    assert "case_created" in actions
    assert "case_assigned" in actions
    assert "document_requested" in actions
    assert "document_uploaded" in actions
    assert "document_verified" in actions
    assert "status_changed" in actions

"""
Bhoomi Sakha - Case Management & Shared Persistence Test Suite
Verifies all 15 Phase 1 workflow scenarios and backward compatibility.
"""

import pytest
from fastapi.testclient import TestClient
from src.api import app
from src.database import reset_database_for_testing, init_indexes

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_clean_db():
    """Reset the database state and recreate indexes before each test run."""
    reset_database_for_testing()


# ============================================================
# 1. CREATE CITIZEN
# ============================================================
def test_01_create_citizen():
    response = client.post("/api/users", json={
        "name": "Ramesh Kumar Patil",
        "email": "ramesh.patil@example.com",
        "role": "citizen",
        "phone": "+91 9820123456",
        "preferred_language": "mr",
        "district": "Pune"
    })
    assert response.status_code == 201
    data = response.json()
    assert data["role"] == "citizen"
    assert data["name"] == "Ramesh Kumar Patil"
    assert data["email"] == "ramesh.patil@example.com"
    assert "user_id" in data
    assert data["user_id"].startswith("USR-")


# ============================================================
# 2. CREATE OFFICER
# ============================================================
def test_02_create_officer():
    response = client.post("/api/users", json={
        "name": "Dr. Sunita Deshmukh, IAS",
        "email": "sunita.deshmukh@gov.in",
        "role": "officer",
        "phone": "+91 9422001122",
        "preferred_language": "en",
        "department": "Revenue & Land Reforms",
        "designation": "Special Land Acquisition Officer",
        "district": "Pune",
        "authority": "MADC / MIDC"
    })
    assert response.status_code == 201
    data = response.json()
    assert data["role"] == "officer"
    assert data["name"] == "Dr. Sunita Deshmukh, IAS"
    assert data["designation"] == "Special Land Acquisition Officer"


# ============================================================
# 3. CREATE LAND RECORD
# ============================================================
def test_03_create_land_record():
    # Create citizen owner first
    u_resp = client.post("/api/users", json={
        "name": "Balu Shinde",
        "email": "balu.shinde@example.com",
        "role": "citizen",
    })
    owner_id = u_resp.json()["user_id"]

    # Register land record
    response = client.post("/api/lands", json={
        "owner_id": owner_id,
        "state": "Maharashtra",
        "district": "Pune",
        "taluka": "Haveli",
        "village": "Wagholi",
        "survey_number": "142/3B",
        "area_hectares": 2.75,
        "land_type": "Agricultural",
        "acquisition_status": "section_4_notified",
        "project_id": "PRJ-PUNE-RING-01"
    })
    assert response.status_code == 201
    data = response.json()
    assert data["owner_id"] == owner_id
    assert data["survey_number"] == "142/3B"
    assert data["area_hectares"] == 2.75
    assert data["land_id"].startswith("LND-")

    # Verify query by user
    user_lands = client.get(f"/api/users/{owner_id}/lands")
    assert user_lands.status_code == 200
    assert len(user_lands.json()) == 1


# ============================================================
# 4. CREATE CASE
# ============================================================
def test_04_create_case():
    # Setup user & land
    u_resp = client.post("/api/users", json={
        "name": "Kisan Rao",
        "email": "kisan.rao@example.com",
        "role": "citizen",
    })
    citizen_id = u_resp.json()["user_id"]

    l_resp = client.post("/api/lands", json={
        "owner_id": citizen_id,
        "state": "Maharashtra",
        "district": "Solapur",
        "taluka": "Barshi",
        "village": "Khadkal",
        "survey_number": "89/1",
        "area_hectares": 1.5,
        "land_type": "Agricultural",
    })
    land_id = l_resp.json()["land_id"]

    # Create Case
    response = client.post("/api/cases", json={
        "citizen_id": citizen_id,
        "land_id": land_id,
        "project_id": "PRJ-SOLAPUR-HWY",
        "category": "compensation_not_received",
        "description": "Compensation amount determined in award has not been disbursed for over 180 days.",
        "priority": "high",
        "risk_probability": 0.78,
        "risk_level": "HIGH"
    })
    assert response.status_code == 201
    data = response.json()
    assert data["status"] == "submitted"
    assert data["citizen_id"] == citizen_id
    assert data["land_id"] == land_id
    assert data["category"] == "compensation_not_received"
    assert data["priority"] == "high"
    assert data["risk_probability"] == 0.78
    assert data["case_id"].startswith("CAS-")

    # Verify automatic audit event creation
    case_id = data["case_id"]
    events_resp = client.get(f"/api/cases/{case_id}/events")
    assert events_resp.status_code == 200
    events = events_resp.json()
    assert len(events) >= 1
    assert events[0]["action"] == "case_created"

    # Verify automatic notification for citizen
    notif_resp = client.get(f"/api/users/{citizen_id}/notifications")
    assert notif_resp.status_code == 200
    notifs = notif_resp.json()
    assert len(notifs) >= 1
    assert notifs[0]["case_id"] == case_id


# ============================================================
# 5. RETRIEVE CASE
# ============================================================
def test_05_retrieve_case():
    # Setup
    u = client.post("/api/users", json={"name": "A", "email": "a@ex.com", "role": "citizen"}).json()
    l = client.post("/api/lands", json={"owner_id": u["user_id"], "state": "MH", "district": "Nashik", "taluka": "Igatpuri", "village": "V", "survey_number": "1", "area_hectares": 1.0, "land_type": "Mixed"}).json()
    c = client.post("/api/cases", json={"citizen_id": u["user_id"], "land_id": l["land_id"], "category": "land_measurement", "description": "Border disputed after survey."}).json()

    # Retrieve single case
    resp = client.get(f"/api/cases/{c['case_id']}")
    assert resp.status_code == 200
    assert resp.json()["case_id"] == c["case_id"]
    assert resp.json()["category"] == "land_measurement"

    # Retrieve user's cases
    user_cases_resp = client.get(f"/api/users/{u['user_id']}/cases")
    assert user_cases_resp.status_code == 200
    assert len(user_cases_resp.json()) == 1


# ============================================================
# 6. ASSIGN CASE
# ============================================================
def test_06_assign_case():
    # Setup citizen, officer, land, case
    citizen = client.post("/api/users", json={"name": "Citizen C", "email": "c@ex.com", "role": "citizen"}).json()
    officer = client.post("/api/users", json={"name": "Officer O", "email": "o@gov.in", "role": "officer"}).json()
    admin = client.post("/api/users", json={"name": "Collector Office", "email": "admin@gov.in", "role": "officer"}).json()
    land = client.post("/api/lands", json={"owner_id": citizen["user_id"], "state": "MH", "district": "Thane", "taluka": "Kalyan", "village": "Dombivli", "survey_number": "55", "area_hectares": 0.8, "land_type": "Commercial"}).json()
    case = client.post("/api/cases", json={"citizen_id": citizen["user_id"], "land_id": land["land_id"], "category": "notice_issue", "description": "Section 4 notice was delivered to wrong address."}).json()

    # Assign case by officer/admin
    assign_resp = client.post(f"/api/cases/{case['case_id']}/assign", json={
        "assigned_officer_id": officer["user_id"],
        "actor_user_id": admin["user_id"],
        "comment": "Assigned to Kalyan regional officer for verification."
    })
    assert assign_resp.status_code == 200
    updated = assign_resp.json()
    assert updated["status"] == "assigned"
    assert updated["assigned_officer_id"] == officer["user_id"]

    # Verify officer's cases list
    off_cases = client.get(f"/api/officers/{officer['user_id']}/cases")
    assert off_cases.status_code == 200
    assert len(off_cases.json()) == 1
    assert off_cases.json()[0]["case_id"] == case["case_id"]


# ============================================================
# 7. CHANGE CASE STATUS
# ============================================================
def test_07_change_case_status():
    citizen = client.post("/api/users", json={"name": "Cit", "email": "cit@ex.com", "role": "citizen"}).json()
    officer = client.post("/api/users", json={"name": "Off", "email": "off@gov.in", "role": "officer"}).json()
    land = client.post("/api/lands", json={"owner_id": citizen["user_id"], "state": "MH", "district": "Pune", "taluka": "Haveli", "village": "V", "survey_number": "12", "area_hectares": 1.2, "land_type": "Agricultural"}).json()
    case = client.post("/api/cases", json={"citizen_id": citizen["user_id"], "land_id": land["land_id"], "category": "documentation", "description": "Need NOC correction."}).json()

    # Change status to under_review
    resp1 = client.post(f"/api/cases/{case['case_id']}/status", json={
        "status": "under_review",
        "actor_user_id": officer["user_id"],
        "comment": "Reviewing attached mutation extracts."
    })
    assert resp1.status_code == 200
    assert resp1.json()["status"] == "under_review"

    # Change status to resolved
    resp2 = client.post(f"/api/cases/{case['case_id']}/status", json={
        "status": "resolved",
        "actor_user_id": officer["user_id"],
        "comment": "NOC corrected and reissued."
    })
    assert resp2.status_code == 200
    assert resp2.json()["status"] == "resolved"
    assert resp2.json()["resolved_at"] is not None


# ============================================================
# 8. CREATE CASE EVENT (AUDIT TRAIL)
# ============================================================
def test_08_create_case_event():
    citizen = client.post("/api/users", json={"name": "C", "email": "c1@ex.com", "role": "citizen"}).json()
    officer = client.post("/api/users", json={"name": "O", "email": "o1@gov.in", "role": "officer"}).json()
    land = client.post("/api/lands", json={"owner_id": citizen["user_id"], "state": "MH", "district": "Pune", "taluka": "Haveli", "village": "V", "survey_number": "12", "area_hectares": 1.2, "land_type": "Agricultural"}).json()
    case = client.post("/api/cases", json={"citizen_id": citizen["user_id"], "land_id": land["land_id"], "category": "other", "description": "General enquiry."}).json()

    # Append custom event / note
    evt_resp = client.post(f"/api/cases/{case['case_id']}/events", json={
        "actor_user_id": officer["user_id"],
        "action": "officer_note_added",
        "comment": "Contacted citizen via phone to verify survey boundary.",
        "metadata": {"call_duration_seconds": 180}
    })
    assert evt_resp.status_code == 201
    evt = evt_resp.json()
    assert evt["action"] == "officer_note_added"
    assert evt["event_id"].startswith("EVT-")
    assert evt["metadata"]["call_duration_seconds"] == 180

    # Retrieve all events for audit trail
    all_events = client.get(f"/api/cases/{case['case_id']}/events").json()
    actions = [e["action"] for e in all_events]
    assert "case_created" in actions
    assert "officer_note_added" in actions


# ============================================================
# 9. CREATE DOCUMENT METADATA
# ============================================================
def test_09_create_document_metadata():
    citizen = client.post("/api/users", json={"name": "C", "email": "c2@ex.com", "role": "citizen"}).json()
    land = client.post("/api/lands", json={"owner_id": citizen["user_id"], "state": "MH", "district": "Pune", "taluka": "Haveli", "village": "V", "survey_number": "12", "area_hectares": 1.2, "land_type": "Agricultural"}).json()
    case = client.post("/api/cases", json={"citizen_id": citizen["user_id"], "land_id": land["land_id"], "category": "compensation_dispute", "description": "Dispute on compensation rate."}).json()

    doc_resp = client.post(f"/api/cases/{case['case_id']}/documents", json={
        "uploaded_by": citizen["user_id"],
        "document_type": "7_12_extract",
        "file_name": "7_12_extract_survey_12.pdf",
        "storage_reference": "storage/cases/CAS-001/7_12_extract_survey_12.pdf"
    })
    assert doc_resp.status_code == 201
    doc = doc_resp.json()
    assert doc["document_id"].startswith("DOC-")
    assert doc["verification_status"] == "pending"
    assert doc["document_type"] == "7_12_extract"

    # List documents
    docs_list = client.get(f"/api/cases/{case['case_id']}/documents").json()
    assert len(docs_list) == 1
    assert docs_list[0]["file_name"] == "7_12_extract_survey_12.pdf"


# ============================================================
# 10. CREATE / RETRIEVE NOTIFICATION
# ============================================================
def test_10_create_notification():
    citizen = client.post("/api/users", json={"name": "C", "email": "c3@ex.com", "role": "citizen"}).json()
    land = client.post("/api/lands", json={"owner_id": citizen["user_id"], "state": "MH", "district": "Pune", "taluka": "Haveli", "village": "V", "survey_number": "12", "area_hectares": 1.2, "land_type": "Agricultural"}).json()
    case = client.post("/api/cases", json={"citizen_id": citizen["user_id"], "land_id": land["land_id"], "category": "possession", "description": "Possession taken prematurely."}).json()

    notifs = client.get(f"/api/users/{citizen['user_id']}/notifications").json()
    assert len(notifs) >= 1
    assert notifs[0]["read"] is False
    assert notifs[0]["notification_id"].startswith("NTF-")


# ============================================================
# 11. MARK NOTIFICATION READ
# ============================================================
def test_11_mark_notification_read():
    citizen = client.post("/api/users", json={"name": "C", "email": "c4@ex.com", "role": "citizen"}).json()
    land = client.post("/api/lands", json={"owner_id": citizen["user_id"], "state": "MH", "district": "Pune", "taluka": "Haveli", "village": "V", "survey_number": "12", "area_hectares": 1.2, "land_type": "Agricultural"}).json()
    client.post("/api/cases", json={"citizen_id": citizen["user_id"], "land_id": land["land_id"], "category": "notice_issue", "description": "Notice missing."})

    notifs = client.get(f"/api/users/{citizen['user_id']}/notifications").json()
    notif_id = notifs[0]["notification_id"]

    read_resp = client.post(f"/api/notifications/{notif_id}/read")
    assert read_resp.status_code == 200
    assert read_resp.json()["read"] is True
    assert read_resp.json()["read_at"] is not None


# ============================================================
# 12. INVALID ROLE VALIDATION
# ============================================================
def test_12_invalid_role():
    response = client.post("/api/users", json={
        "name": "Invalid User",
        "email": "invalid@example.com",
        "role": "hacker_role"
    })
    assert response.status_code == 422


# ============================================================
# 13. INVALID CASE STATUS VALIDATION
# ============================================================
def test_13_invalid_case_status():
    citizen = client.post("/api/users", json={"name": "C", "email": "c5@ex.com", "role": "citizen"}).json()
    officer = client.post("/api/users", json={"name": "O", "email": "o5@gov.in", "role": "officer"}).json()
    land = client.post("/api/lands", json={"owner_id": citizen["user_id"], "state": "MH", "district": "P", "taluka": "H", "village": "V", "survey_number": "1", "area_hectares": 1.0, "land_type": "Mixed"}).json()
    case = client.post("/api/cases", json={"citizen_id": citizen["user_id"], "land_id": land["land_id"], "category": "other", "description": "Details."}).json()

    response = client.post(f"/api/cases/{case['case_id']}/status", json={
        "status": "magically_completed",
        "actor_user_id": officer["user_id"]
    })
    assert response.status_code == 422


# ============================================================
# 14. INVALID COMPLAINT CATEGORY VALIDATION
# ============================================================
def test_14_invalid_complaint_category():
    citizen = client.post("/api/users", json={"name": "C", "email": "c6@ex.com", "role": "citizen"}).json()
    land = client.post("/api/lands", json={"owner_id": citizen["user_id"], "state": "MH", "district": "P", "taluka": "H", "village": "V", "survey_number": "1", "area_hectares": 1.0, "land_type": "Mixed"}).json()

    response = client.post("/api/cases", json={
        "citizen_id": citizen["user_id"],
        "land_id": land["land_id"],
        "category": "not_a_valid_category_at_all",
        "description": "Attempting invalid category."
    })
    assert response.status_code == 422


# ============================================================
# 15. UNAUTHORIZED CITIZEN ATTEMPTING OFFICER ACTION
# ============================================================
def test_15_unauthorized_citizen_attempting_officer_action():
    citizen = client.post("/api/users", json={"name": "Farmer Ram", "email": "ram@ex.com", "role": "citizen"}).json()
    officer = client.post("/api/users", json={"name": "Officer Patel", "email": "patel@gov.in", "role": "officer"}).json()
    land = client.post("/api/lands", json={"owner_id": citizen["user_id"], "state": "MH", "district": "P", "taluka": "H", "village": "V", "survey_number": "1", "area_hectares": 1.0, "land_type": "Mixed"}).json()
    case = client.post("/api/cases", json={"citizen_id": citizen["user_id"], "land_id": land["land_id"], "category": "other", "description": "Details."}).json()

    # 1. Citizen attempts to assign case to officer -> Expect 403 Forbidden
    assign_attempt = client.post(f"/api/cases/{case['case_id']}/assign", json={
        "assigned_officer_id": officer["user_id"],
        "actor_user_id": citizen["user_id"],  # Citizen trying to assign!
        "comment": "I assign this to Officer Patel myself."
    })
    assert assign_attempt.status_code == 403
    assert "Forbidden" in assign_attempt.json()["detail"]

    # 2. Citizen attempts to change status to resolved -> Expect 403 Forbidden
    status_attempt = client.post(f"/api/cases/{case['case_id']}/status", json={
        "status": "resolved",
        "actor_user_id": citizen["user_id"],  # Citizen trying to update status!
        "comment": "I resolve my own case."
    })
    assert status_attempt.status_code == 403
    assert "Forbidden" in status_attempt.json()["detail"]


# ============================================================
# BACKWARD COMPATIBILITY VERIFICATION
# ============================================================
def test_backward_compatibility_health():
    resp = client.get("/health")
    assert resp.status_code == 200
    assert resp.json()["status"] == "healthy"
    assert resp.json()["model_loaded"] is True


def test_backward_compatibility_meta():
    resp = client.get("/meta")
    assert resp.status_code == 200
    data = resp.json()
    assert "project_types" in data
    assert "land_types" in data
    assert "current_stages" in data
    assert "model" in data


def test_backward_compatibility_predict():
    resp = client.post("/predict", json={
        "land_area_hectares": 12.5,
        "total_parcels": 24,
        "parcels_acquired": 10,
        "documents_required": 100,
        "documents_verified": 60,
    })
    assert resp.status_code == 200
    data = resp.json()
    assert "delay_probability" in data
    assert "risk_level" in data
    assert 0.0 <= data["delay_probability"] <= 1.0

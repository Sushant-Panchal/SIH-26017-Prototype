"""
Bhoomi Sakha - Phase 7.1 Regression Test Suite
Validates critical live-demo stabilization fixes:
1. Officer case list retrieval with legacy categories, priorities, and ISO timestamps.
2. Case-insensitive risk_level filtering in officer case queue.
3. Citizen case retrieval and strict ownership isolation (Citizen A cannot access Citizen B's cases).
4. Legacy case events and documents schema resilience (field aliasing & deserialization).
5. Legacy notifications schema resilience (recipient_id -> user_id, is_read -> read).
"""

import asyncio
from datetime import datetime, timezone
import pytest
from fastapi.testclient import TestClient

from src.api import app
from src.database import reset_database_for_testing, get_database
from src.auth import OFFICER_REGISTRATION_KEY

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_clean_db():
    reset_database_for_testing()
    yield


# ============================================================
# 1. OFFICER CASE LIST WITH LEGACY MONGO DATA
# ============================================================

def test_officer_case_list_with_legacy_and_alias_data():
    """
    Verifies that MongoDB records containing legacy categories,
    priorities, and ISO timestamps serialize cleanly without 500 ValidationError.
    """
    db = get_database()
    
    # Register officer
    officer_resp = client.post("/api/auth/register", json={
        "name": "Officer Sharma",
        "email": "sharma_phase7@gov.in",
        "role": "officer",
        "password": "Password@123",
        "officer_key": OFFICER_REGISTRATION_KEY,
    })
    assert officer_resp.status_code == 201, f"Officer register failed: {officer_resp.text}"
    officer_token = officer_resp.json()["access_token"]
    headers = {"Authorization": f"Bearer {officer_token}"}

    # Insert 4 legacy demo cases directly into MongoDB using async driver
    legacy_cases = [
        {
            "case_id": "CAS-26017-001",
            "citizen_id": "USR-CITIZEN-001",
            "land_id": "LND-001",
            "project_id": "BF-NH-2024-09",
            "category": "measurement_dispute",  # legacy category alias
            "description": "Boundary pillar displacement along chainage 142.",
            "status": "new",
            "priority": "high",
            "risk_level": "CRITICAL",
            "risk_probability": 0.84,
            "created_at": "2024-09-01T10:00:00Z",
            "updated_at": "2024-09-01T10:00:00Z",
        },
        {
            "case_id": "CAS-26017-002",
            "citizen_id": "USR-CITIZEN-002",
            "land_id": "LND-002",
            "project_id": "BF-NH-2024-09",
            "category": "valuation_objection",  # legacy category alias
            "description": "Commercial rate discrepancy under RFCTLARR Section 26.",
            "status": "under_review",
            "priority": "medium",  # legacy priority
            "risk_level": "HIGH",
            "risk_probability": 0.72,
            "created_at": "2024-09-02T11:00:00Z",
            "updated_at": "2024-09-02T11:00:00Z",
        },
        {
            "case_id": "CAS-26017-003",
            "citizen_id": "USR-CITIZEN-003",
            "land_id": "LND-003",
            "project_id": "BF-RL-2023-14",
            "category": "compensation_delay",  # legacy category alias
            "description": "DBT award credit pending past statutory 30-day window.",
            "status": "escalated",
            "priority": "critical",
            "risk_level": "HIGH",
            "risk_probability": 0.68,
            "created_at": "2024-09-03T12:00:00Z",
            "updated_at": "2024-09-03T12:00:00Z",
        },
        {
            "case_id": "CAS-26017-004",
            "citizen_id": "USR-CITIZEN-004",
            "land_id": "LND-004",
            "project_id": "BF-EN-2024-03",
            "category": "statutory_notice",  # legacy category alias
            "description": "Objection regarding joint survey notice timeline.",
            "status": "resolved",
            "priority": "low",  # legacy priority
            "risk_level": "LOW",
            "risk_probability": 0.25,
            "created_at": "2024-09-04T09:00:00Z",
            "updated_at": "2024-09-04T09:00:00Z",
        },
    ]
    asyncio.run(db["cases"].insert_many(legacy_cases))

    # 1. Fetch full case queue without filters
    resp = client.get("/api/cases", headers=headers)
    assert resp.status_code == 200, f"Expected 200, got {resp.status_code}: {resp.text}"
    data = resp.json()
    assert data["total"] == 4
    assert len(data["items"]) == 4

    # Verify categories and priorities were cleanly normalized
    case_map = {c["case_id"]: c for c in data["items"]}
    assert case_map["CAS-26017-001"]["category"] in ["land_measurement", "measurement_dispute", "boundary_demarcation"]
    assert case_map["CAS-26017-002"]["priority"] in ["normal", "medium"]
    assert case_map["CAS-26017-004"]["priority"] in ["normal", "low"]

    # 2. Test case-insensitive risk_level filtering
    crit_resp = client.get("/api/cases?risk_level=critical", headers=headers)
    assert crit_resp.status_code == 200
    crit_data = crit_resp.json()
    assert crit_data["total"] == 1
    assert crit_data["items"][0]["case_id"] == "CAS-26017-001"

    high_resp = client.get("/api/cases?risk_level=HIGH", headers=headers)
    assert high_resp.status_code == 200
    assert high_resp.json()["total"] == 2


# ============================================================
# 2. CITIZEN CASE RETRIEVAL & OWNERSHIP ISOLATION
# ============================================================

def test_citizen_case_retrieval_and_ownership_isolation():
    """
    Verifies that:
    1. Citizen A sees only Citizen A's cases.
    2. Citizen B sees only Citizen B's cases.
    3. Citizen A cannot access Citizen B's cases (403 Forbidden).
    """
    db = get_database()

    # Register Citizen A
    cit_a = client.post("/api/auth/register", json={
        "name": "Citizen A",
        "email": "citizen_a@example.com",
        "role": "citizen",
        "password": "Password@123",
    }).json()
    token_a = cit_a["access_token"]
    user_id_a = cit_a["user"]["user_id"]

    # Register Citizen B
    cit_b = client.post("/api/auth/register", json={
        "name": "Citizen B",
        "email": "citizen_b@example.com",
        "role": "citizen",
        "password": "Password@123",
    }).json()
    token_b = cit_b["access_token"]
    user_id_b = cit_b["user"]["user_id"]

    # Insert a case for Citizen A
    asyncio.run(db["cases"].insert_one({
        "case_id": "CAS-CIT-A-001",
        "citizen_id": user_id_a,
        "land_id": "LND-A-001",
        "category": "compensation_dispute",
        "description": "Compensation amount not received as per gazette.",
        "status": "new",
        "priority": "normal",
        "risk_level": "HIGH",
        "created_at": datetime.now(timezone.utc).isoformat(),
        "updated_at": datetime.now(timezone.utc).isoformat(),
    }))

    # Insert a case for Citizen B
    asyncio.run(db["cases"].insert_one({
        "case_id": "CAS-CIT-B-001",
        "citizen_id": user_id_b,
        "land_id": "LND-B-001",
        "category": "title_ownership_claim",
        "description": "Ancestral partition document dispute.",
        "status": "under_review",
        "priority": "high",
        "risk_level": "CRITICAL",
        "created_at": datetime.now(timezone.utc).isoformat(),
        "updated_at": datetime.now(timezone.utc).isoformat(),
    }))

    # 1. Citizen A requests own cases
    resp_a = client.get(f"/api/users/{user_id_a}/cases", headers={"Authorization": f"Bearer {token_a}"})
    assert resp_a.status_code == 200
    cases_a = resp_a.json()
    assert len(cases_a) == 1
    assert cases_a[0]["case_id"] == "CAS-CIT-A-001"
    assert cases_a[0]["citizen_id"] == user_id_a

    # 2. Citizen B requests own cases
    resp_b = client.get(f"/api/users/{user_id_b}/cases", headers={"Authorization": f"Bearer {token_b}"})
    assert resp_b.status_code == 200
    cases_b = resp_b.json()
    assert len(cases_b) == 1
    assert cases_b[0]["case_id"] == "CAS-CIT-B-001"
    assert cases_b[0]["citizen_id"] == user_id_b

    # 3. Citizen A attempts to request Citizen B's cases -> 403 Forbidden
    cross_resp = client.get(f"/api/users/{user_id_b}/cases", headers={"Authorization": f"Bearer {token_a}"})
    assert cross_resp.status_code == 403, f"Expected 403, got {cross_resp.status_code}"
    assert "Forbidden" in cross_resp.json()["detail"] or "access" in cross_resp.json()["detail"].lower()


# ============================================================
# 3. LEGACY EVENTS & DOCUMENTS MAPPING
# ============================================================

def test_case_events_and_documents_legacy_mapping():
    """
    Verifies that legacy event and document field names are normalized:
    - Case Events: actor_id -> actor_user_id, notes -> comment, from_status -> old_status
    - Case Documents: created_at -> uploaded_at
    """
    db = get_database()

    officer_resp = client.post("/api/auth/register", json={
        "name": "Officer Deshmukh",
        "email": "deshmukh_events@gov.in",
        "role": "officer",
        "password": "Password@123",
        "officer_key": OFFICER_REGISTRATION_KEY,
    })
    assert officer_resp.status_code == 201
    headers = {"Authorization": f"Bearer {officer_resp.json()['access_token']}"}

    case_id = "CAS-LEGACY-EVENTS-01"
    asyncio.run(db["cases"].insert_one({
        "case_id": case_id,
        "citizen_id": "USR-CITIZEN-001",
        "land_id": "LND-001",
        "category": "compensation_dispute",
        "description": "Testing legacy event serialization.",
        "status": "under_review",
        "priority": "normal",
        "created_at": datetime.now(timezone.utc).isoformat(),
        "updated_at": datetime.now(timezone.utc).isoformat(),
    }))

    # Insert raw legacy event
    asyncio.run(db["case_events"].insert_one({
        "event_id": "EVT-001",
        "case_id": case_id,
        "actor_id": "USR-OFFICER-99",  # legacy field name
        "event_type": "status_changed",  # legacy field name
        "from_status": "new",  # legacy field name
        "to_status": "under_review",  # legacy field name
        "notes": "Case assigned for field inspection.",  # legacy field name
        "timestamp": "2024-09-10T14:30:00Z",
    }))

    # Insert raw legacy document
    asyncio.run(db["case_documents"].insert_one({
        "doc_id": "DOC-001",
        "case_id": case_id,
        "uploaded_by": "USR-CITIZEN-001",
        "file_name": "7_12_extract.pdf",
        "file_type": "application/pdf",
        "doc_type": "land_record",
        "status": "pending",
        "created_at": "2024-09-08T10:00:00Z",  # legacy field name for uploaded_at
    }))

    # Fetch events
    evt_resp = client.get(f"/api/cases/{case_id}/events", headers=headers)
    assert evt_resp.status_code == 200
    events = evt_resp.json()
    assert len(events) == 1
    assert events[0]["actor_user_id"] == "USR-OFFICER-99"
    assert events[0]["action"] == "status_changed"
    assert events[0]["comment"] == "Case assigned for field inspection."
    assert events[0]["old_status"] == "new"
    assert events[0]["new_status"] == "under_review"

    # Fetch documents
    doc_resp = client.get(f"/api/cases/{case_id}/documents", headers=headers)
    assert doc_resp.status_code == 200
    docs = doc_resp.json()
    assert len(docs) == 1
    assert docs[0]["document_id"] == "DOC-001"
    assert docs[0]["uploaded_at"] is not None


# ============================================================
# 4. LEGACY NOTIFICATIONS MAPPING
# ============================================================

def test_legacy_notifications_mapping():
    """
    Verifies that legacy notification records (recipient_id, is_read)
    properly serialize into NotificationResponse (user_id, read).
    """
    db = get_database()

    cit = client.post("/api/auth/register", json={
        "name": "Citizen Notif",
        "email": "notif_reg@example.com",
        "role": "citizen",
        "password": "Password@123",
    }).json()
    user_id = cit["user"]["user_id"]
    token = cit["access_token"]

    asyncio.run(db["notifications"].insert_one({
        "notification_id": "NTF-LEGACY-001",
        "recipient_id": user_id,  # legacy field name
        "is_read": False,  # legacy field name
        "title": "Case Assigned",
        "message": "Your grievance has been assigned to CALA officer.",
        "type": "case_assigned",
        "created_at": "2024-09-12T08:00:00Z",
    }))

    resp = client.get(f"/api/users/{user_id}/notifications", headers={"Authorization": f"Bearer {token}"})
    assert resp.status_code == 200
    notifs = resp.json()
    assert len(notifs) == 1
    assert notifs[0]["user_id"] == user_id
    assert notifs[0]["read"] is False
    assert notifs[0]["title"] == "Case Assigned"

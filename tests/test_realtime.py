"""
Bhoomi Sakha - Real-Time Case & Notification Updates Test Suite
Verifies authenticated SSE stream connections, unauthenticated rejection,
citizen privacy isolation, officer authorization, internal note privacy,
event publishing across case lifecycle, and offline MongoDB durability.
"""

import asyncio
import json
import pytest
from fastapi.testclient import TestClient

from src.api import app
from src.database import reset_database_for_testing
from src.auth import OFFICER_REGISTRATION_KEY, create_access_token
from src.realtime import realtime_hub, RealtimeHub
from src.storage import MockStorageProvider, set_storage_provider_for_testing

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_environment():
    """Reset database, mock storage, and clear active realtime connections."""
    reset_database_for_testing()
    mock_provider = MockStorageProvider()
    set_storage_provider_for_testing(mock_provider)
    realtime_hub.clear()
    yield
    realtime_hub.clear()
    set_storage_provider_for_testing(None)


def create_user_and_token(name: str, email: str, role: str = "citizen", designation: str = None):
    payload = {
        "name": name,
        "email": email,
        "role": role,
        "password": "StrongPassword@123",
    }
    if role == "officer":
        payload["officer_key"] = OFFICER_REGISTRATION_KEY
        if designation:
            payload["designation"] = designation
    resp = client.post("/api/auth/register", json=payload)
    assert resp.status_code == 201, resp.text
    return resp.json()


def create_test_case(citizen_id: str, officer_id: str = None):
    # Register land
    land_resp = client.post("/api/lands", json={
        "owner_id": citizen_id,
        "state": "Maharashtra",
        "district": "Pune",
        "taluka": "Haveli",
        "village": "Wagholi",
        "survey_number": "105/B",
        "area_hectares": 3.0,
        "land_type": "Agricultural",
    })
    assert land_resp.status_code == 201
    land_id = land_resp.json()["land_id"]

    # Register case
    case_resp = client.post("/api/cases", json={
        "citizen_id": citizen_id,
        "land_id": land_id,
        "category": "compensation_not_received",
        "description": "Compensation disbursement delayed by 4 months.",
    })
    assert case_resp.status_code == 201
    case_data = case_resp.json()

    if officer_id:
        client.post(
            f"/api/cases/{case_data['case_id']}/assign",
            json={"assigned_officer_id": officer_id, "actor_user_id": officer_id},
        )
        case_data["assigned_officer_id"] = officer_id

    return case_data


# ============================================================
# 1. AUTHENTICATED REAL-TIME CONNECTION & REJECTION
# ============================================================

def test_unauthenticated_connection_rejected():
    """Unauthenticated client attempts connection -> 401 Unauthorized."""
    resp = client.get("/api/realtime/events")
    assert resp.status_code == 401
    assert "authentication required" in resp.json()["detail"].lower()


def test_invalid_token_connection_rejected():
    """Client with forged/corrupted token -> 401 Unauthorized."""
    resp = client.get("/api/realtime/events?token=invalid.jwt.token")
    assert resp.status_code == 401


def test_status_endpoint_auth_and_metrics():
    """Status endpoint reports active connections and requires auth."""
    unauth = client.get("/api/realtime/status")
    assert unauth.status_code == 401

    cit = create_user_and_token("Cit Status", "cit_stat@example.com")
    auth_resp = client.get(
        "/api/realtime/status",
        headers={"Authorization": f"Bearer {cit['access_token']}"}
    )
    assert auth_resp.status_code == 200
    data = auth_resp.json()
    assert data["status"] == "active"
    assert "total_connections" in data
    assert "user_connections" in data


# ============================================================
# 2. TARGETED EVENT DISPATCH & HUB ISOLATION (UNIT LEVEL)
# ============================================================

@pytest.mark.anyio
async def test_realtime_hub_targeted_delivery():
    """Directly verifies queue targeting and recipient filtering."""
    hub = RealtimeHub()
    q_cit_a, conn_a = await hub.register("CIT-A", "citizen")
    q_cit_b, conn_b = await hub.register("CIT-B", "citizen")
    q_officer, conn_o = await hub.register("OFF-1", "officer")

    # 1. Publish event targeted exclusively to CIT-A
    await hub.publish_event(
        event_type="document_requested",
        data={"message": "Please upload 7/12"},
        target_user_ids=["CIT-A"],
    )

    assert not q_cit_a.empty()
    msg_a = q_cit_a.get_nowait()
    assert "event: document_requested" in msg_a
    assert "Please upload 7/12" in msg_a

    # CIT-B and Officer should receive NOTHING
    assert q_cit_b.empty()
    assert q_officer.empty()

    # 2. Publish internal officer note: only officer receives it!
    await hub.publish_event(
        event_type="officer_note_added",
        data={"note": "Confidential revenue inquiry"},
        is_internal=True,
    )

    assert not q_officer.empty()
    msg_o = q_officer.get_nowait()
    assert "officer_note_added" in msg_o
    assert "Confidential revenue inquiry" in msg_o

    # Citizens must NOT receive internal notes!
    assert q_cit_a.empty()
    assert q_cit_b.empty()

    # Clean unregister
    await hub.unregister("CIT-A", q_cit_a, conn_a)
    await hub.unregister("CIT-B", q_cit_b, conn_b)
    await hub.unregister("OFF-1", q_officer, conn_o)
    assert hub.get_connected_count() == 0


# ============================================================
# 3. END-TO-END SPECIFICATION SCENARIOS (TESTS 1 - 7)
# ============================================================

@pytest.mark.anyio
async def test_scenario_1_and_2_citizen_isolation():
    """
    TEST 1: Citizen A logged in. Officer updates Citizen A's case -> Citizen A receives real-time update.
    TEST 2: Citizen A logged in. Officer updates Citizen B's case -> Citizen A receives NOTHING.
    """
    cit_a = create_user_and_token("Citizen A", "cit_a@example.com")
    cit_b = create_user_and_token("Citizen B", "cit_b@example.com")
    off = create_user_and_token("Officer One", "off_1@example.com", role="officer")

    case_a = create_test_case(cit_a["user"]["user_id"], officer_id=off["user"]["user_id"])
    case_b = create_test_case(cit_b["user"]["user_id"], officer_id=off["user"]["user_id"])

    # Simulate Citizen A connected to SSE
    q_cit_a, conn_a = await realtime_hub.register(cit_a["user"]["user_id"], "citizen")

    # Officer updates Case B (Citizen B's case)
    client.post(
        f"/api/cases/{case_b['case_id']}/status",
        json={"status": "under_review", "actor_user_id": off["user"]["user_id"]},
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )

    # Citizen A must have received NOTHING
    assert q_cit_a.empty(), "Citizen A must not receive events for Citizen B's case!"

    # Officer updates Case A (Citizen A's case)
    client.post(
        f"/api/cases/{case_a['case_id']}/status",
        json={"status": "under_review", "actor_user_id": off["user"]["user_id"]},
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )

    # Citizen A must now receive the status_changed event and notification_created
    received_events = []
    while not q_cit_a.empty():
        msg = q_cit_a.get_nowait()
        received_events.append(msg)

    assert len(received_events) >= 1
    assert any("status_changed" in m or "notification_created" in m for m in received_events)

    await realtime_hub.unregister(cit_a["user"]["user_id"], q_cit_a, conn_a)


@pytest.mark.anyio
async def test_scenario_3_document_uploaded_notifies_officer():
    """
    TEST 3: Citizen uploads requested document -> Authorized officer receives update.
    """
    cit = create_user_and_token("Upload Citizen", "cit_up@example.com")
    off = create_user_and_token("Review Officer", "off_rev@example.com", role="officer")
    case = create_test_case(cit["user"]["user_id"], officer_id=off["user"]["user_id"])

    # Officer is connected to real-time stream
    q_off, conn_o = await realtime_hub.register(off["user"]["user_id"], "officer")

    # Citizen uploads document
    file_content = b"%PDF-1.4 7/12 Extract Official"
    upload_resp = client.post(
        f"/api/cases/{case['case_id']}/documents/upload",
        data={"document_type": "7_12_extract"},
        files={"file": ("7_12_record.pdf", file_content, "application/pdf")},
        headers={"Authorization": f"Bearer {cit['access_token']}"}
    )
    assert upload_resp.status_code == 201

    # Officer queue must contain document_uploaded and notification_created
    received = []
    while not q_off.empty():
        received.append(q_off.get_nowait())

    assert len(received) >= 1
    assert any("document_uploaded" in m or "notification_created" in m for m in received)

    await realtime_hub.unregister(off["user"]["user_id"], q_off, conn_o)


@pytest.mark.anyio
async def test_scenario_4_document_requested_notifies_citizen():
    """
    TEST 4: Officer requests document -> Citizen receives update and notification.
    """
    cit = create_user_and_token("DocReq Citizen", "cit_req@example.com")
    off = create_user_and_token("DocReq Officer", "off_req@example.com", role="officer")
    case = create_test_case(cit["user"]["user_id"], officer_id=off["user"]["user_id"])

    # Citizen is connected
    q_cit, conn_c = await realtime_hub.register(cit["user"]["user_id"], "citizen")

    # Officer requests document
    req_resp = client.post(
        f"/api/cases/{case['case_id']}/request-document",
        json={
            "document_type": "compensation_notice",
            "reason": "Verify award notice number.",
            "actor_user_id": off["user"]["user_id"]
        },
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )
    assert req_resp.status_code == 200

    received = []
    while not q_cit.empty():
        received.append(q_cit.get_nowait())

    assert len(received) >= 1
    assert any("document_requested" in m or "notification_created" in m for m in received)

    await realtime_hub.unregister(cit["user"]["user_id"], q_cit, conn_c)


@pytest.mark.anyio
async def test_scenario_5_case_resolved_notifies_citizen():
    """
    TEST 5: Case is resolved -> Citizen receives resolution update.
    """
    cit = create_user_and_token("Resolve Citizen", "cit_res@example.com")
    off = create_user_and_token("Resolve Officer", "off_res@example.com", role="officer")
    case = create_test_case(cit["user"]["user_id"], officer_id=off["user"]["user_id"])

    # Move case through required states to under_review then resolved
    client.post(
        f"/api/cases/{case['case_id']}/status",
        json={"status": "under_review", "actor_user_id": off["user"]["user_id"]},
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )

    # Citizen is connected
    q_cit, conn_c = await realtime_hub.register(cit["user"]["user_id"], "citizen")

    # Officer resolves case
    res_resp = client.post(
        f"/api/cases/{case['case_id']}/status",
        json={"status": "resolved", "comment": "Compensation credited.", "actor_user_id": off["user"]["user_id"]},
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )
    assert res_resp.status_code == 200

    received = []
    while not q_cit.empty():
        received.append(q_cit.get_nowait())

    assert len(received) >= 1
    assert any("case_resolved" in m or "notification_created" in m or "status_changed" in m for m in received)

    await realtime_hub.unregister(cit["user"]["user_id"], q_cit, conn_c)


def test_scenario_6_offline_durability_and_reconnection_sync():
    """
    TEST 6: Client disconnects. Notification is still persisted in MongoDB.
    Client reconnects. Notification/state is synchronized via API.
    """
    cit = create_user_and_token("Offline Citizen", "cit_offline@example.com")
    off = create_user_and_token("Active Officer", "off_active@example.com", role="officer")
    case = create_test_case(cit["user"]["user_id"], officer_id=off["user"]["user_id"])

    # Citizen is completely offline (no active SSE queue).
    assert realtime_hub.get_user_connections(cit["user"]["user_id"]) == 0

    # Officer performs an action while Citizen is offline
    client.post(
        f"/api/cases/{case['case_id']}/status",
        json={"status": "under_review", "comment": "Reviewing claim offline.", "actor_user_id": off["user"]["user_id"]},
        headers={"Authorization": f"Bearer {off['access_token']}"}
    )

    # When citizen comes back online, persisted notifications in MongoDB are fully intact
    notifs_resp = client.get(
        f"/api/users/{cit['user']['user_id']}/notifications",
        headers={"Authorization": f"Bearer {cit['access_token']}"}
    )
    assert notifs_resp.status_code == 200
    notifs = notifs_resp.json()
    assert len(notifs) >= 1
    assert any("under_review" in n["message"] or "Case Status Update" in n["title"] for n in notifs)


def test_scenario_7_unauthenticated_connection_rejected():
    """
    TEST 7: Unauthenticated client attempts connection -> Rejected with 401.
    """
    resp = client.get("/api/realtime/events")
    assert resp.status_code == 401

"""
Bhoomi Sakha - Deterministic SIH Demo Seeder
Safely populates realistic demonstration records for judges & presentations.
Does NOT run automatically in production.
"""

import os
import sys
import asyncio
from datetime import datetime, timezone

from .database import get_database, is_production_environment
from .auth import hash_password

DEMO_CITIZEN_EMAIL = "ramesh.patil@example.com"
DEMO_OFFICER_EMAIL = "officer.shinde@gov.in"
DEMO_PASSWORD = "Bhoomi@2026"


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


async def seed_demo_data(force: bool = False):
    """
    Seeds comprehensive SIH presentation data:
    - 1 Verified Citizen with 3 cadastral land parcels
    - 1 Revenue Officer (Special Land Acquisition Officer)
    - 4 Diverse Grievance Cases across risk levels (Low, Medium, High, Critical)
    - Timeline event history, supporting document records, and live notifications
    """
    if is_production_environment() and os.getenv("ALLOW_DEMO_SEED") != "1":
        raise RuntimeError(
            "Demo seeder is blocked in production. "
            "Set ALLOW_DEMO_SEED=1 if you intentionally wish to seed demo records."
        )

    db = get_database()
    users_col = db["users"]
    lands_col = db["lands"]
    cases_col = db["cases"]
    events_col = db["case_events"]
    docs_col = db["documents"]
    notifs_col = db["notifications"]

    now = now_iso()
    pwd_hash = hash_password(DEMO_PASSWORD)

    # 1. Citizen User
    citizen_doc = {
        "user_id": "USR-CITIZEN-DEMO",
        "email": DEMO_CITIZEN_EMAIL,
        "name": "Ramesh Patil",
        "role": "citizen",
        "district": "Pune",
        "phone": "+91 9822001122",
        "password_hash": pwd_hash,
        "created_at": now,
        "updated_at": now,
    }
    await users_col.update_one(
        {"email": DEMO_CITIZEN_EMAIL},
        {"$set": citizen_doc},
        upsert=True
    )

    # 2. Officer User
    officer_doc = {
        "user_id": "USR-OFFICER-DEMO",
        "email": DEMO_OFFICER_EMAIL,
        "name": "Smt. Sunita Shinde",
        "role": "officer",
        "designation": "Special Land Acquisition Officer (SLAO)",
        "department": "Revenue & Cadastral Administration",
        "district": "Pune",
        "phone": "+91 9422003344",
        "password_hash": pwd_hash,
        "created_at": now,
        "updated_at": now,
    }
    await users_col.update_one(
        {"email": DEMO_OFFICER_EMAIL},
        {"$set": officer_doc},
        upsert=True
    )

    # 3. Citizen Land Parcels
    lands = [
        {
            "land_id": "LND-PUN-101",
            "owner_id": citizen_doc["user_id"],
            "state": "Maharashtra",
            "district": "Pune",
            "taluka": "Haveli",
            "village": "Wagholi",
            "survey_number": "142/3B",
            "area_hectares": 2.50,
            "land_type": "Agricultural",
            "acquisition_status": "section_19_declared",
            "project_id": "PRJ-MAHA-NH48",
            "created_at": now,
            "updated_at": now,
        },
        {
            "land_id": "LND-PUN-102",
            "owner_id": citizen_doc["user_id"],
            "state": "Maharashtra",
            "district": "Pune",
            "taluka": "Mulshi",
            "village": "Hinjawadi",
            "survey_number": "88/1A",
            "area_hectares": 0.75,
            "land_type": "Commercial",
            "acquisition_status": "possession_pending",
            "project_id": "PRJ-METRO-LINE3",
            "created_at": now,
            "updated_at": now,
        },
        {
            "land_id": "LND-PUN-103",
            "owner_id": citizen_doc["user_id"],
            "state": "Maharashtra",
            "district": "Pune",
            "taluka": "Shirur",
            "village": "Shikrapur",
            "survey_number": "204/1",
            "area_hectares": 5.00,
            "land_type": "Agricultural",
            "acquisition_status": "survey_in_progress",
            "project_id": "PRJ-IND-CORRIDOR",
            "created_at": now,
            "updated_at": now,
        },
    ]

    for land in lands:
        await lands_col.update_one(
            {"land_id": land["land_id"]},
            {"$set": land},
            upsert=True
        )

    # 4. Cases with Varied Risk & Statuses
    cases = [
        {
            "case_id": "CAS-26017-001",
            "citizen_id": citizen_doc["user_id"],
            "land_id": "LND-PUN-101",
            "category": "measurement_dispute",
            "description": "Joint measurement survey boundary discrepancy along NH-48 widening alignment resolved after field verification.",
            "priority": "low",
            "status": "resolved",
            "risk_probability": 0.18,
            "risk_level": "low",
            "assigned_officer_id": officer_doc["user_id"],
            "created_at": now,
            "updated_at": now,
        },
        {
            "case_id": "CAS-26017-002",
            "citizen_id": citizen_doc["user_id"],
            "land_id": "LND-PUN-101",
            "category": "valuation_objection",
            "description": "Discrepancy in horticultural crop valuation on 7/12 extract; review hearing scheduled under Section 23.",
            "priority": "medium",
            "status": "under_review",
            "risk_probability": 0.42,
            "risk_level": "medium",
            "assigned_officer_id": officer_doc["user_id"],
            "created_at": now,
            "updated_at": now,
        },
        {
            "case_id": "CAS-26017-003",
            "citizen_id": citizen_doc["user_id"],
            "land_id": "LND-PUN-102",
            "category": "compensation_delay",
            "description": "Section 19 compensation award notification delayed beyond statutory 180 days; indemnity bond requested.",
            "priority": "high",
            "status": "documents_required",
            "risk_probability": 0.74,
            "risk_level": "high",
            "assigned_officer_id": officer_doc["user_id"],
            "created_at": now,
            "updated_at": now,
        },
        {
            "case_id": "CAS-26017-004",
            "citizen_id": citizen_doc["user_id"],
            "land_id": "LND-PUN-103",
            "category": "statutory_notice",
            "description": "Multi-heir succession claim on survey parcel stalling possession handover; urgent SLAO intervention required.",
            "priority": "critical",
            "status": "escalated",
            "risk_probability": 0.89,
            "risk_level": "critical",
            "assigned_officer_id": officer_doc["user_id"],
            "created_at": now,
            "updated_at": now,
        },
    ]

    for case in cases:
        await cases_col.update_one(
            {"case_id": case["case_id"]},
            {"$set": case},
            upsert=True
        )

    # 5. Timeline Events
    events = [
        {
            "event_id": "EVT-001",
            "case_id": "CAS-26017-001",
            "event_type": "status_changed",
            "from_status": "submitted",
            "to_status": "resolved",
            "actor_id": officer_doc["user_id"],
            "actor_role": "officer",
            "notes": "Joint measurement completed by Taluka Inspector of Land Records (TILR). Resurvey verified.",
            "timestamp": now,
        },
        {
            "event_id": "EVT-002",
            "case_id": "CAS-26017-002",
            "event_type": "status_changed",
            "from_status": "submitted",
            "to_status": "under_review",
            "actor_id": officer_doc["user_id"],
            "actor_role": "officer",
            "notes": "Case assigned to SLAO Unit 2 for valuation schedule inspection.",
            "timestamp": now,
        },
        {
            "event_id": "EVT-003",
            "case_id": "CAS-26017-003",
            "event_type": "document_requested",
            "actor_id": officer_doc["user_id"],
            "actor_role": "officer",
            "notes": "Please provide notarized indemnity bond and updated 7/12 extract showing co-sharer consent.",
            "timestamp": now,
        },
        {
            "event_id": "EVT-004",
            "case_id": "CAS-26017-004",
            "event_type": "status_changed",
            "from_status": "under_review",
            "to_status": "escalated",
            "actor_id": officer_doc["user_id"],
            "actor_role": "officer",
            "notes": "Escalated to District Collectorate due to conflicting inheritance succession claims under RFCTLARR Act.",
            "timestamp": now,
        },
    ]

    for evt in events:
        await events_col.update_one(
            {"event_id": evt["event_id"]},
            {"$set": evt},
            upsert=True
        )

    # 6. Supporting Documents for CAS-26017-003
    docs = [
        {
            "document_id": "DOC-26017-01",
            "case_id": "CAS-26017-003",
            "uploaded_by": citizen_doc["user_id"],
            "land_id": "LND-PUN-102",
            "document_type": "7_12_extract",
            "file_name": "7_12_Extract_Hinjawadi_88_1A.pdf",
            "storage_reference": "documents/CAS-26017-003/7_12_Extract_Hinjawadi_88_1A.pdf",
            "verification_status": "verified",
            "verified_by": officer_doc["user_id"],
            "verified_at": now,
            "created_at": now,
        },
        {
            "document_id": "DOC-26017-02",
            "case_id": "CAS-26017-003",
            "uploaded_by": citizen_doc["user_id"],
            "land_id": "LND-PUN-102",
            "document_type": "identity_proof",
            "file_name": "Aadhaar_Card_Ramesh_Patil.pdf",
            "storage_reference": "documents/CAS-26017-003/Aadhaar_Card_Ramesh_Patil.pdf",
            "verification_status": "pending",
            "created_at": now,
        },
    ]

    for doc in docs:
        await docs_col.update_one(
            {"document_id": doc["document_id"]},
            {"$set": doc},
            upsert=True
        )

    # 7. Notifications
    notifs = [
        {
            "notification_id": "NOTIF-CIT-01",
            "recipient_id": citizen_doc["user_id"],
            "role": "citizen",
            "title": "Document Required for Case CAS-26017-003",
            "message": "SLAO Unit 2 has requested an Indemnity Bond and Co-sharer Consent for Survey 88/1A.",
            "case_id": "CAS-26017-003",
            "is_read": False,
            "created_at": now,
        },
        {
            "notification_id": "NOTIF-OFF-01",
            "recipient_id": officer_doc["user_id"],
            "role": "officer",
            "title": "High-Risk Case Escalated",
            "message": "Critical risk delay flagged for Case CAS-26017-004 on PRJ-IND-CORRIDOR corridor.",
            "case_id": "CAS-26017-004",
            "is_read": False,
            "created_at": now,
        },
    ]

    for notif in notifs:
        await notifs_col.update_one(
            {"notification_id": notif["notification_id"]},
            {"$set": notif},
            upsert=True
        )

    print("=" * 60)
    print("BHOOMI SAKHA - SIH DEMO SEEDING COMPLETED")
    print("=" * 60)
    print(f"Citizen Login:  {DEMO_CITIZEN_EMAIL} / {DEMO_PASSWORD}")
    print(f"Officer Login:  {DEMO_OFFICER_EMAIL} / {DEMO_PASSWORD}")
    print(f"Lands Seeded:   {len(lands)}")
    print(f"Cases Seeded:   {len(cases)} (Covering Low, Medium, High, Critical)")
    print(f"Docs Seeded:    {len(docs)}")
    print(f"Notifs Seeded:  {len(notifs)}")
    print("=" * 60)


if __name__ == "__main__":
    asyncio.run(seed_demo_data())

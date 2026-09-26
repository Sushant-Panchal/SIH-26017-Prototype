"""
Bhoomi Sakha - Case Management & Shared Persistence API Routes
Implements endpoints for Users, Lands, Cases, Documents, Audit Trail, and Notifications.
"""

from typing import List, Optional
from datetime import datetime, timezone
from fastapi import APIRouter, HTTPException, Depends, Header
import logging

from fastapi.security import HTTPAuthorizationCredentials
from .database import get_database
from .auth import security_scheme, decode_access_token
from .case_models import (
    UserRole,
    ComplaintCategory,
    CaseStatus,
    DocumentVerificationStatus,
    NotificationType,
    generate_prefixed_id,
    UserCreate,
    UserResponse,
    LandCreate,
    LandResponse,
    LandUpdate,
    CaseCreate,
    CaseResponse,
    CaseListResponse,
    OfficerMetricsSummary,
    CaseAssignRequest,
    CaseStatusUpdateRequest,
    CaseDocumentCreate,
    CaseDocumentResponse,
    DocumentRequestPayload,
    DocumentVerifyPayload,
    CaseEventCreate,
    CaseEventResponse,
    NotificationResponse,
)

logger = logging.getLogger("bhoomi_sakha.case_routes")

router = APIRouter(prefix="/api", tags=["Case Management"])

# ============================================================
# CASE LIFECYCLE ENFORCEMENT STATE MACHINE
# ============================================================

VALID_STATUS_TRANSITIONS = {
    CaseStatus.SUBMITTED.value: [
        CaseStatus.RECEIVED.value,
        CaseStatus.ASSIGNED.value,
        CaseStatus.UNDER_REVIEW.value,
        CaseStatus.REJECTED.value,
    ],
    CaseStatus.RECEIVED.value: [
        CaseStatus.ASSIGNED.value,
        CaseStatus.UNDER_REVIEW.value,
        CaseStatus.REJECTED.value,
    ],
    CaseStatus.ASSIGNED.value: [
        CaseStatus.UNDER_REVIEW.value,
        CaseStatus.INVESTIGATION.value,
        CaseStatus.DOCUMENTS_REQUIRED.value,
        CaseStatus.REJECTED.value,
    ],
    CaseStatus.UNDER_REVIEW.value: [
        CaseStatus.DOCUMENTS_REQUIRED.value,
        CaseStatus.INVESTIGATION.value,
        CaseStatus.ACTION_TAKEN.value,
        CaseStatus.ESCALATED.value,
        CaseStatus.RESOLVED.value,
        CaseStatus.REJECTED.value,
    ],
    CaseStatus.DOCUMENTS_REQUIRED.value: [
        CaseStatus.UNDER_REVIEW.value,
        CaseStatus.INVESTIGATION.value,
        CaseStatus.REJECTED.value,
    ],
    CaseStatus.INVESTIGATION.value: [
        CaseStatus.ACTION_TAKEN.value,
        CaseStatus.ESCALATED.value,
        CaseStatus.DOCUMENTS_REQUIRED.value,
        CaseStatus.RESOLVED.value,
        CaseStatus.REJECTED.value,
    ],
    CaseStatus.ACTION_TAKEN.value: [
        CaseStatus.RESOLVED.value,
        CaseStatus.INVESTIGATION.value,
        CaseStatus.ESCALATED.value,
    ],
    CaseStatus.ESCALATED.value: [
        CaseStatus.INVESTIGATION.value,
        CaseStatus.ACTION_TAKEN.value,
        CaseStatus.RESOLVED.value,
    ],
    CaseStatus.RESOLVED.value: [
        CaseStatus.CLOSED.value,
        CaseStatus.UNDER_REVIEW.value,
    ],
    CaseStatus.REJECTED.value: [
        CaseStatus.CLOSED.value,
        CaseStatus.UNDER_REVIEW.value,
    ],
    CaseStatus.CLOSED.value: [
        CaseStatus.UNDER_REVIEW.value,
    ],
}


# ============================================================
# HELPER FUNCTIONS
# ============================================================

def now_utc() -> datetime:
    return datetime.now(timezone.utc)


def sanitize_doc(doc: dict) -> dict:
    """Removes MongoDB internal _id before returning."""
    if not doc:
        return doc
    clean = dict(doc)
    clean.pop("_id", None)
    return clean


async def get_user_or_404(user_id: str, db=None) -> dict:
    if db is None:
        db = get_database()
    users = db.get_collection("users")
    user = await users.find_one({"user_id": user_id})
    if not user:
        raise HTTPException(status_code=404, detail=f"User '{user_id}' not found.")
    return user


async def get_case_or_404(case_id: str, db=None) -> dict:
    if db is None:
        db = get_database()
    cases = db.get_collection("cases")
    c = await cases.find_one({"case_id": case_id})
    if not c:
        raise HTTPException(status_code=404, detail=f"Case '{case_id}' not found.")
    return c


async def get_auth_context(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security_scheme),
) -> Optional[dict]:
    """Extract authenticated user if Bearer token is provided."""
    if not credentials or not credentials.credentials:
        return None
    try:
        payload = decode_access_token(credentials.credentials)
        user_id = payload.get("user_id") or payload.get("sub")
        if user_id:
            db = get_database()
            return await db.get_collection("users").find_one({"user_id": user_id})
    except HTTPException:
        raise
    except Exception:
        return None
    return None


async def append_case_event(
    case_id: str,
    actor_user_id: str,
    action: str,
    old_status: Optional[str] = None,
    new_status: Optional[str] = None,
    comment: Optional[str] = None,
    is_internal: bool = False,
    metadata: Optional[dict] = None,
    db=None,
) -> dict:
    """Append-only audit trail event creation."""
    if db is None:
        db = get_database()
    event_id = generate_prefixed_id("EVT")
    timestamp = now_utc()
    event_doc = {
        "event_id": event_id,
        "case_id": case_id,
        "actor_user_id": actor_user_id,
        "action": action,
        "old_status": old_status,
        "new_status": new_status,
        "comment": comment,
        "is_internal": is_internal,
        "metadata": metadata or {},
        "timestamp": timestamp,
    }
    case_events = db.get_collection("case_events")
    await case_events.insert_one(event_doc)
    return event_doc


async def create_notification(
    user_id: str,
    title: str,
    message: str,
    notif_type: str,
    case_id: Optional[str] = None,
    db=None,
) -> dict:
    """Creates a persistent user notification."""
    if db is None:
        db = get_database()
    notif_id = generate_prefixed_id("NTF")
    notif_doc = {
        "notification_id": notif_id,
        "user_id": user_id,
        "case_id": case_id,
        "type": notif_type,
        "title": title,
        "message": message,
        "read": False,
        "created_at": now_utc(),
        "read_at": None,
    }
    notifs = db.get_collection("notifications")
    await notifs.insert_one(notif_doc)
    return notif_doc


# ============================================================
# USERS API
# ============================================================

@router.post("/users", response_model=UserResponse, status_code=201)
async def create_user(payload: UserCreate):
    db = get_database()
    users = db.get_collection("users")

    # Check if user with same email exists
    existing = await users.find_one({"email": payload.email.lower()})
    if existing:
        raise HTTPException(status_code=409, detail="A user with this email address already exists.")

    user_id = payload.user_id or generate_prefixed_id("USR")
    existing_id = await users.find_one({"user_id": user_id})
    if existing_id:
        raise HTTPException(status_code=409, detail="A user with this user_id already exists.")

    now = now_utc()
    doc = payload.model_dump()
    doc["user_id"] = user_id
    doc["created_at"] = now
    doc["updated_at"] = now

    await users.insert_one(doc)
    return UserResponse(**sanitize_doc(doc))


@router.get("/users/{user_id}", response_model=UserResponse)
async def get_user(user_id: str):
    user = await get_user_or_404(user_id)
    return UserResponse(**sanitize_doc(user))


# ============================================================
# LANDS API
# ============================================================

@router.post("/lands", response_model=LandResponse, status_code=201)
async def create_land(payload: LandCreate, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    # Authorization Check: Citizen cannot register land under another citizen's ID
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if payload.owner_id != auth_user.get("user_id"):
            raise HTTPException(
                status_code=403,
                detail="Forbidden: You cannot register land under another citizen's identity.",
            )

    # Verify owner exists
    await get_user_or_404(payload.owner_id, db=db)

    lands = db.get_collection("lands")
    land_id = payload.land_id or generate_prefixed_id("LND")

    existing = await lands.find_one({"land_id": land_id})
    if existing:
        raise HTTPException(status_code=409, detail="A land record with this land_id already exists.")

    now = now_utc()
    doc = payload.model_dump()
    doc["land_id"] = land_id
    doc["created_at"] = now
    doc["updated_at"] = now

    await lands.insert_one(doc)
    return LandResponse(**sanitize_doc(doc))


@router.get("/lands/{land_id}", response_model=LandResponse)
async def get_land(land_id: str, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    lands = db.get_collection("lands")
    land = await lands.find_one({"land_id": land_id})
    if not land:
        raise HTTPException(status_code=404, detail=f"Land record '{land_id}' not found.")
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if land.get("owner_id") != auth_user.get("user_id"):
            raise HTTPException(status_code=403, detail="Forbidden: You cannot access another citizen's land record.")
    return LandResponse(**sanitize_doc(land))


@router.get("/users/{user_id}/lands", response_model=List[LandResponse])
async def get_user_lands(user_id: str, auth_user: Optional[dict] = Depends(get_auth_context)):
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if auth_user.get("user_id") != user_id:
            raise HTTPException(
                status_code=403,
                detail="Forbidden: You cannot access another citizen's land holdings.",
            )
    db = get_database()
    await get_user_or_404(user_id, db=db)
    lands = db.get_collection("lands")
    cursor = lands.find({"owner_id": user_id}).sort("created_at", -1)
    results = await cursor.to_list(100)
    return [LandResponse(**sanitize_doc(d)) for d in results]


@router.patch("/lands/{land_id}", response_model=LandResponse)
async def update_land(land_id: str, payload: LandUpdate, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    lands = db.get_collection("lands")
    land = await lands.find_one({"land_id": land_id})
    if not land:
        raise HTTPException(status_code=404, detail=f"Land record '{land_id}' not found.")

    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if land.get("owner_id") != auth_user.get("user_id"):
            raise HTTPException(status_code=403, detail="Forbidden: You cannot modify another citizen's land record.")

    updates = {k: v for k, v in payload.model_dump().items() if v is not None}
    if not updates:
        return LandResponse(**sanitize_doc(land))

    updates["updated_at"] = now_utc()
    await lands.update_one({"land_id": land_id}, {"$set": updates})
    updated = await lands.find_one({"land_id": land_id})
    return LandResponse(**sanitize_doc(updated))


# ============================================================
# CASES API
# ============================================================

@router.post("/cases", response_model=CaseResponse, status_code=201)
async def create_case(payload: CaseCreate, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    # If caller authenticated as citizen, ensure they file for themselves
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if payload.citizen_id != auth_user.get("user_id"):
            raise HTTPException(
                status_code=403,
                detail="Forbidden: You cannot submit a case under another citizen's identity.",
            )

    # Verify citizen exists
    citizen = await get_user_or_404(payload.citizen_id, db=db)
    if citizen.get("role") != UserRole.CITIZEN.value:
        logger.info("Case filed with citizen_id='%s' having role='%s'", payload.citizen_id, citizen.get("role"))

    # Verify land exists
    lands = db.get_collection("lands")
    land = await lands.find_one({"land_id": payload.land_id})
    if not land:
        raise HTTPException(status_code=404, detail=f"Associated land record '{payload.land_id}' not found.")

    cases = db.get_collection("cases")
    case_id = payload.case_id or generate_prefixed_id("CAS")

    existing = await cases.find_one({"case_id": case_id})
    if existing:
        raise HTTPException(status_code=409, detail="A case with this case_id already exists.")

    now = now_utc()
    doc = payload.model_dump(exclude={"actor_user_id"})
    doc["case_id"] = case_id
    doc["status"] = CaseStatus.SUBMITTED.value
    doc["assigned_officer_id"] = None
    doc["created_at"] = now
    doc["updated_at"] = now
    doc["resolved_at"] = None

    await cases.insert_one(doc)

    # Append case_created event to audit trail
    actor_id = payload.actor_user_id or (auth_user and auth_user.get("user_id")) or payload.citizen_id
    await append_case_event(
        case_id=case_id,
        actor_user_id=actor_id,
        action="case_created",
        old_status=None,
        new_status=CaseStatus.SUBMITTED.value,
        comment="Case submitted by citizen.",
        metadata={"category": payload.category.value, "land_id": payload.land_id},
        db=db,
    )

    # Create confirmation notification for citizen
    await create_notification(
        user_id=payload.citizen_id,
        title="Case Submitted",
        message=f"Your complaint regarding {payload.category.value.replace('_', ' ')} has been registered as {case_id}.",
        notif_type=NotificationType.CASE_RECEIVED.value,
        case_id=case_id,
        db=db,
    )

    return CaseResponse(**sanitize_doc(doc))


@router.get("/cases/metrics/summary", response_model=OfficerMetricsSummary)
async def get_case_metrics_summary(officer_id: Optional[str] = None, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    cases = db.get_collection("cases")
    all_cases = await cases.find({}).to_list(1000)

    target_officer = officer_id or (auth_user and auth_user.get("user_id"))

    total = len(all_cases)
    new_cases = sum(1 for c in all_cases if c.get("status") == CaseStatus.SUBMITTED.value)
    assigned_to_me = sum(1 for c in all_cases if target_officer and c.get("assigned_officer_id") == target_officer)
    high_risk = sum(1 for c in all_cases if c.get("risk_level") in ("HIGH", "CRITICAL") or (c.get("risk_probability") or 0) >= 0.65)
    docs_req = sum(1 for c in all_cases if c.get("status") == CaseStatus.DOCUMENTS_REQUIRED.value)
    escalated = sum(1 for c in all_cases if c.get("status") == CaseStatus.ESCALATED.value)
    resolved = sum(1 for c in all_cases if c.get("status") in (CaseStatus.RESOLVED.value, CaseStatus.CLOSED.value))
    active = sum(1 for c in all_cases if c.get("status") not in (CaseStatus.RESOLVED.value, CaseStatus.REJECTED.value, CaseStatus.CLOSED.value))

    return OfficerMetricsSummary(
        total_cases=total,
        new_cases=new_cases,
        assigned_to_me=assigned_to_me,
        high_risk=high_risk,
        documents_required=docs_req,
        escalated=escalated,
        resolved=resolved,
        active=active,
    )


@router.get("/cases", response_model=CaseListResponse)
async def list_cases(
    status: Optional[str] = None,
    risk_level: Optional[str] = None,
    district: Optional[str] = None,
    project_id: Optional[str] = None,
    category: Optional[str] = None,
    assigned_officer_id: Optional[str] = None,
    search: Optional[str] = None,
    page: int = 1,
    limit: int = 15,
    auth_user: Optional[dict] = Depends(get_auth_context),
):
    query = {}
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        query["citizen_id"] = auth_user.get("user_id")
    elif assigned_officer_id:
        query["assigned_officer_id"] = assigned_officer_id

    if status:
        query["status"] = status
    if risk_level:
        query["risk_level"] = risk_level.upper()
    if project_id:
        query["project_id"] = project_id
    if category:
        query["category"] = category
    if search:
        query["$or"] = [
            {"case_id": {"$regex": search, "$options": "i"}},
            {"description": {"$regex": search, "$options": "i"}},
        ]

    db = get_database()
    cases = db.get_collection("cases")
    total = await cases.count_documents(query)
    skip = (page - 1) * limit
    cursor = cases.find(query).sort("created_at", -1).skip(skip).limit(limit)
    items = await cursor.to_list(limit)

    import math
    pages = math.ceil(total / limit) if total > 0 else 1
    return CaseListResponse(
        items=[CaseResponse(**sanitize_doc(d)) for d in items],
        total=total,
        page=page,
        pages=pages,
        limit=limit,
    )


@router.get("/cases/{case_id}", response_model=CaseResponse)
async def get_case(case_id: str, auth_user: Optional[dict] = Depends(get_auth_context)):
    case = await get_case_or_404(case_id)
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if case.get("citizen_id") != auth_user.get("user_id"):
            raise HTTPException(
                status_code=403,
                detail="Forbidden: Citizens can only access their own case records.",
            )
    return CaseResponse(**sanitize_doc(case))


@router.get("/users/{user_id}/cases", response_model=List[CaseResponse])
async def get_user_cases(user_id: str, auth_user: Optional[dict] = Depends(get_auth_context)):
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if auth_user.get("user_id") != user_id:
            raise HTTPException(
                status_code=403,
                detail="Forbidden: You cannot access cases filed by another citizen.",
            )
    db = get_database()
    await get_user_or_404(user_id, db=db)
    cases = db.get_collection("cases")
    cursor = cases.find({"citizen_id": user_id}).sort("created_at", -1)
    results = await cursor.to_list(100)
    return [CaseResponse(**sanitize_doc(d)) for d in results]


@router.get("/officers/{officer_id}/cases", response_model=List[CaseResponse])
async def get_officer_cases(officer_id: str, auth_user: Optional[dict] = Depends(get_auth_context)):
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        raise HTTPException(
            status_code=403,
            detail="Forbidden: Citizen cannot access officer case queue.",
        )
    db = get_database()
    officer = await get_user_or_404(officer_id, db=db)
    if officer.get("role") != UserRole.OFFICER.value and officer.get("role") != UserRole.SUPER_ADMIN.value:
        raise HTTPException(status_code=400, detail="User is not an officer.")

    cases = db.get_collection("cases")
    cursor = cases.find({"assigned_officer_id": officer_id}).sort("created_at", -1)
    results = await cursor.to_list(100)
    return [CaseResponse(**sanitize_doc(d)) for d in results]


# ============================================================
# CASE ACTIONS (OFFICER-ONLY AUTHORIZATION ENFORCEMENT)
# ============================================================

@router.post("/cases/{case_id}/assign", response_model=CaseResponse)
async def assign_case(case_id: str, payload: CaseAssignRequest, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    case = await get_case_or_404(case_id, db=db)

    # Authorization Check: Auth token role check
    if auth_user and auth_user.get("role") not in (UserRole.OFFICER.value, UserRole.SUPER_ADMIN.value):
        raise HTTPException(
            status_code=403,
            detail="Forbidden: Only officers or administrators can assign cases.",
        )

    # Authorization Check: Actor performing assignment must have officer / admin role
    actor = await get_user_or_404(payload.actor_user_id, db=db)
    if actor.get("role") not in (UserRole.OFFICER.value, UserRole.SUPER_ADMIN.value):
        raise HTTPException(
            status_code=403,
            detail="Forbidden: Only officers or administrators can assign cases.",
        )

    # Verify target officer exists and is an officer
    assigned_officer = await get_user_or_404(payload.assigned_officer_id, db=db)
    if assigned_officer.get("role") not in (UserRole.OFFICER.value, UserRole.SUPER_ADMIN.value):
        raise HTTPException(
            status_code=400,
            detail="Cannot assign case: Target user is not registered as an officer.",
        )

    old_status = case.get("status")
    new_status = CaseStatus.ASSIGNED.value
    now = now_utc()

    cases = db.get_collection("cases")
    await cases.update_one(
        {"case_id": case_id},
        {"$set": {
            "assigned_officer_id": payload.assigned_officer_id,
            "status": new_status,
            "updated_at": now,
        }}
    )

    # Append audit trail event
    await append_case_event(
        case_id=case_id,
        actor_user_id=payload.actor_user_id,
        action="case_assigned",
        old_status=old_status,
        new_status=new_status,
        comment=payload.comment or f"Case assigned to officer {payload.assigned_officer_id}.",
        metadata={"assigned_officer_id": payload.assigned_officer_id},
        db=db,
    )

    # Notification to Citizen
    await create_notification(
        user_id=case["citizen_id"],
        title="Case Assigned to Officer",
        message=f"Your case {case_id} has been assigned to an officer for review.",
        notif_type=NotificationType.CASE_ASSIGNED.value,
        case_id=case_id,
        db=db,
    )

    # Notification to Assigned Officer
    await create_notification(
        user_id=payload.assigned_officer_id,
        title="New Case Assignment",
        message=f"Case {case_id} ({case.get('category')}) has been assigned to you.",
        notif_type=NotificationType.CASE_ASSIGNED.value,
        case_id=case_id,
        db=db,
    )

    updated_case = await get_case_or_404(case_id, db=db)
    return CaseResponse(**sanitize_doc(updated_case))


@router.post("/cases/{case_id}/status", response_model=CaseResponse)
async def update_case_status(case_id: str, payload: CaseStatusUpdateRequest, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    case = await get_case_or_404(case_id, db=db)

    # Authorization Check: Auth token check
    if auth_user and auth_user.get("role") not in (UserRole.OFFICER.value, UserRole.SUPER_ADMIN.value):
        raise HTTPException(
            status_code=403,
            detail="Forbidden: Only officers or administrators can update case status.",
        )

    # Authorization Check: Actor must be officer or admin
    actor = await get_user_or_404(payload.actor_user_id, db=db)
    if actor.get("role") not in (UserRole.OFFICER.value, UserRole.SUPER_ADMIN.value):
        raise HTTPException(
            status_code=403,
            detail="Forbidden: Only officers or administrators can update case status.",
        )

    old_status = case.get("status")
    new_status = payload.status.value

    # Server-side state transition validation
    allowed = VALID_STATUS_TRANSITIONS.get(old_status, [])
    if new_status != old_status and new_status not in allowed:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid case status transition from '{old_status}' to '{new_status}'. Allowed transitions: {', '.join(allowed)}",
        )

    now = now_utc()

    update_fields = {
        "status": new_status,
        "updated_at": now,
    }

    if payload.status in (CaseStatus.RESOLVED, CaseStatus.CLOSED):
        update_fields["resolved_at"] = now

    cases = db.get_collection("cases")
    await cases.update_one({"case_id": case_id}, {"$set": update_fields})

    # Append audit trail event
    await append_case_event(
        case_id=case_id,
        actor_user_id=payload.actor_user_id,
        action="status_changed",
        old_status=old_status,
        new_status=new_status,
        comment=payload.comment,
        db=db,
    )

    # Notify Citizen of status update
    notif_type = NotificationType.CASE_RESOLVED.value if payload.status == CaseStatus.RESOLVED else NotificationType.CASE_STATUS_CHANGED.value
    await create_notification(
        user_id=case["citizen_id"],
        title=f"Case Status Update: {new_status.replace('_', ' ').capitalize()}",
        message=f"Status of your case {case_id} was updated to {new_status}." + (f" Note: {payload.comment}" if payload.comment else ""),
        notif_type=notif_type,
        case_id=case_id,
        db=db,
    )

    updated_case = await get_case_or_404(case_id, db=db)
    return CaseResponse(**sanitize_doc(updated_case))


@router.post("/cases/{case_id}/request-document", response_model=CaseResponse)
async def request_document(case_id: str, payload: DocumentRequestPayload, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    case = await get_case_or_404(case_id, db=db)

    # Check officer authority
    if auth_user and auth_user.get("role") not in (UserRole.OFFICER.value, UserRole.SUPER_ADMIN.value):
        raise HTTPException(status_code=403, detail="Forbidden: Only officers can request documents.")

    now = now_utc()
    cases = db.get_collection("cases")
    await cases.update_one(
        {"case_id": case_id},
        {"$set": {"status": CaseStatus.DOCUMENTS_REQUIRED.value, "updated_at": now}}
    )

    comment = f"Document requested: {payload.document_type}. Reason: {payload.reason}"
    if payload.message:
        comment += f" Note: {payload.message}"

    await append_case_event(
        case_id=case_id,
        actor_user_id=payload.actor_user_id,
        action="document_requested",
        old_status=case.get("status"),
        new_status=CaseStatus.DOCUMENTS_REQUIRED.value,
        comment=comment,
        metadata={"document_type": payload.document_type, "reason": payload.reason},
        db=db,
    )

    await create_notification(
        user_id=case["citizen_id"],
        title="Supporting Document Requested",
        message=f"An officer requested '{payload.document_type}' for your case {case_id}. Reason: {payload.reason}",
        notif_type=NotificationType.DOCUMENT_REQUIRED.value,
        case_id=case_id,
        db=db,
    )

    updated = await get_case_or_404(case_id, db=db)
    return CaseResponse(**sanitize_doc(updated))


@router.post("/cases/{case_id}/events", response_model=CaseEventResponse, status_code=201)
async def create_event(case_id: str, payload: CaseEventCreate, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    await get_case_or_404(case_id, db=db)
    await get_user_or_404(payload.actor_user_id, db=db)

    # Citizen cannot create internal officer notes
    if payload.is_internal:
        if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
            raise HTTPException(status_code=403, detail="Forbidden: Citizens cannot author internal officer notes.")

    event_doc = await append_case_event(
        case_id=case_id,
        actor_user_id=payload.actor_user_id,
        action=payload.action,
        old_status=payload.old_status,
        new_status=payload.new_status,
        comment=payload.comment,
        is_internal=payload.is_internal,
        metadata=payload.metadata,
        db=db,
    )

    return CaseEventResponse(**sanitize_doc(event_doc))


@router.get("/cases/{case_id}/events", response_model=List[CaseEventResponse])
async def get_case_events(case_id: str, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    await get_case_or_404(case_id, db=db)
    case_events = db.get_collection("case_events")

    query = {"case_id": case_id}
    # Filter out internal notes for citizen users
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        query["is_internal"] = {"$ne": True}

    cursor = case_events.find(query).sort("timestamp", 1)
    results = await cursor.to_list(200)
    return [CaseEventResponse(**sanitize_doc(d)) for d in results]


# ============================================================
# DOCUMENTS METADATA API
# ============================================================

@router.post("/cases/{case_id}/documents", response_model=CaseDocumentResponse, status_code=201)
async def create_case_document(case_id: str, payload: CaseDocumentCreate, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    case = await get_case_or_404(case_id, db=db)

    # Authorization Check: Citizen can only upload to their own case and cannot impersonate
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if case.get("citizen_id") != auth_user.get("user_id"):
            raise HTTPException(status_code=403, detail="Forbidden: You cannot upload documents to another citizen's case.")
        if payload.uploaded_by != auth_user.get("user_id"):
            raise HTTPException(status_code=403, detail="Forbidden: You cannot upload documents under another citizen's identity.")

    await get_user_or_404(payload.uploaded_by, db=db)

    doc_id = generate_prefixed_id("DOC")
    now = now_utc()

    doc = {
        "document_id": doc_id,
        "case_id": case_id,
        "land_id": payload.land_id or case.get("land_id"),
        "uploaded_by": payload.uploaded_by,
        "document_type": payload.document_type,
        "file_name": payload.file_name,
        "storage_reference": payload.storage_reference,
        "verification_status": DocumentVerificationStatus.PENDING.value,
        "uploaded_at": now,
        "verified_at": None,
        "verified_by": None,
    }

    case_docs = db.get_collection("case_documents")
    await case_docs.insert_one(doc)

    # Append audit trail event
    await append_case_event(
        case_id=case_id,
        actor_user_id=payload.uploaded_by,
        action="document_uploaded",
        old_status=case.get("status"),
        new_status=case.get("status"),
        comment=f"Document '{payload.file_name}' ({payload.document_type}) uploaded.",
        metadata={"document_id": doc_id, "document_type": payload.document_type},
        db=db,
    )

    return CaseDocumentResponse(**sanitize_doc(doc))


@router.get("/cases/{case_id}/documents", response_model=List[CaseDocumentResponse])
async def get_case_documents(case_id: str, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    case = await get_case_or_404(case_id, db=db)
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if case.get("citizen_id") != auth_user.get("user_id"):
            raise HTTPException(status_code=403, detail="Forbidden: Citizens can only access documents for their own cases.")
    case_docs = db.get_collection("case_documents")
    cursor = case_docs.find({"case_id": case_id}).sort("uploaded_at", -1)
    results = await cursor.to_list(100)
    return [CaseDocumentResponse(**sanitize_doc(d)) for d in results]


@router.post("/cases/{case_id}/documents/{document_id}/verify", response_model=CaseDocumentResponse)
async def verify_document(case_id: str, document_id: str, payload: DocumentVerifyPayload, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    case = await get_case_or_404(case_id, db=db)

    # Check officer role
    if auth_user and auth_user.get("role") not in (UserRole.OFFICER.value, UserRole.SUPER_ADMIN.value):
        raise HTTPException(status_code=403, detail="Forbidden: Only officers can verify documents.")

    case_docs = db.get_collection("case_documents")
    doc = await case_docs.find_one({"document_id": document_id, "case_id": case_id})
    if not doc:
        raise HTTPException(status_code=404, detail=f"Document '{document_id}' not found on case '{case_id}'.")

    now = now_utc()
    status_val = payload.verification_status.value
    update_fields = {
        "verification_status": status_val,
        "verified_at": now,
        "verified_by": payload.actor_user_id,
    }
    if payload.rejection_reason:
        update_fields["rejection_reason"] = payload.rejection_reason

    await case_docs.update_one({"document_id": document_id}, {"$set": update_fields})

    action_name = "document_verified" if payload.verification_status == DocumentVerificationStatus.VERIFIED else "document_rejected"
    comment = f"Document '{doc.get('file_name')}' was {status_val}."
    if payload.rejection_reason:
        comment += f" Reason: {payload.rejection_reason}"

    await append_case_event(
        case_id=case_id,
        actor_user_id=payload.actor_user_id,
        action=action_name,
        comment=comment,
        metadata={"document_id": document_id, "status": status_val},
        db=db,
    )

    notif_title = f"Document {status_val.capitalize()}"
    notif_msg = f"Your uploaded document '{doc.get('file_name')}' for case {case_id} has been {status_val}."
    if payload.rejection_reason:
        notif_msg += f" Note: {payload.rejection_reason}"

    await create_notification(
        user_id=case["citizen_id"],
        title=notif_title,
        message=notif_msg,
        notif_type=NotificationType.DOCUMENT_VERIFIED.value if status_val == "verified" else NotificationType.OFFICER_MESSAGE.value,
        case_id=case_id,
        db=db,
    )

    updated_doc = await case_docs.find_one({"document_id": document_id})
    return CaseDocumentResponse(**sanitize_doc(updated_doc))


# ============================================================
# NOTIFICATIONS API
# ============================================================

@router.get("/users/{user_id}/notifications", response_model=List[NotificationResponse])
async def get_user_notifications(user_id: str, auth_user: Optional[dict] = Depends(get_auth_context)):
    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if auth_user.get("user_id") != user_id:
            raise HTTPException(
                status_code=403,
                detail="Forbidden: You cannot access another user's notifications.",
            )
    db = get_database()
    await get_user_or_404(user_id, db=db)
    notifs = db.get_collection("notifications")
    cursor = notifs.find({"user_id": user_id}).sort("created_at", -1)
    results = await cursor.to_list(100)
    return [NotificationResponse(**sanitize_doc(d)) for d in results]


@router.post("/notifications/{notification_id}/read", response_model=NotificationResponse)
async def mark_notification_read(notification_id: str, auth_user: Optional[dict] = Depends(get_auth_context)):
    db = get_database()
    notifs = db.get_collection("notifications")
    notif = await notifs.find_one({"notification_id": notification_id})
    if not notif:
        raise HTTPException(status_code=404, detail=f"Notification '{notification_id}' not found.")

    if auth_user and auth_user.get("role") == UserRole.CITIZEN.value:
        if notif.get("user_id") != auth_user.get("user_id"):
            raise HTTPException(
                status_code=403,
                detail="Forbidden: You cannot mark another citizen's notification as read.",
            )

    now = now_utc()
    await notifs.update_one(
        {"notification_id": notification_id},
        {"$set": {"read": True, "read_at": now}}
    )

    updated = await notifs.find_one({"notification_id": notification_id})
    return NotificationResponse(**sanitize_doc(updated))

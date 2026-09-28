"""
Bhoomi Sakha - Domain Models and Validation Schemas
Centralizes all entity models, enums, and request/response contracts
for the Citizen-Officer persistent case management workflow.
"""

from enum import Enum
from typing import Any, Dict, List, Optional
from datetime import datetime, timezone
import uuid
from pydantic import BaseModel, Field, EmailStr, field_validator, model_validator


def now_utc() -> datetime:
    return datetime.now(timezone.utc)


# ============================================================
# ENUMS & ALIAS NORMALIZATION
# ============================================================

CATEGORY_ALIASES = {
    "measurement_dispute": "land_measurement",
    "measurement_error": "land_measurement",
    "valuation_objection": "compensation_dispute",
    "compensation_delay": "compensation_not_received",
    "delayed_award": "compensation_not_received",
    "statutory_notice": "notice_issue",
    "notice_discrepancy": "notice_issue",
    "title_record_defect": "documentation",
}

PRIORITY_ALIASES = {
    "low": "normal",
    "medium": "normal",
    "normal": "normal",
    "high": "high",
    "critical": "critical",
}


class UserRole(str, Enum):
    CITIZEN = "citizen"
    OFFICER = "officer"
    # Extensible for future administrative roles
    SUPER_ADMIN = "super_admin"


class ComplaintCategory(str, Enum):
    COMPENSATION_NOT_RECEIVED = "compensation_not_received"
    COMPENSATION_DISPUTE = "compensation_dispute"
    LAND_MEASUREMENT = "land_measurement"
    NOTICE_ISSUE = "notice_issue"
    DOCUMENTATION = "documentation"
    OWNERSHIP_MUTATION = "ownership_mutation"
    POSSESSION = "possession"
    REHABILITATION_RESETTLEMENT = "rehabilitation_resettlement"
    OTHER = "other"
    # Legacy & Seed Aliases
    MEASUREMENT_DISPUTE = "measurement_dispute"
    VALUATION_OBJECTION = "valuation_objection"
    COMPENSATION_DELAY = "compensation_delay"
    STATUTORY_NOTICE = "statutory_notice"


class CaseStatus(str, Enum):
    NEW = "new"
    SUBMITTED = "submitted"
    RECEIVED = "received"
    ASSIGNED = "assigned"
    UNDER_REVIEW = "under_review"
    DOCUMENTS_REQUIRED = "documents_required"
    INVESTIGATION = "investigation"
    ACTION_TAKEN = "action_taken"
    ESCALATED = "escalated"
    RESOLVED = "resolved"
    REJECTED = "rejected"
    CLOSED = "closed"


class CasePriority(str, Enum):
    NORMAL = "normal"
    HIGH = "high"
    CRITICAL = "critical"
    LOW = "low"
    MEDIUM = "medium"


class DocumentVerificationStatus(str, Enum):
    PENDING = "pending"
    VERIFIED = "verified"
    REJECTED = "rejected"


class NotificationType(str, Enum):
    CASE_RECEIVED = "case_received"
    CASE_ASSIGNED = "case_assigned"
    DOCUMENT_REQUIRED = "document_required"
    DOCUMENT_VERIFIED = "document_verified"
    OFFICER_MESSAGE = "officer_message"
    CASE_STATUS_CHANGED = "case_status_changed"
    CASE_RESOLVED = "case_resolved"
    RISK_UPDATE = "risk_update"


def generate_prefixed_id(prefix: str) -> str:
    """Generate a clean, readable identifier with standard prefix."""
    return f"{prefix}-{uuid.uuid4().hex[:8].upper()}"


# ============================================================
# USERS
# ============================================================

class UserBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: str = Field(..., min_length=3, max_length=120)
    role: UserRole
    phone: Optional[str] = None
    preferred_language: str = Field(default="en", max_length=10)
    status: str = Field(default="active", max_length=30)
    department: Optional[str] = None
    district: Optional[str] = None
    authority: Optional[str] = None
    designation: Optional[str] = None

    @field_validator("name")
    @classmethod
    def validate_name_format(cls, v: str) -> str:
        clean = v.strip() if isinstance(v, str) else ""
        if not clean:
            raise ValueError("Full Name is required and cannot be empty or whitespace.")
        return clean

    @field_validator("email")
    @classmethod
    def validate_email_format(cls, v: str) -> str:
        clean = v.strip().lower()
        if "@" not in clean or "." not in clean.split("@")[-1]:
            raise ValueError("Invalid email address format.")
        return clean


class UserCreate(UserBase):
    user_id: Optional[str] = None
    password: Optional[str] = Field(default=None, min_length=6)
    officer_key: Optional[str] = None


class UserResponse(UserBase):
    user_id: str
    created_at: datetime
    updated_at: datetime


class LoginRequest(BaseModel):
    email: str
    password: str


class AuthTokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse


# ============================================================
# LAND RECORDS
# ============================================================

class LandBase(BaseModel):
    owner_id: str
    state: str = Field(..., min_length=1, max_length=60)
    district: str = Field(..., min_length=1, max_length=60)
    taluka: str = Field(..., min_length=1, max_length=60)
    village: str = Field(..., min_length=1, max_length=80)
    survey_number: str = Field(..., min_length=1, max_length=60)
    area_hectares: float = Field(..., gt=0, description="Land area in hectares, strictly positive")
    land_type: str = Field(..., min_length=1, max_length=50)
    acquisition_status: str = Field(default="not_notified", max_length=50)
    project_id: Optional[str] = None


class LandCreate(LandBase):
    land_id: Optional[str] = None


class LandResponse(LandBase):
    land_id: str
    created_at: datetime
    updated_at: datetime


class LandUpdate(BaseModel):
    state: Optional[str] = None
    district: Optional[str] = None
    taluka: Optional[str] = None
    village: Optional[str] = None
    survey_number: Optional[str] = None
    area_hectares: Optional[float] = Field(default=None, gt=0)
    land_type: Optional[str] = None
    acquisition_status: Optional[str] = None
    project_id: Optional[str] = None


# ============================================================
# CASES / COMPLAINTS
# ============================================================

class CaseBase(BaseModel):
    citizen_id: str
    land_id: str
    project_id: Optional[str] = None
    category: ComplaintCategory
    description: str = Field(..., min_length=5, max_length=3000)
    priority: CasePriority = CasePriority.NORMAL
    risk_probability: Optional[float] = Field(default=None, ge=0.0, le=1.0)
    risk_level: Optional[str] = None

    @field_validator("category", mode="before")
    @classmethod
    def normalize_category(cls, v: Any) -> Any:
        if isinstance(v, str):
            clean = v.strip().lower()
            if clean in CATEGORY_ALIASES:
                return CATEGORY_ALIASES[clean]
            for member in ComplaintCategory:
                if clean == member.value:
                    return member.value
            raise ValueError(f"'{v}' is not a valid ComplaintCategory")
        return v

    @field_validator("priority", mode="before")
    @classmethod
    def normalize_priority(cls, v: Any) -> Any:
        if isinstance(v, str):
            clean = v.strip().lower()
            if clean in PRIORITY_ALIASES:
                return PRIORITY_ALIASES[clean]
            for member in CasePriority:
                if clean == member.value:
                    return member.value
            raise ValueError(f"'{v}' is not a valid CasePriority")
        return v


class CaseCreate(CaseBase):
    case_id: Optional[str] = None
    actor_user_id: Optional[str] = None


class CaseAssignRequest(BaseModel):
    assigned_officer_id: str
    actor_user_id: str = Field(..., description="ID of the officer or admin performing the assignment")
    comment: Optional[str] = None


class CaseStatusUpdateRequest(BaseModel):
    status: CaseStatus
    actor_user_id: str = Field(..., description="ID of the officer performing the status transition")
    comment: Optional[str] = None


class CaseResponse(CaseBase):
    case_id: str
    status: CaseStatus
    assigned_officer_id: Optional[str] = None
    created_at: datetime = Field(default_factory=now_utc)
    updated_at: datetime = Field(default_factory=now_utc)
    resolved_at: Optional[datetime] = None

    @model_validator(mode="before")
    @classmethod
    def parse_case_response(cls, data: Any) -> Any:
        if isinstance(data, dict):
            # Resilient fallback for legacy / anomalous DB categories
            cat = data.get("category")
            if isinstance(cat, str):
                clean_cat = cat.strip().lower()
                if clean_cat in CATEGORY_ALIASES:
                    data["category"] = CATEGORY_ALIASES[clean_cat]
                elif not any(clean_cat == member.value for member in ComplaintCategory):
                    data["category"] = ComplaintCategory.OTHER.value
            # Resilient fallback for legacy / anomalous DB priorities
            pri = data.get("priority")
            if isinstance(pri, str):
                clean_pri = pri.strip().lower()
                if clean_pri in PRIORITY_ALIASES:
                    data["priority"] = PRIORITY_ALIASES[clean_pri]
                elif not any(clean_pri == member.value for member in CasePriority):
                    data["priority"] = CasePriority.NORMAL.value
            for field in ("created_at", "updated_at", "resolved_at"):
                val = data.get(field)
                if isinstance(val, str) and val:
                    try:
                        data[field] = datetime.fromisoformat(val.replace("Z", "+00:00"))
                    except Exception:
                        pass
            if not data.get("created_at"):
                data["created_at"] = now_utc()
            if not data.get("updated_at"):
                data["updated_at"] = now_utc()
            if "status" in data and isinstance(data["status"], str):
                s = data["status"].strip().lower()
                status_map = {m.value: m for m in CaseStatus}
                if s in status_map:
                    data["status"] = status_map[s]
                elif s == "pending":
                    data["status"] = CaseStatus.SUBMITTED
                elif s == "open":
                    data["status"] = CaseStatus.NEW
                else:
                    data["status"] = CaseStatus.SUBMITTED
        return data


class CaseListResponse(BaseModel):
    items: List[CaseResponse]
    total: int
    page: int
    pages: int
    limit: int


class OfficerMetricsSummary(BaseModel):
    total_cases: int
    new_cases: int
    assigned_to_me: int
    high_risk: int
    documents_required: int
    escalated: int
    resolved: int
    active: int


# ============================================================
# CASE DOCUMENTS (METADATA)
# ============================================================

class CaseDocumentCreate(BaseModel):
    land_id: Optional[str] = None
    uploaded_by: str
    document_type: str = Field(..., min_length=2, max_length=80)
    file_name: str = Field(..., min_length=1, max_length=255)
    storage_reference: str = Field(..., min_length=1, max_length=500, description="Object storage reference or cloud path")


class CaseDocumentResponse(BaseModel):
    document_id: str
    case_id: str
    land_id: Optional[str] = None
    uploaded_by: str
    document_type: str
    file_name: str
    storage_reference: str
    verification_status: DocumentVerificationStatus = DocumentVerificationStatus.PENDING
    uploaded_at: datetime = Field(default_factory=now_utc)
    verified_at: Optional[datetime] = None
    verified_by: Optional[str] = None
    rejection_reason: Optional[str] = None

    @model_validator(mode="before")
    @classmethod
    def map_legacy_fields(cls, data: Any) -> Any:
        if isinstance(data, dict):
            if "document_id" not in data and "doc_id" in data:
                data["document_id"] = data["doc_id"]
            elif "document_id" not in data:
                data["document_id"] = f"DOC-{uuid.uuid4().hex[:8].upper()}"

            if "document_type" not in data and "doc_type" in data:
                data["document_type"] = data["doc_type"]
            elif "document_type" not in data:
                data["document_type"] = "general"

            if "storage_reference" not in data:
                data["storage_reference"] = data.get("file_path") or data.get("url") or f"docs/{data.get('file_name', 'unnamed')}"

            if "verification_status" not in data and "status" in data:
                data["verification_status"] = data["status"]

            if "uploaded_at" not in data and "created_at" in data:
                data["uploaded_at"] = data["created_at"]
            if not data.get("uploaded_at"):
                data["uploaded_at"] = now_utc()
            elif isinstance(data["uploaded_at"], str):
                try:
                    data["uploaded_at"] = datetime.fromisoformat(data["uploaded_at"].replace("Z", "+00:00"))
                except Exception:
                    data["uploaded_at"] = now_utc()
        return data


class DocumentRequestPayload(BaseModel):
    document_type: str = Field(..., min_length=2, max_length=80)
    reason: str = Field(..., min_length=3, max_length=300)
    message: Optional[str] = None
    actor_user_id: str


class DocumentVerifyPayload(BaseModel):
    verification_status: DocumentVerificationStatus
    rejection_reason: Optional[str] = None
    actor_user_id: str


class DocumentUploadUrlRequest(BaseModel):
    land_id: Optional[str] = None
    document_type: str = Field(..., min_length=2, max_length=80)
    file_name: str = Field(..., min_length=1, max_length=255)
    file_size: Optional[int] = Field(None, gt=0)
    content_type: Optional[str] = None


class DocumentUploadUrlResponse(BaseModel):
    document_id: str
    case_id: str
    object_key: str
    storage_reference: str
    upload_url: str
    fields: Optional[Dict[str, str]] = None
    expires_in: int


class DocumentConfirmRequest(BaseModel):
    document_id: str
    object_key: str
    document_type: str
    file_name: str
    land_id: Optional[str] = None


class DocumentAccessUrlResponse(BaseModel):
    document_id: str
    case_id: str
    file_name: str
    download_url: str
    expires_in: int


# ============================================================
# CASE EVENTS / AUDIT TRAIL
# ============================================================

class CaseEventCreate(BaseModel):
    actor_user_id: str
    action: str = Field(..., min_length=2, max_length=80)
    old_status: Optional[str] = None
    new_status: Optional[str] = None
    comment: Optional[str] = None
    is_internal: bool = False
    metadata: Dict[str, Any] = Field(default_factory=dict)


class CaseEventResponse(BaseModel):
    event_id: str
    case_id: str
    actor_user_id: str
    action: str
    old_status: Optional[str] = None
    new_status: Optional[str] = None
    comment: Optional[str] = None
    is_internal: bool = False
    metadata: Dict[str, Any] = Field(default_factory=dict)
    timestamp: datetime = Field(default_factory=now_utc)

    @model_validator(mode="before")
    @classmethod
    def map_legacy_fields(cls, data: Any) -> Any:
        if isinstance(data, dict):
            if "actor_user_id" not in data and "actor_id" in data:
                data["actor_user_id"] = data["actor_id"]
            if "action" not in data and "event_type" in data:
                data["action"] = data["event_type"]
            if "old_status" not in data and "from_status" in data:
                data["old_status"] = data["from_status"]
            if "new_status" not in data and "to_status" in data:
                data["new_status"] = data["to_status"]
            if "comment" not in data and "notes" in data:
                data["comment"] = data["notes"]
            if not data.get("actor_user_id"):
                data["actor_user_id"] = "system"
            if not data.get("action"):
                data["action"] = "status_changed"
            ts = data.get("timestamp")
            if isinstance(ts, str) and ts:
                try:
                    data["timestamp"] = datetime.fromisoformat(ts.replace("Z", "+00:00"))
                except Exception:
                    data["timestamp"] = now_utc()
            elif not ts:
                data["timestamp"] = now_utc()
        return data


# ============================================================
# NOTIFICATIONS
# ============================================================

class NotificationCreate(BaseModel):
    user_id: str
    case_id: Optional[str] = None
    type: str = Field(..., max_length=60)
    title: str = Field(..., min_length=1, max_length=160)
    message: str = Field(..., min_length=1, max_length=1000)


class NotificationResponse(BaseModel):
    notification_id: str
    user_id: str
    case_id: Optional[str] = None
    type: str = Field(default="general")
    title: str
    message: str
    read: bool = False
    created_at: datetime = Field(default_factory=now_utc)
    read_at: Optional[datetime] = None

    @model_validator(mode="before")
    @classmethod
    def map_legacy_fields(cls, data: Any) -> Any:
        if isinstance(data, dict):
            if "user_id" not in data and "recipient_id" in data:
                data["user_id"] = data["recipient_id"]
            if "type" not in data:
                data["type"] = data.get("notif_type", "general")
            if "read" not in data:
                data["read"] = data.get("is_read", False)
            if not data.get("created_at"):
                data["created_at"] = now_utc()
            elif isinstance(data["created_at"], str):
                try:
                    data["created_at"] = datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))
                except Exception:
                    data["created_at"] = now_utc()
        return data

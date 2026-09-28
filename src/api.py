import os
import logging
from typing import Any, List

from fastapi import FastAPI, HTTPException, Request, Depends, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from contextlib import asynccontextmanager

from .inference import DelayPredictor
from .database import init_indexes, get_database, is_production_environment
from .storage import get_storage_provider
from .case_routes import router as case_router
from .auth_routes import router as auth_router
from .realtime import router as realtime_router
from .rate_limiter import predict_rate_limiter

logger = logging.getLogger("bhoomi_sakha.api")

MODEL_PATH = "models/baseline_model.json"
FEATURE_NAMES_PATH = "models/feature_names.joblib"


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Establish persistent database indexes on startup
    await init_indexes()

    # Safe startup security diagnostics (NEVER prints or leaks secrets)
    from .auth import get_jwt_secret_diagnostics
    diag = get_jwt_secret_diagnostics()
    logger.info(
        "Security Configuration Diagnostic: ENVIRONMENT=%s is_production=%s JWT_SECRET_PRESENT=%s JWT_SECRET_LENGTH=%d JWT_SECRET_VALID=%s",
        os.getenv("ENVIRONMENT", "development"),
        diag["is_production"],
        diag["JWT_SECRET_PRESENT"],
        diag["JWT_SECRET_LENGTH"],
        diag["JWT_SECRET_VALID"],
    )
    yield


app = FastAPI(
    title="SIH 26017 Land Acquisition Risk API",
    description=(
        "Predictive governance API for land acquisition "
        "delay risk assessment."
    ),
    version="1.1.0",
    lifespan=lifespan,
)


def get_allowed_origins() -> List[str]:
    """Computes allowed CORS origins based on environment settings and development defaults."""
    raw_origins = os.getenv("ALLOWED_ORIGINS", os.getenv("CORS_ORIGINS", "")).strip()
    frontend_url = os.getenv("FRONTEND_URL", "").strip()

    origins = set()
    if raw_origins:
        for o in raw_origins.split(","):
            if o.strip():
                origins.add(o.strip())
    if frontend_url:
        origins.add(frontend_url)

    # Always permit local development origins
    dev_origins = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:8000",
        "http://127.0.0.1:8000",
    ]
    origins.update(dev_origins)
    return list(origins)


# Production-hardened CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """
    Safely captures unhandled exceptions without leaking stack traces,
    database internal connection strings, or filesystem paths.
    """
    logger.exception("Unhandled server exception processing %s %s: %s", request.method, request.url.path, exc)
    return JSONResponse(
        status_code=500,
        content={"detail": "An internal server error occurred. Please try again later."},
    )

# Authentication Router
app.include_router(auth_router)

# Persistent Case Management Router
app.include_router(case_router)

# Real-Time Event Stream Router
app.include_router(realtime_router)


# Load model once when API starts.
predictor = DelayPredictor()


# ============================================================
# REQUEST SCHEMA
# ============================================================

class ProjectInput(BaseModel):
    """
    Editable project snapshot supplied by the frontend.

    Values represent the current state of a land acquisition
    project at a particular snapshot day.
    """

    # --------------------------------------------------------
    # Project information
    # --------------------------------------------------------

    snapshot_day: int = Field(
        default=0,
        ge=0,
    )

    project_type: str | None = None
    land_type: str | None = None
    priority: str | None = None
    current_stage: str | None = None

    land_area_hectares: float = Field(
        default=0,
        ge=0,
    )

    affected_families: float = Field(
        default=0,
        ge=0,
    )

    complexity_score: float = Field(
        default=0,
        ge=0,
    )

    # --------------------------------------------------------
    # Schedule
    # --------------------------------------------------------

    days_since_notification: int = Field(
        default=0,
        ge=0,
    )

    planned_duration_days: int = Field(
        default=0,
        ge=0,
    )

    days_elapsed: int = Field(
        default=0,
        ge=0,
    )

    days_in_current_stage: int = Field(
        default=0,
        ge=0,
    )

    planned_stage_duration_days: int = Field(
        default=0,
        ge=0,
    )

    schedule_variance_days: float = 0

    milestones_due: int = Field(
        default=0,
        ge=0,
    )

    milestones_completed: int = Field(
        default=0,
        ge=0,
    )

    milestones_overdue: int = Field(
        default=0,
        ge=0,
    )

    # --------------------------------------------------------
    # Acquisition
    # --------------------------------------------------------

    total_parcels: int = Field(
        default=0,
        ge=0,
    )

    parcels_acquired: int = Field(
        default=0,
        ge=0,
    )

    parcels_pending: int = Field(
        default=0,
        ge=0,
    )

    acquisition_progress_pct: float = Field(
        default=0,
        ge=0,
        le=100,
    )

    acquisition_velocity_pct_per_30d: float = Field(
        default=0,
        ge=0,
    )

    # --------------------------------------------------------
    # Possession
    # --------------------------------------------------------

    possession_progress_pct: float = Field(
        default=0,
        ge=0,
        le=100,
    )

    possession_pending_parcels: int = Field(
        default=0,
        ge=0,
    )

    # --------------------------------------------------------
    # Compensation
    # --------------------------------------------------------

    compensation_total_amount: float = Field(
        default=0,
        ge=0,
    )

    compensation_assessed_amount: float = Field(
        default=0,
        ge=0,
    )

    compensation_disbursed_amount: float = Field(
        default=0,
        ge=0,
    )

    compensation_pending_amount: float = Field(
        default=0,
        ge=0,
    )

    compensation_completion_pct: float = Field(
        default=0,
        ge=0,
        le=100,
    )

    compensation_pending_cases: int = Field(
        default=0,
        ge=0,
    )

    avg_compensation_delay_days: float = Field(
        default=0,
        ge=0,
    )

    # --------------------------------------------------------
    # Documentation
    # --------------------------------------------------------

    documents_required: int = Field(
        default=0,
        ge=0,
    )

    documents_verified: int = Field(
        default=0,
        ge=0,
    )

    documents_pending: int = Field(
        default=0,
        ge=0,
    )

    documentation_completion_pct: float = Field(
        default=0,
        ge=0,
        le=100,
    )

    # --------------------------------------------------------
    # Approvals
    # --------------------------------------------------------

    approvals_required: int = Field(
        default=0,
        ge=0,
    )

    approvals_completed: int = Field(
        default=0,
        ge=0,
    )

    approvals_pending: int = Field(
        default=0,
        ge=0,
    )

    approval_completion_pct: float = Field(
        default=0,
        ge=0,
        le=100,
    )

    avg_approval_delay_days: float = Field(
        default=0,
        ge=0,
    )

    overdue_approvals: int = Field(
        default=0,
        ge=0,
    )

    # --------------------------------------------------------
    # Legal / disputes
    # --------------------------------------------------------

    active_legal_disputes: int = Field(
        default=0,
        ge=0,
    )

    resolved_legal_disputes: int = Field(
        default=0,
        ge=0,
    )

    ownership_disputes: int = Field(
        default=0,
        ge=0,
    )

    court_stay_cases: int = Field(
        default=0,
        ge=0,
    )

    pending_objections: int = Field(
        default=0,
        ge=0,
    )

    # --------------------------------------------------------
    # Rehabilitation & resettlement
    # --------------------------------------------------------

    families_requiring_rr: int = Field(
        default=0,
        ge=0,
    )

    families_rr_completed: int = Field(
        default=0,
        ge=0,
    )

    rr_completion_pct: float = Field(
        default=0,
        ge=0,
        le=100,
    )

    rr_pending_cases: int = Field(
        default=0,
        ge=0,
    )

    # --------------------------------------------------------
    # Stakeholders
    # --------------------------------------------------------

    pending_stakeholder_actions: int = Field(
        default=0,
        ge=0,
    )

    avg_stakeholder_response_days: float = Field(
        default=0,
        ge=0,
    )

    stakeholder_responsiveness_score: float = Field(
        default=0,
        ge=0,
    )

    interdepartmental_pending_actions: int = Field(
        default=0,
        ge=0,
    )

    # --------------------------------------------------------
    # Historical indicators
    #
    # These are optional because the current prototype does
    # not yet have a historical lookup database.
    # --------------------------------------------------------

    district_historical_delay_rate: float = Field(
        default=0,
        ge=0,
        le=1,
    )

    project_type_historical_delay_rate: float = Field(
        default=0,
        ge=0,
        le=1,
    )

    authority_historical_delay_rate: float = Field(
        default=0,
        ge=0,
        le=1,
    )

    historical_avg_delay_days: float = Field(
        default=0,
        ge=0,
    )


# ============================================================
# HEALTH CHECK
# ============================================================

@app.get("/health")
def health() -> dict[str, Any]:
    return {
        "status": "healthy",
        "model_loaded": True,
        "features": len(predictor.feature_names),
    }


# ============================================================
# METADATA
# ============================================================

@app.get("/meta")
def meta() -> dict[str, Any]:
    """
    Metadata used by the frontend for dropdowns and
    model information.
    """

    return {
        "project_types": [
            "Highway",
            "Industrial",
            "Irrigation",
            "Metro",
            "Power",
            "Railway",
            "Urban Development",
        ],

        "land_types": [
            "Agricultural",
            "Commercial",
            "Industrial",
            "Mixed",
            "Residential",
        ],

        "priorities": [
            "Critical",
            "High",
            "Normal",
        ],

        "current_stages": [
            "Closure",
            "Compensation",
            "Notification",
            "Possession",
            "Rehabilitation",
            "Survey",
            "Valuation",
        ],

        "risk_levels": [
            "LOW",
            "MEDIUM",
            "HIGH",
            "CRITICAL",
        ],

        "model": {
            "name": "SIH 26017 Baseline XGBoost",
            "features": len(predictor.feature_names),
            "model_path": MODEL_PATH,
        },
    }


# ============================================================
# READINESS PROBE
# ============================================================

@app.get("/ready")
@app.get("/api/ready")
async def readiness() -> dict[str, Any]:
    """
    Production readiness probe verifying database connectivity,
    storage configuration, and ML model availability.
    """
    db_status = "unknown"
    db_ready = False
    try:
        db = get_database()
        if hasattr(db, "get_collection"):
            users = db.get_collection("users")
            await users.count_documents({})
            db_status = "connected"
            db_ready = True
    except Exception as exc:
        logger.error("Readiness check: Database probe failed: %s", exc)
        db_status = f"unhealthy: {type(exc).__name__}"

    storage_provider = get_storage_provider()
    storage_name = storage_provider.get_provider_name()
    storage_configured = storage_provider.is_configured()

    model_ready = bool(predictor and predictor.model is not None)

    overall_ready = db_ready and model_ready
    response_payload = {
        "status": "ready" if overall_ready else "not_ready",
        "database": {
            "status": db_status,
            "ready": db_ready,
            "provider": "motor_mongodb" if is_production_environment() else "in_memory_or_motor",
        },
        "storage": {
            "provider": storage_name,
            "configured": storage_configured,
        },
        "model": {
            "ready": model_ready,
            "features": len(predictor.feature_names) if predictor else 0,
        },
    }

    if not overall_ready:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=response_payload,
        )

    return response_payload


# ============================================================
# PREDICTION
# ============================================================

@app.post("/predict")
def predict(project: ProjectInput, _limiter: None = Depends(predict_rate_limiter)) -> dict[str, Any]:
    """
    Evaluates land acquisition project risk snapshot using XGBoost model.
    Rate-limited and error-masked to protect model internals.
    """
    try:
        project_data = project.model_dump()
        result = predictor.predict(project_data)
        return result
    except HTTPException:
        raise
    except Exception as exc:
        logger.exception("Prediction processing error: %s", exc)
        raise HTTPException(
            status_code=500,
            detail="Unable to process the risk prediction request right now.",
        ) from exc
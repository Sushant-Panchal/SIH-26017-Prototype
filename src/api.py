from typing import Any

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from contextlib import asynccontextmanager

from .inference import DelayPredictor
from .database import init_indexes
from .case_routes import router as case_router
from .auth_routes import router as auth_router


MODEL_PATH = "models/baseline_model.json"
FEATURE_NAMES_PATH = "models/feature_names.joblib"


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Establish persistent database indexes on startup
    await init_indexes()
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

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Authentication Router
app.include_router(auth_router)

# Persistent Case Management Router
app.include_router(case_router)


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
# PREDICTION
# ============================================================

@app.post("/predict")
def predict(project: ProjectInput) -> dict[str, Any]:

    try:
        project_data = project.model_dump()

        result = predictor.predict(
            project_data
        )

        return result

    except Exception as exc:
        raise HTTPException(
            status_code=500,
            detail=f"Prediction failed: {str(exc)}",
        ) from exc
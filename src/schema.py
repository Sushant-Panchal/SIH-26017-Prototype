from dataclasses import dataclass
from typing import Literal


# ============================================================
# SIH 26017 - Canonical ML Dataset Schema
# ============================================================

PROJECT_TYPES = [
    "Highway",
    "Railway",
    "Metro",
    "Industrial",
    "Irrigation",
    "Power",
    "Urban Development",
]

STAGES = [
    "Notification",
    "Survey",
    "Valuation",
    "Compensation",
    "Possession",
    "Rehabilitation",
    "Closure",
]

PRIORITIES = [
    "Normal",
    "High",
    "Critical",
]

LAND_TYPES = [
    "Agricultural",
    "Residential",
    "Commercial",
    "Industrial",
    "Mixed",
]


@dataclass
class ProjectSnapshot:
    """
    One observation of one land-acquisition project at one point in time.

    Everything above the target fields is information that would be
    available to the system at prediction time.
    """

    # --------------------------------------------------------
    # Identity / time
    # --------------------------------------------------------

    project_id: str
    snapshot_date: str
    snapshot_day: int

    # --------------------------------------------------------
    # Project context
    # --------------------------------------------------------

    project_type: str
    state: str
    district: str
    land_type: str
    priority: str

    land_area_hectares: float
    affected_families: int
    complexity_score: float

    # --------------------------------------------------------
    # Timeline
    # --------------------------------------------------------

    current_stage: str

    days_since_notification: int
    planned_duration_days: int
    days_elapsed: int
    days_in_current_stage: int
    planned_stage_duration_days: int

    schedule_variance_days: float

    milestones_due: int
    milestones_completed: int
    milestones_overdue: int

    # --------------------------------------------------------
    # Land acquisition
    # --------------------------------------------------------

    total_parcels: int
    parcels_acquired: int
    parcels_pending: int

    acquisition_progress_pct: float
    acquisition_velocity_pct_per_30d: float

    possession_progress_pct: float
    possession_pending_parcels: int

    # --------------------------------------------------------
    # Compensation
    # --------------------------------------------------------

    compensation_total_amount: float
    compensation_assessed_amount: float
    compensation_disbursed_amount: float
    compensation_pending_amount: float

    compensation_completion_pct: float
    compensation_pending_cases: int
    avg_compensation_delay_days: float

    # --------------------------------------------------------
    # Documentation
    # --------------------------------------------------------

    documents_required: int
    documents_verified: int
    documents_pending: int
    documentation_completion_pct: float

    # --------------------------------------------------------
    # Approvals
    # --------------------------------------------------------

    approvals_required: int
    approvals_completed: int
    approvals_pending: int

    approval_completion_pct: float
    avg_approval_delay_days: float
    overdue_approvals: int

    # --------------------------------------------------------
    # Legal / ownership
    # --------------------------------------------------------

    active_legal_disputes: int
    resolved_legal_disputes: int
    ownership_disputes: int
    court_stay_cases: int
    pending_objections: int

    # --------------------------------------------------------
    # Rehabilitation & resettlement
    # --------------------------------------------------------

    families_requiring_rr: int
    families_rr_completed: int
    rr_completion_pct: float
    rr_pending_cases: int

    # --------------------------------------------------------
    # Stakeholders
    # --------------------------------------------------------

    pending_stakeholder_actions: int
    avg_stakeholder_response_days: float
    stakeholder_responsiveness_score: float
    interdepartmental_pending_actions: int

    # --------------------------------------------------------
    # Historical context
    # --------------------------------------------------------

    district_historical_delay_rate: float
    project_type_historical_delay_rate: float
    authority_historical_delay_rate: float
    historical_avg_delay_days: float

    # ========================================================
    # TARGETS
    #
    # These are NOT inputs to the model.
    # They describe what happens after this snapshot.
    # ========================================================

    will_be_delayed: int
    additional_delay_days: float
    delay_stage: str
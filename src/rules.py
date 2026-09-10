"""
SIH 26017 - Dataset Generation Rules

This file contains DOMAIN RULES, not random generation code.
The generator will use these rules to create internally consistent
project timelines.
"""

# ============================================================
# General bounds
# ============================================================

MIN_LAND_AREA_HECTARES = 1.0
MAX_LAND_AREA_HECTARES = 5000.0

MIN_AFFECTED_FAMILIES = 1
MAX_AFFECTED_FAMILIES = 5000

MIN_PARCELS = 1
MAX_PARCELS = 5000

MIN_PROJECT_DURATION_DAYS = 180
MAX_PROJECT_DURATION_DAYS = 1800


# ============================================================
# Project types
# ============================================================

PROJECT_TYPE_WEIGHTS = {
    "Highway": 0.30,
    "Railway": 0.20,
    "Metro": 0.10,
    "Industrial": 0.10,
    "Irrigation": 0.10,
    "Power": 0.10,
    "Urban Development": 0.10,
}


# ============================================================
# Land types
# ============================================================

LAND_TYPE_WEIGHTS = {
    "Agricultural": 0.50,
    "Residential": 0.20,
    "Commercial": 0.10,
    "Industrial": 0.10,
    "Mixed": 0.10,
}


# ============================================================
# Priority
# ============================================================

PRIORITY_WEIGHTS = {
    "Normal": 0.60,
    "High": 0.30,
    "Critical": 0.10,
}


# ============================================================
# Project complexity
# ============================================================

COMPLEXITY_MIN = 0.0
COMPLEXITY_MAX = 100.0


# ============================================================
# Stage durations
#
# These are baseline durations.
# Actual duration will be affected by project conditions.
# ============================================================

STAGE_BASE_DURATIONS = {
    "Notification": (15, 45),
    "Survey": (30, 120),
    "Valuation": (30, 120),
    "Compensation": (45, 180),
    "Possession": (30, 150),
    "Rehabilitation": (60, 240),
    "Closure": (15, 90),
}


# ============================================================
# Delay risk factors
#
# These are relative weights used by the target engine.
# They are NOT direct "if X then delay" rules.
# ============================================================

DELAY_FACTORS = {
    "schedule_variance": 0.20,
    "legal_disputes": 0.18,
    "ownership_disputes": 0.15,
    "compensation_pending": 0.12,
    "approval_backlog": 0.10,
    "documentation_pending": 0.08,
    "stakeholder_delay": 0.07,
    "rr_pending": 0.05,
    "acquisition_velocity": 0.05,
}


# ============================================================
# Severity multipliers
# ============================================================

SEVERITY_MULTIPLIERS = {
    "Low": 0.75,
    "Medium": 1.00,
    "High": 1.35,
    "Critical": 1.75,
}


# ============================================================
# Historical delay ranges
# ============================================================

HISTORICAL_DELAY_RATE_MIN = 0.05
HISTORICAL_DELAY_RATE_MAX = 0.65

HISTORICAL_AVG_DELAY_MIN = 5.0
HISTORICAL_AVG_DELAY_MAX = 180.0


# ============================================================
# Data quality rules
# ============================================================

PERCENTAGE_MIN = 0.0
PERCENTAGE_MAX = 100.0

RESPONSE_DAYS_MIN = 0.0
RESPONSE_DAYS_MAX = 365.0

DELAY_DAYS_MIN = 0.0
DELAY_DAYS_MAX = 1000.0


# ============================================================
# Consistency rules
# ============================================================

def percentage(part: float, total: float) -> float:
    """Return a safe percentage."""
    if total <= 0:
        return 0.0

    return min(100.0, max(0.0, (part / total) * 100.0))


def bounded_percentage(value: float) -> float:
    """Keep a percentage inside the valid range."""
    return min(PERCENTAGE_MAX, max(PERCENTAGE_MIN, value))


def bounded_delay(value: float) -> float:
    """Keep predicted/generated delay inside a sensible range."""
    return min(DELAY_DAYS_MAX, max(DELAY_DAYS_MIN, value))
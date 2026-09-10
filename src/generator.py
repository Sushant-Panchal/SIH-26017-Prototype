"""
SIH 26017 - Synthetic Land Acquisition Dataset Generator

Generates realistic project timelines and ML-ready snapshots.

IMPORTANT:
- This dataset is synthetic.
- Targets are generated from the simulated future trajectory.
- No target information is exposed to the input features.
"""

from __future__ import annotations

import argparse
import math
import random
from datetime import date, timedelta
from pathlib import Path

import pandas as pd

from src.rules import (
    LAND_TYPE_WEIGHTS,
    PRIORITY_WEIGHTS,
    PROJECT_TYPE_WEIGHTS,
    STAGE_BASE_DURATIONS,
    percentage,
)


# ============================================================
# Reference geography
# ============================================================

STATES = {
    "Maharashtra": [
        "Pune",
        "Nashik",
        "Ahmednagar",
        "Nagpur",
        "Aurangabad",
        "Thane",
        "Navi Mumbai",
    ],
    "Gujarat": [
        "Ahmedabad",
        "Surat",
        "Vadodara",
        "Rajkot",
    ],
    "Karnataka": [
        "Bengaluru",
        "Mysuru",
        "Hubballi",
        "Mangaluru",
    ],
    "Uttar Pradesh": [
        "Lucknow",
        "Kanpur",
        "Agra",
        "Varanasi",
    ],
    "Rajasthan": [
        "Jaipur",
        "Jodhpur",
        "Kota",
        "Udaipur",
    ],
    "Madhya Pradesh": [
        "Indore",
        "Bhopal",
        "Jabalpur",
        "Gwalior",
    ],
}


# ============================================================
# Utility functions
# ============================================================

def weighted_choice(rng: random.Random, weights: dict[str, float]) -> str:
    values = list(weights.keys())
    probabilities = list(weights.values())
    return rng.choices(values, weights=probabilities, k=1)[0]


def clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def sigmoid(x: float) -> float:
    return 1.0 / (1.0 + math.exp(-x))


# ============================================================
# Project generation
# ============================================================

def generate_project(rng: random.Random, project_number: int) -> dict:
    """Generate the fixed characteristics of one project."""

    state = rng.choice(list(STATES.keys()))
    district = rng.choice(STATES[state])

    project_type = weighted_choice(rng, PROJECT_TYPE_WEIGHTS)
    land_type = weighted_choice(rng, LAND_TYPE_WEIGHTS)
    priority = weighted_choice(rng, PRIORITY_WEIGHTS)

    complexity = clamp(
        rng.gauss(50, 18),
        5,
        95,
    )

    land_area = clamp(
        math.exp(rng.normalvariate(math.log(150), 0.9)),
        1,
        5000,
    )

    affected_families = max(
        1,
        int(land_area * rng.uniform(0.4, 2.5)),
    )

    total_parcels = max(
        1,
        int(land_area * rng.uniform(0.5, 3.0)),
    )

    planned_duration = int(
        clamp(
            360
            + complexity * 5
            + affected_families * 0.08,
            180,
            1800,
        )
    )

    start_date = date(
        2024 + rng.randint(0, 2),
        rng.randint(1, 12),
        rng.randint(1, 28),
    )

    return {
        "project_id": f"SIH26017-{project_number:07d}",
        "project_type": project_type,
        "state": state,
        "district": district,
        "land_type": land_type,
        "priority": priority,
        "land_area_hectares": round(land_area, 2),
        "affected_families": affected_families,
        "complexity_score": round(complexity, 2),
        "total_parcels": total_parcels,
        "planned_duration_days": planned_duration,
        "start_date": start_date,
    }


# ============================================================
# Historical context
# ============================================================

def generate_historical_context(
    rng: random.Random,
    project: dict,
) -> dict:
    """
    Generate historical information that would plausibly be known
    before the current project snapshot.
    """

    district_rate = clamp(
        rng.betavariate(3, 7),
        0.05,
        0.65,
    )

    project_type_rate = clamp(
        rng.betavariate(3, 7),
        0.05,
        0.65,
    )

    authority_rate = clamp(
        rng.betavariate(3, 7),
        0.05,
        0.65,
    )

    avg_delay = clamp(
        rng.lognormvariate(math.log(45), 0.65),
        5,
        180,
    )

    return {
        "district_historical_delay_rate": round(district_rate, 4),
        "project_type_historical_delay_rate": round(
            project_type_rate,
            4,
        ),
        "authority_historical_delay_rate": round(
            authority_rate,
            4,
        ),
        "historical_avg_delay_days": round(avg_delay, 2),
    }


# ============================================================
# Project state simulation
# ============================================================

def generate_state_at_day(
    rng: random.Random,
    project: dict,
    day: int,
    history: dict,
) -> dict:
    """
    Generate the observable state of a project at a particular day.

    The hidden risk factors are correlated with complexity,
    elapsed time, and project characteristics.
    """

    complexity = project["complexity_score"] / 100.0

    # --------------------------------------------------------
    # Base progress
    # --------------------------------------------------------

    expected_progress = clamp(
        day / project["planned_duration_days"],
        0,
        1,
    )

    # Harder projects progress more slowly.
    progress_noise = rng.gauss(0, 0.07)

    acquisition_progress = clamp(
        expected_progress
        * (1.05 - complexity * 0.35)
        + progress_noise,
        0,
        1,
    )

    # --------------------------------------------------------
    # Legal risk
    # --------------------------------------------------------

    legal_lambda = (
        0.5
        + complexity * 4
        + project["affected_families"] / 1500
    )

    active_legal = rng.poisson(lam=max(0.1, legal_lambda)) \
        if hasattr(rng, "poisson") else max(
            0,
            int(rng.gauss(legal_lambda, max(1, legal_lambda * 0.35))),
        )

    active_legal = max(0, active_legal)

    ownership_probability = clamp(
        0.05 + complexity * 0.30,
        0.02,
        0.45,
    )

    ownership_disputes = (
        rng.randint(1, max(1, active_legal))
        if active_legal > 0 and rng.random() < ownership_probability
        else 0
    )

    court_stays = (
        rng.randint(1, max(1, ownership_disputes))
        if ownership_disputes > 0 and rng.random() < 0.20
        else 0
    )

    # --------------------------------------------------------
    # Documentation
    # --------------------------------------------------------

    documents_required = max(
        4,
        int(
            project["total_parcels"] * rng.uniform(0.5, 1.2)
        ),
    )

    documentation_quality = clamp(
        0.92 - complexity * 0.25 + rng.gauss(0, 0.05),
        0.35,
        1.0,
    )

    documents_verified = int(
        documents_required
        * acquisition_progress
        * documentation_quality
    )

    documents_verified = min(
        documents_required,
        max(0, documents_verified),
    )

    documents_pending = (
        documents_required - documents_verified
    )

    # --------------------------------------------------------
    # Compensation
    # --------------------------------------------------------

    compensation_total = (
        project["land_area_hectares"]
        * rng.uniform(800_000, 2_500_000)
    )

    assessed_ratio = clamp(
        0.85 + rng.gauss(0, 0.08),
        0.60,
        1.05,
    )

    compensation_assessed = (
        compensation_total * assessed_ratio
    )

    compensation_completion = clamp(
        acquisition_progress
        * (0.95 - complexity * 0.25)
        + rng.gauss(0, 0.05),
        0,
        1,
    )

    compensation_disbursed = (
        compensation_assessed
        * compensation_completion
    )

    compensation_pending = max(
        0,
        compensation_assessed - compensation_disbursed,
    )

    compensation_pending_cases = max(
        0,
        int(
            project["affected_families"]
            * (1 - compensation_completion)
        ),
    )

    avg_compensation_delay = (
        max(
            0,
            rng.gauss(
                15 + complexity * 100,
                10,
            ),
        )
        if compensation_pending_cases > 0
        else 0
    )

    # --------------------------------------------------------
    # Approvals
    # --------------------------------------------------------

    approvals_required = max(
        2,
        int(3 + complexity * 5),
    )

    approval_completion = clamp(
        expected_progress
        * (1.05 - complexity * 0.20)
        + rng.gauss(0, 0.06),
        0,
        1,
    )

    approvals_completed = min(
        approvals_required,
        int(approvals_required * approval_completion),
    )

    approvals_pending = (
        approvals_required - approvals_completed
    )

    avg_approval_delay = (
        max(
            0,
            rng.gauss(
                10 + complexity * 70,
                8,
            ),
        )
        if approvals_pending > 0
        else 0
    )

    overdue_approvals = max(
        0,
        int(
            approvals_pending
            * clamp(0.2 + complexity * 0.6, 0, 1)
        ),
    )

    # --------------------------------------------------------
    # Objections
    # --------------------------------------------------------

    pending_objections = max(
        0,
        int(
            project["affected_families"]
            * clamp(
                0.01
                + complexity * 0.08
                + rng.gauss(0, 0.01),
                0,
                0.30,
            )
        ),
    )

    # --------------------------------------------------------
    # Possession
    # --------------------------------------------------------

    possession_progress = clamp(
        acquisition_progress
        * (
            0.90
            - ownership_disputes * 0.015
            - court_stays * 0.05
        )
        + rng.gauss(0, 0.03),
        0,
        1,
    )

    possession_pending = max(
        0,
        project["total_parcels"]
        - int(project["total_parcels"] * possession_progress),
    )

    # --------------------------------------------------------
    # R&R
    # --------------------------------------------------------

    families_requiring_rr = int(
        project["affected_families"]
        * rng.uniform(0.25, 0.75)
    )

    rr_completion = clamp(
        possession_progress
        * (0.90 - complexity * 0.20)
        + rng.gauss(0, 0.05),
        0,
        1,
    )

    families_rr_completed = min(
        families_requiring_rr,
        int(families_requiring_rr * rr_completion),
    )

    rr_pending = (
        families_requiring_rr
        - families_rr_completed
    )

    # --------------------------------------------------------
    # Stakeholders
    # --------------------------------------------------------

    response_days = max(
        1,
        rng.gauss(
            8 + complexity * 35,
            5,
        ),
    )

    responsiveness = clamp(
        100 - response_days * 1.7,
        0,
        100,
    )

    pending_actions = max(
        0,
        int(
            1
            + complexity * 8
            + approvals_pending * 0.5
            + rng.gauss(0, 1.5)
        ),
    )

    interdepartmental_actions = max(
        0,
        int(
            pending_actions
            * rng.uniform(0.25, 0.65)
        ),
    )

    # --------------------------------------------------------
    # Milestones / schedule
    # --------------------------------------------------------

    milestones_due = max(
        1,
        int(day / 45),
    )

    milestone_completion = clamp(
        acquisition_progress
        * (1.10 - complexity * 0.30),
        0,
        1,
    )

    milestones_completed = min(
        milestones_due,
        int(milestones_due * milestone_completion),
    )

    milestones_overdue = max(
        0,
        milestones_due - milestones_completed,
    )

    schedule_variance = (
        day
        - project["planned_duration_days"]
        * expected_progress
        * (1 - acquisition_progress + expected_progress)
    )

    # --------------------------------------------------------
    # Current stage
    # --------------------------------------------------------

    stage_progress = acquisition_progress

    if stage_progress < 0.10:
        current_stage = "Notification"
    elif stage_progress < 0.30:
        current_stage = "Survey"
    elif stage_progress < 0.45:
        current_stage = "Valuation"
    elif stage_progress < 0.70:
        current_stage = "Compensation"
    elif stage_progress < 0.85:
        current_stage = "Possession"
    elif stage_progress < 0.97:
        current_stage = "Rehabilitation"
    else:
        current_stage = "Closure"

    stage_index = list(STAGE_BASE_DURATIONS).index(current_stage)

    previous_stage_fraction = (
        stage_index / len(STAGE_BASE_DURATIONS)
    )

    days_in_current_stage = max(
        1,
        int(
            day
            - previous_stage_fraction
            * project["planned_duration_days"]
        ),
    )

    stage_low, stage_high = STAGE_BASE_DURATIONS[current_stage]

    planned_stage_duration = rng.randint(
        stage_low,
        stage_high,
    )

    return {
        "current_stage": current_stage,
        "days_since_notification": day,
        "planned_duration_days": project["planned_duration_days"],
        "days_elapsed": day,
        "days_in_current_stage": days_in_current_stage,
        "planned_stage_duration_days": planned_stage_duration,
        "schedule_variance_days": round(schedule_variance, 2),

        "milestones_due": milestones_due,
        "milestones_completed": milestones_completed,
        "milestones_overdue": milestones_overdue,

        "total_parcels": project["total_parcels"],
        "parcels_acquired": int(
            project["total_parcels"] * acquisition_progress
        ),
        "parcels_pending": max(
            0,
            project["total_parcels"]
            - int(project["total_parcels"] * acquisition_progress),
        ),

        "acquisition_progress_pct": round(
            percentage(
                int(project["total_parcels"] * acquisition_progress),
                project["total_parcels"],
            ),
            2,
        ),

        "acquisition_velocity_pct_per_30d": round(
            acquisition_progress / max(day, 30) * 30 * 100,
            2,
        ),

        "possession_progress_pct": round(
            possession_progress * 100,
            2,
        ),

        "possession_pending_parcels": possession_pending,

        "compensation_total_amount": round(
            compensation_total,
            2,
        ),
        "compensation_assessed_amount": round(
            compensation_assessed,
            2,
        ),
        "compensation_disbursed_amount": round(
            compensation_disbursed,
            2,
        ),
        "compensation_pending_amount": round(
            compensation_pending,
            2,
        ),

        "compensation_completion_pct": round(
            percentage(
                compensation_disbursed,
                compensation_assessed,
            ),
            2,
        ),

        "compensation_pending_cases": compensation_pending_cases,

        "avg_compensation_delay_days": round(
            avg_compensation_delay,
            2,
        ),

        "documents_required": documents_required,
        "documents_verified": documents_verified,
        "documents_pending": documents_pending,

        "documentation_completion_pct": round(
            percentage(
                documents_verified,
                documents_required,
            ),
            2,
        ),

        "approvals_required": approvals_required,
        "approvals_completed": approvals_completed,
        "approvals_pending": approvals_pending,

        "approval_completion_pct": round(
            percentage(
                approvals_completed,
                approvals_required,
            ),
            2,
        ),

        "avg_approval_delay_days": round(
            avg_approval_delay,
            2,
        ),

        "overdue_approvals": overdue_approvals,

        "active_legal_disputes": active_legal,
        "resolved_legal_disputes": max(
            0,
            int(active_legal * rng.uniform(0, 0.4)),
        ),
        "ownership_disputes": ownership_disputes,
        "court_stay_cases": court_stays,
        "pending_objections": pending_objections,

        "families_requiring_rr": families_requiring_rr,
        "families_rr_completed": families_rr_completed,
        "rr_completion_pct": round(
            percentage(
                families_rr_completed,
                families_requiring_rr,
            ),
            2,
        ),
        "rr_pending_cases": rr_pending,

        "pending_stakeholder_actions": pending_actions,
        "avg_stakeholder_response_days": round(
            response_days,
            2,
        ),
        "stakeholder_responsiveness_score": round(
            responsiveness,
            2,
        ),
        "interdepartmental_pending_actions":
            interdepartmental_actions,

        **history,
    }


# ============================================================
# Target generation
# ============================================================

def calculate_target(
    rng: random.Random,
    project: dict,
    state: dict,
) -> tuple[int, float, str]:
    """
    Generate the future outcome from the current state.

    The target is intentionally influenced by multiple interacting
    risk factors rather than one simple threshold.
    """

    complexity = project["complexity_score"] / 100

    risk = -1.8

    risk += complexity * 1.4

    risk += clamp(
        state["schedule_variance_days"] / 120,
        -1,
        2,
    ) * 1.2

    risk += clamp(
        state["active_legal_disputes"] / 15,
        0,
        2,
    ) * 1.3

    risk += clamp(
        state["ownership_disputes"] / 8,
        0,
        2,
    ) * 1.1

    risk += clamp(
        state["court_stay_cases"] / 3,
        0,
        2,
    ) * 1.5

    risk += clamp(
        state["compensation_pending_cases"] / 100,
        0,
        2,
    ) * 0.9

    risk += clamp(
        state["approvals_pending"] / 10,
        0,
        2,
    ) * 0.8

    risk += clamp(
        state["documents_pending"] / 100,
        0,
        2,
    ) * 0.7

    risk += clamp(
        state["pending_objections"] / 100,
        0,
        2,
    ) * 0.8

    risk += clamp(
        state["avg_stakeholder_response_days"] / 60,
        0,
        2,
    ) * 0.6

    risk += clamp(
        (100 - state["stakeholder_responsiveness_score"]) / 100,
        0,
        1,
    ) * 0.5

    probability = sigmoid(risk)

    # Small irreducible uncertainty.
    probability = clamp(
        probability + rng.gauss(0, 0.025),
        0.01,
        0.99,
    )

    delayed = rng.random() < probability

    if not delayed:
        return 0, 0.0, "none"

    # Determine the dominant bottleneck.
    bottlenecks = {
        "Legal": (
            state["active_legal_disputes"] * 1.5
            + state["ownership_disputes"] * 1.8
            + state["court_stay_cases"] * 3
        ),
        "Compensation": (
            state["compensation_pending_cases"] * 0.8
            + state["avg_compensation_delay_days"] * 0.25
        ),
        "Approval": (
            state["approvals_pending"] * 2
            + state["overdue_approvals"] * 3
            + state["avg_approval_delay_days"] * 0.15
        ),
        "Documentation": (
            state["documents_pending"] * 0.5
        ),
        "Rehabilitation": (
            state["rr_pending_cases"] * 0.3
        ),
        "Acquisition": (
            max(
                0,
                50 - state["acquisition_velocity_pct_per_30d"],
            )
        ),
    }

    delay_stage = max(
        bottlenecks,
        key=bottlenecks.get,
    )

    base_delay = (
        20
        + complexity * 100
        + max(0, state["schedule_variance_days"]) * 0.4
    )

    severity = (
        1
        + state["active_legal_disputes"] * 0.03
        + state["ownership_disputes"] * 0.06
        + state["court_stay_cases"] * 0.15
    )

    delay_days = clamp(
        rng.gauss(
            base_delay * severity,
            max(5, base_delay * 0.20),
        ),
        5,
        1000,
    )

    return 1, round(delay_days, 2), delay_stage


# ============================================================
# Snapshot generation
# ============================================================

def generate_project_snapshots(
    rng: random.Random,
    project: dict,
    history: dict,
) -> list[dict]:
    """Generate multiple time snapshots for one project."""

    max_day = min(
        project["planned_duration_days"],
        900,
    )

    possible_days = list(
        range(
            30,
            max_day + 1,
            30,
        )
    )

    # Every project gets several observations.
    snapshot_count = min(
        len(possible_days),
        rng.randint(5, 10),
    )

    days = sorted(
        rng.sample(
            possible_days,
            snapshot_count,
        )
    )

    rows = []

    for day in days:
        state = generate_state_at_day(
            rng,
            project,
            day,
            history,
        )

        will_be_delayed, delay_days, delay_stage = calculate_target(
            rng,
            project,
            state,
        )

        snapshot_date = (
            project["start_date"]
            + timedelta(days=day)
        )

        row = {
            "project_id": project["project_id"],
            "snapshot_date": snapshot_date.isoformat(),
            "snapshot_day": day,

            "project_type": project["project_type"],
            "state": project["state"],
            "district": project["district"],
            "land_type": project["land_type"],
            "priority": project["priority"],

            "land_area_hectares": project["land_area_hectares"],
            "affected_families": project["affected_families"],
            "complexity_score": project["complexity_score"],

            **state,

            "will_be_delayed": will_be_delayed,
            "additional_delay_days": delay_days,
            "delay_stage": delay_stage,
        }

        rows.append(row)

    return rows


# ============================================================
# Dataset generation
# ============================================================

def generate_dataset(
    row_target: int,
    seed: int = 42,
) -> pd.DataFrame:
    """
    Generate approximately row_target observations.

    Projects are generated until enough snapshots exist.
    """

    rng = random.Random(seed)

    rows: list[dict] = []
    project_number = 1

    while len(rows) < row_target:
        project = generate_project(
            rng,
            project_number,
        )

        history = generate_historical_context(
            rng,
            project,
        )

        project_rows = generate_project_snapshots(
            rng,
            project,
            history,
        )

        rows.extend(project_rows)

        project_number += 1

        if project_number % 100 == 0:
            print(
                f"Generated {len(rows):,} rows "
                f"from {project_number - 1:,} projects..."
            )

    return pd.DataFrame(rows[:row_target])


# ============================================================
# Main
# ============================================================

def main() -> None:
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "--rows",
        type=int,
        default=10_000,
    )

    parser.add_argument(
        "--seed",
        type=int,
        default=42,
    )

    parser.add_argument(
        "--output",
        type=str,
        default="data/processed/test_dataset.parquet",
    )

    args = parser.parse_args()

    print("=" * 60)
    print("SIH 26017 DATASET GENERATOR")
    print("=" * 60)
    print(f"Target rows : {args.rows:,}")
    print(f"Seed        : {args.seed}")
    print(f"Output      : {args.output}")
    print()

    df = generate_dataset(
        row_target=args.rows,
        seed=args.seed,
    )

    output_path = Path(args.output)
    output_path.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    df.to_parquet(
        output_path,
        index=False,
    )

    print()
    print("=" * 60)
    print("GENERATION COMPLETE")
    print("=" * 60)
    print(f"Rows       : {len(df):,}")
    print(f"Columns    : {len(df.columns):,}")
    print(f"Projects   : {df['project_id'].nunique():,}")
    print(f"File       : {output_path}")
    print(f"File size  : {output_path.stat().st_size / 1024 / 1024:.2f} MB")
    print()
    print(
        "Delayed    : "
        f"{df['will_be_delayed'].mean() * 100:.2f}%"
    )


if __name__ == "__main__":
    main()
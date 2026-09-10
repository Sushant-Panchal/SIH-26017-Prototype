from pathlib import Path

import pandas as pd


REQUIRED_COLUMNS = [
    "project_id",
    "snapshot_date",
    "snapshot_day",
    "project_type",
    "state",
    "district",
    "land_type",
    "priority",
    "land_area_hectares",
    "affected_families",
    "complexity_score",
    "current_stage",
    "days_since_notification",
    "planned_duration_days",
    "days_elapsed",
    "days_in_current_stage",
    "planned_stage_duration_days",
    "schedule_variance_days",
    "milestones_due",
    "milestones_completed",
    "milestones_overdue",
    "total_parcels",
    "parcels_acquired",
    "parcels_pending",
    "acquisition_progress_pct",
    "acquisition_velocity_pct_per_30d",
    "possession_progress_pct",
    "possession_pending_parcels",
    "compensation_total_amount",
    "compensation_assessed_amount",
    "compensation_disbursed_amount",
    "compensation_pending_amount",
    "compensation_completion_pct",
    "compensation_pending_cases",
    "avg_compensation_delay_days",
    "documents_required",
    "documents_verified",
    "documents_pending",
    "documentation_completion_pct",
    "approvals_required",
    "approvals_completed",
    "approvals_pending",
    "approval_completion_pct",
    "avg_approval_delay_days",
    "overdue_approvals",
    "active_legal_disputes",
    "resolved_legal_disputes",
    "ownership_disputes",
    "court_stay_cases",
    "pending_objections",
    "families_requiring_rr",
    "families_rr_completed",
    "rr_completion_pct",
    "rr_pending_cases",
    "pending_stakeholder_actions",
    "avg_stakeholder_response_days",
    "stakeholder_responsiveness_score",
    "interdepartmental_pending_actions",
    "district_historical_delay_rate",
    "project_type_historical_delay_rate",
    "authority_historical_delay_rate",
    "historical_avg_delay_days",
    "will_be_delayed",
    "additional_delay_days",
    "delay_stage",
]


def check_range(
    df: pd.DataFrame,
    column: str,
    minimum: float,
    maximum: float,
) -> list[str]:
    errors = []

    bad = df[
        (df[column] < minimum)
        | (df[column] > maximum)
    ]

    if len(bad):
        errors.append(
            f"{column}: {len(bad):,} values outside "
            f"[{minimum}, {maximum}]"
        )

    return errors


def validate_dataset(path: str) -> bool:
    print("=" * 60)
    print("SIH 26017 DATASET VALIDATION")
    print("=" * 60)

    path = Path(path)

    if not path.exists():
        print(f"ERROR: File does not exist: {path}")
        return False

    df = pd.read_parquet(path)

    print(f"Rows:    {len(df):,}")
    print(f"Columns: {len(df.columns):,}")
    print()

    errors = []

    # --------------------------------------------------------
    # Columns
    # --------------------------------------------------------

    missing_columns = [
        column
        for column in REQUIRED_COLUMNS
        if column not in df.columns
    ]

    if missing_columns:
        errors.append(
            f"Missing columns: {missing_columns}"
        )

    # --------------------------------------------------------
    # Nulls
    # --------------------------------------------------------

    null_columns = df.columns[df.isna().any()].tolist()

    if null_columns:
        errors.append(
            f"Columns containing NULL values: {null_columns}"
        )

    # --------------------------------------------------------
    # Duplicate rows
    # --------------------------------------------------------

    duplicates = df.duplicated().sum()

    if duplicates:
        errors.append(
            f"Duplicate rows: {duplicates:,}"
        )

    # --------------------------------------------------------
    # Project IDs
    # --------------------------------------------------------

    if df["project_id"].is_unique:
        print(
            "NOTE: project_id is unique per row."
        )
        print(
            "This is unexpected because snapshots should share "
            "project IDs."
        )

    # --------------------------------------------------------
    # Basic ranges
    # --------------------------------------------------------

    range_checks = [
        ("land_area_hectares", 1, 5000),
        ("affected_families", 1, 5000),
        ("complexity_score", 0, 100),

        ("acquisition_progress_pct", 0, 100),
        ("possession_progress_pct", 0, 100),
        ("compensation_completion_pct", 0, 100),
        ("documentation_completion_pct", 0, 100),
        ("approval_completion_pct", 0, 100),
        ("rr_completion_pct", 0, 100),

        ("stakeholder_responsiveness_score", 0, 100),

        ("will_be_delayed", 0, 1),
        ("additional_delay_days", 0, 1000),
    ]

    for column, minimum, maximum in range_checks:
        if column in df.columns:
            errors.extend(
                check_range(
                    df,
                    column,
                    minimum,
                    maximum,
                )
            )

    # --------------------------------------------------------
    # Count consistency
    # --------------------------------------------------------

    consistency_checks = [
        (
            "parcels_acquired + parcels_pending == total_parcels",
            (
                df["parcels_acquired"]
                + df["parcels_pending"]
                != df["total_parcels"]
            ),
        ),
        (
            "documents_verified + documents_pending == documents_required",
            (
                df["documents_verified"]
                + df["documents_pending"]
                != df["documents_required"]
            ),
        ),
        (
            "approvals_completed + approvals_pending == approvals_required",
            (
                df["approvals_completed"]
                + df["approvals_pending"]
                != df["approvals_required"]
            ),
        ),
        (
            "families_rr_completed + rr_pending_cases == families_requiring_rr",
            (
                df["families_rr_completed"]
                + df["rr_pending_cases"]
                != df["families_requiring_rr"]
            ),
        ),
    ]

    for description, condition in consistency_checks:
        count = condition.sum()

        if count:
            errors.append(
                f"{description}: {count:,} violations"
            )

    # --------------------------------------------------------
    # Percentage consistency
    # --------------------------------------------------------

    acquisition_expected = (
        df["parcels_acquired"]
        / df["total_parcels"]
        * 100
    )

    acquisition_error = (
        (acquisition_expected - df["acquisition_progress_pct"])
        .abs()
        > 0.1
    ).sum()

    if acquisition_error:
        errors.append(
            "acquisition_progress_pct does not match "
            "parcel counts"
        )

    documentation_expected = (
        df["documents_verified"]
        / df["documents_required"]
        * 100
    )

    documentation_error = (
        (
            documentation_expected
            - df["documentation_completion_pct"]
        ).abs()
        > 0.1
    ).sum()

    if documentation_error:
        errors.append(
            "documentation_completion_pct does not match "
            "document counts"
        )

    # --------------------------------------------------------
    # Target consistency
    # --------------------------------------------------------

    not_delayed_with_delay = (
        (df["will_be_delayed"] == 0)
        & (df["additional_delay_days"] != 0)
    ).sum()

    if not_delayed_with_delay:
        errors.append(
            "Rows marked not delayed have non-zero delay days"
        )

    delayed_without_delay = (
        (df["will_be_delayed"] == 1)
        & (df["additional_delay_days"] <= 0)
    ).sum()

    if delayed_without_delay:
        errors.append(
            "Rows marked delayed have zero/negative delay days"
        )

    # --------------------------------------------------------
    # Results
    # --------------------------------------------------------

    print()

    if errors:
        print("VALIDATION FAILED")
        print("-" * 60)

        for error in errors:
            print(f"[ERROR] {error}")

        print("-" * 60)

        return False

    print("VALIDATION PASSED")
    print()
    print("All structural and consistency checks passed.")

    return True


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser()

    parser.add_argument(
        "path",
        nargs="?",
        default="data/processed/test_dataset.parquet",
    )

    args = parser.parse_args()

    success = validate_dataset(args.path)

    raise SystemExit(0 if success else 1)
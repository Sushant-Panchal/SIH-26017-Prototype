from pathlib import Path

import pandas as pd


DATA_PATH = "data/processed/test_dataset.parquet"


def main():
    print("=" * 70)
    print("SIH 26017 DATASET DIAGNOSTICS")
    print("=" * 70)

    path = Path(DATA_PATH)

    if not path.exists():
        raise FileNotFoundError(
            f"Dataset not found: {DATA_PATH}"
        )

    df = pd.read_parquet(path)

    # ========================================================
    # DATASET
    # ========================================================

    print()
    print("DATASET")
    print("-" * 70)

    print(f"Rows:              {len(df):,}")
    print(f"Columns:           {len(df.columns):,}")
    print(f"Projects:          {df['project_id'].nunique():,}")
    print(
        f"Snapshots/project: "
        f"{df.groupby('project_id').size().mean():.2f}"
    )

    # ========================================================
    # TARGET
    # ========================================================

    print()
    print("TARGET")
    print("-" * 70)

    delayed = df["will_be_delayed"].sum()
    not_delayed = (df["will_be_delayed"] == 0).sum()

    print(f"Delayed:           {delayed:,}")
    print(f"Not delayed:       {not_delayed:,}")
    print(
        f"Delay rate:        "
        f"{df['will_be_delayed'].mean() * 100:.2f}%"
    )

    # ========================================================
    # TARGET BY PROJECT
    # ========================================================

    print()
    print("TARGET BY PROJECT")
    print("-" * 70)

    project_target = (
        df.groupby("project_id")["will_be_delayed"]
        .agg(["count", "mean", "sum"])
    )

    always_delayed = (
        project_target["mean"] == 1
    ).sum()

    never_delayed = (
        project_target["mean"] == 0
    ).sum()

    mixed_outcomes = (
        (project_target["mean"] > 0)
        & (project_target["mean"] < 1)
    ).sum()

    print(
        f"Projects always delayed:      "
        f"{always_delayed:,}"
    )

    print(
        f"Projects never delayed:       "
        f"{never_delayed:,}"
    )

    print(
        f"Projects with mixed outcomes: "
        f"{mixed_outcomes:,}"
    )

    # ========================================================
    # PROJECT OUTCOME DISTRIBUTION
    # ========================================================

    print()
    print("PROJECT OUTCOME DISTRIBUTION")
    print("-" * 70)

    print(
        f"Average delayed snapshots/project: "
        f"{project_target['mean'].mean() * 100:.2f}%"
    )

    print(
        f"Median delayed snapshots/project:  "
        f"{project_target['mean'].median() * 100:.2f}%"
    )

    print(
        f"Min delayed snapshots/project:     "
        f"{project_target['mean'].min() * 100:.2f}%"
    )

    print(
        f"Max delayed snapshots/project:     "
        f"{project_target['mean'].max() * 100:.2f}%"
    )

    # ========================================================
    # TARGET BY PROJECT AGE
    # ========================================================

    print()
    print("TARGET BY PROJECT AGE")
    print("-" * 70)

    age_groups = pd.cut(
        df["snapshot_day"],
        bins=[
            0,
            90,
            180,
            270,
            360,
            540,
            720,
            1000,
        ],
    )

    age_target = (
        df.groupby(
            age_groups,
            observed=False,
        )["will_be_delayed"]
        .agg(["count", "mean"])
    )

    age_target["mean"] *= 100

    print(
        age_target.to_string(
            formatters={
                "mean": "{:.2f}%".format,
            }
        )
    )

    # ========================================================
    # NUMERIC FEATURES
    # ========================================================

    print()
    print("NUMERIC FEATURES")
    print("-" * 70)

    numeric = df.select_dtypes(
        include=["number"]
    )

    stats = numeric.describe().T

    print(
        stats[
            ["min", "mean", "50%", "max"]
        ].to_string()
    )

    # ========================================================
    # MISSING VALUES
    # ========================================================

    print()
    print("MISSING VALUES")
    print("-" * 70)

    nulls = df.isna().sum()

    nulls = nulls[
        nulls > 0
    ].sort_values(
        ascending=False
    )

    if len(nulls) == 0:
        print("No missing values.")
    else:
        print(nulls.to_string())

    # ========================================================
    # DUPLICATES
    # ========================================================

    print()
    print("DUPLICATES")
    print("-" * 70)

    print(
        f"Duplicate rows: "
        f"{df.duplicated().sum():,}"
    )

    # ========================================================
    # TARGET CORRELATIONS
    # ========================================================

    print()
    print("TARGET CORRELATIONS")
    print("-" * 70)

    # Remove future outcome fields from feature correlation.
    feature_numeric = numeric.drop(
        columns=[
            "will_be_delayed",
            "additional_delay_days",
        ],
        errors="ignore",
    )

    correlations = (
        feature_numeric
        .corrwith(df["will_be_delayed"])
        .sort_values(ascending=False)
    )

    print(
        correlations.to_string()
    )
    # ========================================================
    # FEATURE RELATIONSHIPS
    # ========================================================

    print()
    print("FEATURE RELATIONSHIPS")
    print("-" * 70)

    relationship_pairs = [
        (
            "district_historical_delay_rate",
            "will_be_delayed",
        ),
        (
            "project_type_historical_delay_rate",
            "will_be_delayed",
        ),
        (
            "authority_historical_delay_rate",
            "will_be_delayed",
        ),
        (
            "historical_avg_delay_days",
            "will_be_delayed",
        ),
        (
            "schedule_variance_days",
            "will_be_delayed",
        ),
        (
            "acquisition_progress_pct",
            "will_be_delayed",
        ),
        (
            "compensation_pending_cases",
            "will_be_delayed",
        ),
        (
            "pending_objections",
            "will_be_delayed",
        ),
    ]

    for feature, target in relationship_pairs:
        correlation = df[feature].corr(
            df[target]
        )

        print(
            f"{feature:<40}"
            f"{correlation:>8.4f}"
        )

    # ========================================================
    # TEMPORAL CONSISTENCY
    # ========================================================

    print()
    print("TEMPORAL CONSISTENCY")
    print("-" * 70)

    temporal_columns = [
        "snapshot_day",
        "days_elapsed",
        "acquisition_progress_pct",
        "possession_progress_pct",
        "documents_pending",
        "approvals_pending",
        "compensation_pending_cases",
        "rr_pending_cases",
        "schedule_variance_days",
    ]

    for column in temporal_columns:

        unique_per_project = (
            df.groupby("project_id")[column]
            .nunique()
        )

        changing_projects = (
            unique_per_project > 1
        ).sum()

        print(
            f"{column:<40}"
            f"{changing_projects:,} projects changing"
        )

    # ========================================================
    # CATEGORICAL DISTRIBUTIONS
    # ========================================================

    print()
    print("CATEGORICAL DISTRIBUTIONS")
    print("-" * 70)

    categorical_columns = [
        "project_type",
        "state",
        "land_type",
        "priority",
        "current_stage",
        "district",
    ]

    for column in categorical_columns:

        print()
        print(f"{column}:")

        print(
            df[column]
            .value_counts()
            .to_string()
        )

    # ========================================================
    # COMPLETE
    # ========================================================

    print()
    print("=" * 70)
    print("DIAGNOSTICS COMPLETE")
    print("=" * 70)


if __name__ == "__main__":
    main()
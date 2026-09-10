from pathlib import Path

import pandas as pd


DATA_PATH = "data/processed/test_dataset.parquet"


def main():
    print("=" * 70)
    print("SIH 26017 TEMPORAL DATASET DIAGNOSTICS")
    print("=" * 70)

    path = Path(DATA_PATH)

    if not path.exists():
        raise FileNotFoundError(
            f"Dataset not found: {DATA_PATH}"
        )

    df = pd.read_parquet(path)

    # --------------------------------------------------------
    # Snapshot timeline
    # --------------------------------------------------------

    print()
    print("SNAPSHOT TIMELINE")
    print("-" * 70)

    print(
        f"Minimum snapshot day: "
        f"{df['snapshot_day'].min():.0f}"
    )

    print(
        f"Maximum snapshot day: "
        f"{df['snapshot_day'].max():.0f}"
    )

    print(
        f"Median snapshot day:  "
        f"{df['snapshot_day'].median():.0f}"
    )

    # --------------------------------------------------------
    # Snapshot distribution
    # --------------------------------------------------------

    print()
    print("SNAPSHOT DISTRIBUTION")
    print("-" * 70)

    bins = [
        0,
        90,
        180,
        270,
        360,
        450,
        540,
        630,
        720,
        810,
        900,
    ]

    groups = pd.cut(
        df["snapshot_day"],
        bins=bins,
        include_lowest=True,
    )

    distribution = (
        df.groupby(
            groups,
            observed=False,
        )["project_id"]
        .agg(["count", "nunique"])
    )

    distribution.columns = [
        "snapshots",
        "projects",
    ]

    print(
        distribution.to_string()
    )

    # --------------------------------------------------------
    # Project coverage across time
    # --------------------------------------------------------

    print()
    print("PROJECT TEMPORAL COVERAGE")
    print("-" * 70)

    project_time = (
        df.groupby("project_id")["snapshot_day"]
        .agg(["min", "max", "count"])
    )

    project_time["span_days"] = (
        project_time["max"]
        - project_time["min"]
    )

    print(
        f"Projects:              "
        f"{len(project_time):,}"
    )

    print(
        f"Average span:           "
        f"{project_time['span_days'].mean():.2f} days"
    )

    print(
        f"Median span:            "
        f"{project_time['span_days'].median():.2f} days"
    )

    print(
        f"Projects spanning >180 days: "
        f"{(project_time['span_days'] > 180).sum():,}"
    )

    print(
        f"Projects spanning >360 days: "
        f"{(project_time['span_days'] > 360).sum():,}"
    )

    # --------------------------------------------------------
    # Candidate temporal cutoffs
    # --------------------------------------------------------

    print()
    print("CANDIDATE TEMPORAL SPLITS")
    print("-" * 70)

    for cutoff in [540, 600, 630, 660, 720]:

        train = df[
            df["snapshot_day"] <= cutoff
        ]

        test = df[
            df["snapshot_day"] > cutoff
        ]

        train_projects = set(
            train["project_id"]
        )

        test_projects = set(
            test["project_id"]
        )

        overlap = (
            train_projects
            & test_projects
        )

        print()
        print(f"Cutoff: day {cutoff}")

        print(
            f"Training rows:       "
            f"{len(train):,}"
        )

        print(
            f"Testing rows:        "
            f"{len(test):,}"
        )

        print(
            f"Training projects:   "
            f"{len(train_projects):,}"
        )

        print(
            f"Testing projects:    "
            f"{len(test_projects):,}"
        )

        print(
            f"Project overlap:     "
            f"{len(overlap):,}"
        )

        print(
            f"Training delay rate: "
            f"{train['will_be_delayed'].mean() * 100:.2f}%"
        )

        print(
            f"Testing delay rate:  "
            f"{test['will_be_delayed'].mean() * 100:.2f}%"
        )

    print()
    print("=" * 70)
    print("TEMPORAL DIAGNOSTICS COMPLETE")
    print("=" * 70)


if __name__ == "__main__":
    main()
from pathlib import Path

import pandas as pd


DATA_PATH = "data/processed/test_dataset.parquet"


def main():
    print("=" * 70)
    print("SIH 26017 DATA LEAKAGE CHECK")
    print("=" * 70)

    path = Path(DATA_PATH)

    if not path.exists():
        raise FileNotFoundError(
            f"Dataset not found: {DATA_PATH}"
        )

    df = pd.read_parquet(path)

    # ========================================================
    # TARGET / FUTURE COLUMNS
    # ========================================================

    print()
    print("TARGET / FUTURE COLUMNS")
    print("-" * 70)

    future_columns = [
        "will_be_delayed",
        "additional_delay_days",
        "delay_stage",
    ]

    for column in future_columns:
        if column in df.columns:
            print(f"[FOUND] {column}")

    # ========================================================
    # CHECK 1: TARGET CORRELATION
    # ========================================================

    print()
    print("FEATURES MOST RELATED TO TARGET")
    print("-" * 70)

    numeric = df.select_dtypes(
        include=["number"]
    )

    correlations = (
        numeric
        .corr()["will_be_delayed"]
        .drop("will_be_delayed")
        .abs()
        .sort_values(ascending=False)
    )

    print(
        correlations.head(20).to_string()
    )

    # ========================================================
    # CHECK 2: FEATURES IDENTICAL TO TARGET
    # ========================================================

    print()
    print("POSSIBLE TARGET COPIES")
    print("-" * 70)

    target = df["will_be_delayed"]

    found = False

    for column in numeric.columns:

        if column == "will_be_delayed":
            continue

        if (
            df[column].isin([0, 1]).all()
            and (df[column] == target).all()
        ):
            print(
                f"[WARNING] {column} is identical to target"
            )
            found = True

    if not found:
        print("No feature identical to target.")

    # ========================================================
    # CHECK 3: FUTURE INFORMATION IN FEATURE NAMES
    # ========================================================

    print()
    print("SUSPICIOUS FEATURE NAMES")
    print("-" * 70)

    suspicious_words = [
        "future",
        "outcome",
        "delay_days",
        "final",
        "completed_after",
        "actual",
    ]

    suspicious = []

    for column in df.columns:

        column_lower = column.lower()

        if any(
            word in column_lower
            for word in suspicious_words
        ):
            suspicious.append(column)

    if suspicious:
        for column in suspicious:
            print(f"[CHECK] {column}")
    else:
        print("No obviously suspicious feature names.")

    # ========================================================
    # CHECK 4: TARGET BY SNAPSHOT DAY
    # ========================================================

    print()
    print("TARGET BY SNAPSHOT DAY")
    print("-" * 70)

    target_by_day = (
        df.groupby("snapshot_day")["will_be_delayed"]
        .agg(["count", "mean"])
    )

    target_by_day["mean"] *= 100

    print(
        target_by_day.to_string(
            formatters={
                "mean": "{:.2f}%".format,
            }
        )
    )

    # ========================================================
    # CHECK 5: FEATURES THAT NEVER CHANGE
    # ========================================================

    print()
    print("PROJECT-LEVEL STATIC FEATURES")
    print("-" * 70)

    for column in [
        "project_type",
        "state",
        "district",
        "land_type",
        "priority",
        "land_area_hectares",
        "affected_families",
        "planned_duration_days",
    ]:

        if column not in df.columns:
            continue

        unique_per_project = (
            df.groupby("project_id")[column]
            .nunique()
        )

        changing = (
            unique_per_project > 1
        ).sum()

        print(
            f"{column:<35}"
            f"{changing:,} projects change"
        )

    # ========================================================
    # COMPLETE
    # ========================================================

    print()
    print("=" * 70)
    print("LEAKAGE CHECK COMPLETE")
    print("=" * 70)


if __name__ == "__main__":
    main()
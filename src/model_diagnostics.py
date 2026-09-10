from pathlib import Path

import joblib
import pandas as pd
from xgboost import XGBClassifier


MODEL_PATH = "models/baseline_model.json"
FEATURE_NAMES_PATH = "models/feature_names.joblib"


def main():
    print("=" * 70)
    print("SIH 26017 MODEL FEATURE IMPORTANCE")
    print("=" * 70)

    # --------------------------------------------------------
    # Check files
    # --------------------------------------------------------

    if not Path(MODEL_PATH).exists():
        raise FileNotFoundError(
            f"Model not found: {MODEL_PATH}"
        )

    if not Path(FEATURE_NAMES_PATH).exists():
        raise FileNotFoundError(
            f"Feature names not found: {FEATURE_NAMES_PATH}"
        )

    # --------------------------------------------------------
    # Load model
    # --------------------------------------------------------

    model = XGBClassifier()

    model.load_model(
        MODEL_PATH
    )

    feature_names = joblib.load(
        FEATURE_NAMES_PATH
    )

    # --------------------------------------------------------
    # Extract feature importance
    # --------------------------------------------------------

    importance = model.feature_importances_

    importance_df = pd.DataFrame(
        {
            "feature": feature_names,
            "importance": importance,
        }
    )

    importance_df = importance_df.sort_values(
        "importance",
        ascending=False,
    )

    # --------------------------------------------------------
    # Display top features
    # --------------------------------------------------------

    print()
    print("TOP 30 FEATURES")
    print("-" * 70)

    print(
        importance_df
        .head(30)
        .to_string(
            index=False,
            formatters={
                "importance": "{:.6f}".format,
            },
        )
    )

    # --------------------------------------------------------
    # Save complete importance table
    # --------------------------------------------------------

    output_path = Path(
        "models/feature_importance.csv"
    )

    importance_df.to_csv(
        output_path,
        index=False,
    )

    print()
    print("-" * 70)
    print(
        f"Saved complete feature importance to: "
        f"{output_path}"
    )

    print()
    print("=" * 70)
    print("MODEL DIAGNOSTICS COMPLETE")
    print("=" * 70)


if __name__ == "__main__":
    main()
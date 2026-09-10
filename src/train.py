from pathlib import Path

import joblib
import pandas as pd
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix,
)
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier


DATA_PATH = "data/processed/test_dataset.parquet"
MODEL_PATH = "models/baseline_model.json"


TARGET = "will_be_delayed"


DROP_COLUMNS = [
    "project_id",
    "snapshot_date",
    "will_be_delayed",
    "additional_delay_days",
    "delay_stage",
]


def main():
    print("=" * 60)
    print("SIH 26017 BASELINE MODEL")
    print("=" * 60)

    df = pd.read_parquet(DATA_PATH)

    print(f"Dataset: {len(df):,} rows")
    print(f"Features before encoding: {len(df.columns) - 1}")

    X = df.drop(columns=DROP_COLUMNS)
    y = df[TARGET]

    # Convert categorical columns into numerical codes.
    categorical_columns = X.select_dtypes(
        include=["object"]
    ).columns

    X = pd.get_dummies(
        X,
        columns=categorical_columns,
        dtype=int,
    )

    print(f"Features after encoding: {X.shape[1]}")

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.20,
        random_state=42,
        stratify=y,
    )

    print(f"Training rows: {len(X_train):,}")
    print(f"Testing rows:  {len(X_test):,}")
    print()

    model = XGBClassifier(
        n_estimators=500,
        max_depth=8,
        learning_rate=0.05,
        subsample=0.85,
        colsample_bytree=0.85,
        objective="binary:logistic",
        eval_metric="logloss",
        tree_method="hist",
        device="cuda",
        random_state=42,
    )

    print("Training XGBoost on GPU...")

    model.fit(
        X_train,
        y_train,
        eval_set=[(X_test, y_test)],
        verbose=False,
    )

    predictions = model.predict(X_test)

    accuracy = accuracy_score(
        y_test,
        predictions,
    )

    print()
    print("=" * 60)
    print("RESULTS")
    print("=" * 60)

    print(f"Accuracy: {accuracy * 100:.2f}%")
    print()

    print("Classification report:")
    print(
        classification_report(
            y_test,
            predictions,
            digits=4,
        )
    )

    print("Confusion matrix:")
    print(
        confusion_matrix(
            y_test,
            predictions,
        )
    )

    Path("models").mkdir(
        parents=True,
        exist_ok=True,
    )

    model.save_model(MODEL_PATH)

    # Save feature names separately.
    joblib.dump(
        list(X.columns),
        "models/feature_names.joblib",
    )

    print()
    print(f"Model saved to: {MODEL_PATH}")


if __name__ == "__main__":
    main()
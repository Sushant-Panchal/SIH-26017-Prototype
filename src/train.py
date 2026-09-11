from pathlib import Path
import cupy as cp
import joblib
import pandas as pd
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix,
    precision_score,
    recall_score,
    f1_score,
    roc_auc_score,
)
from sklearn.model_selection import GroupShuffleSplit
from xgboost import XGBClassifier


DATA_PATH = "data/processed/test_dataset.parquet"
MODEL_PATH = "models/baseline_model.json"
FEATURE_NAMES_PATH = "models/feature_names.joblib"

TARGET = "will_be_delayed"

DROP_COLUMNS = [
    "project_id",
    "snapshot_date",
    "state",
    "district",
    "will_be_delayed",
    "additional_delay_days",
    "delay_stage",
]


def main():
    print("=" * 70)
    print("SIH 26017 BASELINE MODEL")
    print("=" * 70)

    df = pd.read_parquet(DATA_PATH)

    groups = df["project_id"]

    print(f"Dataset:              {len(df):,} rows")
    print(f"Projects:             {df['project_id'].nunique():,}")
    print(f"Delay rate:           {df[TARGET].mean() * 100:.2f}%")

    # --------------------------------------------------------
    # Prepare features
    # --------------------------------------------------------

    X = df.drop(columns=DROP_COLUMNS)
    y = df[TARGET]

    categorical_columns = X.select_dtypes(
        include=["object", "string"]
    ).columns

    X = pd.get_dummies(
        X,
        columns=categorical_columns,
        dtype=int,
    )

    print(f"Features after encoding: {X.shape[1]}")

    # --------------------------------------------------------
    # Group-based train/test split
    # --------------------------------------------------------

    splitter = GroupShuffleSplit(
        n_splits=1,
        test_size=0.20,
        random_state=42,
    )

    train_idx, test_idx = next(
        splitter.split(
            X,
            y,
            groups=groups,
        )
    )

    train_projects = set(
        groups.iloc[train_idx]
    )

    test_projects = set(
        groups.iloc[test_idx]
    )

    print()
    print("DATA SPLIT")
    print("-" * 70)

    print(f"Training projects: {len(train_projects):,}")
    print(f"Testing projects:  {len(test_projects):,}")
    print(
        f"Project overlap:   "
        f"{len(train_projects & test_projects):,}"
    )

    X_train = cp.asarray(
        X.iloc[train_idx].to_numpy(
            dtype="float32",
            copy=True,
        )
    )

    X_test = cp.asarray(
        X.iloc[test_idx].to_numpy(
            dtype="float32",
            copy=True,
        )
    )

    y_train = cp.asarray(
        y.iloc[train_idx].to_numpy(
            dtype="float32",
            copy=True,
        )
    )

    y_test = cp.asarray(
        y.iloc[test_idx].to_numpy(
            dtype="float32",
            copy=True,
        )
    )

    print(f"Training rows:      {len(X_train):,}")
    print(f"Testing rows:       {len(X_test):,}")

    # --------------------------------------------------------
    # Handle class imbalance
    # --------------------------------------------------------

    positive = int(y_train.sum().item())
    negative = len(y_train) - positive

    scale_pos_weight = negative / max(positive, 1)

    print()
    print("CLASS BALANCE")
    print("-" * 70)

    print(f"Delayed:            {positive:,}")
    print(f"Not delayed:        {negative:,}")
    print(
        f"scale_pos_weight:   "
        f"{scale_pos_weight:.3f}"
    )

    # --------------------------------------------------------
    # Train XGBoost
    # --------------------------------------------------------

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
        scale_pos_weight=scale_pos_weight,
        random_state=42,
    )

    print()
    print("TRAINING")
    print("-" * 70)
    print("Training XGBoost...")

    model.fit(
        X_train,
        y_train,
        eval_set=[
            (X_test, y_test)
        ],
        verbose=False,
    )

    # --------------------------------------------------------
    # Predictions
    # --------------------------------------------------------

    probabilities = model.predict_proba(
        X_test
    )[:, 1]

    predictions = (
        probabilities >= 0.50
    ).astype(int)

    # Move results to CPU for scikit-learn metrics.
    y_test_numpy = y_test.get()
    probabilities_numpy = probabilities
    predictions_numpy = predictions

    # --------------------------------------------------------
    # Metrics
    # --------------------------------------------------------

    accuracy = accuracy_score(
        y_test_numpy,
        predictions_numpy,
    )

    precision = precision_score(
        y_test_numpy,
        predictions_numpy,
        zero_division=0,
    )

    recall = recall_score(
        y_test_numpy,
        predictions_numpy,
        zero_division=0,
    )

    f1 = f1_score(
        y_test_numpy,
        predictions_numpy,
        zero_division=0,
    )

    auc = roc_auc_score(
        y_test_numpy,
        probabilities_numpy,
    )

    # --------------------------------------------------------
    # Results
    # --------------------------------------------------------

    print()
    print("=" * 70)
    print("MODEL RESULTS")
    print("=" * 70)

    print(f"Accuracy:            {accuracy * 100:.2f}%")
    print(f"Precision:           {precision * 100:.2f}%")
    print(f"Recall:              {recall * 100:.2f}%")
    print(f"F1 Score:            {f1 * 100:.2f}%")
    print(f"ROC-AUC:             {auc:.4f}")

    print()
    print("CLASSIFICATION REPORT")
    print("-" * 70)

    print(
        classification_report(
            y_test_numpy,
            predictions_numpy,
            digits=4,
            zero_division=0,
        )
    )

    print("CONFUSION MATRIX")
    print("-" * 70)

    print(
        confusion_matrix(
            y_test_numpy,
            predictions_numpy,
        )
    )

    # --------------------------------------------------------
    # Save model
    # --------------------------------------------------------

    Path("models").mkdir(
        parents=True,
        exist_ok=True,
    )

    model.save_model(
        MODEL_PATH
    )

    joblib.dump(
        list(X.columns),
        FEATURE_NAMES_PATH,
    )

    print()
    print("=" * 70)
    print("MODEL SAVED")
    print("=" * 70)

    print(
        f"Model:    {MODEL_PATH}"
    )

    print(
        f"Features: {FEATURE_NAMES_PATH}"
    )


if __name__ == "__main__":
    main()
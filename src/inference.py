from pathlib import Path

import joblib
import pandas as pd
import xgboost as xgb
from xgboost import XGBClassifier


MODEL_PATH = "models/baseline_model.json"
FEATURE_NAMES_PATH = "models/feature_names.joblib"
DATASET_PATH = "data/processed/test_dataset.parquet"


class DelayPredictor:
    """
    SIH 26017
    Land Acquisition Delay Prediction Engine.

    Provides:
    - Delay probability
    - Risk level
    - Predicted outcome
    - Model-based risk contributions
    - Actionable recommendations
    """

    def __init__(
        self,
        model_path: str = MODEL_PATH,
        feature_names_path: str = FEATURE_NAMES_PATH,
    ):
        if not Path(model_path).exists():
            raise FileNotFoundError(
                f"Model not found: {model_path}"
            )

        if not Path(feature_names_path).exists():
            raise FileNotFoundError(
                f"Feature names not found: {feature_names_path}"
            )

        self.model = XGBClassifier()
        self.model.load_model(model_path)

        self.feature_names = joblib.load(
            feature_names_path
        )

        self.booster = self.model.get_booster()

    # ========================================================
    # PREPROCESSING
    # ========================================================

    def preprocess(
        self,
        project_data: dict,
    ) -> pd.DataFrame:
        """
        Convert one raw project snapshot into the exact
        feature layout used during training.
        """

        df = pd.DataFrame([project_data])

        columns_to_drop = [
            "project_id",
            "snapshot_date",
            "state",
            "district",
            "will_be_delayed",
            "additional_delay_days",
            "delay_stage",
        ]

        df = df.drop(
            columns=[
                column
                for column in columns_to_drop
                if column in df.columns
            ],
            errors="ignore",
        )

        categorical_columns = df.select_dtypes(
            include=["object", "string"]
        ).columns

        df = pd.get_dummies(
            df,
            columns=categorical_columns,
            dtype=int,
        )

        df = df.reindex(
            columns=self.feature_names,
            fill_value=0,
        )

        return df

    # ========================================================
    # MODEL PREDICTION
    # ========================================================

    def predict_probability(
        self,
        project_data: dict,
    ) -> float:

        X = self.preprocess(project_data)

        probability = self.model.predict_proba(
            X
        )[0][1]

        return float(probability)

    # ========================================================
    # RISK LEVEL
    # ========================================================

    @staticmethod
    def get_risk_level(
        probability: float,
    ) -> str:

        if probability >= 0.80:
            return "CRITICAL"

        if probability >= 0.60:
            return "HIGH"

        if probability >= 0.40:
            return "MEDIUM"

        return "LOW"

    # ========================================================
    # FEATURE DISPLAY NAMES
    # ========================================================

    @staticmethod
    def format_feature_name(
        feature_name: str,
    ) -> str:

        if feature_name.startswith("project_type_"):
            feature_name = feature_name.replace(
                "project_type_",
                "Project type: ",
                1,
            )

        elif feature_name.startswith("land_type_"):
            feature_name = feature_name.replace(
                "land_type_",
                "Land type: ",
                1,
            )

        elif feature_name.startswith("priority_"):
            feature_name = feature_name.replace(
                "priority_",
                "Priority: ",
                1,
            )

        feature_name = feature_name.replace(
            "_",
            " ",
        )

        return feature_name.strip().title()

    # ========================================================
    # RECOMMENDATIONS
    # ========================================================

    @staticmethod
    def get_recommendation(
        feature_name: str,
    ) -> str:

        recommendations = {
            "compensation_pending_cases": (
                "Prioritize unresolved compensation cases "
                "and accelerate disbursement."
            ),

            "compensation_pending_amount": (
                "Review outstanding compensation funds "
                "and resolve payment bottlenecks."
            ),

            "compensation_completion_pct": (
                "Review incomplete compensation processing "
                "and prioritize remaining cases."
            ),

            "pending_objections": (
                "Review unresolved objections and prioritize "
                "those blocking acquisition."
            ),

            "active_legal_disputes": (
                "Escalate unresolved legal disputes and "
                "identify cases blocking acquisition."
            ),

            "ownership_disputes": (
                "Prioritize ownership verification and "
                "disputed-title resolution."
            ),

            "court_stay_cases": (
                "Track court stay cases separately and "
                "coordinate legal resolution."
            ),

            "documents_pending": (
                "Prioritize verification of pending land "
                "and ownership documents."
            ),

            "documentation_completion_pct": (
                "Accelerate document verification and "
                "resolve missing documentation."
            ),

            "documents_required": (
                "Review the project's documentation "
                "requirements and verification workload."
            ),

            "approvals_pending": (
                "Escalate pending approvals to the "
                "responsible authority."
            ),

            "overdue_approvals": (
                "Escalate overdue approvals and establish "
                "clear resolution deadlines."
            ),

            "avg_approval_delay_days": (
                "Review delayed approval workflows and "
                "escalate slow authorities."
            ),

            "rr_pending_cases": (
                "Prioritize rehabilitation and "
                "resettlement cases."
            ),

            "rr_completion_pct": (
                "Accelerate outstanding rehabilitation "
                "and resettlement actions."
            ),

            "possession_pending_parcels": (
                "Identify parcels blocking possession "
                "and prioritize their resolution."
            ),

            "parcels_pending": (
                "Identify pending acquisition parcels and "
                "remove their individual bottlenecks."
            ),

            "acquisition_progress_pct": (
                "Review acquisition progress against the "
                "planned project schedule."
            ),

            "acquisition_velocity_pct_per_30d": (
                "Investigate low acquisition velocity and "
                "identify recent process bottlenecks."
            ),

            "schedule_variance_days": (
                "Review the critical path and address "
                "overdue milestones."
            ),

            "milestones_overdue": (
                "Review overdue milestones and assign "
                "corrective actions."
            ),

            "pending_stakeholder_actions": (
                "Escalate pending stakeholder actions "
                "and establish response deadlines."
            ),

            "avg_stakeholder_response_days": (
                "Escalate slow stakeholder responses and "
                "set resolution deadlines."
            ),

            "stakeholder_responsiveness_score": (
                "Review stakeholder coordination and "
                "outstanding responses."
            ),

            "complexity_score": (
                "Apply closer monitoring because of the "
                "project's overall complexity."
            ),

            "planned_duration_days": (
                "Review whether the project schedule "
                "adequately reflects its complexity."
            ),

            "affected_families": (
                "Consider additional coordination due to "
                "the scale of affected families."
            ),

            "total_parcels": (
                "Review parcel-level acquisition planning "
                "and outstanding cases."
            ),
        }

        return recommendations.get(
            feature_name,
            "Review this factor as part of the project "
            "risk assessment.",
        )

    # ========================================================
    # VALUE FORMATTING
    # ========================================================

    @staticmethod
    def format_value(
        feature_name: str,
        value,
    ):

        if pd.isna(value):
            return None

        if isinstance(value, float):
            if value.is_integer():
                return int(value)

            return round(value, 2)

        if isinstance(value, int):
            return value

        return value

    # ========================================================
    # MODEL-BASED RISK DRIVERS
    # ========================================================

    def get_risk_drivers(
        self,
        project_data: dict,
        top_n: int = 5,
    ) -> dict:
        """
        Return the strongest model-based factors that are
        currently increasing or reducing predicted delay risk.

        Contributions are model explanations, not causal claims.
        """

        X = self.preprocess(project_data)

        dmatrix = xgb.DMatrix(
            X,
            feature_names=list(X.columns),
        )

        contributions = self.booster.predict(
            dmatrix,
            pred_contribs=True,
        )

        feature_contributions = contributions[0][:-1]
        feature_values = X.iloc[0]

        increasing = []
        reducing = []

        for index, contribution in enumerate(
            feature_contributions
        ):

            contribution = float(contribution)

            if abs(contribution) < 1e-6:
                continue

            feature_name = self.feature_names[index]

            value = feature_values.iloc[index]

            driver = {
                "feature": feature_name,
                "factor": self.format_feature_name(
                    feature_name
                ),
                "value": self.format_value(
                    feature_name,
                    value,
                ),
                "contribution": round(
                    contribution,
                    4,
                ),
            }

            if contribution > 0:

                driver["direction"] = "increases_risk"

                driver["recommendation"] = (
                    self.get_recommendation(
                        feature_name
                    )
                )

                increasing.append(driver)

            else:

                driver["direction"] = "reduces_risk"

                driver["recommendation"] = (
                    "This factor is currently reducing "
                    "the predicted delay risk."
                )

                reducing.append(driver)

        # Strongest positive contributions first.
        increasing.sort(
            key=lambda x: x["contribution"],
            reverse=True,
        )

        # Strongest negative contributions first.
        reducing.sort(
            key=lambda x: x["contribution"],
        )

        return {
            "risk_increasing": increasing[:top_n],
            "risk_reducing": reducing[:top_n],
        }

    # ========================================================
    # COMPLETE ASSESSMENT
    # ========================================================

    def predict(
        self,
        project_data: dict,
    ) -> dict:

        probability = self.predict_probability(
            project_data
        )

        risk_level = self.get_risk_level(
            probability
        )

        drivers = self.get_risk_drivers(
            project_data
        )

        return {
            "delay_probability": round(
                probability,
                4,
            ),

            "delay_probability_pct": round(
                probability * 100,
                2,
            ),

            "risk_level": risk_level,

            "predicted_delayed": (
                probability >= 0.50
            ),

            "risk_drivers": (
                drivers["risk_increasing"]
            ),

            "risk_reducing_factors": (
                drivers["risk_reducing"]
            ),
        }


# ============================================================
# TEST
# ============================================================

def main():

    print("=" * 60)
    print("SIH 26017 INFERENCE TEST")
    print("=" * 60)

    predictor = DelayPredictor()

    print()
    print(f"Loaded model: {MODEL_PATH}")

    print(
        f"Loaded features: "
        f"{len(predictor.feature_names)}"
    )

    dataset_path = Path(DATASET_PATH)

    if not dataset_path.exists():
        raise FileNotFoundError(
            f"Dataset not found: {DATASET_PATH}"
        )

    # --------------------------------------------------------
    # Read one row for development testing
    # --------------------------------------------------------

    sample_df = pd.read_parquet(
        dataset_path,
        engine="pyarrow",
    ).head(1)

    if sample_df.empty:
        raise ValueError(
            "Dataset is empty."
        )

    sample = sample_df.iloc[0].to_dict()

    actual_target = sample.get(
        "will_be_delayed"
    )

    result = predictor.predict(
        sample
    )

    # --------------------------------------------------------
    # Prediction
    # --------------------------------------------------------

    print()
    print("-" * 60)
    print("PREDICTION")
    print("-" * 60)

    print(
        f"Delay probability : "
        f"{result['delay_probability_pct']:.2f}%"
    )

    print(
        f"Risk level        : "
        f"{result['risk_level']}"
    )

    print(
        f"Predicted delayed : "
        f"{result['predicted_delayed']}"
    )

    print(
        f"Actual target     : "
        f"{actual_target}"
    )

    # --------------------------------------------------------
    # Risk-increasing factors
    # --------------------------------------------------------

    print()
    print("RISK-INCREASING FACTORS")
    print("-" * 60)

    increasing = result["risk_drivers"]

    if not increasing:

        print(
            "No significant positive risk contributors."
        )

    else:

        for index, driver in enumerate(
            increasing,
            start=1,
        ):

            print(
                f"{index}. {driver['factor']}"
            )

            print(
                f"   Value        : "
                f"{driver['value']}"
            )

            print(
                f"   Contribution : "
                f"{driver['contribution']:+.4f}"
            )

            print(
                f"   Action       : "
                f"{driver['recommendation']}"
            )

            print()

    # --------------------------------------------------------
    # Risk-reducing factors
    # --------------------------------------------------------

    print(
        "FACTORS REDUCING PREDICTED RISK"
    )

    print("-" * 60)

    reducing = result[
        "risk_reducing_factors"
    ]

    if not reducing:

        print(
            "No significant risk-reducing contributors."
        )

    else:

        for index, driver in enumerate(
            reducing,
            start=1,
        ):

            print(
                f"{index}. {driver['factor']}"
            )

            print(
                f"   Value        : "
                f"{driver['value']}"
            )

            print(
                f"   Contribution : "
                f"{driver['contribution']:+.4f}"
            )

            print()

    print("-" * 60)


if __name__ == "__main__":
    main()
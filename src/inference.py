from pathlib import Path

import joblib
import pandas as pd
from xgboost import XGBClassifier


MODEL_PATH = "models/baseline_model.json"
FEATURE_NAMES_PATH = "models/feature_names.joblib"


class DelayPredictor:
    """
    SIH 26017
    Land Acquisition Delay Prediction + Risk Explanation Engine.
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

    # ========================================================
    # PREPROCESSING
    # ========================================================

    def preprocess(
        self,
        project_data: dict,
    ) -> pd.DataFrame:
        """
        Convert a raw project snapshot into the exact
        feature layout used during training.
        """

        df = pd.DataFrame([project_data])

        columns_to_drop = [
            "project_id",
            "snapshot_date",
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

        probability = self.model.predict_proba(X)[0][1]

        return float(probability)

    # ========================================================
    # RISK LEVEL
    # ========================================================

    @staticmethod
    def get_risk_level(
        probability: float,
    ) -> str:

        if probability >= 0.70:
            return "HIGH"

        if probability >= 0.40:
            return "MEDIUM"

        return "LOW"

    # ========================================================
    # RISK DRIVERS
    # ========================================================

    @staticmethod
    def get_risk_drivers(
        project_data: dict,
    ) -> list[dict]:

        drivers = []

        # ----------------------------------------------------
        # Compensation
        # ----------------------------------------------------

        compensation_pending = project_data.get(
            "compensation_pending_cases",
            0,
        )

        if compensation_pending >= 50:
            severity = "HIGH"
        elif compensation_pending >= 20:
            severity = "MEDIUM"
        else:
            severity = None

        if severity:
            drivers.append(
                {
                    "factor": "Compensation backlog",
                    "value": compensation_pending,
                    "severity": severity,
                    "recommendation": (
                        "Prioritize pending compensation "
                        "cases and accelerate disbursement."
                    ),
                }
            )

        # ----------------------------------------------------
        # Objections
        # ----------------------------------------------------

        objections = project_data.get(
            "pending_objections",
            0,
        )

        if objections >= 50:
            severity = "HIGH"
        elif objections >= 20:
            severity = "MEDIUM"
        else:
            severity = None

        if severity:
            drivers.append(
                {
                    "factor": "Pending objections",
                    "value": objections,
                    "severity": severity,
                    "recommendation": (
                        "Review unresolved objections and "
                        "prioritize cases blocking acquisition."
                    ),
                }
            )

        # ----------------------------------------------------
        # Possession
        # ----------------------------------------------------

        possession_pending = project_data.get(
            "possession_pending_parcels",
            0,
        )

        if possession_pending >= 100:
            severity = "HIGH"
        elif possession_pending >= 50:
            severity = "MEDIUM"
        else:
            severity = None

        if severity:
            drivers.append(
                {
                    "factor": "Pending possession parcels",
                    "value": possession_pending,
                    "severity": severity,
                    "recommendation": (
                        "Identify parcels blocking possession "
                        "and prioritize their resolution."
                    ),
                }
            )

        # ----------------------------------------------------
        # Approvals
        # ----------------------------------------------------

        approvals_pending = project_data.get(
            "approvals_pending",
            0,
        )

        if approvals_pending >= 6:
            severity = "HIGH"
        elif approvals_pending >= 3:
            severity = "MEDIUM"
        else:
            severity = None

        if severity:
            drivers.append(
                {
                    "factor": "Approval backlog",
                    "value": approvals_pending,
                    "severity": severity,
                    "recommendation": (
                        "Escalate pending approvals to the "
                        "responsible authority."
                    ),
                }
            )

        # ----------------------------------------------------
        # Documentation
        # ----------------------------------------------------

        documents_pending = project_data.get(
            "documents_pending",
            0,
        )

        if documents_pending >= 50:
            severity = "HIGH"
        elif documents_pending >= 20:
            severity = "MEDIUM"
        else:
            severity = None

        if severity:
            drivers.append(
                {
                    "factor": "Documentation backlog",
                    "value": documents_pending,
                    "severity": severity,
                    "recommendation": (
                        "Prioritize verification of pending "
                        "land and ownership documents."
                    ),
                }
            )

        # ----------------------------------------------------
        # Legal disputes
        # ----------------------------------------------------

        legal_disputes = project_data.get(
            "active_legal_disputes",
            0,
        )

        if legal_disputes >= 8:
            severity = "HIGH"
        elif legal_disputes >= 3:
            severity = "MEDIUM"
        else:
            severity = None

        if severity:
            drivers.append(
                {
                    "factor": "Active legal disputes",
                    "value": legal_disputes,
                    "severity": severity,
                    "recommendation": (
                        "Escalate unresolved legal disputes "
                        "and identify cases blocking acquisition."
                    ),
                }
            )

        # ----------------------------------------------------
        # Court stays
        # ----------------------------------------------------

        court_stays = project_data.get(
            "court_stay_cases",
            0,
        )

        if court_stays >= 2:
            drivers.append(
                {
                    "factor": "Court stay cases",
                    "value": court_stays,
                    "severity": "HIGH",
                    "recommendation": (
                        "Track stay orders separately and "
                        "coordinate legal resolution."
                    ),
                }
            )

        # ----------------------------------------------------
        # Ownership disputes
        # ----------------------------------------------------

        ownership_disputes = project_data.get(
            "ownership_disputes",
            0,
        )

        if ownership_disputes >= 5:
            severity = "HIGH"
        elif ownership_disputes >= 2:
            severity = "MEDIUM"
        else:
            severity = None

        if severity:
            drivers.append(
                {
                    "factor": "Ownership disputes",
                    "value": ownership_disputes,
                    "severity": severity,
                    "recommendation": (
                        "Prioritize ownership verification "
                        "and disputed-title resolution."
                    ),
                }
            )

        # ----------------------------------------------------
        # Schedule variance
        # ----------------------------------------------------

        schedule_variance = project_data.get(
            "schedule_variance_days",
            0,
        )

        if schedule_variance >= 60:
            severity = "HIGH"
        elif schedule_variance >= 30:
            severity = "MEDIUM"
        else:
            severity = None

        if severity:
            drivers.append(
                {
                    "factor": "Schedule variance",
                    "value": round(schedule_variance, 2),
                    "severity": severity,
                    "recommendation": (
                        "Review the critical path and "
                        "re-baseline overdue milestones."
                    ),
                }
            )

        # ----------------------------------------------------
        # R&R backlog
        # ----------------------------------------------------

        rr_pending = project_data.get(
            "rr_pending_cases",
            0,
        )

        if rr_pending >= 50:
            severity = "HIGH"
        elif rr_pending >= 20:
            severity = "MEDIUM"
        else:
            severity = None

        if severity:
            drivers.append(
                {
                    "factor": "R&R backlog",
                    "value": rr_pending,
                    "severity": severity,
                    "recommendation": (
                        "Prioritize rehabilitation and "
                        "resettlement cases."
                    ),
                }
            )

        # ----------------------------------------------------
        # Stakeholder response
        # ----------------------------------------------------

        response_days = project_data.get(
            "avg_stakeholder_response_days",
            0,
        )

        if response_days >= 45:
            severity = "HIGH"
        elif response_days >= 25:
            severity = "MEDIUM"
        else:
            severity = None

        if severity:
            drivers.append(
                {
                    "factor": "Slow stakeholder response",
                    "value": round(response_days, 2),
                    "severity": severity,
                    "recommendation": (
                        "Escalate pending stakeholder actions "
                        "and establish response deadlines."
                    ),
                }
            )

        # ----------------------------------------------------
        # Sort highest severity first
        # ----------------------------------------------------

        severity_order = {
            "HIGH": 0,
            "MEDIUM": 1,
            "LOW": 2,
        }

        drivers.sort(
            key=lambda x: severity_order[x["severity"]]
        )

        return drivers

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

            "risk_drivers": drivers,
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

    dataset_path = (
        "data/processed/test_dataset.parquet"
    )

    if not Path(dataset_path).exists():
        raise FileNotFoundError(
            f"Dataset not found: {dataset_path}"
        )

    df = pd.read_parquet(
        dataset_path
    )

    sample = df.iloc[0].to_dict()

    actual_target = sample.get(
        "will_be_delayed"
    )

    result = predictor.predict(
        sample
    )

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

    print()

    print("RISK DRIVERS")
    print("-" * 60)

    if not result["risk_drivers"]:
        print("No major risk factors detected.")

    else:
        for driver in result["risk_drivers"]:
            print(
                f"[{driver['severity']}] "
                f"{driver['factor']}: "
                f"{driver['value']}"
            )

            print(
                f"  Action: "
                f"{driver['recommendation']}"
            )

    print("-" * 60)


if __name__ == "__main__":
    main()
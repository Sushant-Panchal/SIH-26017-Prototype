# Bhoomi Sakha

### Predictive Governance for Early Detection of Land Acquisition Delays

**Smart India Hackathon 2026 · Problem Statement 26017**

> **Bhoomi Sakha** is an AI-powered predictive governance prototype that analyzes the current state of a land acquisition project and estimates its probability of delay. It identifies the strongest factors influencing the prediction and provides actionable recommendations so officers can intervene before delays escalate.

---

## 📌 Problem Statement

**PS ID:** SIH26017
**Title:** Predictive Analytics System for Early Detection of Land Acquisition Delays
**Organization:** Ministry of Rural Development
**Category:** Software

Land acquisition is a critical dependency for infrastructure projects. Delays can arise from documentation backlogs, compensation issues, legal disputes, pending approvals, possession bottlenecks, stakeholder delays, rehabilitation requirements, and schedule slippage.

Traditional monitoring is often reactive: a project is identified as problematic after the delay has already become significant.

### Bhoomi Sakha takes a predictive approach.

Instead of asking:

> "Why is this project already delayed?"

the system asks:

> "Given the project's current condition, how likely is it to experience a delay?"

This enables earlier intervention and more targeted resource allocation.

---

# 🎯 What Bhoomi Sakha Does

Bhoomi Sakha accepts a snapshot of a land acquisition project and produces:

* Delay probability
* Risk classification
* Predicted delay outcome
* Risk-increasing factors
* Factors reducing predicted risk
* Model contribution scores
* Actionable recommendations

The system is designed around the workflow of an officer or project authority monitoring acquisition progress.

---

# 🧠 Core Idea

The system follows this pipeline:

```text
Project Information
       │
       ▼
Current Project Snapshot
       │
       ▼
Frontend Input / Officer Adjustments
       │
       ▼
FastAPI Backend
       │
       ▼
Feature Preprocessing
       │
       ▼
XGBoost Delay Prediction Model
       │
       ├───────────────┐
       ▼               ▼
Delay Probability   Feature Contributions
       │               │
       └───────┬───────┘
               ▼
        Risk Assessment
               │
       ┌───────┴────────┐
       ▼                ▼
Risk-Increasing     Risk-Reducing
Factors             Factors
       │
       ▼
Actionable Recommendations
       │
       ▼
Bhoomi Sakha Dashboard
```

---

# ✨ Key Features

## 1. Predictive Delay Detection

The XGBoost model estimates the probability that the current project state will result in a delay.

Example:

```text
Delay Probability: 42.28%
Risk Level: MEDIUM
Predicted Delayed: False
```

The probability is model output, not a guarantee.

---

## 2. Four-Level Risk Classification

The current prototype maps predicted probability to four risk levels:

|  Probability | Risk     |
| -----------: | -------- |
|      `< 40%` | LOW      |
| `40% – <60%` | MEDIUM   |
| `60% – <80%` | HIGH     |
|      `≥ 80%` | CRITICAL |

The underlying binary prediction uses:

```text
Probability >= 50%
        ↓
Predicted Delayed
```

---

## 3. Model-Based Risk Explanations

Bhoomi Sakha does not stop at:

> "This project has 68% risk."

It also explains which features are contributing most strongly to the current prediction.

For example:

```text
RISK-INCREASING FACTORS

1. Documents Pending
   Value: 232
   Contribution: +0.4392
   Action:
   Prioritize verification of pending land
   and ownership documents.
```

This makes the prediction more useful to a decision-maker.

---

## 4. Risk-Reducing Factors

The system also identifies features that are currently pushing the model's prediction downward.

Example:

```text
FACTORS REDUCING PREDICTED RISK

1. Acquisition Velocity Pct Per 30D
   Value: 6.13
   Contribution: -0.3752

2. Schedule Variance Days
   Value: -7.19
   Contribution: -0.1358
```

These are model explanations rather than claims that the underlying variable is inherently beneficial.

---

## 5. Actionable Recommendations

Risk-increasing factors can include recommendations such as:

```text
Documents Pending
        ↓
Prioritize verification of pending land
and ownership documents.
```

```text
Active Legal Disputes
        ↓
Escalate unresolved legal disputes and
identify cases blocking acquisition.
```

```text
Pending Approvals
        ↓
Escalate pending approvals to the
responsible authority.
```

This turns prediction into an intervention workflow.

---

# 👨‍💼 Intended Users

Bhoomi Sakha is designed primarily for:

### Project Officers

Monitor project health and identify emerging risks.

### Land Acquisition Authorities

Identify acquisition bottlenecks requiring intervention.

### Government Departments

Prioritize projects requiring attention or escalation.

### Senior Decision-Makers

Obtain a quick risk overview rather than manually reviewing dozens of project indicators.

### Demonstration / Evaluation Users

Judges can modify project conditions and observe how the prediction and explanations change.

---

# 🖥️ User Workflow

A typical workflow is:

```text
1. Open Bhoomi Sakha
        ↓
2. Enter or modify project conditions
        ↓
3. Submit project assessment
        ↓
4. Backend validates the input
        ↓
5. XGBoost generates prediction
        ↓
6. Explanation engine calculates contributions
        ↓
7. Dashboard displays:
       • Probability
       • Risk level
       • Predicted outcome
       • Risk factors
       • Risk-reducing factors
       • Recommendations
```

The frontend therefore acts as an interactive decision-support interface rather than a static dashboard.

---

# 🧪 Interactive Scenario Testing

One of the important prototype capabilities is the ability to modify project conditions.

An officer or judge can change values such as:

* Documents pending
* Compensation pending cases
* Pending objections
* Active legal disputes
* Ownership disputes
* Court stay cases
* Pending approvals
* Overdue approvals
* Pending possession parcels
* Acquisition progress
* Acquisition velocity
* Schedule variance
* Stakeholder response time
* Project complexity
* Historical average delay
* Rehabilitation & resettlement backlog

The modified project state is sent to the backend and evaluated by the trained model.

This allows the system to demonstrate **what-if analysis**.

For example:

```text
Scenario A
Documents Pending = 20
Legal Disputes = 0
Acquisition Velocity = 8%

        ↓

Lower predicted risk


Scenario B
Documents Pending = 250
Legal Disputes = 8
Acquisition Velocity = 2%

        ↓

Higher predicted risk
```

This is useful for demonstrating how changing project conditions can affect model output.

---

# 🤖 Machine Learning Model

## Model

The prototype uses:

**XGBoost Classifier**

The model is configured for binary classification:

```text
objective = binary:logistic
```

Training configuration includes:

```text
n_estimators       = 500
max_depth          = 8
learning_rate      = 0.05
subsample          = 0.85
colsample_bytree   = 0.85
eval_metric        = logloss
```

Class imbalance is handled using:

```text
scale_pos_weight
```

calculated from the training split.

---

# 📊 Dataset

The prototype was trained using a **3,000,000-row synthetic land-acquisition project snapshot dataset**.

The dataset contains approximately:

```text
Rows:       3,000,000
Projects:     400,127
Features:          76
Delay rate:      46.85%
```

The dataset represents multiple snapshots of land-acquisition projects.

The model does not treat individual rows as independent projects during splitting.

---

# 🔐 Data Leakage Prevention

Project-level grouping is used during train/test splitting.

The system uses:

```python
GroupShuffleSplit
```

with:

```text
test_size = 20%
random_state = 42
```

The grouping key is:

```text
project_id
```

This ensures that snapshots belonging to the same project do not appear in both training and testing sets.

The resulting split was:

```text
Training projects: 320,101
Testing projects:   80,026

Project overlap: 0
```

This is important because allowing snapshots from the same project into both sets could produce artificially optimistic model performance.

---

# 📈 Model Performance

The trained baseline model produced:

| Metric    |     Result |
| --------- | ---------: |
| Accuracy  | **71.05%** |
| Precision | **68.07%** |
| Recall    | **71.98%** |
| F1 Score  | **69.97%** |
| ROC-AUC   | **0.7805** |

Confusion matrix from the evaluation run:

```text
[[223927  94901]
 [ 78788 202358]]
```

These results are from the current synthetic-data baseline and should not be interpreted as production-grade performance on real government data.

---

# 🔎 Explainability

Bhoomi Sakha uses the XGBoost model's feature contribution mechanism to determine which features are pushing the current prediction upward or downward.

For each feature, the explanation engine obtains a contribution value.

Conceptually:

```text
Positive contribution
        ↓
Pushes predicted risk upward

Negative contribution
        ↓
Pushes predicted risk downward
```

The system returns the strongest contributors.

### Important interpretation

A contribution is **not a causal claim**.

For example:

```text
Compensation Pending Cases
Contribution: -0.2313
```

does **not** mean:

> "More compensation cases reduce delays."

It means:

> "Given the complete combination of inputs for this particular project snapshot, this feature contributed negatively to the model's current prediction."

This distinction is important when using the system for decision support.

---

# 🧩 Features

The trained model uses 76 features after preprocessing.

### Project / Schedule

```text
snapshot_day
land_area_hectares
affected_families
complexity_score
days_since_notification
planned_duration_days
days_elapsed
days_in_current_stage
planned_stage_duration_days
schedule_variance_days
```

### Milestones

```text
milestones_due
milestones_completed
milestones_overdue
```

### Acquisition

```text
total_parcels
parcels_acquired
parcels_pending
acquisition_progress_pct
acquisition_velocity_pct_per_30d
```

### Possession

```text
possession_progress_pct
possession_pending_parcels
```

### Compensation

```text
compensation_total_amount
compensation_assessed_amount
compensation_disbursed_amount
compensation_pending_amount
compensation_completion_pct
compensation_pending_cases
avg_compensation_delay_days
```

### Documentation

```text
documents_required
documents_verified
documents_pending
documentation_completion_pct
```

### Approvals

```text
approvals_required
approvals_completed
approvals_pending
approval_completion_pct
avg_approval_delay_days
overdue_approvals
```

### Legal

```text
active_legal_disputes
resolved_legal_disputes
ownership_disputes
court_stay_cases
pending_objections
```

### Rehabilitation & Resettlement

```text
families_requiring_rr
families_rr_completed
rr_completion_pct
rr_pending_cases
```

### Stakeholders

```text
pending_stakeholder_actions
avg_stakeholder_response_days
stakeholder_responsiveness_score
interdepartmental_pending_actions
```

### Historical Indicators

```text
district_historical_delay_rate
project_type_historical_delay_rate
authority_historical_delay_rate
historical_avg_delay_days
```

### Categorical Features

The categorical variables are one-hot encoded.

Examples include:

```text
Project Type
├── Highway
├── Industrial
├── Irrigation
├── Metro
├── Power
├── Railway
└── Urban Development

Land Type
├── Agricultural
├── Commercial
├── Industrial
├── Mixed
└── Residential

Priority
├── Critical
├── High
└── Normal

Current Stage
├── Closure
├── Compensation
├── Notification
├── Possession
├── Rehabilitation
├── Survey
└── Valuation
```

---

# 🏗️ System Architecture

```text
                    ┌──────────────────┐
                    │  BHOOMI SAKHA    │
                    │    Frontend      │
                    └────────┬─────────┘
                             │
                             │ HTTP
                             ▼
                    ┌──────────────────┐
                    │     FastAPI      │
                    │      API         │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ DelayPredictor   │
                    └────────┬─────────┘
                             │
              ┌──────────────┴──────────────┐
              ▼                             ▼
      ┌────────────────┐           ┌─────────────────┐
      │ XGBoost Model  │           │ Feature         │
      │ baseline_model │           │ Contributions   │
      └────────────────┘           └─────────────────┘
              │                             │
              └──────────────┬──────────────┘
                             ▼
                    ┌──────────────────┐
                    │ Prediction +     │
                    │ Explanation      │
                    └──────────────────┘
```

---

# 🔌 API

The backend is implemented using FastAPI.

## Base URL

```text
http://127.0.0.1:8000
```

---

## GET `/health`

Checks whether the backend and model are available.

Example:

```text
GET /health
```

Response:

```json
{
  "status": "healthy",
  "model_loaded": true,
  "features": 76
}
```

---

## GET `/meta`

Returns frontend metadata such as:

* Project types
* Land types
* Priorities
* Current stages
* Risk levels
* Model information

Example:

```text
GET /meta
```

The frontend can use this endpoint to populate dropdowns without hardcoding all available values.

---

## POST `/predict`

Runs a complete project risk assessment.

Example:

```text
POST /predict
```

The request contains the current project snapshot.

The API validates the input using Pydantic before passing it to the inference engine.

The response includes:

```json
{
  "delay_probability": 0.4228,
  "delay_probability_pct": 42.28,
  "risk_level": "MEDIUM",
  "predicted_delayed": false,
  "risk_drivers": [],
  "risk_reducing_factors": []
}
```

The actual arrays contain the strongest model contributors for the supplied project.

---

# 📚 API Documentation

FastAPI automatically provides interactive documentation.

After starting the backend, open:

```text
http://127.0.0.1:8000/docs
```

This allows developers and judges to test the API directly from the browser.

The OpenAPI specification is available at:

```text
http://127.0.0.1:8000/openapi.json
```

---

# 📁 Repository Structure

```text
SIH-26017-Prototype/
│
├── .venv/
│   └── Python virtual environment
│
├── data/
│   └── processed/
│       └── test_dataset.parquet
│
├── models/
│   ├── baseline_model.json
│   └── feature_names.joblib
│
├── reports/
│   └── Model/validation/diagnostic outputs
│
├── src/
│   ├── __init__.py
│   ├── api.py
│   ├── diagnostics.py
│   ├── generator.py
│   ├── inference.py
│   ├── leakage_diagnostics.py
│   ├── model_diagnostics.py
│   ├── rules.py
│   ├── schema.py
│   ├── temporal_diagnostics.py
│   ├── train.py
│   └── validation.py
│
├── tests/
│
├── frontend/
│   └── Bhoomi Sakha web application
│
├── requirements.txt
├── run.bat
├── stop.bat
├── .gitignore
└── README.md
```

---

# 🧰 Technology Stack

## Machine Learning

* Python
* XGBoost
* scikit-learn
* SHAP-compatible model contribution analysis
* NumPy
* pandas

## Data

* Apache Parquet
* PyArrow
* pandas

## Backend

* FastAPI
* Pydantic
* Uvicorn

## Frontend

* Web frontend generated through the Stitch design workflow
* Integrated into the repository and connected to the FastAPI backend

## Development

* Git
* GitHub
* Python virtual environment
* Node.js / npm

---

# 💻 Requirements

For the current local demonstration setup:

### Python

Python 3.x with the dependencies specified in:

```text
requirements.txt
```

### Node.js

Node.js and npm are required for the frontend.

### Recommended

A modern Windows machine with:

```text
Python
Node.js
npm
Git
```

A GPU is **not required to run the trained application**.

The GPU was used during model training. The trained model is now stored as:

```text
models/baseline_model.json
```

The application performs inference using the saved model.

---

# 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/Sushant-Panchal/SIH-26017-Prototype.git
```

Move into the project:

```bash
cd SIH-26017-Prototype
```

---

## Create the Python Environment

Windows:

```powershell
python -m venv .venv
```

Activate it:

```powershell
.venv\Scripts\Activate.ps1
```

Install Python dependencies:

```powershell
python -m pip install -r requirements.txt
```

---

# 🌐 Install Frontend Dependencies

Move into the frontend:

```powershell
cd frontend
```

Install dependencies:

```powershell
npm install
```

Return to the project root:

```powershell
cd ..
```

---

# ▶️ Starting Bhoomi Sakha

The easiest method is:

```text
Double-click run.bat
```

or from PowerShell:

```powershell
.\run.bat
```

The launcher:

1. Detects the repository root.
2. Checks the Python virtual environment.
3. Checks Node.js/npm.
4. Checks the frontend.
5. Starts FastAPI.
6. Starts the frontend.
7. Keeps backend and frontend in separate terminal windows.
8. Waits for startup.
9. Opens Bhoomi Sakha automatically in the browser.

---

# 🖥️ Manual Startup

If you want to run the services individually:

## Backend

From the repository root:

```powershell
.venv\Scripts\python.exe -m uvicorn src.api:app --reload --host 127.0.0.1 --port 8000
```

Backend:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

---

## Frontend

Open another terminal:

```powershell
cd frontend
npm run dev
```

Then open the frontend URL shown by Vite.

The current launcher expects:

```text
http://localhost:5173
```

---

# 🛑 Stopping Bhoomi Sakha

The recommended method is:

```text
Double-click stop.bat
```

or:

```powershell
.\stop.bat
```

The script checks the application ports:

```text
8000 → FastAPI
5173 → Frontend
```

and stops the processes listening on those ports.

This avoids having to manually hunt through Task Manager like a civilized software project apparently requires.

---

# 🧪 Testing the ML Inference Engine

The inference engine can be tested independently.

From the repository root:

```powershell
python -m src.inference
```

The test loads:

```text
models/baseline_model.json
models/feature_names.joblib
data/processed/test_dataset.parquet
```

It evaluates one sample and prints:

* Delay probability
* Risk level
* Predicted delay
* Actual target
* Risk-increasing factors
* Factors reducing predicted risk
* Contributions
* Recommendations

---

# 🔬 Training the Model

Model training is implemented in:

```text
src/train.py
```

The training dataset is:

```text
data/processed/test_dataset.parquet
```

Training can be executed with:

```powershell
python -m src.train
```

The training pipeline:

1. Loads the Parquet dataset.
2. Separates features and target.
3. Removes identifier/leakage-sensitive columns.
4. One-hot encodes categorical variables.
5. Performs a project-level train/test split.
6. Ensures zero project overlap.
7. Calculates class imbalance.
8. Trains XGBoost.
9. Evaluates the model.
10. Saves the trained model.
11. Saves the feature schema.

Generated model files:

```text
models/baseline_model.json
models/feature_names.joblib
```

---

# ⚠️ Important Training Note

Training requires substantially more resources than normal inference.

The current 3-million-row training run was performed using GPU acceleration.

The application itself does **not** require that GPU for normal prediction.

Therefore:

```text
Training
   → GPU recommended

Inference
   → GPU not required
```

---

# 🔍 Validation & Diagnostics

The repository contains several diagnostic components.

### `validation.py`

Dataset validation and consistency checks.

### `leakage_diagnostics.py`

Investigates potential target/data leakage.

### `temporal_diagnostics.py`

Examines temporal behavior and snapshot-related characteristics.

### `model_diagnostics.py`

Evaluates trained model behavior and metrics.

### `diagnostics.py`

Provides broader diagnostic analysis.

### `rules.py`

Contains project/risk-related rule logic used during development.

These tools were used to improve confidence in the dataset and baseline model before integrating inference into the application.

---

# 🛡️ Data Leakage Strategy

The project uses project-level grouping during evaluation.

A project can have multiple snapshots:

```text
Project A
 ├── Snapshot 1
 ├── Snapshot 2
 ├── Snapshot 3
 └── Snapshot 4
```

All snapshots belonging to that project must stay within the same split.

Otherwise:

```text
Training
Project A Snapshot 1

Testing
Project A Snapshot 4
```

could allow the model to effectively see the same project during training and testing.

Bhoomi Sakha avoids this through:

```python
GroupShuffleSplit
```

using:

```text
project_id
```

---

# 🧠 Why XGBoost?

XGBoost was selected because the project contains predominantly structured/tabular data.

The features include:

* Counts
* Percentages
* Durations
* Financial values
* Progress measurements
* Historical indicators
* Categorical project attributes

Tree-based gradient boosting is well suited to these types of nonlinear relationships.

It also provides useful feature contribution information for explainability.

---

# 🎯 Why Predictive Governance?

A traditional monitoring system might show:

```text
Documents Pending: 232
Legal Disputes: 3
Acquisition Progress: 54%
```

The officer must interpret these values manually.

Bhoomi Sakha instead combines multiple indicators:

```text
232 documents pending
+
project complexity
+
historical delay behavior
+
schedule conditions
+
acquisition velocity
+
legal/administrative indicators
        ↓
Predicted delay probability
        ↓
Risk classification
        ↓
Priority intervention
```

The goal is to shift monitoring from:

```text
Reactive monitoring
```

to:

```text
Predictive monitoring
```

---

# 🚨 Early Warning Concept

A project does not need to be severely delayed before it becomes visible to the system.

The model evaluates the current project state and identifies combinations of conditions associated with delay.

This allows an officer to potentially intervene earlier.

Example:

```text
Project currently appears operational
        ↓
Documentation backlog increasing
        ↓
Acquisition velocity slowing
        ↓
Schedule pressure increasing
        ↓
Model detects elevated risk
        ↓
Officer investigates
        ↓
Corrective action
```

---

# 📊 Decision-Support, Not Autonomous Decision-Making

Bhoomi Sakha is designed as a **decision-support system**.

It should not automatically:

* Approve land acquisition
* Reject acquisition
* Resolve legal disputes
* Allocate government funds
* Issue legal decisions
* Override officers
* Make binding administrative decisions

Instead, it provides:

```text
Prediction
+
Evidence
+
Explanation
+
Recommended intervention
```

The final decision remains with the responsible authority.

---

# 🧪 Prototype Data Disclaimer

The current prototype uses a synthetic dataset generated for development and demonstration.

Therefore:

* Model performance does not represent real-world government deployment performance.
* Risk probabilities should not be interpreted as calibrated probabilities for actual projects.
* Recommendations are prototype decision-support suggestions.
* Real deployment would require validation using authoritative historical land-acquisition records.
* Thresholds and risk categories should be validated with domain experts.
* Additional governance, privacy, security, auditability, and model-validation requirements would be necessary for production deployment.

This distinction is critical.

A 78% ROC-AUC on synthetic data is evidence that the prototype's modeling pipeline works. It is **not** evidence that the government should immediately hand it the keys to the land-acquisition department.

---

# 🔮 Future Scope

The prototype can be extended into a production-grade predictive governance platform.

Potential improvements include:

### Real Government Data

Replace synthetic training data with verified historical acquisition records.

### Historical Project Database

Automatically retrieve:

```text
District history
Authority history
Project-type history
Previous delay patterns
```

instead of requiring historical values manually.

### Continuous Monitoring

Automatically ingest updated project snapshots.

### Time-Series Forecasting

Predict not only:

```text
Will the project be delayed?
```

but:

```text
Expected delay duration
```

and:

```text
Expected delay stage
```

### Automated Alerts

Notify officers when:

```text
Risk moves from LOW → MEDIUM
MEDIUM → HIGH
HIGH → CRITICAL
```

### GIS Integration

Map projects geographically and visualize:

* High-risk districts
* Acquisition bottlenecks
* Regional delay patterns
* Project clusters

### Role-Based Access

Different interfaces for:

* Field officers
* District authorities
* State authorities
* Senior administrators

### Audit Trail

Record:

```text
Input snapshot
Prediction
Model version
Timestamp
Officer action
Outcome
```

This would improve transparency and accountability.

### Model Monitoring

Track:

* Model drift
* Data drift
* Prediction calibration
* False positives
* False negatives
* Real-world outcomes

---

# 🗺️ Potential Production Architecture

A future production deployment could look like:

```text
                Government Data Sources
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      Acquisition    Land Records    Legal Systems
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                Data Integration Layer
                         │
                         ▼
                 Feature Engineering
                         │
                         ▼
                 Prediction Service
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
       Risk Prediction         Explanation Engine
              │                     │
              └──────────┬──────────┘
                         ▼
                 Bhoomi Sakha Portal
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
       Officer        District        State
       Dashboard      Dashboard       Dashboard
```

---

# 🔒 Security Considerations for Production

The current prototype is designed for local demonstration.

A production implementation should additionally include:

* Authentication
* Authorization
* Role-based access control
* HTTPS
* Secure secrets management
* Database access controls
* Input sanitization
* Audit logs
* Encryption at rest
* Encryption in transit
* Government data retention policies
* Privacy controls
* Model versioning
* Prediction audit trails

The current API intentionally allows broad CORS access for prototype frontend integration and should be restricted before production deployment.

---

# 🧑‍💻 Development Workflow

Recommended development workflow:

```text
1. Modify code
       ↓
2. Start backend
       ↓
3. Start frontend
       ↓
4. Test /health
       ↓
5. Test /meta
       ↓
6. Test /predict
       ↓
7. Test UI
       ↓
8. Test edge cases
       ↓
9. Commit changes
       ↓
10. Push to GitHub
```

---

# 🧪 Example Development Commands

### Check API health

```powershell
Invoke-RestMethod http://127.0.0.1:8000/health
```

### Check metadata

```powershell
Invoke-RestMethod http://127.0.0.1:8000/meta
```

### Open API documentation

```text
http://127.0.0.1:8000/docs
```

### Run inference test

```powershell
python -m src.inference
```

### Start complete application

```powershell
.\run.bat
```

### Stop complete application

```powershell
.\stop.bat
```

---

# 🏁 Quick Start

If the repository has already been configured:

```powershell
git clone https://github.com/Sushant-Panchal/SIH-26017-Prototype.git
cd SIH-26017-Prototype

python -m venv .venv
.venv\Scripts\python.exe -m pip install -r requirements.txt

cd frontend
npm install
cd ..

.\run.bat
```

Then open:

```text
http://localhost:5173
```

The launcher will open the browser automatically.

---

# 🛑 Quick Stop

```powershell
.\stop.bat
```

---

# 📌 Current Prototype Status

```text
Dataset
├── 3M synthetic project snapshots       ✅
├── 400K+ projects                       ✅
├── Project-level split                  ✅
└── Leakage diagnostics                  ✅

Machine Learning
├── XGBoost classifier                   ✅
├── GPU training                         ✅
├── Saved model                          ✅
├── 76 feature schema                    ✅
└── Evaluation metrics                   ✅

Explainability
├── Risk-increasing factors              ✅
├── Risk-reducing factors                ✅
├── Contribution scores                  ✅
└── Recommendations                      ✅

Backend
├── FastAPI                              ✅
├── /health                              ✅
├── /meta                                ✅
├── /predict                             ✅
└── Pydantic validation                  ✅

Frontend
├── Bhoomi Sakha UI                      ✅
├── Interactive project inputs            ✅
├── API integration                      ✅
├── Risk visualization                   ✅
└── Prediction workflow                  ✅

Demo
├── run.bat                              ✅
├── stop.bat                             ✅
└── Automatic browser launch             ✅
```

---

# 🤝 Contributing

This repository was developed as a Smart India Hackathon prototype.

For development:

1. Fork the repository.
2. Create a feature branch.
3. Make changes.
4. Test both frontend and backend.
5. Commit your changes.
6. Open a pull request.

Example:

```bash
git checkout -b feature/my-feature
git add .
git commit -m "feat: add my feature"
git push origin feature/my-feature
```

---

# 📜 License

This project is a Smart India Hackathon prototype.

Add an explicit `LICENSE` file before distributing the project under a specific open-source license.

---

# 👥 Project

**Bhoomi Sakha**

**Smart India Hackathon 2026**

**Problem Statement:** SIH26017
**Problem:** Predictive Analytics System for Early Detection of Land Acquisition Delays

Repository:

https://github.com/Sushant-Panchal/SIH-26017-Prototype

---

# ❤️ Project Vision

Bhoomi Sakha is built around a simple principle:

> **Don't wait for a project to fail before deciding it needs attention.**

By combining project data, machine learning, explainability, and actionable recommendations, the system aims to help authorities identify emerging land-acquisition risks early and intervene before delays become critical.

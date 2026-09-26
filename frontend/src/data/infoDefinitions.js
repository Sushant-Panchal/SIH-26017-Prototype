/**
 * Bhoomi Sakha - Centralized Contextual Information System (Definitions)
 * Defines structured metadata for all explainable fields, options, metrics, and controls.
 * Content strings are resolved dynamically through the i18n engine (en, hi, mr).
 */

import { t } from '../i18n/index.js';

export const INFO_CATEGORIES = {
  INPUT_FEATURE: 'input_feature',
  DROPDOWN_OPTION: 'dropdown_option',
  GOVERNANCE_METRIC: 'governance_metric',
  MODEL_OUTPUT: 'model_output',
  STATUTORY_CONTROL: 'statutory_control',
  SYSTEM_STATUS: 'system_status',
};

/**
 * Registry of all explainable concept keys and their metadata.
 */
export const INFO_REGISTRY = {
  // --- Section A: Project Profile ---
  project_type: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Categorical input feature for XGBoost inference (one-hot encoded).',
  },
  opt_project_type_highway: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for project_type.',
  },
  opt_project_type_railway: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for project_type.',
  },
  opt_project_type_industrial: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for project_type.',
  },
  opt_project_type_metro: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for project_type.',
  },
  opt_project_type_irrigation: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for project_type.',
  },
  opt_project_type_power: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for project_type.',
  },
  opt_project_type_urban: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for project_type.',
  },
  land_type: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Categorical input feature for XGBoost inference (one-hot encoded).',
  },
  opt_land_type_agricultural: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for land_type.',
  },
  opt_land_type_commercial: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for land_type.',
  },
  opt_land_type_industrial: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for land_type.',
  },
  opt_land_type_mixed: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for land_type.',
  },
  opt_land_type_residential: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for land_type.',
  },
  priority: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Categorical input feature for administrative urgency tier.',
  },
  opt_priority_normal: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for priority.',
  },
  opt_priority_high: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for priority.',
  },
  opt_priority_critical: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for priority.',
  },
  current_stage: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Categorical statutory milestone stage within RFCTLARR workflow.',
  },
  opt_stage_notification: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for current_stage.',
  },
  opt_stage_survey: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for current_stage.',
  },
  opt_stage_valuation: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for current_stage.',
  },
  opt_stage_compensation: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for current_stage.',
  },
  opt_stage_possession: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for current_stage.',
  },
  opt_stage_rehabilitation: {
    category: INFO_CATEGORIES.DROPDOWN_OPTION,
    modelUsageType: 'Categorical level for current_stage.',
  },
  complexity_score: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Continuous numeric input feature (0.0 to 100.0).',
  },
  total_parcels: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature indicating total cadastral parcels required.',
  },
  affected_families: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature measuring human resettlement footprint.',
  },
  land_area_hectares: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Continuous numeric input feature measuring land acquisition area.',
  },
  planned_duration_days: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature defining baseline scheduled duration.',
  },

  // --- Section B: Progress ---
  acquisition_progress_pct: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Percentage input feature (0-100%) tracking completed land parcels.',
  },
  acquisition_velocity_pct_per_30d: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Calculated velocity metric measuring pace of parcel acquisitions per month.',
  },
  parcels_pending: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature tracking remaining un-acquired parcels.',
  },
  possession_pending_parcels: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature tracking parcels where physical handover is pending.',
  },

  // --- Section C: Documentation ---
  documents_required: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature indicating total statutory documents required.',
  },
  documents_pending: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature tracking unverified ownership/title records.',
  },
  documentation_completion_pct: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Calculated ratio feature ((verified / required) * 100).',
  },

  // --- Section D: Compensation ---
  compensation_pending_cases: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature tracking unresolved compensation files.',
  },
  compensation_pending_amount: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Continuous numeric feature representing escrow balance in Crores INR.',
  },
  compensation_completion_pct: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Percentage input feature tracking Direct Benefit Transfer payouts.',
  },
  avg_compensation_delay_days: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Continuous numeric feature measuring average compensation award turnaround latency.',
  },

  // --- Section E: Clearances & Approvals ---
  approvals_pending: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature tracking pending inter-agency statutory permissions.',
  },
  overdue_approvals: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature tracking clearances past legal response deadlines.',
  },
  avg_approval_delay_days: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Continuous numeric feature representing average statutory approval latency.',
  },

  // --- Section F: Legal Litigations & Objections ---
  pending_objections: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature tracking Section 15 landowner objection petitions.',
  },
  active_legal_disputes: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature counting active court petitions.',
  },
  ownership_disputes: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature counting conflicting title claims between co-heirs.',
  },
  court_stay_cases: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature counting active judicial stay orders on project parcels.',
  },

  // --- Section G: R&R Resettlement ---
  rr_pending_cases: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature tracking pending rehabilitation entitlements.',
  },
  rr_completion_pct: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Percentage input feature tracking completed resettlement benefits.',
  },

  // --- Section H: Schedule & Variance ---
  schedule_variance_days: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Continuous numeric feature measuring variance against baseline master schedule.',
  },
  milestones_overdue: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature counting missed statutory gateway milestones.',
  },

  // --- Section I: Stakeholder Coordination ---
  pending_stakeholder_actions: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Integer input feature counting outstanding actions across utility/state bodies.',
  },
  avg_stakeholder_response_days: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Continuous numeric feature measuring external agency turnaround time.',
  },
  stakeholder_responsiveness_score: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Continuous numeric rating (0 to 10) evaluating inter-agency coordination velocity.',
  },

  // --- Section J: Historical Delay Context ---
  historical_avg_delay_days: {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Continuous numeric feature representing historical delay priors for the district/sector.',
  },

  // --- Assessment Outputs & Directives ---
  delay_probability: {
    category: INFO_CATEGORIES.MODEL_OUTPUT,
    modelUsageType: 'Direct model output probability score from XGBoost binary classifier (0.0% to 100.0%).',
  },
  risk_level: {
    category: INFO_CATEGORIES.MODEL_OUTPUT,
    modelUsageType: 'Categorical risk classification derived from model probability score.',
  },
  risk_thresholds: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Calibrated administrative policy thresholds: LOW (<40%), MEDIUM (40-60%), HIGH (60-80%), CRITICAL (≥80%).',
  },
  model_confidence: {
    category: INFO_CATEGORIES.MODEL_OUTPUT,
    modelUsageType: 'Empirical model validation metric based on cross-validation on 3,000,000 national records.',
  },
  risk_drivers_increasing: {
    category: INFO_CATEGORIES.MODEL_OUTPUT,
    modelUsageType: 'Feature contributions with positive sign (+Δ) that elevate predicted delay risk.',
  },
  risk_drivers_reducing: {
    category: INFO_CATEGORIES.MODEL_OUTPUT,
    modelUsageType: 'Feature contributions with negative sign (-Δ) that dampen predicted delay risk.',
  },
  statutory_directives: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Actionable policy directives generated based on top risk contributors.',
  },
  methodology_evaluation: {
    category: INFO_CATEGORIES.SYSTEM_STATUS,
    modelUsageType: 'Model architecture details: XGBoost with 76 engineered features, evaluated with 71.05% accuracy and 0.7805 ROC-AUC.',
  },

  // --- Controls & Buttons ---
  mode_select_project: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'UI control to load existing vetted infrastructure corridor telemetry.',
  },
  mode_test_scenario: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'UI control to manually configure custom simulation scenarios for sensitivity testing.',
  },
  statutory_presets: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Pre-calibrated empirical project benchmarks representing real-world project risk archetypes.',
  },
  assess_project_risk: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Executes POST /predict inference call against the FastAPI backend XGBoost model.',
  },
  reset_values: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Restores all form fields to active scenario preset baseline values.',
  },
  retry_assessment: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Retries the model prediction request if network or service error occurred.',
  },
  read_aloud: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Browser-native speech synthesis speaking visible content in active language voice.',
  },

  // --- Dashboard Items ---
  dash_total_projects: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Aggregate portfolio volume monitored under National Infrastructure Pipeline.',
  },
  dash_high_critical: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Sum of monitored corridors falling in HIGH (60-80%) or CRITICAL (≥80%) delay probability tiers.',
  },
  dash_intervention: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Projects flagged with severe document backlogs, court stays, or escrow bottlenecks.',
  },
  dash_avg_risk: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Portfolio-wide arithmetic mean of predicted delay probability.',
  },
  dash_risk_distribution: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Proportional breakdown of all active projects across the 4 risk tiers.',
  },
  dash_key_drivers: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Portfolio-wide root-cause cluster frequencies identified by model tree contributions.',
  },
  dash_triangulation_alert: {
    category: INFO_CATEGORIES.MODEL_OUTPUT,
    modelUsageType: 'Predictive correlation alert generated from cross-project pattern analysis.',
  },
  dash_priority_projects: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Sorted administrative oversight table prioritizing corridors by delay probability.',
  },

  // --- Projects Directory Items ---
  proj_directory_filter_sector: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Interactive filter to segment national corridors by infrastructure domain.',
  },
  proj_directory_filter_risk: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Interactive filter to view corridors by predicted delay risk tier.',
  },
  proj_col_stage: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Statutory milestone under the Right to Fair Compensation and Transparency in Land Acquisition Act.',
  },
  proj_action_assess: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Loads the selected project telemetry into the Assessment Cockpit for detailed re-evaluation.',
  },
  proj_action_audit: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Navigates to the comprehensive audit dossier and legal inspection screen.',
  },

  // --- Audit / Project Detail Items ---
  detail_statutory_hash: {
    category: INFO_CATEGORIES.SYSTEM_STATUS,
    modelUsageType: 'Cryptographic SHA-256 fingerprint guaranteeing tamper-evident audit record provenance.',
  },
  detail_model_inference: {
    category: INFO_CATEGORIES.SYSTEM_STATUS,
    modelUsageType: 'Indicates that displayed metrics are synchronized live with the XGBoost inference model.',
  },
  detail_land_requisition: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Total land area gazetted for acquisition across all revenue villages.',
  },
  detail_affected_landowners: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Total registered khata revenue accounts and pending mutation disputes.',
  },
  detail_sanctioned_escrow: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Total sanctioned compensation budget and undisbursed escrow balance.',
  },
  detail_cutoff_timeline: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Monitors the strict 12-month statutory deadline between Section 11 and Section 19 notifications.',
  },
  detail_progress_gauges: {
    category: INFO_CATEGORIES.GOVERNANCE_METRIC,
    modelUsageType: 'Multi-domain operational gauges tracking survey, award, physical possession, and escrow disbursements.',
  },
  detail_draft_dc_order: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Prototype administrative memo preview generated for governance review; non-binding without executive signoff.',
  },

  // --- Notifications Items ---
  notif_severity: {
    category: INFO_CATEGORIES.SYSTEM_STATUS,
    modelUsageType: 'Severity tier (Critical, High, Nominal) indicating urgency of required administrative review.',
  },
  notif_categories: {
    category: INFO_CATEGORIES.SYSTEM_STATUS,
    modelUsageType: 'Categorizes notifications by system origin: Risk Alert, Engine, Officer Attention, or System.',
  },
  notif_unread_state: {
    category: INFO_CATEGORIES.STATUTORY_CONTROL,
    modelUsageType: 'Indicates whether the notification has been reviewed by the land administration officer.',
  },
};

/**
 * Returns localized information content for an explainable key.
 * @param {string} key 
 * @returns {object} Localized info object with title, short, whatItMeans, whyItMatters, howToInterpret, example, modelUsage, category
 */
export function getInfoContent(key) {
  const meta = INFO_REGISTRY[key] || {
    category: INFO_CATEGORIES.INPUT_FEATURE,
    modelUsageType: 'Used by the predictive model as an input feature.',
  };

  const title = t(`info.${key}.title`, key.replace(/_/g, ' '));
  const short = t(`info.${key}.short`, 'Informational guidance for this item.');
  const whatItMeans = t(`info.${key}.whatItMeans`, short);
  const whyItMatters = t(`info.${key}.whyItMatters`, 'Helps contextualize project risk and statutory adherence.');
  const howToInterpret = t(`info.${key}.howToInterpret`, 'Review value against statutory targets and regional benchmarks.');
  const example = t(`info.${key}.example`, 'Standard infrastructure corridor telemetry.');
  const modelUsage = t(`info.${key}.modelUsage`, meta.modelUsageType);
  const categoryLabel = t(`infoCategories.${meta.category}`, meta.category.replace('_', ' '));

  return {
    key,
    title,
    short,
    whatItMeans,
    whyItMatters,
    howToInterpret,
    example,
    modelUsage,
    category: meta.category,
    categoryLabel,
  };
}

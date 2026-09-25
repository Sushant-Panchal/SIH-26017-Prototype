/**
 * Bhoomi Sakha - Scenario Presets & Benchmarks
 * Calibrated against real dataset distributions (N=3,000,000 records).
 */

export const SCENARIO_PRESETS = {
  low: {
    id: 'preset-low',
    name: 'NH-44 Bypass Ph. 2',
    subtitle: 'Low Delay • Clear Title',
    tag: 'LOW RISK',
    values: {
      project_type: 'Highway',
      land_type: 'Agricultural',
      priority: 'Normal',
      current_stage: 'Notification',
      complexity_score: 22.4,
      total_parcels: 350,
      affected_families: 48,
      land_area_hectares: 65.2,
      planned_duration_days: 420,
      days_since_notification: 45,
      days_elapsed: 45,
      days_in_current_stage: 45,
      planned_stage_duration_days: 60,
      
      // Progress
      acquisition_progress_pct: 88.5,
      acquisition_velocity_pct_per_30d: 14.8,
      parcels_pending: 40,
      parcels_acquired: 310,
      possession_pending_parcels: 25,
      possession_progress_pct: 92.8,

      // Documentation
      documents_required: 350,
      documents_pending: 18,
      documents_verified: 332,
      documentation_completion_pct: 94.9,

      // Compensation
      compensation_pending_cases: 12,
      compensation_pending_amount: 3.5,
      compensation_completion_pct: 96.2,
      avg_compensation_delay_days: 8.0,

      // Approvals
      approvals_pending: 1,
      overdue_approvals: 0,
      avg_approval_delay_days: 4.0,

      // Legal
      pending_objections: 1,
      active_legal_disputes: 0,
      ownership_disputes: 0,
      court_stay_cases: 0,

      // R&R
      rr_pending_cases: 4,
      rr_completion_pct: 94.0,

      // Schedule
      schedule_variance_days: -12.0,
      milestones_overdue: 0,

      // Stakeholders
      pending_stakeholder_actions: 2,
      avg_stakeholder_response_days: 5.2,
      stakeholder_responsiveness_score: 8.9,

      // Historical
      historical_avg_delay_days: 14.0,
    },
  },

  medium: {
    id: 'preset-medium',
    name: 'Western Freight Corridor',
    subtitle: 'Baseline Model • FY26-Q1',
    tag: 'MEDIUM RISK',
    values: {
      project_type: 'Highway',
      land_type: 'Agricultural',
      priority: 'Normal',
      current_stage: 'Notification',
      complexity_score: 47.7,
      total_parcels: 233,
      affected_families: 113,
      land_area_hectares: 132.47,
      planned_duration_days: 607,
      days_since_notification: 30,
      days_elapsed: 30,
      days_in_current_stage: 30,
      planned_stage_duration_days: 26,

      // Progress
      acquisition_progress_pct: 6.01,
      acquisition_velocity_pct_per_30d: 6.13,
      parcels_pending: 219,
      parcels_acquired: 14,
      possession_pending_parcels: 218,
      possession_progress_pct: 6.47,

      // Documentation
      documents_required: 241,
      documents_pending: 232,
      documents_verified: 9,
      documentation_completion_pct: 3.73,

      // Compensation
      compensation_pending_cases: 105,
      compensation_pending_amount: 10.95,
      compensation_completion_pct: 6.2,
      avg_compensation_delay_days: 52.68,

      // Approvals
      approvals_pending: 5,
      overdue_approvals: 2,
      avg_approval_delay_days: 41.04,

      // Legal
      pending_objections: 0,
      active_legal_disputes: 0,
      ownership_disputes: 0,
      court_stay_cases: 0,

      // R&R
      rr_pending_cases: 47,
      rr_completion_pct: 4.08,

      // Schedule
      schedule_variance_days: -7.19,
      milestones_overdue: 1,

      // Stakeholders
      pending_stakeholder_actions: 7,
      avg_stakeholder_response_days: 28.59,
      stakeholder_responsiveness_score: 5.14,

      // Historical
      historical_avg_delay_days: 100.8,
    },
  },

  high: {
    id: 'preset-high',
    name: 'Docs Backlog Ph. 1',
    subtitle: 'High Bottleneck • Stagnation Watchlist',
    tag: 'HIGH RISK',
    values: {
      project_type: 'Railway',
      land_type: 'Commercial',
      priority: 'Critical',
      current_stage: 'Survey',
      complexity_score: 68.5,
      total_parcels: 1120,
      affected_families: 420,
      land_area_hectares: 210.5,
      planned_duration_days: 900,
      days_since_notification: 180,
      days_elapsed: 180,
      days_in_current_stage: 90,
      planned_stage_duration_days: 60,

      // Progress
      acquisition_progress_pct: 35.0,
      acquisition_velocity_pct_per_30d: 2.5,
      parcels_pending: 728,
      parcels_acquired: 392,
      possession_pending_parcels: 610,
      possession_progress_pct: 28.0,

      // Documentation
      documents_required: 1120,
      documents_pending: 580,
      documents_verified: 540,
      documentation_completion_pct: 48.2,

      // Compensation
      compensation_pending_cases: 240,
      compensation_pending_amount: 42.6,
      compensation_completion_pct: 38.5,
      avg_compensation_delay_days: 72.0,

      // Approvals
      approvals_pending: 6,
      overdue_approvals: 3,
      avg_approval_delay_days: 65.0,

      // Legal
      pending_objections: 18,
      active_legal_disputes: 5,
      ownership_disputes: 4,
      court_stay_cases: 1,

      // R&R
      rr_pending_cases: 85,
      rr_completion_pct: 32.0,

      // Schedule
      schedule_variance_days: 54.0,
      milestones_overdue: 3,

      // Stakeholders
      pending_stakeholder_actions: 9,
      avg_stakeholder_response_days: 38.0,
      stakeholder_responsiveness_score: 3.8,

      // Historical
      historical_avg_delay_days: 95.0,
    },
  },

  critical: {
    id: 'preset-critical',
    name: 'Court Injunction HC',
    subtitle: 'Critical Hold • High Court Stay Active',
    tag: 'CRITICAL RISK',
    values: {
      project_type: 'Metro',
      land_type: 'Industrial',
      priority: 'Critical',
      current_stage: 'Compensation',
      complexity_score: 84.0,
      total_parcels: 850,
      affected_families: 610,
      land_area_hectares: 184.2,
      planned_duration_days: 1200,
      days_since_notification: 360,
      days_elapsed: 360,
      days_in_current_stage: 180,
      planned_stage_duration_days: 90,

      // Progress
      acquisition_progress_pct: 22.0,
      acquisition_velocity_pct_per_30d: 0.8,
      parcels_pending: 663,
      parcels_acquired: 187,
      possession_pending_parcels: 620,
      possession_progress_pct: 18.0,

      // Documentation
      documents_required: 850,
      documents_pending: 640,
      documents_verified: 210,
      documentation_completion_pct: 24.7,

      // Compensation
      compensation_pending_cases: 380,
      compensation_pending_amount: 85.4,
      compensation_completion_pct: 18.0,
      avg_compensation_delay_days: 118.0,

      // Approvals
      approvals_pending: 9,
      overdue_approvals: 6,
      avg_approval_delay_days: 98.0,

      // Legal
      pending_objections: 42,
      active_legal_disputes: 14,
      ownership_disputes: 8,
      court_stay_cases: 4,

      // R&R
      rr_pending_cases: 140,
      rr_completion_pct: 14.0,

      // Schedule
      schedule_variance_days: 145.0,
      milestones_overdue: 6,

      // Stakeholders
      pending_stakeholder_actions: 14,
      avg_stakeholder_response_days: 52.0,
      stakeholder_responsiveness_score: 2.1,

      // Historical
      historical_avg_delay_days: 135.0,
    },
  },
};

/**
 * National Portfolio Projects for Dashboard & Projects Directory
 */
export const SAMPLE_PROJECTS = [
  {
    id: 'BF-NH-2024-09',
    name: 'Delhi-Amritsar Expressway (Pkg 4)',
    type: 'Highway',
    sector: 'National Highway',
    district: 'Ludhiana',
    state: 'Punjab',
    stage: 'Sec 19 Declaration',
    progressPct: 42,
    delayProbability: 84.6,
    riskLevel: 'CRITICAL',
    badgeClass: 'bg-error-container text-on-error-container',
    presetKey: 'critical',
  },
  {
    id: 'BF-RL-2023-14',
    name: 'Western Dedicated Freight Corridor',
    type: 'Railway',
    sector: 'Freight Rail Corridor',
    district: 'Vadodara',
    state: 'Gujarat',
    stage: 'Compensation Award',
    progressPct: 68,
    delayProbability: 71.2,
    riskLevel: 'HIGH',
    badgeClass: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    presetKey: 'high',
  },
  {
    id: 'BF-EN-2024-03',
    name: 'Bhadla Solar Ultra Park Ext',
    type: 'Power',
    sector: 'Renewable Energy Grid',
    district: 'Jodhpur',
    state: 'Rajasthan',
    stage: 'Joint Survey 3A',
    progressPct: 31,
    delayProbability: 58.4,
    riskLevel: 'MEDIUM',
    badgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    presetKey: 'medium',
  },
  {
    id: 'BF-NH-2024-22',
    name: 'NH-66 Coastal Highway Expansion',
    type: 'Highway',
    sector: 'National Highway',
    district: 'Udupi',
    state: 'Karnataka',
    stage: 'Notification',
    progressPct: 54,
    delayProbability: 42.3,
    riskLevel: 'MEDIUM',
    badgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    presetKey: 'medium',
  },
  {
    id: 'BF-MT-2024-05',
    name: 'Pune Metro Line 3 Corridor',
    type: 'Metro',
    sector: 'Urban Mass Transit',
    district: 'Pune',
    state: 'Maharashtra',
    stage: 'Rehabilitation',
    progressPct: 79,
    delayProbability: 34.8,
    riskLevel: 'LOW',
    badgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    presetKey: 'low',
  },
  {
    id: 'BF-IN-2024-18',
    name: 'Dholera Special Investment Region Ph 1',
    type: 'Industrial',
    sector: 'Industrial Node / SEZ',
    district: 'Ahmedabad',
    state: 'Gujarat',
    stage: 'Valuation',
    progressPct: 62,
    delayProbability: 46.1,
    riskLevel: 'MEDIUM',
    badgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    presetKey: 'medium',
  },
];

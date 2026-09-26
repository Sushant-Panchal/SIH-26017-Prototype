/**
 * Bhoomi Sakha - Assessment View
 * Interactive Risk Assessment Cockpit with 10 structured sections,
 * accessible custom comboboxes with per-option hover/focus guidance,
 * live telemetry editing, real-time XGBoost inference via POST /predict,
 * dynamic SHAP risk-increasing factor breakdowns, and risk-mitigation vectors.
 */

import { SCENARIO_PRESETS } from '../data/presets.js';
import { predictionService } from '../api/prediction.js';
import {
  getRiskLevel,
  getRiskWording,
  getRiskSummary,
  getRiskThresholdLabel,
  getRiskBadgeClasses,
  getRiskTextColor,
  getRiskStrokeColor,
  getRiskLevelLabel,
} from '../utils/risk.js';
import { createReadAloudButton } from '../utils/tts.js';
import { renderInfoButton } from '../utils/infoModal.js';
import { createCustomSelect } from '../components/customSelect.js';
import { i18n, t } from '../i18n/index.js';

let currentAssessmentState = {
  activePreset: 'medium',
  lastPrediction: null,
  isLoading: false,
};

export function renderAssessmentView(container, initialPresetKey = 'medium') {
  currentAssessmentState.activePreset = initialPresetKey;
  const initialData = SCENARIO_PRESETS[initialPresetKey] || SCENARIO_PRESETS.medium;

  container.innerHTML = `
    <div class="flex flex-col w-full">
      <!-- Interactive Top Control Canvas -->
      <div class="w-full px-gutter-desktop py-space-lg flex flex-col gap-space-md">
        <!-- Title and Metadata Strip -->
        <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
          <div class="flex flex-col">
            <div class="flex items-center gap-space-sm flex-wrap">
              <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
              <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">${t('assessment.title', 'Assess Project Risk')}</h1>
              <span class="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">${t('assessment.engineBadge', 'FastAPI • XGB-26017 Engine')}</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant mt-0.5">
              ${t('assessment.subtitle', 'Enter or edit project telemetry to estimate statutory delay probability and inspect model-derived risk drivers via POST /predict.')}
            </p>
          </div>

          <!-- Mode Selector Switch -->
          <div class="inline-flex p-1 rounded-xl bg-surface-container-high shadow-inner shrink-0 items-center gap-1">
            <button class="px-space-md py-1.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5" id="modeSelectBtn" type="button">
              <span class="material-symbols-outlined text-[16px]">folder_open</span>
              <span>${t('assessment.selectProject', 'Select Existing Project')}</span>
              ${renderInfoButton('mode_select_project')}
            </button>
            <button class="px-space-md py-1.5 rounded font-label-md text-label-md bg-surface-container-lowest text-on-surface shadow-sm font-semibold flex items-center gap-1.5 transition-all" id="modeSimulateBtn" type="button">
              <span class="material-symbols-outlined text-[16px] text-secondary">tune</span>
              <span>${t('assessment.testScenario', 'Create / Test Scenario')}</span>
              ${renderInfoButton('mode_test_scenario')}
            </button>
          </div>
        </div>

        <!-- Quick Scenario Presets Bar -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border border-outline-variant/30">
          <div class="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm pl-space-xs">
            <span class="material-symbols-outlined text-[16px] text-secondary">flash_on</span>
            <span class="uppercase tracking-wider font-semibold">${t('assessment.statutoryPresets', 'Statutory Test Presets:')}</span>
            ${renderInfoButton('statutory_presets')}
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-space-xs w-full lg:w-auto">
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors text-left flex items-center justify-between gap-space-sm group" data-preset="low" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate group-hover:text-primary">NH-44 Bypass Ph. 2</span>
                <span class="font-label-sm text-[10px] text-emerald-600 font-tabular-data font-semibold">${t('risk.lowTier', 'Low Delay Tier')}</span>
              </div>
              <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            </button>
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-high transition-colors text-left flex items-center justify-between gap-space-sm group ring-1 ring-secondary" data-preset="medium" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate font-semibold">Western Corridor</span>
                <span class="font-label-sm text-[10px] text-secondary font-tabular-data font-bold">42.3% Baseline</span>
              </div>
              <span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
            </button>
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors text-left flex items-center justify-between gap-space-sm group" data-preset="high" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate group-hover:text-primary">Docs Backlog Ph. 1</span>
                <span class="font-label-sm text-[10px] text-on-surface-variant font-tabular-data">${t('risk.highTier', 'High Bottleneck Tier')}</span>
              </div>
              <span class="w-2 h-2 rounded-full bg-orange-600 shrink-0"></span>
            </button>
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors text-left flex items-center justify-between gap-space-sm group" data-preset="critical" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate group-hover:text-primary">Court Injunction HC</span>
                <span class="font-label-sm text-[10px] text-on-surface-variant font-tabular-data">${t('risk.criticalTier', 'Critical Injunction Tier')}</span>
              </div>
              <span class="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Primary Two-Column Cockpit Engine -->
      <div class="w-full px-gutter-desktop pb-space-xl grid grid-cols-1 xl:grid-cols-12 gap-gutter-desktop items-start">
        
        <!-- LEFT COLUMN: 10 Structured Subsections (7 Cols) -->
        <div class="xl:col-span-7 flex flex-col gap-space-md">
          
          <!-- Operational Header Banner inside form -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between border border-outline-variant/30">
            <div class="flex items-center gap-space-sm">
              <div class="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-[18px]">rule_folder</span>
              </div>
              <div>
                <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">${t('assessment.telemetryMatrices', 'Telemetry Input Matrices')}</h2>
                <p class="font-body-sm text-body-sm text-on-surface-variant">${t('assessment.telemetrySubtitle', 'Configure cadastral attributes according to Section 11 & 19 statutory filings')}</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <button class="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 px-space-sm py-1 rounded hover:bg-surface-container transition-colors border border-outline-variant/40" id="resetFormBtn" type="button">
                <span class="material-symbols-outlined text-[15px]">refresh</span>
                <span>${t('assessment.resetValues', 'Reset Values')}</span>
              </button>
              ${renderInfoButton('reset_values')}
            </div>
          </div>

          <!-- SECTION A: Project Profile -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="w-1.5 h-3 bg-primary rounded-full"></span> ${t('assessment.sectionA', 'Section A • Project Profile')}
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">${t('assessment.coreClassification', 'Core Classification')}</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelProjectType', 'Project Type')}</label>
                  ${renderInfoButton('project_type')}
                </div>
                <div id="mount_projectType"></div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelLandType', 'Land Classification')}</label>
                  ${renderInfoButton('land_type')}
                </div>
                <div id="mount_landType"></div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelPriority', 'Priority Tier')}</label>
                  ${renderInfoButton('priority')}
                </div>
                <div id="mount_priority"></div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelComplexity', 'Complexity (0-100)')}</label>
                  ${renderInfoButton('complexity_score')}
                </div>
                <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_complexity" step="0.1" min="0" max="100" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelTotalParcels', 'Total Parcels')}</label>
                  ${renderInfoButton('total_parcels')}
                </div>
                <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_totalParcels" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelAffectedFamilies', 'Affected Families (PAFs)')}</label>
                  ${renderInfoButton('affected_families')}
                </div>
                <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_affectedFamilies" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelLandArea', 'Land Extent (Ha)')}</label>
                  ${renderInfoButton('land_area_hectares')}
                </div>
                <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_landArea" step="0.1" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelPlannedDuration', 'Planned Duration (d)')}</label>
                  ${renderInfoButton('planned_duration_days')}
                </div>
                <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_plannedDuration" min="0" type="number"/>
              </div>
            </div>
          </div>

          <!-- SECTION B & C: Progress and Critical Documentation in Responsive Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            
            <!-- SECTION B: Acquisition Progress -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-secondary rounded-full"></span> ${t('assessment.sectionB', 'Section B • Progress')}
                </span>
                <span class="font-tabular-data text-label-sm text-secondary font-semibold" id="badgeAcqVelocity">${t('assessment.velocityActive', 'Velocity Active')}</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm">
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelAcqProgress', 'Acq. Progress (%)')}</label>
                    ${renderInfoButton('acquisition_progress_pct')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_acqProgress" min="0" max="100" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelVelocity', 'Velocity (%/30d)')}</label>
                    ${renderInfoButton('acquisition_velocity_pct_per_30d')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_velocity" step="0.01" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelParcelsPending', 'Parcels Pending')}</label>
                    ${renderInfoButton('parcels_pending')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_parcelsPending" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelPossessionPending', 'Possession Pending')}</label>
                    ${renderInfoButton('possession_pending_parcels')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_possessionPending" min="0" type="number"/>
                </div>
                <div class="col-span-2 flex flex-col pt-1">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelCurrentStage', 'Current Statutory Stage')}</label>
                    ${renderInfoButton('current_stage')}
                  </div>
                  <div id="mount_currentStage"></div>
                </div>
              </div>
            </div>

            <!-- SECTION C: Documentation Telemetry -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm relative overflow-hidden border border-outline-variant/30">
              <div class="absolute top-0 right-0 w-24 h-1 bg-secondary-container"></div>
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-secondary-container rounded-full"></span> ${t('assessment.sectionC', 'Section C • Documentation')}
                </span>
                <span class="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[10px] font-semibold">${t('assessment.keyModelDriver', 'Key Model Driver')}</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm">
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelDocsReq', 'Docs Required')}</label>
                    ${renderInfoButton('documents_required')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_docsReq" min="1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
                      <span>${t('assessment.labelDocsPending', 'Docs Pending')}</span>
                      <span class="material-symbols-outlined text-[13px]">edit</span>
                    </label>
                    ${renderInfoButton('documents_pending')}
                  </div>
                  <input class="bg-surface-container-high px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface font-bold focus:outline-none focus:ring-2 focus:ring-secondary-container border border-outline-variant/50" id="field_docsPending" min="0" type="number"/>
                </div>
                <div class="col-span-2 flex flex-col gap-1 pt-1">
                  <div class="flex items-center justify-between font-label-sm text-label-sm">
                    <div class="flex items-center gap-1">
                      <span class="text-on-surface-variant">${t('assessment.labelDocCompletion', 'Documentation Completion')}</span>
                      ${renderInfoButton('documentation_completion_pct')}
                    </div>
                    <span class="font-tabular-data font-semibold text-on-surface" id="label_docCompletion">--%</span>
                  </div>
                  <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                    <div class="bg-secondary-container h-full transition-all duration-300" id="bar_docCompletion" style="width: 0%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION D & E: Compensation & Approvals -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            
            <!-- SECTION D: Compensation -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-outline rounded-full"></span> ${t('assessment.sectionD', 'Section D • Compensation')}
                </span>
                <span class="font-tabular-data text-label-sm text-on-surface-variant" id="label_compDisbursedBadge">${t('assessment.escrowTranche', 'Escrow Tranche')}</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs">
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${t('assessment.labelCompCases', 'Cases')}</label>
                    ${renderInfoButton('compensation_pending_cases')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compCases" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${t('assessment.labelCompAmount', '₹ Cr')}</label>
                    ${renderInfoButton('compensation_pending_amount')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compAmount" min="0" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${t('assessment.labelCompDisbursed', 'Disb %')}</label>
                    ${renderInfoButton('compensation_completion_pct')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compDisbursed" min="0" max="100" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- SECTION E: Clearances / Approvals -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-outline rounded-full"></span> ${t('assessment.sectionE', 'Section E • Clearances')}
                </span>
                <span class="font-label-sm text-label-sm text-error font-medium" id="label_clearanceAlert">${t('assessment.interAgencyGate', 'Inter-Agency Gate')}</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs">
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${t('assessment.labelApprPending', 'Pending')}</label>
                    ${renderInfoButton('approvals_pending')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprPending" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${t('assessment.labelApprOverdue', 'Overdue')}</label>
                    ${renderInfoButton('overdue_approvals')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprOverdue" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${t('assessment.labelApprDelay', 'Delay (d)')}</label>
                    ${renderInfoButton('avg_approval_delay_days')}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprDelay" min="0" step="0.1" type="number"/>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION F: Legal & Litigation -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="w-1.5 h-3 bg-error rounded-full"></span> ${t('assessment.sectionF', 'Section F • Legal Litigations & Objections')}
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">${t('assessment.section15Hearings', 'Section 15 Hearings')}</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelPendingObj', 'Pending Objections')}</label>
                  ${renderInfoButton('pending_objections')}
                </div>
                <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_pendingObj" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelActiveDisputes', 'Active Disputes')}</label>
                  ${renderInfoButton('active_legal_disputes')}
                </div>
                <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_activeDisputes" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelOwnerDisputes', 'Ownership Conflicts')}</label>
                  ${renderInfoButton('ownership_disputes')}
                </div>
                <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_ownerDisputes" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-error font-bold">${t('assessment.labelCourtStays', 'Court Stays')}</label>
                  ${renderInfoButton('court_stay_cases')}
                </div>
                <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface font-bold focus:outline-none border border-error/50" id="field_courtStays" min="0" type="number"/>
              </div>
            </div>
          </div>

          <!-- SECTIONS G, H, I, J: Compact Telemetry Quartet -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            
            <!-- Section G: R&R -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">${t('assessment.sectionG', 'Section G • R&R Resettlement')}</span>
                <span class="font-tabular-data text-[11px] text-emerald-600 font-semibold" id="label_rrSummary">${t('assessment.rfctlarrCompliance', 'RFCTLARR Compliance')}</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelRrPending', 'Pending Cases')}</label>
                    ${renderInfoButton('rr_pending_cases')}
                  </div>
                  <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_rrPending" min="0" type="number"/>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelRrCompletion', 'Completion %')}</label>
                    ${renderInfoButton('rr_completion_pct')}
                  </div>
                  <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_rrCompletion" min="0" max="100" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section H: Schedule -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">${t('assessment.sectionH', 'Section H • Schedule & Variance')}</span>
                <span class="font-tabular-data text-[11px] text-amber-600 font-semibold" id="label_schedSlippage">${t('assessment.criticalPath', 'Critical Path')}</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelSchedVariance', 'Variance (d)')}</label>
                    ${renderInfoButton('schedule_variance_days')}
                  </div>
                  <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_schedVariance" step="0.1" type="number"/>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelMilestonesOverdue', 'Overdue')}</label>
                    ${renderInfoButton('milestones_overdue')}
                  </div>
                  <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_milestonesOverdue" min="0" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section I: Stakeholders -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">${t('assessment.sectionI', 'Section I • Stakeholder Coordination')}</span>
                <span class="font-tabular-data text-[11px] text-on-surface-variant">${t('assessment.responseLatency', 'Response Latency')}</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs pt-1">
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${t('assessment.labelShActions', 'Actions')}</label>
                    ${renderInfoButton('pending_stakeholder_actions')}
                  </div>
                  <input class="w-full bg-surface-container-low px-1.5 py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shActions" min="0" type="number"/>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${t('assessment.labelShResponse', 'Resp (d)')}</label>
                    ${renderInfoButton('avg_stakeholder_response_days')}
                  </div>
                  <input class="w-full bg-surface-container-low px-1.5 py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shResponse" min="0" step="0.1" type="number"/>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${t('assessment.labelShScore', 'Score/10')}</label>
                    ${renderInfoButton('stakeholder_responsiveness_score')}
                  </div>
                  <input class="w-full bg-surface-container-low px-1.5 py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shScore" min="0" max="10" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section J: Historical Context -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">${t('assessment.sectionJ', 'Section J • Historical Delay Context')}</span>
                <span class="font-tabular-data text-[11px] text-on-surface-variant">${t('assessment.regionalPriors', 'Regional Priors')}</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${t('assessment.labelHistDelay', 'Avg Reg. Delay (d)')}</label>
                    ${renderInfoButton('historical_avg_delay_days')}
                  </div>
                  <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_histDelay" min="0" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col justify-end">
                  <span class="font-label-sm text-[11px] text-on-surface-variant">${t('assessment.trainingArchetype', 'Training Archetype:')}</span>
                  <span class="font-label-sm text-label-sm font-semibold text-on-surface">${t('assessment.linearInfra', 'Linear Infrastructure (NLRMP)')}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sticky Operational Action Bar -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md sticky bottom-4 z-20 border-2 border-surface-container-high">
            <div class="flex items-center gap-space-sm">
              <div class="flex flex-col">
                <span class="font-label-md text-label-md text-on-surface font-semibold">${t('assessment.targetWindow', 'Inference Target: Statutory 5-Year Window')}</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">${t('assessment.mandateValidation', 'LARR Act 2013 § 25 Mandate Validation • XGBoost Engine')}</span>
              </div>
            </div>
            <div class="flex items-center gap-space-sm w-full sm:w-auto">
              <button class="w-1/3 sm:w-auto px-space-md py-2.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors border border-outline-variant/40" id="resetScenarioBtn" type="button">
                ${t('assessment.resetBtn', 'Reset')}
              </button>
              <div class="flex items-center gap-1.5 w-2/3 sm:w-auto">
                <button class="w-full sm:w-auto px-space-lg py-2.5 rounded bg-primary text-on-primary hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 group font-bold tracking-wide uppercase" id="runPredictionBtn" type="button">
                  <span class="material-symbols-outlined text-[20px] text-secondary-container group-hover:rotate-12 transition-transform">model_training</span>
                  <span>${t('assessment.assessRiskBtn', 'Assess Project Risk')}</span>
                </button>
                ${renderInfoButton('assess_project_risk')}
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Sticky Output & Explainability Engine (5 Cols) -->
        <div class="xl:col-span-5 flex flex-col gap-space-md sticky top-28" id="outputCockpitColumn">
          
          <!-- 1. Prediction Result Card -->
          <div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md relative overflow-hidden transition-all duration-300 border border-outline-variant/30" id="predictionMainCard">
            
            <!-- Live Loading Overlay -->
            <div class="hidden absolute inset-0 bg-surface-container-lowest/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-space-sm text-center p-space-md" id="loadingOverlay">
              <div class="w-12 h-12 border-4 border-surface-container-high border-t-secondary rounded-full animate-spin"></div>
              <div class="flex flex-col">
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold">${t('assessment.analyzingTelemetry', 'Analyzing Project Telemetry...')}</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant font-tabular-data">${t('assessment.callingApi', 'Calling FastAPI POST /predict & XGBoost Tree Contributions')}</span>
              </div>
            </div>

            <!-- Top Row with State Badge & Read Aloud -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-secondary text-[22px]">analytics</span>
                <span class="font-headline-sm text-base font-bold text-on-surface">${t('assessment.riskForecast', 'Risk Forecast')}</span>
                ${renderInfoButton('delay_probability')}
              </div>
              <div class="flex items-center gap-space-xs">
                <span class="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold uppercase tracking-wider" id="riskBadge">--</span>
                ${renderInfoButton('risk_level')}
                <div id="assessmentReadAloudSlot"></div>
              </div>
            </div>

            <!-- Main Probability Radial Dial & Metric -->
            <div class="flex flex-col sm:flex-row items-center gap-space-lg py-space-xs">
              <div class="relative w-32 h-32 flex items-center justify-center shrink-0">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="48" stroke-width="10" stroke="currentColor" fill="none" class="text-surface-container-high"/>
                  <circle id="probabilityCircle" cx="60" cy="60" r="48" stroke-width="10" stroke="currentColor" fill="none" stroke-dasharray="301.59" stroke-dashoffset="301.59" stroke-linecap="round" class="text-secondary transition-all duration-700 ease-out"/>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span class="font-headline-lg text-2xl font-black font-tabular-data tracking-tight text-on-surface" id="probabilityValue">--%</span>
                  <span class="font-label-sm text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">${t('assessment.delayProb', 'Delay Prob')}</span>
                </div>
              </div>

              <div class="flex flex-col gap-1 text-center sm:text-left flex-1">
                <div class="flex items-center gap-1.5 justify-center sm:justify-start">
                  <span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">${t('assessment.predictedOutcome', 'Predicted Outcome')}</span>
                  ${renderInfoButton('model_confidence')}
                </div>
                <span class="font-headline-sm text-lg font-bold text-on-surface leading-tight" id="riskSummaryText">
                  ${t('assessment.awaitingInput', 'Awaiting Telemetry Input...')}
                </span>
                <span class="font-label-sm text-xs font-semibold text-secondary" id="decisionOutcome">--</span>
                <div class="flex items-center gap-1 mt-1 justify-center sm:justify-start">
                  <span class="font-body-sm text-[11px] text-on-surface-variant" id="riskThresholdNote">
                    ${t('assessment.statutoryNotice', 'Notice: Inference updates in real time based on active inputs.')}
                  </span>
                  ${renderInfoButton('risk_thresholds')}
                </div>
              </div>
            </div>

          </div>

          <!-- 2. Risk-Increasing Factors (Red / Amber Drivers) -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <div class="flex items-center gap-1.5">
                <span class="font-label-md text-label-md text-error flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="material-symbols-outlined text-[16px]">trending_up</span> ${t('assessment.riskIncreasingFactors', 'Risk-Increasing Factors')}
                </span>
                ${renderInfoButton('risk_drivers_increasing')}
              </div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data">${t('assessment.modelContributionPos', 'Model Contribution (+Δ)')}</span>
            </div>
            <div class="flex flex-col gap-space-sm pt-space-xs" id="riskIncreasingContainer">
              <!-- Dynamically rendered -->
            </div>
          </div>

          <!-- 3. Factors Reducing Predicted Risk (Green Negative Bars) -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <div class="flex items-center gap-1.5">
                <span class="font-label-md text-label-md text-emerald-700 flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="material-symbols-outlined text-[16px]">trending_down</span> ${t('assessment.riskReducingFactors', 'Factors Reducing Predicted Risk')}
                </span>
                ${renderInfoButton('risk_drivers_reducing')}
              </div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data">${t('assessment.modelContributionNeg', 'Model Contribution (-Δ)')}</span>
            </div>
            <div class="flex flex-col gap-space-sm pt-space-xs" id="riskReducingContainer">
              <!-- Dynamically rendered -->
            </div>
            <div class="pt-1 text-[11px] text-on-surface-variant italic">
              ${t('assessment.mathematicalNote', 'Note: Values reflect mathematical dampening within the XGBoost model and are not causal recommendations.')}
            </div>
          </div>

          <!-- 4. Statutory Directives / Priority Actions -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <div class="flex items-center gap-1.5">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="material-symbols-outlined text-[16px] text-secondary">gavel</span> ${t('assessment.recommendedDirectives', 'Recommended Statutory Directives')}
                </span>
                ${renderInfoButton('statutory_directives')}
              </div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-semibold">${t('assessment.priorityExecution', 'Priority Execution')}</span>
            </div>
            <div class="flex flex-col gap-space-xs" id="directivesContainer">
              <!-- Dynamically generated from risk drivers -->
            </div>
          </div>

          <!-- 5. Transparency Accordion (How is this calculated?) -->
          <div class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/30">
            <button class="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors" id="transparencyAccordionBtn" type="button">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-[18px] text-on-surface-variant">psychology</span>
                <span class="font-label-md text-label-md text-on-surface font-semibold">${t('assessment.methodology', 'Methodology & Model Evaluation')}</span>
                ${renderInfoButton('methodology_evaluation')}
              </div>
              <span class="material-symbols-outlined text-[18px] text-on-surface-variant transition-transform" id="accordionChevron">expand_more</span>
            </button>
            <div class="hidden px-space-md pb-space-md pt-0 text-on-surface-variant font-body-sm text-body-sm flex flex-col gap-space-xs border-t border-surface-container-high" id="transparencyContent">
              <p class="pt-space-xs">
                ${t('assessment.methodologyText', 'The Bhoomi Sakha inference engine executes binary classification across 76 engineered features aligned with statutory RFCTLARR Act 2013 and national cadastral norms.')}
              </p>
              <div class="grid grid-cols-2 gap-2 my-1 text-[12px] bg-surface-container-low p-2 rounded">
                <div><strong>${t('assessment.accuracy', 'Accuracy')}:</strong> 71.05%</div>
                <div><strong>${t('assessment.rocAuc', 'ROC-AUC')}:</strong> 0.7805</div>
                <div><strong>${t('assessment.precision', 'Precision')}:</strong> 68.07%</div>
                <div><strong>${t('assessment.recall', 'Recall')}:</strong> 71.98%</div>
                <div><strong>${t('assessment.trainingDataset', 'Training Dataset')}:</strong> 3,000,000 rows</div>
                <div><strong>${t('assessment.projectsEvaluated', 'Projects Evaluated')}:</strong> 400,127</div>
              </div>
              <ul class="list-disc pl-5 flex flex-col gap-1 text-[11px]">
                <li><strong>${t('assessment.treeContribs', 'Tree Contributions')}:</strong> ${t('assessment.treeContribsDesc', 'Feature weights reflect exact gradient boosting margin impacts per project snapshot.')}</li>
                <li><strong>${t('assessment.riskThresholds', 'Risk Thresholds')}:</strong> LOW &lt; 40%, MEDIUM 40-60%, HIGH 60-80%, CRITICAL &ge; 80%.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  // Attach interactive events and initial data
  attachAssessmentEvents(container, initialData);
}

function attachAssessmentEvents(container, initialData) {
  // 1. Mount Custom Accessible Comboboxes
  const projectTypeMount = container.querySelector('#mount_projectType');
  if (projectTypeMount) {
    projectTypeMount.innerHTML = '';
    const select = createCustomSelect({
      id: 'field_projectType',
      value: initialData.values.project_type || 'Highway',
      options: [
        { value: 'Highway', labelKey: 'dropdown.project_type.highway', infoKey: 'opt_project_type_highway' },
        { value: 'Railway', labelKey: 'dropdown.project_type.railway', infoKey: 'opt_project_type_railway' },
        { value: 'Industrial', labelKey: 'dropdown.project_type.industrial', infoKey: 'opt_project_type_industrial' },
        { value: 'Metro', labelKey: 'dropdown.project_type.metro', infoKey: 'opt_project_type_metro' },
        { value: 'Irrigation', labelKey: 'dropdown.project_type.irrigation', infoKey: 'opt_project_type_irrigation' },
        { value: 'Power', labelKey: 'dropdown.project_type.power', infoKey: 'opt_project_type_power' },
        { value: 'Urban Development', labelKey: 'dropdown.project_type.urban_development', infoKey: 'opt_project_type_urban' },
      ],
    });
    projectTypeMount.appendChild(select);
  }

  const landTypeMount = container.querySelector('#mount_landType');
  if (landTypeMount) {
    landTypeMount.innerHTML = '';
    const select = createCustomSelect({
      id: 'field_landType',
      value: initialData.values.land_type || 'Agricultural',
      options: [
        { value: 'Agricultural', labelKey: 'dropdown.land_type.agricultural', infoKey: 'opt_land_type_agricultural' },
        { value: 'Commercial', labelKey: 'dropdown.land_type.commercial', infoKey: 'opt_land_type_commercial' },
        { value: 'Industrial', labelKey: 'dropdown.land_type.industrial', infoKey: 'opt_land_type_industrial' },
        { value: 'Mixed', labelKey: 'dropdown.land_type.mixed', infoKey: 'opt_land_type_mixed' },
        { value: 'Residential', labelKey: 'dropdown.land_type.residential', infoKey: 'opt_land_type_residential' },
      ],
    });
    landTypeMount.appendChild(select);
  }

  const priorityMount = container.querySelector('#mount_priority');
  if (priorityMount) {
    priorityMount.innerHTML = '';
    const select = createCustomSelect({
      id: 'field_priority',
      value: initialData.values.priority || 'Normal',
      options: [
        { value: 'Normal', labelKey: 'dropdown.priority.normal', infoKey: 'opt_priority_normal' },
        { value: 'High', labelKey: 'dropdown.priority.high', infoKey: 'opt_priority_high' },
        { value: 'Critical', labelKey: 'dropdown.priority.critical', infoKey: 'opt_priority_critical' },
      ],
    });
    priorityMount.appendChild(select);
  }

  const stageMount = container.querySelector('#mount_currentStage');
  if (stageMount) {
    stageMount.innerHTML = '';
    const select = createCustomSelect({
      id: 'field_currentStage',
      value: initialData.values.current_stage || 'Survey',
      options: [
        { value: 'Notification', labelKey: 'info.opt_stage_notification.title', infoKey: 'opt_stage_notification' },
        { value: 'Survey', labelKey: 'info.opt_stage_survey.title', infoKey: 'opt_stage_survey' },
        { value: 'Valuation', labelKey: 'info.opt_stage_valuation.title', infoKey: 'opt_stage_valuation' },
        { value: 'Compensation', labelKey: 'info.opt_stage_compensation.title', infoKey: 'opt_stage_compensation' },
        { value: 'Possession', labelKey: 'info.opt_stage_possession.title', infoKey: 'opt_stage_possession' },
        { value: 'Rehabilitation', labelKey: 'info.opt_stage_rehabilitation.title', infoKey: 'opt_stage_rehabilitation' },
      ],
    });
    stageMount.appendChild(select);
  }

  // 2. Populate form fields
  populateForm(initialData.values);
  calculateDocCompletion();

  const readSlot = container.querySelector('#assessmentReadAloudSlot');
  if (readSlot) {
    readSlot.innerHTML = '';
    const readBtn = createReadAloudButton(
      () => {
        const prob = container.querySelector('#probabilityValue')?.textContent || '0%';
        const badge = container.querySelector('#riskBadge')?.textContent || '';
        const summary = container.querySelector('#riskSummaryText')?.textContent || '';
        const threshold = container.querySelector('#riskThresholdNote')?.textContent || '';
        return `${t('assessment.readAloudIntro', 'Bhoomi Sakha assessment outcome.')} ${t('detail.modelDelayProb', 'Delay probability')}: ${prob}. ${badge}. ${summary}. ${threshold}`;
      },
      () => i18n.getLanguage()
    );
    readSlot.appendChild(readBtn);
  }

  // Presets buttons
  container.querySelectorAll('.preset-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-preset');
      container.querySelectorAll('.preset-pill').forEach(el => {
        el.classList.remove('bg-surface-container-high', 'ring-1', 'ring-secondary');
        el.classList.add('bg-surface-container-low');
      });
      btn.classList.remove('bg-surface-container-low');
      btn.classList.add('bg-surface-container-high', 'ring-1', 'ring-secondary');

      const preset = SCENARIO_PRESETS[key];
      if (preset) {
        currentAssessmentState.activePreset = key;
        populateForm(preset.values);
        calculateDocCompletion();
        // Immediately run inference with the preset values
        triggerAssessment(container);
      }
    });
  });

  // Docs Pending live recalculation
  const docsPendingInput = container.querySelector('#field_docsPending');
  const docsReqInput = container.querySelector('#field_docsReq');
  if (docsPendingInput) {
    docsPendingInput.addEventListener('input', calculateDocCompletion);
  }
  if (docsReqInput) {
    docsReqInput.addEventListener('input', calculateDocCompletion);
  }

  // Assess Project Risk button
  const runBtn = container.querySelector('#runPredictionBtn');
  if (runBtn) {
    runBtn.addEventListener('click', () => triggerAssessment(container));
  }

  // Reset buttons
  const resetBtn = container.querySelector('#resetScenarioBtn');
  const resetFormBtn = container.querySelector('#resetFormBtn');
  const handleReset = () => {
    const preset = SCENARIO_PRESETS[currentAssessmentState.activePreset] || SCENARIO_PRESETS.medium;
    populateForm(preset.values);
    calculateDocCompletion();
    triggerAssessment(container);
  };
  if (resetBtn) resetBtn.addEventListener('click', handleReset);
  if (resetFormBtn) resetFormBtn.addEventListener('click', handleReset);

  // Transparency Accordion toggle
  const accordionBtn = container.querySelector('#transparencyAccordionBtn');
  const accordionContent = container.querySelector('#transparencyContent');
  const accordionChevron = container.querySelector('#accordionChevron');
  if (accordionBtn && accordionContent) {
    accordionBtn.addEventListener('click', () => {
      const isHidden = accordionContent.classList.contains('hidden');
      if (isHidden) {
        accordionContent.classList.remove('hidden');
        accordionChevron.style.transform = 'rotate(180deg)';
      } else {
        accordionContent.classList.add('hidden');
        accordionChevron.style.transform = 'rotate(0deg)';
      }
    });
  }

  // Automatically run first assessment on mount
  triggerAssessment(container);
}

function calculateDocCompletion() {
  const req = parseFloat(document.getElementById('field_docsReq')?.value) || 1;
  const pending = parseFloat(document.getElementById('field_docsPending')?.value) || 0;
  const pct = Math.max(0, Math.min(100, (((req - pending) / req) * 100))).toFixed(1);

  const label = document.getElementById('label_docCompletion');
  const bar = document.getElementById('bar_docCompletion');
  if (label) label.textContent = `${pct}%`;
  if (bar) bar.style.width = `${pct}%`;
}

function populateForm(values) {
  if (!values) return;
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (!el || val === undefined) return;
    el.value = val;
    // Update custom select wrapper if present
    const customContainer = el.closest('.custom-select-container') || document.querySelector(`[data-select-id="${id}"]`);
    if (customContainer && typeof customContainer.setValue === 'function') {
      customContainer.setValue(val);
    }
  };

  setVal('field_projectType', values.project_type || 'Highway');
  setVal('field_landType', values.land_type || 'Agricultural');
  setVal('field_priority', values.priority || 'Normal');
  setVal('field_currentStage', values.current_stage || 'Survey');
  setVal('field_complexity', values.complexity_score ?? 47.7);
  setVal('field_totalParcels', values.total_parcels ?? 233);
  setVal('field_affectedFamilies', values.affected_families ?? 113);
  setVal('field_landArea', values.land_area_hectares ?? 132.5);
  setVal('field_plannedDuration', values.planned_duration_days ?? 607);

  setVal('field_acqProgress', values.acquisition_progress_pct ?? 6.0);
  setVal('field_velocity', values.acquisition_velocity_pct_per_30d ?? 6.13);
  setVal('field_parcelsPending', values.parcels_pending ?? 219);
  setVal('field_possessionPending', values.possession_pending_parcels ?? 218);

  setVal('field_docsReq', values.documents_required ?? 241);
  setVal('field_docsPending', values.documents_pending ?? 232);

  setVal('field_compCases', values.compensation_pending_cases ?? 105);
  setVal('field_compAmount', values.compensation_pending_amount ?? 10.95);
  setVal('field_compDisbursed', values.compensation_completion_pct ?? 6.2);

  setVal('field_apprPending', values.approvals_pending ?? 5);
  setVal('field_apprOverdue', values.overdue_approvals ?? 2);
  setVal('field_apprDelay', values.avg_approval_delay_days ?? 41.0);

  setVal('field_pendingObj', values.pending_objections ?? 0);
  setVal('field_activeDisputes', values.active_legal_disputes ?? 0);
  setVal('field_ownerDisputes', values.ownership_disputes ?? 0);
  setVal('field_courtStays', values.court_stay_cases ?? 0);

  setVal('field_rrPending', values.rr_pending_cases ?? 47);
  setVal('field_rrCompletion', values.rr_completion_pct ?? 4.08);

  setVal('field_schedVariance', values.schedule_variance_days ?? -7.19);
  setVal('field_milestonesOverdue', values.milestones_overdue ?? 1);

  setVal('field_shActions', values.pending_stakeholder_actions ?? 7);
  setVal('field_shResponse', values.avg_stakeholder_response_days ?? 28.59);
  setVal('field_shScore', values.stakeholder_responsiveness_score ?? 5.14);

  setVal('field_histDelay', values.historical_avg_delay_days ?? 100.8);
}

function collectFormData() {
  const getNum = (id, fallback = 0) => {
    const val = parseFloat(document.getElementById(id)?.value);
    return isNaN(val) ? fallback : Math.max(0, val);
  };
  const getInt = (id, fallback = 0) => {
    const val = parseInt(document.getElementById(id)?.value, 10);
    return isNaN(val) ? fallback : Math.max(0, val);
  };
  const getStr = (id, fallback = '') => document.getElementById(id)?.value || fallback;

  const totalParcels = getInt('field_totalParcels', 200);
  const parcelsPending = getInt('field_parcelsPending', 50);
  const parcelsAcquired = Math.max(0, totalParcels - parcelsPending);

  const docsReq = getInt('field_docsReq', 200);
  const docsPending = getInt('field_docsPending', 50);
  const docsVerified = Math.max(0, docsReq - docsPending);
  const docPct = docsReq > 0 ? Math.min(100, Math.max(0, ((docsVerified / docsReq) * 100))) : 0;

  const compPendingCases = getInt('field_compCases', 10);
  const compPendingAmt = getNum('field_compAmount', 10);
  const compDisbursedPct = Math.min(100, getNum('field_compDisbursed', 50));

  return {
    project_type: getStr('field_projectType', 'Highway'),
    land_type: getStr('field_landType', 'Mixed'),
    priority: getStr('field_priority', 'Normal'),
    current_stage: getStr('field_currentStage', 'Survey'),
    complexity_score: getNum('field_complexity', 40),
    total_parcels: totalParcels,
    parcels_pending: parcelsPending,
    parcels_acquired: parcelsAcquired,
    affected_families: getNum('field_affectedFamilies', 50),
    land_area_hectares: getNum('field_landArea', 100),
    planned_duration_days: getInt('field_plannedDuration', 600),
    
    // Schedule
    days_since_notification: 30,
    days_elapsed: 30,
    days_in_current_stage: 30,
    planned_stage_duration_days: 30,
    schedule_variance_days: parseFloat(document.getElementById('field_schedVariance')?.value) || 0,
    milestones_due: 2,
    milestones_completed: 1,
    milestones_overdue: getInt('field_milestonesOverdue', 0),

    // Acquisition
    acquisition_progress_pct: Math.min(100, getNum('field_acqProgress', 50)),
    acquisition_velocity_pct_per_30d: getNum('field_velocity', 5),

    // Possession
    possession_progress_pct: Math.min(100, (1 - (getInt('field_possessionPending', 50) / Math.max(1, totalParcels))) * 100),
    possession_pending_parcels: getInt('field_possessionPending', 50),

    // Compensation
    compensation_total_amount: compPendingAmt * 1.5,
    compensation_assessed_amount: compPendingAmt * 1.2,
    compensation_disbursed_amount: compPendingAmt * 0.5,
    compensation_pending_amount: compPendingAmt,
    compensation_completion_pct: compDisbursedPct,
    compensation_pending_cases: compPendingCases,
    avg_compensation_delay_days: compPendingCases * 0.5,

    // Documentation
    documents_required: docsReq,
    documents_verified: docsVerified,
    documents_pending: docsPending,
    documentation_completion_pct: docPct,

    // Approvals
    approvals_required: 10,
    approvals_completed: 5,
    approvals_pending: getInt('field_apprPending', 2),
    approval_completion_pct: 50.0,
    avg_approval_delay_days: getNum('field_apprDelay', 10),
    overdue_approvals: getInt('field_apprOverdue', 0),

    // Legal
    active_legal_disputes: getInt('field_activeDisputes', 0),
    resolved_legal_disputes: 0,
    ownership_disputes: getInt('field_ownerDisputes', 0),
    court_stay_cases: getInt('field_courtStays', 0),
    pending_objections: getInt('field_pendingObj', 0),

    // R&R
    families_requiring_rr: getInt('field_rrPending', 0) + 10,
    families_rr_completed: 10,
    rr_completion_pct: Math.min(100, getNum('field_rrCompletion', 50)),
    rr_pending_cases: getInt('field_rrPending', 0),

    // Stakeholders
    pending_stakeholder_actions: getInt('field_shActions', 0),
    avg_stakeholder_response_days: getNum('field_shResponse', 10),
    stakeholder_responsiveness_score: getNum('field_shScore', 5),
    interdepartmental_pending_actions: 2,

    // Historical
    historical_avg_delay_days: getNum('field_histDelay', 50),
  };
}

async function triggerAssessment(container) {
  const overlay = container.querySelector('#loadingOverlay');
  const runBtn = container.querySelector('#runPredictionBtn');
  
  if (overlay) overlay.classList.remove('hidden');
  if (runBtn) {
    runBtn.disabled = true;
    runBtn.classList.add('opacity-70', 'cursor-not-allowed');
  }

  try {
    const payload = collectFormData();
    const result = await predictionService.predictRisk(payload);
    currentAssessmentState.lastPrediction = result;
    renderResults(container, result);
  } catch (err) {
    console.error('Prediction failed:', err);
    showPredictionError(container, err.message);
  } finally {
    if (overlay) overlay.classList.add('hidden');
    if (runBtn) {
      runBtn.disabled = false;
      runBtn.classList.remove('opacity-70', 'cursor-not-allowed');
    }
  }
}

function renderResults(container, result) {
  const rawProb = result.delay_probability_pct !== undefined
    ? result.delay_probability_pct
    : (result.delay_probability !== undefined ? result.delay_probability * 100 : 0);
  const prob = typeof rawProb === 'number' && !isNaN(rawProb) ? rawProb : 0;

  // Single shared source of truth for risk classification
  const riskLevel = getRiskLevel(prob);
  const wording = getRiskWording(riskLevel);
  const summary = getRiskSummary(riskLevel);
  const thresholdNote = getRiskThresholdLabel(riskLevel);

  // 1. Radial Progress and Metric
  const probValEl = container.querySelector('#probabilityValue');
  const circleEl = container.querySelector('#probabilityCircle');
  const decisionEl = container.querySelector('#decisionOutcome');
  const badgeEl = container.querySelector('#riskBadge');
  const summaryEl = container.querySelector('#riskSummaryText');
  const thresholdEl = container.querySelector('#riskThresholdNote');

  if (probValEl) probValEl.textContent = `${prob.toFixed(2)}%`;

  if (decisionEl) {
    decisionEl.textContent = wording;
    decisionEl.className = `mt-1 font-label-sm text-[11px] font-semibold ${getRiskTextColor(riskLevel)}`;
  }

  if (summaryEl) {
    summaryEl.textContent = summary;
  }

  if (thresholdEl) {
    thresholdEl.textContent = thresholdNote;
  }

  // Radial stroke circumference: 2 * PI * 48 = 301.59
  const totalCircumference = 301.59;
  const offset = totalCircumference - (totalCircumference * (Math.min(100, Math.max(0, prob)) / 100));
  if (circleEl) {
    circleEl.style.strokeDashoffset = offset;
    circleEl.setAttribute('class', `transition-all duration-700 ease-out ${getRiskStrokeColor(riskLevel)}`);
  }

  // Risk Badge styling
  if (badgeEl) {
    badgeEl.textContent = `${getRiskLevelLabel(riskLevel)} ${t('risk.tier', 'Tier')}`;
    badgeEl.className = `px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider border ${getRiskBadgeClasses(riskLevel)}`;
  }

  // 2. Dynamic Risk-Increasing Factors (from risk_drivers)
  const driversContainer = container.querySelector('#riskIncreasingContainer');
  if (driversContainer) {
    const drivers = result.risk_drivers || [];
    if (drivers.length === 0) {
      driversContainer.innerHTML = `
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          ${t('assessment.noRiskIncreasing', 'No major risk-increasing factors identified for this project state.')}
        </div>
      `;
    } else {
      // Find max contribution for relative bar width
      const maxContrib = Math.max(...drivers.map(d => Math.abs(d.contribution)), 0.1);
      driversContainer.innerHTML = drivers.map(driver => {
        const barWidthPct = Math.min(100, Math.max(15, (Math.abs(driver.contribution) / maxContrib) * 100));
        const barColor = driver.contribution > 0.4 ? 'bg-error' : 'bg-secondary-container';
        return `
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-semibold">${driver.factor}: <span class="font-bold text-on-surface font-tabular-data">${driver.value ?? '--'}</span></span>
              <span class="font-tabular-data font-bold text-error">+${driver.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="${barColor} h-full rounded-full transition-all duration-700" style="width: ${barWidthPct.toFixed(0)}%;"></div>
            </div>
            <span class="font-body-sm text-[11px] text-on-surface-variant italic">
              <strong>${t('assessment.action', 'Action:')}</strong> ${driver.recommendation || 'Prioritize verification and monitoring.'}
            </span>
          </div>
        `;
      }).join('');
    }
  }

  // 3. Dynamic Risk-Reducing Factors (from risk_reducing_factors)
  const reducingContainer = container.querySelector('#riskReducingContainer');
  if (reducingContainer) {
    const reducing = result.risk_reducing_factors || [];
    if (reducing.length === 0) {
      reducingContainer.innerHTML = `
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          ${t('assessment.noRiskReducing', 'No significant risk-reducing factors detected.')}
        </div>
      `;
    } else {
      const maxContrib = Math.max(...reducing.map(d => Math.abs(d.contribution)), 0.1);
      reducingContainer.innerHTML = reducing.map(factor => {
        const barWidthPct = Math.min(100, Math.max(15, (Math.abs(factor.contribution) / maxContrib) * 100));
        return `
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-medium">${factor.factor}: <span class="font-bold text-on-surface font-tabular-data">${factor.value ?? '--'}</span></span>
              <span class="font-tabular-data font-semibold text-emerald-600">${factor.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-600 h-full rounded-full transition-all duration-700" style="width: ${barWidthPct.toFixed(0)}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 4. Dynamic Statutory Directives
  const directivesContainer = container.querySelector('#directivesContainer');
  if (directivesContainer) {
    const drivers = result.risk_drivers || [];
    if (drivers.length > 0) {
      directivesContainer.innerHTML = drivers.slice(0, 2).map((driver, idx) => {
        const badgeTag = idx === 0 ? t('assessment.p1Priority', 'P1 PRIORITY') : t('assessment.p2Priority', 'P2 PRIORITY');
        const badgeStyle = idx === 0 ? 'bg-error text-on-error' : 'bg-secondary text-on-secondary';
        return `
          <div class="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm border border-outline-variant/30">
            <span class="px-1.5 py-0.5 rounded ${badgeStyle} font-label-sm text-[10px] font-bold shrink-0 mt-0.5">${badgeTag}</span>
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm font-bold text-on-surface">${driver.factor} ${t('assessment.resolution', 'Resolution')}</span>
              <p class="font-body-sm text-[12px] text-on-surface-variant mt-0.5">${driver.recommendation}</p>
            </div>
          </div>
        `;
      }).join('');
    } else {
      directivesContainer.innerHTML = `
        <div class="p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-xs">
          ${t('assessment.nominalDirectives', 'Statutory progress remains nominal. Continue scheduled monitoring under Section 19 protocols.')}
        </div>
      `;
    }
  }
}

function showPredictionError(container, message) {
  const driversContainer = container.querySelector('#riskIncreasingContainer');
  const safeMessage = message && !message.includes('uvicorn') 
    ? message 
    : 'Prediction service is temporarily unavailable. Please try again.';

  if (driversContainer) {
    driversContainer.innerHTML = `
      <div class="p-space-sm rounded bg-error-container/40 border border-error text-on-surface flex flex-col gap-2">
        <div class="flex items-center gap-1.5 text-error font-bold text-label-sm">
          <span class="material-symbols-outlined text-[16px]">error</span>
          <span>${t('assessment.inferenceUnavailable', 'Inference Unavailable')}</span>
        </div>
        <span class="font-body-sm text-xs text-on-surface">${safeMessage}</span>
        <div class="flex items-center gap-1.5 mt-1">
          <button class="self-start px-2.5 py-1 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-xs font-semibold rounded border border-outline-variant/40 shadow-sm flex items-center gap-1 transition-colors" id="retryPredictionBtn" type="button">
            <span class="material-symbols-outlined text-[14px]">refresh</span>
            <span>${t('assessment.retryAssessment', 'Retry Assessment')}</span>
          </button>
          ${renderInfoButton('retry_assessment')}
        </div>
      </div>
    `;

    const retryBtn = driversContainer.querySelector('#retryPredictionBtn');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => triggerAssessment(container));
    }
  }
}

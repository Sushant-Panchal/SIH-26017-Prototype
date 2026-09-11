/**
 * Bhoomi Sakha - Assessment View
 * Interactive Risk Assessment Cockpit with 10 structured sections,
 * live telemetry editing, real-time XGBoost inference via POST /predict,
 * dynamic SHAP risk-increasing factor breakdowns, and risk-mitigation vectors.
 */

import { SCENARIO_PRESETS } from '../data/presets.js';
import { predictionService } from '../api/prediction.js';

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
            <div class="flex items-center gap-space-sm">
              <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
              <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Assess Project Risk</h1>
              <span class="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">FastAPI • XGB-26017 Engine</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant mt-0.5">
              Enter or edit project telemetry to estimate statutory delay probability and inspect model-derived risk drivers via <code class="font-tabular-data text-on-surface bg-surface-container px-1 py-0.5 rounded text-label-sm font-semibold">POST /predict</code>.
            </p>
          </div>

          <!-- Mode Selector Switch -->
          <div class="inline-flex p-1 rounded-xl bg-surface-container-high shadow-inner shrink-0">
            <button class="px-space-md py-1.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5" id="modeSelectBtn" type="button">
              <span class="material-symbols-outlined text-[16px]">folder_open</span>
              <span>Select Existing Project</span>
            </button>
            <button class="px-space-md py-1.5 rounded font-label-md text-label-md bg-surface-container-lowest text-on-surface shadow-sm font-semibold flex items-center gap-1.5 transition-all" id="modeSimulateBtn" type="button">
              <span class="material-symbols-outlined text-[16px] text-secondary">tune</span>
              <span>Create / Test Scenario</span>
            </button>
          </div>
        </div>

        <!-- Quick Scenario Presets Bar -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border border-outline-variant/30">
          <div class="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm pl-space-xs">
            <span class="material-symbols-outlined text-[16px] text-secondary">flash_on</span>
            <span class="uppercase tracking-wider font-semibold">Statutory Test Presets:</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-space-xs w-full lg:w-auto">
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors text-left flex items-center justify-between gap-space-sm group" data-preset="low" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate group-hover:text-primary">NH-44 Bypass Ph. 2</span>
                <span class="font-label-sm text-[10px] text-emerald-600 font-tabular-data font-semibold">Low Delay Tier</span>
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
                <span class="font-label-sm text-[10px] text-on-surface-variant font-tabular-data">High Bottleneck</span>
              </div>
              <span class="w-2 h-2 rounded-full bg-orange-600 shrink-0"></span>
            </button>
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors text-left flex items-center justify-between gap-space-sm group" data-preset="critical" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate group-hover:text-primary">Court Injunction HC</span>
                <span class="font-label-sm text-[10px] text-on-surface-variant font-tabular-data">Critical Injunction</span>
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
                <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">Telemetry Input Matrices</h2>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Configure cadastral attributes according to Section 11 &amp; 19 statutory filings</p>
              </div>
            </div>
            <button class="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 px-space-sm py-1 rounded hover:bg-surface-container transition-colors border border-outline-variant/40" id="resetFormBtn" type="button">
              <span class="material-symbols-outlined text-[15px]">refresh</span>
              <span>Reset Values</span>
            </button>
          </div>

          <!-- SECTION A: Project Profile -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="w-1.5 h-3 bg-primary rounded-full"></span> Section A • Project Profile
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Core Classification</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Project Type</label>
                <select class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_projectType">
                  <option value="Highway">Highway</option>
                  <option value="Railway">Railway</option>
                  <option value="Industrial">Industrial Node</option>
                  <option value="Metro">Metro Rail</option>
                  <option value="Irrigation">Irrigation</option>
                  <option value="Power">Power Grid</option>
                  <option value="Urban Development">Urban Development</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Land Classification</label>
                <select class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_landType">
                  <option value="Agricultural">Agricultural</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Mixed">Mixed Revenue</option>
                  <option value="Residential">Residential</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Priority Tier</label>
                <select class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_priority">
                  <option value="Normal">Normal</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Complexity (0-100)</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_complexity" step="0.1" min="0" max="100" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Total Parcels</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_totalParcels" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Affected Families (PAFs)</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_affectedFamilies" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Land Extent (Ha)</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_landArea" step="0.1" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Planned Duration (d)</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_plannedDuration" min="0" type="number"/>
              </div>
            </div>
          </div>

          <!-- SECTION B & C: Progress and Critical Documentation in Responsive Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            
            <!-- SECTION B: Acquisition Progress -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-secondary rounded-full"></span> Section B • Progress
                </span>
                <span class="font-tabular-data text-label-sm text-secondary font-semibold" id="badgeAcqVelocity">Velocity Active</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Acq. Progress (%)</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_acqProgress" min="0" max="100" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Velocity (%/30d)</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_velocity" step="0.01" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Parcels Pending</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_parcelsPending" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Possession Pending</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_possessionPending" min="0" type="number"/>
                </div>
              </div>
            </div>

            <!-- SECTION C: Documentation Telemetry -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm relative overflow-hidden border border-outline-variant/30">
              <div class="absolute top-0 right-0 w-24 h-1 bg-secondary-container"></div>
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-secondary-container rounded-full"></span> Section C • Documentation
                </span>
                <span class="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[10px] font-semibold">Key Model Driver</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Docs Required</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_docsReq" min="1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-secondary font-semibold mb-1 flex items-center gap-1">
                    <span>Docs Pending</span>
                    <span class="material-symbols-outlined text-[13px]">edit</span>
                  </label>
                  <input class="bg-surface-container-high px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface font-bold focus:outline-none focus:ring-2 focus:ring-secondary-container border border-outline-variant/50" id="field_docsPending" min="0" type="number"/>
                </div>
                <div class="col-span-2 flex flex-col gap-1">
                  <div class="flex items-center justify-between font-label-sm text-label-sm">
                    <span class="text-on-surface-variant">Documentation Completion</span>
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
                  <span class="w-1.5 h-3 bg-outline rounded-full"></span> Section D • Compensation
                </span>
                <span class="font-tabular-data text-label-sm text-on-surface-variant" id="label_compDisbursedBadge">Escrow Tranche</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Pending Cases</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compCases" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Pending (₹ Cr)</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compAmount" min="0" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Disbursed %</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compDisbursed" min="0" max="100" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- SECTION E: Clearances / Approvals -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-outline rounded-full"></span> Section E • Clearances
                </span>
                <span class="font-label-sm text-label-sm text-error font-medium" id="label_clearanceAlert">Inter-Agency Gate</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Approvals Pend.</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprPending" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Overdue Num</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprOverdue" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Avg Delay (d)</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprDelay" min="0" step="0.1" type="number"/>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION F: Legal & Litigation -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="w-1.5 h-3 bg-error rounded-full"></span> Section F • Legal Litigations &amp; Objections
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Section 15 Hearings</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Pending Objections</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_pendingObj" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Active Land Disputes</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_activeDisputes" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Ownership Conflicts</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_ownerDisputes" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-error font-bold mb-1">Court Stays / Writs</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface font-bold focus:outline-none border border-error/50" id="field_courtStays" min="0" type="number"/>
              </div>
            </div>
          </div>

          <!-- SECTIONS G, H, I, J: Compact Telemetry Quartet -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            
            <!-- Section G: R&R -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">Section G • R&amp;R Resettlement</span>
                <span class="font-tabular-data text-[11px] text-emerald-600 font-semibold" id="label_rrSummary">RFCTLARR Compliance</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Pending Cases</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_rrPending" min="0" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Completion %</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_rrCompletion" min="0" max="100" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section H: Schedule -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">Section H • Schedule &amp; Variance</span>
                <span class="font-tabular-data text-[11px] text-amber-600 font-semibold" id="label_schedSlippage">Critical Path</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Variance (Days)</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_schedVariance" step="0.1" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Overdue Milestones</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_milestonesOverdue" min="0" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section I: Stakeholders -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">Section I • Stakeholder Coordination</span>
                <span class="font-tabular-data text-[11px] text-on-surface-variant">Response Latency</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Pending Act.</label>
                  <input class="w-full bg-surface-container-low px-1.5 py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shActions" min="0" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Avg Resp (d)</label>
                  <input class="w-full bg-surface-container-low px-1.5 py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shResponse" min="0" step="0.1" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Score /10</label>
                  <input class="w-full bg-surface-container-low px-1.5 py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shScore" min="0" max="10" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section J: Historical Context -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">Section J • Historical Delay Context</span>
                <span class="font-tabular-data text-[11px] text-on-surface-variant">Regional Priors</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Avg Reg. Delay (d)</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_histDelay" min="0" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col justify-end">
                  <span class="font-label-sm text-[11px] text-on-surface-variant">Training Archetype:</span>
                  <span class="font-label-sm text-label-sm font-semibold text-on-surface">Linear Infrastructure (NLRMP)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sticky Operational Action Bar -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md sticky bottom-4 z-20 border-2 border-surface-container-high">
            <div class="flex items-center gap-space-sm">
              <div class="flex flex-col">
                <span class="font-label-md text-label-md text-on-surface font-semibold">Inference Target: Statutory 5-Year Window</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">LARR Act 2013 § 25 Mandate Validation • XGBoost Engine</span>
              </div>
            </div>
            <div class="flex items-center gap-space-sm w-full sm:w-auto">
              <button class="w-1/3 sm:w-auto px-space-md py-2.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors border border-outline-variant/40" id="resetScenarioBtn" type="button">
                Reset
              </button>
              <button class="w-2/3 sm:w-auto px-space-lg py-2.5 rounded bg-primary text-on-primary hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 group font-bold tracking-wide uppercase" id="runPredictionBtn" type="button">
                <span class="material-symbols-outlined text-[20px] text-secondary-container group-hover:rotate-12 transition-transform">model_training</span>
                <span>Assess Project Risk</span>
              </button>
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
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold">Analyzing Project Telemetry...</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant font-tabular-data">Calling FastAPI POST /predict &amp; XGBoost Tree Contributions</span>
              </div>
            </div>

            <!-- Top Row with State Badge -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-secondary text-[22px]">analytics</span>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Predictive Risk Index</h3>
              </div>
              <span class="px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 transition-all" id="riskBadge">
                Medium Risk
              </span>
            </div>

            <!-- Delay Probability Radial Visualization -->
            <div class="flex items-center justify-center py-space-sm">
              <div class="relative flex items-center justify-center w-52 h-52">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle class="text-surface-container-high" cx="60" cy="60" fill="none" r="48" stroke="currentColor" stroke-width="10"></circle>
                  <circle class="text-secondary transition-all duration-700 ease-out" cx="60" cy="60" fill="none" id="probabilityCircle" r="48" stroke="currentColor" stroke-dasharray="301.59" stroke-dashoffset="174" stroke-linecap="round" stroke-width="10"></circle>
                </svg>
                <div class="absolute flex flex-col items-center justify-center text-center">
                  <span class="font-headline-xl text-headline-xl font-bold text-on-surface font-tabular-data leading-none" id="probabilityValue">42.28%</span>
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">Delay Probability</span>
                  <span class="mt-1 font-label-sm text-[11px] font-semibold text-secondary" id="decisionOutcome">Delay: NO (Threshold &lt; 50%)</span>
                </div>
              </div>
            </div>

            <!-- Explanatory Cadastral Model Note -->
            <div class="bg-surface-container-low p-space-sm rounded-lg flex items-start gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
              <span class="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">verified</span>
              <span>Predicted by <strong>XGBoost Model (SIH 26017)</strong> trained on 3,000,000 national records. Live model inference via <code class="font-tabular-data text-[11px] text-on-surface bg-surface-container-highest px-1 py-0.5 rounded font-bold">POST /predict</code>.</span>
            </div>
          </div>

          <!-- 2. Risk-Increasing Factors (Red / Orange Bars) -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-error flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-[16px]">trending_up</span> Risk-Increasing Factors
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data">Model Contribution (+Δ)</span>
            </div>
            <div class="flex flex-col gap-space-sm pt-space-xs" id="riskIncreasingContainer">
              <!-- Dynamically rendered -->
            </div>
          </div>

          <!-- 3. Factors Reducing Predicted Risk (Green Negative Bars) -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-emerald-700 flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-[16px]">trending_down</span> Factors Reducing Predicted Risk
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data">Model Contribution (-Δ)</span>
            </div>
            <div class="flex flex-col gap-space-sm pt-space-xs" id="riskReducingContainer">
              <!-- Dynamically rendered -->
            </div>
            <div class="pt-1 text-[11px] text-on-surface-variant italic">
              Note: Values reflect mathematical dampening within the XGBoost model and are not causal recommendations.
            </div>
          </div>

          <!-- 4. Statutory Directives / Priority Actions -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-[16px] text-secondary">gavel</span> Recommended Statutory Directives
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-semibold">Priority Execution</span>
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
                <span class="font-label-md text-label-md text-on-surface font-semibold">Methodology &amp; Model Evaluation</span>
              </div>
              <span class="material-symbols-outlined text-[18px] text-on-surface-variant transition-transform" id="accordionChevron">expand_more</span>
            </button>
            <div class="hidden px-space-md pb-space-md pt-0 text-on-surface-variant font-body-sm text-body-sm flex flex-col gap-space-xs border-t border-surface-container-high" id="transparencyContent">
              <p class="pt-space-xs">
                The Bhoomi Sakha inference engine executes binary classification across 76 engineered features aligned with statutory RFCTLARR Act 2013 and national cadastral norms.
              </p>
              <div class="grid grid-cols-2 gap-2 my-1 text-[12px] bg-surface-container-low p-2 rounded">
                <div><strong>Accuracy:</strong> 71.05%</div>
                <div><strong>ROC-AUC:</strong> 0.7805</div>
                <div><strong>Precision:</strong> 68.07%</div>
                <div><strong>Recall:</strong> 71.98%</div>
                <div><strong>Training Dataset:</strong> 3,000,000 rows</div>
                <div><strong>Projects Evaluated:</strong> 400,127</div>
              </div>
              <ul class="list-disc pl-5 flex flex-col gap-1 text-[11px]">
                <li><strong>Tree Contributions:</strong> Feature weights reflect exact gradient boosting margin impacts per project snapshot.</li>
                <li><strong>Risk Thresholds:</strong> LOW &lt; 40%, MEDIUM 40-60%, HIGH 60-80%, CRITICAL &ge; 80%.</li>
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
  populateForm(initialData.values);
  calculateDocCompletion();

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
    if (el && val !== undefined) el.value = val;
  };

  setVal('field_projectType', values.project_type || 'Highway');
  setVal('field_landType', values.land_type || 'Agricultural');
  setVal('field_priority', values.priority || 'Normal');
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
    current_stage: 'Survey',
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
  const prob = result.delay_probability_pct ?? (result.delay_probability * 100);
  const riskLevel = result.risk_level || 'MEDIUM';
  const delayed = result.predicted_delayed;

  // 1. Radial Progress and Metric
  const probValEl = container.querySelector('#probabilityValue');
  const circleEl = container.querySelector('#probabilityCircle');
  const decisionEl = container.querySelector('#decisionOutcome');
  const badgeEl = container.querySelector('#riskBadge');

  if (probValEl) probValEl.textContent = `${prob.toFixed(2)}%`;
  
  if (decisionEl) {
    decisionEl.textContent = delayed 
      ? 'Delay: IMMINENT / LIKELY (Threshold ≥ 50%)' 
      : 'Delay: UNLIKELY / ON TRACK (Threshold < 50%)';
    decisionEl.className = `mt-1 font-label-sm text-[11px] font-semibold ${delayed ? 'text-error' : 'text-emerald-600'}`;
  }

  // Radial stroke circumference: 2 * PI * 48 = 301.59
  const totalCircumference = 301.59;
  const offset = totalCircumference - (totalCircumference * (prob / 100));
  if (circleEl) {
    circleEl.style.strokeDashoffset = offset;
    circleEl.className = `transition-all duration-700 ease-out ${
      riskLevel === 'CRITICAL' ? 'text-error' :
      riskLevel === 'HIGH' ? 'text-secondary-container' :
      riskLevel === 'MEDIUM' ? 'text-amber-500' : 'text-emerald-500'
    }`;
  }

  // Risk Badge styling
  if (badgeEl) {
    badgeEl.textContent = `${riskLevel} RISK`;
    const badgeColors = {
      LOW: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      MEDIUM: 'bg-amber-100 text-amber-900 border-amber-300',
      HIGH: 'bg-orange-100 text-orange-900 border-orange-300',
      CRITICAL: 'bg-red-100 text-red-900 border-red-300',
    };
    badgeEl.className = `px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider border ${badgeColors[riskLevel] || badgeColors.MEDIUM}`;
  }

  // 2. Dynamic Risk-Increasing Factors (from risk_drivers)
  const driversContainer = container.querySelector('#riskIncreasingContainer');
  if (driversContainer) {
    const drivers = result.risk_drivers || [];
    if (drivers.length === 0) {
      driversContainer.innerHTML = `
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          No major risk-increasing factors identified for this project state.
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
              <strong>Action:</strong> ${driver.recommendation || 'Prioritize verification and monitoring.'}
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
          No significant risk-reducing factors detected.
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
        const badgeTag = idx === 0 ? 'P1 PRIORITY' : 'P2 PRIORITY';
        const badgeStyle = idx === 0 ? 'bg-error text-on-error' : 'bg-secondary text-on-secondary';
        return `
          <div class="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm border border-outline-variant/30">
            <span class="px-1.5 py-0.5 rounded ${badgeStyle} font-label-sm text-[10px] font-bold shrink-0 mt-0.5">${badgeTag}</span>
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm font-bold text-on-surface">${driver.factor} Resolution</span>
              <p class="font-body-sm text-[12px] text-on-surface-variant mt-0.5">${driver.recommendation}</p>
            </div>
          </div>
        `;
      }).join('');
    } else {
      directivesContainer.innerHTML = `
        <div class="p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-xs">
          Statutory progress remains nominal. Continue scheduled monitoring under Section 19 protocols.
        </div>
      `;
    }
  }
}

function showPredictionError(container, message) {
  const driversContainer = container.querySelector('#riskIncreasingContainer');
  if (driversContainer) {
    driversContainer.innerHTML = `
      <div class="p-space-sm rounded bg-error-container/40 border border-error text-on-surface flex flex-col gap-1">
        <div class="flex items-center gap-1 text-error font-bold text-label-sm">
          <span class="material-symbols-outlined text-[16px]">error</span>
          <span>Inference Error</span>
        </div>
        <span class="text-body-sm text-xs">${message}</span>
      </div>
    `;
  }
}

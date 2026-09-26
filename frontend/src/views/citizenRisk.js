/**
 * Bhoomi Sakha - Citizen Delay-Risk Assessment View
 * Reuses the existing XGBoost /predict endpoint.
 * Provides transparent, low-jargon delay risk analysis for landholders.
 */

import { caseService } from '../api/cases.js';
import { predictionService } from '../api/prediction.js';
import { authService } from '../api/auth.js';
import { t } from '../i18n/index.js';
import { attachInfoTooltips } from '../utils/infoModal.js';

export async function renderCitizenRiskView(container) {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const preselectedLandId = urlParams.get('land_id');

  const user = authService.getStoredUser();
  const userId = user?.user_id || null;

  container.innerHTML = `
    <div class="space-y-6 max-w-7xl mx-auto pb-12 animate-fade-in">
      <!-- Breadcrumb & Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-label-sm mb-1">
            <a href="#/citizen-dashboard" class="hover:text-primary transition-colors">${t('nav.citizenDashboard', 'Citizen Portal')}</a>
            <span>/</span>
            <span class="text-on-surface font-semibold">${t('nav.checkDelayRisk', 'Check Delay Risk')}</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface">
            ${t('citizen.riskHeader', 'AI Land Acquisition Delay-Risk Estimator')}
          </h1>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            ${t('citizen.riskSub', 'Analyze compensation delays, administrative bottlenecks, and document processing timelines for your parcel.')}
          </p>
        </div>
      </div>

      <!-- Legal & Advisory Disclaimer Notice -->
      <div class="p-4 bg-primary/5 border border-primary/20 rounded-xl text-xs text-on-surface-variant flex items-start gap-3 shadow-xs">
        <span class="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">info</span>
        <div>
          <span class="font-bold text-on-surface block mb-0.5">${t('citizen.disclaimerTitle', 'Official Predictive Analytics Notice')}</span>
          <span>${t('citizen.disclaimerText', 'This is an estimated predictive assessment based on the information provided and machine-learning models trained on historical land acquisition milestones. It is not a legal determination, guarantee, or statutory court order.')}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Assessment Form (Left Column) -->
        <div class="lg:col-span-6 bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm space-y-4">
          <h2 class="text-base font-headline-sm font-bold text-on-surface border-b border-outline-variant/30 pb-2 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">tune</span>
            <span>${t('citizen.step1Title', 'Parcel & Milestone Information')}</span>
          </h2>

          <form id="citizenRiskForm" class="space-y-4 text-xs">
            <div>
              <label class="block font-semibold text-on-surface mb-1">${t('citizen.selectLand', 'Select Registered Land')}</label>
              <select id="riskLandSelect" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">-- ${t('citizen.chooseLandOrManual', 'Choose a registered land or enter manual details')} --</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldArea', 'Land Area (Hectares)')} *</label>
                <input type="number" id="riskArea" step="0.01" min="0.01" required value="2.5" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldLandType', 'Land Type')}</label>
                <select id="riskLandType" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="Agricultural">Agricultural</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Residential">Residential</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldCurrentStage', 'Current Acquisition Stage')}</label>
                <select id="riskStage" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="Notification">Notification (Sec 4)</option>
                  <option value="Survey">Joint Measurement Survey</option>
                  <option value="Valuation">Valuation & Award Hearing</option>
                  <option value="Compensation" selected>Compensation Disbursement</option>
                  <option value="Possession">Possession Handover</option>
                  <option value="Rehabilitation">Rehabilitation & Resettlement</option>
                  <option value="Closure">Final Closure</option>
                </select>
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.daysSinceNotice', 'Days Since Initial Notice')}</label>
                <input type="number" id="riskDaysNotice" min="0" value="180" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div class="border-t border-outline-variant/30 pt-3 space-y-3">
              <span class="text-xs font-bold text-on-surface block uppercase tracking-wider text-primary">${t('citizen.compensationStatus', 'Compensation Status')}</span>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block font-semibold text-on-surface mb-1">${t('citizen.compensationReceived', 'Have you received compensation?')}</label>
                  <select id="riskCompensationStatus" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="pending" selected>No / Pending Award</option>
                    <option value="partial">Partially Received</option>
                    <option value="full">Fully Received</option>
                    <option value="dispute">In Legal Dispute</option>
                  </select>
                </div>
                <div>
                  <label class="block font-semibold text-on-surface mb-1">${t('citizen.activeDisputes', 'Active Legal / Court Objections')}</label>
                  <select id="riskLegalDisputes" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="0" selected>None</option>
                    <option value="1">1 Active Objection / Stay</option>
                    <option value="2">Multiple Disputes</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block font-semibold text-on-surface mb-1">${t('citizen.docsSubmitted', 'Documentation Status')}</label>
                  <select id="riskDocsStatus" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="complete">All Documents Submitted & Verified</option>
                    <option value="pending" selected>Some Documents Pending / Verification Awaited</option>
                    <option value="rejected">Document Mutation Disputed</option>
                  </select>
                </div>
                <div>
                  <label class="block font-semibold text-on-surface mb-1">${t('citizen.possessionStatus', 'Land Possession')}</label>
                  <select id="riskPossessionStatus" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="owner" selected>Still in Landowner Possession</option>
                    <option value="taken">Possession Taken by Authority</option>
                    <option value="disputed">Possession Disputed</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" id="calculateRiskBtn" class="w-full py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-xs font-semibold hover:opacity-95 transition-all shadow-sm flex items-center justify-center gap-2 mt-2">
              <span class="material-symbols-outlined text-[18px]">neurology</span>
              <span>${t('citizen.runModelBtn', 'Calculate Estimated Delay Risk')}</span>
            </button>
          </form>
        </div>

        <!-- Assessment Results (Right Column) -->
        <div class="lg:col-span-6 bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h2 class="text-base font-headline-sm font-bold text-on-surface border-b border-outline-variant/30 pb-2 flex items-center gap-2">
              <span class="material-symbols-outlined text-emerald-600 text-[20px]">analytics</span>
              <span>${t('citizen.assessmentResultsTitle', 'Predictive Analysis Results')}</span>
            </h2>

            <div id="riskResultPlaceholder" class="py-16 text-center text-on-surface-variant space-y-2">
              <span class="material-symbols-outlined text-[48px] text-primary/30">insights</span>
              <div class="font-medium text-sm">${t('citizen.readyToAssess', 'Ready to evaluate delay risk')}</div>
              <p class="text-xs max-w-sm mx-auto opacity-80">${t('citizen.readyToAssessSub', 'Fill in your parcel details and click Calculate to run the ML model.')}</p>
            </div>

            <div id="riskResultContent" class="hidden space-y-5 animate-fade-in">
              <!-- Score Badge Banner -->
              <div class="p-5 rounded-xl border flex items-center justify-between" id="riskBannerContainer">
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider font-label-sm" id="riskLevelText">HIGH RISK</span>
                  <div class="text-3xl font-extrabold font-tabular-data mt-0.5" id="riskProbabilityText">78%</div>
                  <span class="text-xs opacity-90">${t('citizen.riskProbLabel', 'Predicted Probability of Acquisition Delay')}</span>
                </div>
                <div class="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl border-4" id="riskCircleScore">
                  !
                </div>
              </div>

              <!-- Risk Drivers (What increases delay) -->
              <div class="space-y-2">
                <span class="font-bold text-xs text-on-surface flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-error text-[16px]">warning</span>
                  <span>${t('citizen.keyFactors', 'Primary Delay Risk Factors')}</span>
                </span>
                <ul id="riskDriversList" class="space-y-1.5 text-xs text-on-surface-variant"></ul>
              </div>

              <!-- Recommendations / Next Steps -->
              <div class="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded-xl space-y-2 text-xs">
                <span class="font-bold text-on-surface flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-primary text-[16px]">lightbulb</span>
                  <span>${t('citizen.recommendedAction', 'Recommended Action for Citizen')}</span>
                </span>
                <p id="riskRecommendationText" class="text-on-surface-variant leading-relaxed"></p>
              </div>
            </div>
          </div>

          <!-- Bottom Action: Link to Complaint Filing -->
          <div id="fileComplaintPrefilledAction" class="hidden pt-4 border-t border-outline-variant/30">
            <button id="fileComplaintWithRiskBtn" type="button" class="w-full py-2.5 bg-secondary text-on-secondary rounded-lg font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-sm transition-all">
              <span class="material-symbols-outlined text-[18px]">report_problem</span>
              <span>${t('citizen.fileGrievanceWithData', 'File Official Grievance With This Assessment')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  attachInfoTooltips(container);

  // Populate lands dropdown if user is authenticated
  if (userId) {
    loadCitizenLandsDropdown(userId, preselectedLandId);
  }

  // Handle Risk calculation form submission
  const form = document.getElementById('citizenRiskForm');
  let latestAssessment = null;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('calculateRiskBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="animate-spin material-symbols-outlined text-[18px]">progress_activity</span>
      <span>${t('citizen.evaluatingRisk', 'Running ML Model...')}</span>
    `;

    try {
      const area = parseFloat(document.getElementById('riskArea').value) || 2.5;
      const stage = document.getElementById('riskStage').value;
      const daysSinceNotice = parseInt(document.getElementById('riskDaysNotice').value, 10) || 180;
      const compStatus = document.getElementById('riskCompensationStatus').value;
      const disputes = parseInt(document.getElementById('riskLegalDisputes').value, 10) || 0;
      const docsStatus = document.getElementById('riskDocsStatus').value;
      const possession = document.getElementById('riskPossessionStatus').value;

      // Map citizen inputs into XGBoost DelayPredictor schema
      const snapshot = {
        snapshot_day: daysSinceNotice,
        project_type: 'Highway',
        land_type: document.getElementById('riskLandType').value,
        priority: 'High',
        current_stage: stage,
        land_area_hectares: area,
        affected_families: Math.max(1, Math.round(area * 3)),
        complexity_score: compStatus === 'dispute' ? 4.5 : compStatus === 'pending' ? 3.5 : 2.0,
        days_since_notification: daysSinceNotice,
        planned_duration_days: 365,
        days_elapsed: daysSinceNotice,
        schedule_variance_days: daysSinceNotice > 180 ? daysSinceNotice - 180 : 0,
        total_parcels: 20,
        parcels_acquired: compStatus === 'full' ? 18 : compStatus === 'partial' ? 8 : 2,
        parcels_pending: compStatus === 'full' ? 2 : compStatus === 'partial' ? 12 : 18,
        acquisition_progress_pct: compStatus === 'full' ? 90 : compStatus === 'partial' ? 40 : 10,
        documents_required: 50,
        documents_verified: docsStatus === 'complete' ? 48 : docsStatus === 'pending' ? 25 : 10,
        documents_pending: docsStatus === 'complete' ? 2 : docsStatus === 'pending' ? 25 : 40,
        documentation_completion_pct: docsStatus === 'complete' ? 96 : docsStatus === 'pending' ? 50 : 20,
        active_legal_disputes: disputes,
        court_stay_cases: disputes > 1 ? 1 : 0,
        compensation_completion_pct: compStatus === 'full' ? 100 : compStatus === 'partial' ? 40 : 0,
        compensation_pending_cases: compStatus === 'full' ? 0 : 5,
        possession_progress_pct: possession === 'taken' ? 100 : possession === 'disputed' ? 20 : 0,
      };

      const result = await predictionService.predictRisk(snapshot);
      latestAssessment = {
        probability: result.delay_probability || 0.5,
        level: result.risk_level || 'MEDIUM',
        drivers: result.risk_drivers || [],
        land_id: document.getElementById('riskLandSelect').value || null,
      };

      renderRiskResult(latestAssessment);
    } catch (err) {
      alert(`Prediction failed: ${err.message}`);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span class="material-symbols-outlined text-[18px]">neurology</span>
        <span>${t('citizen.runModelBtn', 'Calculate Estimated Delay Risk')}</span>
      `;
    }
  });

  // Prefilled Grievance Action
  const fileGrievanceBtn = document.getElementById('fileComplaintWithRiskBtn');
  if (fileGrievanceBtn) {
    fileGrievanceBtn.addEventListener('click', () => {
      if (!latestAssessment) return;
      const params = new URLSearchParams();
      if (latestAssessment.land_id) params.set('land_id', latestAssessment.land_id);
      params.set('risk_probability', latestAssessment.probability.toFixed(3));
      params.set('risk_level', latestAssessment.level);
      window.location.hash = `#/citizen-complaint?${params.toString()}`;
    });
  }
}

async function loadCitizenLandsDropdown(userId, preselectedId) {
  const select = document.getElementById('riskLandSelect');
  if (!select) return;

  try {
    const lands = await caseService.getUserLands(userId);
    lands.forEach(l => {
      const opt = document.createElement('option');
      opt.value = l.land_id;
      opt.textContent = `${l.village} (Survey ${l.survey_number}) - ${l.area_hectares} Ha`;
      if (preselectedId && l.land_id === preselectedId) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    select.addEventListener('change', () => {
      const selected = lands.find(l => l.land_id === select.value);
      if (selected) {
        document.getElementById('riskArea').value = selected.area_hectares;
        document.getElementById('riskLandType').value = selected.land_type || 'Agricultural';
      }
    });

    if (preselectedId) {
      const match = lands.find(l => l.land_id === preselectedId);
      if (match) {
        document.getElementById('riskArea').value = match.area_hectares;
        document.getElementById('riskLandType').value = match.land_type || 'Agricultural';
      }
    }
  } catch (_) {
    // Non-blocking fallback
  }
}

function renderRiskResult(assessment) {
  const placeholder = document.getElementById('riskResultPlaceholder');
  const content = document.getElementById('riskResultContent');
  const actionContainer = document.getElementById('fileComplaintPrefilledAction');

  if (placeholder) placeholder.classList.add('hidden');
  if (content) content.classList.remove('hidden');
  if (actionContainer) actionContainer.classList.remove('hidden');

  const probPct = Math.round(assessment.probability * 100);
  const isHigh = assessment.level === 'HIGH' || assessment.level === 'CRITICAL' || probPct >= 65;
  const isMed = assessment.level === 'MEDIUM' || (probPct >= 35 && probPct < 65);

  const banner = document.getElementById('riskBannerContainer');
  const levelText = document.getElementById('riskLevelText');
  const probText = document.getElementById('riskProbabilityText');
  const circle = document.getElementById('riskCircleScore');
  const driversList = document.getElementById('riskDriversList');
  const recText = document.getElementById('riskRecommendationText');

  if (banner) {
    banner.className = isHigh
      ? 'p-5 rounded-xl border bg-rose-500/10 border-rose-500/30 text-rose-950 dark:text-rose-100 flex items-center justify-between'
      : isMed
      ? 'p-5 rounded-xl border bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-100 flex items-center justify-between'
      : 'p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-100 flex items-center justify-between';
  }

  if (levelText) levelText.textContent = `${assessment.level} DELAY RISK`;
  if (probText) probText.textContent = `${probPct}%`;
  if (circle) {
    circle.textContent = `${probPct}%`;
    circle.className = `w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm border-4 ${
      isHigh ? 'border-rose-500 bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-200' :
      isMed ? 'border-amber-500 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-200' :
      'border-emerald-500 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-200'
    }`;
  }

  if (driversList) {
    if (assessment.drivers && assessment.drivers.length > 0) {
      driversList.innerHTML = assessment.drivers.slice(0, 3).map(d => `
        <li class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-error shrink-0"></span>
          <span>${d.feature ? d.feature.replace(/_/g, ' ') : d}: High contribution to predicted delay</span>
        </li>
      `).join('');
    } else {
      driversList.innerHTML = `
        <li class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
          <span>Pending disbursement milestone and verification duration.</span>
        </li>
      `;
    }
  }

  if (recText) {
    if (isHigh) {
      recText.textContent = 'High probability of procedural delay detected. Filing a formal grievance with the Special Land Acquisition Officer (SLAO) is strongly recommended to initiate priority verification.';
    } else if (isMed) {
      recText.textContent = 'Moderate delay risk identified. Ensure all 7/12 extracts, mutation records, and bank account proofs are submitted to the competent authority to prevent hold-ups.';
    } else {
      recText.textContent = 'Low delay risk. Acquisition milestones appear on track based on standard statutory processing timelines.';
    }
  }
}

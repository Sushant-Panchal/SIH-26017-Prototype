/**
 * Bhoomi Sakha - Audit Detail View
 * Stitch Project Risk Analysis & Cadastral Audit Detail
 */

import { SAMPLE_PROJECTS, SCENARIO_PRESETS } from '../data/presets.js';
import {
  getRiskLevel,
  getRiskWording,
  getRiskSummary,
  getRiskBadgeClasses,
  getRiskTextColor,
  getRiskLevelLabel,
} from '../utils/risk.js';
import { createReadAloudButton } from '../utils/tts.js';
import { i18n, t } from '../i18n/index.js';

export function renderDetailView(container, projectId = 'BF-NH-2024-09', onNavigateToAssessment) {
  const project = SAMPLE_PROJECTS.find(p => p.id === projectId) || SAMPLE_PROJECTS[0];
  const riskLevel = getRiskLevel(project.delayProbability);
  const riskLabel = getRiskLevelLabel(riskLevel);

  container.innerHTML = `
    <div class="flex flex-col w-full">
      <!-- Contextual Ribbon / Meta Bar -->
      <div class="w-full bg-surface-container-low px-gutter-desktop py-space-sm flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div class="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant flex-wrap">
          <span class="hover:text-on-surface cursor-pointer" id="backToProjectsBreadcrumb">${t('detail.breadcrumbProjects', 'Projects')}</span>
          <span>/</span>
          <span>${project.state}</span>
          <span>/</span>
          <span class="text-on-surface font-semibold font-tabular-data">${project.id}</span>
          <span>/</span>
          <span class="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-semibold">${t('detail.detailedAnalysis', 'Detailed Risk Analysis')}</span>
        </div>
        <div class="flex items-center gap-space-md font-label-sm text-label-sm">
          <span class="inline-flex items-center gap-1.5 text-on-surface-variant">
            <span class="material-symbols-outlined text-[15px] text-secondary">verified_user</span>
            ${t('detail.statutoryHash', 'Statutory Hash')}: <span class="font-tabular-data text-on-surface font-semibold">SHA256-7D88-${project.district.substring(0, 3).toUpperCase()}</span>
          </span>
          <span class="text-outline-variant">•</span>
          <span class="inline-flex items-center gap-1 text-on-surface-variant">
            <span class="material-symbols-outlined text-[15px]">update</span>
            ${t('detail.modelInference', 'Model Inference')}: <span class="font-tabular-data text-on-surface">${t('detail.liveSynchronized', 'Live Synchronized')}</span>
          </span>
        </div>
      </div>

      <!-- Main Administrative Viewport -->
      <div class="w-full px-gutter-desktop py-space-lg flex flex-col gap-space-xl">
        <!-- Project Header Hero Surface -->
        <div class="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col xl:flex-row justify-between items-start xl:items-center gap-space-lg border border-outline-variant/30">
          <div class="flex flex-col gap-space-xs max-w-4xl">
            <div class="flex flex-wrap items-center gap-space-sm">
              <span class="px-space-xs py-0.5 bg-primary text-on-primary font-label-sm text-label-sm rounded font-tabular-data tracking-wider uppercase font-bold">
                ${project.id}
              </span>
              <span class="px-space-xs py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded uppercase font-semibold">
                ${t('detail.nationalCorridor', 'National Corridor')} (${project.sector})
              </span>
              <span class="px-space-xs py-0.5 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded">
                ${t('detail.authorityWing', 'MoRTH / Authority Corridors Wing')}
              </span>
              <span class="px-space-xs py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded flex items-center gap-1">
                <span class="material-symbols-outlined text-[13px]">gavel</span>
                ${t('detail.stage', 'Stage')}: ${project.stage}
              </span>
            </div>
            <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              ${project.name}
            </h1>
            <div class="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                ${t('detail.district', 'District')}: ${project.district}, ${project.state}
              </span>
              <span>•</span>
              <span class="flex items-center gap-1 font-tabular-data">
                <span class="material-symbols-outlined text-[16px]">straighten</span>
                ${t('detail.alignment', 'Alignment')}: Ch. 124+400 to 168+200 (43.8 km)
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">account_balance</span>
                ${t('detail.cala', 'CALA: Competent Authority Land Acquisition')}, ${project.district} ${t('detail.division', 'Division')}
              </span>
            </div>
          </div>

          <!-- Action Panel Buttons -->
          <div class="flex flex-wrap items-center gap-space-sm w-full xl:w-auto shrink-0">
            <div id="detailReadAloudSlot"></div>
            <button class="px-space-md py-2 bg-secondary-container hover:bg-secondary text-on-surface hover:text-on-secondary font-label-md text-label-md rounded transition-colors flex items-center gap-1.5 shadow-sm font-bold" id="detailRerunBtn" type="button">
              <span class="material-symbols-outlined text-[18px]">bolt</span>
              <span>${t('detail.rerunAssessment', 'Re-run Assessment')}</span>
            </button>
            <button class="px-space-md py-2 bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface font-label-md text-label-md rounded transition-colors flex items-center gap-1.5 shadow-sm" id="draftDcOrderBtn" type="button">
              <span class="material-symbols-outlined text-[18px]">history_edu</span>
              <span>${t('detail.draftDcOrder', 'Draft DC Order')}</span>
            </button>
          </div>
        </div>

        <!-- Predictive Executive Risk Dossier Card -->
        <div class="w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-outline-variant/30">
          
          <!-- Severity Anchor Column -->
          <div class="lg:col-span-4 ${
            riskLevel === 'CRITICAL' ? 'bg-error-container/40' :
            riskLevel === 'HIGH' ? 'bg-orange-50 dark:bg-orange-950/40' :
            riskLevel === 'MEDIUM' ? 'bg-amber-50 dark:bg-amber-950/40' : 'bg-emerald-50 dark:bg-emerald-950/40'
          } p-space-xl flex flex-col justify-between relative overflow-hidden">
            <div class="flex flex-col gap-space-md relative z-10">
              <div class="flex items-center justify-between">
                <span class="px-space-xs py-1 rounded ${getRiskBadgeClasses(riskLevel)} font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm border">
                  <span class="w-2 h-2 rounded-full bg-current animate-ping"></span>
                  ${riskLabel} ${t('detail.riskTier', 'Risk Tier')}
                </span>
                <span class="font-tabular-data text-label-sm font-semibold">${t('detail.engineXgb', 'XGB-26017 Engine')}</span>
              </div>
              <div class="flex flex-col pt-space-xs">
                <span class="font-label-md text-label-md uppercase tracking-wide text-on-surface-variant font-semibold">${t('detail.modelDelayProb', 'Model Delay Probability')}</span>
                <div class="flex items-baseline gap-space-xs">
                  <span class="font-headline-xl text-headline-xl font-tabular-data ${getRiskTextColor(riskLevel)} font-extrabold tracking-tight">${project.delayProbability}%</span>
                  <span class="font-headline-sm text-headline-sm font-bold text-on-surface">${t('detail.probability', 'PROBABILITY')}</span>
                </div>
              </div>
              <div class="p-space-sm rounded bg-surface-container-lowest/80 shadow-sm backdrop-blur-sm flex flex-col gap-0.5 border border-outline-variant/30">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${t('detail.predictedStatutoryImpact', 'Predicted Statutory Impact')}</span>
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                  ${getRiskSummary(riskLevel)}
                </span>
              </div>
            </div>
            <div class="pt-space-lg flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant relative z-10">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                ${t('detail.modelConfidence', 'Model Confidence')}: <strong class="font-tabular-data font-semibold">91.4%</strong>
              </span>
              <span class="font-tabular-data text-label-sm">${t('detail.trainedRecords', 'N = 3,000,000 Trained')}</span>
            </div>
          </div>

          <!-- Contextual Field Geographic & Administrative Vector -->
          <div class="lg:col-span-8 p-space-xl flex flex-col justify-between gap-space-lg">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>${t('detail.totalRequisition', 'Total Land Requisition')}</span>
                  <span class="material-symbols-outlined text-[16px]">map</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">184.20 Ha</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">${t('detail.spreadVillages', 'Spread over 14 Revenue Villages')}</span>
              </div>
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>${t('detail.affectedLandowners', 'Affected Landowners')}</span>
                  <span class="material-symbols-outlined text-[16px]">groups</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">1,892 ${t('detail.khatas', 'Khatas')}</span>
                <span class="font-body-sm text-body-sm text-error font-medium">${t('detail.unresolvedMutations', '410 mutations unresolved')}</span>
              </div>
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>${t('detail.sanctionedEscrow', 'Sanctioned Escrow')}</span>
                  <span class="material-symbols-outlined text-[16px]">payments</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">₹62.00 Cr</span>
                <span class="font-body-sm text-body-sm text-secondary font-medium">${t('detail.undisbursedEscrow', '₹29.60 Cr undisbursed')}</span>
              </div>
            </div>

            <!-- Injunction & Field Vector -->
            <div class="flex flex-col gap-space-xs bg-surface-container-low rounded-lg p-space-md border border-outline-variant/30">
              <div class="flex items-center justify-between font-label-sm text-label-sm text-on-surface">
                <span class="font-bold flex items-center gap-1 text-secondary">
                  <span class="material-symbols-outlined text-[16px]">warning</span>
                  ${t('detail.statutoryCutoffLabel', 'Section 19 Statutory Cutoff Timeline:')}
                </span>
                <span class="font-tabular-data font-bold text-error">${t('detail.slippageRisk', '+94 Days Slippage Risk')}</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-error h-full rounded-full" style="width: 78%"></div>
              </div>
              <span class="font-body-sm text-xs text-on-surface-variant">${t('detail.bottleneckFlag', 'Critical path bottleneck flagged in ownership verification and mutation camp clearance.')}</span>
            </div>
          </div>

        </div>

        <!-- Multi-Domain Progress Gauges Bar -->
        <div class="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md border border-outline-variant/30">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
            <div>
              <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">${t('detail.progressGaugesTitle', 'Multi-Domain Acquisition Progress Gauges')}</h2>
              <p class="font-body-sm text-body-sm text-on-surface-variant">${t('detail.progressGaugesSubtitle', 'Cadastral metrics synchronized with state e-Bhoomi records registry')}</p>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data px-space-xs py-1 rounded bg-surface-container font-semibold">
              ${t('detail.cycleAudit', 'Cycle Audit: FY26-Q1-ACTIVE')}
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md pt-space-xs">
            <!-- 1: Overall Progress -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${t('detail.overallProgress', 'Overall Progress')}</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">${project.progressPct}%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-primary h-full rounded-full" style="width: ${project.progressPct}%"></div>
              </div>
            </div>

            <!-- 2: Joint Survey -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${t('detail.jointSurvey', 'Joint Survey 3A')}</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">68%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-secondary-container h-full rounded-full" style="width: 68%"></div>
              </div>
            </div>

            <!-- 3: Award Declaration -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${t('detail.sec23Award', 'Sec 23 Award')}</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">34%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-secondary h-full rounded-full" style="width: 34%"></div>
              </div>
            </div>

            <!-- 4: Physical Possession -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${t('detail.physicalRow', 'Physical ROW')}</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">29%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-outline h-full rounded-full" style="width: 29%"></div>
              </div>
            </div>

            <!-- 5: Escrow DBT -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${t('detail.dbtEscrow', 'DBT Escrow')}</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">52%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-emerald-600 h-full rounded-full" style="width: 52%"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  `;

  const readSlot = container.querySelector('#detailReadAloudSlot');
  if (readSlot) {
    const readBtn = createReadAloudButton(
      () => `${t('detail.dossierFor', 'Project dossier for')} ${project.name}, ${t('projects.colId', 'Project ID')} ${project.id}. ${t('detail.state', 'State')}: ${project.state}, ${t('detail.district', 'District')}: ${project.district}. ${t('detail.statutoryStage', 'Current statutory stage')}: ${project.stage}. ${t('detail.overallProgress', 'Progress')}: ${project.progressPct}%. ${t('detail.modelDelayProb', 'Predicted delay risk')}: ${project.delayProbability}%, ${t('detail.riskTier', 'Risk Tier')}: ${getRiskLevelLabel(riskLevel)}. ${getRiskSummary(riskLevel)}`,
      () => i18n.getLanguage()
    );
    readSlot.appendChild(readBtn);
  }

  const rerunBtn = container.querySelector('#detailRerunBtn');
  if (rerunBtn && onNavigateToAssessment) {
    rerunBtn.addEventListener('click', () => onNavigateToAssessment(project.presetKey || 'medium'));
  }

  const draftDcBtn = container.querySelector('#draftDcOrderBtn');
  if (draftDcBtn) {
    draftDcBtn.addEventListener('click', () => {
      openDraftDcOrderModal(project, riskLevel);
    });
  }

  const breadcrumb = container.querySelector('#backToProjectsBreadcrumb');
  if (breadcrumb) {
    breadcrumb.addEventListener('click', () => {
      window.location.hash = '#/projects';
    });
  }
}

/**
 * Open Prototype Draft DC Order Modal
 * Clearly labels the document as a simulated prototype and not an official legal order.
 */
function openDraftDcOrderModal(project, riskLevel) {
  const preset = SCENARIO_PRESETS[project.presetKey] || SCENARIO_PRESETS.medium;
  const values = preset.values || {};
  const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
  const memoId = `BS-CALA/${project.id}/${new Date().getFullYear()}/PR-DRAFT`;

  const existing = document.getElementById('draftDcOrderModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'draftDcOrderModal';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'draftOrderModalTitle');

  const draftText = `${t('detail.modalPrototypeDraft', 'PROTOTYPE DRAFT ORDER - FOR GOVERNANCE DEMONSTRATION ONLY')}
${t('detail.modalSimulationMode', 'NOT AN OFFICIAL STATUTORY GOVERNMENT ORDER')}

${t('detail.modalOffice', 'OFFICE OF THE DISTRICT COLLECTOR & COMPETENT AUTHORITY (LAND ACQUISITION)')}
${project.district.toUpperCase()} DISTRICT, ${project.state.toUpperCase()}

${t('detail.modalRef', 'Memo Ref')}: ${memoId}
${t('detail.modalDate', 'Date')}: ${today}

SUB: ${t('detail.modalMemoSub', 'Pre-emptive Administrative Acceleration Directive under RFCTLARR Framework')}
REF: ${t('projects.colId', 'Project ID')}: ${project.id} | ${project.name} (${project.sector})
     ${t('detail.statutoryStage', 'Current Statutory Stage')}: ${project.stage} | ${t('detail.overallProgress', 'Current Physical Progress')}: ${project.progressPct}%

${t('detail.modalTeleFindings', '1. TELEMETRY & PREDICTIVE AUDIT FINDINGS:')}
   - ${t('detail.modalTargetArea', 'Total Target Land Area')}: ${values.land_area_hectares || 100} Hectares
   - ${t('detail.modalAffectedFam', 'Total Affected Families')}: ${values.affected_families || 120} Families
   - ${t('detail.modalParcels', 'Total Cadastral Parcels')}: ${values.total_parcels || 200}
   - ${t('detail.modelDelayProb', 'Model Delay Risk Probability')}: ${project.delayProbability}% (${getRiskLevelLabel(riskLevel)})
   - ${t('detail.predictedStatutoryImpact', 'Statutory Impact')}: ${getRiskSummary(riskLevel)}

${t('detail.modalDirectives', '2. ADMINISTRATIVE DIRECTIVES TO COMPETENT AUTHORITIES (CALA):')}
   ${t('detail.modalDirectiveA', 'a) Joint Site Inspection: The Special Land Acquisition Officer (SLAO) and Sub-Divisional Magistrate (SDM) shall initiate immediate expedited joint site inspection for remaining pending parcels.')}
   ${t('detail.modalDirectiveB', 'b) DBT Escrow Acceleration: Direct Benefit Transfer (DBT) reconciliation and compensation award payouts shall be expedited within a 14-day statutory timeline to prevent critical milestone slippage.')}
   ${t('detail.modalDirectiveC', 'c) Lok Adalat Conciliation: Outstanding objections and title verification issues must be scheduled for expedited hearing during the upcoming weekly revenue Lok Adalat.')}

DISCLAIMER:
${t('detail.modalDisclaimer', 'This document is a prototype draft generated automatically for governance simulation and review by the Bhoomi Sakha Early Delay Warning System. It does NOT constitute an official legal or statutory order unless vetted, approved, and officially signed by the District Collector and gazetted under the relevant state and central legislation.')}`;

  modal.innerHTML = `
    <div class="relative w-full max-w-3xl bg-surface-container-lowest text-on-surface rounded-xl shadow-2xl border border-outline-variant/40 overflow-hidden my-8 max-h-[90vh] flex flex-col">
      <!-- Modal Header -->
      <div class="p-space-lg bg-surface-container-low border-b border-outline-variant/30 flex items-start justify-between gap-space-md shrink-0">
        <div>
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 uppercase tracking-wider">
              ${t('detail.modalPrototypeDraft', 'Prototype Draft')}
            </span>
            <span class="text-xs text-on-surface-variant font-medium">${t('detail.modalSimulationMode', 'Simulation Mode • Not Legally Enforceable')}</span>
          </div>
          <h3 id="draftOrderModalTitle" class="font-headline-sm text-headline-sm font-bold text-on-surface">
            ${t('detail.modalTitle', 'Draft DC Order / Administrative Directive')}
          </h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">
            ${t('detail.modalSubtitle', 'Pre-populated prototype administrative memo based on real-time project risk telemetry.')}
          </p>
        </div>
        <button id="closeDraftModalBtn" type="button" class="p-2 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors focus:ring-2 focus:ring-primary" aria-label="${t('detail.modalClose', 'Close modal')}">
          <span class="material-symbols-outlined text-xl">close</span>
        </button>
      </div>

      <!-- Modal Body (Printable Paper Look) -->
      <div class="p-space-lg overflow-y-auto space-y-space-md text-sm font-body">
        
        <!-- Official Watermark / Header Box -->
        <div class="p-4 rounded-lg bg-surface-container-low/70 border border-outline-variant/20 flex flex-col items-center text-center">
          <span class="material-symbols-outlined text-3xl text-primary mb-1">account_balance</span>
          <div class="font-bold text-base tracking-wide uppercase">${t('detail.modalOffice', 'Office of the District Collector & District Magistrate')}</div>
          <div class="text-xs text-on-surface-variant uppercase font-semibold">${t('detail.modalCala', 'Competent Authority Land Acquisition (CALA)')} • ${project.district}, ${project.state}</div>
          <div class="text-xs font-tabular-data text-on-surface-variant mt-1">${t('detail.modalRef', 'Ref')}: <span class="font-semibold text-on-surface">${memoId}</span> • ${t('detail.modalDate', 'Date')}: <span class="font-semibold text-on-surface">${today}</span></div>
        </div>

        <!-- Telemetry Summary Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">${t('projects.colId', 'Project ID')}</span>
            <span class="font-bold font-tabular-data text-on-surface">${project.id}</span>
          </div>
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">${t('detail.stage', 'Stage')}</span>
            <span class="font-bold text-on-surface truncate block">${project.stage}</span>
          </div>
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">${t('detail.modalAreaFamilies', 'Area / Families')}</span>
            <span class="font-bold font-tabular-data text-on-surface">${values.land_area_hectares || '—'} Ha / ${values.affected_families || '—'} Fam</span>
          </div>
          <div class="p-2.5 rounded ${riskLevel === 'CRITICAL' ? 'bg-red-500/10 border-red-500/30' : riskLevel === 'HIGH' ? 'bg-orange-500/10 border-orange-500/30' : 'bg-amber-500/10 border-amber-500/30'} border">
            <span class="text-on-surface-variant block uppercase font-medium">${t('detail.predictedRisk', 'Predicted Risk')}</span>
            <span class="font-bold font-tabular-data ${getRiskTextColor(riskLevel)}">${project.delayProbability}% (${getRiskLevelLabel(riskLevel)})</span>
          </div>
        </div>

        <!-- Draft Order Content -->
        <div class="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30 space-y-3 font-mono text-xs leading-relaxed text-on-surface/90 select-text whitespace-pre-wrap">${draftText}</div>

        <!-- Warning Callout -->
        <div class="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs flex items-start gap-2.5">
          <span class="material-symbols-outlined text-lg shrink-0 mt-0.5 text-amber-600 dark:text-amber-400">gavel</span>
          <div>
            <strong>${t('detail.modalPrototypeDraft', 'Prototype Disclaimer')}:</strong> ${t('detail.modalDisclaimer', 'This draft memo is generated for governance evaluation within the Bhoomi Sakha prototype. It does not replace statutory procedures under the RFCTLARR Act 2013 or respective State Land Acquisition rules and carries no legal authority without official executive signature.')}
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-space-md bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between gap-space-sm shrink-0 flex-wrap">
        <button id="copyDraftBtn" type="button" class="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5 focus:ring-2 focus:ring-primary">
          <span class="material-symbols-outlined text-[18px]">content_copy</span>
          <span id="copyDraftLabel">${t('detail.modalCopyDraft', 'Copy Draft Text')}</span>
        </button>
        <div class="flex items-center gap-2">
          <button id="printDraftBtn" type="button" class="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5 focus:ring-2 focus:ring-primary">
            <span class="material-symbols-outlined text-[18px]">print</span>
            <span>${t('detail.modalPrint', 'Print / Save')}</span>
          </button>
          <button id="closeDraftModalFooterBtn" type="button" class="px-4 py-2 rounded-lg bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface font-label-md text-label-md transition-colors focus:ring-2 focus:ring-primary font-medium">
            ${t('detail.modalClose', 'Close')}
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const cleanup = () => {
    document.removeEventListener('keydown', handleKeydown);
    modal.remove();
    const trigger = document.getElementById('draftDcOrderBtn');
    if (trigger) trigger.focus();
  };

  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      cleanup();
    }
  };

  document.addEventListener('keydown', handleKeydown);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) cleanup();
  });

  modal.querySelector('#closeDraftModalBtn')?.addEventListener('click', cleanup);
  modal.querySelector('#closeDraftModalFooterBtn')?.addEventListener('click', cleanup);

  modal.querySelector('#copyDraftBtn')?.addEventListener('click', () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(draftText).then(() => {
        const label = modal.querySelector('#copyDraftLabel');
        if (label) {
          label.textContent = t('detail.modalCopied', 'Copied to Clipboard!');
          setTimeout(() => { label.textContent = t('detail.modalCopyDraft', 'Copy Draft Text'); }, 2000);
        }
      }).catch(() => {
        alert(t('detail.modalCopied', 'Copied to Clipboard!'));
      });
    }
  });

  modal.querySelector('#printDraftBtn')?.addEventListener('click', () => {
    window.print();
  });

  modal.querySelector('#closeDraftModalBtn')?.focus();
}

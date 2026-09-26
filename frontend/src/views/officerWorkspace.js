/**
 * Bhoomi Sakha - Officer Case Workspace View
 * Command Center workspace for officers to examine grievance dossiers,
 * inspect AI risk analysis, verify citizen-submitted documents, assign cases,
 * update case lifecycle statuses, and maintain the append-only audit trail.
 */

import { caseService } from '../api/cases.js';
import { authService } from '../api/auth.js';
import { t } from '../i18n/index.js';
import { attachInfoTooltips } from '../utils/infoModal.js';
import { renderAuthGateway } from '../components/authModal.js';

const VALID_STATUS_TRANSITIONS = {
  submitted: ['received', 'assigned', 'under_review', 'rejected'],
  received: ['assigned', 'under_review', 'rejected'],
  assigned: ['under_review', 'documents_required', 'investigation'],
  under_review: ['documents_required', 'investigation', 'action_taken', 'escalated', 'resolved', 'rejected'],
  documents_required: ['under_review', 'investigation'],
  investigation: ['action_taken', 'escalated', 'under_review', 'resolved'],
  action_taken: ['resolved', 'investigation', 'escalated'],
  escalated: ['investigation', 'action_taken', 'resolved'],
  resolved: ['closed', 'investigation'],
  rejected: ['under_review'],
  closed: [],
};

export async function renderOfficerWorkspaceView(container) {
  const hash = window.location.hash;
  const queryString = hash.includes('?') ? hash.split('?')[1] : '';
  const urlParams = new URLSearchParams(queryString);
  const caseId = urlParams.get('id');

  const officer = authService.getStoredUser();
  if (!officer || (officer.role !== 'officer' && officer.role !== 'super_admin')) {
    renderAuthGateway(container, {
      role: 'officer',
      title: t('auth.officerWorkspaceGatewayTitle', 'Revenue Officer Sign In Required'),
      message: t('auth.officerWorkspaceGatewayMsg', 'Official authorization is required to access confidential dossiers, verify documents, and issue statutory case determinations.'),
      onLoginSuccess: () => renderOfficerWorkspaceView(container),
    });
    return;
  }

  if (!caseId) {
    container.innerHTML = `
      <div class="max-w-4xl mx-auto py-12 px-4 text-center">
        <div class="inline-flex p-3 bg-error/10 text-error rounded-full mb-3">
          <span class="material-symbols-outlined text-[32px]">warning</span>
        </div>
        <h2 class="text-xl font-bold text-on-surface">No Case ID Specified</h2>
        <p class="text-xs text-on-surface-variant mt-1 mb-4">Please select a case from the officer case queue.</p>
        <a href="#/cases" class="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-semibold inline-flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to Case Queue</span>
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="max-w-7xl mx-auto pb-16 animate-fade-in space-y-6">
      <div class="flex items-center justify-between text-xs text-on-surface-variant font-label-sm">
        <a href="#/cases" class="hover:text-primary transition-colors flex items-center gap-1">
          <span class="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to Case Queue</span>
        </a>
        <span class="font-tabular-data">Officer: <strong class="text-on-surface">${officer.name || officer.user_id}</strong> (${officer.role})</span>
      </div>

      <div id="workspaceContent" class="space-y-6">
        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-8 text-center text-on-surface-variant">
          <span class="material-symbols-outlined animate-spin text-[32px] text-primary mb-2">progress_activity</span>
          <p class="text-sm font-medium">Loading case dossier and audit history for ${caseId}...</p>
        </div>
      </div>

      <!-- Action Modals Container -->
      <div id="workspaceModalContainer"></div>
    </div>
  `;

  await loadAndRenderWorkspace(caseId, officer, container);
}

async function loadAndRenderWorkspace(caseId, officer, container) {
  const contentEl = container.querySelector('#workspaceContent');
  const modalContainer = container.querySelector('#workspaceModalContainer');

  try {
    const [caseData, events, documents] = await Promise.all([
      caseService.getCase(caseId),
      caseService.getCaseEvents(caseId),
      caseService.getCaseDocuments(caseId).catch(() => []),
    ]);

    let landData = null;
    if (caseData.land_id) {
      try {
        landData = await caseService.getLand(caseData.land_id);
      } catch (e) {
        console.warn('Could not load land data:', e);
      }
    }

    let citizenData = null;
    if (caseData.citizen_id) {
      try {
        citizenData = await caseService.getUser(caseData.citizen_id);
      } catch (e) {
        console.warn('Could not load citizen data:', e);
      }
    }

    const statusBadge = (s) => {
      const styles = {
        submitted: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border-blue-300 dark:border-blue-700',
        received: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200 border-sky-300 dark:border-sky-700',
        assigned: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700',
        under_review: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 border-purple-300 dark:border-purple-700',
        documents_required: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 border-amber-300 dark:border-amber-700',
        investigation: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200 border-orange-300 dark:border-orange-700',
        action_taken: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200 border-teal-300 dark:border-teal-700',
        escalated: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200 border-rose-300 dark:border-rose-700',
        resolved: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700',
        closed: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600',
        rejected: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border-red-300 dark:border-red-700',
      };
      return `<span class="px-2.5 py-1 text-xs font-bold rounded-md border ${styles[s] || styles.submitted}">${s.replace(/_/g, ' ').toUpperCase()}</span>`;
    };

    const riskBadge = (prob, lvl) => {
      const p = Math.round((prob || 0) * 100);
      const isHigh = lvl === 'HIGH' || p >= 65;
      const isMed = lvl === 'MEDIUM' || (p >= 35 && p < 65);
      const cls = isHigh
        ? 'bg-error/15 text-error border-error/30'
        : isMed
        ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30'
        : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30';
      return `<span class="px-2.5 py-1 text-xs font-bold font-tabular-data rounded-md border ${cls}">${p}% DELAY RISK (${lvl || 'NORMAL'})</span>`;
    };

    const allowedNextStatuses = VALID_STATUS_TRANSITIONS[caseData.status] || [];

    contentEl.innerHTML = `
      <!-- Case Dossier Header -->
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 shadow-sm space-y-4">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1.5">
              <span class="text-xs font-bold font-tabular-data px-2 py-0.5 rounded bg-surface-container text-on-surface">
                ${caseData.case_id}
              </span>
              ${statusBadge(caseData.status)}
              ${riskBadge(caseData.risk_probability, caseData.risk_level)}
            </div>
            <h1 class="text-2xl font-bold font-headline-md text-on-surface">
              ${caseData.category.replace(/_/g, ' ').toUpperCase()}
            </h1>
            <p class="text-xs text-on-surface-variant mt-1 flex flex-wrap items-center gap-3">
              <span>Filed: <strong class="text-on-surface font-tabular-data">${new Date(caseData.created_at).toLocaleString()}</strong></span>
              <span>•</span>
              <span>Assigned Officer: <strong class="text-on-surface">${caseData.assigned_officer_id || '<span class="text-amber-600 italic">Unassigned</span>'}</strong></span>
              <span>•</span>
              <span>Project: <strong class="text-on-surface">${caseData.project_id || 'General Acquisition'}</strong></span>
            </p>
          </div>

          <!-- Officer Quick Actions Bar -->
          <div class="flex flex-wrap items-center gap-2">
            <button id="btnOpenStatusModal" class="px-3 py-2 bg-primary text-on-primary rounded-lg text-xs font-semibold hover:opacity-95 shadow-xs flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">sync_alt</span>
              <span>Update Status</span>
            </button>

            <button id="btnOpenAssignModal" class="px-3 py-2 bg-surface-container border border-outline-variant/60 rounded-lg text-xs font-semibold text-on-surface hover:bg-surface-container-high flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">person_add</span>
              <span>Assign / Reassign</span>
            </button>

            <button id="btnOpenDocRequestModal" class="px-3 py-2 bg-surface-container border border-outline-variant/60 rounded-lg text-xs font-semibold text-on-surface hover:bg-surface-container-high flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">post_add</span>
              <span>Request Document</span>
            </button>

            <button id="btnOpenInternalNoteModal" class="px-3 py-2 bg-surface-container border border-outline-variant/60 rounded-lg text-xs font-semibold text-on-surface hover:bg-surface-container-high flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">lock</span>
              <span>Add Internal Note</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Main Workspace 3-Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

        <!-- Column 1: Citizen Profile, Land Cadastre, & AI Prediction (4 cols) -->
        <div class="lg:col-span-4 space-y-6">

          <!-- Citizen Profile Card -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
            <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
              <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary">person</span>
                <span>Complainant Details</span>
              </h2>
              <span class="text-[11px] font-tabular-data text-on-surface-variant">${caseData.citizen_id}</span>
            </div>
            <div class="text-xs space-y-2">
              <div class="flex justify-between">
                <span class="text-on-surface-variant">Name:</span>
                <span class="font-semibold text-on-surface">${citizenData ? citizenData.name : 'Citizen User'}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-on-surface-variant">Phone / Mobile:</span>
                <span class="font-tabular-data text-on-surface">${citizenData ? citizenData.phone : 'Not provided'}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-on-surface-variant">Email Address:</span>
                <span class="text-on-surface">${citizenData ? citizenData.email : 'N/A'}</span>
              </div>
            </div>
          </div>

          <!-- Land Cadastral Information Card -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
            <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
              <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary">terrain</span>
                <span>Cadastral Land Parcel</span>
              </h2>
              <span class="text-[11px] font-tabular-data text-on-surface-variant">${caseData.land_id}</span>
            </div>
            ${landData ? `
              <div class="text-xs space-y-2">
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Survey / Gat No:</span>
                  <span class="font-bold text-on-surface font-tabular-data">${landData.survey_number}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Location:</span>
                  <span class="text-on-surface font-medium">${landData.village}, ${landData.taluka}, ${landData.district}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Land Area:</span>
                  <span class="font-tabular-data text-on-surface">${landData.area_acres} Acres (${landData.land_type || 'Agricultural'})</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Acquisition Status:</span>
                  <span class="font-semibold text-primary">${landData.acquisition_status || 'Notification Issued'}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Declared by Citizen:</span>
                  <span class="font-tabular-data text-on-surface-variant">${landData.citizen_declared_dispute ? '<span class="text-error font-semibold">Active Dispute Noted</span>' : 'Clear Ownership'}</span>
                </div>
              </div>
            ` : `
              <p class="text-xs text-on-surface-variant italic">Cadastral land parcel record linked directly via ${caseData.land_id}.</p>
            `}
          </div>

          <!-- AI ML Risk Assessment Card -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
            <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
              <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary">psychology</span>
                <span>AI Delay Risk Intelligence</span>
              </h2>
              <span class="text-[10px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded">XGBoost ML</span>
            </div>

            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="font-medium text-on-surface-variant">Estimated Delay Likelihood</span>
                  <span class="font-bold font-tabular-data text-on-surface">${Math.round((caseData.risk_probability || 0) * 100)}%</span>
                </div>
                <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <div class="h-full ${
                    (caseData.risk_probability || 0) >= 0.65 ? 'bg-error' : (caseData.risk_probability || 0) >= 0.35 ? 'bg-amber-500' : 'bg-emerald-500'
                  }" style="width: ${Math.round((caseData.risk_probability || 0) * 100)}%"></div>
                </div>
              </div>

              <div class="bg-surface-container-lowest p-2.5 rounded-lg border border-outline-variant/30 text-xs">
                <span class="text-[11px] font-bold text-on-surface-variant block mb-1">Impact Factors:</span>
                <ul class="space-y-1 text-on-surface text-[11px]">
                  <li class="flex items-center gap-1 text-error">
                    <span class="material-symbols-outlined text-[13px]">arrow_upward</span>
                    <span>Grievance Category: ${caseData.category.replace(/_/g, ' ')}</span>
                  </li>
                  <li class="flex items-center gap-1 text-amber-600">
                    <span class="material-symbols-outlined text-[13px]">schedule</span>
                    <span>Pending Verification Stage</span>
                  </li>
                </ul>
              </div>

              <p class="text-[10px] text-on-surface-variant/80 italic leading-relaxed">
                Predictive estimate based on historical acquisition bottleneck benchmarks. Does not constitute a statutory determination.
              </p>
            </div>
          </div>

        </div>

        <!-- Column 2: Grievance Dossier & Document Verification Center (5 cols) -->
        <div class="lg:col-span-5 space-y-6">

          <!-- Grievance Dossier -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 shadow-sm space-y-3">
            <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 border-b border-outline-variant/30 pb-2">
              <span class="material-symbols-outlined text-[16px] text-primary">description</span>
              <span>Grievance Description & Demands</span>
            </h2>

            <div class="text-xs text-on-surface leading-relaxed bg-surface-container-lowest p-3.5 rounded-lg border border-outline-variant/30">
              ${caseData.description || 'No detailed narrative provided.'}
            </div>

            <div class="grid grid-cols-2 gap-2 text-xs pt-1">
              <div class="p-2 bg-surface-container rounded-lg">
                <span class="text-[10px] text-on-surface-variant uppercase block">Category</span>
                <span class="font-semibold text-on-surface">${caseData.category.replace(/_/g, ' ').toUpperCase()}</span>
              </div>
              <div class="p-2 bg-surface-container rounded-lg">
                <span class="text-[10px] text-on-surface-variant uppercase block">Target SLA</span>
                <span class="font-semibold text-on-surface">15 Working Days</span>
              </div>
            </div>
          </div>

          <!-- Document Verification Center (Phase 13) -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 shadow-sm space-y-4">
            <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
              <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary">folder_shared</span>
                <span>Document Verification Center</span>
              </h2>
              <span class="text-xs font-bold font-tabular-data text-on-surface">${documents.length} File(s)</span>
            </div>

            ${documents.length === 0 ? `
              <div class="py-6 text-center text-on-surface-variant text-xs italic bg-surface-container-lowest rounded-lg border border-dashed border-outline-variant/40">
                <span class="material-symbols-outlined text-[24px] text-on-surface-variant/60 block mb-1">attachment</span>
                <span>No supporting documents uploaded yet.</span>
                <div class="mt-2">
                  <button id="btnEmptyDocRequest" class="text-primary hover:underline font-semibold">Request documents from citizen</button>
                </div>
              </div>
            ` : `
              <div class="space-y-3">
                ${documents.map(doc => {
                  const isVerified = doc.verification_status === 'verified';
                  const isRejected = doc.verification_status === 'rejected';
                  const isPending = !isVerified && !isRejected;

                  return `
                    <div class="bg-surface-container-lowest p-3.5 rounded-lg border border-outline-variant/40 text-xs space-y-2.5">
                      <div class="flex items-start justify-between gap-2">
                        <div>
                          <div class="font-bold text-on-surface flex items-center gap-1.5">
                            <span class="material-symbols-outlined text-[16px] text-primary">draft</span>
                            <span>${doc.file_name}</span>
                          </div>
                          <div class="text-[11px] text-on-surface-variant mt-0.5">
                            Type: <strong class="text-on-surface">${doc.document_type.replace(/_/g, ' ').toUpperCase()}</strong> • Ref: <span class="font-tabular-data">${doc.storage_reference}</span>
                          </div>
                        </div>

                        <div>
                          ${isVerified ? `
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 border border-emerald-300">
                              ✓ VERIFIED
                            </span>
                          ` : isRejected ? `
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border border-red-300">
                              ✕ REJECTED
                            </span>
                          ` : `
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 border border-amber-300">
                              PENDING REVIEW
                            </span>
                          `}
                        </div>
                      </div>

                      ${doc.rejection_reason ? `
                        <div class="text-[11px] text-error bg-error/10 p-2 rounded border border-error/20">
                          Rejection Reason: ${doc.rejection_reason}
                        </div>
                      ` : ''}

                      <div class="flex items-center justify-end gap-2 pt-1 border-t border-outline-variant/20">
                        <a href="${caseService.getDocumentDownloadUrl(caseData.case_id, doc.document_id)}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high border border-outline-variant/50 text-on-surface rounded text-[11px] font-semibold flex items-center gap-1 transition-colors">
                          <span class="material-symbols-outlined text-[13px]">open_in_new</span>
                          <span>Open Document</span>
                        </a>
                        ${isPending ? `
                          <button data-doc-id="${doc.document_id}" class="btnVerifyDoc px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-bold flex items-center gap-1 transition-colors">
                            <span class="material-symbols-outlined text-[13px]">check</span>
                            <span>Verify Document</span>
                          </button>
                          <button data-doc-id="${doc.document_id}" class="btnRejectDoc px-2.5 py-1 bg-error hover:opacity-90 text-white rounded text-[11px] font-bold flex items-center gap-1 transition-colors">
                            <span class="material-symbols-outlined text-[13px]">close</span>
                            <span>Reject with Reason</span>
                          </button>
                        ` : ''}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>

        </div>

        <!-- Column 3: Audit Trail & Internal Investigation Notes (3 cols) -->
        <div class="lg:col-span-3 space-y-6">

          <!-- Internal Note Form -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
            <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 border-b border-outline-variant/30 pb-2">
              <span class="material-symbols-outlined text-[16px] text-primary">lock</span>
              <span>Confidential Internal Note</span>
            </h2>
            <p class="text-[11px] text-on-surface-variant">
              Internal notes are recorded strictly in the officer audit log and are <strong>never</strong> visible to citizens.
            </p>
            <form id="internalNoteForm" class="space-y-2">
              <textarea id="internalNoteText" rows="3" required placeholder="Record field inspection notes, legal counsel inputs, or verification status..." class="w-full text-xs p-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              <button type="submit" class="w-full py-2 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/60 rounded-lg text-xs font-semibold text-on-surface flex items-center justify-center gap-1.5">
                <span class="material-symbols-outlined text-[14px]">save</span>
                <span>Save Note</span>
              </button>
            </form>
          </div>

          <!-- Complete Audit Trail (Phase 11) -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
            <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
              <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary">history</span>
                <span>Audit Trail (${events.length})</span>
              </h2>
            </div>

            <div class="relative pl-4 space-y-4 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/40 text-xs">
              ${events.map(ev => {
                const isInternal = ev.is_internal === true;
                return `
                  <div class="relative group">
                    <span class="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full ${isInternal ? 'bg-amber-500' : 'bg-primary'} border-2 border-surface"></span>
                    <div class="${isInternal ? 'bg-amber-500/10 border-amber-500/30' : 'bg-surface-container-lowest border-outline-variant/30'} p-2.5 rounded-lg border">
                      <div class="flex items-center justify-between gap-1 text-[10px]">
                        <span class="font-bold uppercase tracking-wider ${isInternal ? 'text-amber-700 dark:text-amber-300' : 'text-primary'}">
                          ${isInternal ? '🔒 ' : ''}${ev.action.replace(/_/g, ' ')}
                        </span>
                        <span class="font-tabular-data text-on-surface-variant">${new Date(ev.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      ${ev.comment ? `<p class="text-on-surface text-[11px] mt-1 font-medium leading-relaxed">${ev.comment}</p>` : ''}
                      <div class="text-[9px] text-on-surface-variant/80 mt-1 flex justify-between">
                        <span>Actor: ${ev.actor_user_id}</span>
                        <span>${new Date(ev.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

        </div>

      </div>
    `;

    // Wire Document Verification Buttons
    contentEl.querySelectorAll('.btnVerifyDoc').forEach(btn => {
      btn.addEventListener('click', async () => {
        const docId = btn.dataset.docId;
        btn.disabled = true;
        btn.innerHTML = '<span class="material-symbols-outlined text-[13px] animate-spin">progress_activity</span> Verifying...';
        try {
          await caseService.verifyDocument(caseId, docId, {
            actor_user_id: officer.user_id,
            verification_status: 'verified',
          });
          await loadAndRenderWorkspace(caseId, officer, container);
        } catch (err) {
          alert('Verification failed: ' + err.message);
          btn.disabled = false;
          btn.innerHTML = '<span class="material-symbols-outlined text-[13px]">check</span> Verify Document';
        }
      });
    });

    contentEl.querySelectorAll('.btnRejectDoc').forEach(btn => {
      btn.addEventListener('click', () => {
        const docId = btn.dataset.docId;
        openRejectModal(caseId, docId, officer, modalContainer, () => loadAndRenderWorkspace(caseId, officer, container));
      });
    });

    // Wire Quick Action Modal Buttons
    const openStatusBtn = contentEl.querySelector('#btnOpenStatusModal');
    if (openStatusBtn) {
      openStatusBtn.addEventListener('click', () => {
        openStatusModal(caseData, officer, allowedNextStatuses, modalContainer, () => loadAndRenderWorkspace(caseId, officer, container));
      });
    }

    const openAssignBtn = contentEl.querySelector('#btnOpenAssignModal');
    if (openAssignBtn) {
      openAssignBtn.addEventListener('click', () => {
        openAssignModal(caseData, officer, modalContainer, () => loadAndRenderWorkspace(caseId, officer, container));
      });
    }

    const openDocRequestBtn = contentEl.querySelector('#btnOpenDocRequestModal');
    const emptyDocRequestBtn = contentEl.querySelector('#btnEmptyDocRequest');
    const handleDocRequest = () => {
      openDocRequestModal(caseData, officer, modalContainer, () => loadAndRenderWorkspace(caseId, officer, container));
    };
    if (openDocRequestBtn) openDocRequestBtn.addEventListener('click', handleDocRequest);
    if (emptyDocRequestBtn) emptyDocRequestBtn.addEventListener('click', handleDocRequest);

    const openInternalNoteBtn = contentEl.querySelector('#btnOpenInternalNoteModal');
    if (openInternalNoteBtn) {
      openInternalNoteBtn.addEventListener('click', () => {
        const input = contentEl.querySelector('#internalNoteText');
        if (input) {
          input.focus();
          input.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Wire Internal Note Form
    const internalNoteForm = contentEl.querySelector('#internalNoteForm');
    if (internalNoteForm) {
      internalNoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = contentEl.querySelector('#internalNoteText').value.trim();
        if (!text) return;

        const submitBtn = internalNoteForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        try {
          await caseService.createCaseEvent(caseId, {
            actor_user_id: officer.user_id,
            action: 'officer_note_added',
            comment: text,
            is_internal: true,
          });
          await loadAndRenderWorkspace(caseId, officer, container);
        } catch (err) {
          alert('Failed to save internal note: ' + err.message);
          submitBtn.disabled = false;
        }
      });
    }

    attachInfoTooltips(container);

  } catch (err) {
    contentEl.innerHTML = `
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-8 text-center text-error space-y-3">
        <span class="material-symbols-outlined text-[32px]">error</span>
        <h2 class="text-base font-bold">Failed to Load Case Dossier</h2>
        <p class="text-xs text-on-surface-variant">${err.message}</p>
        <button id="btnRetryWorkspace" class="px-3 py-1.5 bg-primary text-on-primary rounded text-xs font-semibold">
          Retry
        </button>
      </div>
    `;
    const retryBtn = contentEl.querySelector('#btnRetryWorkspace');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => loadAndRenderWorkspace(caseId, officer, container));
    }
  }
}

// ============================================================
// MODALS
// ============================================================

function openStatusModal(caseData, officer, allowedStatuses, container, onComplete) {
  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface border border-outline-variant rounded-xl p-6 max-w-md w-full shadow-lg space-y-4">
        <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
          <h3 class="text-sm font-bold text-on-surface flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary">sync_alt</span>
            <span>Update Case Lifecycle Status</span>
          </h3>
          <button id="closeModalBtn" class="text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="statusUpdateForm" class="space-y-3.5 text-xs">
          <div>
            <label class="block font-semibold text-on-surface mb-1">Current Status</label>
            <input type="text" disabled value="${caseData.status.toUpperCase()}" class="w-full px-3 py-2 bg-surface-container rounded-lg font-bold text-on-surface-variant" />
          </div>

          <div>
            <label class="block font-semibold text-on-surface mb-1">Target Next Status *</label>
            ${allowedStatuses.length === 0 ? `
              <p class="text-xs text-on-surface-variant italic">This case is in a terminal status (${caseData.status}). No transitions available.</p>
            ` : `
              <select id="targetStatusSelect" required class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                ${allowedStatuses.map(s => `
                  <option value="${s}">${s.replace(/_/g, ' ').toUpperCase()}</option>
                `).join('')}
              </select>
            `}
          </div>

          <div>
            <label class="block font-semibold text-on-surface mb-1">Status Change Comment / Official Note *</label>
            <textarea id="statusCommentText" rows="3" required placeholder="Explain reason for transition, statutory findings, or field decisions..." class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button type="button" id="cancelModalBtn" class="px-3 py-1.5 border border-outline-variant/60 rounded-lg text-on-surface hover:bg-surface-container">
              Cancel
            </button>
            ${allowedStatuses.length > 0 ? `
              <button type="submit" id="submitStatusBtn" class="px-4 py-1.5 bg-primary text-on-primary font-semibold rounded-lg hover:opacity-95">
                Apply Transition
              </button>
            ` : ''}
          </div>
        </form>
      </div>
    </div>
  `;

  const close = () => { container.innerHTML = ''; };
  container.querySelector('#closeModalBtn').addEventListener('click', close);
  container.querySelector('#cancelModalBtn').addEventListener('click', close);

  const form = container.querySelector('#statusUpdateForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const newStatus = container.querySelector('#targetStatusSelect').value;
      const comment = container.querySelector('#statusCommentText').value.trim();

      const btn = container.querySelector('#submitStatusBtn');
      btn.disabled = true;
      btn.textContent = 'Applying...';

      try {
        await caseService.updateCaseStatus(caseData.case_id, {
          actor_user_id: officer.user_id,
          status: newStatus,
          comment: comment,
        });
        close();
        onComplete();
      } catch (err) {
        alert('Status update failed: ' + err.message);
        btn.disabled = false;
        btn.textContent = 'Apply Transition';
      }
    });
  }
}

function openAssignModal(caseData, officer, container, onComplete) {
  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface border border-outline-variant rounded-xl p-6 max-w-md w-full shadow-lg space-y-4">
        <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
          <h3 class="text-sm font-bold text-on-surface flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary">person_add</span>
            <span>Assign Officer to Dossier</span>
          </h3>
          <button id="closeModalBtn" class="text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="assignForm" class="space-y-3.5 text-xs">
          <div>
            <label class="block font-semibold text-on-surface mb-1">Target Officer ID *</label>
            <input type="text" id="targetOfficerId" required value="${caseData.assigned_officer_id || officer.user_id}" placeholder="e.g. USR-..." class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-tabular-data" />
          </div>

          <div>
            <label class="block font-semibold text-on-surface mb-1">Assignment Directive / Note</label>
            <textarea id="assignComment" rows="3" placeholder="Specify investigation priority, relevant acquisition survey, or deadline..." class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button type="button" id="cancelModalBtn" class="px-3 py-1.5 border border-outline-variant/60 rounded-lg text-on-surface hover:bg-surface-container">
              Cancel
            </button>
            <button type="submit" id="submitAssignBtn" class="px-4 py-1.5 bg-primary text-on-primary font-semibold rounded-lg hover:opacity-95">
              Confirm Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  const close = () => { container.innerHTML = ''; };
  container.querySelector('#closeModalBtn').addEventListener('click', close);
  container.querySelector('#cancelModalBtn').addEventListener('click', close);

  const form = container.querySelector('#assignForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const assignedId = container.querySelector('#targetOfficerId').value.trim();
    const comment = container.querySelector('#assignComment').value.trim();

    const btn = container.querySelector('#submitAssignBtn');
    btn.disabled = true;
    btn.textContent = 'Assigning...';

    try {
      await caseService.assignCase(caseData.case_id, {
        actor_user_id: officer.user_id,
        assigned_officer_id: assignedId,
        comment: comment || `Assigned to ${assignedId}`,
      });
      close();
      onComplete();
    } catch (err) {
      alert('Assignment failed: ' + err.message);
      btn.disabled = false;
      btn.textContent = 'Confirm Assignment';
    }
  });
}

function openDocRequestModal(caseData, officer, container, onComplete) {
  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface border border-outline-variant rounded-xl p-6 max-w-md w-full shadow-lg space-y-4">
        <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
          <h3 class="text-sm font-bold text-on-surface flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary">post_add</span>
            <span>Request Supporting Document</span>
          </h3>
          <button id="closeModalBtn" class="text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="docRequestForm" class="space-y-3.5 text-xs">
          <div>
            <label class="block font-semibold text-on-surface mb-1">Document Type *</label>
            <select id="reqDocType" required class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="7_12_extract">7/12 RoR Extract</option>
              <option value="mutation_entry">Mutation Entry (Ferfar / 6D)</option>
              <option value="bank_passbook">Bank Passbook / Cancelled Cheque</option>
              <option value="aadhaar_copy">Identity Proof (Aadhaar / Voter ID)</option>
              <option value="sale_deed">Registered Sale / Partition Deed</option>
              <option value="joint_measurement_sheet">Joint Measurement Sheet (JMR)</option>
              <option value="valuation_certificate">Valuation Certificate</option>
              <option value="other">Other Official Document</option>
            </select>
          </div>

          <div>
            <label class="block font-semibold text-on-surface mb-1">Official Reason for Request *</label>
            <input type="text" id="reqReason" required placeholder="e.g. Discrepancy in parcel boundary vs Section 19 notification" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <div>
            <label class="block font-semibold text-on-surface mb-1">Message to Citizen (Optional)</label>
            <textarea id="reqMessage" rows="2" placeholder="Please upload clear scanned PDF showing official revenue stamp..." class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button type="button" id="cancelModalBtn" class="px-3 py-1.5 border border-outline-variant/60 rounded-lg text-on-surface hover:bg-surface-container">
              Cancel
            </button>
            <button type="submit" id="submitDocReqBtn" class="px-4 py-1.5 bg-primary text-on-primary font-semibold rounded-lg hover:opacity-95">
              Send Request to Citizen
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  const close = () => { container.innerHTML = ''; };
  container.querySelector('#closeModalBtn').addEventListener('click', close);
  container.querySelector('#cancelModalBtn').addEventListener('click', close);

  const form = container.querySelector('#docRequestForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const docType = container.querySelector('#reqDocType').value;
    const reason = container.querySelector('#reqReason').value.trim();
    const message = container.querySelector('#reqMessage').value.trim();

    const btn = container.querySelector('#submitDocReqBtn');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
      await caseService.requestDocument(caseData.case_id, {
        actor_user_id: officer.user_id,
        document_type: docType,
        reason: reason,
        message: message,
      });
      close();
      onComplete();
    } catch (err) {
      alert('Failed to request document: ' + err.message);
      btn.disabled = false;
      btn.textContent = 'Send Request to Citizen';
    }
  });
}

function openRejectModal(caseId, docId, officer, container, onComplete) {
  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface border border-outline-variant rounded-xl p-6 max-w-md w-full shadow-lg space-y-4">
        <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
          <h3 class="text-sm font-bold text-error flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px]">close</span>
            <span>Reject Submitted Document</span>
          </h3>
          <button id="closeModalBtn" class="text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="rejectDocForm" class="space-y-3.5 text-xs">
          <div>
            <label class="block font-semibold text-on-surface mb-1">Rejection Reason *</label>
            <textarea id="rejectionReasonText" rows="3" required placeholder="Specify why the document cannot be verified (e.g. illegible scan, outdated revenue extract, seal missing)..." class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-error"></textarea>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button type="button" id="cancelModalBtn" class="px-3 py-1.5 border border-outline-variant/60 rounded-lg text-on-surface hover:bg-surface-container">
              Cancel
            </button>
            <button type="submit" id="submitRejectBtn" class="px-4 py-1.5 bg-error text-white font-semibold rounded-lg hover:opacity-95">
              Confirm Rejection
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  const close = () => { container.innerHTML = ''; };
  container.querySelector('#closeModalBtn').addEventListener('click', close);
  container.querySelector('#cancelModalBtn').addEventListener('click', close);

  const form = container.querySelector('#rejectDocForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const reason = container.querySelector('#rejectionReasonText').value.trim();

    const btn = container.querySelector('#submitRejectBtn');
    btn.disabled = true;
    btn.textContent = 'Rejecting...';

    try {
      await caseService.verifyDocument(caseId, docId, {
        actor_user_id: officer.user_id,
        verification_status: 'rejected',
        rejection_reason: reason,
      });
      close();
      onComplete();
    } catch (err) {
      alert('Failed to reject document: ' + err.message);
      btn.disabled = false;
      btn.textContent = 'Confirm Rejection';
    }
  });
}

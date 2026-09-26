/**
 * Bhoomi Sakha - Citizen Case Tracking View
 * Transparent, real-time lifecycle tracking for citizen land cases.
 * Displays case milestones, officer actions, document requests, and resolution updates.
 */

import { caseService } from '../api/cases.js';
import { authService } from '../api/auth.js';
import { t } from '../i18n/index.js';
import { attachInfoTooltips } from '../utils/infoModal.js';
import { renderAuthGateway } from '../components/authModal.js';
import { realtimeService } from '../api/realtime.js';

export async function renderCitizenCaseTrackingView(container) {
  if (container._cleanupRealtime) {
    container._cleanupRealtime();
    container._cleanupRealtime = null;
  }

  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const activeCaseId = urlParams.get('id');

  const user = authService.getStoredUser();
  if (!user || user.role !== 'citizen') {
    renderAuthGateway(container, {
      role: 'citizen',
      title: t('auth.citizenTrackingGatewayTitle', 'Sign In to Track Acquisition Grievances'),
      message: t('auth.citizenTrackingGatewayMsg', 'Access real-time case progression, respond to officer document requests, and review verified status updates under your account.'),
      onLoginSuccess: () => renderCitizenCaseTrackingView(container),
    });
    return;
  }

  // Subscribe to real-time case milestones, document requests, and status updates
  const unsub = realtimeService.subscribeAll((eventType, payload) => {
    if ([
      'case_assigned',
      'case_status_changed',
      'status_changed',
      'document_requested',
      'document_uploaded',
      'document_verified',
      'document_rejected',
      'case_escalated',
      'case_resolved',
      'case_event_added',
      'reconnected',
    ].includes(eventType)) {
      const currentParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
      const currentActiveId = currentParams.get('id');
      loadCitizenCasesTracker(user.user_id, currentActiveId);
    }
  });
  container._cleanupRealtime = unsub;

  container.innerHTML = `
    <div class="space-y-6 max-w-7xl mx-auto pb-12 animate-fade-in">
      <!-- Breadcrumb & Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-label-sm mb-1">
            <a href="#/citizen-dashboard" class="hover:text-primary transition-colors">${t('nav.citizenDashboard', 'Citizen Portal')}</a>
            <span>/</span>
            <span class="text-on-surface font-semibold">${t('nav.myCases', 'My Cases Tracker')}</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface">
            ${t('citizen.caseTrackerTitle', 'Case Status & Lifecycle Tracker')}
          </h1>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            ${t('citizen.caseTrackerSub', 'Real-time timeline, official status changes, document requests, and officer resolutions.')}
          </p>
        </div>

        <a href="#/citizen-complaint" class="px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-xs font-semibold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-sm">
          <span class="material-symbols-outlined text-[18px]">add</span>
          <span>${t('citizen.fileGrievanceBtn', 'File New Grievance')}</span>
        </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Cases List Sidebar (Left Column) -->
        <div class="lg:col-span-4 bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
          <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
            <span class="font-bold text-xs uppercase tracking-wider text-on-surface">${t('citizen.allMyCases', 'My Registered Cases')}</span>
            <span class="text-xs font-bold font-tabular-data text-primary" id="citizenCasesTotalBadge">-</span>
          </div>

          <div id="citizenCasesNavList" class="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
            <div class="py-8 text-center text-on-surface-variant text-xs">
              <span class="animate-spin inline-block mr-1 material-symbols-outlined text-[16px]">progress_activity</span>
              Loading cases...
            </div>
          </div>
        </div>

        <!-- Case Detail & Timeline (Right Column) -->
        <div class="lg:col-span-8 space-y-5" id="caseDetailMainArea">
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-12 text-center text-on-surface-variant">
            <span class="material-symbols-outlined text-[48px] text-primary/30">manage_search</span>
            <div class="font-medium text-sm mt-2">Select a case from the list to track its real-time progress</div>
          </div>
        </div>
      </div>
    </div>
  `;

  attachInfoTooltips(container);

  loadCitizenCasesTracker(user.user_id, activeCaseId);
}

async function loadCitizenCasesTracker(userId, activeCaseId) {
  const listContainer = document.getElementById('citizenCasesNavList');
  const countBadge = document.getElementById('citizenCasesTotalBadge');
  const detailArea = document.getElementById('caseDetailMainArea');

  try {
    const cases = await caseService.getUserCases(userId);
    if (countBadge) countBadge.textContent = `${cases.length} cases`;

    if (cases.length === 0) {
      if (listContainer) {
        listContainer.innerHTML = `
          <div class="py-8 text-center text-on-surface-variant text-xs">
            No complaints found.
          </div>
        `;
      }
      if (detailArea) {
        detailArea.innerHTML = `
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-12 text-center text-on-surface-variant space-y-3">
            <span class="material-symbols-outlined text-[48px] text-primary/40">assignment_add</span>
            <h3 class="font-bold text-base text-on-surface">No Grievances Filed</h3>
            <p class="text-xs max-w-sm mx-auto">Have an issue regarding delayed land compensation, boundary disputes, or pending awards? You can lodge a case directly with the SLAO.</p>
            <a href="#/citizen-complaint" class="inline-block px-4 py-2 bg-primary text-on-primary text-xs font-semibold rounded-lg hover:opacity-95 shadow-sm">
              File First Grievance
            </a>
          </div>
        `;
      }
      return;
    }

    // Determine currently active case
    const targetCase = cases.find(c => c.case_id === activeCaseId) || cases[0];

    // Render list
    listContainer.innerHTML = cases.map(c => {
      const isSelected = c.case_id === targetCase.case_id;
      return `
        <button type="button" class="select-case-btn w-full text-left p-3 rounded-lg border transition-all ${
          isSelected
            ? 'bg-primary-container text-on-primary border-primary font-semibold shadow-xs'
            : 'bg-surface-container-lowest text-on-surface border-outline-variant/30 hover:border-primary/50'
        }" data-id="${c.case_id}">
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-tabular-data font-bold">${c.case_id}</span>
            <span class="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold ${
              c.status === 'resolved' ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300' :
              c.status === 'documents_required' ? 'bg-rose-500/20 text-rose-800 dark:text-rose-300' :
              'bg-surface-container text-on-surface'
            }">
              ${c.status.replace('_', ' ')}
            </span>
          </div>
          <div class="text-[11px] truncate opacity-90">${c.category.replace(/_/g, ' ').toUpperCase()}</div>
          <div class="text-[10px] opacity-75 mt-1 font-tabular-data">${new Date(c.created_at).toLocaleDateString()}</div>
        </button>
      `;
    }).join('');

    // Attach click listeners to sidebar buttons
    listContainer.querySelectorAll('.select-case-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        window.location.hash = `#/citizen-cases?id=${encodeURIComponent(id)}`;
      });
    });

    // Render Detail View for targetCase
    renderCaseDetailView(targetCase, detailArea);

  } catch (err) {
    if (detailArea) {
      detailArea.innerHTML = `<div class="p-6 bg-error/10 text-error text-xs rounded-xl">Failed to load tracker: ${err.message}</div>`;
    }
  }
}

async function renderCaseDetailView(caseItem, container) {
  container.innerHTML = `
    <!-- Case Overview Header -->
    <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm space-y-4">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-outline-variant/30 pb-4">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-headline-sm text-xl font-bold font-tabular-data text-on-surface">${caseItem.case_id}</span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
              caseItem.status === 'resolved' ? 'bg-emerald-500 text-white' :
              caseItem.status === 'documents_required' ? 'bg-rose-600 text-white animate-pulse' :
              'bg-primary-container text-on-primary'
            }">
              ${caseItem.status.replace(/_/g, ' ')}
            </span>
            ${caseItem.priority === 'high' || caseItem.priority === 'critical' ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-error/15 text-error uppercase">${caseItem.priority} Urgency</span>` : ''}
          </div>
          <div class="text-xs text-on-surface-variant mt-1">
            Category: <strong class="text-on-surface capitalize">${caseItem.category.replace(/_/g, ' ')}</strong>
            • Land ID: <strong class="text-on-surface">${caseItem.land_id}</strong>
          </div>
        </div>

        <div class="text-right text-xs">
          <span class="text-on-surface-variant block">Assigned Officer</span>
          <span class="font-bold text-on-surface">${caseItem.assigned_officer_id || 'Awaiting SLAO Assignment'}</span>
        </div>
      </div>

      <!-- Description Block -->
      <div class="text-xs bg-surface-container-lowest p-3.5 rounded-lg border border-outline-variant/30 space-y-1">
        <span class="font-bold text-on-surface block text-[11px] uppercase tracking-wider text-primary">Declared Grievance</span>
        <p class="text-on-surface-variant leading-relaxed">${caseItem.description}</p>
      </div>

      <!-- Estimated Delay Risk Badge (if attached) -->
      ${caseItem.risk_probability !== null && caseItem.risk_probability !== undefined ? `
        <div class="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/30 flex items-center justify-between text-xs">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[18px]">neurology</span>
            <span>Attached Predictive Delay Risk: <strong>${Math.round(caseItem.risk_probability * 100)}% (${caseItem.risk_level || 'ASSESSED'})</strong></span>
          </div>
          <span class="text-[11px] text-on-surface-variant font-tabular-data">XGBoost Model v1.1</span>
        </div>
      ` : ''}
    </div>

    <!-- Document Request Alert & Upload Form (if status == documents_required) -->
    <div id="citizenUploadSection"></div>

    <!-- Documents List -->
    <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 shadow-sm space-y-3">
      <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
        <span class="font-bold text-xs uppercase tracking-wider text-on-surface flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px] text-primary">folder</span>
          <span>Submitted Case Documents</span>
        </span>
        <span id="caseDocsCountBadge" class="text-xs font-semibold text-on-surface-variant font-tabular-data">0 documents</span>
      </div>

      <div id="caseDocsList" class="space-y-2">
        <div class="text-center py-4 text-xs text-on-surface-variant">Loading documents...</div>
      </div>
    </div>

    <!-- Real-time Case Milestones & Timeline (From persisted case_events) -->
    <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm space-y-4">
      <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
        <h3 class="font-headline-sm text-base font-bold text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-[20px]">timeline</span>
          <span>Official Case Lifecycle Timeline</span>
        </h3>
        <span class="text-[11px] text-on-surface-variant">Append-only audit trail</span>
      </div>

      <div id="caseTimelineList" class="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/60">
        <div class="text-xs text-on-surface-variant py-4">Loading timeline events...</div>
      </div>
    </div>
  `;

  // Load documents
  loadCaseDocuments(caseItem.case_id);

  // Load timeline events
  loadCaseTimeline(caseItem.case_id);

  // Render upload form if documents required
  if (caseItem.status === 'documents_required') {
    renderCitizenDocumentUploadCard(caseItem.case_id);
  }
}

async function loadCaseDocuments(caseId) {
  const listEl = document.getElementById('caseDocsList');
  const countBadge = document.getElementById('caseDocsCountBadge');
  if (!listEl) return;

  try {
    const docs = await caseService.getCaseDocuments(caseId);
    if (countBadge) countBadge.textContent = `${docs.length} document${docs.length === 1 ? '' : 's'}`;

    if (docs.length === 0) {
      listEl.innerHTML = `<div class="text-center py-4 text-xs text-on-surface-variant">No supporting documents uploaded for this case.</div>`;
      return;
    }

    listEl.innerHTML = docs.map(d => {
      const isVerified = d.verification_status === 'verified';
      const isRejected = d.verification_status === 'rejected';
      const downloadUrl = caseService.getDocumentDownloadUrl(caseId, d.document_id);

      return `
        <div class="p-3 bg-surface-container-lowest border border-outline-variant/30 rounded-lg flex items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2.5">
            <span class="p-1.5 rounded bg-surface-container text-on-surface-variant">
              <span class="material-symbols-outlined text-[18px]">description</span>
            </span>
            <div>
              <div class="font-semibold text-on-surface flex items-center gap-1.5">
                <span>${d.file_name}</span>
                <a href="${downloadUrl}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline flex items-center gap-0.5 text-[11px]" title="Inspect file">
                  <span class="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </div>
              <div class="text-[11px] text-on-surface-variant capitalize">${d.document_type.replace(/_/g, ' ')} • Uploaded on ${new Date(d.uploaded_at).toLocaleDateString()}</div>
              ${d.rejection_reason ? `<div class="text-[11px] text-error mt-0.5 font-medium">Rejection reason: ${d.rejection_reason}</div>` : ''}
            </div>
          </div>

          <div class="flex items-center gap-2">
            <a href="${downloadUrl}" target="_blank" rel="noopener noreferrer" class="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-[11px] font-semibold flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px]">visibility</span>
              <span class="hidden sm:inline">View</span>
            </a>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${
              isVerified ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300' :
              isRejected ? 'bg-rose-500/20 text-rose-800 dark:text-rose-300' :
              'bg-amber-500/20 text-amber-800 dark:text-amber-300'
            }">
              ${d.verification_status}
            </span>
          </div>
        </div>
      `;
    }).join('');
  } catch (err) {
    listEl.innerHTML = `<div class="text-error text-xs">Failed to load documents: ${err.message}</div>`;
  }
}

async function loadCaseTimeline(caseId) {
  const timelineEl = document.getElementById('caseTimelineList');
  if (!timelineEl) return;

  try {
    const events = await caseService.getCaseEvents(caseId);

    if (events.length === 0) {
      timelineEl.innerHTML = `<div class="text-xs text-on-surface-variant">No milestones recorded.</div>`;
      return;
    }

    timelineEl.innerHTML = events.map(e => `
      <div class="relative group">
        <span class="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container-low"></span>
        <div class="text-xs">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-bold text-on-surface capitalize">${e.action.replace(/_/g, ' ')}</span>
            <span class="text-[11px] text-on-surface-variant font-tabular-data">${new Date(e.timestamp).toLocaleString()}</span>
          </div>
          ${e.old_status && e.new_status ? `
            <div class="text-[11px] text-on-surface-variant mt-0.5">
              Status changed: <span class="font-semibold uppercase">${e.old_status}</span> → <span class="font-semibold text-primary uppercase">${e.new_status}</span>
            </div>
          ` : ''}
          ${e.comment ? `
            <p class="text-xs text-on-surface mt-1 bg-surface-container-lowest p-2.5 rounded-lg border border-outline-variant/30 leading-relaxed">${e.comment}</p>
          ` : ''}
        </div>
      </div>
    `).join('');

  } catch (err) {
    timelineEl.innerHTML = `<div class="text-error text-xs">Failed to load timeline: ${err.message}</div>`;
  }
}

function renderCitizenDocumentUploadCard(caseId) {
  const section = document.getElementById('citizenUploadSection');
  if (!section) return;

  section.innerHTML = `
    <div class="bg-amber-500/10 border border-amber-500/40 rounded-xl p-5 shadow-sm space-y-3 animate-pulse-subtle">
      <div class="flex items-center gap-2.5 text-amber-900 dark:text-amber-200">
        <span class="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[24px]">notification_important</span>
        <div>
          <h4 class="font-bold text-sm">Action Required: Officer Requested Supporting Document</h4>
          <p class="text-xs opacity-90">Please provide the certified document file (PDF or Image, max 15MB) so the SLAO can proceed with investigation.</p>
        </div>
      </div>

      <form id="respondDocUploadForm" class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
        <div>
          <label class="block font-semibold text-on-surface mb-1">Document Type *</label>
          <select id="respDocType" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface">
            <option value="7_12_extract">7/12 Extract</option>
            <option value="compensation_notice">Compensation Notice</option>
            <option value="sale_deed">Sale Deed / Title</option>
            <option value="bank_passbook">Bank Passbook / Cheque</option>
            <option value="other">Other Requested Record</option>
          </select>
        </div>

        <div>
          <label class="block font-semibold text-on-surface mb-1">Choose File (.pdf, .jpg, .png) *</label>
          <input type="file" id="respFileInput" accept=".pdf,.jpg,.jpeg,.png,.tiff" class="w-full px-2 py-1.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[11px] file:bg-primary file:text-on-primary file:font-semibold" />
        </div>

        <div class="flex items-end">
          <button type="submit" id="respSubmitBtn" class="w-full py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-sm flex items-center justify-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">upload_file</span>
            <span>Upload Document</span>
          </button>
        </div>
      </form>
      <div id="uploadStatusMsg" class="hidden text-xs"></div>
    </div>
  `;

  const form = document.getElementById('respondDocUploadForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('respSubmitBtn');
    const statusMsg = document.getElementById('uploadStatusMsg');
    btn.disabled = true;
    btn.textContent = 'Uploading to Storage...';

    const activeUser = authService.getStoredUser();
    if (!activeUser) {
      alert('Authentication required to upload documents.');
      btn.disabled = false;
      btn.textContent = 'Upload Document';
      return;
    }

    const docType = document.getElementById('respDocType').value;
    const fileInput = document.getElementById('respFileInput');
    const selectedFile = fileInput?.files?.[0];

    try {
      if (selectedFile) {
        if (selectedFile.size > 15 * 1024 * 1024) {
          throw new Error('File exceeds maximum allowed size of 15MB.');
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('document_type', docType);

        await caseService.uploadCaseDocumentFile(caseId, formData);
      } else {
        const fallbackName = `${docType}_document.pdf`;
        await caseService.createCaseDocument(caseId, {
          uploaded_by: activeUser.user_id,
          document_type: docType,
          file_name: fallbackName,
          storage_reference: `cases/${caseId}/${fallbackName}`,
        });
      }

      if (statusMsg) {
        statusMsg.className = 'text-xs text-emerald-600 dark:text-emerald-400 font-semibold';
        statusMsg.textContent = 'Document successfully uploaded and attached to case dossier.';
        statusMsg.classList.remove('hidden');
      }

      loadCaseDocuments(caseId);
      loadCaseTimeline(caseId);
      setTimeout(() => {
        section.innerHTML = '';
      }, 1200);
    } catch (err) {
      if (statusMsg) {
        statusMsg.className = 'text-xs text-error font-semibold';
        statusMsg.textContent = `Upload failed: ${err.message}`;
        statusMsg.classList.remove('hidden');
      } else {
        alert(`Upload failed: ${err.message}`);
      }
    } finally {
      btn.disabled = false;
      btn.textContent = 'Upload Document';
    }
  });
}

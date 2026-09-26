/**
 * Bhoomi Sakha - Citizen Complaint Filing View
 * Allows citizens to submit formal grievances on land compensation,
 * measurement, notice issues, or documentation to competent authorities.
 */

import { caseService } from '../api/cases.js';
import { authService } from '../api/auth.js';
import { t } from '../i18n/index.js';
import { attachInfoTooltips } from '../utils/infoModal.js';
import { renderAuthGateway } from '../components/authModal.js';

export async function renderCitizenComplaintView(container) {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const preselectedLandId = urlParams.get('land_id');
  const prefilledRiskProb = urlParams.get('risk_probability');
  const prefilledRiskLevel = urlParams.get('risk_level');

  const user = authService.getStoredUser();
  if (!user || user.role !== 'citizen') {
    renderAuthGateway(container, {
      role: 'citizen',
      title: t('auth.citizenComplaintGatewayTitle', 'Sign In to File Land Acquisition Grievance'),
      message: t('auth.citizenComplaintGatewayMsg', 'Authenticated identity is required to generate statutory case IDs, assign revenue officers, and track dispute timelines.'),
      onLoginSuccess: () => renderCitizenComplaintView(container),
    });
    return;
  }

  container.innerHTML = `
    <div class="space-y-6 max-w-4xl mx-auto pb-12 animate-fade-in">
      <!-- Breadcrumb & Header -->
      <div>
        <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-label-sm mb-1">
          <a href="#/citizen-dashboard" class="hover:text-primary transition-colors">${t('nav.citizenDashboard', 'Citizen Portal')}</a>
          <span>/</span>
          <span class="text-on-surface font-semibold">${t('nav.fileComplaint', 'File Grievance')}</span>
        </div>
        <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface">
          ${t('citizen.fileGrievanceTitle', 'File Official Land Grievance')}
        </h1>
        <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
          ${t('citizen.fileGrievanceSub', 'Submit your grievance directly to the Special Land Acquisition Officer. Each case is assigned a permanent tracking ID.')}
        </p>
      </div>

      ${prefilledRiskLevel ? `
        <div class="p-3.5 bg-primary/5 border border-primary/20 rounded-xl text-xs flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[18px]">verified</span>
            <span>Attached AI Delay Assessment: <strong>${Math.round(parseFloat(prefilledRiskProb) * 100)}% (${prefilledRiskLevel})</strong></span>
          </div>
          <span class="text-[11px] text-primary font-semibold uppercase">Auto-attached</span>
        </div>
      ` : ''}

      <!-- Form Container -->
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-6 shadow-sm">
        <form id="grievanceForm" class="space-y-4 text-xs">
          <!-- Step 1: Land Record -->
          <div>
            <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldSelectLandParcel', 'Select Land Holding / Parcel')} *</label>
            <select id="caseLandId" required class="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">-- Choose registered land parcel --</option>
            </select>
            <div id="noLandsPrompt" class="hidden p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs flex items-center justify-between gap-2 mt-2">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px] text-amber-600 dark:text-amber-400">warning</span>
                <span>No registered land records found under your account. Please register your parcel before submitting a formal grievance.</span>
              </div>
              <a href="#/citizen-lands" class="px-2.5 py-1 bg-primary text-on-primary rounded font-semibold text-[11px] whitespace-nowrap shadow-xs">Register Land</a>
            </div>
            <div class="flex items-center justify-between text-[11px] text-on-surface-variant mt-1.5">
              <span>Parcel not registered?</span>
              <a href="#/citizen-lands" class="text-primary font-semibold hover:underline flex items-center gap-0.5">
                <span>Register new land first</span>
                <span class="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          </div>

          <!-- Step 2: Complaint Category & Priority -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldCategory', 'Complaint Category')} *</label>
              <select id="caseCategory" required class="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="compensation_not_received">Compensation Not Received</option>
                <option value="compensation_dispute">Compensation Amount Dispute / Award Rate</option>
                <option value="land_measurement">Land Boundary & Measurement Discrepancy</option>
                <option value="notice_issue">Statutory Notice Not Served / Address Error</option>
                <option value="documentation">Documentation / Mutation / 7-12 Correction</option>
                <option value="ownership_mutation">Ownership Title & Succession Mutation Issue</option>
                <option value="possession">Premature or Disputed Physical Possession</option>
                <option value="rehabilitation_resettlement">Rehabilitation & Resettlement (R&R) Claim</option>
                <option value="other">Other Grievance</option>
              </select>
            </div>

            <div>
              <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldPriority', 'Citizen Urgency')}</label>
              <select id="casePriority" class="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="normal" selected>Normal</option>
                <option value="high">High (Delay > 6 months / Crop Loss)</option>
                <option value="critical">Critical (Court Stay / Possession Threat)</option>
              </select>
            </div>
          </div>

          <!-- Step 3: Description -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="font-semibold text-on-surface">${t('citizen.fieldDescription', 'Detailed Description of Grievance')} *</label>
              <button type="button" id="speakDescriptionBtn" class="text-primary hover:text-primary/80 flex items-center gap-1 text-[11px] font-semibold">
                <span class="material-symbols-outlined text-[16px]">mic</span>
                <span>Speak to Write</span>
              </button>
            </div>
            <textarea id="caseDescription" required rows="4" placeholder="${t('citizen.descPlaceholder', 'Clearly state your survey number, notification date, what award was promised or what discrepancy occurred...')}" class="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed"></textarea>
          </div>

          <!-- Step 4: Optional Supporting Document Metadata -->
          <div class="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded-xl space-y-3">
            <span class="font-bold text-on-surface block text-xs flex items-center gap-1.5">
              <span class="material-symbols-outlined text-primary text-[18px]">attachment</span>
              <span>${t('citizen.supportingDocsTitle', 'Attach Supporting Document Metadata (Optional)')}</span>
            </span>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-medium text-on-surface-variant mb-1">Document Type</label>
                <select id="docType" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface">
                  <option value="7_12_extract">7/12 Extract / Record of Rights</option>
                  <option value="compensation_notice">Section 4 / Award Notice</option>
                  <option value="sale_deed">Registered Sale Deed / Title Deed</option>
                  <option value="aadhaar">Identity Proof (Aadhaar / Voter ID)</option>
                  <option value="bank_passbook">Bank Passbook / Cancelled Cheque</option>
                  <option value="objection_letter">Prior Objection Letter</option>
                  <option value="other">Other Document</option>
                </select>
              </div>

              <div>
                <label class="block font-medium text-on-surface-variant mb-1">File Name</label>
                <input type="text" id="docFileName" placeholder="e.g. 7_12_extract_survey_142.pdf" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface" />
              </div>
            </div>
            <p class="text-[11px] text-on-surface-variant">Note: Document reference will be logged to official audit trail upon submission.</p>
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <button type="submit" id="submitCaseBtn" class="w-full py-3 bg-secondary text-on-secondary rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-md">
              <span class="material-symbols-outlined text-[18px]">send</span>
              <span>${t('citizen.submitGrievanceBtn', 'Submit Formal Grievance to SLAO')}</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Success Modal -->
      <div id="caseSuccessModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <div class="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl max-w-md w-full p-6 shadow-2xl text-center space-y-4 animate-scale-up">
          <div class="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <span class="material-symbols-outlined text-[32px]">check_circle</span>
          </div>

          <h3 class="text-xl font-headline-md font-bold text-on-surface">
            ${t('citizen.caseSubmittedTitle', 'Grievance Submitted Successfully!')}
          </h3>

          <div class="p-4 bg-surface-container-low border border-outline-variant/40 rounded-xl space-y-1">
            <span class="text-xs text-on-surface-variant uppercase font-semibold">Your Official Case Tracking ID</span>
            <div class="text-2xl font-black font-tabular-data text-primary select-all" id="createdCaseIdDisplay">CAS-XXXX</div>
            <div class="text-[11px] text-on-surface-variant">Assigned queue: Special Land Acquisition Officer</div>
          </div>

          <p class="text-xs text-on-surface-variant">
            A confirmation notification has been sent. You can track officer assignment, view updates, and upload requested documents anytime.
          </p>

          <div class="flex items-center gap-2 pt-2">
            <button id="viewMyCasesBtn" class="flex-1 py-2.5 bg-primary text-on-primary rounded-lg font-semibold text-xs hover:opacity-95 transition-all shadow-sm">
              Track This Case Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  attachInfoTooltips(container);

  // Load lands into select
  loadLandsForComplaint(user.user_id, preselectedLandId);

  // Speech Recognition (Speak to write)
  const micBtn = document.getElementById('speakDescriptionBtn');
  if (micBtn && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-IN';

    let isRecording = false;
    micBtn.addEventListener('click', () => {
      if (isRecording) {
        recognition.stop();
        isRecording = false;
        micBtn.classList.remove('text-error');
        micBtn.querySelector('span:last-child').textContent = 'Speak to Write';
      } else {
        try {
          recognition.start();
          isRecording = true;
          micBtn.classList.add('text-error');
          micBtn.querySelector('span:last-child').textContent = 'Listening...';
        } catch (_) {}
      }
    });

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const descArea = document.getElementById('caseDescription');
      if (descArea) {
        descArea.value = descArea.value ? `${descArea.value} ${transcript}` : transcript;
      }
      isRecording = false;
      micBtn.classList.remove('text-error');
      micBtn.querySelector('span:last-child').textContent = 'Speak to Write';
    };

    recognition.onerror = () => {
      isRecording = false;
      micBtn.classList.remove('text-error');
      micBtn.querySelector('span:last-child').textContent = 'Speak to Write';
    };
  }

  // Handle Form Submission
  const form = document.getElementById('grievanceForm');
  let createdCaseId = null;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('submitCaseBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="animate-spin material-symbols-outlined text-[18px]">progress_activity</span>
      <span>Submitting to Officer Queue...</span>
    `;

    try {
      const landId = document.getElementById('caseLandId').value;
      if (!landId) {
        alert('Please select a registered land parcel. If you have not registered your land yet, please visit "My Land" to register your survey number first.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span class="material-symbols-outlined text-[18px]">send</span>
          <span>${t('citizen.submitGrievanceBtn', 'Submit Formal Grievance to SLAO')}</span>
        `;
        return;
      }
      const category = document.getElementById('caseCategory').value;
      const priority = document.getElementById('casePriority').value;
      const description = document.getElementById('caseDescription').value.trim();

      const payload = {
        citizen_id: user.user_id,
        land_id: landId,
        category: category,
        priority: priority,
        description: description,
        risk_probability: prefilledRiskProb ? parseFloat(prefilledRiskProb) : null,
        risk_level: prefilledRiskLevel || null,
      };

      const result = await caseService.createCase(payload);
      createdCaseId = result.case_id;

      // Optional document metadata
      const fileName = document.getElementById('docFileName').value.trim();
      if (fileName && createdCaseId) {
        await caseService.createCaseDocument(createdCaseId, {
          uploaded_by: user.user_id,
          land_id: landId,
          document_type: document.getElementById('docType').value,
          file_name: fileName,
          storage_reference: `storage/cases/${createdCaseId}/${fileName}`,
        });
      }

      // Show success modal
      document.getElementById('createdCaseIdDisplay').textContent = createdCaseId;
      document.getElementById('caseSuccessModal').classList.remove('hidden');

    } catch (err) {
      alert(`Submission failed: ${err.message}`);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span class="material-symbols-outlined text-[18px]">send</span>
        <span>${t('citizen.submitGrievanceBtn', 'Submit Formal Grievance to SLAO')}</span>
      `;
    }
  });

  const viewCasesBtn = document.getElementById('viewMyCasesBtn');
  if (viewCasesBtn) {
    viewCasesBtn.addEventListener('click', () => {
      window.location.hash = `#/citizen-cases?id=${encodeURIComponent(createdCaseId || '')}`;
    });
  }
}

async function loadLandsForComplaint(userId, preselectedId) {
  const select = document.getElementById('caseLandId');
  if (!select) return;

  try {
    const lands = await caseService.getUserLands(userId);
    lands.forEach(l => {
      const opt = document.createElement('option');
      opt.value = l.land_id;
      opt.textContent = `${l.village} (Survey ${l.survey_number}) - ${l.area_hectares} Ha (${l.land_type})`;
      if (preselectedId && l.land_id === preselectedId) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    if (lands.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.disabled = true;
      opt.selected = true;
      opt.textContent = '-- No registered land parcels found --';
      select.appendChild(opt);

      const promptEl = document.getElementById('noLandsPrompt');
      if (promptEl) {
        promptEl.classList.remove('hidden');
      }
    }
  } catch (err) {
    const opt = document.createElement('option');
    opt.value = '';
    opt.disabled = true;
    opt.selected = true;
    opt.textContent = '-- Error loading land holdings --';
    select.appendChild(opt);
  }
}

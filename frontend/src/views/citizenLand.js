/**
 * Bhoomi Sakha - Citizen Land Management View
 * Allows citizens to view, register, and update their land records.
 * Clearly differentiates citizen-declared data from official cadastral verification.
 */

import { caseService } from '../api/cases.js';
import { authService } from '../api/auth.js';
import { t } from '../i18n/index.js';
import { attachInfoTooltips } from '../utils/infoModal.js';

export async function renderCitizenLandView(container) {
  let user = authService.getStoredUser() || {
    user_id: 'USR-CITIZEN-01',
    name: 'Ramesh Patil',
    email: 'ramesh.patil@example.com',
    role: 'citizen',
    district: 'Pune',
  };

  container.innerHTML = `
    <div class="space-y-6 max-w-7xl mx-auto pb-12 animate-fade-in">
      <!-- Breadcrumb & Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-label-sm mb-1">
            <a href="#/citizen-dashboard" class="hover:text-primary transition-colors">${t('nav.citizenDashboard', 'Citizen Portal')}</a>
            <span>/</span>
            <span class="text-on-surface font-semibold">${t('nav.myLand', 'My Land Records')}</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface">
            ${t('citizen.landHeader', 'Registered Land Parcels')}
          </h1>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            ${t('citizen.landSub', 'Manage your survey numbers, declared area, and view official notification milestones.')}
          </p>
        </div>

        <button id="openAddLandModalBtn" type="button" class="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-xs font-semibold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-sm">
          <span class="material-symbols-outlined text-[18px]">add</span>
          <span>${t('citizen.registerNewLand', 'Register New Land Record')}</span>
        </button>
      </div>

      <!-- Land Records Container -->
      <div id="citizenLandsContainer" class="space-y-4">
        <div class="py-12 text-center text-on-surface-variant text-sm bg-surface-container-low border border-outline-variant/30 rounded-xl">
          <span class="animate-spin inline-block mr-2 material-symbols-outlined text-[20px]">progress_activity</span>
          ${t('common.loading', 'Loading land records...')}
        </div>
      </div>

      <!-- Modal Dialog: Register / Edit Land -->
      <div id="landModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <div class="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
            <h2 id="modalTitle" class="text-lg font-headline-sm font-bold text-on-surface">
              ${t('citizen.modalAddTitle', 'Register Land Record')}
            </h2>
            <button id="closeLandModalBtn" type="button" class="text-on-surface-variant hover:text-on-surface p-1 rounded-lg">
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <form id="landForm" class="space-y-3.5 text-xs">
            <input type="hidden" id="editLandId" value="" />

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldState', 'State')} *</label>
                <input type="text" id="landState" required value="Maharashtra" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldDistrict', 'District')} *</label>
                <input type="text" id="landDistrict" required placeholder="e.g. Pune" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldTaluka', 'Taluka')} *</label>
                <input type="text" id="landTaluka" required placeholder="e.g. Haveli" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldVillage', 'Village')} *</label>
                <input type="text" id="landVillage" required placeholder="e.g. Wagholi" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldSurvey', 'Survey / Gat No.')} *</label>
                <input type="text" id="landSurvey" required placeholder="e.g. 142/3B" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldArea', 'Area (Hectares)')} *</label>
                <input type="number" step="0.01" min="0.01" id="landArea" required placeholder="e.g. 1.75" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldLandType', 'Land Type')}</label>
                <select id="landType" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="Agricultural">Agricultural</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Residential">Residential</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldAcquisitionStatus', 'Acquisition Status')}</label>
                <select id="landAcquisitionStatus" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="not_notified">Not Notified</option>
                  <option value="section_4_notified">Section 4 Preliminary Notification</option>
                  <option value="survey_pending">Joint Measurement Survey Pending</option>
                  <option value="compensation_pending">Award Declared / Compensation Pending</option>
                  <option value="possession_taken">Possession Taken</option>
                  <option value="acquired">Acquisition Complete</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block font-semibold text-on-surface mb-1">${t('citizen.fieldProject', 'Associated Project (Optional)')}</label>
              <input type="text" id="landProject" placeholder="e.g. Pune Ring Road Section 2" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div class="p-3 bg-primary/5 border border-primary/20 rounded-lg text-[11px] text-on-surface-variant flex items-start gap-2">
              <span class="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">verified_user</span>
              <span>${t('citizen.landDeclarationNote', 'Citizen-Declared Information. Official cadastral boundaries and awards will be cross-checked during officer review.')}</span>
            </div>

            <div class="flex items-center justify-end gap-2 pt-2 border-t border-outline-variant/30">
              <button type="button" id="cancelLandBtn" class="px-4 py-2 border border-outline-variant/60 rounded-lg text-on-surface font-semibold hover:bg-surface-container transition-colors">
                ${t('common.cancel', 'Cancel')}
              </button>
              <button type="submit" id="saveLandSubmitBtn" class="px-4 py-2 bg-primary text-on-primary rounded-lg font-semibold hover:opacity-95 transition-all shadow-sm">
                ${t('common.save', 'Save Record')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  attachInfoTooltips(container);

  // Setup event listeners
  const modal = document.getElementById('landModal');
  const openBtn = document.getElementById('openAddLandModalBtn');
  const closeBtn = document.getElementById('closeLandModalBtn');
  const cancelBtn = document.getElementById('cancelLandBtn');
  const form = document.getElementById('landForm');

  const openModal = (isEdit = false, land = null) => {
    document.getElementById('modalTitle').textContent = isEdit
      ? t('citizen.modalEditTitle', 'Edit Land Record')
      : t('citizen.modalAddTitle', 'Register Land Record');
    document.getElementById('editLandId').value = isEdit && land ? land.land_id : '';
    if (isEdit && land) {
      document.getElementById('landState').value = land.state || 'Maharashtra';
      document.getElementById('landDistrict').value = land.district || '';
      document.getElementById('landTaluka').value = land.taluka || '';
      document.getElementById('landVillage').value = land.village || '';
      document.getElementById('landSurvey').value = land.survey_number || '';
      document.getElementById('landArea').value = land.area_hectares || '';
      document.getElementById('landType').value = land.land_type || 'Agricultural';
      document.getElementById('landAcquisitionStatus').value = land.acquisition_status || 'not_notified';
      document.getElementById('landProject').value = land.project_id || '';
    } else {
      form.reset();
      document.getElementById('landState').value = 'Maharashtra';
      document.getElementById('editLandId').value = '';
    }
    modal.classList.remove('hidden');
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    form.reset();
  };

  if (openBtn) openBtn.addEventListener('click', () => openModal(false));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const editId = document.getElementById('editLandId').value;
    const landData = {
      state: document.getElementById('landState').value.trim(),
      district: document.getElementById('landDistrict').value.trim(),
      taluka: document.getElementById('landTaluka').value.trim(),
      village: document.getElementById('landVillage').value.trim(),
      survey_number: document.getElementById('landSurvey').value.trim(),
      area_hectares: parseFloat(document.getElementById('landArea').value),
      land_type: document.getElementById('landType').value,
      acquisition_status: document.getElementById('landAcquisitionStatus').value,
      project_id: document.getElementById('landProject').value.trim() || null,
    };

    try {
      const submitBtn = document.getElementById('saveLandSubmitBtn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Saving...';

      if (editId) {
        await caseService.updateLand(editId, landData);
      } else {
        await caseService.createLand({
          owner_id: user.user_id,
          ...landData,
        });
      }
      closeModal();
      loadCitizenLands(user.user_id, openModal);
    } catch (err) {
      alert(`Error saving land record: ${err.message}`);
    } finally {
      const submitBtn = document.getElementById('saveLandSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = t('common.save', 'Save Record');
      }
    }
  });

  loadCitizenLands(user.user_id, openModal);
}

async function loadCitizenLands(userId, openEditModal) {
  const container = document.getElementById('citizenLandsContainer');
  if (!container) return;

  try {
    const lands = await caseService.getUserLands(userId);

    if (lands.length === 0) {
      container.innerHTML = `
        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-8 text-center text-on-surface-variant">
          <span class="material-symbols-outlined text-[44px] text-primary/40">landscape</span>
          <h3 class="text-base font-bold text-on-surface mt-2">${t('citizen.noLandsTitle', 'No Land Parcels Registered Yet')}</h3>
          <p class="text-xs text-on-surface-variant max-w-md mx-auto mt-1">
            ${t('citizen.noLandsDesc', 'Register your agricultural or residential land parcels to monitor acquisition notices, estimate delay risks, and file grievance cases.')}
          </p>
          <button id="addFirstLandBtn" type="button" class="mt-4 px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-semibold hover:opacity-95 shadow-sm inline-flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">add</span>
            <span>${t('citizen.registerNewLand', 'Register New Land Record')}</span>
          </button>
        </div>
      `;
      const firstBtn = document.getElementById('addFirstLandBtn');
      if (firstBtn) firstBtn.addEventListener('click', () => openEditModal(false));
      return;
    }

    container.innerHTML = lands.map(land => `
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 shadow-sm space-y-4 hover:border-primary/40 transition-colors">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-outline-variant/30 pb-3">
          <div class="flex items-center gap-3">
            <span class="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
              <span class="material-symbols-outlined text-[24px]">pin_drop</span>
            </span>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-base text-on-surface font-tabular-data">${land.village}, Survey ${land.survey_number}</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-primary-container text-on-primary uppercase">${land.land_type}</span>
              </div>
              <div class="text-xs text-on-surface-variant mt-0.5">
                ${land.taluka}, ${land.district}, ${land.state} • ID: <span class="font-tabular-data font-semibold text-on-surface">${land.land_id}</span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 self-end sm:self-center">
            <a href="#/citizen-risk?land_id=${encodeURIComponent(land.land_id)}" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-1 shadow-xs">
              <span class="material-symbols-outlined text-[14px]">speed</span>
              <span>${t('citizen.checkRiskBtn', 'Check Risk')}</span>
            </a>
            <a href="#/citizen-complaint?land_id=${encodeURIComponent(land.land_id)}" class="px-3 py-1.5 bg-secondary text-on-secondary rounded-lg text-xs font-semibold hover:opacity-95 transition-colors flex items-center gap-1 shadow-xs">
              <span class="material-symbols-outlined text-[14px]">report_problem</span>
              <span>${t('citizen.fileGrievanceBtn', 'File Complaint')}</span>
            </a>
            <button class="edit-land-btn p-1.5 text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors" data-id="${land.land_id}" title="Edit Land Details">
              <span class="material-symbols-outlined text-[18px]">edit</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
            <span class="text-on-surface-variant text-[11px] block">${t('citizen.landArea', 'Declared Area')}</span>
            <span class="text-sm font-bold font-tabular-data text-on-surface mt-0.5 block">${land.area_hectares} Ha</span>
          </div>

          <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
            <span class="text-on-surface-variant text-[11px] block">${t('citizen.fieldAcquisitionStatus', 'Acquisition Status')}</span>
            <span class="text-xs font-bold text-on-surface mt-0.5 block capitalize">${(land.acquisition_status || 'not_notified').replace(/_/g, ' ')}</span>
          </div>

          <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
            <span class="text-on-surface-variant text-[11px] block">${t('citizen.fieldProject', 'Associated Project')}</span>
            <span class="text-xs font-semibold text-on-surface mt-0.5 block truncate">${land.project_id || 'Direct Public Acquisition'}</span>
          </div>

          <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
            <span class="text-on-surface-variant text-[11px] block">${t('citizen.registeredOn', 'Registration Date')}</span>
            <span class="text-xs font-tabular-data text-on-surface mt-0.5 block">${new Date(land.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Attach edit button listeners
    container.querySelectorAll('.edit-land-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = lands.find(l => l.land_id === id);
        if (found) openEditModal(true, found);
      });
    });

  } catch (err) {
    container.innerHTML = `
      <div class="p-6 bg-error/10 border border-error/20 rounded-xl text-center text-error text-xs">
        Failed to load land holdings: ${err.message}
      </div>
    `;
  }
}

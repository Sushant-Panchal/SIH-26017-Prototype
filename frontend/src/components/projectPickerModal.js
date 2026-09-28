/**
 * Bhoomi Sakha - Project Picker Modal Component
 * Reusable modal for selecting existing national infrastructure projects.
 * Used by Risk Assessment and Audit Detail flows.
 */

import { SAMPLE_PROJECTS } from '../data/presets.js';
import {
  getRiskLevel,
  getRiskBadgeClasses,
  getRiskTextColor,
  getRiskLevelLabel,
} from '../utils/risk.js';
import { getLocalizedStage } from '../utils/localization.js';
import { t } from '../i18n/index.js';

export function openProjectPickerModal({ activeProjectId = null, onSelect = () => {} } = {}) {
  // Remove any existing instance of the modal
  const existingModal = document.getElementById('projectPickerModalRoot');
  if (existingModal) {
    existingModal.remove();
  }

  const modalRoot = document.createElement('div');
  modalRoot.id = 'projectPickerModalRoot';
  modalRoot.className = 'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in';
  modalRoot.setAttribute('role', 'dialog');
  modalRoot.setAttribute('aria-modal', 'true');
  modalRoot.setAttribute('aria-labelledby', 'projectPickerTitle');

  modalRoot.innerHTML = `
    <div class="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scale-up">
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 border-b border-outline-variant/30 flex items-center justify-between gap-3 bg-surface-container-low/50">
        <div class="flex items-center gap-2.5">
          <span class="p-2 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span class="material-symbols-outlined text-[22px]">folder_open</span>
          </span>
          <div>
            <h2 id="projectPickerTitle" class="text-base sm:text-lg font-headline-sm font-bold text-on-surface">
              ${t('assessment.selectProject', 'Select Existing Project')}
            </h2>
            <p class="text-xs text-on-surface-variant">
              ${t('projects.subtitle', 'Explore active infrastructure corridors, cadastral verification stages, and predicted delay exposures.')}
            </p>
          </div>
        </div>
        <button id="closeProjectPickerBtn" type="button" class="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" aria-label="${t('common.close', 'Close')}">
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      <!-- Search & Sector Filter Toolbar -->
      <div class="p-3 sm:p-4 border-b border-outline-variant/20 bg-surface-container-lowest flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <div class="relative flex-1">
          <span class="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-on-surface-variant pointer-events-none">search</span>
          <input
            type="text"
            id="projectPickerSearchInput"
            placeholder="${t('projects.searchPlaceholder', 'Filter by name, ID, or district...')}"
            class="w-full pl-9 pr-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-xl text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <select id="projectPickerSectorFilter" class="px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-xl text-xs sm:text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="all">${t('projects.allSectors', 'All Sectors')}</option>
          <option value="Highway">${t('dropdown.project_type.highway', 'Highways')}</option>
          <option value="Railway">${t('dropdown.project_type.railway', 'Railways')}</option>
          <option value="Power">${t('dropdown.project_type.power', 'Power / Solar')}</option>
          <option value="Metro">${t('dropdown.project_type.metro', 'Metro')}</option>
          <option value="Industrial">Industrial / SEZ</option>
        </select>
      </div>

      <!-- Project Cards Scroll List -->
      <div class="p-3 sm:p-4 overflow-y-auto flex-1 space-y-2.5 divide-y-0" id="projectPickerList">
        <!-- Rendered dynamically -->
      </div>

      <!-- Modal Footer -->
      <div class="p-3 sm:p-4 border-t border-outline-variant/30 bg-surface-container-low/50 flex items-center justify-between text-xs text-on-surface-variant">
        <span id="projectPickerCountText">${SAMPLE_PROJECTS.length} projects available</span>
        <button id="cancelProjectPickerBtn" type="button" class="px-4 py-2 bg-surface-container border border-outline-variant/60 rounded-xl font-semibold text-on-surface hover:bg-surface-container-high transition-colors">
          ${t('common.cancel', 'Cancel')}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modalRoot);

  const searchInput = modalRoot.querySelector('#projectPickerSearchInput');
  const sectorFilter = modalRoot.querySelector('#projectPickerSectorFilter');
  const listContainer = modalRoot.querySelector('#projectPickerList');
  const countText = modalRoot.querySelector('#projectPickerCountText');
  const closeBtn = modalRoot.querySelector('#closeProjectPickerBtn');
  const cancelBtn = modalRoot.querySelector('#cancelProjectPickerBtn');

  const closeModal = () => {
    modalRoot.classList.add('opacity-0');
    setTimeout(() => {
      modalRoot.remove();
    }, 150);
  };

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  modalRoot.addEventListener('click', (e) => {
    if (e.target === modalRoot) closeModal();
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', handleKeyDown);
    }
  };
  document.addEventListener('keydown', handleKeyDown);

  const renderList = () => {
    const q = (searchInput?.value || '').toLowerCase().trim();
    const sector = sectorFilter?.value || 'all';

    const filtered = SAMPLE_PROJECTS.filter(p => {
      const matchQ =
        p.id.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.district.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q);
      const matchSector = sector === 'all' || p.type === sector;
      return matchQ && matchSector;
    });

    if (countText) {
      countText.textContent = `${filtered.length} / ${SAMPLE_PROJECTS.length} projects`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="py-12 text-center text-on-surface-variant space-y-2">
          <span class="material-symbols-outlined text-[36px] text-primary/40">search_off</span>
          <div class="font-bold text-sm text-on-surface">${t('projects.noRecords', 'No matching records found in national database.')}</div>
          <p class="text-xs text-on-surface-variant max-w-xs mx-auto">Try clearing search filters or selecting All Sectors.</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(p => {
      const isSelected = p.id === activeProjectId;
      const rawRisk = p.riskLevel || getRiskLevel(p.delayProbability);
      const riskLabel = getRiskLevelLabel(rawRisk);
      const riskClass = getRiskBadgeClasses(rawRisk);

      return `
        <div class="p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
          isSelected
            ? 'bg-primary/5 border-primary shadow-xs ring-1 ring-primary'
            : 'bg-surface-container-low/60 hover:bg-surface-container border-outline-variant/40 hover:border-primary/50'
        }" data-id="${p.id}">
          <div class="flex-1 min-w-0 space-y-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="font-tabular-data font-bold text-xs px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-mono">
                ${p.id}
              </span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${riskClass} border">
                ${riskLabel} (${p.delayProbability}%)
              </span>
              <span class="text-[11px] text-on-surface-variant font-medium">
                ${p.sector}
              </span>
              ${isSelected ? `
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-on-primary inline-flex items-center gap-1">
                  <span class="material-symbols-outlined text-[12px]">check</span>
                  <span>Active</span>
                </span>
              ` : ''}
            </div>
            
            <h3 class="text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate">
              ${p.name}
            </h3>

            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-on-surface-variant">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">location_on</span>
                <span>${p.district}, ${p.state}</span>
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">gavel</span>
                <span>${getLocalizedStage(p.stage)}</span>
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <span>Progress: <strong class="text-on-surface font-tabular-data">${p.progressPct}%</strong></span>
              </span>
            </div>
          </div>

          <div class="self-end sm:self-center shrink-0">
            <button type="button" class="select-project-btn px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs flex items-center gap-1 transition-all ${
              isSelected
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface'
            }" data-id="${p.id}">
              <span>${isSelected ? 'Selected' : t('common.select', 'Select')}</span>
              <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to cards and buttons
    listContainer.querySelectorAll('[data-id]').forEach(el => {
      el.addEventListener('click', (e) => {
        const id = el.getAttribute('data-id');
        const chosen = SAMPLE_PROJECTS.find(p => p.id === id);
        if (chosen) {
          closeModal();
          document.removeEventListener('keydown', handleKeyDown);
          onSelect(chosen);
        }
      });
    });
  };

  searchInput.addEventListener('input', renderList);
  sectorFilter.addEventListener('change', renderList);

  renderList();
  searchInput.focus();
}

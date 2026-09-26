/**
 * Bhoomi Sakha - Projects Directory View
 * Comprehensive National Land Acquisition Ledger
 */

import { SAMPLE_PROJECTS } from '../data/presets.js';
import {
  getRiskLevel,
  getRiskBadgeClasses,
  getRiskTextColor,
  getRiskLevelLabel,
} from '../utils/risk.js';
import { attachMicToInput } from '../utils/stt.js';
import { renderInfoButton } from '../utils/infoModal.js';
import { getLocalizedStage } from '../utils/localization.js';
import { i18n, t } from '../i18n/index.js';

export function renderProjectsView(container, onNavigateToAssessment, onNavigateToAudit) {
  container.innerHTML = `
    <div class="px-margin-desktop py-space-xl flex flex-col gap-space-lg w-full">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
            <h1 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">${t('projects.title', 'National Projects Directory')}</h1>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            ${t('projects.subtitle', 'Explore active infrastructure corridors, cadastral verification stages, and predicted delay exposures across all state jurisdictions.')}
          </p>
        </div>
        <button class="px-space-md py-2 bg-primary text-on-primary font-label-md rounded-lg shadow-sm hover:bg-on-surface transition-all flex items-center gap-1.5 self-start sm:self-auto" id="newAssessmentBtn" type="button">
          <span class="material-symbols-outlined text-[18px]">add_chart</span>
          <span>${t('projects.newAssessment', 'New Project Assessment')}</span>
        </button>
      </div>

      <!-- Filters & Stats Strip -->
      <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-space-md border border-outline-variant/30">
        <div class="flex flex-wrap items-center gap-space-sm">
          <div class="flex flex-col">
            <div class="flex items-center gap-1">
              <label class="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">${t('projects.filterSector', 'Filter By Sector')}</label>
              ${renderInfoButton('proj_directory_filter_sector')}
            </div>
            <select class="bg-surface-container-low px-space-sm py-1.5 rounded font-label-sm text-label-sm text-on-surface border border-outline-variant/40" id="filterSector">
              <option value="all">${t('projects.allSectors', 'All Sectors (Highway, Rail, Power, Metro)')}</option>
              <option value="Highway">${t('dropdown.project_type.highway', 'Highways & Expressways')}</option>
              <option value="Railway">${t('dropdown.project_type.railway', 'Freight Corridors')}</option>
              <option value="Power">${t('dropdown.project_type.power', 'Renewable Energy')}</option>
              <option value="Metro">${t('dropdown.project_type.metro', 'Urban Mass Transit')}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1">
              <label class="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">${t('projects.filterRisk', 'Risk Tier')}</label>
              ${renderInfoButton('proj_directory_filter_risk')}
            </div>
            <select class="bg-surface-container-low px-space-sm py-1.5 rounded font-label-sm text-label-sm text-on-surface border border-outline-variant/40" id="filterRisk">
              <option value="all">${t('projects.allRisks', 'All Risk Tiers')}</option>
              <option value="CRITICAL">${t('risk.critical', 'Critical')} (≥80%)</option>
              <option value="HIGH">${t('risk.high', 'High')} (60-80%)</option>
              <option value="MEDIUM">${t('risk.medium', 'Medium')} (40-60%)</option>
              <option value="LOW">${t('risk.low', 'Low')} (<40%)</option>
            </select>
          </div>
        </div>

        <div class="relative w-full sm:w-64 flex items-center">
          <input class="w-full pl-8 pr-8 py-1.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="directorySearchInput" placeholder="${t('projects.searchPlaceholder', 'Filter by name, ID, or district...')}" type="text"/>
          <span class="material-symbols-outlined absolute left-2 top-2 text-[16px] text-on-surface-variant pointer-events-none">search</span>
          <div class="absolute right-1 top-0.5" id="directorySearchMicSlot"></div>
        </div>
      </div>

      <!-- Main Directory Table -->
      <div class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/30">
        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/30">
                <th class="py-3 px-space-md font-bold">
                  <div class="flex items-center gap-1">
                    <span>${t('projects.colId', 'Project ID')}</span>
                    ${renderInfoButton('project_id')}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold">
                  <div class="flex items-center gap-1">
                    <span>${t('projects.colName', 'Name & Sector')}</span>
                    ${renderInfoButton('project_name_corridor')}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold">
                  <div class="flex items-center gap-1">
                    <span>${t('projects.colDistrict', 'State & District')}</span>
                    ${renderInfoButton('state_district')}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold">
                  <div class="flex items-center gap-1">
                    <span>${t('projects.colStage', 'Statutory Stage')}</span>
                    ${renderInfoButton('proj_col_stage')}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold font-tabular-data">
                  <div class="flex items-center gap-1">
                    <span>${t('projects.colProgress', 'Acquisition Progress')}</span>
                    ${renderInfoButton('acquisition_progress_pct')}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold font-tabular-data">
                  <div class="flex items-center gap-1">
                    <span>${t('projects.colRisk', 'Predicted Delay Risk')}</span>
                    ${renderInfoButton('delay_probability')}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold">
                  <div class="flex items-center gap-1">
                    <span>${t('projects.colTier', 'Status Tier')}</span>
                    ${renderInfoButton('status_tier_badge')}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold text-right">
                  <div class="flex items-center justify-end gap-1">
                    <span>${t('projects.colAction', 'Actions')}</span>
                    ${renderInfoButton('proj_action_audit')}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-container font-body-sm text-body-sm" id="directoryTableBody">
              <!-- Rendered via JS -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  const tbody = container.querySelector('#directoryTableBody');
  const searchInput = container.querySelector('#directorySearchInput');
  const filterSector = container.querySelector('#filterSector');
  const filterRisk = container.querySelector('#filterRisk');

  const micSlot = container.querySelector('#directorySearchMicSlot');
  if (micSlot && searchInput) {
    const micBtn = attachMicToInput(searchInput, () => i18n.getLanguage());
    if (micBtn) micSlot.appendChild(micBtn);
  }

  const updateTable = () => {
    if (!tbody) return;
    const q = (searchInput?.value || '').toLowerCase().trim();
    const sector = filterSector?.value || 'all';
    const risk = filterRisk?.value || 'all';

    const filtered = SAMPLE_PROJECTS.filter(p => {
      const matchQ = p.id.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || p.district.toLowerCase().includes(q) || p.state.toLowerCase().includes(q);
      const matchSector = sector === 'all' || p.type === sector;
      const matchRisk = risk === 'all' || p.riskLevel === risk;
      return matchQ && matchSector && matchRisk;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="text-center py-6 text-on-surface-variant">${t('projects.noRecords', 'No matching records found in national database.')}</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(p => {
      const rawRisk = p.riskLevel || getRiskLevel(p.delayProbability);
      const riskLabel = getRiskLevelLabel(rawRisk);
      return `
        <tr class="hover:bg-surface-container-low/70 transition-colors">
          <td class="py-space-md px-space-md font-tabular-data font-bold text-on-surface">${p.id}</td>
          <td class="py-space-md px-space-md">
            <div class="flex flex-col">
              <span class="font-semibold text-on-surface">${p.name}</span>
              <span class="text-on-surface-variant font-label-sm text-xs">${p.sector}</span>
            </div>
          </td>
          <td class="py-space-md px-space-md text-on-surface-variant">${p.district}, ${p.state}</td>
          <td class="py-space-md px-space-md">
            <span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-xs">${getLocalizedStage(p.stage)}</span>
          </td>
          <td class="py-space-md px-space-md font-tabular-data">
            <div class="flex items-center gap-2">
              <span class="font-bold text-on-surface">${p.progressPct}%</span>
              <div class="w-16 h-2 rounded-full bg-surface-container-high overflow-hidden">
                <div class="bg-primary h-full" style="width: ${p.progressPct}%"></div>
              </div>
            </div>
          </td>
          <td class="py-space-md px-space-md font-tabular-data font-bold ${getRiskTextColor(rawRisk)}">${p.delayProbability}%</td>
          <td class="py-space-md px-space-md">
            <span class="px-2 py-0.5 rounded-full ${getRiskBadgeClasses(rawRisk)} font-label-sm text-xs font-bold border">${riskLabel}</span>
          </td>
          <td class="py-space-md px-space-md text-right">
            <div class="inline-flex items-center gap-1.5">
              <button class="dir-assess-btn px-2 py-1 bg-primary text-on-primary rounded font-label-sm text-xs font-bold hover:bg-surface-tint transition-colors" data-preset="${p.presetKey || 'medium'}" type="button">
                ${t('projects.assessRisk', 'Assess Risk')}
              </button>
              <button class="dir-audit-btn px-2 py-1 bg-surface-container text-on-surface rounded font-label-sm text-xs font-medium hover:bg-surface-container-high transition-colors" data-id="${p.id}" type="button">
                ${t('projects.deepAudit', 'Deep Audit')}
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.dir-assess-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-preset');
        if (onNavigateToAssessment) onNavigateToAssessment(preset);
      });
    });

    tbody.querySelectorAll('.dir-audit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (onNavigateToAudit) onNavigateToAudit(id);
      });
    });
  };

  if (searchInput) searchInput.addEventListener('input', updateTable);
  if (filterSector) filterSector.addEventListener('change', updateTable);
  if (filterRisk) filterRisk.addEventListener('change', updateTable);

  const newBtn = container.querySelector('#newAssessmentBtn');
  if (newBtn && onNavigateToAssessment) {
    newBtn.addEventListener('click', () => onNavigateToAssessment('medium'));
  }

  updateTable();
}

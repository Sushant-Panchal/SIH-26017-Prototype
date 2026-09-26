/**
 * Bhoomi Sakha - Officer Case Management View
 * Command Center queue for officers to filter, prioritize, assign, and track citizen cases.
 */

import { caseService } from '../api/cases.js';
import { authService } from '../api/auth.js';
import { t } from '../i18n/index.js';
import { attachInfoTooltips } from '../utils/infoModal.js';
import { renderAuthGateway } from '../components/authModal.js';

export async function renderOfficerCasesView(container) {
  const user = authService.getStoredUser();
  if (!user || (user.role !== 'officer' && user.role !== 'super_admin')) {
    renderAuthGateway(container, {
      role: 'officer',
      title: t('auth.officerGatewayTitle', 'Revenue Officer Sign In Required'),
      message: t('auth.officerGatewayMsg', 'Official administrative credentials required to inspect citizen grievance dossiers, verify revenue documents, and manage statutory case queues.'),
      onLoginSuccess: () => renderOfficerCasesView(container),
    });
    return;
  }

  container.innerHTML = `
    <div class="space-y-6 max-w-7xl mx-auto pb-12 animate-fade-in">
      <!-- Breadcrumb & Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-label-sm mb-1">
            <a href="#/dashboard" class="hover:text-primary transition-colors">${t('nav.dashboard', 'Command Center')}</a>
            <span>/</span>
            <span class="text-on-surface font-semibold">${t('nav.cases', 'Case Queue')}</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface">
            ${t('officer.casesHeader', 'Acquisition Grievance & Case Queue')}
          </h1>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            ${t('officer.casesSub', 'Monitor citizen complaints, prioritize high-risk acquisition bottlenecks, assign officers, and audit case resolutions.')}
          </p>
        </div>
      </div>

      <!-- Officer Metrics Summary Row -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-3.5 shadow-sm">
          <span class="text-[11px] font-semibold text-on-surface-variant block uppercase">Total Cases</span>
          <div class="text-2xl font-bold font-tabular-data text-on-surface mt-0.5" id="metricTotalCases">-</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-3.5 shadow-sm">
          <span class="text-[11px] font-semibold text-blue-700 dark:text-blue-300 block uppercase">New / Unassigned</span>
          <div class="text-2xl font-bold font-tabular-data text-blue-700 dark:text-blue-300 mt-0.5" id="metricNewCases">-</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-3.5 shadow-sm">
          <span class="text-[11px] font-semibold text-error block uppercase">High Risk (AI)</span>
          <div class="text-2xl font-bold font-tabular-data text-error mt-0.5" id="metricHighRisk">-</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-3.5 shadow-sm">
          <span class="text-[11px] font-semibold text-amber-700 dark:text-amber-300 block uppercase">Docs Required</span>
          <div class="text-2xl font-bold font-tabular-data text-amber-700 dark:text-amber-300 mt-0.5" id="metricDocsRequired">-</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-3.5 shadow-sm">
          <span class="text-[11px] font-semibold text-purple-700 dark:text-purple-300 block uppercase">Escalated</span>
          <div class="text-2xl font-bold font-tabular-data text-purple-700 dark:text-purple-300 mt-0.5" id="metricEscalated">-</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-3.5 shadow-sm">
          <span class="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 block uppercase">Resolved</span>
          <div class="text-2xl font-bold font-tabular-data text-emerald-700 dark:text-emerald-300 mt-0.5" id="metricResolved">-</div>
        </div>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
        <div class="flex flex-wrap items-center gap-2.5 flex-1">
          <div class="relative min-w-[200px] flex-1 sm:max-w-xs">
            <span class="absolute left-2.5 top-2.5 material-symbols-outlined text-[16px] text-on-surface-variant">search</span>
            <input type="text" id="officerSearchInput" placeholder="Search Case ID or keyword..." class="w-full pl-8 pr-3 py-1.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <select id="filterStatus" class="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface">
            <option value="">All Statuses</option>
            <option value="submitted">Submitted</option>
            <option value="assigned">Assigned</option>
            <option value="under_review">Under Review</option>
            <option value="documents_required">Documents Required</option>
            <option value="investigation">Investigation</option>
            <option value="action_taken">Action Taken</option>
            <option value="escalated">Escalated</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>

          <select id="filterRisk" class="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface">
            <option value="">All Risk Levels</option>
            <option value="HIGH">High / Critical</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
        </div>

        <button id="refreshOfficerCasesBtn" class="px-3 py-1.5 border border-outline-variant/60 rounded-lg hover:bg-surface-container text-on-surface font-semibold flex items-center gap-1 self-end sm:self-auto">
          <span class="material-symbols-outlined text-[16px]">refresh</span>
          <span>Refresh</span>
        </button>
      </div>

      <!-- Case Records Table / Cards -->
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs text-on-surface">
            <thead class="bg-surface-container border-b border-outline-variant/40 font-semibold text-on-surface-variant">
              <tr>
                <th class="py-3 px-4">Case ID</th>
                <th class="py-3 px-4">Complaint Category</th>
                <th class="py-3 px-4">Citizen / Land</th>
                <th class="py-3 px-4">Delay Risk</th>
                <th class="py-3 px-4">Status</th>
                <th class="py-3 px-4">Assigned Officer</th>
                <th class="py-3 px-4">Filed Date</th>
                <th class="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="officerCasesTableBody" class="divide-y divide-outline-variant/30">
              <tr>
                <td colspan="8" class="text-center py-12 text-on-surface-variant">
                  <span class="animate-spin inline-block mr-1 material-symbols-outlined text-[18px]">progress_activity</span>
                  Loading officer queue...
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination Bar -->
        <div class="p-3 bg-surface-container border-t border-outline-variant/30 flex items-center justify-between text-xs text-on-surface-variant">
          <span id="officerPaginationText">Showing 0 of 0 cases</span>
          <div class="flex items-center gap-2">
            <button id="officerPrevPageBtn" class="px-2.5 py-1 border border-outline-variant/50 rounded hover:bg-surface-container-high disabled:opacity-40" disabled>
              Previous
            </button>
            <span id="officerCurrentPageDisplay" class="font-bold font-tabular-data text-on-surface">1</span>
            <button id="officerNextPageBtn" class="px-2.5 py-1 border border-outline-variant/50 rounded hover:bg-surface-container-high disabled:opacity-40" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  attachInfoTooltips(container);

  let currentPage = 1;
  const loadData = () => loadOfficerCasesData(currentPage);

  // Event listeners
  document.getElementById('filterStatus').addEventListener('change', () => { currentPage = 1; loadData(); });
  document.getElementById('filterRisk').addEventListener('change', () => { currentPage = 1; loadData(); });
  document.getElementById('refreshOfficerCasesBtn').addEventListener('click', loadData);

  const searchInput = document.getElementById('officerSearchInput');
  let searchTimeout = null;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => { currentPage = 1; loadData(); }, 300);
  });

  document.getElementById('officerPrevPageBtn').addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; loadData(); }
  });
  document.getElementById('officerNextPageBtn').addEventListener('click', () => {
    currentPage++; loadData();
  });

  loadData();
}

async function loadOfficerCasesData(page = 1) {
  const tableBody = document.getElementById('officerCasesTableBody');
  const pagText = document.getElementById('officerPaginationText');
  const pageDisp = document.getElementById('officerCurrentPageDisplay');
  const prevBtn = document.getElementById('officerPrevPageBtn');
  const nextBtn = document.getElementById('officerNextPageBtn');

  // Load Metrics
  try {
    const summary = await caseService.getMetricsSummary();
    if (document.getElementById('metricTotalCases')) document.getElementById('metricTotalCases').textContent = summary.total_cases;
    if (document.getElementById('metricNewCases')) document.getElementById('metricNewCases').textContent = summary.new_cases;
    if (document.getElementById('metricHighRisk')) document.getElementById('metricHighRisk').textContent = summary.high_risk;
    if (document.getElementById('metricDocsRequired')) document.getElementById('metricDocsRequired').textContent = summary.documents_required;
    if (document.getElementById('metricEscalated')) document.getElementById('metricEscalated').textContent = summary.escalated;
    if (document.getElementById('metricResolved')) document.getElementById('metricResolved').textContent = summary.resolved;
  } catch (_) {}

  // Load Cases
  try {
    const status = document.getElementById('filterStatus')?.value || '';
    const risk = document.getElementById('filterRisk')?.value || '';
    const search = document.getElementById('officerSearchInput')?.value.trim() || '';

    const res = await caseService.listCases({
      status: status || undefined,
      risk_level: risk || undefined,
      search: search || undefined,
      page: page,
      limit: 15,
    });

    if (pagText) pagText.textContent = `Showing ${res.items.length} of ${res.total} cases`;
    if (pageDisp) pageDisp.textContent = `${res.page} / ${res.pages || 1}`;
    if (prevBtn) prevBtn.disabled = res.page <= 1;
    if (nextBtn) nextBtn.disabled = res.page >= res.pages;

    if (res.items.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="8" class="text-center py-12 text-on-surface-variant">
            No cases match the selected filters.
          </td>
        </tr>
      `;
      return;
    }

    const statusBadge = (s) => {
      const map = {
        submitted: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
        received: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
        assigned: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200',
        under_review: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
        documents_required: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200 font-bold',
        investigation: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200',
        action_taken: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200',
        escalated: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 font-bold',
        resolved: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 font-bold',
        closed: 'bg-slate-100 text-slate-800 dark:bg-slate-900/40 dark:text-slate-300',
      };
      return `<span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${map[s] || 'bg-surface-container text-on-surface'}">${s.replace(/_/g, ' ')}</span>`;
    };

    const riskBadge = (prob, level) => {
      if (prob === null || prob === undefined) {
        return `<span class="text-on-surface-variant font-tabular-data">Not Assessed</span>`;
      }
      const pct = Math.round(prob * 100);
      const isHigh = level === 'HIGH' || level === 'CRITICAL' || pct >= 65;
      return `
        <span class="inline-flex items-center gap-1 font-bold font-tabular-data ${isHigh ? 'text-error' : pct >= 35 ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600'}">
          <span>${pct}%</span>
          <span class="text-[10px] font-semibold">(${level || 'EST'})</span>
        </span>
      `;
    };

    tableBody.innerHTML = res.items.map(c => `
      <tr class="hover:bg-surface-container/60 transition-colors">
        <td class="py-3 px-4 font-bold font-tabular-data text-primary whitespace-nowrap">
          <a href="#/officer-case-workspace?id=${encodeURIComponent(c.case_id)}" class="hover:underline flex items-center gap-1">
            <span>${c.case_id}</span>
          </a>
        </td>
        <td class="py-3 px-4 font-semibold text-on-surface whitespace-nowrap">
          ${c.category.replace(/_/g, ' ').toUpperCase()}
        </td>
        <td class="py-3 px-4">
          <div class="font-medium text-on-surface">${c.citizen_id}</div>
          <div class="text-[11px] text-on-surface-variant font-tabular-data">Parcel: ${c.land_id}</div>
        </td>
        <td class="py-3 px-4 whitespace-nowrap">
          ${riskBadge(c.risk_probability, c.risk_level)}
        </td>
        <td class="py-3 px-4 whitespace-nowrap">
          ${statusBadge(c.status)}
        </td>
        <td class="py-3 px-4 text-on-surface-variant whitespace-nowrap">
          ${c.assigned_officer_id ? `<span class="font-medium text-on-surface">${c.assigned_officer_id}</span>` : '<span class="italic text-amber-600">Unassigned</span>'}
        </td>
        <td class="py-3 px-4 font-tabular-data text-on-surface-variant whitespace-nowrap">
          ${new Date(c.created_at).toLocaleDateString()}
        </td>
        <td class="py-3 px-4 text-right whitespace-nowrap">
          <a href="#/officer-case-workspace?id=${encodeURIComponent(c.case_id)}" class="px-2.5 py-1 bg-primary text-on-primary rounded text-xs font-semibold hover:opacity-95 shadow-xs inline-flex items-center gap-1">
            <span>Open</span>
            <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
          </a>
        </td>
      </tr>
    `).join('');

  } catch (err) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-8 text-error">
          Error loading case queue: ${err.message}
        </td>
      </tr>
    `;
  }
}

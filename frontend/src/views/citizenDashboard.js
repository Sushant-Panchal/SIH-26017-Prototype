/**
 * Bhoomi Sakha - Citizen Dashboard View
 * Low-jargon, mobile-first civic portal for landholders.
 * Shows registered land, active cases, pending officer requests, and quick risk checks.
 */

import { caseService } from '../api/cases.js';
import { authService } from '../api/auth.js';
import { t } from '../i18n/index.js';
import { attachInfoTooltips } from '../utils/infoModal.js';

export async function renderCitizenDashboardView(container) {
  // Ensure default demo citizen user if none stored
  let user = authService.getStoredUser();
  if (!user || user.role !== 'citizen') {
    user = {
      user_id: 'USR-CITIZEN-01',
      name: 'Ramesh Patil',
      email: 'ramesh.patil@example.com',
      role: 'citizen',
      district: 'Pune',
    };
  }

  container.innerHTML = `
    <div class="space-y-6 max-w-7xl mx-auto pb-12 animate-fade-in">
      <!-- Citizen Header / Greeting -->
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center justify-center p-1.5 rounded-lg bg-primary-container text-on-primary">
              <span class="material-symbols-outlined text-[22px]">person</span>
            </span>
            <span class="text-xs font-semibold uppercase tracking-wider text-primary font-label-sm">
              ${t('citizen.portalTitle', 'Citizen Land Rights & Case Portal')}
            </span>
          </div>
          <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface mt-1">
            ${t('citizen.welcome', 'Welcome')}, ${user.name}
          </h1>
          <p class="text-sm font-body-sm text-on-surface-variant mt-0.5">
            ${t('citizen.subtitle', 'Track your acquisition status, register land holdings, calculate delay risks, and manage grievances directly with authorities.')}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2.5">
          <a href="#/citizen-lands" class="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-xs font-semibold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[18px]">add_location_alt</span>
            <span>${t('citizen.addLandBtn', 'Add Land')}</span>
          </a>
          <a href="#/citizen-complaint" class="px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-xs font-semibold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[18px]">report_problem</span>
            <span>${t('citizen.fileGrievanceBtn', 'File Complaint')}</span>
          </a>
        </div>
      </div>

      <!-- Action Required Banner (Dynamic) -->
      <div id="citizenActionBanner" class="hidden"></div>

      <!-- Overview Metrics Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm">
          <div class="flex items-center justify-between text-on-surface-variant mb-1">
            <span class="text-xs font-label-sm">${t('citizen.statLands', 'Registered Lands')}</span>
            <span class="material-symbols-outlined text-[18px] text-primary">landscape</span>
          </div>
          <div class="text-2xl font-bold font-tabular-data text-on-surface" id="statLandsCount">-</div>
          <div class="text-[11px] text-on-surface-variant mt-1">${t('citizen.statLandsSub', 'Cadastral parcels')}</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm">
          <div class="flex items-center justify-between text-on-surface-variant mb-1">
            <span class="text-xs font-label-sm">${t('citizen.statCases', 'Active Cases')}</span>
            <span class="material-symbols-outlined text-[18px] text-secondary">gavel</span>
          </div>
          <div class="text-2xl font-bold font-tabular-data text-on-surface" id="statCasesCount">-</div>
          <div class="text-[11px] text-on-surface-variant mt-1">${t('citizen.statCasesSub', 'In process / review')}</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm">
          <div class="flex items-center justify-between text-on-surface-variant mb-1">
            <span class="text-xs font-label-sm">${t('citizen.statDocsPending', 'Pending Actions')}</span>
            <span class="material-symbols-outlined text-[18px] text-amber-500">pending_actions</span>
          </div>
          <div class="text-2xl font-bold font-tabular-data text-on-surface" id="statPendingActionsCount">-</div>
          <div class="text-[11px] text-on-surface-variant mt-1">${t('citizen.statDocsSub', 'Officer requests')}</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm">
          <div class="flex items-center justify-between text-on-surface-variant mb-1">
            <span class="text-xs font-label-sm">${t('citizen.statRisk', 'Latest Risk')}</span>
            <span class="material-symbols-outlined text-[18px] text-emerald-500">analytics</span>
          </div>
          <div class="text-2xl font-bold text-on-surface" id="statLatestRisk">-</div>
          <div class="text-[11px] text-on-surface-variant mt-1">${t('citizen.statRiskSub', 'Delay probability')}</div>
        </div>
      </div>

      <!-- Quick Action Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <a href="#/citizen-lands" class="group bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/60 rounded-xl p-5 transition-all shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <span class="material-symbols-outlined">folder_shared</span>
            </div>
            <h3 class="font-headline-sm text-base font-bold text-on-surface group-hover:text-primary transition-colors">
              ${t('citizen.actionMyLandTitle', 'My Land Records')}
            </h3>
            <p class="text-xs text-on-surface-variant mt-1 line-clamp-2">
              ${t('citizen.actionMyLandDesc', 'View registered survey numbers, area, village details, and government acquisition status.')}
            </p>
          </div>
          <div class="flex items-center gap-1 text-xs text-primary font-semibold mt-4">
            <span>${t('citizen.viewRecords', 'View Holdings')}</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </a>

        <a href="#/citizen-risk" class="group bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/60 rounded-xl p-5 transition-all shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <span class="material-symbols-outlined">speed</span>
            </div>
            <h3 class="font-headline-sm text-base font-bold text-on-surface group-hover:text-primary transition-colors">
              ${t('citizen.actionRiskTitle', 'Check Delay Risk')}
            </h3>
            <p class="text-xs text-on-surface-variant mt-1 line-clamp-2">
              ${t('citizen.actionRiskDesc', 'Use AI predictive analysis to estimate acquisition delay risks and compensation timeline.')}
            </p>
          </div>
          <div class="flex items-center gap-1 text-xs text-primary font-semibold mt-4">
            <span>${t('citizen.runEstimate', 'Run AI Assessment')}</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </a>

        <a href="#/citizen-complaint" class="group bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/60 rounded-xl p-5 transition-all shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <span class="material-symbols-outlined">rate_review</span>
            </div>
            <h3 class="font-headline-sm text-base font-bold text-on-surface group-hover:text-primary transition-colors">
              ${t('citizen.actionComplaintTitle', 'File Complaint')}
            </h3>
            <p class="text-xs text-on-surface-variant mt-1 line-clamp-2">
              ${t('citizen.actionComplaintDesc', 'Lodge grievances for pending compensation, measurement errors, notice issues, or mutation.')}
            </p>
          </div>
          <div class="flex items-center gap-1 text-xs text-primary font-semibold mt-4">
            <span>${t('citizen.registerGrievance', 'Lodge Grievance')}</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </a>

        <a href="#/citizen-cases" class="group bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/60 rounded-xl p-5 transition-all shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <span class="material-symbols-outlined">track_changes</span>
            </div>
            <h3 class="font-headline-sm text-base font-bold text-on-surface group-hover:text-primary transition-colors">
              ${t('citizen.actionTrackingTitle', 'Track My Cases')}
            </h3>
            <p class="text-xs text-on-surface-variant mt-1 line-clamp-2">
              ${t('citizen.actionTrackingDesc', 'Real-time case progress, official officer actions, verified documents, and resolution history.')}
            </p>
          </div>
          <div class="flex items-center gap-1 text-xs text-primary font-semibold mt-4">
            <span>${t('citizen.viewCases', 'Open Tracker')}</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </a>
      </div>

      <!-- Recent Cases and Activity Section -->
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">history_edu</span>
            <h2 class="text-lg font-headline-sm font-bold text-on-surface">
              ${t('citizen.recentCasesTitle', 'My Recent Cases & Grievances')}
            </h2>
          </div>
          <a href="#/citizen-cases" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            <span>${t('citizen.seeAllCases', 'View All Cases')}</span>
            <span class="material-symbols-outlined text-[14px]">chevron_right</span>
          </a>
        </div>

        <div id="citizenRecentCasesList" class="space-y-3">
          <div class="py-8 text-center text-on-surface-variant text-sm">
            <span class="animate-spin inline-block mr-2 material-symbols-outlined text-[18px]">progress_activity</span>
            ${t('common.loading', 'Loading case records...')}
          </div>
        </div>
      </div>
    </div>
  `;

  attachInfoTooltips(container);

  // Load real data from MongoDB
  loadCitizenDashboardData(user.user_id);
}

async function loadCitizenDashboardData(userId) {
  const landsCountEl = document.getElementById('statLandsCount');
  const casesCountEl = document.getElementById('statCasesCount');
  const pendingActionsEl = document.getElementById('statPendingActionsCount');
  const latestRiskEl = document.getElementById('statLatestRisk');
  const casesListEl = document.getElementById('citizenRecentCasesList');
  const bannerEl = document.getElementById('citizenActionBanner');

  try {
    // 1. Fetch user lands
    let lands = [];
    try {
      lands = await caseService.getUserLands(userId);
    } catch (_) {
      lands = [];
    }
    if (landsCountEl) landsCountEl.textContent = lands.length;

    // 2. Fetch user cases
    let cases = [];
    try {
      cases = await caseService.getUserCases(userId);
    } catch (_) {
      cases = [];
    }

    if (casesCountEl) {
      const activeCount = cases.filter(c => !['resolved', 'closed', 'rejected'].includes(c.status)).length;
      casesCountEl.textContent = activeCount;
    }

    // 3. Check for pending document requests
    const docReqCases = cases.filter(c => c.status === 'documents_required');
    if (pendingActionsEl) pendingActionsEl.textContent = docReqCases.length;

    if (docReqCases.length > 0 && bannerEl) {
      bannerEl.className = 'bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-amber-900 dark:text-amber-200';
      bannerEl.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[24px]">notification_important</span>
          <div>
            <div class="font-bold text-sm">${t('citizen.docRequiredBannerTitle', 'Action Required: Supporting Document Requested')}</div>
            <div class="text-xs opacity-90">${t('citizen.docRequiredBannerDesc', 'An officer has requested documents for case')} <strong>${docReqCases[0].case_id}</strong>.</div>
          </div>
        </div>
        <a href="#/citizen-cases?id=${encodeURIComponent(docReqCases[0].case_id)}" class="px-3.5 py-1.5 bg-amber-600 text-white font-semibold text-xs rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap shadow-sm">
          ${t('citizen.uploadNowBtn', 'Respond & Upload')}
        </a>
      `;
    }

    // 4. Determine latest risk indicator
    if (latestRiskEl) {
      const assessed = cases.find(c => c.risk_probability !== null && c.risk_probability !== undefined);
      if (assessed) {
        const pct = Math.round(assessed.risk_probability * 100);
        latestRiskEl.textContent = `${pct}% (${assessed.risk_level || 'EST'})`;
        latestRiskEl.className = `text-2xl font-bold font-tabular-data ${pct >= 65 ? 'text-error' : pct >= 35 ? 'text-amber-500' : 'text-emerald-600'}`;
      } else {
        latestRiskEl.textContent = 'None';
        latestRiskEl.className = 'text-2xl font-bold text-on-surface-variant';
      }
    }

    // 5. Render recent cases list
    if (casesListEl) {
      if (cases.length === 0) {
        casesListEl.innerHTML = `
          <div class="text-center py-8 text-on-surface-variant">
            <span class="material-symbols-outlined text-[36px] opacity-40">assignment_turned_in</span>
            <div class="font-medium text-sm mt-1">${t('citizen.noCases', 'No active cases filed yet.')}</div>
            <p class="text-xs opacity-80 mt-0.5">${t('citizen.noCasesSub', 'If you have an issue with land compensation or survey measurement, you can file a complaint directly.')}</p>
            <a href="#/citizen-complaint" class="inline-block mt-3 px-3 py-1.5 bg-primary text-on-primary text-xs font-semibold rounded-lg hover:opacity-95">
              ${t('citizen.fileGrievanceBtn', 'File First Complaint')}
            </a>
          </div>
        `;
      } else {
        const statusColors = {
          submitted: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
          received: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
          assigned: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200',
          under_review: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
          documents_required: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200 animate-pulse',
          investigation: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200',
          action_taken: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200',
          escalated: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200',
          resolved: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
          closed: 'bg-slate-100 text-slate-800 dark:bg-slate-900/40 dark:text-slate-300',
          rejected: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-300',
        };

        casesListEl.innerHTML = cases.slice(0, 5).map(c => `
          <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-primary/40 transition-colors">
            <div class="flex items-start gap-3">
              <span class="p-2 rounded bg-surface-container text-on-surface-variant shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-[20px]">description</span>
              </span>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-tabular-data font-bold text-sm text-on-surface">${c.case_id}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold uppercase ${statusColors[c.status] || 'bg-surface-container text-on-surface'}">
                    ${c.status.replace('_', ' ')}
                  </span>
                  ${c.priority === 'high' || c.priority === 'critical' ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-error/10 text-error uppercase">${c.priority}</span>` : ''}
                </div>
                <div class="text-xs text-on-surface font-medium mt-1">
                  ${c.category.replace(/_/g, ' ').toUpperCase()}
                </div>
                <div class="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">
                  ${c.description}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
              <a href="#/citizen-cases?id=${encodeURIComponent(c.case_id)}" class="px-3 py-1.5 rounded-lg border border-outline-variant/60 hover:bg-surface-container text-xs font-semibold text-primary transition-colors flex items-center gap-1">
                <span>${t('citizen.trackBtn', 'Track Case')}</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        `).join('');
      }
    }
  } catch (err) {
    console.error('[CitizenDashboard] Error loading dashboard data:', err);
    if (casesListEl) {
      casesListEl.innerHTML = `
        <div class="text-center py-6 text-error text-xs">
          ${t('common.errorLoading', 'Failed to load case data. Please try again.')}
        </div>
      `;
    }
  }
}

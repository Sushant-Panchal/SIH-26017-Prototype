/**
 * Bhoomi Sakha - Dashboard View
 * Stitch Land Acquisition Intelligence Command Center
 */

import { SAMPLE_PROJECTS } from '../data/presets.js';
import {
  getRiskLevel,
  getRiskBadgeClasses,
  getRiskTextColor,
} from '../utils/risk.js';

export function renderDashboardView(container, onNavigateToAssessment, onNavigateToAudit) {
  container.innerHTML = `
    <div class="flex flex-col w-full">
      <!-- Ambient Backdrop Lighting -->
      <div class="relative w-full overflow-hidden">
        <div class="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
        <div class="absolute top-48 left-1/3 w-80 h-80 rounded-full bg-surface-tint/5 blur-2xl pointer-events-none"></div>
        
        <div class="px-margin-desktop py-space-xl flex flex-col gap-space-xl">
          <!-- Screen Header Area -->
          <div class="flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg">
            <div class="flex flex-col gap-space-xs max-w-3xl">
              <div class="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <span class="inline-block w-2 h-2 rounded-full bg-secondary-container"></span>
                <span>National Infrastructure Pipeline • MoRTH / MoR Analytics</span>
              </div>
              <h1 class="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                Land Acquisition Intelligence
              </h1>
              <p class="font-body-lg text-body-lg text-on-surface-variant">
                Monitor project progress, detect emerging delay risks, and prioritize intervention across critical national infrastructure corridors.
              </p>
            </div>
            
            <!-- Quick Actions -->
            <div class="flex flex-wrap items-center gap-space-sm">
              <button class="flex items-center gap-space-xs px-space-md py-2.5 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-on-surface transition-all duration-150 active:scale-[0.98]" id="nationalScanBtn" type="button">
                <span class="material-symbols-outlined text-[18px] text-secondary-container">radar</span>
                <span>Run National Risk Scan</span>
              </button>
              <button class="flex items-center gap-space-xs px-space-md py-2.5 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-surface-container-low transition-all duration-150 border border-outline-variant/30" id="openAssessmentCtaBtn" type="button">
                <span class="material-symbols-outlined text-[18px] text-secondary">tune</span>
                <span>Launch Assessment Cockpit</span>
              </button>
            </div>
          </div>

          <!-- Top Governance KPI Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
            
            <!-- Metric 1: Total Projects -->
            <div class="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-outline-variant/30">
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-space-xs">
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Total Projects Monitored</span>
                  <span class="font-headline-lg text-headline-lg font-bold text-on-surface font-tabular-data">142 Projects</span>
                </div>
                <div class="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                  <span class="material-symbols-outlined text-[22px]">account_tree</span>
                </div>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40"></span>
                <span>46 National Highways, 38 Freight, 58 Energy &amp; Urban</span>
              </div>
            </div>

            <!-- Metric 2: High / Critical Risk -->
            <div class="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow overflow-hidden border border-outline-variant/30">
              <div class="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-space-xs">
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">High / Critical Risk</span>
                  <div class="flex items-baseline gap-space-xs">
                    <span class="font-headline-lg text-headline-lg font-bold text-on-surface font-tabular-data">29 Projects</span>
                    <span class="font-label-sm text-label-sm text-secondary font-semibold font-tabular-data">(20.4%)</span>
                  </div>
                </div>
                <div class="w-10 h-10 rounded-lg bg-error-container/40 flex items-center justify-center text-error">
                  <span class="material-symbols-outlined text-[22px]" style="font-variation-settings: 'FILL' 1;">warning</span>
                </div>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-secondary-container font-label-sm text-label-sm font-semibold">
                <span class="material-symbols-outlined text-[14px]">trending_up</span>
                <span>+3 from last sprint • 18 High, 11 Critical</span>
              </div>
            </div>

            <!-- Metric 3: Requiring Intervention -->
            <div class="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-outline-variant/30">
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-space-xs">
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Requiring Intervention</span>
                  <span class="font-headline-lg text-headline-lg font-bold text-on-surface font-tabular-data">14 Immediate Actions</span>
                </div>
                <div class="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed">
                  <span class="material-symbols-outlined text-[22px]">notification_important</span>
                </div>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
                <span class="w-2 h-2 rounded-full bg-secondary-container"></span>
                <span>8 Document Bottlenecks, 6 Compensation Escrows</span>
              </div>
            </div>

            <!-- Metric 4: Average Delay Risk -->
            <div class="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-outline-variant/30">
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-space-xs">
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Average Delay Risk</span>
                  <div class="flex items-baseline gap-space-xs">
                    <span class="font-headline-lg text-headline-lg font-bold text-on-surface font-tabular-data">36.8%</span>
                    <span class="font-label-sm text-label-sm text-on-surface-variant">Model CI 95%</span>
                  </div>
                </div>
                <div class="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                  <span class="material-symbols-outlined text-[22px]">speed</span>
                </div>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span class="text-on-surface font-medium">Low-Medium Zone</span>
                <span class="font-tabular-data text-label-sm text-on-surface-variant">Baseline variance -2.4% vs state avg</span>
              </div>
            </div>

          </div>

          <!-- Main Grid Section: Risk Overview & Priority Projects -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            
            <!-- Left 5 cols: Risk Overview & Distribution -->
            <div class="lg:col-span-5 flex flex-col gap-space-lg">
              
              <!-- Card: Segmented Distribution -->
              <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md border border-outline-variant/30">
                <div class="flex items-center justify-between">
                  <div class="flex flex-col">
                    <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Risk Overview &amp; Distribution</h3>
                    <span class="font-body-sm text-body-sm text-on-surface-variant">National Portfolio breakdown (N=142)</span>
                  </div>
                  <span class="font-tabular-data font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-semibold">
                    Live Model v2.4
                  </span>
                </div>

                <!-- Segmented Stacked Bar Chart -->
                <div class="w-full flex flex-col gap-space-xs pt-space-xs">
                  <div class="h-4 w-full rounded-full overflow-hidden flex bg-surface-container-high">
                    <div class="h-full bg-error" style="width: 8%" title="Critical: 11 (8%)"></div>
                    <div class="h-full bg-secondary-container" style="width: 13%" title="High: 18 (13%)"></div>
                    <div class="h-full bg-secondary-fixed-dim" style="width: 34%" title="Medium: 48 (34%)"></div>
                    <div class="h-full bg-primary-fixed-dim" style="width: 45%" title="Low: 65 (45%)"></div>
                  </div>
                  <div class="flex justify-between font-label-sm text-label-sm text-on-surface-variant px-0.5 font-tabular-data">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                <!-- Interactive Risk Category Pill Grid -->
                <div class="grid grid-cols-2 gap-space-sm pt-space-xs">
                  <!-- Critical -->
                  <div class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-0.5 hover:bg-surface-container transition-colors border border-outline-variant/20">
                    <div class="flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-error"></span>
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">CRITICAL</span>
                    </div>
                    <div class="flex items-baseline justify-between mt-1">
                      <span class="font-headline-sm text-headline-sm font-bold text-on-surface font-tabular-data">11</span>
                      <span class="font-tabular-data text-label-sm text-error font-semibold">8%</span>
                    </div>
                    <span class="font-body-sm text-[11px] text-on-surface-variant">Action plan mandatory</span>
                  </div>
                  <!-- High -->
                  <div class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-0.5 hover:bg-surface-container transition-colors border border-outline-variant/20">
                    <div class="flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">HIGH</span>
                    </div>
                    <div class="flex items-baseline justify-between mt-1">
                      <span class="font-headline-sm text-headline-sm font-bold text-on-surface font-tabular-data">18</span>
                      <span class="font-tabular-data text-label-sm text-secondary font-semibold">13%</span>
                    </div>
                    <span class="font-body-sm text-[11px] text-on-surface-variant">Stagnation watchlist</span>
                  </div>
                  <!-- Medium -->
                  <div class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-0.5 hover:bg-surface-container transition-colors border border-outline-variant/20">
                    <div class="flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim"></span>
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">MEDIUM</span>
                    </div>
                    <div class="flex items-baseline justify-between mt-1">
                      <span class="font-headline-sm text-headline-sm font-bold text-on-surface font-tabular-data">48</span>
                      <span class="font-tabular-data text-label-sm text-on-surface-variant font-semibold">34%</span>
                    </div>
                    <span class="font-body-sm text-[11px] text-on-surface-variant">Statutory tracking</span>
                  </div>
                  <!-- Low -->
                  <div class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-0.5 hover:bg-surface-container transition-colors border border-outline-variant/20">
                    <div class="flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim"></span>
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">LOW</span>
                    </div>
                    <div class="flex items-baseline justify-between mt-1">
                      <span class="font-headline-sm text-headline-sm font-bold text-on-surface font-tabular-data">65</span>
                      <span class="font-tabular-data text-label-sm text-on-surface-variant font-semibold">45%</span>
                    </div>
                    <span class="font-body-sm text-[11px] text-on-surface-variant">Nominal progress</span>
                  </div>
                </div>

                <!-- Key Risk Drivers Breakdown -->
                <div class="pt-space-sm flex flex-col gap-space-sm border-t border-surface-container-high">
                  <div class="flex items-center justify-between">
                    <span class="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">Key Risk Drivers</span>
                    <span class="font-label-sm text-label-sm text-on-surface-variant">Root Cause Cluster</span>
                  </div>
                  <!-- Driver Progress Bars -->
                  <div class="flex flex-col gap-space-xs">
                    <div class="flex flex-col gap-1">
                      <div class="flex justify-between font-label-sm text-label-sm">
                        <span class="text-on-surface font-medium">Documentation Backlog</span>
                        <span class="font-tabular-data font-bold text-on-surface">38%</span>
                      </div>
                      <div class="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                        <div class="h-full bg-on-surface" style="width: 38%"></div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-1">
                      <div class="flex justify-between font-label-sm text-label-sm">
                        <span class="text-on-surface font-medium">Possession Delays</span>
                        <span class="font-tabular-data font-bold text-on-surface">27%</span>
                      </div>
                      <div class="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                        <div class="h-full bg-secondary-container" style="width: 27%"></div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-1">
                      <div class="flex justify-between font-label-sm text-label-sm">
                        <span class="text-on-surface font-medium">Court Disputes &amp; Injunctions</span>
                        <span class="font-tabular-data font-bold text-on-surface">19%</span>
                      </div>
                      <div class="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                        <div class="h-full bg-secondary" style="width: 19%"></div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-1">
                      <div class="flex justify-between font-label-sm text-label-sm">
                        <span class="text-on-surface font-medium">Approval Stalls (Inter-Agency)</span>
                        <span class="font-tabular-data font-bold text-on-surface">16%</span>
                      </div>
                      <div class="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                        <div class="h-full bg-outline" style="width: 16%"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <!-- AI Predictive Triangulation Alert -->
              <div class="bg-primary-container text-on-primary rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs relative overflow-hidden">
                <div class="flex items-center gap-space-xs text-secondary-container">
                  <span class="material-symbols-outlined text-[20px]">psychology</span>
                  <span class="font-label-md text-label-md font-bold uppercase tracking-wider">Predictive Triangulation Alert</span>
                </div>
                <p class="font-body-md text-body-md text-on-primary/90">
                  Corridors passing through industrial agro-zones face an 82% likelihood of Section 15 objection escalation within 14 days without active district tehsildar hearings.
                </p>
                <div class="pt-space-xs flex items-center justify-between">
                  <span class="font-label-sm text-label-sm text-primary-fixed-dim">Model Confidence: 91.4% (SIH Model XG-26)</span>
                  <button class="px-space-sm py-1 bg-surface-container-lowest text-on-surface font-label-sm text-label-sm rounded hover:bg-surface-container transition-colors font-semibold" id="jumpToAssessmentBtn" type="button">
                    Assess Impact
                  </button>
                </div>
              </div>

            </div>

            <!-- Right 7 cols: Priority Projects Requiring Administrative Oversight -->
            <div class="lg:col-span-7 flex flex-col gap-space-md">
              <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md border border-outline-variant/30">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                  <div class="flex flex-col">
                    <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Priority Projects Requiring Administrative Oversight
                    </h3>
                    <span class="font-body-sm text-body-sm text-on-surface-variant">
                      Cadastral escalation ledger sorted by delay probability
                    </span>
                  </div>
                  <!-- Quick Table Filters -->
                  <div class="flex items-center gap-space-xs">
                    <div class="relative">
                      <input class="pl-7 pr-space-sm py-1 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface w-44 border border-outline-variant/40" id="projectSearchInput" placeholder="Search project or ID..." type="text"/>
                      <span class="material-symbols-outlined absolute left-1.5 top-1.5 text-[16px] text-on-surface-variant">search</span>
                    </div>
                  </div>
                </div>

                <!-- High-Density Civic Government Data Table -->
                <div class="overflow-x-auto w-full">
                  <table class="w-full text-left border-collapse" id="priorityProjectsTable">
                    <thead>
                      <tr class="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/30">
                        <th class="py-2.5 px-space-sm font-bold">Project ID</th>
                        <th class="py-2.5 px-space-sm font-bold">Name &amp; Sector</th>
                        <th class="py-2.5 px-space-sm font-bold">District / State</th>
                        <th class="py-2.5 px-space-sm font-bold font-tabular-data">Progress</th>
                        <th class="py-2.5 px-space-sm font-bold font-tabular-data">Delay Risk</th>
                        <th class="py-2.5 px-space-sm font-bold">Tier</th>
                        <th class="py-2.5 px-space-sm font-bold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-surface-container font-body-sm text-body-sm" id="projectsTableBody">
                      ${renderProjectRows(SAMPLE_PROJECTS)}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  `;

  // Attach search filter
  const searchInput = container.querySelector('#projectSearchInput');
  const tbody = container.querySelector('#projectsTableBody');
  if (searchInput && tbody) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = SAMPLE_PROJECTS.filter(p => 
        p.id.toLowerCase().includes(q) || 
        p.name.toLowerCase().includes(q) || 
        p.district.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q)
      );
      tbody.innerHTML = renderProjectRows(filtered);
      attachRowEvents(container, onNavigateToAssessment, onNavigateToAudit);
    });
  }

  // Action button clicks
  const openCta = container.querySelector('#openAssessmentCtaBtn');
  const jumpBtn = container.querySelector('#jumpToAssessmentBtn');
  if (openCta && onNavigateToAssessment) openCta.addEventListener('click', () => onNavigateToAssessment('medium'));
  if (jumpBtn && onNavigateToAssessment) jumpBtn.addEventListener('click', () => onNavigateToAssessment('high'));

  attachRowEvents(container, onNavigateToAssessment, onNavigateToAudit);
}

function renderProjectRows(projects) {
  if (projects.length === 0) {
    return `<tr><td colspan="7" class="text-center py-4 text-on-surface-variant">No matching projects found.</td></tr>`;
  }
  return projects.map(project => `
    <tr class="hover:bg-surface-container-low/70 transition-colors group">
      <td class="py-space-sm px-space-sm font-tabular-data font-bold text-on-surface">
        ${project.id}
      </td>
      <td class="py-space-sm px-space-sm">
        <div class="flex flex-col">
          <span class="font-semibold text-on-surface">${project.name}</span>
          <span class="text-on-surface-variant font-label-sm text-label-sm">${project.sector}</span>
        </div>
      </td>
      <td class="py-space-sm px-space-sm text-on-surface-variant">
        ${project.district}, ${project.state}
      </td>
      <td class="py-space-sm px-space-sm font-tabular-data">
        <div class="flex items-center gap-space-xs">
          <span class="font-medium text-on-surface">${project.progressPct}%</span>
          <div class="w-12 h-1.5 rounded-full bg-surface-container-high overflow-hidden">
            <div class="h-full bg-on-surface" style="width: ${project.progressPct}%"></div>
          </div>
        </div>
      </td>
      <td class="py-space-sm px-space-sm font-tabular-data font-bold ${getRiskTextColor(project.riskLevel || getRiskLevel(project.delayProbability))}">
        ${project.delayProbability}%
      </td>
      <td class="py-space-sm px-space-sm">
        <span class="px-2 py-0.5 rounded-full ${getRiskBadgeClasses(project.riskLevel || getRiskLevel(project.delayProbability))} font-label-sm text-label-sm font-bold inline-flex items-center gap-1 border">
          <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
          ${project.riskLevel || getRiskLevel(project.delayProbability)}
        </span>
      </td>
      <td class="py-space-sm px-space-sm text-right">
        <div class="inline-flex items-center gap-1">
          <button class="assess-project-btn px-space-xs py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded hover:bg-surface-tint transition-colors font-semibold" data-preset="${project.presetKey || 'medium'}" type="button">
            Assess
          </button>
          <button class="audit-project-btn px-space-xs py-1 bg-surface-container text-on-surface font-label-sm text-label-sm rounded hover:bg-surface-container-high transition-colors font-medium" data-id="${project.id}" type="button">
            Audit
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function attachRowEvents(container, onNavigateToAssessment, onNavigateToAudit) {
  container.querySelectorAll('.assess-project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-preset') || 'medium';
      if (onNavigateToAssessment) onNavigateToAssessment(preset);
    });
  });

  container.querySelectorAll('.audit-project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      if (onNavigateToAudit) onNavigateToAudit(id);
    });
  });
}

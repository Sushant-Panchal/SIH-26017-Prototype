(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const y={low:{id:"preset-low",name:"NH-44 Bypass Ph. 2",subtitle:"Low Delay • Clear Title",tag:"LOW RISK",values:{project_type:"Highway",land_type:"Agricultural",priority:"Normal",current_stage:"Notification",complexity_score:22.4,total_parcels:350,affected_families:48,land_area_hectares:65.2,planned_duration_days:420,days_since_notification:45,days_elapsed:45,days_in_current_stage:45,planned_stage_duration_days:60,acquisition_progress_pct:88.5,acquisition_velocity_pct_per_30d:14.8,parcels_pending:40,parcels_acquired:310,possession_pending_parcels:25,possession_progress_pct:92.8,documents_required:350,documents_pending:18,documents_verified:332,documentation_completion_pct:94.9,compensation_pending_cases:12,compensation_pending_amount:3.5,compensation_completion_pct:96.2,avg_compensation_delay_days:8,approvals_pending:1,overdue_approvals:0,avg_approval_delay_days:4,pending_objections:1,active_legal_disputes:0,ownership_disputes:0,court_stay_cases:0,rr_pending_cases:4,rr_completion_pct:94,schedule_variance_days:-12,milestones_overdue:0,pending_stakeholder_actions:2,avg_stakeholder_response_days:5.2,stakeholder_responsiveness_score:8.9,historical_avg_delay_days:14}},medium:{id:"preset-medium",name:"Western Freight Corridor",subtitle:"Baseline Model • FY26-Q1",tag:"MEDIUM RISK",values:{project_type:"Highway",land_type:"Agricultural",priority:"Normal",current_stage:"Notification",complexity_score:47.7,total_parcels:233,affected_families:113,land_area_hectares:132.47,planned_duration_days:607,days_since_notification:30,days_elapsed:30,days_in_current_stage:30,planned_stage_duration_days:26,acquisition_progress_pct:6.01,acquisition_velocity_pct_per_30d:6.13,parcels_pending:219,parcels_acquired:14,possession_pending_parcels:218,possession_progress_pct:6.47,documents_required:241,documents_pending:232,documents_verified:9,documentation_completion_pct:3.73,compensation_pending_cases:105,compensation_pending_amount:10.95,compensation_completion_pct:6.2,avg_compensation_delay_days:52.68,approvals_pending:5,overdue_approvals:2,avg_approval_delay_days:41.04,pending_objections:0,active_legal_disputes:0,ownership_disputes:0,court_stay_cases:0,rr_pending_cases:47,rr_completion_pct:4.08,schedule_variance_days:-7.19,milestones_overdue:1,pending_stakeholder_actions:7,avg_stakeholder_response_days:28.59,stakeholder_responsiveness_score:5.14,historical_avg_delay_days:100.8}},high:{id:"preset-high",name:"Docs Backlog Ph. 1",subtitle:"High Bottleneck • Stagnation Watchlist",tag:"HIGH RISK",values:{project_type:"Railway",land_type:"Commercial",priority:"Critical",current_stage:"Survey",complexity_score:68.5,total_parcels:1120,affected_families:420,land_area_hectares:210.5,planned_duration_days:900,days_since_notification:180,days_elapsed:180,days_in_current_stage:90,planned_stage_duration_days:60,acquisition_progress_pct:35,acquisition_velocity_pct_per_30d:2.5,parcels_pending:728,parcels_acquired:392,possession_pending_parcels:610,possession_progress_pct:28,documents_required:1120,documents_pending:580,documents_verified:540,documentation_completion_pct:48.2,compensation_pending_cases:240,compensation_pending_amount:42.6,compensation_completion_pct:38.5,avg_compensation_delay_days:72,approvals_pending:6,overdue_approvals:3,avg_approval_delay_days:65,pending_objections:18,active_legal_disputes:5,ownership_disputes:4,court_stay_cases:1,rr_pending_cases:85,rr_completion_pct:32,schedule_variance_days:54,milestones_overdue:3,pending_stakeholder_actions:9,avg_stakeholder_response_days:38,stakeholder_responsiveness_score:3.8,historical_avg_delay_days:95}},critical:{id:"preset-critical",name:"Court Injunction HC",subtitle:"Critical Hold • High Court Stay Active",tag:"CRITICAL RISK",values:{project_type:"Metro",land_type:"Industrial",priority:"Critical",current_stage:"Compensation",complexity_score:84,total_parcels:850,affected_families:610,land_area_hectares:184.2,planned_duration_days:1200,days_since_notification:360,days_elapsed:360,days_in_current_stage:180,planned_stage_duration_days:90,acquisition_progress_pct:22,acquisition_velocity_pct_per_30d:.8,parcels_pending:663,parcels_acquired:187,possession_pending_parcels:620,possession_progress_pct:18,documents_required:850,documents_pending:640,documents_verified:210,documentation_completion_pct:24.7,compensation_pending_cases:380,compensation_pending_amount:85.4,compensation_completion_pct:18,avg_compensation_delay_days:118,approvals_pending:9,overdue_approvals:6,avg_approval_delay_days:98,pending_objections:42,active_legal_disputes:14,ownership_disputes:8,court_stay_cases:4,rr_pending_cases:140,rr_completion_pct:14,schedule_variance_days:145,milestones_overdue:6,pending_stakeholder_actions:14,avg_stakeholder_response_days:52,stakeholder_responsiveness_score:2.1,historical_avg_delay_days:135}}},h=[{id:"BF-NH-2024-09",name:"Delhi-Amritsar Expressway (Pkg 4)",type:"Highway",sector:"National Highway",district:"Ludhiana",state:"Punjab",stage:"Sec 19 Declaration",progressPct:42,delayProbability:84.6,riskLevel:"CRITICAL",badgeClass:"bg-error-container text-on-error-container",presetKey:"critical"},{id:"BF-RL-2023-14",name:"Western Dedicated Freight Corridor",type:"Railway",sector:"Freight Rail Corridor",district:"Vadodara",state:"Gujarat",stage:"Compensation Award",progressPct:68,delayProbability:71.2,riskLevel:"HIGH",badgeClass:"bg-secondary-fixed text-on-secondary-fixed-variant",presetKey:"high"},{id:"BF-EN-2024-03",name:"Bhadla Solar Ultra Park Ext",type:"Power",sector:"Renewable Energy Grid",district:"Jodhpur",state:"Rajasthan",stage:"Joint Survey 3A",progressPct:31,delayProbability:58.4,riskLevel:"HIGH",badgeClass:"bg-secondary-fixed text-on-secondary-fixed-variant",presetKey:"high"},{id:"BF-NH-2024-22",name:"NH-66 Coastal Highway Expansion",type:"Highway",sector:"National Highway",district:"Udupi",state:"Karnataka",stage:"Notification",progressPct:54,delayProbability:42.3,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"},{id:"BF-MT-2024-05",name:"Pune Metro Line 3 Corridor",type:"Metro",sector:"Urban Mass Transit",district:"Pune",state:"Maharashtra",stage:"Rehabilitation",progressPct:79,delayProbability:34.8,riskLevel:"LOW",badgeClass:"bg-emerald-100 text-emerald-900 border border-emerald-300",presetKey:"low"},{id:"BF-IN-2024-18",name:"Dholera Special Investment Region Ph 1",type:"Industrial",sector:"Industrial Node / SEZ",district:"Ahmedabad",state:"Gujarat",stage:"Valuation",progressPct:62,delayProbability:46.1,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"}];function E(t,e,n){t.innerHTML=`
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
                      ${L(h)}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  `;const a=t.querySelector("#projectSearchInput"),s=t.querySelector("#projectsTableBody");a&&s&&a.addEventListener("input",d=>{const p=d.target.value.toLowerCase().trim(),f=h.filter(m=>m.id.toLowerCase().includes(p)||m.name.toLowerCase().includes(p)||m.district.toLowerCase().includes(p)||m.state.toLowerCase().includes(p));s.innerHTML=L(f),j(t,e,n)});const l=t.querySelector("#openAssessmentCtaBtn"),o=t.querySelector("#jumpToAssessmentBtn");l&&e&&l.addEventListener("click",()=>e("medium")),o&&e&&o.addEventListener("click",()=>e("high")),j(t,e,n)}function L(t){return t.length===0?'<tr><td colspan="7" class="text-center py-4 text-on-surface-variant">No matching projects found.</td></tr>':t.map(e=>`
    <tr class="hover:bg-surface-container-low/70 transition-colors group">
      <td class="py-space-sm px-space-sm font-tabular-data font-bold text-on-surface">
        ${e.id}
      </td>
      <td class="py-space-sm px-space-sm">
        <div class="flex flex-col">
          <span class="font-semibold text-on-surface">${e.name}</span>
          <span class="text-on-surface-variant font-label-sm text-label-sm">${e.sector}</span>
        </div>
      </td>
      <td class="py-space-sm px-space-sm text-on-surface-variant">
        ${e.district}, ${e.state}
      </td>
      <td class="py-space-sm px-space-sm font-tabular-data">
        <div class="flex items-center gap-space-xs">
          <span class="font-medium text-on-surface">${e.progressPct}%</span>
          <div class="w-12 h-1.5 rounded-full bg-surface-container-high overflow-hidden">
            <div class="h-full bg-on-surface" style="width: ${e.progressPct}%"></div>
          </div>
        </div>
      </td>
      <td class="py-space-sm px-space-sm font-tabular-data font-bold ${e.riskLevel==="CRITICAL"?"text-error":e.riskLevel==="HIGH"?"text-secondary":"text-amber-600"}">
        ${e.delayProbability}%
      </td>
      <td class="py-space-sm px-space-sm">
        <span class="px-2 py-0.5 rounded-full ${e.badgeClass} font-label-sm text-label-sm font-bold inline-flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full ${e.riskLevel==="CRITICAL"?"bg-error":e.riskLevel==="HIGH"?"bg-secondary":"bg-amber-500"}"></span>
          ${e.riskLevel}
        </span>
      </td>
      <td class="py-space-sm px-space-sm text-right">
        <div class="inline-flex items-center gap-1">
          <button class="assess-project-btn px-space-xs py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded hover:bg-surface-tint transition-colors font-semibold" data-preset="${e.presetKey||"medium"}" type="button">
            Assess
          </button>
          <button class="audit-project-btn px-space-xs py-1 bg-surface-container text-on-surface font-label-sm text-label-sm rounded hover:bg-surface-container-high transition-colors font-medium" data-id="${e.id}" type="button">
            Audit
          </button>
        </div>
      </td>
    </tr>
  `).join("")}function j(t,e,n){t.querySelectorAll(".assess-project-btn").forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-preset")||"medium";e&&e(s)})}),t.querySelectorAll(".audit-project-btn").forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-id");n&&n(s)})})}const S="http://127.0.0.1:8000";class w extends Error{constructor(e,n=null,a=null){super(e),this.name="ApiError",this.status=n,this.details=a}}async function R(t,e={}){const n=`${S}${t}`,a=new AbortController,s=setTimeout(()=>a.abort(),e.timeout||15e3),l={"Content-Type":"application/json",Accept:"application/json"};try{const o=await fetch(n,{...e,headers:{...l,...e.headers||{}},signal:a.signal});clearTimeout(s);const d=o.headers.get("content-type")||"";let p=null;if(d.includes("application/json")?p=await o.json():p=await o.text(),!o.ok){const f=p&&typeof p=="object"&&p.detail?p.detail:`Request failed with status ${o.status}`;throw new w(f,o.status,p)}return p}catch(o){throw clearTimeout(s),o instanceof w?o:o.name==="AbortError"?new w("Request timed out while contacting Bhoomi Sakha prediction engine.",408):new w(`Cannot connect to prediction engine at ${S}. Ensure the backend is running with "python -m uvicorn src.api:app --reload".`,0,o)}}const k={baseUrl:S,get(t,e={}){return R(t,{...e,method:"GET"})},post(t,e,n={}){return R(t,{...n,method:"POST",body:JSON.stringify(e)})}},A={async checkHealth(){try{const t=await k.get("/health",{timeout:4e3});return{online:t.status==="healthy",modelLoaded:!!t.model_loaded,featureCount:t.features||76,raw:t}}catch(t){return{online:!1,modelLoaded:!1,featureCount:0,error:t.message}}},async getMetadata(){return k.get("/meta")},async predictRisk(t){return k.post("/predict",t)}};let C={activePreset:"medium",lastPrediction:null,isLoading:!1};function T(t,e="medium"){C.activePreset=e;const n=y[e]||y.medium;t.innerHTML=`
    <div class="flex flex-col w-full">
      <!-- Interactive Top Control Canvas -->
      <div class="w-full px-gutter-desktop py-space-lg flex flex-col gap-space-md">
        <!-- Title and Metadata Strip -->
        <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
          <div class="flex flex-col">
            <div class="flex items-center gap-space-sm">
              <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
              <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Assess Project Risk</h1>
              <span class="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">FastAPI • XGB-26017 Engine</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant mt-0.5">
              Enter or edit project telemetry to estimate statutory delay probability and inspect model-derived risk drivers via <code class="font-tabular-data text-on-surface bg-surface-container px-1 py-0.5 rounded text-label-sm font-semibold">POST /predict</code>.
            </p>
          </div>

          <!-- Mode Selector Switch -->
          <div class="inline-flex p-1 rounded-xl bg-surface-container-high shadow-inner shrink-0">
            <button class="px-space-md py-1.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5" id="modeSelectBtn" type="button">
              <span class="material-symbols-outlined text-[16px]">folder_open</span>
              <span>Select Existing Project</span>
            </button>
            <button class="px-space-md py-1.5 rounded font-label-md text-label-md bg-surface-container-lowest text-on-surface shadow-sm font-semibold flex items-center gap-1.5 transition-all" id="modeSimulateBtn" type="button">
              <span class="material-symbols-outlined text-[16px] text-secondary">tune</span>
              <span>Create / Test Scenario</span>
            </button>
          </div>
        </div>

        <!-- Quick Scenario Presets Bar -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border border-outline-variant/30">
          <div class="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm pl-space-xs">
            <span class="material-symbols-outlined text-[16px] text-secondary">flash_on</span>
            <span class="uppercase tracking-wider font-semibold">Statutory Test Presets:</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-space-xs w-full lg:w-auto">
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors text-left flex items-center justify-between gap-space-sm group" data-preset="low" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate group-hover:text-primary">NH-44 Bypass Ph. 2</span>
                <span class="font-label-sm text-[10px] text-emerald-600 font-tabular-data font-semibold">Low Delay Tier</span>
              </div>
              <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            </button>
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-high transition-colors text-left flex items-center justify-between gap-space-sm group ring-1 ring-secondary" data-preset="medium" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate font-semibold">Western Corridor</span>
                <span class="font-label-sm text-[10px] text-secondary font-tabular-data font-bold">42.3% Baseline</span>
              </div>
              <span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
            </button>
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors text-left flex items-center justify-between gap-space-sm group" data-preset="high" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate group-hover:text-primary">Docs Backlog Ph. 1</span>
                <span class="font-label-sm text-[10px] text-on-surface-variant font-tabular-data">High Bottleneck</span>
              </div>
              <span class="w-2 h-2 rounded-full bg-orange-600 shrink-0"></span>
            </button>
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors text-left flex items-center justify-between gap-space-sm group" data-preset="critical" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate group-hover:text-primary">Court Injunction HC</span>
                <span class="font-label-sm text-[10px] text-on-surface-variant font-tabular-data">Critical Injunction</span>
              </div>
              <span class="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Primary Two-Column Cockpit Engine -->
      <div class="w-full px-gutter-desktop pb-space-xl grid grid-cols-1 xl:grid-cols-12 gap-gutter-desktop items-start">
        
        <!-- LEFT COLUMN: 10 Structured Subsections (7 Cols) -->
        <div class="xl:col-span-7 flex flex-col gap-space-md">
          
          <!-- Operational Header Banner inside form -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between border border-outline-variant/30">
            <div class="flex items-center gap-space-sm">
              <div class="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-[18px]">rule_folder</span>
              </div>
              <div>
                <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">Telemetry Input Matrices</h2>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Configure cadastral attributes according to Section 11 &amp; 19 statutory filings</p>
              </div>
            </div>
            <button class="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 px-space-sm py-1 rounded hover:bg-surface-container transition-colors border border-outline-variant/40" id="resetFormBtn" type="button">
              <span class="material-symbols-outlined text-[15px]">refresh</span>
              <span>Reset Values</span>
            </button>
          </div>

          <!-- SECTION A: Project Profile -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="w-1.5 h-3 bg-primary rounded-full"></span> Section A • Project Profile
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Core Classification</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Project Type</label>
                <select class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_projectType">
                  <option value="Highway">Highway</option>
                  <option value="Railway">Railway</option>
                  <option value="Industrial">Industrial Node</option>
                  <option value="Metro">Metro Rail</option>
                  <option value="Irrigation">Irrigation</option>
                  <option value="Power">Power Grid</option>
                  <option value="Urban Development">Urban Development</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Land Classification</label>
                <select class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_landType">
                  <option value="Agricultural">Agricultural</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Mixed">Mixed Revenue</option>
                  <option value="Residential">Residential</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Priority Tier</label>
                <select class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_priority">
                  <option value="Normal">Normal</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Complexity (0-100)</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_complexity" step="0.1" min="0" max="100" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Total Parcels</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_totalParcels" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Affected Families (PAFs)</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_affectedFamilies" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Land Extent (Ha)</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_landArea" step="0.1" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Planned Duration (d)</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_plannedDuration" min="0" type="number"/>
              </div>
            </div>
          </div>

          <!-- SECTION B & C: Progress and Critical Documentation in Responsive Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            
            <!-- SECTION B: Acquisition Progress -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-secondary rounded-full"></span> Section B • Progress
                </span>
                <span class="font-tabular-data text-label-sm text-secondary font-semibold" id="badgeAcqVelocity">Velocity Active</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Acq. Progress (%)</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_acqProgress" min="0" max="100" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Velocity (%/30d)</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_velocity" step="0.01" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Parcels Pending</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_parcelsPending" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Possession Pending</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_possessionPending" min="0" type="number"/>
                </div>
              </div>
            </div>

            <!-- SECTION C: Documentation Telemetry -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm relative overflow-hidden border border-outline-variant/30">
              <div class="absolute top-0 right-0 w-24 h-1 bg-secondary-container"></div>
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-secondary-container rounded-full"></span> Section C • Documentation
                </span>
                <span class="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[10px] font-semibold">Key Model Driver</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Docs Required</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_docsReq" min="1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-secondary font-semibold mb-1 flex items-center gap-1">
                    <span>Docs Pending</span>
                    <span class="material-symbols-outlined text-[13px]">edit</span>
                  </label>
                  <input class="bg-surface-container-high px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface font-bold focus:outline-none focus:ring-2 focus:ring-secondary-container border border-outline-variant/50" id="field_docsPending" min="0" type="number"/>
                </div>
                <div class="col-span-2 flex flex-col gap-1">
                  <div class="flex items-center justify-between font-label-sm text-label-sm">
                    <span class="text-on-surface-variant">Documentation Completion</span>
                    <span class="font-tabular-data font-semibold text-on-surface" id="label_docCompletion">--%</span>
                  </div>
                  <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                    <div class="bg-secondary-container h-full transition-all duration-300" id="bar_docCompletion" style="width: 0%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION D & E: Compensation & Approvals -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            
            <!-- SECTION D: Compensation -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-outline rounded-full"></span> Section D • Compensation
                </span>
                <span class="font-tabular-data text-label-sm text-on-surface-variant" id="label_compDisbursedBadge">Escrow Tranche</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Pending Cases</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compCases" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Pending (₹ Cr)</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compAmount" min="0" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Disbursed %</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compDisbursed" min="0" max="100" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- SECTION E: Clearances / Approvals -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-outline rounded-full"></span> Section E • Clearances
                </span>
                <span class="font-label-sm text-label-sm text-error font-medium" id="label_clearanceAlert">Inter-Agency Gate</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Approvals Pend.</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprPending" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Overdue Num</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprOverdue" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Avg Delay (d)</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprDelay" min="0" step="0.1" type="number"/>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION F: Legal & Litigation -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="w-1.5 h-3 bg-error rounded-full"></span> Section F • Legal Litigations &amp; Objections
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Section 15 Hearings</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Pending Objections</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_pendingObj" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Active Land Disputes</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_activeDisputes" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Ownership Conflicts</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_ownerDisputes" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-error font-bold mb-1">Court Stays / Writs</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface font-bold focus:outline-none border border-error/50" id="field_courtStays" min="0" type="number"/>
              </div>
            </div>
          </div>

          <!-- SECTIONS G, H, I, J: Compact Telemetry Quartet -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            
            <!-- Section G: R&R -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">Section G • R&amp;R Resettlement</span>
                <span class="font-tabular-data text-[11px] text-emerald-600 font-semibold" id="label_rrSummary">RFCTLARR Compliance</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Pending Cases</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_rrPending" min="0" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Completion %</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_rrCompletion" min="0" max="100" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section H: Schedule -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">Section H • Schedule &amp; Variance</span>
                <span class="font-tabular-data text-[11px] text-amber-600 font-semibold" id="label_schedSlippage">Critical Path</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Variance (Days)</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_schedVariance" step="0.1" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Overdue Milestones</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_milestonesOverdue" min="0" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section I: Stakeholders -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">Section I • Stakeholder Coordination</span>
                <span class="font-tabular-data text-[11px] text-on-surface-variant">Response Latency</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Pending Act.</label>
                  <input class="w-full bg-surface-container-low px-1.5 py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shActions" min="0" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Avg Resp (d)</label>
                  <input class="w-full bg-surface-container-low px-1.5 py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shResponse" min="0" step="0.1" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Score /10</label>
                  <input class="w-full bg-surface-container-low px-1.5 py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shScore" min="0" max="10" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section J: Historical Context -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">Section J • Historical Delay Context</span>
                <span class="font-tabular-data text-[11px] text-on-surface-variant">Regional Priors</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">Avg Reg. Delay (d)</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_histDelay" min="0" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col justify-end">
                  <span class="font-label-sm text-[11px] text-on-surface-variant">Training Archetype:</span>
                  <span class="font-label-sm text-label-sm font-semibold text-on-surface">Linear Infrastructure (NLRMP)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sticky Operational Action Bar -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md sticky bottom-4 z-20 border-2 border-surface-container-high">
            <div class="flex items-center gap-space-sm">
              <div class="flex flex-col">
                <span class="font-label-md text-label-md text-on-surface font-semibold">Inference Target: Statutory 5-Year Window</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">LARR Act 2013 § 25 Mandate Validation • XGBoost Engine</span>
              </div>
            </div>
            <div class="flex items-center gap-space-sm w-full sm:w-auto">
              <button class="w-1/3 sm:w-auto px-space-md py-2.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors border border-outline-variant/40" id="resetScenarioBtn" type="button">
                Reset
              </button>
              <button class="w-2/3 sm:w-auto px-space-lg py-2.5 rounded bg-primary text-on-primary hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 group font-bold tracking-wide uppercase" id="runPredictionBtn" type="button">
                <span class="material-symbols-outlined text-[20px] text-secondary-container group-hover:rotate-12 transition-transform">model_training</span>
                <span>Assess Project Risk</span>
              </button>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Sticky Output & Explainability Engine (5 Cols) -->
        <div class="xl:col-span-5 flex flex-col gap-space-md sticky top-28" id="outputCockpitColumn">
          
          <!-- 1. Prediction Result Card -->
          <div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md relative overflow-hidden transition-all duration-300 border border-outline-variant/30" id="predictionMainCard">
            
            <!-- Live Loading Overlay -->
            <div class="hidden absolute inset-0 bg-surface-container-lowest/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-space-sm text-center p-space-md" id="loadingOverlay">
              <div class="w-12 h-12 border-4 border-surface-container-high border-t-secondary rounded-full animate-spin"></div>
              <div class="flex flex-col">
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold">Analyzing Project Telemetry...</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant font-tabular-data">Calling FastAPI POST /predict &amp; XGBoost Tree Contributions</span>
              </div>
            </div>

            <!-- Top Row with State Badge -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-secondary text-[22px]">analytics</span>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Predictive Risk Index</h3>
              </div>
              <span class="px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 transition-all" id="riskBadge">
                Medium Risk
              </span>
            </div>

            <!-- Delay Probability Radial Visualization -->
            <div class="flex items-center justify-center py-space-sm">
              <div class="relative flex items-center justify-center w-52 h-52">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle class="text-surface-container-high" cx="60" cy="60" fill="none" r="48" stroke="currentColor" stroke-width="10"></circle>
                  <circle class="text-secondary transition-all duration-700 ease-out" cx="60" cy="60" fill="none" id="probabilityCircle" r="48" stroke="currentColor" stroke-dasharray="301.59" stroke-dashoffset="174" stroke-linecap="round" stroke-width="10"></circle>
                </svg>
                <div class="absolute flex flex-col items-center justify-center text-center">
                  <span class="font-headline-xl text-headline-xl font-bold text-on-surface font-tabular-data leading-none" id="probabilityValue">42.28%</span>
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">Delay Probability</span>
                  <span class="mt-1 font-label-sm text-[11px] font-semibold text-secondary" id="decisionOutcome">Delay: NO (Threshold &lt; 50%)</span>
                </div>
              </div>
            </div>

            <!-- Explanatory Cadastral Model Note -->
            <div class="bg-surface-container-low p-space-sm rounded-lg flex items-start gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
              <span class="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">verified</span>
              <span>Predicted by <strong>XGBoost Model (SIH 26017)</strong> trained on 3,000,000 national records. Live model inference via <code class="font-tabular-data text-[11px] text-on-surface bg-surface-container-highest px-1 py-0.5 rounded font-bold">POST /predict</code>.</span>
            </div>
          </div>

          <!-- 2. Risk-Increasing Factors (Red / Orange Bars) -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-error flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-[16px]">trending_up</span> Risk-Increasing Factors
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data">Model Contribution (+Δ)</span>
            </div>
            <div class="flex flex-col gap-space-sm pt-space-xs" id="riskIncreasingContainer">
              <!-- Dynamically rendered -->
            </div>
          </div>

          <!-- 3. Factors Reducing Predicted Risk (Green Negative Bars) -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-emerald-700 flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-[16px]">trending_down</span> Factors Reducing Predicted Risk
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data">Model Contribution (-Δ)</span>
            </div>
            <div class="flex flex-col gap-space-sm pt-space-xs" id="riskReducingContainer">
              <!-- Dynamically rendered -->
            </div>
            <div class="pt-1 text-[11px] text-on-surface-variant italic">
              Note: Values reflect mathematical dampening within the XGBoost model and are not causal recommendations.
            </div>
          </div>

          <!-- 4. Statutory Directives / Priority Actions -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-[16px] text-secondary">gavel</span> Recommended Statutory Directives
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-semibold">Priority Execution</span>
            </div>
            <div class="flex flex-col gap-space-xs" id="directivesContainer">
              <!-- Dynamically generated from risk drivers -->
            </div>
          </div>

          <!-- 5. Transparency Accordion (How is this calculated?) -->
          <div class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/30">
            <button class="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors" id="transparencyAccordionBtn" type="button">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-[18px] text-on-surface-variant">psychology</span>
                <span class="font-label-md text-label-md text-on-surface font-semibold">Methodology &amp; Model Evaluation</span>
              </div>
              <span class="material-symbols-outlined text-[18px] text-on-surface-variant transition-transform" id="accordionChevron">expand_more</span>
            </button>
            <div class="hidden px-space-md pb-space-md pt-0 text-on-surface-variant font-body-sm text-body-sm flex flex-col gap-space-xs border-t border-surface-container-high" id="transparencyContent">
              <p class="pt-space-xs">
                The Bhoomi Sakha inference engine executes binary classification across 76 engineered features aligned with statutory RFCTLARR Act 2013 and national cadastral norms.
              </p>
              <div class="grid grid-cols-2 gap-2 my-1 text-[12px] bg-surface-container-low p-2 rounded">
                <div><strong>Accuracy:</strong> 71.05%</div>
                <div><strong>ROC-AUC:</strong> 0.7805</div>
                <div><strong>Precision:</strong> 68.07%</div>
                <div><strong>Recall:</strong> 71.98%</div>
                <div><strong>Training Dataset:</strong> 3,000,000 rows</div>
                <div><strong>Projects Evaluated:</strong> 400,127</div>
              </div>
              <ul class="list-disc pl-5 flex flex-col gap-1 text-[11px]">
                <li><strong>Tree Contributions:</strong> Feature weights reflect exact gradient boosting margin impacts per project snapshot.</li>
                <li><strong>Risk Thresholds:</strong> LOW &lt; 40%, MEDIUM 40-60%, HIGH 60-80%, CRITICAL &ge; 80%.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,M(t,n)}function M(t,e){P(e.values),g(),t.querySelectorAll(".preset-pill").forEach(u=>{u.addEventListener("click",()=>{const x=u.getAttribute("data-preset");t.querySelectorAll(".preset-pill").forEach(c=>{c.classList.remove("bg-surface-container-high","ring-1","ring-secondary"),c.classList.add("bg-surface-container-low")}),u.classList.remove("bg-surface-container-low"),u.classList.add("bg-surface-container-high","ring-1","ring-secondary");const r=y[x];r&&(C.activePreset=x,P(r.values),g(),_(t))})});const n=t.querySelector("#field_docsPending"),a=t.querySelector("#field_docsReq");n&&n.addEventListener("input",g),a&&a.addEventListener("input",g);const s=t.querySelector("#runPredictionBtn");s&&s.addEventListener("click",()=>_(t));const l=t.querySelector("#resetScenarioBtn"),o=t.querySelector("#resetFormBtn"),d=()=>{const u=y[C.activePreset]||y.medium;P(u.values),g(),_(t)};l&&l.addEventListener("click",d),o&&o.addEventListener("click",d);const p=t.querySelector("#transparencyAccordionBtn"),f=t.querySelector("#transparencyContent"),m=t.querySelector("#accordionChevron");p&&f&&p.addEventListener("click",()=>{f.classList.contains("hidden")?(f.classList.remove("hidden"),m.style.transform="rotate(180deg)"):(f.classList.add("hidden"),m.style.transform="rotate(0deg)")}),_(t)}function g(){var l,o;const t=parseFloat((l=document.getElementById("field_docsReq"))==null?void 0:l.value)||1,e=parseFloat((o=document.getElementById("field_docsPending"))==null?void 0:o.value)||0,n=Math.max(0,Math.min(100,(t-e)/t*100)).toFixed(1),a=document.getElementById("label_docCompletion"),s=document.getElementById("bar_docCompletion");a&&(a.textContent=`${n}%`),s&&(s.style.width=`${n}%`)}function P(t){if(!t)return;const e=(n,a)=>{const s=document.getElementById(n);s&&a!==void 0&&(s.value=a)};e("field_projectType",t.project_type||"Highway"),e("field_landType",t.land_type||"Agricultural"),e("field_priority",t.priority||"Normal"),e("field_complexity",t.complexity_score??47.7),e("field_totalParcels",t.total_parcels??233),e("field_affectedFamilies",t.affected_families??113),e("field_landArea",t.land_area_hectares??132.5),e("field_plannedDuration",t.planned_duration_days??607),e("field_acqProgress",t.acquisition_progress_pct??6),e("field_velocity",t.acquisition_velocity_pct_per_30d??6.13),e("field_parcelsPending",t.parcels_pending??219),e("field_possessionPending",t.possession_pending_parcels??218),e("field_docsReq",t.documents_required??241),e("field_docsPending",t.documents_pending??232),e("field_compCases",t.compensation_pending_cases??105),e("field_compAmount",t.compensation_pending_amount??10.95),e("field_compDisbursed",t.compensation_completion_pct??6.2),e("field_apprPending",t.approvals_pending??5),e("field_apprOverdue",t.overdue_approvals??2),e("field_apprDelay",t.avg_approval_delay_days??41),e("field_pendingObj",t.pending_objections??0),e("field_activeDisputes",t.active_legal_disputes??0),e("field_ownerDisputes",t.ownership_disputes??0),e("field_courtStays",t.court_stay_cases??0),e("field_rrPending",t.rr_pending_cases??47),e("field_rrCompletion",t.rr_completion_pct??4.08),e("field_schedVariance",t.schedule_variance_days??-7.19),e("field_milestonesOverdue",t.milestones_overdue??1),e("field_shActions",t.pending_stakeholder_actions??7),e("field_shResponse",t.avg_stakeholder_response_days??28.59),e("field_shScore",t.stakeholder_responsiveness_score??5.14),e("field_histDelay",t.historical_avg_delay_days??100.8)}function B(){var r;const t=(c,b=0)=>{var v;const i=parseFloat((v=document.getElementById(c))==null?void 0:v.value);return isNaN(i)?b:Math.max(0,i)},e=(c,b=0)=>{var v;const i=parseInt((v=document.getElementById(c))==null?void 0:v.value,10);return isNaN(i)?b:Math.max(0,i)},n=(c,b="")=>{var i;return((i=document.getElementById(c))==null?void 0:i.value)||b},a=e("field_totalParcels",200),s=e("field_parcelsPending",50),l=Math.max(0,a-s),o=e("field_docsReq",200),d=e("field_docsPending",50),p=Math.max(0,o-d),f=o>0?Math.min(100,Math.max(0,p/o*100)):0,m=e("field_compCases",10),u=t("field_compAmount",10),x=Math.min(100,t("field_compDisbursed",50));return{project_type:n("field_projectType","Highway"),land_type:n("field_landType","Mixed"),priority:n("field_priority","Normal"),current_stage:"Survey",complexity_score:t("field_complexity",40),total_parcels:a,parcels_pending:s,parcels_acquired:l,affected_families:t("field_affectedFamilies",50),land_area_hectares:t("field_landArea",100),planned_duration_days:e("field_plannedDuration",600),days_since_notification:30,days_elapsed:30,days_in_current_stage:30,planned_stage_duration_days:30,schedule_variance_days:parseFloat((r=document.getElementById("field_schedVariance"))==null?void 0:r.value)||0,milestones_due:2,milestones_completed:1,milestones_overdue:e("field_milestonesOverdue",0),acquisition_progress_pct:Math.min(100,t("field_acqProgress",50)),acquisition_velocity_pct_per_30d:t("field_velocity",5),possession_progress_pct:Math.min(100,(1-e("field_possessionPending",50)/Math.max(1,a))*100),possession_pending_parcels:e("field_possessionPending",50),compensation_total_amount:u*1.5,compensation_assessed_amount:u*1.2,compensation_disbursed_amount:u*.5,compensation_pending_amount:u,compensation_completion_pct:x,compensation_pending_cases:m,avg_compensation_delay_days:m*.5,documents_required:o,documents_verified:p,documents_pending:d,documentation_completion_pct:f,approvals_required:10,approvals_completed:5,approvals_pending:e("field_apprPending",2),approval_completion_pct:50,avg_approval_delay_days:t("field_apprDelay",10),overdue_approvals:e("field_apprOverdue",0),active_legal_disputes:e("field_activeDisputes",0),resolved_legal_disputes:0,ownership_disputes:e("field_ownerDisputes",0),court_stay_cases:e("field_courtStays",0),pending_objections:e("field_pendingObj",0),families_requiring_rr:e("field_rrPending",0)+10,families_rr_completed:10,rr_completion_pct:Math.min(100,t("field_rrCompletion",50)),rr_pending_cases:e("field_rrPending",0),pending_stakeholder_actions:e("field_shActions",0),avg_stakeholder_response_days:t("field_shResponse",10),stakeholder_responsiveness_score:t("field_shScore",5),interdepartmental_pending_actions:2,historical_avg_delay_days:t("field_histDelay",50)}}async function _(t){const e=t.querySelector("#loadingOverlay"),n=t.querySelector("#runPredictionBtn");e&&e.classList.remove("hidden"),n&&(n.disabled=!0,n.classList.add("opacity-70","cursor-not-allowed"));try{const a=B(),s=await A.predictRisk(a);C.lastPrediction=s,D(t,s)}catch(a){console.error("Prediction failed:",a),H(t,a.message)}finally{e&&e.classList.add("hidden"),n&&(n.disabled=!1,n.classList.remove("opacity-70","cursor-not-allowed"))}}function D(t,e){const n=e.delay_probability_pct??e.delay_probability*100,a=e.risk_level||"MEDIUM",s=e.predicted_delayed,l=t.querySelector("#probabilityValue"),o=t.querySelector("#probabilityCircle"),d=t.querySelector("#decisionOutcome"),p=t.querySelector("#riskBadge");l&&(l.textContent=`${n.toFixed(2)}%`),d&&(d.textContent=s?"Delay: IMMINENT / LIKELY (Threshold ≥ 50%)":"Delay: UNLIKELY / ON TRACK (Threshold < 50%)",d.className=`mt-1 font-label-sm text-[11px] font-semibold ${s?"text-error":"text-emerald-600"}`);const f=301.59,m=f-f*(n/100);if(o&&(o.style.strokeDashoffset=m,o.className=`transition-all duration-700 ease-out ${a==="CRITICAL"?"text-error":a==="HIGH"?"text-secondary-container":a==="MEDIUM"?"text-amber-500":"text-emerald-500"}`),p){p.textContent=`${a} RISK`;const c={LOW:"bg-emerald-100 text-emerald-900 border-emerald-300",MEDIUM:"bg-amber-100 text-amber-900 border-amber-300",HIGH:"bg-orange-100 text-orange-900 border-orange-300",CRITICAL:"bg-red-100 text-red-900 border-red-300"};p.className=`px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider border ${c[a]||c.MEDIUM}`}const u=t.querySelector("#riskIncreasingContainer");if(u){const c=e.risk_drivers||[];if(c.length===0)u.innerHTML=`
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          No major risk-increasing factors identified for this project state.
        </div>
      `;else{const b=Math.max(...c.map(i=>Math.abs(i.contribution)),.1);u.innerHTML=c.map(i=>{const v=Math.min(100,Math.max(15,Math.abs(i.contribution)/b*100)),I=i.contribution>.4?"bg-error":"bg-secondary-container";return`
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-semibold">${i.factor}: <span class="font-bold text-on-surface font-tabular-data">${i.value??"--"}</span></span>
              <span class="font-tabular-data font-bold text-error">+${i.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="${I} h-full rounded-full transition-all duration-700" style="width: ${v.toFixed(0)}%;"></div>
            </div>
            <span class="font-body-sm text-[11px] text-on-surface-variant italic">
              <strong>Action:</strong> ${i.recommendation||"Prioritize verification and monitoring."}
            </span>
          </div>
        `}).join("")}}const x=t.querySelector("#riskReducingContainer");if(x){const c=e.risk_reducing_factors||[];if(c.length===0)x.innerHTML=`
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          No significant risk-reducing factors detected.
        </div>
      `;else{const b=Math.max(...c.map(i=>Math.abs(i.contribution)),.1);x.innerHTML=c.map(i=>{const v=Math.min(100,Math.max(15,Math.abs(i.contribution)/b*100));return`
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-medium">${i.factor}: <span class="font-bold text-on-surface font-tabular-data">${i.value??"--"}</span></span>
              <span class="font-tabular-data font-semibold text-emerald-600">${i.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-600 h-full rounded-full transition-all duration-700" style="width: ${v.toFixed(0)}%;"></div>
            </div>
          </div>
        `}).join("")}}const r=t.querySelector("#directivesContainer");if(r){const c=e.risk_drivers||[];c.length>0?r.innerHTML=c.slice(0,2).map((b,i)=>`
          <div class="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm border border-outline-variant/30">
            <span class="px-1.5 py-0.5 rounded ${i===0?"bg-error text-on-error":"bg-secondary text-on-secondary"} font-label-sm text-[10px] font-bold shrink-0 mt-0.5">${i===0?"P1 PRIORITY":"P2 PRIORITY"}</span>
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm font-bold text-on-surface">${b.factor} Resolution</span>
              <p class="font-body-sm text-[12px] text-on-surface-variant mt-0.5">${b.recommendation}</p>
            </div>
          </div>
        `).join(""):r.innerHTML=`
        <div class="p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-xs">
          Statutory progress remains nominal. Continue scheduled monitoring under Section 19 protocols.
        </div>
      `}}function H(t,e){const n=t.querySelector("#riskIncreasingContainer");n&&(n.innerHTML=`
      <div class="p-space-sm rounded bg-error-container/40 border border-error text-on-surface flex flex-col gap-1">
        <div class="flex items-center gap-1 text-error font-bold text-label-sm">
          <span class="material-symbols-outlined text-[16px]">error</span>
          <span>Inference Error</span>
        </div>
        <span class="text-body-sm text-xs">${e}</span>
      </div>
    `)}function q(t,e,n){t.innerHTML=`
    <div class="px-margin-desktop py-space-xl flex flex-col gap-space-lg w-full">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
            <h1 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">National Projects Directory</h1>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Explore active infrastructure corridors, cadastral verification stages, and predicted delay exposures across all state jurisdictions.
          </p>
        </div>
        <button class="px-space-md py-2 bg-primary text-on-primary font-label-md rounded-lg shadow-sm hover:bg-on-surface transition-all flex items-center gap-1.5 self-start sm:self-auto" id="newAssessmentBtn" type="button">
          <span class="material-symbols-outlined text-[18px]">add_chart</span>
          <span>New Project Assessment</span>
        </button>
      </div>

      <!-- Filters & Stats Strip -->
      <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-space-md border border-outline-variant/30">
        <div class="flex flex-wrap items-center gap-space-sm">
          <div class="flex flex-col">
            <label class="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">Filter By Sector</label>
            <select class="bg-surface-container-low px-space-sm py-1.5 rounded font-label-sm text-label-sm text-on-surface border border-outline-variant/40" id="filterSector">
              <option value="all">All Sectors (Highway, Rail, Power, Metro)</option>
              <option value="Highway">Highways &amp; Expressways</option>
              <option value="Railway">Freight Corridors</option>
              <option value="Power">Renewable Energy</option>
              <option value="Metro">Urban Mass Transit</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label class="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">Risk Tier</label>
            <select class="bg-surface-container-low px-space-sm py-1.5 rounded font-label-sm text-label-sm text-on-surface border border-outline-variant/40" id="filterRisk">
              <option value="all">All Risk Tiers</option>
              <option value="CRITICAL">Critical (&ge;80%)</option>
              <option value="HIGH">High (60-80%)</option>
              <option value="MEDIUM">Medium (40-60%)</option>
              <option value="LOW">Low (&lt;40%)</option>
            </select>
          </div>
        </div>

        <div class="relative w-full sm:w-64">
          <input class="w-full pl-8 pr-3 py-1.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="directorySearchInput" placeholder="Filter by name, ID, or district..." type="text"/>
          <span class="material-symbols-outlined absolute left-2 top-2 text-[16px] text-on-surface-variant">search</span>
        </div>
      </div>

      <!-- Main Directory Table -->
      <div class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/30">
        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/30">
                <th class="py-3 px-space-md font-bold">Project ID</th>
                <th class="py-3 px-space-md font-bold">Name &amp; Corridor</th>
                <th class="py-3 px-space-md font-bold">State &amp; District</th>
                <th class="py-3 px-space-md font-bold">Statutory Stage</th>
                <th class="py-3 px-space-md font-bold font-tabular-data">Acquisition Progress</th>
                <th class="py-3 px-space-md font-bold font-tabular-data">Predicted Delay Risk</th>
                <th class="py-3 px-space-md font-bold">Status Tier</th>
                <th class="py-3 px-space-md font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-container font-body-sm text-body-sm" id="directoryTableBody">
              <!-- Rendered via JS -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;const a=t.querySelector("#directoryTableBody"),s=t.querySelector("#directorySearchInput"),l=t.querySelector("#filterSector"),o=t.querySelector("#filterRisk"),d=()=>{const f=((s==null?void 0:s.value)||"").toLowerCase().trim(),m=(l==null?void 0:l.value)||"all",u=(o==null?void 0:o.value)||"all",x=h.filter(r=>{const c=r.id.toLowerCase().includes(f)||r.name.toLowerCase().includes(f)||r.district.toLowerCase().includes(f)||r.state.toLowerCase().includes(f),b=m==="all"||r.type===m,i=u==="all"||r.riskLevel===u;return c&&b&&i});if(x.length===0){a.innerHTML='<tr><td colspan="8" class="text-center py-6 text-on-surface-variant">No matching records found in national database.</td></tr>';return}a.innerHTML=x.map(r=>`
      <tr class="hover:bg-surface-container-low/70 transition-colors">
        <td class="py-space-md px-space-md font-tabular-data font-bold text-on-surface">${r.id}</td>
        <td class="py-space-md px-space-md">
          <div class="flex flex-col">
            <span class="font-semibold text-on-surface">${r.name}</span>
            <span class="text-on-surface-variant font-label-sm text-xs">${r.sector}</span>
          </div>
        </td>
        <td class="py-space-md px-space-md text-on-surface-variant">${r.district}, ${r.state}</td>
        <td class="py-space-md px-space-md">
          <span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-xs">${r.stage}</span>
        </td>
        <td class="py-space-md px-space-md font-tabular-data">
          <div class="flex items-center gap-2">
            <span class="font-bold text-on-surface">${r.progressPct}%</span>
            <div class="w-16 h-2 rounded-full bg-surface-container-high overflow-hidden">
              <div class="h-full bg-primary" style="width: ${r.progressPct}%"></div>
            </div>
          </div>
        </td>
        <td class="py-space-md px-space-md font-tabular-data font-bold ${r.riskLevel==="CRITICAL"?"text-error":r.riskLevel==="HIGH"?"text-secondary":"text-amber-600"}">${r.delayProbability}%</td>
        <td class="py-space-md px-space-md">
          <span class="px-2 py-0.5 rounded-full ${r.badgeClass} font-label-sm text-xs font-bold">${r.riskLevel}</span>
        </td>
        <td class="py-space-md px-space-md text-right">
          <div class="inline-flex items-center gap-1.5">
            <button class="dir-assess-btn px-2 py-1 bg-primary text-on-primary rounded font-label-sm text-xs font-bold hover:bg-surface-tint transition-colors" data-preset="${r.presetKey||"medium"}" type="button">
              Assess Risk
            </button>
            <button class="dir-audit-btn px-2 py-1 bg-surface-container text-on-surface rounded font-label-sm text-xs font-medium hover:bg-surface-container-high transition-colors" data-id="${r.id}" type="button">
              Deep Audit
            </button>
          </div>
        </td>
      </tr>
    `).join(""),a.querySelectorAll(".dir-assess-btn").forEach(r=>{r.addEventListener("click",()=>{const c=r.getAttribute("data-preset");e&&e(c)})}),a.querySelectorAll(".dir-audit-btn").forEach(r=>{r.addEventListener("click",()=>{const c=r.getAttribute("data-id");n&&n(c)})})};s&&s.addEventListener("input",d),l&&l.addEventListener("change",d),o&&o.addEventListener("change",d);const p=t.querySelector("#newAssessmentBtn");p&&e&&p.addEventListener("click",()=>e("medium")),d()}function $(t,e="BF-NH-2024-09",n){const a=h.find(o=>o.id===e)||h[0];t.innerHTML=`
    <div class="flex flex-col w-full">
      <!-- Contextual Ribbon / Meta Bar -->
      <div class="w-full bg-surface-container-low px-gutter-desktop py-space-sm flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div class="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant flex-wrap">
          <span class="hover:text-on-surface cursor-pointer" id="backToProjectsBreadcrumb">Projects</span>
          <span>/</span>
          <span>${a.state}</span>
          <span>/</span>
          <span class="text-on-surface font-semibold font-tabular-data">${a.id}</span>
          <span>/</span>
          <span class="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-semibold">Detailed Risk Analysis</span>
        </div>
        <div class="flex items-center gap-space-md font-label-sm text-label-sm">
          <span class="inline-flex items-center gap-1.5 text-on-surface-variant">
            <span class="material-symbols-outlined text-[15px] text-secondary">verified_user</span>
            Statutory Hash: <span class="font-tabular-data text-on-surface font-semibold">SHA256-7D88-${a.district.substring(0,3).toUpperCase()}</span>
          </span>
          <span class="text-outline-variant">•</span>
          <span class="inline-flex items-center gap-1 text-on-surface-variant">
            <span class="material-symbols-outlined text-[15px]">update</span>
            Model Inference: <span class="font-tabular-data text-on-surface">Live Synchronized</span>
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
                ${a.id}
              </span>
              <span class="px-space-xs py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded uppercase font-semibold">
                National Corridor (${a.sector})
              </span>
              <span class="px-space-xs py-0.5 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded">
                MoRTH / Authority Corridors Wing
              </span>
              <span class="px-space-xs py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded flex items-center gap-1">
                <span class="material-symbols-outlined text-[13px]">gavel</span>
                Stage: ${a.stage}
              </span>
            </div>
            <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              ${a.name}
            </h1>
            <div class="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                District: ${a.district}, ${a.state}
              </span>
              <span>•</span>
              <span class="flex items-center gap-1 font-tabular-data">
                <span class="material-symbols-outlined text-[16px]">straighten</span>
                Alignment: Ch. 124+400 to 168+200 (43.8 km)
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">account_balance</span>
                CALA: Competent Authority Land Acquisition, ${a.district} Division
              </span>
            </div>
          </div>

          <!-- Action Panel Buttons -->
          <div class="flex flex-wrap items-center gap-space-sm w-full xl:w-auto shrink-0">
            <button class="px-space-md py-2 bg-secondary-container hover:bg-secondary text-on-surface hover:text-on-secondary font-label-md text-label-md rounded transition-colors flex items-center gap-1.5 shadow-sm font-bold" id="detailRerunBtn" type="button">
              <span class="material-symbols-outlined text-[18px]">bolt</span>
              <span>Re-run Assessment</span>
            </button>
            <button class="px-space-md py-2 bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface font-label-md text-label-md rounded transition-colors flex items-center gap-1.5 shadow-sm" type="button">
              <span class="material-symbols-outlined text-[18px]">history_edu</span>
              <span>Draft DC Order</span>
            </button>
          </div>
        </div>

        <!-- Predictive Executive Risk Dossier Card -->
        <div class="w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-outline-variant/30">
          
          <!-- Severity Anchor Column -->
          <div class="lg:col-span-4 ${a.riskLevel==="CRITICAL"?"bg-error-container/40":a.riskLevel==="HIGH"?"bg-orange-50":"bg-amber-50"} p-space-xl flex flex-col justify-between relative overflow-hidden">
            <div class="flex flex-col gap-space-md relative z-10">
              <div class="flex items-center justify-between">
                <span class="px-space-xs py-1 rounded ${a.riskLevel==="CRITICAL"?"bg-error text-on-error":a.riskLevel==="HIGH"?"bg-secondary text-on-secondary":"bg-amber-500 text-white"} font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span class="w-2 h-2 rounded-full bg-surface-container-lowest animate-ping"></span>
                  ${a.riskLevel} Risk Tier
                </span>
                <span class="font-tabular-data text-label-sm font-semibold">XGB-26017 Engine</span>
              </div>
              <div class="flex flex-col pt-space-xs">
                <span class="font-label-md text-label-md uppercase tracking-wide text-on-surface-variant font-semibold">Model Delay Probability</span>
                <div class="flex items-baseline gap-space-xs">
                  <span class="font-headline-xl text-headline-xl font-tabular-data ${a.riskLevel==="CRITICAL"?"text-error":a.riskLevel==="HIGH"?"text-secondary":"text-amber-600"} font-extrabold tracking-tight">${a.delayProbability}%</span>
                  <span class="font-headline-sm text-headline-sm font-bold text-on-surface">PROBABILITY</span>
                </div>
              </div>
              <div class="p-space-sm rounded bg-surface-container-lowest/80 shadow-sm backdrop-blur-sm flex flex-col gap-0.5">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase">Predicted Statutory Impact</span>
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                  ${a.riskLevel==="CRITICAL"||a.riskLevel==="HIGH"?"Delay Predicted (Significant milestone slippage expected without intervention)":"Nominal progress tracking within acceptable variance"}
                </span>
              </div>
            </div>
            <div class="pt-space-lg flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant relative z-10">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                Model Confidence: <strong class="font-tabular-data font-semibold">91.4%</strong>
              </span>
              <span class="font-tabular-data text-label-sm">N = 3,000,000 Trained</span>
            </div>
          </div>

          <!-- Contextual Field Geographic & Administrative Vector -->
          <div class="lg:col-span-8 p-space-xl flex flex-col justify-between gap-space-lg">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>Total Land Requisition</span>
                  <span class="material-symbols-outlined text-[16px]">map</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">184.20 Ha</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">Spread over 14 Revenue Villages</span>
              </div>
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>Affected Landowners</span>
                  <span class="material-symbols-outlined text-[16px]">groups</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">1,892 Khatas</span>
                <span class="font-body-sm text-body-sm text-error font-medium">410 mutations unresolved</span>
              </div>
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>Sanctioned Escrow</span>
                  <span class="material-symbols-outlined text-[16px]">payments</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">₹62.00 Cr</span>
                <span class="font-body-sm text-body-sm text-secondary font-medium">₹29.60 Cr undisbursed</span>
              </div>
            </div>

            <!-- Injunction & Field Vector -->
            <div class="flex flex-col gap-space-xs bg-surface-container-low rounded-lg p-space-md border border-outline-variant/30">
              <div class="flex items-center justify-between font-label-sm text-label-sm text-on-surface">
                <span class="font-bold flex items-center gap-1 text-secondary">
                  <span class="material-symbols-outlined text-[16px]">warning</span>
                  Section 19 Statutory Cutoff Timeline:
                </span>
                <span class="font-tabular-data font-bold text-error">+94 Days Slippage Risk</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-error h-full rounded-full" style="width: 78%"></div>
              </div>
              <span class="font-body-sm text-xs text-on-surface-variant">Critical path bottleneck flagged in ownership verification and mutation camp clearance.</span>
            </div>
          </div>

        </div>

        <!-- Multi-Domain Progress Gauges Bar -->
        <div class="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md border border-outline-variant/30">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
            <div>
              <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">Multi-Domain Acquisition Progress Gauges</h2>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Cadastral metrics synchronized with state e-Bhoomi records registry</p>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data px-space-xs py-1 rounded bg-surface-container font-semibold">
              Cycle Audit: FY26-Q1-ACTIVE
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md pt-space-xs">
            <!-- 1: Overall Progress -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Overall Progress</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">${a.progressPct}%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-primary h-full rounded-full" style="width: ${a.progressPct}%"></div>
              </div>
            </div>

            <!-- 2: Joint Survey -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Joint Survey 3A</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">68%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-secondary-container h-full rounded-full" style="width: 68%"></div>
              </div>
            </div>

            <!-- 3: Award Declaration -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Sec 23 Award</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">34%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-secondary h-full rounded-full" style="width: 34%"></div>
              </div>
            </div>

            <!-- 4: Physical Possession -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Physical ROW</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">29%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-outline h-full rounded-full" style="width: 29%"></div>
              </div>
            </div>

            <!-- 5: Escrow DBT -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">DBT Escrow</span>
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
  `;const s=t.querySelector("#detailRerunBtn");s&&n&&s.addEventListener("click",()=>n(a.presetKey||"medium"));const l=t.querySelector("#backToProjectsBreadcrumb");l&&l.addEventListener("click",()=>{window.location.hash="#/projects"})}class N{constructor(){this.container=document.getElementById("appViewContainer"),this.currentView="dashboard",this.isBackendOnline=!1,this.healthInterval=null,this.clockInterval=null}init(){this.setupNavigation(),this.setupClock(),this.startHealthPolling(),this.handleRouting(),window.addEventListener("hashchange",()=>this.handleRouting());const e=document.getElementById("brandHeaderHome");e&&e.addEventListener("click",()=>{window.location.hash="#/dashboard"});const n=document.getElementById("backendStatusPill");n&&n.addEventListener("click",()=>this.checkBackendHealth(!0))}setupNavigation(){const e=document.querySelectorAll(".nav-tab");e.forEach(n=>{n.addEventListener("click",a=>{e.forEach(s=>{s.className="nav-tab px-space-md py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded",s.removeAttribute("aria-current")}),n.className="nav-tab px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-label-md rounded-lg shadow-sm font-semibold",n.setAttribute("aria-current","page")})})}updateNavState(e){document.querySelectorAll(".nav-tab").forEach(l=>{l.getAttribute("data-target")===e?(l.className="nav-tab px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-label-md rounded-lg shadow-sm font-semibold",l.setAttribute("aria-current","page")):(l.className="nav-tab px-space-md py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded",l.removeAttribute("aria-current"))});const a={dashboard:"National Cadastral Matrix (Overview)",assessment:"Predictive Delay-Risk Assessment Cockpit",projects:"National Land Acquisition Projects Directory",audit:"Cadastral & Risk Detailed Dossier"},s=document.getElementById("currentViewName");s&&(s.textContent=a[e]||"Executive Command Center")}handleRouting(){const e=window.location.hash||"#/dashboard",[n,a]=e.replace("#/","").split("?"),s=new URLSearchParams(a||"");switch(this.currentView=n||"dashboard",this.updateNavState(this.currentView),window.scrollTo({top:0,behavior:"smooth"}),this.currentView){case"assessment":const l=s.get("preset")||"medium";T(this.container,l);break;case"projects":q(this.container,d=>{window.location.hash=`#/assessment?preset=${d}`},d=>{window.location.hash=`#/audit?id=${d}`});break;case"audit":const o=s.get("id")||"BF-NH-2024-09";$(this.container,o,d=>{window.location.hash=`#/assessment?preset=${d}`});break;case"dashboard":default:this.currentView="dashboard",E(this.container,d=>{window.location.hash=`#/assessment?preset=${d}`},d=>{window.location.hash=`#/audit?id=${d}`});break}}setupClock(){const e=()=>{const n=document.getElementById("liveISTClock");if(n){const a=new Date,s={timeZone:"Asia/Kolkata",hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"};n.textContent=a.toLocaleTimeString("en-GB",s)}};e(),this.clockInterval=setInterval(e,1e3)}async checkBackendHealth(e=!1){const n=await A.checkHealth(),a=document.getElementById("backendStatusDot"),s=document.getElementById("backendStatusText");n.online?(a&&(a.innerHTML=`
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        `),s&&(s.textContent="Backend: FastAPI Connected • XGBoost Engine v2.4 Active",s.className="font-label-sm text-label-sm text-on-surface font-tabular-data"),!this.isBackendOnline&&e&&this.showToast("Backend connected: XGBoost binary classifier (76 features) loaded.","success"),this.isBackendOnline=!0):(a&&(a.innerHTML=`
          <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        `),s&&(s.textContent="Backend Disconnected (127.0.0.1:8000) • Click to Retry",s.className="font-label-sm text-label-sm text-amber-800 font-tabular-data font-semibold"),(this.isBackendOnline||e)&&this.showToast('FastAPI backend not responding on http://127.0.0.1:8000. Ensure "python -m uvicorn src.api:app --reload" is running.',"warning"),this.isBackendOnline=!1)}startHealthPolling(){this.checkBackendHealth(),this.healthInterval=setInterval(()=>this.checkBackendHealth(),6e3)}showToast(e,n="info"){const a=document.getElementById("toastContainer");if(!a)return;const s=document.createElement("div"),l=n==="success"?"bg-primary-container text-on-primary border-secondary":"bg-amber-100 text-amber-950 border-amber-400";s.className=`${l} px-4 py-3 rounded-lg shadow-lg border text-sm max-w-md pointer-events-auto flex items-start gap-2 transition-all duration-300 transform translate-y-2 opacity-0`,s.innerHTML=`
      <span class="material-symbols-outlined text-[18px] text-secondary-container mt-0.5">info</span>
      <span class="flex-1">${e}</span>
    `,a.appendChild(s),requestAnimationFrame(()=>{s.classList.remove("translate-y-2","opacity-0")}),setTimeout(()=>{s.classList.add("opacity-0","translate-y-2"),setTimeout(()=>s.remove(),300)},4500)}}document.addEventListener("DOMContentLoaded",()=>{new N().init()});

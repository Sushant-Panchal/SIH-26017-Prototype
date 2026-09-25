(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const S={low:{id:"preset-low",name:"NH-44 Bypass Ph. 2",subtitle:"Low Delay • Clear Title",tag:"LOW RISK",values:{project_type:"Highway",land_type:"Agricultural",priority:"Normal",current_stage:"Notification",complexity_score:22.4,total_parcels:350,affected_families:48,land_area_hectares:65.2,planned_duration_days:420,days_since_notification:45,days_elapsed:45,days_in_current_stage:45,planned_stage_duration_days:60,acquisition_progress_pct:88.5,acquisition_velocity_pct_per_30d:14.8,parcels_pending:40,parcels_acquired:310,possession_pending_parcels:25,possession_progress_pct:92.8,documents_required:350,documents_pending:18,documents_verified:332,documentation_completion_pct:94.9,compensation_pending_cases:12,compensation_pending_amount:3.5,compensation_completion_pct:96.2,avg_compensation_delay_days:8,approvals_pending:1,overdue_approvals:0,avg_approval_delay_days:4,pending_objections:1,active_legal_disputes:0,ownership_disputes:0,court_stay_cases:0,rr_pending_cases:4,rr_completion_pct:94,schedule_variance_days:-12,milestones_overdue:0,pending_stakeholder_actions:2,avg_stakeholder_response_days:5.2,stakeholder_responsiveness_score:8.9,historical_avg_delay_days:14}},medium:{id:"preset-medium",name:"Western Freight Corridor",subtitle:"Baseline Model • FY26-Q1",tag:"MEDIUM RISK",values:{project_type:"Highway",land_type:"Agricultural",priority:"Normal",current_stage:"Notification",complexity_score:47.7,total_parcels:233,affected_families:113,land_area_hectares:132.47,planned_duration_days:607,days_since_notification:30,days_elapsed:30,days_in_current_stage:30,planned_stage_duration_days:26,acquisition_progress_pct:6.01,acquisition_velocity_pct_per_30d:6.13,parcels_pending:219,parcels_acquired:14,possession_pending_parcels:218,possession_progress_pct:6.47,documents_required:241,documents_pending:232,documents_verified:9,documentation_completion_pct:3.73,compensation_pending_cases:105,compensation_pending_amount:10.95,compensation_completion_pct:6.2,avg_compensation_delay_days:52.68,approvals_pending:5,overdue_approvals:2,avg_approval_delay_days:41.04,pending_objections:0,active_legal_disputes:0,ownership_disputes:0,court_stay_cases:0,rr_pending_cases:47,rr_completion_pct:4.08,schedule_variance_days:-7.19,milestones_overdue:1,pending_stakeholder_actions:7,avg_stakeholder_response_days:28.59,stakeholder_responsiveness_score:5.14,historical_avg_delay_days:100.8}},high:{id:"preset-high",name:"Docs Backlog Ph. 1",subtitle:"High Bottleneck • Stagnation Watchlist",tag:"HIGH RISK",values:{project_type:"Railway",land_type:"Commercial",priority:"Critical",current_stage:"Survey",complexity_score:68.5,total_parcels:1120,affected_families:420,land_area_hectares:210.5,planned_duration_days:900,days_since_notification:180,days_elapsed:180,days_in_current_stage:90,planned_stage_duration_days:60,acquisition_progress_pct:35,acquisition_velocity_pct_per_30d:2.5,parcels_pending:728,parcels_acquired:392,possession_pending_parcels:610,possession_progress_pct:28,documents_required:1120,documents_pending:580,documents_verified:540,documentation_completion_pct:48.2,compensation_pending_cases:240,compensation_pending_amount:42.6,compensation_completion_pct:38.5,avg_compensation_delay_days:72,approvals_pending:6,overdue_approvals:3,avg_approval_delay_days:65,pending_objections:18,active_legal_disputes:5,ownership_disputes:4,court_stay_cases:1,rr_pending_cases:85,rr_completion_pct:32,schedule_variance_days:54,milestones_overdue:3,pending_stakeholder_actions:9,avg_stakeholder_response_days:38,stakeholder_responsiveness_score:3.8,historical_avg_delay_days:95}},critical:{id:"preset-critical",name:"Court Injunction HC",subtitle:"Critical Hold • High Court Stay Active",tag:"CRITICAL RISK",values:{project_type:"Metro",land_type:"Industrial",priority:"Critical",current_stage:"Compensation",complexity_score:84,total_parcels:850,affected_families:610,land_area_hectares:184.2,planned_duration_days:1200,days_since_notification:360,days_elapsed:360,days_in_current_stage:180,planned_stage_duration_days:90,acquisition_progress_pct:22,acquisition_velocity_pct_per_30d:.8,parcels_pending:663,parcels_acquired:187,possession_pending_parcels:620,possession_progress_pct:18,documents_required:850,documents_pending:640,documents_verified:210,documentation_completion_pct:24.7,compensation_pending_cases:380,compensation_pending_amount:85.4,compensation_completion_pct:18,avg_compensation_delay_days:118,approvals_pending:9,overdue_approvals:6,avg_approval_delay_days:98,pending_objections:42,active_legal_disputes:14,ownership_disputes:8,court_stay_cases:4,rr_pending_cases:140,rr_completion_pct:14,schedule_variance_days:145,milestones_overdue:6,pending_stakeholder_actions:14,avg_stakeholder_response_days:52,stakeholder_responsiveness_score:2.1,historical_avg_delay_days:135}}},P=[{id:"BF-NH-2024-09",name:"Delhi-Amritsar Expressway (Pkg 4)",type:"Highway",sector:"National Highway",district:"Ludhiana",state:"Punjab",stage:"Sec 19 Declaration",progressPct:42,delayProbability:84.6,riskLevel:"CRITICAL",badgeClass:"bg-error-container text-on-error-container",presetKey:"critical"},{id:"BF-RL-2023-14",name:"Western Dedicated Freight Corridor",type:"Railway",sector:"Freight Rail Corridor",district:"Vadodara",state:"Gujarat",stage:"Compensation Award",progressPct:68,delayProbability:71.2,riskLevel:"HIGH",badgeClass:"bg-secondary-fixed text-on-secondary-fixed-variant",presetKey:"high"},{id:"BF-EN-2024-03",name:"Bhadla Solar Ultra Park Ext",type:"Power",sector:"Renewable Energy Grid",district:"Jodhpur",state:"Rajasthan",stage:"Joint Survey 3A",progressPct:31,delayProbability:58.4,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"},{id:"BF-NH-2024-22",name:"NH-66 Coastal Highway Expansion",type:"Highway",sector:"National Highway",district:"Udupi",state:"Karnataka",stage:"Notification",progressPct:54,delayProbability:42.3,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"},{id:"BF-MT-2024-05",name:"Pune Metro Line 3 Corridor",type:"Metro",sector:"Urban Mass Transit",district:"Pune",state:"Maharashtra",stage:"Rehabilitation",progressPct:79,delayProbability:34.8,riskLevel:"LOW",badgeClass:"bg-emerald-100 text-emerald-900 border border-emerald-300",presetKey:"low"},{id:"BF-IN-2024-18",name:"Dholera Special Investment Region Ph 1",type:"Industrial",sector:"Industrial Node / SEZ",district:"Ahmedabad",state:"Gujarat",stage:"Valuation",progressPct:62,delayProbability:46.1,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"}];function G(t){return typeof t!="number"||isNaN(t)?0:t>1?t/100:Math.max(0,t)}function g(t){const e=G(t);return e>=.8?"CRITICAL":e>=.6?"HIGH":e>=.4?"MEDIUM":"LOW"}function V(t){switch(typeof t=="string"?t.toUpperCase():g(t)){case"CRITICAL":return"Critical predicted delay risk";case"HIGH":return"High predicted delay risk";case"MEDIUM":return"Moderate predicted delay risk";case"LOW":default:return"Low predicted delay risk"}}function F(t){switch(typeof t=="string"?t.toUpperCase():g(t)){case"CRITICAL":return"Critical predicted delay risk based on the current project snapshot.";case"HIGH":return"High predicted delay risk based on the current project snapshot.";case"MEDIUM":return"Moderate predicted delay risk based on the current project snapshot.";case"LOW":default:return"Low predicted delay risk based on the current project snapshot."}}function W(t){switch(typeof t=="string"?t.toUpperCase():g(t)){case"CRITICAL":return"Risk Level: CRITICAL (Threshold ≥ 80%)";case"HIGH":return"Risk Level: HIGH (Threshold: 60% – 79.9%)";case"MEDIUM":return"Risk Level: MEDIUM (Threshold: 40% – 59.9%)";case"LOW":default:return"Risk Level: LOW (Threshold < 40%)"}}function L(t){switch(typeof t=="string"?t.toUpperCase():g(t)){case"CRITICAL":return"bg-red-100 text-red-900 border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800";case"HIGH":return"bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800";case"MEDIUM":return"bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800";case"LOW":default:return"bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800"}}function j(t){switch(typeof t=="string"?t.toUpperCase():g(t)){case"CRITICAL":return"text-red-600 dark:text-red-400";case"HIGH":return"text-orange-600 dark:text-orange-400";case"MEDIUM":return"text-amber-600 dark:text-amber-400";case"LOW":default:return"text-emerald-600 dark:text-emerald-400"}}function K(t){switch(typeof t=="string"?t.toUpperCase():g(t)){case"CRITICAL":return"text-red-600 dark:text-red-500";case"HIGH":return"text-orange-500 dark:text-orange-400";case"MEDIUM":return"text-amber-500 dark:text-amber-400";case"LOW":default:return"text-emerald-500 dark:text-emerald-400"}}function z(t,e,a){t.innerHTML=`
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
                    Live Model Active
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
                      ${q(P)}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  `;const s=t.querySelector("#projectSearchInput"),n=t.querySelector("#projectsTableBody");s&&n&&s.addEventListener("input",d=>{const c=d.target.value.toLowerCase().trim(),p=P.filter(f=>f.id.toLowerCase().includes(c)||f.name.toLowerCase().includes(c)||f.district.toLowerCase().includes(c)||f.state.toLowerCase().includes(c));n.innerHTML=q(p),N(t,e,a)});const o=t.querySelector("#openAssessmentCtaBtn"),r=t.querySelector("#jumpToAssessmentBtn");o&&e&&o.addEventListener("click",()=>e("medium")),r&&e&&r.addEventListener("click",()=>e("high")),N(t,e,a)}function q(t){return t.length===0?'<tr><td colspan="7" class="text-center py-4 text-on-surface-variant">No matching projects found.</td></tr>':t.map(e=>`
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
      <td class="py-space-sm px-space-sm font-tabular-data font-bold ${j(e.riskLevel||g(e.delayProbability))}">
        ${e.delayProbability}%
      </td>
      <td class="py-space-sm px-space-sm">
        <span class="px-2 py-0.5 rounded-full ${L(e.riskLevel||g(e.delayProbability))} font-label-sm text-label-sm font-bold inline-flex items-center gap-1 border">
          <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
          ${e.riskLevel||g(e.delayProbability)}
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
  `).join("")}function N(t,e,a){t.querySelectorAll(".assess-project-btn").forEach(s=>{s.addEventListener("click",()=>{const n=s.getAttribute("data-preset")||"medium";e&&e(n)})}),t.querySelectorAll(".audit-project-btn").forEach(s=>{s.addEventListener("click",()=>{const n=s.getAttribute("data-id");a&&a(n)})})}const U="http://127.0.0.1:8000";class I extends Error{constructor(e,a=null,s=null){super(e),this.name="ApiError",this.status=a,this.details=s}}async function $(t,e={}){const a=`${U}${t}`,s=new AbortController,n=setTimeout(()=>s.abort(),e.timeout||15e3),o={"Content-Type":"application/json",Accept:"application/json"};try{const r=await fetch(a,{...e,headers:{...o,...e.headers||{}},signal:s.signal});clearTimeout(n);const d=r.headers.get("content-type")||"";let c=null;if(d.includes("application/json")?c=await r.json():c=await r.text(),!r.ok){const p=c&&typeof c=="object"&&c.detail?c.detail:`Request failed with status ${r.status}`;throw new I(p,r.status,c)}return c}catch(r){throw clearTimeout(n),r instanceof I?r:r.name==="AbortError"?new I("Request timed out while contacting Bhoomi Sakha prediction engine.",408):(console.debug(`[ApiClient] Network request failed for ${t}:`,r),new I("Prediction service is temporarily unavailable. Please try again.",0,r))}}const M={baseUrl:U,get(t,e={}){return $(t,{...e,method:"GET"})},post(t,e,a={}){return $(t,{...a,method:"POST",body:JSON.stringify(e)})}},D={async checkHealth(){try{const t=await M.get("/health",{timeout:4e3});return{online:t.status==="healthy",modelLoaded:!!t.model_loaded,featureCount:t.features||76,raw:t}}catch(t){return{online:!1,modelLoaded:!1,featureCount:0,error:t.message}}},async getMetadata(){return M.get("/meta")},async predictRisk(t){return M.post("/predict",t)}};let A={activePreset:"medium",lastPrediction:null,isLoading:!1};function J(t,e="medium"){A.activePreset=e;const a=S[e]||S.medium;t.innerHTML=`
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
                MEDIUM RISK
              </span>
            </div>

            <!-- Delay Probability Radial Visualization -->
            <div class="flex flex-col items-center justify-center py-space-sm">
              <div class="relative flex items-center justify-center w-52 h-52">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle class="text-surface-container-high" cx="60" cy="60" fill="none" r="48" stroke="currentColor" stroke-width="10"></circle>
                  <circle class="text-secondary transition-all duration-700 ease-out" cx="60" cy="60" fill="none" id="probabilityCircle" r="48" stroke="currentColor" stroke-dasharray="301.59" stroke-dashoffset="174" stroke-linecap="round" stroke-width="10"></circle>
                </svg>
                <div class="absolute flex flex-col items-center justify-center text-center px-2">
                  <span class="font-headline-xl text-headline-xl font-bold text-on-surface font-tabular-data leading-none" id="probabilityValue">42.28%</span>
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">Predicted Delay Probability</span>
                  <span class="mt-1 font-label-sm text-[11px] font-semibold text-amber-600" id="decisionOutcome">Moderate predicted delay risk</span>
                </div>
              </div>

              <!-- Contextual Snapshot Summary & Statutory Threshold -->
              <div class="w-full mt-3 p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 border border-outline-variant/30 text-center">
                <p class="font-body-sm text-xs text-on-surface font-medium" id="riskSummaryText">
                  Moderate predicted delay risk based on the current project snapshot.
                </p>
                <div class="flex items-center justify-center gap-2 font-label-sm text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-high/60">
                  <span id="riskThresholdNote" class="font-semibold">Risk Level: MEDIUM (Threshold: 40% – 59.9%)</span>
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
  `,X(t,a)}function X(t,e){E(e.values),k(),t.querySelectorAll(".preset-pill").forEach(i=>{i.addEventListener("click",()=>{const b=i.getAttribute("data-preset");t.querySelectorAll(".preset-pill").forEach(u=>{u.classList.remove("bg-surface-container-high","ring-1","ring-secondary"),u.classList.add("bg-surface-container-low")}),i.classList.remove("bg-surface-container-low"),i.classList.add("bg-surface-container-high","ring-1","ring-secondary");const l=S[b];l&&(A.activePreset=b,E(l.values),k(),C(t))})});const a=t.querySelector("#field_docsPending"),s=t.querySelector("#field_docsReq");a&&a.addEventListener("input",k),s&&s.addEventListener("input",k);const n=t.querySelector("#runPredictionBtn");n&&n.addEventListener("click",()=>C(t));const o=t.querySelector("#resetScenarioBtn"),r=t.querySelector("#resetFormBtn"),d=()=>{const i=S[A.activePreset]||S.medium;E(i.values),k(),C(t)};o&&o.addEventListener("click",d),r&&r.addEventListener("click",d);const c=t.querySelector("#transparencyAccordionBtn"),p=t.querySelector("#transparencyContent"),f=t.querySelector("#accordionChevron");c&&p&&c.addEventListener("click",()=>{p.classList.contains("hidden")?(p.classList.remove("hidden"),f.style.transform="rotate(180deg)"):(p.classList.add("hidden"),f.style.transform="rotate(0deg)")}),C(t)}function k(){var o,r;const t=parseFloat((o=document.getElementById("field_docsReq"))==null?void 0:o.value)||1,e=parseFloat((r=document.getElementById("field_docsPending"))==null?void 0:r.value)||0,a=Math.max(0,Math.min(100,(t-e)/t*100)).toFixed(1),s=document.getElementById("label_docCompletion"),n=document.getElementById("bar_docCompletion");s&&(s.textContent=`${a}%`),n&&(n.style.width=`${a}%`)}function E(t){if(!t)return;const e=(a,s)=>{const n=document.getElementById(a);n&&s!==void 0&&(n.value=s)};e("field_projectType",t.project_type||"Highway"),e("field_landType",t.land_type||"Agricultural"),e("field_priority",t.priority||"Normal"),e("field_complexity",t.complexity_score??47.7),e("field_totalParcels",t.total_parcels??233),e("field_affectedFamilies",t.affected_families??113),e("field_landArea",t.land_area_hectares??132.5),e("field_plannedDuration",t.planned_duration_days??607),e("field_acqProgress",t.acquisition_progress_pct??6),e("field_velocity",t.acquisition_velocity_pct_per_30d??6.13),e("field_parcelsPending",t.parcels_pending??219),e("field_possessionPending",t.possession_pending_parcels??218),e("field_docsReq",t.documents_required??241),e("field_docsPending",t.documents_pending??232),e("field_compCases",t.compensation_pending_cases??105),e("field_compAmount",t.compensation_pending_amount??10.95),e("field_compDisbursed",t.compensation_completion_pct??6.2),e("field_apprPending",t.approvals_pending??5),e("field_apprOverdue",t.overdue_approvals??2),e("field_apprDelay",t.avg_approval_delay_days??41),e("field_pendingObj",t.pending_objections??0),e("field_activeDisputes",t.active_legal_disputes??0),e("field_ownerDisputes",t.ownership_disputes??0),e("field_courtStays",t.court_stay_cases??0),e("field_rrPending",t.rr_pending_cases??47),e("field_rrCompletion",t.rr_completion_pct??4.08),e("field_schedVariance",t.schedule_variance_days??-7.19),e("field_milestonesOverdue",t.milestones_overdue??1),e("field_shActions",t.pending_stakeholder_actions??7),e("field_shResponse",t.avg_stakeholder_response_days??28.59),e("field_shScore",t.stakeholder_responsiveness_score??5.14),e("field_histDelay",t.historical_avg_delay_days??100.8)}function Q(){var l;const t=(u,v=0)=>{var h;const x=parseFloat((h=document.getElementById(u))==null?void 0:h.value);return isNaN(x)?v:Math.max(0,x)},e=(u,v=0)=>{var h;const x=parseInt((h=document.getElementById(u))==null?void 0:h.value,10);return isNaN(x)?v:Math.max(0,x)},a=(u,v="")=>{var x;return((x=document.getElementById(u))==null?void 0:x.value)||v},s=e("field_totalParcels",200),n=e("field_parcelsPending",50),o=Math.max(0,s-n),r=e("field_docsReq",200),d=e("field_docsPending",50),c=Math.max(0,r-d),p=r>0?Math.min(100,Math.max(0,c/r*100)):0,f=e("field_compCases",10),i=t("field_compAmount",10),b=Math.min(100,t("field_compDisbursed",50));return{project_type:a("field_projectType","Highway"),land_type:a("field_landType","Mixed"),priority:a("field_priority","Normal"),current_stage:"Survey",complexity_score:t("field_complexity",40),total_parcels:s,parcels_pending:n,parcels_acquired:o,affected_families:t("field_affectedFamilies",50),land_area_hectares:t("field_landArea",100),planned_duration_days:e("field_plannedDuration",600),days_since_notification:30,days_elapsed:30,days_in_current_stage:30,planned_stage_duration_days:30,schedule_variance_days:parseFloat((l=document.getElementById("field_schedVariance"))==null?void 0:l.value)||0,milestones_due:2,milestones_completed:1,milestones_overdue:e("field_milestonesOverdue",0),acquisition_progress_pct:Math.min(100,t("field_acqProgress",50)),acquisition_velocity_pct_per_30d:t("field_velocity",5),possession_progress_pct:Math.min(100,(1-e("field_possessionPending",50)/Math.max(1,s))*100),possession_pending_parcels:e("field_possessionPending",50),compensation_total_amount:i*1.5,compensation_assessed_amount:i*1.2,compensation_disbursed_amount:i*.5,compensation_pending_amount:i,compensation_completion_pct:b,compensation_pending_cases:f,avg_compensation_delay_days:f*.5,documents_required:r,documents_verified:c,documents_pending:d,documentation_completion_pct:p,approvals_required:10,approvals_completed:5,approvals_pending:e("field_apprPending",2),approval_completion_pct:50,avg_approval_delay_days:t("field_apprDelay",10),overdue_approvals:e("field_apprOverdue",0),active_legal_disputes:e("field_activeDisputes",0),resolved_legal_disputes:0,ownership_disputes:e("field_ownerDisputes",0),court_stay_cases:e("field_courtStays",0),pending_objections:e("field_pendingObj",0),families_requiring_rr:e("field_rrPending",0)+10,families_rr_completed:10,rr_completion_pct:Math.min(100,t("field_rrCompletion",50)),rr_pending_cases:e("field_rrPending",0),pending_stakeholder_actions:e("field_shActions",0),avg_stakeholder_response_days:t("field_shResponse",10),stakeholder_responsiveness_score:t("field_shScore",5),interdepartmental_pending_actions:2,historical_avg_delay_days:t("field_histDelay",50)}}async function C(t){const e=t.querySelector("#loadingOverlay"),a=t.querySelector("#runPredictionBtn");e&&e.classList.remove("hidden"),a&&(a.disabled=!0,a.classList.add("opacity-70","cursor-not-allowed"));try{const s=Q(),n=await D.predictRisk(s);A.lastPrediction=n,Y(t,n)}catch(s){console.error("Prediction failed:",s),Z(t,s.message)}finally{e&&e.classList.add("hidden"),a&&(a.disabled=!1,a.classList.remove("opacity-70","cursor-not-allowed"))}}function Y(t,e){const a=e.delay_probability_pct!==void 0?e.delay_probability_pct:e.delay_probability!==void 0?e.delay_probability*100:0,s=typeof a=="number"&&!isNaN(a)?a:0,n=g(s),o=V(n),r=F(n),d=W(n),c=t.querySelector("#probabilityValue"),p=t.querySelector("#probabilityCircle"),f=t.querySelector("#decisionOutcome"),i=t.querySelector("#riskBadge"),b=t.querySelector("#riskSummaryText"),l=t.querySelector("#riskThresholdNote");c&&(c.textContent=`${s.toFixed(2)}%`),f&&(f.textContent=o,f.className=`mt-1 font-label-sm text-[11px] font-semibold ${j(n)}`),b&&(b.textContent=r),l&&(l.textContent=d);const u=301.59,v=u-u*(Math.min(100,Math.max(0,s))/100);p&&(p.style.strokeDashoffset=v,p.className=`transition-all duration-700 ease-out ${K(n)}`),i&&(i.textContent=`${n} RISK`,i.className=`px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider border ${L(n)}`);const x=t.querySelector("#riskIncreasingContainer");if(x){const y=e.risk_drivers||[];if(y.length===0)x.innerHTML=`
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          No major risk-increasing factors identified for this project state.
        </div>
      `;else{const _=Math.max(...y.map(m=>Math.abs(m.contribution)),.1);x.innerHTML=y.map(m=>{const R=Math.min(100,Math.max(15,Math.abs(m.contribution)/_*100)),H=m.contribution>.4?"bg-error":"bg-secondary-container";return`
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-semibold">${m.factor}: <span class="font-bold text-on-surface font-tabular-data">${m.value??"--"}</span></span>
              <span class="font-tabular-data font-bold text-error">+${m.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="${H} h-full rounded-full transition-all duration-700" style="width: ${R.toFixed(0)}%;"></div>
            </div>
            <span class="font-body-sm text-[11px] text-on-surface-variant italic">
              <strong>Action:</strong> ${m.recommendation||"Prioritize verification and monitoring."}
            </span>
          </div>
        `}).join("")}}const h=t.querySelector("#riskReducingContainer");if(h){const y=e.risk_reducing_factors||[];if(y.length===0)h.innerHTML=`
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          No significant risk-reducing factors detected.
        </div>
      `;else{const _=Math.max(...y.map(m=>Math.abs(m.contribution)),.1);h.innerHTML=y.map(m=>{const R=Math.min(100,Math.max(15,Math.abs(m.contribution)/_*100));return`
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-medium">${m.factor}: <span class="font-bold text-on-surface font-tabular-data">${m.value??"--"}</span></span>
              <span class="font-tabular-data font-semibold text-emerald-600">${m.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-600 h-full rounded-full transition-all duration-700" style="width: ${R.toFixed(0)}%;"></div>
            </div>
          </div>
        `}).join("")}}const B=t.querySelector("#directivesContainer");if(B){const y=e.risk_drivers||[];y.length>0?B.innerHTML=y.slice(0,2).map((_,m)=>`
          <div class="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm border border-outline-variant/30">
            <span class="px-1.5 py-0.5 rounded ${m===0?"bg-error text-on-error":"bg-secondary text-on-secondary"} font-label-sm text-[10px] font-bold shrink-0 mt-0.5">${m===0?"P1 PRIORITY":"P2 PRIORITY"}</span>
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm font-bold text-on-surface">${_.factor} Resolution</span>
              <p class="font-body-sm text-[12px] text-on-surface-variant mt-0.5">${_.recommendation}</p>
            </div>
          </div>
        `).join(""):B.innerHTML=`
        <div class="p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-xs">
          Statutory progress remains nominal. Continue scheduled monitoring under Section 19 protocols.
        </div>
      `}}function Z(t,e){const a=t.querySelector("#riskIncreasingContainer"),s=e&&!e.includes("uvicorn")?e:"Prediction service is temporarily unavailable. Please try again.";if(a){a.innerHTML=`
      <div class="p-space-sm rounded bg-error-container/40 border border-error text-on-surface flex flex-col gap-2">
        <div class="flex items-center gap-1.5 text-error font-bold text-label-sm">
          <span class="material-symbols-outlined text-[16px]">error</span>
          <span>Inference Unavailable</span>
        </div>
        <span class="font-body-sm text-xs text-on-surface">${s}</span>
        <button class="mt-1 self-start px-2.5 py-1 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-xs font-semibold rounded border border-outline-variant/40 shadow-sm flex items-center gap-1 transition-colors" id="retryPredictionBtn" type="button">
          <span class="material-symbols-outlined text-[14px]">refresh</span>
          <span>Retry Assessment</span>
        </button>
      </div>
    `;const n=a.querySelector("#retryPredictionBtn");n&&n.addEventListener("click",()=>C(t))}}function ee(t,e,a){t.innerHTML=`
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
  `;const s=t.querySelector("#directoryTableBody"),n=t.querySelector("#directorySearchInput"),o=t.querySelector("#filterSector"),r=t.querySelector("#filterRisk"),d=()=>{const p=((n==null?void 0:n.value)||"").toLowerCase().trim(),f=(o==null?void 0:o.value)||"all",i=(r==null?void 0:r.value)||"all",b=P.filter(l=>{const u=l.id.toLowerCase().includes(p)||l.name.toLowerCase().includes(p)||l.district.toLowerCase().includes(p)||l.state.toLowerCase().includes(p),v=f==="all"||l.type===f,x=i==="all"||l.riskLevel===i;return u&&v&&x});if(b.length===0){s.innerHTML='<tr><td colspan="8" class="text-center py-6 text-on-surface-variant">No matching records found in national database.</td></tr>';return}s.innerHTML=b.map(l=>`
      <tr class="hover:bg-surface-container-low/70 transition-colors">
        <td class="py-space-md px-space-md font-tabular-data font-bold text-on-surface">${l.id}</td>
        <td class="py-space-md px-space-md">
          <div class="flex flex-col">
            <span class="font-semibold text-on-surface">${l.name}</span>
            <span class="text-on-surface-variant font-label-sm text-xs">${l.sector}</span>
          </div>
        </td>
        <td class="py-space-md px-space-md text-on-surface-variant">${l.district}, ${l.state}</td>
        <td class="py-space-md px-space-md">
          <span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-xs">${l.stage}</span>
        </td>
        <td class="py-space-md px-space-md font-tabular-data">
          <div class="flex items-center gap-2">
            <span class="font-bold text-on-surface">${l.progressPct}%</span>
            <div class="w-16 h-2 rounded-full bg-surface-container-high overflow-hidden">
              <div class="h-full bg-primary" style="width: ${l.progressPct}%"></div>
            </div>
          </div>
        </td>
        <td class="py-space-md px-space-md font-tabular-data font-bold ${j(l.riskLevel||g(l.delayProbability))}">${l.delayProbability}%</td>
        <td class="py-space-md px-space-md">
          <span class="px-2 py-0.5 rounded-full ${L(l.riskLevel||g(l.delayProbability))} font-label-sm text-xs font-bold border">${l.riskLevel||g(l.delayProbability)}</span>
        </td>
        <td class="py-space-md px-space-md text-right">
          <div class="inline-flex items-center gap-1.5">
            <button class="dir-assess-btn px-2 py-1 bg-primary text-on-primary rounded font-label-sm text-xs font-bold hover:bg-surface-tint transition-colors" data-preset="${l.presetKey||"medium"}" type="button">
              Assess Risk
            </button>
            <button class="dir-audit-btn px-2 py-1 bg-surface-container text-on-surface rounded font-label-sm text-xs font-medium hover:bg-surface-container-high transition-colors" data-id="${l.id}" type="button">
              Deep Audit
            </button>
          </div>
        </td>
      </tr>
    `).join(""),s.querySelectorAll(".dir-assess-btn").forEach(l=>{l.addEventListener("click",()=>{const u=l.getAttribute("data-preset");e&&e(u)})}),s.querySelectorAll(".dir-audit-btn").forEach(l=>{l.addEventListener("click",()=>{const u=l.getAttribute("data-id");a&&a(u)})})};n&&n.addEventListener("input",d),o&&o.addEventListener("change",d),r&&r.addEventListener("change",d);const c=t.querySelector("#newAssessmentBtn");c&&e&&c.addEventListener("click",()=>e("medium")),d()}function te(t,e="BF-NH-2024-09",a){const s=P.find(d=>d.id===e)||P[0],n=g(s.delayProbability);t.innerHTML=`
    <div class="flex flex-col w-full">
      <!-- Contextual Ribbon / Meta Bar -->
      <div class="w-full bg-surface-container-low px-gutter-desktop py-space-sm flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div class="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant flex-wrap">
          <span class="hover:text-on-surface cursor-pointer" id="backToProjectsBreadcrumb">Projects</span>
          <span>/</span>
          <span>${s.state}</span>
          <span>/</span>
          <span class="text-on-surface font-semibold font-tabular-data">${s.id}</span>
          <span>/</span>
          <span class="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-semibold">Detailed Risk Analysis</span>
        </div>
        <div class="flex items-center gap-space-md font-label-sm text-label-sm">
          <span class="inline-flex items-center gap-1.5 text-on-surface-variant">
            <span class="material-symbols-outlined text-[15px] text-secondary">verified_user</span>
            Statutory Hash: <span class="font-tabular-data text-on-surface font-semibold">SHA256-7D88-${s.district.substring(0,3).toUpperCase()}</span>
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
                ${s.id}
              </span>
              <span class="px-space-xs py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded uppercase font-semibold">
                National Corridor (${s.sector})
              </span>
              <span class="px-space-xs py-0.5 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded">
                MoRTH / Authority Corridors Wing
              </span>
              <span class="px-space-xs py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded flex items-center gap-1">
                <span class="material-symbols-outlined text-[13px]">gavel</span>
                Stage: ${s.stage}
              </span>
            </div>
            <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              ${s.name}
            </h1>
            <div class="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                District: ${s.district}, ${s.state}
              </span>
              <span>•</span>
              <span class="flex items-center gap-1 font-tabular-data">
                <span class="material-symbols-outlined text-[16px]">straighten</span>
                Alignment: Ch. 124+400 to 168+200 (43.8 km)
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">account_balance</span>
                CALA: Competent Authority Land Acquisition, ${s.district} Division
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
          <div class="lg:col-span-4 ${n==="CRITICAL"?"bg-error-container/40":n==="HIGH"?"bg-orange-50 dark:bg-orange-950/40":n==="MEDIUM"?"bg-amber-50 dark:bg-amber-950/40":"bg-emerald-50 dark:bg-emerald-950/40"} p-space-xl flex flex-col justify-between relative overflow-hidden">
            <div class="flex flex-col gap-space-md relative z-10">
              <div class="flex items-center justify-between">
                <span class="px-space-xs py-1 rounded ${L(n)} font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm border">
                  <span class="w-2 h-2 rounded-full bg-current animate-ping"></span>
                  ${n} Risk Tier
                </span>
                <span class="font-tabular-data text-label-sm font-semibold">XGB-26017 Engine</span>
              </div>
              <div class="flex flex-col pt-space-xs">
                <span class="font-label-md text-label-md uppercase tracking-wide text-on-surface-variant font-semibold">Model Delay Probability</span>
                <div class="flex items-baseline gap-space-xs">
                  <span class="font-headline-xl text-headline-xl font-tabular-data ${j(n)} font-extrabold tracking-tight">${s.delayProbability}%</span>
                  <span class="font-headline-sm text-headline-sm font-bold text-on-surface">PROBABILITY</span>
                </div>
              </div>
              <div class="p-space-sm rounded bg-surface-container-lowest/80 shadow-sm backdrop-blur-sm flex flex-col gap-0.5 border border-outline-variant/30">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Predicted Statutory Impact</span>
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                  ${F(n)}
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
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">${s.progressPct}%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-primary h-full rounded-full" style="width: ${s.progressPct}%"></div>
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
  `;const o=t.querySelector("#detailRerunBtn");o&&a&&o.addEventListener("click",()=>a(s.presetKey||"medium"));const r=t.querySelector("#backToProjectsBreadcrumb");r&&r.addEventListener("click",()=>{window.location.hash="#/projects"})}const O="bhoomi_notifications_read",T=[{id:"notif-crit-1",category:"Risk Alert",severity:"critical",title:"Critical delay risk detected in current assessment",summary:"Delhi-Amritsar Expressway (Pkg 4) evaluated with 84.6% delay probability requiring urgent Section 19 intervention.",timestamp:"15 mins ago",actionRoute:"#/assessment?preset=critical",actionLabel:"Inspect Assessment"},{id:"notif-engine-2",category:"Engine",severity:"info",title:"Backend prediction engine connected",summary:"FastAPI service connected with 76 engineered cadastral features ready for live XGBoost inference.",timestamp:"1 hour ago",actionRoute:"#/dashboard",actionLabel:"View Dashboard"},{id:"notif-atten-3",category:"Officer Attention",severity:"high",title:"Assessment contains factors requiring officer attention",summary:"18 high-bottleneck parcel cases in Western Freight Corridor flagged for documentation backlog review.",timestamp:"3 hours ago",actionRoute:"#/assessment?preset=high",actionLabel:"Review Factors"},{id:"notif-stat-4",category:"System",severity:"info",title:"Risk assessment pipeline initialized",summary:"National Cadastral Matrix synchronized with 142 monitored infrastructure corridors.",timestamp:"Today, 09:30 AM",actionRoute:"#/projects",actionLabel:"Projects Directory"}];class ae{constructor(){this.listeners=[]}getReadIds(){try{const e=localStorage.getItem(O);return e?JSON.parse(e):[]}catch{return[]}}saveReadIds(e){try{localStorage.setItem(O,JSON.stringify(e)),this.notifyListeners()}catch(a){console.error("Failed to save read notifications:",a)}}getAll(){const e=new Set(this.getReadIds());return T.map(a=>({...a,isRead:e.has(a.id)}))}getUnreadCount(){const e=new Set(this.getReadIds());return T.filter(a=>!e.has(a.id)).length}markAsRead(e){const a=new Set(this.getReadIds());a.add(e),this.saveReadIds(Array.from(a))}markAsUnread(e){const a=new Set(this.getReadIds());a.delete(e),this.saveReadIds(Array.from(a))}markAllAsRead(){const e=T.map(a=>a.id);this.saveReadIds(e)}resetAll(){this.saveReadIds([])}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(a=>a!==e)}}notifyListeners(){const e=this.getUnreadCount();this.listeners.forEach(a=>a(e))}}const w=new ae;function se(t,e){let a="all";function s(){const n=w.getAll(),o=w.getUnreadCount(),r=a==="unread"?n.filter(i=>!i.isRead):n;t.innerHTML=`
      <div class="px-margin-desktop py-space-xl flex flex-col gap-space-lg w-full max-w-5xl mx-auto">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md border-b border-outline-variant/30 pb-space-md">
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
              <h1 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">System Notifications</h1>
              ${o>0?`
                <span class="px-2 py-0.5 rounded-full bg-error text-white font-label-sm text-xs font-bold font-tabular-data">
                  ${o} Unread
                </span>
              `:`
                <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-xs font-semibold">
                  All Caught Up
                </span>
              `}
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Application alerts, inference milestones, and statutory threshold notifications generated by Bhoomi Sakha.
            </p>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 self-start sm:self-auto">
            ${o>0?`
              <button class="px-space-md py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-xs font-semibold rounded border border-outline-variant/40 flex items-center gap-1.5 transition-colors" id="markAllReadBtn" type="button">
                <span class="material-symbols-outlined text-[16px]">done_all</span>
                <span>Mark All Read</span>
              </button>
            `:`
              <button class="px-space-md py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-sm text-xs font-medium rounded border border-outline-variant/30 flex items-center gap-1.5 transition-colors" id="resetNotifsBtn" type="button">
                <span class="material-symbols-outlined text-[16px]">refresh</span>
                <span>Reset Demo Alerts</span>
              </button>
            `}
          </div>
        </div>

        <!-- Filter Controls -->
        <div class="flex items-center gap-2">
          <button class="px-3 py-1 rounded font-label-sm text-xs font-semibold transition-all ${a==="all"?"bg-primary text-on-primary shadow-sm":"bg-surface-container-low text-on-surface-variant hover:text-on-surface"}" id="filterAllBtn" type="button">
            All (${n.length})
          </button>
          <button class="px-3 py-1 rounded font-label-sm text-xs font-semibold transition-all ${a==="unread"?"bg-primary text-on-primary shadow-sm":"bg-surface-container-low text-on-surface-variant hover:text-on-surface"}" id="filterUnreadBtn" type="button">
            Unread (${o})
          </button>
        </div>

        <!-- Notification List -->
        <div class="flex flex-col gap-3" id="notificationsList">
          ${r.length===0?`
            <div class="p-space-xl bg-surface-container-lowest rounded-xl border border-outline-variant/30 text-center flex flex-col items-center justify-center gap-2">
              <span class="material-symbols-outlined text-[36px] text-on-surface-variant/60">notifications_off</span>
              <span class="font-headline-sm text-base text-on-surface font-bold">No notifications to display</span>
              <p class="font-body-sm text-xs text-on-surface-variant">There are currently no notifications under this filter.</p>
            </div>
          `:r.map(i=>{const b=i.severity==="critical"?"border-l-4 border-l-red-500 bg-red-50/20 dark:bg-red-950/20":i.severity==="high"?"border-l-4 border-l-orange-500 bg-orange-50/20 dark:bg-orange-950/20":"border-l-4 border-l-sky-500 bg-sky-50/20 dark:bg-sky-950/20",l=i.isRead?"opacity-85 border border-outline-variant/20 bg-surface-container-lowest":"border border-outline-variant/50 shadow-sm";return`
              <div class="p-space-md rounded-xl ${b} ${l} bg-surface-container-lowest flex flex-col md:flex-row md:items-center justify-between gap-space-sm transition-all" data-id="${i.id}">
                <div class="flex items-start gap-space-sm">
                  <div class="mt-0.5 shrink-0">
                    ${i.isRead?`
                      <span class="w-2.5 h-2.5 rounded-full bg-surface-container-high block"></span>
                    `:`
                      <span class="w-2.5 h-2.5 rounded-full bg-secondary-container block ring-2 ring-surface-container-lowest"></span>
                    `}
                  </div>
                  <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="px-2 py-0.5 rounded font-label-sm text-[10px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface">
                        ${i.category}
                      </span>
                      <span class="font-body-sm text-xs text-on-surface-variant font-tabular-data">${i.timestamp}</span>
                      ${i.isRead?"":`
                        <span class="px-1.5 py-0.2 rounded text-[10px] bg-secondary-fixed text-on-secondary-fixed font-bold uppercase">New</span>
                      `}
                    </div>
                    <h3 class="font-headline-sm text-base text-on-surface font-semibold ${i.isRead?"":"font-bold"}">
                      ${i.title}
                    </h3>
                    <p class="font-body-sm text-xs text-on-surface-variant max-w-2xl">
                      ${i.summary}
                    </p>
                  </div>
                </div>

                <!-- Card Actions -->
                <div class="flex items-center gap-2 shrink-0 self-end md:self-center pl-6 md:pl-0">
                  <a class="px-3 py-1.5 rounded font-label-sm text-xs font-semibold bg-primary text-on-primary hover:bg-surface-tint transition-colors flex items-center gap-1" href="${i.actionRoute}">
                    <span>${i.actionLabel}</span>
                    <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                  <button class="toggle-read-btn p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-id="${i.id}" title="${i.isRead?"Mark as Unread":"Mark as Read"}" type="button">
                    <span class="material-symbols-outlined text-[18px]">
                      ${i.isRead?"mark_email_unread":"check_circle"}
                    </span>
                  </button>
                </div>
              </div>
            `}).join("")}
        </div>

      </div>
    `;const d=t.querySelector("#markAllReadBtn");d&&d.addEventListener("click",()=>{w.markAllAsRead(),s(),e&&e()});const c=t.querySelector("#resetNotifsBtn");c&&c.addEventListener("click",()=>{w.resetAll(),s(),e&&e()});const p=t.querySelector("#filterAllBtn");p&&p.addEventListener("click",()=>{a="all",s()});const f=t.querySelector("#filterUnreadBtn");f&&f.addEventListener("click",()=>{a="unread",s()}),t.querySelectorAll(".toggle-read-btn").forEach(i=>{i.addEventListener("click",b=>{b.stopPropagation();const l=i.getAttribute("data-id"),u=w.getAll().find(v=>v.id===l);u!=null&&u.isRead?w.markAsUnread(l):w.markAsRead(l),s(),e&&e()})})}s()}class ne{constructor(){this.container=document.getElementById("appViewContainer"),this.currentView="dashboard",this.isBackendOnline=!1,this.healthInterval=null,this.clockInterval=null}init(){this.setupNavigation(),this.setupClock(),this.setupNotificationBell(),this.startHealthPolling(),this.handleRouting(),window.addEventListener("hashchange",()=>this.handleRouting());const e=document.getElementById("brandHeaderHome");e&&e.addEventListener("click",()=>{window.location.hash="#/dashboard"});const a=document.getElementById("backendStatusPill");a&&a.addEventListener("click",()=>this.checkBackendHealth(!0))}setupNotificationBell(){const e=document.getElementById("notifBellBtn");e&&e.addEventListener("click",()=>{window.location.hash="#/notifications"}),this.updateNotificationBadge(),w.subscribe(()=>this.updateNotificationBadge())}updateNotificationBadge(){const e=w.getUnreadCount(),a=document.getElementById("notifBellBadge"),s=document.getElementById("notifBellBtn");a&&(e>0?(a.textContent=e>9?"9+":e,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden"))),s&&s.setAttribute("title",e>0?`${e} Unread System Notifications`:"No Unread Notifications")}setupNavigation(){const e=document.querySelectorAll(".nav-tab");e.forEach(a=>{a.addEventListener("click",s=>{e.forEach(n=>{n.className="nav-tab px-space-md py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded",n.removeAttribute("aria-current")}),a.className="nav-tab px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-label-md rounded-lg shadow-sm font-semibold",a.setAttribute("aria-current","page")})})}updateNavState(e){document.querySelectorAll(".nav-tab").forEach(o=>{o.getAttribute("data-target")===e?(o.className="nav-tab px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-label-md rounded-lg shadow-sm font-semibold",o.setAttribute("aria-current","page")):(o.className="nav-tab px-space-md py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded",o.removeAttribute("aria-current"))});const s={dashboard:"National Cadastral Matrix (Overview)",assessment:"Predictive Delay-Risk Assessment Cockpit",projects:"National Land Acquisition Projects Directory",audit:"Cadastral & Risk Detailed Dossier",notifications:"System Notifications & Operational Alerts"},n=document.getElementById("currentViewName");n&&(n.textContent=s[e]||"Executive Command Center")}handleRouting(){const e=window.location.hash||"#/dashboard",[a,s]=e.replace("#/","").split("?"),n=new URLSearchParams(s||"");switch(this.currentView=a||"dashboard",this.updateNavState(this.currentView),window.scrollTo({top:0,behavior:"smooth"}),this.currentView){case"notifications":se(this.container,()=>this.updateNotificationBadge());break;case"assessment":const o=n.get("preset")||"medium";J(this.container,o);break;case"projects":ee(this.container,d=>{window.location.hash=`#/assessment?preset=${d}`},d=>{window.location.hash=`#/audit?id=${d}`});break;case"audit":const r=n.get("id")||"BF-NH-2024-09";te(this.container,r,d=>{window.location.hash=`#/assessment?preset=${d}`});break;case"dashboard":default:this.currentView="dashboard",z(this.container,d=>{window.location.hash=`#/assessment?preset=${d}`},d=>{window.location.hash=`#/audit?id=${d}`});break}}setupClock(){const e=()=>{const a=document.getElementById("liveISTClock");if(a){const s=new Date,n={timeZone:"Asia/Kolkata",hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"};a.textContent=s.toLocaleTimeString("en-GB",n)}};e(),this.clockInterval=setInterval(e,1e3)}async checkBackendHealth(e=!1){var o,r;const a=document.getElementById("backendStatusDot"),s=document.getElementById("backendStatusText");a&&(a.innerHTML='<span class="animate-pulse relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>'),s&&!this.isBackendOnline&&(s.textContent="Backend: Connecting...",s.className="font-label-sm text-label-sm text-on-surface-variant font-tabular-data");const n=await D.checkHealth();if(n.online&&n.modelLoaded){let d="FastAPI Connected • XGBoost Engine Active";try{this.cachedMetadata||(this.cachedMetadata=await D.getMetadata()),(r=(o=this.cachedMetadata)==null?void 0:o.model)!=null&&r.version&&(d=`FastAPI Connected • XGBoost Engine v${this.cachedMetadata.model.version} Active`)}catch{}a&&(a.innerHTML=`
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        `),s&&(s.textContent=d,s.className="font-label-sm text-label-sm text-on-surface font-tabular-data font-semibold"),!this.isBackendOnline&&e&&this.showToast("Backend connected: XGBoost binary classifier loaded.","success"),this.isBackendOnline=!0}else a&&(a.innerHTML=`
          <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        `),s&&(s.textContent="Backend Unavailable • Click to Retry",s.className="font-label-sm text-label-sm text-red-600 dark:text-red-400 font-tabular-data font-semibold"),(this.isBackendOnline||e)&&this.showToast("Prediction service is temporarily unavailable. Please try again.","warning"),this.isBackendOnline=!1}startHealthPolling(){this.checkBackendHealth(),this.healthInterval=setInterval(()=>this.checkBackendHealth(),6e3)}showToast(e,a="info"){const s=document.getElementById("toastContainer");if(!s)return;const n=document.createElement("div"),o=a==="success"?"bg-primary-container text-on-primary border-secondary":"bg-amber-100 text-amber-950 border-amber-400";n.className=`${o} px-4 py-3 rounded-lg shadow-lg border text-sm max-w-md pointer-events-auto flex items-start gap-2 transition-all duration-300 transform translate-y-2 opacity-0`,n.innerHTML=`
      <span class="material-symbols-outlined text-[18px] text-secondary-container mt-0.5">info</span>
      <span class="flex-1">${e}</span>
    `,s.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("translate-y-2","opacity-0")}),setTimeout(()=>{n.classList.add("opacity-0","translate-y-2"),setTimeout(()=>n.remove(),300)},4500)}}document.addEventListener("DOMContentLoaded",()=>{new ne().init()});

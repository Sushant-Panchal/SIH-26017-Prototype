(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const L={low:{id:"preset-low",name:"NH-44 Bypass Ph. 2",subtitle:"Low Delay • Clear Title",tag:"LOW RISK",values:{project_type:"Highway",land_type:"Agricultural",priority:"Normal",current_stage:"Notification",complexity_score:22.4,total_parcels:350,affected_families:48,land_area_hectares:65.2,planned_duration_days:420,days_since_notification:45,days_elapsed:45,days_in_current_stage:45,planned_stage_duration_days:60,acquisition_progress_pct:88.5,acquisition_velocity_pct_per_30d:14.8,parcels_pending:40,parcels_acquired:310,possession_pending_parcels:25,possession_progress_pct:92.8,documents_required:350,documents_pending:18,documents_verified:332,documentation_completion_pct:94.9,compensation_pending_cases:12,compensation_pending_amount:3.5,compensation_completion_pct:96.2,avg_compensation_delay_days:8,approvals_pending:1,overdue_approvals:0,avg_approval_delay_days:4,pending_objections:1,active_legal_disputes:0,ownership_disputes:0,court_stay_cases:0,rr_pending_cases:4,rr_completion_pct:94,schedule_variance_days:-12,milestones_overdue:0,pending_stakeholder_actions:2,avg_stakeholder_response_days:5.2,stakeholder_responsiveness_score:8.9,historical_avg_delay_days:14}},medium:{id:"preset-medium",name:"Western Freight Corridor",subtitle:"Baseline Model • FY26-Q1",tag:"MEDIUM RISK",values:{project_type:"Highway",land_type:"Agricultural",priority:"Normal",current_stage:"Notification",complexity_score:47.7,total_parcels:233,affected_families:113,land_area_hectares:132.47,planned_duration_days:607,days_since_notification:30,days_elapsed:30,days_in_current_stage:30,planned_stage_duration_days:26,acquisition_progress_pct:6.01,acquisition_velocity_pct_per_30d:6.13,parcels_pending:219,parcels_acquired:14,possession_pending_parcels:218,possession_progress_pct:6.47,documents_required:241,documents_pending:232,documents_verified:9,documentation_completion_pct:3.73,compensation_pending_cases:105,compensation_pending_amount:10.95,compensation_completion_pct:6.2,avg_compensation_delay_days:52.68,approvals_pending:5,overdue_approvals:2,avg_approval_delay_days:41.04,pending_objections:0,active_legal_disputes:0,ownership_disputes:0,court_stay_cases:0,rr_pending_cases:47,rr_completion_pct:4.08,schedule_variance_days:-7.19,milestones_overdue:1,pending_stakeholder_actions:7,avg_stakeholder_response_days:28.59,stakeholder_responsiveness_score:5.14,historical_avg_delay_days:100.8}},high:{id:"preset-high",name:"Docs Backlog Ph. 1",subtitle:"High Bottleneck • Stagnation Watchlist",tag:"HIGH RISK",values:{project_type:"Railway",land_type:"Commercial",priority:"Critical",current_stage:"Survey",complexity_score:68.5,total_parcels:1120,affected_families:420,land_area_hectares:210.5,planned_duration_days:900,days_since_notification:180,days_elapsed:180,days_in_current_stage:90,planned_stage_duration_days:60,acquisition_progress_pct:35,acquisition_velocity_pct_per_30d:2.5,parcels_pending:728,parcels_acquired:392,possession_pending_parcels:610,possession_progress_pct:28,documents_required:1120,documents_pending:580,documents_verified:540,documentation_completion_pct:48.2,compensation_pending_cases:240,compensation_pending_amount:42.6,compensation_completion_pct:38.5,avg_compensation_delay_days:72,approvals_pending:6,overdue_approvals:3,avg_approval_delay_days:65,pending_objections:18,active_legal_disputes:5,ownership_disputes:4,court_stay_cases:1,rr_pending_cases:85,rr_completion_pct:32,schedule_variance_days:54,milestones_overdue:3,pending_stakeholder_actions:9,avg_stakeholder_response_days:38,stakeholder_responsiveness_score:3.8,historical_avg_delay_days:95}},critical:{id:"preset-critical",name:"Court Injunction HC",subtitle:"Critical Hold • High Court Stay Active",tag:"CRITICAL RISK",values:{project_type:"Metro",land_type:"Industrial",priority:"Critical",current_stage:"Compensation",complexity_score:84,total_parcels:850,affected_families:610,land_area_hectares:184.2,planned_duration_days:1200,days_since_notification:360,days_elapsed:360,days_in_current_stage:180,planned_stage_duration_days:90,acquisition_progress_pct:22,acquisition_velocity_pct_per_30d:.8,parcels_pending:663,parcels_acquired:187,possession_pending_parcels:620,possession_progress_pct:18,documents_required:850,documents_pending:640,documents_verified:210,documentation_completion_pct:24.7,compensation_pending_cases:380,compensation_pending_amount:85.4,compensation_completion_pct:18,avg_compensation_delay_days:118,approvals_pending:9,overdue_approvals:6,avg_approval_delay_days:98,pending_objections:42,active_legal_disputes:14,ownership_disputes:8,court_stay_cases:4,rr_pending_cases:140,rr_completion_pct:14,schedule_variance_days:145,milestones_overdue:6,pending_stakeholder_actions:14,avg_stakeholder_response_days:52,stakeholder_responsiveness_score:2.1,historical_avg_delay_days:135}}},P=[{id:"BF-NH-2024-09",name:"Delhi-Amritsar Expressway (Pkg 4)",type:"Highway",sector:"National Highway",district:"Ludhiana",state:"Punjab",stage:"Sec 19 Declaration",progressPct:42,delayProbability:84.6,riskLevel:"CRITICAL",badgeClass:"bg-error-container text-on-error-container",presetKey:"critical"},{id:"BF-RL-2023-14",name:"Western Dedicated Freight Corridor",type:"Railway",sector:"Freight Rail Corridor",district:"Vadodara",state:"Gujarat",stage:"Compensation Award",progressPct:68,delayProbability:71.2,riskLevel:"HIGH",badgeClass:"bg-secondary-fixed text-on-secondary-fixed-variant",presetKey:"high"},{id:"BF-EN-2024-03",name:"Bhadla Solar Ultra Park Ext",type:"Power",sector:"Renewable Energy Grid",district:"Jodhpur",state:"Rajasthan",stage:"Joint Survey 3A",progressPct:31,delayProbability:58.4,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"},{id:"BF-NH-2024-22",name:"NH-66 Coastal Highway Expansion",type:"Highway",sector:"National Highway",district:"Udupi",state:"Karnataka",stage:"Notification",progressPct:54,delayProbability:42.3,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"},{id:"BF-MT-2024-05",name:"Pune Metro Line 3 Corridor",type:"Metro",sector:"Urban Mass Transit",district:"Pune",state:"Maharashtra",stage:"Rehabilitation",progressPct:79,delayProbability:34.8,riskLevel:"LOW",badgeClass:"bg-emerald-100 text-emerald-900 border border-emerald-300",presetKey:"low"},{id:"BF-IN-2024-18",name:"Dholera Special Investment Region Ph 1",type:"Industrial",sector:"Industrial Node / SEZ",district:"Ahmedabad",state:"Gujarat",stage:"Valuation",progressPct:62,delayProbability:46.1,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"}];function ae(t){return typeof t!="number"||isNaN(t)?0:t>1?t/100:Math.max(0,t)}function h(t){const e=ae(t);return e>=.8?"CRITICAL":e>=.6?"HIGH":e>=.4?"MEDIUM":"LOW"}function se(t){switch(typeof t=="string"?t.toUpperCase():h(t)){case"CRITICAL":return"Critical predicted delay risk";case"HIGH":return"High predicted delay risk";case"MEDIUM":return"Moderate predicted delay risk";case"LOW":default:return"Low predicted delay risk"}}function N(t){switch(typeof t=="string"?t.toUpperCase():h(t)){case"CRITICAL":return"Critical predicted delay risk based on the current project snapshot.";case"HIGH":return"High predicted delay risk based on the current project snapshot.";case"MEDIUM":return"Moderate predicted delay risk based on the current project snapshot.";case"LOW":default:return"Low predicted delay risk based on the current project snapshot."}}function ne(t){switch(typeof t=="string"?t.toUpperCase():h(t)){case"CRITICAL":return"Risk Level: CRITICAL (Threshold ≥ 80%)";case"HIGH":return"Risk Level: HIGH (Threshold: 60% – 79.9%)";case"MEDIUM":return"Risk Level: MEDIUM (Threshold: 40% – 59.9%)";case"LOW":default:return"Risk Level: LOW (Threshold < 40%)"}}function H(t){switch(typeof t=="string"?t.toUpperCase():h(t)){case"CRITICAL":return"bg-red-100 text-red-900 border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800";case"HIGH":return"bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800";case"MEDIUM":return"bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800";case"LOW":default:return"bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800"}}function T(t){switch(typeof t=="string"?t.toUpperCase():h(t)){case"CRITICAL":return"text-red-600 dark:text-red-400";case"HIGH":return"text-orange-600 dark:text-orange-400";case"MEDIUM":return"text-amber-600 dark:text-amber-400";case"LOW":default:return"text-emerald-600 dark:text-emerald-400"}}function ie(t){switch(typeof t=="string"?t.toUpperCase():h(t)){case"CRITICAL":return"text-red-600 dark:text-red-500";case"HIGH":return"text-orange-500 dark:text-orange-400";case"MEDIUM":return"text-amber-500 dark:text-amber-400";case"LOW":default:return"text-emerald-500 dark:text-emerald-400"}}class re{constructor(){this.supported=typeof window<"u"&&"speechSynthesis"in window,this.voices=[],this.currentUtterance=null,this.state="idle",this.activeListener=null,this.supported&&(this.loadVoices(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=()=>this.loadVoices()))}loadVoices(){this.supported&&(this.voices=window.speechSynthesis.getVoices())}getBestVoice(e="en"){(!this.voices||this.voices.length===0)&&this.loadVoices();const a=e.toLowerCase(),n={en:["en-IN","en-GB","en-US","en"],hi:["hi-IN","hi"],mr:["mr-IN","mr","hi-IN"]}[a]||[a];for(const r of n){const i=this.voices.find(o=>o.lang.toLowerCase()===r.toLowerCase()||o.lang.toLowerCase().startsWith(r.toLowerCase()));if(i)return i}return this.voices[0]||null}speak(e,a="en",s=null){if(!this.supported)return console.warn("Speech synthesis is not supported in this browser environment."),!1;if(!e||typeof e!="string")return!1;this.stop(),this.activeListener=s;const n=new SpeechSynthesisUtterance(e),r=this.getBestVoice(a);return r&&(n.voice=r,n.lang=r.lang),n.rate=.95,n.pitch=1,n.onstart=()=>{this.state="speaking",this.activeListener&&this.activeListener("speaking")},n.onpause=()=>{this.state="paused",this.activeListener&&this.activeListener("paused")},n.onresume=()=>{this.state="speaking",this.activeListener&&this.activeListener("speaking")},n.onend=()=>{this.state="idle",this.currentUtterance=null,this.activeListener&&this.activeListener("idle")},n.onerror=i=>{console.warn("SpeechSynthesis error:",i),this.state="idle",this.currentUtterance=null,this.activeListener&&this.activeListener("idle")},this.currentUtterance=n,window.speechSynthesis.speak(n),!0}pause(){this.supported&&this.state==="speaking"&&(window.speechSynthesis.pause(),this.state="paused",this.activeListener&&this.activeListener("paused"))}resume(){this.supported&&this.state==="paused"&&(window.speechSynthesis.resume(),this.state="speaking",this.activeListener&&this.activeListener("speaking"))}stop(){this.supported&&(window.speechSynthesis.cancel(),this.state="idle",this.currentUtterance=null,this.activeListener&&this.activeListener("idle"))}toggle(e,a="en",s=null){this.state==="speaking"?this.pause():this.state==="paused"?this.resume():this.speak(e,a,s)}}const S=new re;function V(t,e){const a=document.createElement("div");a.className="inline-flex items-center gap-1";const s=document.createElement("button");s.type="button",s.className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-xs font-semibold flex items-center gap-1 transition-all border border-outline-variant/30 shadow-sm",s.setAttribute("aria-label","Read assessment aloud"),s.title="Read aloud",s.innerHTML=`
    <span class="material-symbols-outlined text-[16px] text-secondary">volume_up</span>
    <span class="btn-label">Read</span>
  `;const n=document.createElement("button");n.type="button",n.className="hidden p-1 rounded bg-surface-container hover:bg-error/10 text-error font-label-sm text-xs transition-all border border-outline-variant/30",n.setAttribute("aria-label","Stop reading aloud"),n.title="Stop reading",n.innerHTML='<span class="material-symbols-outlined text-[16px]">stop</span>',s.addEventListener("click",i=>{i.stopPropagation();const o=typeof t=="function"?t():t,l=typeof e=="function"?e():e||"en";S.state==="speaking"?S.pause():S.state==="paused"?S.resume():S.speak(o,l,p=>{r(p)})}),n.addEventListener("click",i=>{i.stopPropagation(),S.stop(),r("idle")});function r(i){const o=s.querySelector(".btn-label"),l=s.querySelector(".material-symbols-outlined");i==="speaking"?(o&&(o.textContent="Pause"),l&&(l.textContent="pause"),s.classList.add("bg-secondary-fixed/40","ring-1","ring-secondary"),n.classList.remove("hidden")):i==="paused"?(o&&(o.textContent="Resume"),l&&(l.textContent="play_arrow"),s.classList.remove("bg-secondary-fixed/40","ring-1","ring-secondary"),n.classList.remove("hidden")):(o&&(o.textContent="Read"),l&&(l.textContent="volume_up"),s.classList.remove("bg-secondary-fixed/40","ring-1","ring-secondary"),n.classList.add("hidden"))}return a.appendChild(s),a.appendChild(n),a}class oe{constructor(){const e=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;this.supported=!!e,this.recognition=e?new e:null,this.isListening=!1,this.activeCallbacks=null,this.recognition&&(this.recognition.continuous=!1,this.recognition.interimResults=!1,this.recognition.maxAlternatives=1,this.recognition.onstart=()=>{var a;this.isListening=!0,(a=this.activeCallbacks)!=null&&a.onStart&&this.activeCallbacks.onStart()},this.recognition.onresult=a=>{var n,r,i,o;const s=((i=(r=(n=a.results)==null?void 0:n[0])==null?void 0:r[0])==null?void 0:i.transcript)||"";(o=this.activeCallbacks)!=null&&o.onResult&&this.activeCallbacks.onResult(s)},this.recognition.onerror=a=>{var s;console.warn("SpeechRecognition error:",a.error),this.isListening=!1,(s=this.activeCallbacks)!=null&&s.onError&&this.activeCallbacks.onError(a.error)},this.recognition.onend=()=>{var a;this.isListening=!1,(a=this.activeCallbacks)!=null&&a.onEnd&&this.activeCallbacks.onEnd()})}start({onResult:e,onStart:a,onEnd:s,onError:n,langCode:r="en"}){if(!this.supported)return n&&n("not-supported"),!1;if(this.isListening)return this.stop(),!1;const i={en:"en-IN",hi:"hi-IN",mr:"mr-IN"};this.recognition.lang=i[r]||"en-IN",this.activeCallbacks={onResult:e,onStart:a,onEnd:s,onError:n};try{return this.recognition.start(),!0}catch(o){return console.warn("Could not start speech recognition:",o),this.isListening=!1,!1}}stop(){if(!(!this.supported||!this.isListening)){try{this.recognition.stop()}catch{}this.isListening=!1}}}const B=new oe;function ee(t,e){if(!t)return null;const a=document.createElement("button");a.type="button",a.className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center",a.setAttribute("aria-label","Start voice input (Speak to Write)"),a.title="Speak to write",a.innerHTML=`
    <span class="material-symbols-outlined text-[16px] mic-icon">mic</span>
  `,a.addEventListener("click",n=>{if(n.preventDefault(),n.stopPropagation(),!B.supported){alert("Speech recognition is not supported in this browser. Please use Chrome, Edge, or a Web Speech-enabled browser.");return}const r=typeof e=="function"?e():e||"en";if(B.isListening){B.stop(),s(!1);return}B.start({langCode:r,onStart:()=>s(!0),onResult:i=>{if(i){const o=t.value.trim();t.value=o?`${o} ${i}`:i,t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.focus()}},onEnd:()=>s(!1),onError:i=>{console.warn("Voice input ended with error:",i),s(!1)}})});function s(n){const r=a.querySelector(".mic-icon");n?(a.classList.add("text-error","animate-pulse"),a.setAttribute("aria-label","Listening... click to stop voice input"),a.title="Listening... (Speak now)",r&&(r.textContent="mic_active")):(a.classList.remove("text-error","animate-pulse"),a.setAttribute("aria-label","Start voice input (Speak to Write)"),a.title="Speak to write",r&&(r.textContent="mic"))}return a}const le={header:{platformName:"Bhoomi Sakha",sihBadge:"SIH 2026 • PS ID 26017",subtitle:"Predictive Land Acquisition Delay-Risk Platform",statusConnecting:"Backend: Connecting...",statusConnected:"FastAPI Connected • XGBoost Engine Active",statusUnavailable:"Backend Unavailable • Click to Retry",commandCenter:"Command Center",statutoryCutoff:"Statutory Cutoff: 48h Remaining",istClock:"IST"},nav:{dashboard:"Dashboard",assessment:"Risk Assessment",projects:"Projects Directory",audit:"Audit Detail",notifications:"Notifications"},views:{dashboard:"National Cadastral Matrix (Overview)",assessment:"Predictive Delay-Risk Assessment Cockpit",projects:"National Land Acquisition Projects Directory",audit:"Cadastral & Risk Detailed Dossier",notifications:"System Notifications & Operational Alerts"},dashboard:{pipelineBadge:"National Infrastructure Pipeline • MoRTH / MoR Analytics",title:"Land Acquisition Intelligence",subtitle:"Monitor project progress, detect emerging delay risks, and prioritize intervention across critical national infrastructure corridors.",runScan:"Run National Risk Scan",launchCockpit:"Launch Assessment Cockpit",totalProjects:"Total Projects Monitored",totalProjectsDesc:"46 National Highways, 38 Freight, 58 Energy & Urban",highCriticalRisk:"High / Critical Risk",requiringIntervention:"Requiring Intervention",requiringInterventionDesc:"8 Document Bottlenecks, 6 Compensation Escrows",avgDelayRisk:"Average Delay Risk",riskOverview:"Risk Overview & Distribution",portfolioBreakdown:"National Portfolio breakdown (N=142)",keyRiskDrivers:"Key Risk Drivers",rootCauseCluster:"Root Cause Cluster",priorityProjects:"Priority Projects Requiring Administrative Oversight",cadastralEscalation:"Cadastral escalation ledger sorted by delay probability",searchPlaceholder:"Search project or ID...",projectCount:"Projects",immediateActions:"Immediate Actions",assessBtn:"Assess",auditBtn:"Audit",colId:"Project ID",colName:"Name & Sector",colDistrict:"District / State",colProgress:"Progress",colRisk:"Delay Risk",colTier:"Tier",colAction:"Action"},assessment:{title:"Assess Project Risk",engineBadge:"FastAPI • XGB-26017 Engine",subtitle:"Enter or edit project telemetry to estimate statutory delay probability and inspect model-derived risk drivers via POST /predict.",selectProject:"Select Existing Project",testScenario:"Create / Test Scenario",statutoryPresets:"Statutory Test Presets:",telemetryMatrices:"Telemetry Input Matrices",telemetrySubtitle:"Configure cadastral attributes according to Section 11 & 19 statutory filings",resetValues:"Reset Values",assessRiskBtn:"Assess Project Risk",riskIndex:"Predictive Risk Index",predictedDelayProb:"Predicted Delay Probability",riskIncreasingFactors:"Risk-Increasing Factors",riskReducingFactors:"Factors Reducing Predicted Risk",recommendedDirectives:"Recommended Statutory Directives",methodology:"Methodology & Model Evaluation",retryAssessment:"Retry Assessment",inferenceUnavailable:"Inference Unavailable",analyzingTelemetry:"Analyzing Project Telemetry...",callingApi:"Calling FastAPI POST /predict & XGBoost Tree Contributions"},risk:{low:"LOW",medium:"MEDIUM",high:"HIGH",critical:"CRITICAL",lowRisk:"Low Risk",mediumRisk:"Medium Risk",highRisk:"High Risk",criticalRisk:"Critical Risk",lowSummary:"Low predicted delay risk based on the current project snapshot.",mediumSummary:"Moderate predicted delay risk based on the current project snapshot.",highSummary:"High predicted delay risk based on the current project snapshot.",criticalSummary:"Critical predicted delay risk based on the current project snapshot."},notifications:{title:"System Notifications",unread:"Unread",allCaughtUp:"All Caught Up",subtitle:"Application alerts, inference milestones, and statutory threshold notifications generated by Bhoomi Sakha.",markAllRead:"Mark All Read",resetDemoAlerts:"Reset Demo Alerts",filterAll:"All",filterUnread:"Unread",noNotifications:"No notifications to display",noNotificationsDesc:"There are currently no notifications under this filter.",newTag:"New"},common:{readAloud:"Read Aloud",pause:"Pause",resume:"Resume",stop:"Stop",speakToWrite:"Speak to Write",listening:"Listening...",close:"Close",copy:"Copy",print:"Print",prototypeOnly:"Prototype Draft",themeToggle:"Color Theme",languageToggle:"Language"}},ce={header:{platformName:"भूमि सखा",sihBadge:"SIH 2026 • PS ID 26017",subtitle:"पूर्वानुमानित भूमि अधिग्रहण विलंब-जोखिम मंच",statusConnecting:"बैकएंड: कनेक्ट हो रहा है...",statusConnected:"FastAPI कनेक्टेड • XGBoost इंजन सक्रिय",statusUnavailable:"बैकएंड अनुपलब्ध • पुनः प्रयास करें",commandCenter:"कमांड सेंटर",statutoryCutoff:"सांविधिक समय-सीमा: 48 घंटे शेष",istClock:"IST"},nav:{dashboard:"डैशबोर्ड",assessment:"जोखिम आकलन",projects:"परियोजना निर्देशिका",audit:"ऑडिट विवरण",notifications:"अधिसूचनाएं"},views:{dashboard:"राष्ट्रीय कैडस्ट्रल मैट्रिक्स (सिंहावलोकन)",assessment:"पूर्वानुमानित विलंब-जोखिम आकलन कॉकपिट",projects:"राष्ट्रीय भूमि अधिग्रहण परियोजना निर्देशिका",audit:"कैडस्ट्रल एवं जोखिम विस्तृत डोजियर",notifications:"प्रणाली अधिसूचनाएं एवं परिचालन अलर्ट"},dashboard:{pipelineBadge:"राष्ट्रीय अवसंरचना पाइपलाइन • MoRTH / MoR एनालिटिक्स",title:"भूमि अधिग्रहण आसूचना",subtitle:"परियोजना प्रगति की निगरानी करें, उभरते विलंब जोखिमों का पता लगाएं, और महत्वपूर्ण राष्ट्रीय गलियारों में हस्तक्षेप को प्राथमिकता दें।",runScan:"राष्ट्रीय जोखिम स्कैन चलाएं",launchCockpit:"आकलन कॉकपिट खोलें",totalProjects:"कुल मॉनिटर की गई परियोजनाएं",totalProjectsDesc:"46 राष्ट्रीय राजमार्ग, 38 माल ढुलाई, 58 ऊर्जा एवं शहरी",highCriticalRisk:"उच्च / गंभीर जोखिम",requiringIntervention:"हस्तक्षेप की आवश्यकता",requiringInterventionDesc:"8 दस्तावेज़ अवरोध, 6 मुआवजा मामले",avgDelayRisk:"औसत विलंब जोखिम",riskOverview:"जोखिम अवलोकन एवं वितरण",portfolioBreakdown:"राष्ट्रीय पोर्टफोलियो वितरण (N=142)",keyRiskDrivers:"प्रमुख जोखिम कारक",rootCauseCluster:"मूल कारण क्लस्टर",priorityProjects:"प्रशासनिक निगरानी की आवश्यकता वाली प्राथमिकता परियोजनाएं",cadastralEscalation:"विलंब संभावना के अनुसार क्रमबद्ध कैडस्ट्रल लेजर",searchPlaceholder:"परियोजना या आईडी खोजें...",projectCount:"परियोजनाएं",immediateActions:"तत्काल कार्रवाइयां",assessBtn:"आकलन",auditBtn:"ऑडिट",colId:"परियोजना आईडी",colName:"नाम एवं क्षेत्र",colDistrict:"ज़िला / राज्य",colProgress:"प्रगति",colRisk:"विलंब जोखिम",colTier:"श्रेणी",colAction:"कार्रवाई"},assessment:{title:"परियोजना जोखिम का आकलन करें",engineBadge:"FastAPI • XGB-26017 इंजन",subtitle:"सांविधिक विलंब संभावना का अनुमान लगाने और मॉडल-व्युत्पन्न जोखिम कारकों का निरीक्षण करने के लिए टेलीमेट्री दर्ज या संपादित करें।",selectProject:"मौजूदा परियोजना चुनें",testScenario:"परिदृश्य बनाएं / परीक्षण करें",statutoryPresets:"सांविधिक परीक्षण प्रीसेट:",telemetryMatrices:"टेलीमेट्री इनपुट मैट्रिक्स",telemetrySubtitle:"धारा 11 और 19 सांविधिक फाइलिंग के अनुसार कैडस्ट्रल विशेषताओं को कॉन्फ़िगर करें",resetValues:"मान रीसेट करें",assessRiskBtn:"जोखिम का आकलन करें",riskIndex:"पूर्वानुमानित जोखिम सूचकांक",predictedDelayProb:"पूर्वानुमानित विलंब संभावना",riskIncreasingFactors:"जोखिम बढ़ाने वाले कारक",riskReducingFactors:"पूर्वानुमानित जोखिम कम करने वाले कारक",recommendedDirectives:"अनुशंसित सांविधिक निर्देश",methodology:"कार्यप्रणाली एवं मॉडल मूल्यांकन",retryAssessment:"पुनः आकलन करें",inferenceUnavailable:"अनुमान सेवा अनुपलब्ध",analyzingTelemetry:"परियोजना टेलीमेट्री का विश्लेषण हो रहा है...",callingApi:"FastAPI POST /predict एवं XGBoost ट्री योगदान निष्पादित हो रहे हैं"},risk:{low:"कम",medium:"मध्यम",high:"उच्च",critical:"गंभीर",lowRisk:"कम जोखिम",mediumRisk:"मध्यम जोखिम",highRisk:"उच्च जोखिम",criticalRisk:"गंभीर जोखिम",lowSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर कम पूर्वानुमानित विलंब जोखिम।",mediumSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर मध्यम पूर्वानुमानित विलंब जोखिम।",highSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर उच्च पूर्वानुमानित विलंब जोखिम।",criticalSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर गंभीर पूर्वानुमानित विलंब जोखिम।"},notifications:{title:"प्रणाली अधिसूचनाएं",unread:"अपठित",allCaughtUp:"सभी पढ़ी गईं",subtitle:"भूमि सखा द्वारा उत्पन्न अनुप्रयोग अलर्ट, निष्कर्ष मील के पत्थर, और सांविधिक सीमा सूचनाएं।",markAllRead:"सभी को पढ़ा हुआ चिह्नित करें",resetDemoAlerts:"डेमो अलर्ट रीसेट करें",filterAll:"सभी",filterUnread:"अपठित",noNotifications:"प्रदर्शित करने के लिए कोई सूचना नहीं है",noNotificationsDesc:"वर्तमान में इस फ़िल्टर के अंतर्गत कोई सूचना उपलब्ध नहीं है।",newTag:"नया"},common:{readAloud:"बोलकर सुनाएं",pause:"रोकें",resume:"जारी रखें",stop:"बंद करें",speakToWrite:"बोलकर लिखें",listening:"सुन रहा है...",close:"बंद करें",copy:"कॉपी करें",print:"प्रिंट करें",prototypeOnly:"प्रोटोटाइप ड्राफ्ट",themeToggle:"थीम",languageToggle:"भाषा"}},de={header:{platformName:"भूमी सखा",sihBadge:"SIH 2026 • PS ID 26017",subtitle:"भविष्यसूचक भू-संपादन विलंब-जोखीम प्रणाली",statusConnecting:"बॅकएंड: जोडणी होत आहे...",statusConnected:"FastAPI कनेक्टेड • XGBoost इंजिन सक्रिय",statusUnavailable:"बॅकएंड अनुपलब्ध • पुन्हा प्रयत्न करा",commandCenter:"कमांड सेंटर",statutoryCutoff:"वैधानिक मुदत: 48 तास शिल्लक",istClock:"IST"},nav:{dashboard:"डॅशबोर्ड",assessment:"जोखीम मूल्यांकन",projects:"प्रकल्प निर्देशिका",audit:"तपशीलवार ऑडिट",notifications:"सूचना"},views:{dashboard:"राष्ट्रीय कॅडस्ट्रल मॅट्रिक्स (सिंहावलोकन)",assessment:"भविष्यसूचक विलंब-जोखीम मूल्यांकन कॉकपिट",projects:"राष्ट्रीय भू-संपादन प्रकल्प निर्देशिका",audit:"कॅडस्ट्रल आणि जोखीम तपशीलवार डॉसियर",notifications:"प्रणाली सूचना आणि ऑपरेशनल अलर्ट"},dashboard:{pipelineBadge:"राष्ट्रीय पायाभूत सुविधा पाइपलाइन • MoRTH / MoR विश्लेषण",title:"भू-संपादन बुद्धिमत्ता",subtitle:"प्रकल्पाच्या प्रगतीचे निरीक्षण करा, संभाव्य विलंब जोखीम ओळखा आणि महत्त्वाच्या राष्ट्रीय कॉरिडोअरमध्ये प्राधान्याने हस्तक्षेप करा.",runScan:"राष्ट्रीय जोखीम स्कॅन चालवा",launchCockpit:"मूल्यांकन कॉकपिट सुरू करा",totalProjects:"एकूण निरीक्षण केलेले प्रकल्प",totalProjectsDesc:"46 राष्ट्रीय महामार्ग, 38 मालवाहतूक, 58 ऊर्जा आणि नागरी",highCriticalRisk:"उच्च / गंभीर जोखीम",requiringIntervention:"हस्तक्षेपाची आवश्यकता",requiringInterventionDesc:"8 दस्तऐवज अडथळे, 6 भरपाई प्रकरणे",avgDelayRisk:"सरासरी विलंब जोखीम",riskOverview:"जोखीम आढावा आणि वितरण",portfolioBreakdown:"राष्ट्रीय पोर्टफोलिओ वितरण (N=142)",keyRiskDrivers:"प्रमुख जोखीम घटक",rootCauseCluster:"मूळ कारण क्लस्टर",priorityProjects:"प्रशासकीय देखरेखीची आवश्यकता असलेले प्राधान्य प्रकल्प",cadastralEscalation:"विलंब संभाव्यतेनुसार क्रमवारी लावलेला कॅडस्ट्रल लेजर",searchPlaceholder:"प्रकल्प किंवा आयडी शोधा...",projectCount:"प्रकल्प",immediateActions:"त्वरित कृती",assessBtn:"मूल्यांकन",auditBtn:"ऑडिट",colId:"प्रकल्प आयडी",colName:"नाव आणि क्षेत्र",colDistrict:"जिल्हा / राज्य",colProgress:"प्रगती",colRisk:"विलंब जोखीम",colTier:"श्रेणी",colAction:"कृती"},assessment:{title:"प्रकल्प जोखमीचे मूल्यांकन करा",engineBadge:"FastAPI • XGB-26017 इंजिन",subtitle:"वैधानिक विलंब संभाव्यता अंदाज घेण्यासाठी आणि जोखीम घटकांची पाहणी करण्यासाठी माहिती प्रविष्ट किंवा संपादित करा.",selectProject:"विद्यमान प्रकल्प निवडा",testScenario:"परिदृश्य तयार करा / चाचणी घ्या",statutoryPresets:"वैधानिक चाचणी प्रीसेट:",telemetryMatrices:"टेलीमेट्री इनपुट मॅट्रिक्स",telemetrySubtitle:"कलम 11 आणि 19 वैधानिक दाखलतेनुसार कॅडस्ट्रल गुणधर्म कॉन्फिगर करा",resetValues:"मूल्ये पूर्ववत करा",assessRiskBtn:"जोखमीचे मूल्यांकन करा",riskIndex:"भविष्यसूचक जोखीम निर्देशांक",predictedDelayProb:"अंदाज वर्तवलेली विलंब संभाव्यता",riskIncreasingFactors:"जोखीम वाढवणारे घटक",riskReducingFactors:"अंदाज वर्तवलेली जोखीम कमी करणारे घटक",recommendedDirectives:"शिफारस केलेले वैधानिक निर्देश",methodology:"पद्धती आणि मॉडेल मूल्यमापन",retryAssessment:"पुन्हा मूल्यांकन करा",inferenceUnavailable:"अनुमान सेवा अनुपलब्ध",analyzingTelemetry:"प्रकल्प टेलीमेट्रीचे विश्लेषण सुरू आहे...",callingApi:"FastAPI POST /predict आणि XGBoost ट्री योगदान निष्पादित होत आहे"},risk:{low:"कमी",medium:"मध्यम",high:"उच्च",critical:"गंभीर",lowRisk:"कमी जोखीम",mediumRisk:"मध्यम जोखीम",highRisk:"उच्च जोखीम",criticalRisk:"गंभीर जोखीम",lowSummary:"सध्याच्या प्रकल्प स्नॅपशॉटच्या आधारे कमी अंदाज वर्तवलेली विलंब जोखीम.",mediumSummary:"सध्याच्या प्रकल्प स्नॅपशॉटच्या आधारे मध्यम अंदाज वर्तवलेली विलंब जोखीम.",highSummary:"सध्याच्या प्रकल्प स्नॅपशॉटच्या आधारे उच्च अंदाज वर्तवलेली विलंब जोखीम.",criticalSummary:"सध्याच्या प्रकल्प स्नॅपशॉटच्या आधारे गंभीर अंदाज वर्तवलेली विलंब जोखीम."},notifications:{title:"प्रणाली सूचना",unread:"न वाचलेल्या",allCaughtUp:"सर्व वाचल्या",subtitle:"भूमी सखा द्वारे निर्माण केलेले ॲप्लिकेशन अलर्ट, निष्कर्ष टप्पे आणि वैधानिक मर्यादा सूचना.",markAllRead:"सर्व वाचल्या म्हणून चिन्हांकित करा",resetDemoAlerts:"डेमो अलर्ट रीसेट करा",filterAll:"सर्व",filterUnread:"न वाचलेल्या",noNotifications:"दाखवण्यासाठी कोणत्याही सूचना नाहीत",noNotificationsDesc:"सध्या या फिल्टर अंतर्गत कोणत्याही सूचना उपलब्ध नाहीत.",newTag:"नवीन"},common:{readAloud:"वाचून दाखवा",pause:"थांबवा",resume:"पुन्हा सुरू करा",stop:"बंद करा",speakToWrite:"बोलून लिहा",listening:"ऐकत आहे...",close:"बंद करा",copy:"कॉपी करा",print:"प्रिंट करा",prototypeOnly:"प्रोटोटाइप मसुदा",themeToggle:"रंग थीम",languageToggle:"भाषा"}},K="bhoomi_language",D={en:{code:"en",label:"English",nativeLabel:"English"},hi:{code:"hi",label:"Hindi",nativeLabel:"हिंदी"},mr:{code:"mr",label:"Marathi",nativeLabel:"मराठी"}},z={en:le,hi:ce,mr:de};class pe{constructor(){this.currentLanguage=this.getStoredLanguage(),this.listeners=[]}getStoredLanguage(){try{const e=localStorage.getItem(K);if(e&&D[e])return e}catch{}return"en"}setLanguage(e){if(D[e]){this.currentLanguage=e;try{localStorage.setItem(K,e)}catch(a){console.warn("Could not persist language to localStorage:",a)}document.documentElement.setAttribute("lang",e),this.notifyListeners()}}getLanguage(){return this.currentLanguage}getLanguageMeta(){return D[this.currentLanguage]||D.en}t(e,a=""){const s=e.split(".");let n=z[this.currentLanguage],r=!0;for(const l of s)if(n&&n[l]!==void 0)n=n[l];else{r=!1;break}if(r&&typeof n=="string")return n;let i=z.en,o=!0;for(const l of s)if(i&&i[l]!==void 0)i=i[l];else{o=!1;break}return o&&typeof i=="string"?i:a||e}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(a=>a!==e)}}notifyListeners(){this.listeners.forEach(e=>e(this.currentLanguage))}}const k=new pe,q=(t,e)=>k.t(t,e);function ue(t,e,a){t.innerHTML=`
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
              <div class="bg-primary-container text-on-primary rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs relative overflow-hidden" id="triangulationAlertCard">
                <div class="flex items-center justify-between text-secondary-container">
                  <div class="flex items-center gap-space-xs">
                    <span class="material-symbols-outlined text-[20px]">psychology</span>
                    <span class="font-label-md text-label-md font-bold uppercase tracking-wider">Predictive Triangulation Alert</span>
                  </div>
                  <div id="alertReadAloudSlot"></div>
                </div>
                <p class="font-body-md text-body-md text-on-primary/90" id="triangulationAlertText">
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
                    <div class="relative flex items-center">
                      <input class="pl-7 pr-8 py-1 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface w-48 border border-outline-variant/40" id="projectSearchInput" placeholder="Search project or ID..." type="text"/>
                      <span class="material-symbols-outlined absolute left-1.5 top-1.5 text-[16px] text-on-surface-variant pointer-events-none">search</span>
                      <div class="absolute right-1 top-0.5" id="dashboardSearchMicSlot"></div>
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
                      ${Y(P)}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  `;const s=t.querySelector("#projectSearchInput"),n=t.querySelector("#projectsTableBody");if(s&&n){s.addEventListener("input",u=>{const d=u.target.value.toLowerCase().trim(),m=P.filter(f=>f.id.toLowerCase().includes(d)||f.name.toLowerCase().includes(d)||f.district.toLowerCase().includes(d)||f.state.toLowerCase().includes(d));n.innerHTML=Y(m),X(t,e,a)});const p=t.querySelector("#dashboardSearchMicSlot");if(p){const u=ee(s,()=>k.getLanguage());u&&p.appendChild(u)}}const r=t.querySelector("#alertReadAloudSlot"),i=t.querySelector("#triangulationAlertText");if(r&&i){const p=V(()=>`Predictive Triangulation Alert: ${i.textContent.trim()}`,()=>k.getLanguage());r.appendChild(p)}const o=t.querySelector("#openAssessmentCtaBtn"),l=t.querySelector("#jumpToAssessmentBtn");o&&e&&o.addEventListener("click",()=>e("medium")),l&&e&&l.addEventListener("click",()=>e("high")),X(t,e,a)}function Y(t){return t.length===0?'<tr><td colspan="7" class="text-center py-4 text-on-surface-variant">No matching projects found.</td></tr>':t.map(e=>`
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
      <td class="py-space-sm px-space-sm font-tabular-data font-bold ${T(e.riskLevel||h(e.delayProbability))}">
        ${e.delayProbability}%
      </td>
      <td class="py-space-sm px-space-sm">
        <span class="px-2 py-0.5 rounded-full ${H(e.riskLevel||h(e.delayProbability))} font-label-sm text-label-sm font-bold inline-flex items-center gap-1 border">
          <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
          ${e.riskLevel||h(e.delayProbability)}
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
  `).join("")}function X(t,e,a){t.querySelectorAll(".assess-project-btn").forEach(s=>{s.addEventListener("click",()=>{const n=s.getAttribute("data-preset")||"medium";e&&e(n)})}),t.querySelectorAll(".audit-project-btn").forEach(s=>{s.addEventListener("click",()=>{const n=s.getAttribute("data-id");a&&a(n)})})}const te="http://127.0.0.1:8000";class M extends Error{constructor(e,a=null,s=null){super(e),this.name="ApiError",this.status=a,this.details=s}}async function J(t,e={}){const a=`${te}${t}`,s=new AbortController,n=setTimeout(()=>s.abort(),e.timeout||15e3),r={"Content-Type":"application/json",Accept:"application/json"};try{const i=await fetch(a,{...e,headers:{...r,...e.headers||{}},signal:s.signal});clearTimeout(n);const o=i.headers.get("content-type")||"";let l=null;if(o.includes("application/json")?l=await i.json():l=await i.text(),!i.ok){const p=l&&typeof l=="object"&&l.detail?l.detail:`Request failed with status ${i.status}`;throw new M(p,i.status,l)}return l}catch(i){throw clearTimeout(n),i instanceof M?i:i.name==="AbortError"?new M("Request timed out while contacting Bhoomi Sakha prediction engine.",408):(console.debug(`[ApiClient] Network request failed for ${t}:`,i),new M("Prediction service is temporarily unavailable. Please try again.",0,i))}}const O={baseUrl:te,get(t,e={}){return J(t,{...e,method:"GET"})},post(t,e,a={}){return J(t,{...a,method:"POST",body:JSON.stringify(e)})}},G={async checkHealth(){try{const t=await O.get("/health",{timeout:4e3});return{online:t.status==="healthy",modelLoaded:!!t.model_loaded,featureCount:t.features||76,raw:t}}catch(t){return{online:!1,modelLoaded:!1,featureCount:0,error:t.message}}},async getMetadata(){return O.get("/meta")},async predictRisk(t){return O.post("/predict",t)}};let $={activePreset:"medium",lastPrediction:null,isLoading:!1};function fe(t,e="medium"){$.activePreset=e;const a=L[e]||L.medium;t.innerHTML=`
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

            <!-- Top Row with State Badge & Read Aloud -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-secondary text-[22px]">analytics</span>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Predictive Risk Index</h3>
              </div>
              <div class="flex items-center gap-2">
                <div id="assessmentReadAloudSlot"></div>
                <span class="px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 transition-all" id="riskBadge">
                  MEDIUM RISK
                </span>
              </div>
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
  `,me(t,a)}function me(t,e){F(e.values),R();const a=t.querySelector("#assessmentReadAloudSlot");if(a){a.innerHTML="";const m=V(()=>{var g,A,y,C;const f=((g=t.querySelector("#probabilityValue"))==null?void 0:g.textContent)||"0%",c=((A=t.querySelector("#riskBadge"))==null?void 0:A.textContent)||"Medium Risk",b=((y=t.querySelector("#riskSummaryText"))==null?void 0:y.textContent)||"",x=((C=t.querySelector("#riskThresholdNote"))==null?void 0:C.textContent)||"";return`Bhoomi Sakha assessment outcome. Delay probability: ${f}. ${c}. ${b}. ${x}`},()=>k.getLanguage());a.appendChild(m)}t.querySelectorAll(".preset-pill").forEach(m=>{m.addEventListener("click",()=>{const f=m.getAttribute("data-preset");t.querySelectorAll(".preset-pill").forEach(b=>{b.classList.remove("bg-surface-container-high","ring-1","ring-secondary"),b.classList.add("bg-surface-container-low")}),m.classList.remove("bg-surface-container-low"),m.classList.add("bg-surface-container-high","ring-1","ring-secondary");const c=L[f];c&&($.activePreset=f,F(c.values),R(),I(t))})});const s=t.querySelector("#field_docsPending"),n=t.querySelector("#field_docsReq");s&&s.addEventListener("input",R),n&&n.addEventListener("input",R);const r=t.querySelector("#runPredictionBtn");r&&r.addEventListener("click",()=>I(t));const i=t.querySelector("#resetScenarioBtn"),o=t.querySelector("#resetFormBtn"),l=()=>{const m=L[$.activePreset]||L.medium;F(m.values),R(),I(t)};i&&i.addEventListener("click",l),o&&o.addEventListener("click",l);const p=t.querySelector("#transparencyAccordionBtn"),u=t.querySelector("#transparencyContent"),d=t.querySelector("#accordionChevron");p&&u&&p.addEventListener("click",()=>{u.classList.contains("hidden")?(u.classList.remove("hidden"),d.style.transform="rotate(180deg)"):(u.classList.add("hidden"),d.style.transform="rotate(0deg)")}),I(t)}function R(){var r,i;const t=parseFloat((r=document.getElementById("field_docsReq"))==null?void 0:r.value)||1,e=parseFloat((i=document.getElementById("field_docsPending"))==null?void 0:i.value)||0,a=Math.max(0,Math.min(100,(t-e)/t*100)).toFixed(1),s=document.getElementById("label_docCompletion"),n=document.getElementById("bar_docCompletion");s&&(s.textContent=`${a}%`),n&&(n.style.width=`${a}%`)}function F(t){if(!t)return;const e=(a,s)=>{const n=document.getElementById(a);n&&s!==void 0&&(n.value=s)};e("field_projectType",t.project_type||"Highway"),e("field_landType",t.land_type||"Agricultural"),e("field_priority",t.priority||"Normal"),e("field_complexity",t.complexity_score??47.7),e("field_totalParcels",t.total_parcels??233),e("field_affectedFamilies",t.affected_families??113),e("field_landArea",t.land_area_hectares??132.5),e("field_plannedDuration",t.planned_duration_days??607),e("field_acqProgress",t.acquisition_progress_pct??6),e("field_velocity",t.acquisition_velocity_pct_per_30d??6.13),e("field_parcelsPending",t.parcels_pending??219),e("field_possessionPending",t.possession_pending_parcels??218),e("field_docsReq",t.documents_required??241),e("field_docsPending",t.documents_pending??232),e("field_compCases",t.compensation_pending_cases??105),e("field_compAmount",t.compensation_pending_amount??10.95),e("field_compDisbursed",t.compensation_completion_pct??6.2),e("field_apprPending",t.approvals_pending??5),e("field_apprOverdue",t.overdue_approvals??2),e("field_apprDelay",t.avg_approval_delay_days??41),e("field_pendingObj",t.pending_objections??0),e("field_activeDisputes",t.active_legal_disputes??0),e("field_ownerDisputes",t.ownership_disputes??0),e("field_courtStays",t.court_stay_cases??0),e("field_rrPending",t.rr_pending_cases??47),e("field_rrCompletion",t.rr_completion_pct??4.08),e("field_schedVariance",t.schedule_variance_days??-7.19),e("field_milestonesOverdue",t.milestones_overdue??1),e("field_shActions",t.pending_stakeholder_actions??7),e("field_shResponse",t.avg_stakeholder_response_days??28.59),e("field_shScore",t.stakeholder_responsiveness_score??5.14),e("field_histDelay",t.historical_avg_delay_days??100.8)}function be(){var f;const t=(c,b=0)=>{var g;const x=parseFloat((g=document.getElementById(c))==null?void 0:g.value);return isNaN(x)?b:Math.max(0,x)},e=(c,b=0)=>{var g;const x=parseInt((g=document.getElementById(c))==null?void 0:g.value,10);return isNaN(x)?b:Math.max(0,x)},a=(c,b="")=>{var x;return((x=document.getElementById(c))==null?void 0:x.value)||b},s=e("field_totalParcels",200),n=e("field_parcelsPending",50),r=Math.max(0,s-n),i=e("field_docsReq",200),o=e("field_docsPending",50),l=Math.max(0,i-o),p=i>0?Math.min(100,Math.max(0,l/i*100)):0,u=e("field_compCases",10),d=t("field_compAmount",10),m=Math.min(100,t("field_compDisbursed",50));return{project_type:a("field_projectType","Highway"),land_type:a("field_landType","Mixed"),priority:a("field_priority","Normal"),current_stage:"Survey",complexity_score:t("field_complexity",40),total_parcels:s,parcels_pending:n,parcels_acquired:r,affected_families:t("field_affectedFamilies",50),land_area_hectares:t("field_landArea",100),planned_duration_days:e("field_plannedDuration",600),days_since_notification:30,days_elapsed:30,days_in_current_stage:30,planned_stage_duration_days:30,schedule_variance_days:parseFloat((f=document.getElementById("field_schedVariance"))==null?void 0:f.value)||0,milestones_due:2,milestones_completed:1,milestones_overdue:e("field_milestonesOverdue",0),acquisition_progress_pct:Math.min(100,t("field_acqProgress",50)),acquisition_velocity_pct_per_30d:t("field_velocity",5),possession_progress_pct:Math.min(100,(1-e("field_possessionPending",50)/Math.max(1,s))*100),possession_pending_parcels:e("field_possessionPending",50),compensation_total_amount:d*1.5,compensation_assessed_amount:d*1.2,compensation_disbursed_amount:d*.5,compensation_pending_amount:d,compensation_completion_pct:m,compensation_pending_cases:u,avg_compensation_delay_days:u*.5,documents_required:i,documents_verified:l,documents_pending:o,documentation_completion_pct:p,approvals_required:10,approvals_completed:5,approvals_pending:e("field_apprPending",2),approval_completion_pct:50,avg_approval_delay_days:t("field_apprDelay",10),overdue_approvals:e("field_apprOverdue",0),active_legal_disputes:e("field_activeDisputes",0),resolved_legal_disputes:0,ownership_disputes:e("field_ownerDisputes",0),court_stay_cases:e("field_courtStays",0),pending_objections:e("field_pendingObj",0),families_requiring_rr:e("field_rrPending",0)+10,families_rr_completed:10,rr_completion_pct:Math.min(100,t("field_rrCompletion",50)),rr_pending_cases:e("field_rrPending",0),pending_stakeholder_actions:e("field_shActions",0),avg_stakeholder_response_days:t("field_shResponse",10),stakeholder_responsiveness_score:t("field_shScore",5),interdepartmental_pending_actions:2,historical_avg_delay_days:t("field_histDelay",50)}}async function I(t){const e=t.querySelector("#loadingOverlay"),a=t.querySelector("#runPredictionBtn");e&&e.classList.remove("hidden"),a&&(a.disabled=!0,a.classList.add("opacity-70","cursor-not-allowed"));try{const s=be(),n=await G.predictRisk(s);$.lastPrediction=n,xe(t,n)}catch(s){console.error("Prediction failed:",s),ge(t,s.message)}finally{e&&e.classList.add("hidden"),a&&(a.disabled=!1,a.classList.remove("opacity-70","cursor-not-allowed"))}}function xe(t,e){const a=e.delay_probability_pct!==void 0?e.delay_probability_pct:e.delay_probability!==void 0?e.delay_probability*100:0,s=typeof a=="number"&&!isNaN(a)?a:0,n=h(s),r=se(n),i=N(n),o=ne(n),l=t.querySelector("#probabilityValue"),p=t.querySelector("#probabilityCircle"),u=t.querySelector("#decisionOutcome"),d=t.querySelector("#riskBadge"),m=t.querySelector("#riskSummaryText"),f=t.querySelector("#riskThresholdNote");l&&(l.textContent=`${s.toFixed(2)}%`),u&&(u.textContent=r,u.className=`mt-1 font-label-sm text-[11px] font-semibold ${T(n)}`),m&&(m.textContent=i),f&&(f.textContent=o);const c=301.59,b=c-c*(Math.min(100,Math.max(0,s))/100);p&&(p.style.strokeDashoffset=b,p.className=`transition-all duration-700 ease-out ${ie(n)}`),d&&(d.textContent=`${n} RISK`,d.className=`px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider border ${H(n)}`);const x=t.querySelector("#riskIncreasingContainer");if(x){const y=e.risk_drivers||[];if(y.length===0)x.innerHTML=`
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          No major risk-increasing factors identified for this project state.
        </div>
      `;else{const C=Math.max(...y.map(v=>Math.abs(v.contribution)),.1);x.innerHTML=y.map(v=>{const E=Math.min(100,Math.max(15,Math.abs(v.contribution)/C*100)),W=v.contribution>.4?"bg-error":"bg-secondary-container";return`
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-semibold">${v.factor}: <span class="font-bold text-on-surface font-tabular-data">${v.value??"--"}</span></span>
              <span class="font-tabular-data font-bold text-error">+${v.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="${W} h-full rounded-full transition-all duration-700" style="width: ${E.toFixed(0)}%;"></div>
            </div>
            <span class="font-body-sm text-[11px] text-on-surface-variant italic">
              <strong>Action:</strong> ${v.recommendation||"Prioritize verification and monitoring."}
            </span>
          </div>
        `}).join("")}}const g=t.querySelector("#riskReducingContainer");if(g){const y=e.risk_reducing_factors||[];if(y.length===0)g.innerHTML=`
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          No significant risk-reducing factors detected.
        </div>
      `;else{const C=Math.max(...y.map(v=>Math.abs(v.contribution)),.1);g.innerHTML=y.map(v=>{const E=Math.min(100,Math.max(15,Math.abs(v.contribution)/C*100));return`
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-medium">${v.factor}: <span class="font-bold text-on-surface font-tabular-data">${v.value??"--"}</span></span>
              <span class="font-tabular-data font-semibold text-emerald-600">${v.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-600 h-full rounded-full transition-all duration-700" style="width: ${E.toFixed(0)}%;"></div>
            </div>
          </div>
        `}).join("")}}const A=t.querySelector("#directivesContainer");if(A){const y=e.risk_drivers||[];y.length>0?A.innerHTML=y.slice(0,2).map((C,v)=>`
          <div class="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm border border-outline-variant/30">
            <span class="px-1.5 py-0.5 rounded ${v===0?"bg-error text-on-error":"bg-secondary text-on-secondary"} font-label-sm text-[10px] font-bold shrink-0 mt-0.5">${v===0?"P1 PRIORITY":"P2 PRIORITY"}</span>
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm font-bold text-on-surface">${C.factor} Resolution</span>
              <p class="font-body-sm text-[12px] text-on-surface-variant mt-0.5">${C.recommendation}</p>
            </div>
          </div>
        `).join(""):A.innerHTML=`
        <div class="p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-xs">
          Statutory progress remains nominal. Continue scheduled monitoring under Section 19 protocols.
        </div>
      `}}function ge(t,e){const a=t.querySelector("#riskIncreasingContainer"),s=e&&!e.includes("uvicorn")?e:"Prediction service is temporarily unavailable. Please try again.";if(a){a.innerHTML=`
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
    `;const n=a.querySelector("#retryPredictionBtn");n&&n.addEventListener("click",()=>I(t))}}function ve(t,e,a){t.innerHTML=`
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

        <div class="relative w-full sm:w-64 flex items-center">
          <input class="w-full pl-8 pr-8 py-1.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="directorySearchInput" placeholder="Filter by name, ID, or district..." type="text"/>
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
  `;const s=t.querySelector("#directoryTableBody"),n=t.querySelector("#directorySearchInput"),r=t.querySelector("#filterSector"),i=t.querySelector("#filterRisk"),o=t.querySelector("#directorySearchMicSlot");if(o&&n){const u=ee(n,()=>k.getLanguage());u&&o.appendChild(u)}const l=()=>{const u=((n==null?void 0:n.value)||"").toLowerCase().trim(),d=(r==null?void 0:r.value)||"all",m=(i==null?void 0:i.value)||"all",f=P.filter(c=>{const b=c.id.toLowerCase().includes(u)||c.name.toLowerCase().includes(u)||c.district.toLowerCase().includes(u)||c.state.toLowerCase().includes(u),x=d==="all"||c.type===d,g=m==="all"||c.riskLevel===m;return b&&x&&g});if(f.length===0){s.innerHTML='<tr><td colspan="8" class="text-center py-6 text-on-surface-variant">No matching records found in national database.</td></tr>';return}s.innerHTML=f.map(c=>`
      <tr class="hover:bg-surface-container-low/70 transition-colors">
        <td class="py-space-md px-space-md font-tabular-data font-bold text-on-surface">${c.id}</td>
        <td class="py-space-md px-space-md">
          <div class="flex flex-col">
            <span class="font-semibold text-on-surface">${c.name}</span>
            <span class="text-on-surface-variant font-label-sm text-xs">${c.sector}</span>
          </div>
        </td>
        <td class="py-space-md px-space-md text-on-surface-variant">${c.district}, ${c.state}</td>
        <td class="py-space-md px-space-md">
          <span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-xs">${c.stage}</span>
        </td>
        <td class="py-space-md px-space-md font-tabular-data">
          <div class="flex items-center gap-2">
            <span class="font-bold text-on-surface">${c.progressPct}%</span>
            <div class="w-16 h-2 rounded-full bg-surface-container-high overflow-hidden">
              <div class="h-full bg-primary" style="width: ${c.progressPct}%"></div>
            </div>
          </div>
        </td>
        <td class="py-space-md px-space-md font-tabular-data font-bold ${T(c.riskLevel||h(c.delayProbability))}">${c.delayProbability}%</td>
        <td class="py-space-md px-space-md">
          <span class="px-2 py-0.5 rounded-full ${H(c.riskLevel||h(c.delayProbability))} font-label-sm text-xs font-bold border">${c.riskLevel||h(c.delayProbability)}</span>
        </td>
        <td class="py-space-md px-space-md text-right">
          <div class="inline-flex items-center gap-1.5">
            <button class="dir-assess-btn px-2 py-1 bg-primary text-on-primary rounded font-label-sm text-xs font-bold hover:bg-surface-tint transition-colors" data-preset="${c.presetKey||"medium"}" type="button">
              Assess Risk
            </button>
            <button class="dir-audit-btn px-2 py-1 bg-surface-container text-on-surface rounded font-label-sm text-xs font-medium hover:bg-surface-container-high transition-colors" data-id="${c.id}" type="button">
              Deep Audit
            </button>
          </div>
        </td>
      </tr>
    `).join(""),s.querySelectorAll(".dir-assess-btn").forEach(c=>{c.addEventListener("click",()=>{const b=c.getAttribute("data-preset");e&&e(b)})}),s.querySelectorAll(".dir-audit-btn").forEach(c=>{c.addEventListener("click",()=>{const b=c.getAttribute("data-id");a&&a(b)})})};n&&n.addEventListener("input",l),r&&r.addEventListener("change",l),i&&i.addEventListener("change",l);const p=t.querySelector("#newAssessmentBtn");p&&e&&p.addEventListener("click",()=>e("medium")),l()}function he(t,e="BF-NH-2024-09",a){const s=P.find(p=>p.id===e)||P[0],n=h(s.delayProbability);t.innerHTML=`
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
            <div id="detailReadAloudSlot"></div>
            <button class="px-space-md py-2 bg-secondary-container hover:bg-secondary text-on-surface hover:text-on-secondary font-label-md text-label-md rounded transition-colors flex items-center gap-1.5 shadow-sm font-bold" id="detailRerunBtn" type="button">
              <span class="material-symbols-outlined text-[18px]">bolt</span>
              <span>Re-run Assessment</span>
            </button>
            <button class="px-space-md py-2 bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface font-label-md text-label-md rounded transition-colors flex items-center gap-1.5 shadow-sm" id="draftDcOrderBtn" type="button">
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
                <span class="px-space-xs py-1 rounded ${H(n)} font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm border">
                  <span class="w-2 h-2 rounded-full bg-current animate-ping"></span>
                  ${n} Risk Tier
                </span>
                <span class="font-tabular-data text-label-sm font-semibold">XGB-26017 Engine</span>
              </div>
              <div class="flex flex-col pt-space-xs">
                <span class="font-label-md text-label-md uppercase tracking-wide text-on-surface-variant font-semibold">Model Delay Probability</span>
                <div class="flex items-baseline gap-space-xs">
                  <span class="font-headline-xl text-headline-xl font-tabular-data ${T(n)} font-extrabold tracking-tight">${s.delayProbability}%</span>
                  <span class="font-headline-sm text-headline-sm font-bold text-on-surface">PROBABILITY</span>
                </div>
              </div>
              <div class="p-space-sm rounded bg-surface-container-lowest/80 shadow-sm backdrop-blur-sm flex flex-col gap-0.5 border border-outline-variant/30">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Predicted Statutory Impact</span>
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                  ${N(n)}
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
  `;const r=t.querySelector("#detailReadAloudSlot");if(r){const p=V(()=>`Project dossier for ${s.name}, Project ID ${s.id}. State: ${s.state}, District: ${s.district}. Current statutory stage: ${s.stage}. Progress is ${s.progressPct} percent. Predicted delay risk is ${s.delayProbability} percent, classified as ${n} risk tier. ${N(n)}`,()=>k.getLanguage());r.appendChild(p)}const i=t.querySelector("#detailRerunBtn");i&&a&&i.addEventListener("click",()=>a(s.presetKey||"medium"));const o=t.querySelector("#draftDcOrderBtn");o&&o.addEventListener("click",()=>{ye(s,n)});const l=t.querySelector("#backToProjectsBreadcrumb");l&&l.addEventListener("click",()=>{window.location.hash="#/projects"})}function ye(t,e){var d,m,f,c,b;const s=(L[t.presetKey]||L.medium).values||{},n=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}),r=`BS-CALA/${t.id}/${new Date().getFullYear()}/PR-DRAFT`,i=document.getElementById("draftDcOrderModal");i&&i.remove();const o=document.createElement("div");o.id="draftDcOrderModal",o.className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-labelledby","draftOrderModalTitle");const l=`PROTOTYPE DRAFT ORDER - FOR GOVERNANCE DEMONSTRATION ONLY
NOT AN OFFICIAL STATUTORY GOVERNMENT ORDER

OFFICE OF THE DISTRICT COLLECTOR & COMPETENT AUTHORITY (LAND ACQUISITION)
${t.district.toUpperCase()} DISTRICT, ${t.state.toUpperCase()}

Memo Ref: ${r}
Date: ${n}

SUB: Pre-emptive Administrative Acceleration Directive under RFCTLARR Framework
REF: Project ID: ${t.id} | Name: ${t.name} (${t.sector})
     Current Statutory Stage: ${t.stage} | Current Physical Progress: ${t.progressPct}%

1. TELEMETRY & PREDICTIVE AUDIT FINDINGS:
   - Total Target Land Area: ${s.land_area_hectares||100} Hectares
   - Total Affected Families: ${s.affected_families||120} Families
   - Total Cadastral Parcels: ${s.total_parcels||200}
   - Model Delay Risk Probability: ${t.delayProbability}% (${e} Risk Tier)
   - Statutory Impact: ${N(e)}

2. ADMINISTRATIVE DIRECTIVES TO COMPETENT AUTHORITIES (CALA):
   a) Joint Site Inspection: The Special Land Acquisition Officer (SLAO) and Sub-Divisional Magistrate (SDM) shall initiate immediate expedited joint site inspection for remaining pending parcels (${s.parcels_pending||"N/A"}).
   b) DBT Escrow Acceleration: Direct Benefit Transfer (DBT) reconciliation and compensation award payouts shall be expedited within a 14-day statutory timeline to prevent critical milestone slippage.
   c) Lok Adalat Conciliation: Outstanding objections and title verification issues must be scheduled for expedited hearing during the upcoming weekly revenue Lok Adalat.

DISCLAIMER:
This document is a prototype draft generated automatically for governance simulation and review by the Bhoomi Sakha Early Delay Warning System. It does NOT constitute an official legal or statutory order unless vetted, approved, and officially signed by the District Collector and gazetted under the relevant state and central legislation.`;o.innerHTML=`
    <div class="relative w-full max-w-3xl bg-surface-container-lowest text-on-surface rounded-xl shadow-2xl border border-outline-variant/40 overflow-hidden my-8 max-h-[90vh] flex flex-col">
      <!-- Modal Header -->
      <div class="p-space-lg bg-surface-container-low border-b border-outline-variant/30 flex items-start justify-between gap-space-md shrink-0">
        <div>
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 uppercase tracking-wider">
              Prototype Draft
            </span>
            <span class="text-xs text-on-surface-variant font-medium">Simulation Mode • Not Legally Enforceable</span>
          </div>
          <h3 id="draftOrderModalTitle" class="font-headline-sm text-headline-sm font-bold text-on-surface">
            Draft DC Order / Administrative Directive
          </h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">
            Pre-populated prototype administrative memo based on real-time project risk telemetry.
          </p>
        </div>
        <button id="closeDraftModalBtn" type="button" class="p-2 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors focus:ring-2 focus:ring-primary" aria-label="Close modal">
          <span class="material-symbols-outlined text-xl">close</span>
        </button>
      </div>

      <!-- Modal Body (Printable Paper Look) -->
      <div class="p-space-lg overflow-y-auto space-y-space-md text-sm font-body">
        
        <!-- Official Watermark / Header Box -->
        <div class="p-4 rounded-lg bg-surface-container-low/70 border border-outline-variant/20 flex flex-col items-center text-center">
          <span class="material-symbols-outlined text-3xl text-primary mb-1">account_balance</span>
          <div class="font-bold text-base tracking-wide uppercase">Office of the District Collector & District Magistrate</div>
          <div class="text-xs text-on-surface-variant uppercase font-semibold">Competent Authority Land Acquisition (CALA) • ${t.district}, ${t.state}</div>
          <div class="text-xs font-tabular-data text-on-surface-variant mt-1">Ref: <span class="font-semibold text-on-surface">${r}</span> • Date: <span class="font-semibold text-on-surface">${n}</span></div>
        </div>

        <!-- Telemetry Summary Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">Project ID</span>
            <span class="font-bold font-tabular-data text-on-surface">${t.id}</span>
          </div>
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">Stage</span>
            <span class="font-bold text-on-surface truncate block">${t.stage}</span>
          </div>
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">Area / Families</span>
            <span class="font-bold font-tabular-data text-on-surface">${s.land_area_hectares||"—"} Ha / ${s.affected_families||"—"} Fam</span>
          </div>
          <div class="p-2.5 rounded ${e==="CRITICAL"?"bg-red-500/10 border-red-500/30":e==="HIGH"?"bg-orange-500/10 border-orange-500/30":"bg-amber-500/10 border-amber-500/30"} border">
            <span class="text-on-surface-variant block uppercase font-medium">Predicted Risk</span>
            <span class="font-bold font-tabular-data ${T(e)}">${t.delayProbability}% (${e})</span>
          </div>
        </div>

        <!-- Draft Order Content -->
        <div class="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30 space-y-3 font-mono text-xs leading-relaxed text-on-surface/90 select-text whitespace-pre-wrap">${l}</div>

        <!-- Warning Callout -->
        <div class="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs flex items-start gap-2.5">
          <span class="material-symbols-outlined text-lg shrink-0 mt-0.5 text-amber-600 dark:text-amber-400">gavel</span>
          <div>
            <strong>Prototype Disclaimer:</strong> This draft memo is generated for governance evaluation within the Bhoomi Sakha prototype. It does not replace statutory procedures under the RFCTLARR Act 2013 or respective State Land Acquisition rules and carries no legal authority without official executive signature.
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-space-md bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between gap-space-sm shrink-0 flex-wrap">
        <button id="copyDraftBtn" type="button" class="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5 focus:ring-2 focus:ring-primary">
          <span class="material-symbols-outlined text-[18px]">content_copy</span>
          <span id="copyDraftLabel">Copy Draft Text</span>
        </button>
        <div class="flex items-center gap-2">
          <button id="printDraftBtn" type="button" class="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5 focus:ring-2 focus:ring-primary">
            <span class="material-symbols-outlined text-[18px]">print</span>
            <span>Print / Save</span>
          </button>
          <button id="closeDraftModalFooterBtn" type="button" class="px-4 py-2 rounded-lg bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface font-label-md text-label-md transition-colors focus:ring-2 focus:ring-primary font-medium">
            Close
          </button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(o);const p=()=>{document.removeEventListener("keydown",u),o.remove();const x=document.getElementById("draftDcOrderBtn");x&&x.focus()},u=x=>{x.key==="Escape"&&p()};document.addEventListener("keydown",u),o.addEventListener("click",x=>{x.target===o&&p()}),(d=o.querySelector("#closeDraftModalBtn"))==null||d.addEventListener("click",p),(m=o.querySelector("#closeDraftModalFooterBtn"))==null||m.addEventListener("click",p),(f=o.querySelector("#copyDraftBtn"))==null||f.addEventListener("click",()=>{var x;(x=navigator.clipboard)!=null&&x.writeText&&navigator.clipboard.writeText(l).then(()=>{const g=o.querySelector("#copyDraftLabel");g&&(g.textContent="Copied to Clipboard!",setTimeout(()=>{g.textContent="Copy Draft Text"},2e3))}).catch(()=>{alert("Draft copied")})}),(c=o.querySelector("#printDraftBtn"))==null||c.addEventListener("click",()=>{window.print()}),(b=o.querySelector("#closeDraftModalBtn"))==null||b.focus()}const Q="bhoomi_notifications_read",U=[{id:"notif-crit-1",category:"Risk Alert",severity:"critical",title:"Critical delay risk detected in current assessment",summary:"Delhi-Amritsar Expressway (Pkg 4) evaluated with 84.6% delay probability requiring urgent Section 19 intervention.",timestamp:"15 mins ago",actionRoute:"#/assessment?preset=critical",actionLabel:"Inspect Assessment"},{id:"notif-engine-2",category:"Engine",severity:"info",title:"Backend prediction engine connected",summary:"FastAPI service connected with 76 engineered cadastral features ready for live XGBoost inference.",timestamp:"1 hour ago",actionRoute:"#/dashboard",actionLabel:"View Dashboard"},{id:"notif-atten-3",category:"Officer Attention",severity:"high",title:"Assessment contains factors requiring officer attention",summary:"18 high-bottleneck parcel cases in Western Freight Corridor flagged for documentation backlog review.",timestamp:"3 hours ago",actionRoute:"#/assessment?preset=high",actionLabel:"Review Factors"},{id:"notif-stat-4",category:"System",severity:"info",title:"Risk assessment pipeline initialized",summary:"National Cadastral Matrix synchronized with 142 monitored infrastructure corridors.",timestamp:"Today, 09:30 AM",actionRoute:"#/projects",actionLabel:"Projects Directory"}];class we{constructor(){this.listeners=[]}getReadIds(){try{const e=localStorage.getItem(Q);return e?JSON.parse(e):[]}catch{return[]}}saveReadIds(e){try{localStorage.setItem(Q,JSON.stringify(e)),this.notifyListeners()}catch(a){console.error("Failed to save read notifications:",a)}}getAll(){const e=new Set(this.getReadIds());return U.map(a=>({...a,isRead:e.has(a.id)}))}getUnreadCount(){const e=new Set(this.getReadIds());return U.filter(a=>!e.has(a.id)).length}markAsRead(e){const a=new Set(this.getReadIds());a.add(e),this.saveReadIds(Array.from(a))}markAsUnread(e){const a=new Set(this.getReadIds());a.delete(e),this.saveReadIds(Array.from(a))}markAllAsRead(){const e=U.map(a=>a.id);this.saveReadIds(e)}resetAll(){this.saveReadIds([])}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(a=>a!==e)}}notifyListeners(){const e=this.getUnreadCount();this.listeners.forEach(a=>a(e))}}const _=new we;function _e(t,e){let a="all";function s(){const n=_.getAll(),r=_.getUnreadCount(),i=a==="unread"?n.filter(d=>!d.isRead):n;t.innerHTML=`
      <div class="px-margin-desktop py-space-xl flex flex-col gap-space-lg w-full max-w-5xl mx-auto">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md border-b border-outline-variant/30 pb-space-md">
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
              <h1 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">System Notifications</h1>
              ${r>0?`
                <span class="px-2 py-0.5 rounded-full bg-error text-white font-label-sm text-xs font-bold font-tabular-data">
                  ${r} Unread
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
            ${r>0?`
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
            Unread (${r})
          </button>
        </div>

        <!-- Notification List -->
        <div class="flex flex-col gap-3" id="notificationsList">
          ${i.length===0?`
            <div class="p-space-xl bg-surface-container-lowest rounded-xl border border-outline-variant/30 text-center flex flex-col items-center justify-center gap-2">
              <span class="material-symbols-outlined text-[36px] text-on-surface-variant/60">notifications_off</span>
              <span class="font-headline-sm text-base text-on-surface font-bold">No notifications to display</span>
              <p class="font-body-sm text-xs text-on-surface-variant">There are currently no notifications under this filter.</p>
            </div>
          `:i.map(d=>{const m=d.severity==="critical"?"border-l-4 border-l-red-500 bg-red-50/20 dark:bg-red-950/20":d.severity==="high"?"border-l-4 border-l-orange-500 bg-orange-50/20 dark:bg-orange-950/20":"border-l-4 border-l-sky-500 bg-sky-50/20 dark:bg-sky-950/20",f=d.isRead?"opacity-85 border border-outline-variant/20 bg-surface-container-lowest":"border border-outline-variant/50 shadow-sm";return`
              <div class="p-space-md rounded-xl ${m} ${f} bg-surface-container-lowest flex flex-col md:flex-row md:items-center justify-between gap-space-sm transition-all" data-id="${d.id}">
                <div class="flex items-start gap-space-sm">
                  <div class="mt-0.5 shrink-0">
                    ${d.isRead?`
                      <span class="w-2.5 h-2.5 rounded-full bg-surface-container-high block"></span>
                    `:`
                      <span class="w-2.5 h-2.5 rounded-full bg-secondary-container block ring-2 ring-surface-container-lowest"></span>
                    `}
                  </div>
                  <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="px-2 py-0.5 rounded font-label-sm text-[10px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface">
                        ${d.category}
                      </span>
                      <span class="font-body-sm text-xs text-on-surface-variant font-tabular-data">${d.timestamp}</span>
                      ${d.isRead?"":`
                        <span class="px-1.5 py-0.2 rounded text-[10px] bg-secondary-fixed text-on-secondary-fixed font-bold uppercase">New</span>
                      `}
                    </div>
                    <h3 class="font-headline-sm text-base text-on-surface font-semibold ${d.isRead?"":"font-bold"}">
                      ${d.title}
                    </h3>
                    <p class="font-body-sm text-xs text-on-surface-variant max-w-2xl">
                      ${d.summary}
                    </p>
                  </div>
                </div>

                <!-- Card Actions -->
                <div class="flex items-center gap-2 shrink-0 self-end md:self-center pl-6 md:pl-0">
                  <button class="notif-read-btn p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-id="${d.id}" aria-label="Read notification aloud" title="Read aloud" type="button">
                    <span class="material-symbols-outlined text-[18px]">volume_up</span>
                  </button>
                  <a class="px-3 py-1.5 rounded font-label-sm text-xs font-semibold bg-primary text-on-primary hover:bg-surface-tint transition-colors flex items-center gap-1" href="${d.actionRoute}">
                    <span>${d.actionLabel}</span>
                    <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                  <button class="toggle-read-btn p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-id="${d.id}" title="${d.isRead?"Mark as Unread":"Mark as Read"}" type="button">
                    <span class="material-symbols-outlined text-[18px]">
                      ${d.isRead?"mark_email_unread":"check_circle"}
                    </span>
                  </button>
                </div>
              </div>
            `}).join("")}
        </div>

      </div>
    `;const o=t.querySelector("#markAllReadBtn");o&&o.addEventListener("click",()=>{_.markAllAsRead(),s(),e&&e()});const l=t.querySelector("#resetNotifsBtn");l&&l.addEventListener("click",()=>{_.resetAll(),s(),e&&e()});const p=t.querySelector("#filterAllBtn");p&&p.addEventListener("click",()=>{a="all",s()});const u=t.querySelector("#filterUnreadBtn");u&&u.addEventListener("click",()=>{a="unread",s()}),t.querySelectorAll(".notif-read-btn").forEach(d=>{d.addEventListener("click",m=>{m.stopPropagation();const f=d.getAttribute("data-id"),c=_.getAll().find(b=>b.id===f);if(c){const b=d.querySelector(".material-symbols-outlined");S.speak(`${c.category} alert. ${c.title}. ${c.summary}`,k.getLanguage(),x=>{b&&(b.textContent=x==="speaking"?"pause":"volume_up")})}})}),t.querySelectorAll(".toggle-read-btn").forEach(d=>{d.addEventListener("click",m=>{m.stopPropagation();const f=d.getAttribute("data-id"),c=_.getAll().find(b=>b.id===f);c!=null&&c.isRead?_.markAsUnread(f):_.markAsRead(f),s(),e&&e()})})}s()}const Z="bhoomi_theme",w={SYSTEM:"system",LIGHT:"light",DARK:"dark"};class ke{constructor(){this.mediaQuery=window.matchMedia("(prefers-color-scheme: dark)"),this.listeners=[],this.currentTheme=this.getStoredTheme()}init(){this.applyTheme(this.currentTheme),this.mediaQuery.addEventListener("change",()=>{this.currentTheme===w.SYSTEM&&this.applyTheme(w.SYSTEM)})}getStoredTheme(){try{const e=localStorage.getItem(Z);if(e&&Object.values(w).includes(e))return e}catch{}return w.SYSTEM}getResolvedTheme(){return this.currentTheme===w.SYSTEM?this.mediaQuery.matches?w.DARK:w.LIGHT:this.currentTheme}setTheme(e){if(Object.values(w).includes(e)){this.currentTheme=e;try{localStorage.setItem(Z,e)}catch(a){console.warn("Could not persist theme to localStorage:",a)}this.applyTheme(e),this.notifyListeners()}}applyTheme(e){const a=e===w.DARK||e===w.SYSTEM&&this.mediaQuery.matches,s=document.documentElement;a?s.classList.add("dark"):s.classList.remove("dark"),s.setAttribute("data-theme",e)}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(a=>a!==e)}}notifyListeners(){this.listeners.forEach(e=>e(this.currentTheme,this.getResolvedTheme()))}}const j=new ke;class Ce{constructor(){this.container=document.getElementById("appViewContainer"),this.currentView="dashboard",this.isBackendOnline=!1,this.healthInterval=null,this.clockInterval=null}init(){j.init(),this.setupThemeToggle(),this.setupLanguageToggle(),this.setupNavigation(),this.setupMobileMenu(),this.updateLanguageUI(),this.setupClock(),this.setupNotificationBell(),this.startHealthPolling(),this.handleRouting(),window.addEventListener("hashchange",()=>this.handleRouting());const e=document.getElementById("brandHeaderHome");e&&(e.addEventListener("click",()=>{window.location.hash="#/dashboard"}),e.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),window.location.hash="#/dashboard")}));const a=document.getElementById("backendStatusPill");a&&(a.addEventListener("click",()=>this.checkBackendHealth(!0)),a.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.checkBackendHealth(!0))}))}setupNotificationBell(){const e=document.getElementById("notifBellBtn");e&&e.addEventListener("click",()=>{window.location.hash="#/notifications"}),this.updateNotificationBadge(),_.subscribe(()=>this.updateNotificationBadge())}updateNotificationBadge(){const e=_.getUnreadCount(),a=document.getElementById("notifBellBadge"),s=document.getElementById("notifBellBtn");a&&(e>0?(a.textContent=e>9?"9+":e,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden"))),s&&s.setAttribute("title",e>0?`${e} Unread System Notifications`:"No Unread Notifications")}setupThemeToggle(){const e=document.getElementById("themeToggleBtn"),a=document.getElementById("themeMenu"),s=document.getElementById("themeIcon"),n=document.querySelectorAll(".theme-option-btn"),r=i=>{const o={system:"brightness_auto",light:"light_mode",dark:"dark_mode"};s&&(s.textContent=o[i]||"brightness_auto"),n.forEach(l=>{const p=l.getAttribute("data-theme"),u=l.querySelector(".check-icon");p===i?(l.classList.add("bg-surface-container","font-semibold"),u&&u.classList.remove("hidden")):(l.classList.remove("bg-surface-container","font-semibold"),u&&u.classList.add("hidden"))})};r(j.currentTheme),j.subscribe(i=>r(i)),e&&a&&(e.addEventListener("click",i=>{i.stopPropagation(),!a.classList.contains("hidden")?(a.classList.add("hidden"),e.setAttribute("aria-expanded","false")):(a.classList.remove("hidden"),e.setAttribute("aria-expanded","true"))}),n.forEach(i=>{i.addEventListener("click",()=>{const o=i.getAttribute("data-theme");j.setTheme(o),a.classList.add("hidden"),e.setAttribute("aria-expanded","false")})}),document.addEventListener("click",i=>{!e.contains(i.target)&&!a.contains(i.target)&&(a.classList.add("hidden"),e.setAttribute("aria-expanded","false"))}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!a.classList.contains("hidden")&&(a.classList.add("hidden"),e.setAttribute("aria-expanded","false"),e.focus())}))}setupLanguageToggle(){const e=document.getElementById("langToggleBtn"),a=document.getElementById("langMenu"),s=document.getElementById("langCurrentLabel"),n=document.querySelectorAll(".lang-option-btn"),r=i=>{s&&(s.textContent=i.toUpperCase()),n.forEach(o=>{const l=o.getAttribute("data-lang"),p=o.querySelector(".check-icon");l===i?(o.classList.add("bg-surface-container","font-semibold"),p&&p.classList.remove("hidden")):(o.classList.remove("bg-surface-container","font-semibold"),p&&p.classList.add("hidden"))}),this.updateLanguageUI()};r(k.getLanguage()),k.subscribe(i=>{r(i),this.handleRouting()}),e&&a&&(e.addEventListener("click",i=>{i.stopPropagation(),!a.classList.contains("hidden")?(a.classList.add("hidden"),e.setAttribute("aria-expanded","false")):(a.classList.remove("hidden"),e.setAttribute("aria-expanded","true"))}),n.forEach(i=>{i.addEventListener("click",()=>{const o=i.getAttribute("data-lang");k.setLanguage(o),a.classList.add("hidden"),e.setAttribute("aria-expanded","false")})}),document.addEventListener("click",i=>{!e.contains(i.target)&&!a.contains(i.target)&&(a.classList.add("hidden"),e.setAttribute("aria-expanded","false"))}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!a.classList.contains("hidden")&&(a.classList.add("hidden"),e.setAttribute("aria-expanded","false"),e.focus())}))}setupMobileMenu(){const e=document.getElementById("mobileMenuToggleBtn"),a=document.getElementById("mobileNavigationMenu"),s=document.getElementById("mobileMenuIcon");if(!e||!a)return;const n=()=>{a.classList.add("hidden"),e.setAttribute("aria-expanded","false"),s&&(s.textContent="menu")},r=()=>{a.classList.remove("hidden"),e.setAttribute("aria-expanded","true"),s&&(s.textContent="close")};e.addEventListener("click",i=>{i.stopPropagation(),a.classList.contains("hidden")?r():n()}),a.querySelectorAll(".mobile-nav-tab").forEach(i=>{i.addEventListener("click",()=>{n()})}),document.addEventListener("click",i=>{!e.contains(i.target)&&!a.contains(i.target)&&n()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!a.classList.contains("hidden")&&(n(),e.focus())})}updateLanguageUI(){document.querySelectorAll(".nav-tab").forEach(s=>{const n=s.getAttribute("data-target");if(n){const r=s.querySelector("span:not(.material-symbols-outlined)")||s;r.textContent=q(`nav.${n}`,r.textContent)}});const a=document.getElementById("currentViewName");a&&this.currentView&&(a.textContent=q(`views.${this.currentView}`,a.textContent))}setupNavigation(){document.querySelectorAll(".nav-tab").forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-target");s&&this.updateNavState(s)})})}updateNavState(e){document.querySelectorAll(".nav-tab").forEach(n=>{const r=n.getAttribute("data-target")===e;n.classList.contains("mobile-nav-tab")?r?(n.className="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors bg-primary-container text-on-primary font-semibold shadow-sm focus:ring-2 focus:ring-primary",n.setAttribute("aria-current","page")):(n.className="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors text-on-surface-variant hover:text-on-surface hover:bg-surface-container focus:ring-2 focus:ring-primary",n.removeAttribute("aria-current")):r?(n.className="nav-tab px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-label-md rounded-lg shadow-sm font-semibold focus-visible:ring-2 focus-visible:ring-primary",n.setAttribute("aria-current","page")):(n.className="nav-tab px-space-md py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded focus-visible:ring-2 focus-visible:ring-primary",n.removeAttribute("aria-current"))});const s=document.getElementById("currentViewName");s&&(s.textContent=q(`views.${e}`,"Executive Command Center"))}handleRouting(){const e=window.location.hash||"#/dashboard",[a,s]=e.replace("#/","").split("?"),n=new URLSearchParams(s||"");switch(this.currentView=a||"dashboard",this.updateNavState(this.currentView),window.scrollTo({top:0,behavior:"smooth"}),this.currentView){case"notifications":_e(this.container,()=>this.updateNotificationBadge());break;case"assessment":const r=n.get("preset")||"medium";fe(this.container,r);break;case"projects":ve(this.container,o=>{window.location.hash=`#/assessment?preset=${o}`},o=>{window.location.hash=`#/audit?id=${o}`});break;case"audit":const i=n.get("id")||"BF-NH-2024-09";he(this.container,i,o=>{window.location.hash=`#/assessment?preset=${o}`});break;case"dashboard":default:this.currentView="dashboard",ue(this.container,o=>{window.location.hash=`#/assessment?preset=${o}`},o=>{window.location.hash=`#/audit?id=${o}`});break}}setupClock(){const e=()=>{const a=document.getElementById("liveISTClock");if(a){const s=new Date,n={timeZone:"Asia/Kolkata",hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"};a.textContent=s.toLocaleTimeString("en-GB",n)}};e(),this.clockInterval=setInterval(e,1e3)}async checkBackendHealth(e=!1){var r,i;const a=document.getElementById("backendStatusDot"),s=document.getElementById("backendStatusText");a&&(a.innerHTML='<span class="animate-pulse relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>'),s&&!this.isBackendOnline&&(s.textContent="Backend: Connecting...",s.className="font-label-sm text-label-sm text-on-surface-variant font-tabular-data");const n=await G.checkHealth();if(n.online&&n.modelLoaded){let o="FastAPI Connected • XGBoost Engine Active";try{this.cachedMetadata||(this.cachedMetadata=await G.getMetadata()),(i=(r=this.cachedMetadata)==null?void 0:r.model)!=null&&i.version&&(o=`FastAPI Connected • XGBoost Engine v${this.cachedMetadata.model.version} Active`)}catch{}a&&(a.innerHTML=`
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        `),s&&(s.textContent=o,s.className="font-label-sm text-label-sm text-on-surface font-tabular-data font-semibold"),!this.isBackendOnline&&e&&this.showToast("Backend connected: XGBoost binary classifier loaded.","success"),this.isBackendOnline=!0}else a&&(a.innerHTML=`
          <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        `),s&&(s.textContent="Backend Unavailable • Click to Retry",s.className="font-label-sm text-label-sm text-red-600 dark:text-red-400 font-tabular-data font-semibold"),(this.isBackendOnline||e)&&this.showToast("Prediction service is temporarily unavailable. Please try again.","warning"),this.isBackendOnline=!1}startHealthPolling(){this.checkBackendHealth(),this.healthInterval=setInterval(()=>this.checkBackendHealth(),6e3)}showToast(e,a="info"){const s=document.getElementById("toastContainer");if(!s)return;const n=document.createElement("div"),r=a==="success"?"bg-primary-container text-on-primary border-secondary":"bg-amber-100 text-amber-950 border-amber-400";n.className=`${r} px-4 py-3 rounded-lg shadow-lg border text-sm max-w-md pointer-events-auto flex items-start gap-2 transition-all duration-300 transform translate-y-2 opacity-0`,n.innerHTML=`
      <span class="material-symbols-outlined text-[18px] text-secondary-container mt-0.5">info</span>
      <span class="flex-1">${e}</span>
    `,s.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("translate-y-2","opacity-0")}),setTimeout(()=>{n.classList.add("opacity-0","translate-y-2"),setTimeout(()=>n.remove(),300)},4500)}}document.addEventListener("DOMContentLoaded",()=>{new Ce().init()});

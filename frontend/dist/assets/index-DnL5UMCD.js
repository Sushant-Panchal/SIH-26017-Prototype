(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const L={low:{id:"preset-low",name:"NH-44 Bypass Ph. 2",subtitle:"Low Delay • Clear Title",tag:"LOW RISK",values:{project_type:"Highway",land_type:"Agricultural",priority:"Normal",current_stage:"Notification",complexity_score:22.4,total_parcels:350,affected_families:48,land_area_hectares:65.2,planned_duration_days:420,days_since_notification:45,days_elapsed:45,days_in_current_stage:45,planned_stage_duration_days:60,acquisition_progress_pct:88.5,acquisition_velocity_pct_per_30d:14.8,parcels_pending:40,parcels_acquired:310,possession_pending_parcels:25,possession_progress_pct:92.8,documents_required:350,documents_pending:18,documents_verified:332,documentation_completion_pct:94.9,compensation_pending_cases:12,compensation_pending_amount:3.5,compensation_completion_pct:96.2,avg_compensation_delay_days:8,approvals_pending:1,overdue_approvals:0,avg_approval_delay_days:4,pending_objections:1,active_legal_disputes:0,ownership_disputes:0,court_stay_cases:0,rr_pending_cases:4,rr_completion_pct:94,schedule_variance_days:-12,milestones_overdue:0,pending_stakeholder_actions:2,avg_stakeholder_response_days:5.2,stakeholder_responsiveness_score:8.9,historical_avg_delay_days:14}},medium:{id:"preset-medium",name:"Western Freight Corridor",subtitle:"Baseline Model • FY26-Q1",tag:"MEDIUM RISK",values:{project_type:"Highway",land_type:"Agricultural",priority:"Normal",current_stage:"Notification",complexity_score:47.7,total_parcels:233,affected_families:113,land_area_hectares:132.47,planned_duration_days:607,days_since_notification:30,days_elapsed:30,days_in_current_stage:30,planned_stage_duration_days:26,acquisition_progress_pct:6.01,acquisition_velocity_pct_per_30d:6.13,parcels_pending:219,parcels_acquired:14,possession_pending_parcels:218,possession_progress_pct:6.47,documents_required:241,documents_pending:232,documents_verified:9,documentation_completion_pct:3.73,compensation_pending_cases:105,compensation_pending_amount:10.95,compensation_completion_pct:6.2,avg_compensation_delay_days:52.68,approvals_pending:5,overdue_approvals:2,avg_approval_delay_days:41.04,pending_objections:0,active_legal_disputes:0,ownership_disputes:0,court_stay_cases:0,rr_pending_cases:47,rr_completion_pct:4.08,schedule_variance_days:-7.19,milestones_overdue:1,pending_stakeholder_actions:7,avg_stakeholder_response_days:28.59,stakeholder_responsiveness_score:5.14,historical_avg_delay_days:100.8}},high:{id:"preset-high",name:"Docs Backlog Ph. 1",subtitle:"High Bottleneck • Stagnation Watchlist",tag:"HIGH RISK",values:{project_type:"Railway",land_type:"Commercial",priority:"Critical",current_stage:"Survey",complexity_score:68.5,total_parcels:1120,affected_families:420,land_area_hectares:210.5,planned_duration_days:900,days_since_notification:180,days_elapsed:180,days_in_current_stage:90,planned_stage_duration_days:60,acquisition_progress_pct:35,acquisition_velocity_pct_per_30d:2.5,parcels_pending:728,parcels_acquired:392,possession_pending_parcels:610,possession_progress_pct:28,documents_required:1120,documents_pending:580,documents_verified:540,documentation_completion_pct:48.2,compensation_pending_cases:240,compensation_pending_amount:42.6,compensation_completion_pct:38.5,avg_compensation_delay_days:72,approvals_pending:6,overdue_approvals:3,avg_approval_delay_days:65,pending_objections:18,active_legal_disputes:5,ownership_disputes:4,court_stay_cases:1,rr_pending_cases:85,rr_completion_pct:32,schedule_variance_days:54,milestones_overdue:3,pending_stakeholder_actions:9,avg_stakeholder_response_days:38,stakeholder_responsiveness_score:3.8,historical_avg_delay_days:95}},critical:{id:"preset-critical",name:"Court Injunction HC",subtitle:"Critical Hold • High Court Stay Active",tag:"CRITICAL RISK",values:{project_type:"Metro",land_type:"Industrial",priority:"Critical",current_stage:"Compensation",complexity_score:84,total_parcels:850,affected_families:610,land_area_hectares:184.2,planned_duration_days:1200,days_since_notification:360,days_elapsed:360,days_in_current_stage:180,planned_stage_duration_days:90,acquisition_progress_pct:22,acquisition_velocity_pct_per_30d:.8,parcels_pending:663,parcels_acquired:187,possession_pending_parcels:620,possession_progress_pct:18,documents_required:850,documents_pending:640,documents_verified:210,documentation_completion_pct:24.7,compensation_pending_cases:380,compensation_pending_amount:85.4,compensation_completion_pct:18,avg_compensation_delay_days:118,approvals_pending:9,overdue_approvals:6,avg_approval_delay_days:98,pending_objections:42,active_legal_disputes:14,ownership_disputes:8,court_stay_cases:4,rr_pending_cases:140,rr_completion_pct:14,schedule_variance_days:145,milestones_overdue:6,pending_stakeholder_actions:14,avg_stakeholder_response_days:52,stakeholder_responsiveness_score:2.1,historical_avg_delay_days:135}}},E=[{id:"BF-NH-2024-09",name:"Delhi-Amritsar Expressway (Pkg 4)",type:"Highway",sector:"National Highway",district:"Ludhiana",state:"Punjab",stage:"Sec 19 Declaration",progressPct:42,delayProbability:84.6,riskLevel:"CRITICAL",badgeClass:"bg-error-container text-on-error-container",presetKey:"critical"},{id:"BF-RL-2023-14",name:"Western Dedicated Freight Corridor",type:"Railway",sector:"Freight Rail Corridor",district:"Vadodara",state:"Gujarat",stage:"Compensation Award",progressPct:68,delayProbability:71.2,riskLevel:"HIGH",badgeClass:"bg-secondary-fixed text-on-secondary-fixed-variant",presetKey:"high"},{id:"BF-EN-2024-03",name:"Bhadla Solar Ultra Park Ext",type:"Power",sector:"Renewable Energy Grid",district:"Jodhpur",state:"Rajasthan",stage:"Joint Survey 3A",progressPct:31,delayProbability:58.4,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"},{id:"BF-NH-2024-22",name:"NH-66 Coastal Highway Expansion",type:"Highway",sector:"National Highway",district:"Udupi",state:"Karnataka",stage:"Notification",progressPct:54,delayProbability:42.3,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"},{id:"BF-MT-2024-05",name:"Pune Metro Line 3 Corridor",type:"Metro",sector:"Urban Mass Transit",district:"Pune",state:"Maharashtra",stage:"Rehabilitation",progressPct:79,delayProbability:34.8,riskLevel:"LOW",badgeClass:"bg-emerald-100 text-emerald-900 border border-emerald-300",presetKey:"low"},{id:"BF-IN-2024-18",name:"Dholera Special Investment Region Ph 1",type:"Industrial",sector:"Industrial Node / SEZ",district:"Ahmedabad",state:"Gujarat",stage:"Valuation",progressPct:62,delayProbability:46.1,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"}],ie={header:{platformName:"Bhoomi Sakha",sihBadge:"SIH 2026 • PS ID 26017",subtitle:"Predictive Land Acquisition Delay-Risk Platform",statusConnecting:"Backend: Connecting...",statusConnected:"FastAPI Connected • XGBoost Engine Active",statusUnavailable:"Backend Unavailable • Click to Retry",commandCenter:"Command Center",statutoryCutoff:"Statutory Cutoff: 48h Remaining",istClock:"IST",officerName:"Dr. R. K. Sharma",officerRole:"IAS, Land Commissioner",openNotifications:"Open notifications",toggleTheme:"Toggle color theme",selectLanguage:"Select application language",toggleMenu:"Open navigation menu"},footer:{description:"Smart India Hackathon 2026 • Problem Statement ID 26017 • National Land Records Modernization Program (NLRMP) Architecture",auditNode:"Audit Node: 0x88F2B7",protocol:"Precision Cadastral Verification Protocol v4.1"},nav:{dashboard:"Dashboard",assessment:"Risk Assessment",projects:"Projects Directory",audit:"Audit Detail",notifications:"Notifications"},views:{dashboard:"National Cadastral Matrix (Overview)",assessment:"Predictive Delay-Risk Assessment Cockpit",projects:"National Land Acquisition Projects Directory",audit:"Cadastral & Risk Detailed Dossier",notifications:"System Notifications & Operational Alerts"},dropdown:{project_type:{highway:"Highway",railway:"Railway",industrial:"Industrial Node",metro:"Metro Rail",irrigation:"Irrigation",power:"Power Grid",urban_development:"Urban Development"},land_type:{agricultural:"Agricultural",commercial:"Commercial",industrial:"Industrial",mixed:"Mixed Revenue",residential:"Residential"},priority:{normal:"Normal",high:"High",critical:"Critical"}},risk:{low:"LOW",medium:"MEDIUM",high:"HIGH",critical:"CRITICAL",lowRisk:"LOW RISK",mediumRisk:"MEDIUM RISK",highRisk:"HIGH RISK",criticalRisk:"CRITICAL RISK",lowTier:"Low Delay Tier",mediumTier:"Moderate Risk Tier",highTier:"High Bottleneck Tier",criticalTier:"Critical Injunction Tier",lowWording:"Low predicted delay risk",mediumWording:"Moderate predicted delay risk",highWording:"High predicted delay risk",criticalWording:"Critical predicted delay risk",lowSummary:"Low predicted delay risk based on the current project snapshot.",mediumSummary:"Moderate predicted delay risk based on the current project snapshot.",highSummary:"High predicted delay risk based on the current project snapshot.",criticalSummary:"Critical predicted delay risk based on the current project snapshot.",lowThreshold:"Risk Level: LOW (Threshold < 40%)",mediumThreshold:"Risk Level: MEDIUM (Threshold: 40% – 59.9%)",highThreshold:"Risk Level: HIGH (Threshold: 60% – 79.9%)",criticalThreshold:"Risk Level: CRITICAL (Threshold ≥ 80%)",tier:"Tier"},dashboard:{pipelineBadge:"National Infrastructure Pipeline • MoRTH / MoR Analytics",title:"Land Acquisition Intelligence",subtitle:"Monitor project progress, detect emerging delay risks, and prioritize intervention across critical national infrastructure corridors.",runScan:"Run National Risk Scan",scanning:"Scanning 142 National Projects...",scanCompleted:"National Scan Completed: 29 High/Critical risks identified.",launchCockpit:"Launch Assessment Cockpit",totalProjects:"Total Projects Monitored",totalProjectsCount:"142 Projects",totalProjectsDesc:"46 National Highways, 38 Freight, 58 Energy & Urban",highCriticalRisk:"High / Critical Risk",highCriticalCount:"29 Projects",highCriticalDesc:"+3 from last sprint • 18 High, 11 Critical",requiringIntervention:"Requiring Intervention",interventionCount:"14 Immediate Actions",interventionDesc:"8 Document Bottlenecks, 6 Compensation Escrows",avgDelayRisk:"Average Delay Risk",modelConfidence:"Model CI 95%",lowMediumZone:"Low-Medium Zone",baselineVariance:"Baseline variance -2.4% vs state avg",riskOverview:"Risk Overview & Distribution",portfolioBreakdown:"National Portfolio breakdown (N=142)",liveModelActive:"Live Model Active",actionPlanMandatory:"Action plan mandatory",stagnationWatchlist:"Stagnation watchlist",statutoryTracking:"Statutory tracking",nominalTrajectory:"Nominal trajectory",keyRiskDrivers:"Key Risk Drivers",rootCauseCluster:"Root Cause Cluster",driverDocumentation:"Documentation Backlog (Title & 3A)",driverPossession:"Possession Delays (Encroachments)",driverDisputes:"Court Disputes & Injunctions",driverApprovals:"Approval Stalls (Inter-Agency)",predictiveTriangulationAlert:"Predictive Triangulation Alert",triangulationAlertText:"Corridors passing through industrial agro-zones face an 82% likelihood of Section 15 objection escalation within 14 days without active district tehsildar hearings.",modelConfidenceTag:"Model Confidence: 91.4% (SIH Model XG-26)",priorityProjects:"Priority Projects Requiring Administrative Oversight",cadastralEscalation:"Cadastral escalation ledger sorted by delay probability",searchPlaceholder:"Search project or ID...",colId:"Project ID",colName:"Name & Sector",colDistrict:"District / State",colProgress:"Progress",colRisk:"Delay Risk",colTier:"Tier",colAction:"Action",assessBtn:"Assess",auditBtn:"Audit",noMatchingProjects:"No matching projects found."},assessment:{title:"Assess Project Risk",engineBadge:"FastAPI • XGB-26017 Engine",subtitle:"Enter or edit project telemetry to estimate statutory delay probability and inspect model-derived risk drivers via POST /predict.",selectProject:"Select Existing Project",testScenario:"Create / Test Scenario",statutoryPresets:"Statutory Test Presets:",telemetryMatrices:"Telemetry Input Matrices",telemetrySubtitle:"Configure cadastral attributes according to Section 11 & 19 statutory filings",resetValues:"Reset Values",sectionA:"Section A • Project Profile",coreClassification:"Core Classification",labelProjectType:"Project Type",labelLandType:"Land Classification",labelPriority:"Priority Tier",labelComplexity:"Complexity (0-100)",labelTotalParcels:"Total Parcels",labelAffectedFamilies:"Affected Families (PAFs)",labelLandArea:"Land Extent (Ha)",labelPlannedDuration:"Planned Duration (d)",sectionB:"Section B • Progress",velocityActive:"Velocity Active",labelAcqProgress:"Acq. Progress (%)",labelVelocity:"Velocity (%/30d)",labelParcelsPending:"Parcels Pending",labelPossessionPending:"Possession Pending",sectionC:"Section C • Documentation",keyModelDriver:"Key Model Driver",labelDocsReq:"Docs Required",labelDocsPending:"Docs Pending",labelDocCompletion:"Documentation Completion",sectionD:"Section D • Compensation",escrowTranche:"Escrow Tranche",labelCompCases:"Pending Cases",labelCompAmount:"Pending (₹ Cr)",labelCompDisbursed:"Disbursed %",sectionE:"Section E • Clearances",interAgencyGate:"Inter-Agency Gate",labelApprPending:"Approvals Pend.",labelApprOverdue:"Overdue Num",labelApprDelay:"Avg Delay (d)",sectionF:"Section F • Legal Litigations & Objections",section15Hearings:"Section 15 Hearings",labelPendingObj:"Pending Objections",labelActiveDisputes:"Active Land Disputes",labelOwnerDisputes:"Ownership Conflicts",labelCourtStays:"Court Stays / Writs",sectionG:"Section G • R&R Resettlement",rfctlarrCompliance:"RFCTLARR Compliance",labelRrPending:"Pending Cases",labelRrCompletion:"Completion %",sectionH:"Section H • Schedule & Variance",criticalPath:"Critical Path",labelSchedVariance:"Variance (Days)",labelMilestonesOverdue:"Overdue Milestones",sectionI:"Section I • Stakeholder Coordination",responseLatency:"Response Latency",labelShActions:"Pending Act.",labelShResponse:"Avg Resp (d)",labelShScore:"Score /10",sectionJ:"Section J • Historical Delay Context",regionalPriors:"Regional Priors",labelHistDelay:"Avg Reg. Delay (d)",trainingArchetype:"Training Archetype:",linearInfra:"Linear Infrastructure (NLRMP)",targetWindow:"Inference Target: Statutory 5-Year Window",mandateValidation:"LARR Act 2013 § 25 Mandate Validation • XGBoost Engine",resetBtn:"Reset",assessRiskBtn:"Assess Project Risk",analyzingTelemetry:"Analyzing Project Telemetry...",callingApi:"Calling FastAPI POST /predict & XGBoost Tree Contributions",riskIndex:"Predictive Risk Index",predictedDelayProb:"Predicted Delay Probability",modelNote:"Predicted by XGBoost Model (SIH 26017) trained on 3,000,000 national records. Live model inference via POST /predict.",riskIncreasingFactors:"Risk-Increasing Factors",modelContributionPos:"Model Contribution (+Δ)",noRiskIncreasing:"No major risk-increasing factors identified for this project state.",action:"Action:",riskReducingFactors:"Factors Reducing Predicted Risk",modelContributionNeg:"Model Contribution (-Δ)",noRiskReducing:"No significant risk-reducing factors detected.",mathematicalNote:"Note: Values reflect mathematical dampening within the XGBoost model and are not causal recommendations.",recommendedDirectives:"Recommended Statutory Directives",priorityExecution:"Priority Execution",p1Priority:"P1 PRIORITY",p2Priority:"P2 PRIORITY",resolution:"Resolution",nominalDirectives:"Statutory progress remains nominal. Continue scheduled monitoring under Section 19 protocols.",methodology:"Methodology & Model Evaluation",methodologyText:"The Bhoomi Sakha inference engine executes binary classification across 76 engineered features aligned with statutory RFCTLARR Act 2013 and national cadastral norms.",accuracy:"Accuracy",rocAuc:"ROC-AUC",precision:"Precision",recall:"Recall",trainingDataset:"Training Dataset",projectsEvaluated:"Projects Evaluated",treeContribs:"Tree Contributions",treeContribsDesc:"Feature weights reflect exact gradient boosting margin impacts per project snapshot.",riskThresholds:"Risk Thresholds",inferenceUnavailable:"Inference Unavailable",retryAssessment:"Retry Assessment",readAloudIntro:"Bhoomi Sakha assessment outcome."},projects:{title:"National Projects Directory",subtitle:"Explore active infrastructure corridors, cadastral verification stages, and predicted delay exposures across all state jurisdictions.",newAssessment:"New Project Assessment",filterSector:"Filter By Sector",allSectors:"All Sectors (Highway, Rail, Power, Metro)",filterRisk:"Risk Tier",allRisks:"All Risk Tiers",searchPlaceholder:"Filter by name, ID, or district...",colId:"Project ID",colName:"Name & Corridor",colDistrict:"State & District",colStage:"Statutory Stage",colProgress:"Acquisition Progress",colRisk:"Predicted Delay Risk",colTier:"Status Tier",colAction:"Actions",assessRisk:"Assess Risk",auditFile:"Audit File",noRecords:"No matching records found in national database."},detail:{breadcrumbProjects:"Projects",detailedAnalysis:"Detailed Risk Analysis",statutoryHash:"Statutory Hash",modelInference:"Model Inference",liveSynchronized:"Live Synchronized",nationalCorridor:"National Corridor",authorityWing:"MoRTH / Authority Corridors Wing",stage:"Stage",district:"District",alignment:"Alignment",cala:"CALA: Competent Authority Land Acquisition",division:"Division",rerunAssessment:"Re-run Assessment",draftDcOrder:"Draft DC Order",riskTier:"Risk Tier",engineXgb:"XGB-26017 Engine",modelDelayProb:"Model Delay Probability",probability:"PROBABILITY",predictedStatutoryImpact:"Predicted Statutory Impact",modelConfidence:"Model Confidence",trainedRecords:"N = 3,000,000 Trained",totalRequisition:"Total Land Requisition",spreadVillages:"Spread over 14 Revenue Villages",affectedLandowners:"Affected Landowners",khatas:"Khatas",unresolvedMutations:"410 mutations unresolved",sanctionedEscrow:"Sanctioned Escrow",undisbursedEscrow:"₹29.60 Cr undisbursed",statutoryCutoffLabel:"Section 19 Statutory Cutoff Timeline:",slippageRisk:"+94 Days Slippage Risk",bottleneckFlag:"Critical path bottleneck flagged in ownership verification and mutation camp clearance.",progressGaugesTitle:"Multi-Domain Acquisition Progress Gauges",progressGaugesSubtitle:"Cadastral metrics synchronized with state e-Bhoomi records registry",cycleAudit:"Cycle Audit: FY26-Q1-ACTIVE",overallProgress:"Overall Progress",jointSurvey:"Joint Survey 3A",sec23Award:"Sec 23 Award",physicalRow:"Physical ROW",dbtEscrow:"DBT Escrow",dossierFor:"Project dossier for",state:"State",statutoryStage:"Current statutory stage",modalPrototypeDraft:"Prototype Draft",modalSimulationMode:"Simulation Mode • Not Legally Enforceable",modalTitle:"Draft DC Order / Administrative Directive",modalSubtitle:"Pre-populated prototype administrative memo based on real-time project risk telemetry.",modalOffice:"Office of the District Collector & District Magistrate",modalCala:"Competent Authority Land Acquisition (CALA)",modalRef:"Ref",modalDate:"Date",modalAreaFamilies:"Area / Families",modalDisclaimer:"Prototype Disclaimer: This draft memo is generated for governance evaluation within the Bhoomi Sakha prototype. It does not replace statutory procedures under the RFCTLARR Act 2013 or respective State Land Acquisition rules and carries no legal authority without official executive signature.",modalCopyDraft:"Copy Draft Text",modalCopied:"Copied to Clipboard!",modalPrint:"Print / Save",modalClose:"Close",modalMemoSub:"Pre-emptive Administrative Acceleration Directive under RFCTLARR Framework",modalTeleFindings:"1. TELEMETRY & PREDICTIVE AUDIT FINDINGS:",modalTargetArea:"Total Target Land Area",modalAffectedFam:"Total Affected Families",modalParcels:"Total Cadastral Parcels",modalDirectives:"2. ADMINISTRATIVE DIRECTIVES TO COMPETENT AUTHORITIES (CALA):",modalDirectiveA:"a) Joint Site Inspection: The Special Land Acquisition Officer (SLAO) and Sub-Divisional Magistrate (SDM) shall initiate immediate expedited joint site inspection for remaining pending parcels.",modalDirectiveB:"b) DBT Escrow Acceleration: Direct Benefit Transfer (DBT) reconciliation and compensation award payouts shall be expedited within a 14-day statutory timeline to prevent critical milestone slippage.",modalDirectiveC:"c) Lok Adalat Conciliation: Outstanding objections and title verification issues must be scheduled for expedited hearing during the upcoming weekly revenue Lok Adalat."},notifications:{title:"System Notifications",unread:"Unread",allCaughtUp:"All Caught Up",subtitle:"Application alerts, inference milestones, and statutory threshold notifications generated by Bhoomi Sakha.",markAllRead:"Mark All Read",resetDemoAlerts:"Reset Demo Alerts",filterAll:"All",filterUnread:"Unread",noNotifications:"No notifications to display",noNotificationsDesc:"There are currently no notifications under this filter.",newTag:"New",markAsUnread:"Mark as Unread",markAsRead:"Mark as Read",categories:{"Risk Alert":"Risk Alert",Engine:"Engine","Officer Attention":"Officer Attention",System:"System"},items:{"notif-crit-1":{title:"Critical delay risk detected in current assessment",summary:"Delhi-Amritsar Expressway (Pkg 4) evaluated with 84.6% delay probability requiring urgent Section 19 intervention.",actionLabel:"Inspect Assessment"},"notif-engine-2":{title:"Backend prediction engine connected",summary:"FastAPI service connected with 76 engineered cadastral features ready for live XGBoost inference.",actionLabel:"View Dashboard"},"notif-atten-3":{title:"Assessment contains factors requiring officer attention",summary:"18 high-bottleneck parcel cases in Western Freight Corridor flagged for documentation backlog review.",actionLabel:"Review Factors"},"notif-stat-4":{title:"Risk assessment pipeline initialized",summary:"National Cadastral Matrix synchronized with 142 monitored infrastructure corridors.",actionLabel:"Projects Directory"}}},common:{readAloud:"Read Aloud",pause:"Pause",resume:"Resume",stop:"Stop",speakToWrite:"Speak to Write",listening:"Listening...",close:"Close",copy:"Copy",print:"Print",prototypeOnly:"Prototype Draft",themeToggle:"Color Theme",languageToggle:"Language"}},oe={header:{platformName:"भूमि सखा",sihBadge:"SIH 2026 • PS ID 26017",subtitle:"पूर्वानुमानित भूमि अधिग्रहण विलंब-जोखिम प्रणाली",statusConnecting:"बैकएंड: कनेक्ट हो रहा है...",statusConnected:"फास्टएपीआई कनेक्टेड • एक्सजीबूस्ट इंजन सक्रिय",statusUnavailable:"बैकएंड अनुपलब्ध • पुनः प्रयास करने के लिए क्लिक करें",commandCenter:"कमांड सेंटर",statutoryCutoff:"सांविधिक समय-सीमा: 48 घंटे शेष",istClock:"IST",officerName:"डॉ. आर. के. शर्मा",officerRole:"आईएएस, भूमि आयुक्त",openNotifications:"अधिसूचनाएं खोलें",toggleTheme:"थीम बदलें",selectLanguage:"भाषा चुनें",toggleMenu:"नेविगेशन मेनू खोलें"},footer:{description:"स्मार्ट इंडिया हैकाथॉन 2026 • समस्या विवरण आईडी 26017 • राष्ट्रीय भूमि अभिलेख आधुनिकीकरण कार्यक्रम (NLRMP) संरचना",auditNode:"ऑडिट नोड: 0x88F2B7",protocol:"सटीक कैडस्ट्रल सत्यापन प्रोटोकॉल v4.1"},nav:{dashboard:"डैशबोर्ड",assessment:"जोखिम आकलन",projects:"परियोजना निर्देशिका",audit:"ऑडिट विवरण",notifications:"अधिसूचनाएं"},views:{dashboard:"राष्ट्रीय कैडस्ट्रल मैट्रिक्स (सिंहावलोकन)",assessment:"पूर्वानुमानित विलंब-जोखिम आकलन कॉकपिट",projects:"राष्ट्रीय भूमि अधिग्रहण परियोजना निर्देशिका",audit:"कैडस्ट्रल एवं जोखिम विस्तृत डोजियर",notifications:"प्रणाली अधिसूचनाएं एवं परिचालन अलर्ट"},dropdown:{project_type:{highway:"राष्ट्रीय राजमार्ग (Highway)",railway:"रेलवे / मालभाड़ा गलियारा (Railway)",industrial:"औद्योगिक नोड (Industrial)",metro:"मेट्रो रेल (Metro)",irrigation:"सिंचाई परियोजना (Irrigation)",power:"विद्युत ग्रिड / सौर पार्क (Power)",urban_development:"शहरी विकास (Urban Development)"},land_type:{agricultural:"कृषि भूमि (Agricultural)",commercial:"व्यावसायिक भूमि (Commercial)",industrial:"औद्योगिक भूमि (Industrial)",mixed:"मिश्रित राजस्व भूमि (Mixed)",residential:"आवासीय भूमि (Residential)"},priority:{normal:"सामान्य (Normal)",high:"उच्च (High)",critical:"अति-गंभीर (Critical)"}},risk:{low:"कम",medium:"मध्यम",high:"उच्च",critical:"अति-गंभीर",lowRisk:"कम जोखिम",mediumRisk:"मध्यम जोखिम",highRisk:"उच्च जोखिम",criticalRisk:"अति-गंभीर जोखिम",lowTier:"कम विलंब श्रेणी",mediumTier:"मध्यम जोखिम श्रेणी",highTier:"उच्च अवरोध श्रेणी",criticalTier:"अति-गंभीर स्थगन श्रेणी",lowWording:"वर्तमान परियोजना स्थिति के आधार पर कम विलंब जोखिम",mediumWording:"वर्तमान परियोजना स्थिति के आधार पर मध्यम विलंब जोखिम",highWording:"वर्तमान परियोजना स्थिति के आधार पर उच्च विलंब जोखिम",criticalWording:"वर्तमान परियोजना स्थिति के आधार पर अति-गंभीर विलंब जोखिम",lowSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर कम अनुमानित विलंब जोखिम।",mediumSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर मध्यम अनुमानित विलंब जोखिम।",highSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर उच्च अनुमानित विलंब जोखिम।",criticalSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर अति-गंभीर अनुमानित विलंब जोखिम।",lowThreshold:"जोखिम स्तर: कम (सीमा < 40%)",mediumThreshold:"जोखिम स्तर: मध्यम (सीमा: 40% – 59.9%)",highThreshold:"जोखिम स्तर: उच्च (सीमा: 60% – 79.9%)",criticalThreshold:"जोखिम स्तर: अति-गंभीर (सीमा ≥ 80%)",tier:"श्रेणी"},dashboard:{pipelineBadge:"राष्ट्रीय अवसंरचना पाइपलाइन • MoRTH / MoR एनालिटिक्स",title:"भूमि अधिग्रहण अभिसूचना",subtitle:"महत्वपूर्ण राष्ट्रीय अवसंरचना गलियारों में परियोजना प्रगति की निगरानी करें, उभरते विलंब जोखिमों की पहचान करें और त्वरित प्रशासनिक हस्तक्षेप को प्राथमिकता दें।",runScan:"राष्ट्रीय जोखिम स्कैन चलाएं",scanning:"142 राष्ट्रीय परियोजनाओं का स्कैन जारी है...",scanCompleted:"राष्ट्रीय स्कैन पूर्ण: 29 उच्च/अति-गंभीर जोखिमों की पहचान की गई।",launchCockpit:"आकलन कॉकपिट खोलें",totalProjects:"कुल मॉनिटर की जा रही परियोजनाएं",totalProjectsCount:"142 परियोजनाएं",totalProjectsDesc:"46 राष्ट्रीय राजमार्ग, 38 मालभाड़ा, 58 ऊर्जा एवं शहरी गलियारे",highCriticalRisk:"उच्च / अति-गंभीर जोखिम",highCriticalCount:"29 परियोजनाएं",highCriticalDesc:"पिछले चक्र से +3 • 18 उच्च, 11 अति-गंभीर",requiringIntervention:"हस्तक्षेप की आवश्यकता",interventionCount:"14 त्वरित कार्रवाइयां",interventionDesc:"8 दस्तावेज अवरोध, 6 मुआवजा एस्क्रो मामले",avgDelayRisk:"औसत विलंब जोखिम",modelConfidence:"मॉडल विश्वास स्तर 95%",lowMediumZone:"निम्न-मध्यम क्षेत्र",baselineVariance:"राज्य औसत की तुलना में आधारभूत विचलन -2.4%",riskOverview:"जोखिम अवलोकन एवं वितरण",portfolioBreakdown:"राष्ट्रीय पोर्टफोलियो वितरण (N=142)",liveModelActive:"लाइव मॉडल सक्रिय",actionPlanMandatory:"कार्य योजना अनिवार्य",stagnationWatchlist:"गतिरोध निगरानी सूची",statutoryTracking:"सांविधिक ट्रैकिंग जारी",nominalTrajectory:"सामान्य गति",keyRiskDrivers:"प्रमुख जोखिम कारक",rootCauseCluster:"मूल कारण समूह",driverDocumentation:"दस्तावेज बैकलॉग (स्वामित्व व धारा 3A)",driverPossession:"कब्जा विलंब (अतिक्रमण / भौतिक बाधाएं)",driverDisputes:"न्यायालय विवाद एवं स्थगनादेश",driverApprovals:"अंतर-विभागीय अनुमोदन अवरोध",predictiveTriangulationAlert:"पूर्वानुमानित त्रि-आयामी अलर्ट",triangulationAlertText:"सक्रिय तहसील सुनवाई के अभाव में कृषि-औद्योगिक गलियारों में 14 दिनों के भीतर धारा 15 आपत्तियों में 82% वृद्धि की संभावना है।",modelConfidenceTag:"मॉडल विश्वास: 91.4% (SIH मॉडल XG-26)",priorityProjects:"प्रशासनिक निगरानी की आवश्यकता वाली प्राथमिकता परियोजनाएं",cadastralEscalation:"विलंब संभावना के अनुसार क्रमबद्ध कैडस्ट्रल लेजर",searchPlaceholder:"परियोजना नाम या आईडी खोजें...",colId:"परियोजना आईडी",colName:"नाम एवं क्षेत्र",colDistrict:"जिला / राज्य",colProgress:"प्रगति",colRisk:"विलंब जोखिम",colTier:"श्रेणी",colAction:"कार्रवाई",assessBtn:"आकलन",auditBtn:"ऑडिट",noMatchingProjects:"कोई मेल खाती परियोजना नहीं मिली।"},assessment:{title:"परियोजना जोखिम का आकलन करें",engineBadge:"फास्टएपीआई • XGB-26017 इंजन",subtitle:"सांविधिक विलंब संभावना का अनुमान लगाने और POST /predict के माध्यम से मॉडल-आधारित जोखिम कारकों की जांच करने हेतु परियोजना टेलीमेट्री दर्ज या संपादित करें।",selectProject:"मौजूदा परियोजना चुनें",testScenario:"नया परिदृश्य बनाएं / परीक्षण करें",statutoryPresets:"सांविधिक परीक्षण प्रीसेट:",telemetryMatrices:"टेलीमेट्री इनपुट मैट्रिक्स",telemetrySubtitle:"धारा 11 और 19 वैधानिक दाखिलों के अनुसार कैडस्ट्रल विशेषताओं को कॉन्फ़िगर करें",resetValues:"मान रीसेट करें",sectionA:"खंड A • परियोजना रूपरेखा",coreClassification:"मूल वर्गीकरण",labelProjectType:"परियोजना प्रकार",labelLandType:"भूमि वर्गीकरण",labelPriority:"प्राथमिकता स्तर",labelComplexity:"जटिलता (0-100)",labelTotalParcels:"कुल खसरा / भूखंड",labelAffectedFamilies:"प्रभावित परिवार (PAFs)",labelLandArea:"भूमि क्षेत्र (हेक्टेयर)",labelPlannedDuration:"नियोजित अवधि (दिन)",sectionB:"खंड B • अधिग्रहण प्रगति",velocityActive:"गति सक्रिय",labelAcqProgress:"अधिग्रहण प्रगति (%)",labelVelocity:"गति (%/30 दिन)",labelParcelsPending:"लंबित भूखंड",labelPossessionPending:"कब्जा लंबित भूखंड",sectionC:"खंड C • दस्तावेजीकरण",keyModelDriver:"प्रमुख मॉडल कारक",labelDocsReq:"आवश्यक दस्तावेज",labelDocsPending:"लंबित दस्तावेज",labelDocCompletion:"दस्तावेज पूर्णता",sectionD:"खंड D • मुआवजा वितरण",escrowTranche:"एस्क्रो किस्त",labelCompCases:"लंबित मामले",labelCompAmount:"लंबित राशि (₹ करोड़)",labelCompDisbursed:"संवितरित %",sectionE:"खंड E • वैधानिक स्वीकृतियां",interAgencyGate:"अंतर-विभागीय स्वीकृति",labelApprPending:"लंबित स्वीकृतियां",labelApprOverdue:"समय-सीमा पार स्वीकृतियां",labelApprDelay:"औसत विलंब (दिन)",sectionF:"खंड F • कानूनी विवाद एवं आपत्तियां",section15Hearings:"धारा 15 सुनवाई",labelPendingObj:"लंबित आपत्तियां",labelActiveDisputes:"सक्रिय भूमि विवाद",labelOwnerDisputes:"स्वामित्व संघर्ष",labelCourtStays:"न्यायालय स्थगनादेश / रिट",sectionG:"खंड G • पुनर्वास एवं पुनर्स्थापन (R&R)",rfctlarrCompliance:"आरएफसीटीएलएआरआर अनुपालन",labelRrPending:"लंबित मामले",labelRrCompletion:"पूर्णता %",sectionH:"खंड H • समय-सारणी एवं विचलन",criticalPath:"महत्वपूर्ण मार्ग (Critical Path)",labelSchedVariance:"समय विचलन (दिन)",labelMilestonesOverdue:"अतिदेय मील के पत्थर",sectionI:"खंड I • हितधारक समन्वय",responseLatency:"प्रतिक्रिया विलंबता",labelShActions:"लंबित कार्रवाइयां",labelShResponse:"औसत प्रतिक्रिया (दिन)",labelShScore:"स्कोर /10",sectionJ:"खंड J • ऐतिहासिक विलंब संदर्भ",regionalPriors:"क्षेत्रीय पूर्ववृत्त",labelHistDelay:"औसत क्षेत्रीय विलंब (दिन)",trainingArchetype:"प्रशिक्षण मॉडल स्वरूप:",linearInfra:"रैखिक अवसंरचना (NLRMP)",targetWindow:"पूर्वानुमान लक्ष्य: सांविधिक 5-वर्षीय समय-सीमा",mandateValidation:"LARR अधिनियम 2013 धारा 25 अधिदेश सत्यापन • एक्सजीबूस्ट इंजन",resetBtn:"रीसेट",assessRiskBtn:"परियोजना जोखिम का आकलन करें",analyzingTelemetry:"परियोजना टेलीमेट्री का विश्लेषण जारी है...",callingApi:"FastAPI POST /predict एवं XGBoost ट्री विश्लेषण सक्रिय",riskIndex:"पूर्वानुमानित जोखिम सूचकांक",predictedDelayProb:"पूर्वानुमानित विलंब संभावना",modelNote:"30 लाख राष्ट्रीय अभिलेखों पर प्रशिक्षित XGBoost मॉडल (SIH 26017) द्वारा अनुमानित। लाइव अनुमान POST /predict द्वारा।",riskIncreasingFactors:"जोखिम बढ़ाने वाले कारक",modelContributionPos:"मॉडल योगदान (+Δ)",noRiskIncreasing:"इस परियोजना स्थिति के लिए कोई प्रमुख जोखिम कारक नहीं मिला।",action:"कार्रवाई:",riskReducingFactors:"जोखिम कम करने वाले सहायक कारक",modelContributionNeg:"मॉडल योगदान (-Δ)",noRiskReducing:"कोई महत्वपूर्ण जोखिम-शामक कारक नहीं पाया गया।",mathematicalNote:"नोट: मान एक्सजीबूस्ट मॉडल के भीतर गणितीय प्रभाव को दर्शाते हैं, सीधे कारण नहीं हैं।",recommendedDirectives:"अनुशंसित सांविधिक निर्देश",priorityExecution:"प्राथमिकता निष्पादन",p1Priority:"P1 प्राथमिकता",p2Priority:"P2 प्राथमिकता",resolution:"समाधान",nominalDirectives:"सांविधिक प्रगति सामान्य है। धारा 19 प्रोटोकॉल के तहत नियमित निगरानी जारी रखें।",methodology:"कार्यप्रणाली एवं मॉडल मूल्यांकन",methodologyText:"भूमि सखा अनुमान इंजन RFCTLARR अधिनियम 2013 एवं राष्ट्रीय मानदंडों के अनुरूप 76 निर्मित विशेषताओं पर बाइनरी वर्गीकरण करता है।",accuracy:"सटीकता (Accuracy)",rocAuc:"आरओसी-एयूसी (ROC-AUC)",precision:"परिशुद्धता (Precision)",recall:"रिकॉल (Recall)",trainingDataset:"प्रशिक्षण डेटासेट",projectsEvaluated:"मूल्यांकित परियोजनाएं",treeContribs:"ट्री योगदान",treeContribsDesc:"विशेषता भार प्रत्येक परियोजना स्नैपशॉट पर सटीक ग्रेडिएंट बूस्टिंग मार्जिन प्रभाव दर्शाते हैं।",riskThresholds:"जोखिम सीमाएं",inferenceUnavailable:"अनुमान सेवा अनुपलब्ध",retryAssessment:"पुनः प्रयास करें",readAloudIntro:"भूमि सखा मूल्यांकन परिणाम।"},projects:{title:"राष्ट्रीय परियोजना निर्देशिका",subtitle:"सभी राज्य क्षेत्राधिकारों में सक्रिय अवसंरचना गलियारों, कैडस्ट्रल सत्यापन चरणों और अनुमानित विलंब जोखिमों का अन्वेषण करें।",newAssessment:"नया परियोजना आकलन",filterSector:"क्षेत्र के अनुसार फ़िल्टर करें",allSectors:"सभी क्षेत्र (राजमार्ग, रेल, ऊर्जा, मेट्रो)",filterRisk:"जोखिम श्रेणी",allRisks:"सभी जोखिम श्रेणियां",searchPlaceholder:"नाम, आईडी या जिले द्वारा फ़िल्टर करें...",colId:"परियोजना आईडी",colName:"नाम एवं गलियारा",colDistrict:"राज्य एवं जिला",colStage:"सांविधिक चरण",colProgress:"अधिग्रहण प्रगति",colRisk:"पूर्वानुमानित विलंब जोखिम",colTier:"स्थिति श्रेणी",colAction:"कार्रवाइयां",assessRisk:"जोखिम आकलन",auditFile:"फाइल ऑडिट",noRecords:"राष्ट्रीय डेटाबेस में कोई मेल खाती प्रविष्टि नहीं मिली।"},detail:{breadcrumbProjects:"परियोजनाएं",detailedAnalysis:"विस्तृत जोखिम विश्लेषण",statutoryHash:"सांविधिक हैश",modelInference:"मॉडल अनुमान",liveSynchronized:"लाइव सिंक किया गया",nationalCorridor:"राष्ट्रीय गलियारा",authorityWing:"सड़क परिवहन एवं राजमार्ग मंत्रालय प्रभाग",stage:"चरण",district:"जिला",alignment:"संरेखण (Alignment)",cala:"सक्षम प्राधिकारी भूमि अधिग्रहण (CALA)",division:"मंडल / प्रभाग",rerunAssessment:"पुनः आकलन चलाएं",draftDcOrder:"डीसी प्रारूप आदेश (Draft)",riskTier:"जोखिम श्रेणी",engineXgb:"XGB-26017 इंजन",modelDelayProb:"मॉडल विलंब संभावना",probability:"संभावना",predictedStatutoryImpact:"पूर्वानुमानित सांविधिक प्रभाव",modelConfidence:"मॉडल विश्वास स्तर",trainedRecords:"30,00,000 अभिलेखों पर प्रशिक्षित",totalRequisition:"कुल भूमि अधियाचन",spreadVillages:"14 राजस्व गांवों में विस्तारित",affectedLandowners:"प्रभावित भू-स्वामी",khatas:"खाते",unresolvedMutations:"410 नामांतरण अनिस्तारित",sanctionedEscrow:"स्वीकृत एस्क्रो राशि",undisbursedEscrow:"₹29.60 करोड़ अवितरित",statutoryCutoffLabel:"धारा 19 सांविधिक कटऑफ समयसीमा:",slippageRisk:"+94 दिन विलंब जोखिम",bottleneckFlag:"स्वामित्व सत्यापन और नामांतरण शिविर निस्तारण में क्रिटिकल पाथ बाधा चिह्नित।",progressGaugesTitle:"बहु-क्षेत्रीय भू-अधिग्रहण प्रगति गेज",progressGaugesSubtitle:"राज्य ई-भूमि अभिलेख रजिस्ट्री के साथ समन्वित भू-अभिलेखीय मेट्रिक्स",cycleAudit:"चक्र लेखापरीक्षा: FY26-Q1-सक्रिय",overallProgress:"समग्र प्रगति",jointSurvey:"संयुक्त सर्वेक्षण 3A",sec23Award:"धारा 23 पंचाट",physicalRow:"भौतिक कब्जा (ROW)",dbtEscrow:"डीबीटी एस्क्रो",dossierFor:"परियोजना डोजियर:",state:"राज्य",statutoryStage:"वर्तमान सांविधिक चरण",modalPrototypeDraft:"प्रारूप आदेश (प्रोटोटाइप)",modalSimulationMode:"सिमुलेशन मोड • कानूनी रूप से बाध्यकारी नहीं",modalTitle:"प्रारूप डीसी आदेश / प्रशासनिक निर्देश",modalSubtitle:"वास्तविक समय परियोजना जोखिम टेलीमेट्री पर आधारित पूर्व-आबादी प्रोटोटाइप प्रशासनिक ज्ञापन।",modalOffice:"जिला कलेक्टर एवं जिला मजिस्ट्रेट कार्यालय",modalCala:"सक्षम प्राधिकारी भूमि अधिग्रहण (CALA)",modalRef:"संदर्भ",modalDate:"दिनांक",modalAreaFamilies:"क्षेत्रफल / परिवार",modalDisclaimer:"प्रोटोटाइप अस्वीकरण: यह प्रारूप ज्ञापन भूमि सखा प्रोटोटाइप के भीतर शासन मूल्यांकन के लिए तैयार किया गया है। यह RFCTLARR अधिनियम 2013 की वैधानिक प्रक्रियाओं का स्थान नहीं लेता और बिना आधिकारिक हस्ताक्षर के कोई कानूनी अधिकार नहीं रखता।",modalCopyDraft:"प्रारूप पाठ कॉपी करें",modalCopied:"क्लिपबोर्ड पर कॉपी किया गया!",modalPrint:"प्रिंट / सुरक्षित करें",modalClose:"बंद करें",modalMemoSub:"RFCTLARR ढांचे के तहत प्रशासनिक गतिवर्धन एवं पूर्व-निवारक निर्देश",modalTeleFindings:"1. टेलीमेट्री एवं पूर्वानुमानित ऑडिट निष्कर्ष:",modalTargetArea:"कुल लक्षित भूमि क्षेत्रफल",modalAffectedFam:"कुल प्रभावित परिवार",modalParcels:"कुल कैडस्ट्रल भूखंड",modalDirectives:"2. सक्षम प्राधिकारियों (CALA) को प्रशासनिक निर्देश:",modalDirectiveA:"क) संयुक्त स्थल निरीक्षण: विशेष भूमि अधिग्रहण अधिकारी (SLAO) और उप-विभागीय मजिस्ट्रेट (SDM) शेष लंबित भूखंडों के लिए तत्काल त्वरित संयुक्त स्थल निरीक्षण आरंभ करेंगे।",modalDirectiveB:"ख) डीबीटी एस्क्रो गतिवर्धन: महत्वपूर्ण मील के पत्थर के विलंब को रोकने के लिए प्रत्यक्ष लाभ अंतरण (DBT) सामंजस्य और मुआवजा पंचाट संवितरण 14 दिनों की सांविधिक समय-सीमा में त्वरित किया जाएगा।",modalDirectiveC:"ग) लोक अदालत सुलह: आगामी साप्ताहिक राजस्व लोक अदालत के दौरान त्वरित सुनवाई के लिए बकाया आपत्तियों और शीर्षक सत्यापन मुद्दों को सूचीबद्ध किया जाना अनिवार्य है।"},notifications:{title:"सिस्टम अधिसूचनाएं",unread:"अपठित",allCaughtUp:"सभी पढ़ी गईं",subtitle:"भूमि सखा द्वारा उत्पन्न एप्लिकेशन अलर्ट, अनुमान मील के पत्थर और सांविधिक सीमा अधिसूचनाएं।",markAllRead:"सभी को पढ़ा हुआ चिह्नित करें",resetDemoAlerts:"डेमो अलर्ट रीसेट करें",filterAll:"सभी",filterUnread:"अपठित",noNotifications:"प्रदर्शित करने के लिए कोई अधिसूचना नहीं है",noNotificationsDesc:"वर्तमान में इस फ़िल्टर के अंतर्गत कोई अधिसूचना उपलब्ध नहीं है।",newTag:"नया",markAsUnread:"अपठित के रूप में चिह्नित करें",markAsRead:"पठित के रूप में चिह्नित करें",categories:{"Risk Alert":"जोखिम अलर्ट",Engine:"इंजन","Officer Attention":"अधिकारी ध्यान",System:"प्रणाली"},items:{"notif-crit-1":{title:"वर्तमान आकलन में अति-गंभीर विलंब जोखिम पाया गया",summary:"दिल्ली-अमृतसर एक्सप्रेसवे (पैकेज 4) का 84.6% विलंब संभावना के साथ मूल्यांकन किया गया, जिसमें तत्काल धारा 19 हस्तक्षेप की आवश्यकता है।",actionLabel:"आकलन देखें"},"notif-engine-2":{title:"बैकएंड पूर्वानुमान इंजन कनेक्ट हुआ",summary:"लाइव एक्सजीबूस्ट अनुमान के लिए तैयार 76 कैडस्ट्रल विशेषताओं के साथ फास्टएपीआई सेवा कनेक्ट हुई।",actionLabel:"डैशबोर्ड देखें"},"notif-atten-3":{title:"आकलन में अधिकारी ध्यान देने योग्य कारक शामिल हैं",summary:"दस्तावेजीकरण बैकलॉग समीक्षा के लिए वेस्टर्न फ्रेट कॉरिडोर में 18 उच्च-अवरोधक भूखंड मामलों को चिह्नित किया गया।",actionLabel:"कारकों की समीक्षा करें"},"notif-stat-4":{title:"जोखिम आकलन पाइपलाइन प्रारंभ हुई",summary:"राष्ट्रीय कैडस्ट्रल मैट्रिक्स को 142 मॉनिटर किए गए अवसंरचना गलियारों के साथ समन्वयित किया गया।",actionLabel:"परियोजना निर्देशिका"}}},common:{readAloud:"बोलकर सुनाएं",pause:"रोकें",resume:"जारी रखें",stop:"समाप्त करें",speakToWrite:"बोलकर लिखें",listening:"सुन रहा है...",close:"बंद करें",copy:"कॉपी करें",print:"प्रिंट करें",prototypeOnly:"प्रोटोटाइप प्रारूप",themeToggle:"थीम चुनें",languageToggle:"भाषा"}},re={header:{platformName:"भूमी सखा",sihBadge:"SIH 2026 • PS ID 26017",subtitle:"भाकीत जमीन संपादन विलंब-जोखीम प्रणाली",statusConnecting:"बॅकएंड: जोडत आहे...",statusConnected:"फास्टएपीआय कनेक्टेड • एक्सजीबूस्ट इंजिन सक्रिय",statusUnavailable:"बॅकएंड अनुपलब्ध • पुन्हा प्रयत्न करण्यासाठी क्लिक करा",commandCenter:"कमांड सेंटर",statutoryCutoff:"वैधानिक मुदत: 48 तास शिल्लक",istClock:"IST",officerName:"डॉ. आर. के. शर्मा",officerRole:"आयएएस, भूमी आयुक्त",openNotifications:"सूचना उघडा",toggleTheme:"रंग थीम बदला",selectLanguage:"भाषा निवडा",toggleMenu:"नेव्हिगेशन मेनू उघडा"},footer:{description:"स्मार्ट इंडिया हॅकाथॉन 2026 • समस्या विधान आयडी 26017 • राष्ट्रीय भूमी अभिलेख आधुनिकीकरण कार्यक्रम (NLRMP) संरचना",auditNode:"ऑडिट नोड: 0x88F2B7",protocol:"अचूक कॅडस्ट्रल पडताळणी प्रोटोकॉल v4.1"},nav:{dashboard:"डॅशबोर्ड",assessment:"जोखीम मूल्यांकन",projects:"प्रकल्प निर्देशिका",audit:"ऑडिट तपशील",notifications:"सूचना"},views:{dashboard:"राष्ट्रीय कॅडस्ट्रल मॅट्रिक्स (सिंहावलोकन)",assessment:"अंदाजित विलंब-जोखीम मूल्यांकन कॉकपिट",projects:"राष्ट्रीय जमीन संपादन प्रकल्प निर्देशिका",audit:"कॅडस्ट्रल आणि जोखीम तपशीलवार डॉसियर",notifications:"प्रणाली सूचना आणि ऑपरेशनल अलर्ट"},dropdown:{project_type:{highway:"राष्ट्रीय महामार्ग (Highway)",railway:"रेल्वे / मालवाहतूक कॉरिडॉर (Railway)",industrial:"औद्योगिक नोड (Industrial)",metro:"मेट्रो रेल (Metro)",irrigation:"सिंचन प्रकल्प (Irrigation)",power:"ऊर्जा ग्रीड / सोलर पार्क (Power)",urban_development:"नागरी विकास (Urban Development)"},land_type:{agricultural:"शेतजमीन (Agricultural)",commercial:"व्यावसायिक जमीन (Commercial)",industrial:"औद्योगिक जमीन (Industrial)",mixed:"मिश्र महसूल जमीन (Mixed)",residential:"निवासी जमीन (Residential)"},priority:{normal:"सामान्य (Normal)",high:"उच्च (High)",critical:"अति-गंभीर (Critical)"}},risk:{low:"कमी",medium:"मध्यम",high:"उच्च",critical:"अति-गंभीर",lowRisk:"कमी जोखीम",mediumRisk:"मध्यम जोखीम",highRisk:"उच्च जोखीम",criticalRisk:"अति-गंभीर जोखीम",lowTier:"कमी विलंब श्रेणी",mediumTier:"मध्यम जोखीम श्रेणी",highTier:"उच्च अडथळा श्रेणी",criticalTier:"अति-गंभीर स्थगिती श्रेणी",lowWording:"सध्याच्या प्रकल्प स्थितीनुसार कमी विलंब जोखीम",mediumWording:"सध्याच्या प्रकल्प स्थितीनुसार मध्यम विलंब जोखीम",highWording:"सध्याच्या प्रकल्प स्थितीनुसार उच्च विलंब जोखीम",criticalWording:"सध्याच्या प्रकल्प स्थितीनुसार अति-गंभीर विलंब जोखीम",lowSummary:"सध्याच्या प्रकल्प स्नॅपशॉटवर आधारित कमी अंदाजित विलंब जोखीम.",mediumSummary:"सध्याच्या प्रकल्प स्नॅपशॉटवर आधारित मध्यम अंदाजित विलंब जोखीम.",highSummary:"सध्याच्या प्रकल्प स्नॅपशॉटवर आधारित उच्च अंदाजित विलंब जोखीम.",criticalSummary:"सध्याच्या प्रकल्प स्नॅपशॉटवर आधारित अति-गंभीर अंदाजित विलंब जोखीम.",lowThreshold:"जोखीम स्तर: कमी (मर्यादा < 40%)",mediumThreshold:"जोखीम स्तर: मध्यम (मर्यादा: 40% – 59.9%)",highThreshold:"जोखीम स्तर: उच्च (मर्यादा: 60% – 79.9%)",criticalThreshold:"जोखीम स्तर: अति-गंभीर (मर्यादा ≥ 80%)",tier:"श्रेणी"},dashboard:{pipelineBadge:"राष्ट्रीय पायाभूत सुविधा पाइपलाइन • MoRTH / MoR ॲनालिटिक्स",title:"जमीन संपादन गुप्तचर प्रणाली",subtitle:"महत्त्वाच्या राष्ट्रीय पायाभूत सुविधा कॉरिडॉरमध्ये प्रकल्पाच्या प्रगतीचे निरीक्षण करा, संभाव्य विलंब जोखमी ओळखा आणि प्रशासकीय हस्तक्षेपाला प्राधान्य द्या.",runScan:"राष्ट्रीय जोखीम स्कॅन चालवा",scanning:"142 राष्ट्रीय प्रकल्पांचे स्कॅनिंग सुरू आहे...",scanCompleted:"राष्ट्रीय स्कॅन पूर्ण: 29 उच्च/अति-गंभीर जोखीम प्रकल्प आढळले.",launchCockpit:"मूल्यांकन कॉकपिट सुरू करा",totalProjects:"एकूण निरीक्षण केलेले प्रकल्प",totalProjectsCount:"142 प्रकल्प",totalProjectsDesc:"46 राष्ट्रीय महामार्ग, 38 मालवाहतूक, 58 ऊर्जा आणि नागरी कॉरिडॉर",highCriticalRisk:"उच्च / अति-गंभीर जोखीम",highCriticalCount:"29 प्रकल्प",highCriticalDesc:"मागील कालावधीपेक्षा +3 • 18 उच्च, 11 अति-गंभीर",requiringIntervention:"हस्तक्षेपाची आवश्यकता",interventionCount:"14 त्वरित कृती",interventionDesc:"8 दस्तऐवज अडथळे, 6 भरपाई एस्क्रो प्रकरणे",avgDelayRisk:"सरासरी विलंब जोखीम",modelConfidence:"मॉडेल विश्वास पातळी 95%",lowMediumZone:"कमी-मध्यम क्षेत्र",baselineVariance:"राज्य सरासरीच्या तुलनेत मूळ विचलन -2.4%",riskOverview:"जोखीम विहंगावलोकन आणि वितरण",portfolioBreakdown:"राष्ट्रीय पोर्टफोलिओ वितरण (N=142)",liveModelActive:"लाइव्ह मॉडेल सक्रिय",actionPlanMandatory:"कृती योजना अनिवार्य",stagnationWatchlist:"स्थगिती वॉचलिस्ट",statutoryTracking:"वैधानिक ट्रॅकिंग",nominalTrajectory:"सामान्य गती",keyRiskDrivers:"प्रमुख जोखीम घटक",rootCauseCluster:"मूळ कारण समूह",driverDocumentation:"दस्तऐवजीकरण अनुशेष (मालकी हक्क आणि 3A)",driverPossession:"ताबा विलंब (अतिक्रमण / भौतिक अडथळे)",driverDisputes:"न्यायालयीन विवाद आणि स्थगिती आदेश",driverApprovals:"आंतर-विभागीय मंजुरी अडथळे",predictiveTriangulationAlert:"अंदाजित ट्रायंग्युलेशन इशारा",triangulationAlertText:"सक्रिय तहसीलदार सुनावणीशिवाय औद्योगिक कृषी-क्षेत्रांमधून जाणाऱ्या कॉरिडॉरमध्ये 14 दिवसांत कलम 15 आक्षेपांची 82% शक्यता आहे.",modelConfidenceTag:"मॉडेल विश्वास पातळी: 91.4% (SIH मॉडेल XG-26)",priorityProjects:"प्रशासकीय देखरेखीची आवश्यकता असलेले प्राधान्य प्रकल्प",cadastralEscalation:"विलंब संभाव्यतेनुसार क्रमवारी लावलेली कॅडस्ट्रल नोंदवही",searchPlaceholder:"प्रकल्पाचे नाव किंवा आयडी शोधा...",colId:"प्रकल्प आयडी",colName:"नाव आणि क्षेत्र",colDistrict:"जिल्हा / राज्य",colProgress:"प्रगती",colRisk:"विलंब जोखीम",colTier:"श्रेणी",colAction:"कृती",assessBtn:"मूल्यांकन",auditBtn:"ऑडिट",noMatchingProjects:"कोणताही जुळणारा प्रकल्प आढळला नाही."},assessment:{title:"प्रकल्प जोखमीचे मूल्यांकन करा",engineBadge:"फास्टएपीआय • XGB-26017 इंजिन",subtitle:"वैधानिक विलंब संभाव्यतेचा अंदाज घेण्यासाठी आणि POST /predict द्वारे मॉडेल-आधारित जोखीम घटकांची तपासणी करण्यासाठी प्रकल्प टेलिमेट्री प्रविष्ट किंवा संपादित करा.",selectProject:"विद्यमान प्रकल्प निवडा",testScenario:"नवीन परिस्थिती तयार करा / तपासा",statutoryPresets:"वैधानिक चाचणी प्रीसेट्स:",telemetryMatrices:"टेलिमेट्री इनपुट मॅट्रिक्स",telemetrySubtitle:"कलम 11 आणि 19 वैधानिक नोंदींनुसार कॅडस्ट्रल वैशिष्ट्ये कॉन्फिगर करा",resetValues:"मूल्ये रीसेट करा",sectionA:"विभाग A • प्रकल्प प्रोफाइल",coreClassification:"मूळ वर्गीकरण",labelProjectType:"प्रकल्प प्रकार",labelLandType:"जमीन वर्गीकरण",labelPriority:"प्राधान्य स्तर",labelComplexity:"गुंतागुंत (0-100)",labelTotalParcels:"एकूण भूखंड / गट",labelAffectedFamilies:"बाधित कुटुंबे (PAFs)",labelLandArea:"जमिनीचे क्षेत्रफळ (हेक्टर)",labelPlannedDuration:"नियोजित कालावधी (दिवस)",sectionB:"विभाग B • संपादन प्रगती",velocityActive:"वेग सक्रिय",labelAcqProgress:"संपादन प्रगती (%)",labelVelocity:"वेग (%/30 दिवस)",labelParcelsPending:"प्रलंबित भूखंड",labelPossessionPending:"ताबा प्रलंबित भूखंड",sectionC:"विभाग C • दस्तऐवजीकरण",keyModelDriver:"प्रमुख मॉडेल चालक",labelDocsReq:"आवश्यक दस्तऐवज",labelDocsPending:"प्रलंबित दस्तऐवज",labelDocCompletion:"दस्तऐवजीकरण पूर्णता",sectionD:"विभाग D • नुकसानभरपाई वाटप",escrowTranche:"एस्क्रो हप्ता",labelCompCases:"प्रलंबित प्रकरणे",labelCompAmount:"प्रलंबित रक्कम (₹ कोटी)",labelCompDisbursed:"वितरित %",sectionE:"विभाग E • वैधानिक परवानग्या",interAgencyGate:"आंतर-विभागीय परवानगी",labelApprPending:"प्रलंबित मंजुऱ्या",labelApprOverdue:"मुदत उलटलेल्या मंजुऱ्या",labelApprDelay:"सरासरी विलंब (दिवस)",sectionF:"विभाग F • न्यायालयीन विवाद आणि आक्षेप",section15Hearings:"कलम 15 सुनावणी",labelPendingObj:"प्रलंबित आक्षेप",labelActiveDisputes:"सक्रिय जमीन विवाद",labelOwnerDisputes:"मालकी हक्क वाद",labelCourtStays:"न्यायालयीन स्थगिती आदेश",sectionG:"विभाग G • पुनर्वसन आणि पुनर्स्थापना (R&R)",rfctlarrCompliance:"RFCTLARR अनुपालन",labelRrPending:"प्रलंबित प्रकरणे",labelRrCompletion:"पूर्णता %",sectionH:"विभाग H • वेळापत्रक आणि फरक",criticalPath:"महत्त्वाचा मार्ग (Critical Path)",labelSchedVariance:"वेळेतील फरक (दिवस)",labelMilestonesOverdue:"थकबाकी टप्पे",sectionI:"विभाग I • भागधारक समन्वय",responseLatency:"प्रतिसाद विलंब",labelShActions:"प्रलंबित कृती",labelShResponse:"सरासरी प्रतिसाद (दिवस)",labelShScore:"गुण /10",sectionJ:"विभाग J • ऐतिहासिक विलंब संदर्भ",regionalPriors:"प्रादेशिक पूर्वइतिहास",labelHistDelay:"सरासरी प्रादेशिक विलंब (दिवस)",trainingArchetype:"प्रशिक्षण मॉडेल रचना:",linearInfra:"रेषीय पायाभूत सुविधा (NLRMP)",targetWindow:"अंदाज लक्ष्य: वैधानिक 5-वर्षीय कालावधी",mandateValidation:"LARR कायदा 2013 कलम 25 कायदेशीर वैधता • XGBoost इंजिन",resetBtn:"रीसेट करा",assessRiskBtn:"प्रकल्प जोखमीचे मूल्यांकन करा",analyzingTelemetry:"प्रकल्प टेलिमेट्रीचे विश्लेषण सुरू आहे...",callingApi:"FastAPI POST /predict आणि XGBoost ट्री विश्लेषण सुरू आहे",riskIndex:"अंदाजित जोखीम निर्देशांक",predictedDelayProb:"अंदाजित विलंब संभाव्यता",modelNote:"30 लाख राष्ट्रीय नोंदींवर प्रशिक्षित XGBoost मॉडेल (SIH 26017) द्वारे वर्तवलेले. थेट अंदाज POST /predict द्वारे.",riskIncreasingFactors:"जोखीम वाढवणारे घटक",modelContributionPos:"मॉडेल योगदान (+Δ)",noRiskIncreasing:"या प्रकल्पासाठी कोणतेही प्रमुख जोखीम वाढवणारे घटक आढळले नाहीत.",action:"कृती:",riskReducingFactors:"जोखीम कमी करणारे घटक",modelContributionNeg:"मॉडेल योगदान (-Δ)",noRiskReducing:"कोणतेही महत्त्वपूर्ण जोखीम कमी करणारे घटक आढळले नाहीत.",mathematicalNote:"टीप: मूल्ये XGBoost मॉडेलमधील गणितीय प्रभाव दर्शवतात, प्रत्यक्ष कारणे नव्हेत.",recommendedDirectives:"शिफारस केलेले वैधानिक निर्देश",priorityExecution:"प्राधान्य अंमलबजावणी",p1Priority:"P1 प्राधान्य",p2Priority:"P2 प्राधान्य",resolution:"निराकरण",nominalDirectives:"वैधानिक प्रगती सामान्य आहे. कलम 19 नियमांनुसार नियमित देखरेख सुरू ठेवा.",methodology:"कार्यपद्धती आणि मॉडेल मूल्यमापन",methodologyText:"भूमी सखा अंदाज इंजिन RFCTLARR कायदा 2013 आणि राष्ट्रीय नियमांनुसार 76 वैशिष्ट्यांवर बायनरी वर्गीकरण करते.",accuracy:"अचूकता (Accuracy)",rocAuc:"ROC-AUC",precision:"परिशुद्धता (Precision)",recall:"रिकॉल (Recall)",trainingDataset:"प्रशिक्षण डेटासेट",projectsEvaluated:"मूल्यांकन केलेले प्रकल्प",treeContribs:"ट्री योगदान",treeContribsDesc:"वैशिष्ट्य भार प्रत्येक प्रकल्पाच्या स्नॅपशॉटवर अचूक ग्रेडियंट बूस्टिंग मार्जिन प्रभाव दर्शवतात.",riskThresholds:"जोखीम मर्यादा",inferenceUnavailable:"अंदाज सेवा अनुपलब्ध",retryAssessment:"पुन्हा प्रयत्न करा",readAloudIntro:"भूमी सखा मूल्यांकन निकाल."},projects:{title:"राष्ट्रीय प्रकल्प निर्देशिका",subtitle:"सर्व राज्य कार्यक्षेत्रांमध्ये सक्रिय पायाभूत सुविधा कॉरिडॉर, कॅडस्ट्रल पडताळणी टप्पे आणि अंदाजित विलंब जोखमींचा आढावा घ्या.",newAssessment:"नवीन प्रकल्प मूल्यांकन",filterSector:"क्षेत्रानुसार फिल्टर करा",allSectors:"सर्व क्षेत्रे (महामार्ग, रेल्वे, ऊर्जा, मेट्रो)",filterRisk:"जोखीम श्रेणी",allRisks:"सर्व जोखीम श्रेणी",searchPlaceholder:"नाव, आयडी किंवा जिल्ह्यानुसार शोधा...",colId:"प्रकल्प आयडी",colName:"नाव आणि कॉरिडॉर",colDistrict:"राज्य आणि जिल्हा",colStage:"वैधानिक टप्पा",colProgress:"संपादन प्रगती",colRisk:"अंदाजित विलंब जोखीम",colTier:"स्थिती श्रेणी",colAction:"कृती",assessRisk:"जोखीम मूल्यांकन",auditFile:"फाइल ऑडिट",noRecords:"राष्ट्रीय डेटाबेसमध्ये कोणतीही जुळणारी नोंद आढळली नाही."},detail:{breadcrumbProjects:"प्रकल्प",detailedAnalysis:"तपशीलवार जोखीम विश्लेषण",statutoryHash:"वैधानिक हॅश",modelInference:"मॉडेल अंदाज",liveSynchronized:"थेट समक्रमित",nationalCorridor:"राष्ट्रीय कॉरिडॉर",authorityWing:"रस्ते वाहतूक आणि महामार्ग मंत्रालय विभाग",stage:"टप्पा",district:"जिल्हा",alignment:"संरेखन (Alignment)",cala:"सक्षम अधिकारी जमीन संपादन (CALA)",division:"विभाग",rerunAssessment:"पुन्हा मूल्यांकन करा",draftDcOrder:"प्रारूप डीसी आदेश (Draft)",riskTier:"जोखीम श्रेणी",engineXgb:"XGB-26017 इंजिन",modelDelayProb:"मॉडेल विलंब संभाव्यता",probability:"संभाव्यता",predictedStatutoryImpact:"अंदाजित वैधानिक प्रभाव",modelConfidence:"मॉडेल विश्वास पातळी",trainedRecords:"30,00,000 नोंदींवर प्रशिक्षित",totalRequisition:"एकूण जमीन मागणी",spreadVillages:"14 महसूल गावांमध्ये पसरलेले",affectedLandowners:"बाधित जमीन मालक",khatas:"खाती",unresolvedMutations:"410 फेरफार प्रलंबित",sanctionedEscrow:"मंजूर एस्क्रो निधी",undisbursedEscrow:"₹29.60 कोटी अवितरित",statutoryCutoffLabel:"कलम 19 वैधानिक कटऑफ मुदत:",slippageRisk:"+94 दिवस विलंब जोखीम",bottleneckFlag:"मालकी हक्क पडताळणी आणि फेरफार शिबिर मंजुरीमध्ये मुख्य अडथळा चिन्हांकित.",progressGaugesTitle:"बहु-क्षेत्रीय जमीन संपादन प्रगती निर्देशक",progressGaugesSubtitle:"राज्य ई-भूमी नोंदणीशी जुळवून घेतलेले भू-अभिलेख मेट्रिक्स",cycleAudit:"चक्र लेखापरीक्षण: FY26-Q1-सक्रिय",overallProgress:"एकूण प्रगती",jointSurvey:"संयुक्त पाहणी 3A",sec23Award:"कलम 23 निवाडा",physicalRow:"प्रत्यक्ष ताबा (ROW)",dbtEscrow:"डीबीटी एस्क्रो",dossierFor:"प्रकल्प डॉसियर:",state:"राज्य",statutoryStage:"सध्याचा वैधानिक टप्पा",modalPrototypeDraft:"प्रारूप आदेश (प्रोटोटाइप)",modalSimulationMode:"सिम्युलेशन मोड • कायदेशीरदृष्ट्या बंधनकारक नाही",modalTitle:"प्रारूप डीसी आदेश / प्रशासकीय निर्देश",modalSubtitle:"रिअल-टाइम प्रकल्प जोखीम टेलिमेट्रीवर आधारित पूर्व-तयार प्रोटोटाइप प्रशासकीय ज्ञापन.",modalOffice:"जिल्हाधिकारी व जिल्हा दंडाधिकारी कार्यालय",modalCala:"सक्षम अधिकारी जमीन संपादन (CALA)",modalRef:"संदर्भ",modalDate:"तारीख",modalAreaFamilies:"क्षेत्रफळ / कुटुंबे",modalDisclaimer:"प्रोटोटाइप अस्वीकरण: हे मसुदा ज्ञापन भूमी सखा प्रोटोटाइपमध्ये प्रशासकीय मूल्यमापनासाठी तयार केले गेले आहे. हे RFCTLARR कायदा 2013 च्या वैधानिक प्रक्रियेची जागा घेत नाही आणि अधिकृत स्वाक्षरीशिवाय त्याला कोणताही कायदेशीर अधिकार नाही.",modalCopyDraft:"मसुदा कॉपी करा",modalCopied:"क्लिपबोर्डवर कॉपी केले!",modalPrint:"प्रिंट / सेव्ह करा",modalClose:"बंद करा",modalMemoSub:"RFCTLARR चौकटीअंतर्गत प्रशासकीय गती वाढवणे आणि पूर्व-प्रतिबंधात्मक निर्देश",modalTeleFindings:"1. टेलिमेट्री आणि अंदाजित ऑडिट निष्कर्ष:",modalTargetArea:"एकूण लक्ष्यित जमीन क्षेत्र",modalAffectedFam:"एकूण बाधित कुटुंबे",modalParcels:"एकूण कॅडस्ट्रल भूखंड",modalDirectives:"2. सक्षम अधिकाऱ्यांना (CALA) प्रशासकीय निर्देश:",modalDirectiveA:"अ) संयुक्त स्थळ पाहणी: विशेष भूसंपादन अधिकारी (SLAO) आणि उपविभागीय दंडाधिकारी (SDM) उर्वरित प्रलंबित भूखंडांसाठी तात्काळ संयुक्त स्थळ पाहणी सुरू करतील.",modalDirectiveB:"ब) डीबीटी एस्क्रो गती: महत्त्वाच्या टप्प्यांमधील विलंब टाळण्यासाठी थेट लाभ हस्तांतरण (DBT) आणि नुकसानभरपाई वाटप 14 दिवसांच्या वैधानिक मुदतीत जलद केले जाईल.",modalDirectiveC:"क) लोकअदालत तडजोड: आगामी साप्ताहिक महसूल लोकअदालतीत जलद सुनावणीसाठी प्रलंबित आक्षेप आणि मालकी हक्क पडताळणीचे मुद्दे सूचीबद्ध केले पाहिजेत."},notifications:{title:"प्रणाली सूचना",unread:"न वाचलेल्या",allCaughtUp:"सर्व वाचल्या",subtitle:"भूमी सखा द्वारे निर्माण केलेले ॲप्लिकेशन अलर्ट, अंदाज टप्पे आणि वैधानिक मर्यादा सूचना.",markAllRead:"सर्व वाचल्याचे चिन्हांकित करा",resetDemoAlerts:"डेमो अलर्ट रीसेट करा",filterAll:"सर्व",filterUnread:"न वाचलेल्या",noNotifications:"दाखवण्यासाठी कोणत्याही सूचना नाहीत",noNotificationsDesc:"सध्या या फिल्टर अंतर्गत कोणत्याही सूचना उपलब्ध नाहीत.",newTag:"नवीन",markAsUnread:"न वाचलेले म्हणून चिन्हांकित करा",markAsRead:"वाचलेले म्हणून चिन्हांकित करा",categories:{"Risk Alert":"जोखीम इशारा",Engine:"इंजिन","Officer Attention":"अधिकारी लक्ष",System:"प्रणाली"},items:{"notif-crit-1":{title:"सध्याच्या मूल्यांकनात अति-गंभीर विलंब जोखीम आढळली",summary:"दिल्ली-अमृतसर एक्सप्रेसवे (पॅकेज 4) चे 84.6% विलंब संभाव्यतेसह मूल्यांकन केले गेले असून तातडीने कलम 19 हस्तक्षेपाची आवश्यकता आहे.",actionLabel:"मूल्यांकन पहा"},"notif-engine-2":{title:"बॅकएंड अंदाज इंजिन जोडले गेले",summary:"थेट XGBoost अंदाजासाठी तयार असलेल्या 76 कॅडस्ट्रल वैशिष्ट्यांसह FastAPI सेवा जोडली गेली.",actionLabel:"डॅशबोर्ड पहा"},"notif-atten-3":{title:"मूल्यांकनात अधिकाऱ्यांचे लक्ष आवश्यक असलेले घटक आहेत",summary:"दस्तऐवजीकरण अनुशेष पुनरावलोकनासाठी वेस्टर्न फ्रेट कॉरिडॉरमधील 18 उच्च-अडथळा भूखंड प्रकरणे चिन्हांकित केली गेली.",actionLabel:"घटकांचे पुनरावलोकन करा"},"notif-stat-4":{title:"जोखीम मूल्यांकन पाइपलाइन सुरू झाली",summary:"राष्ट्रीय कॅडस्ट्रल मॅट्रिक्स 142 निरीक्षण केलेल्या पायाभूत सुविधा कॉरिडॉरसह समक्रमित केले गेले.",actionLabel:"प्रकल्प निर्देशिका"}}},common:{readAloud:"वाचून दाखवा",pause:"थांबवा",resume:"पुढे सुरू ठेवा",stop:"थांबवा",speakToWrite:"बोलून लिहा",listening:"ऐकत आहे...",close:"बंद करा",copy:"कॉपी करा",print:"प्रिंट करा",prototypeOnly:"प्रोटोटाइप मसुदा",themeToggle:"थीम निवडा",languageToggle:"भाषा"}},X="bhoomi_language",j={en:{code:"en",label:"English",nativeLabel:"English"},hi:{code:"hi",label:"Hindi",nativeLabel:"हिंदी"},mr:{code:"mr",label:"Marathi",nativeLabel:"मराठी"}},z={en:ie,hi:oe,mr:re};class le{constructor(){this.currentLanguage=this.getStoredLanguage(),this.listeners=[],typeof document<"u"&&document.documentElement&&document.documentElement.setAttribute("lang",this.currentLanguage)}getStoredLanguage(){try{const t=localStorage.getItem(X);if(t&&j[t])return t}catch{}return"en"}setLanguage(t){if(j[t]){this.currentLanguage=t;try{typeof localStorage<"u"&&localStorage.setItem(X,t)}catch(s){console.warn("Could not persist language to localStorage:",s)}typeof document<"u"&&document.documentElement&&document.documentElement.setAttribute("lang",t),this.notifyListeners()}}getLanguage(){return this.currentLanguage}getLanguageMeta(){return j[this.currentLanguage]||j.en}t(t,s=""){const n=t.split(".");let i=z[this.currentLanguage],r=!0;for(const d of n)if(i&&i[d]!==void 0)i=i[d];else{r=!1;break}if(r&&typeof i=="string")return i;let o=z.en,l=!0;for(const d of n)if(o&&o[d]!==void 0)o=o[d];else{l=!1;break}return l&&typeof o=="string"?o:s||t}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(s=>s!==t)}}notifyListeners(){this.listeners.forEach(t=>t(this.currentLanguage))}}const w=new le,e=(a,t)=>w.t(a,t);function de(a){return typeof a!="number"||isNaN(a)?0:a>1?a/100:Math.max(0,a)}function _(a){const t=de(a);return t>=.8?"CRITICAL":t>=.6?"HIGH":t>=.4?"MEDIUM":"LOW"}function te(a){switch(typeof a=="string"?a.toUpperCase():_(a)){case"CRITICAL":return e("risk.criticalWording","Critical predicted delay risk");case"HIGH":return e("risk.highWording","High predicted delay risk");case"MEDIUM":return e("risk.mediumWording","Moderate predicted delay risk");case"LOW":default:return e("risk.lowWording","Low predicted delay risk")}}function B(a){switch(typeof a=="string"?a.toUpperCase():_(a)){case"CRITICAL":return e("risk.criticalSummary","Critical predicted delay risk based on the current project snapshot.");case"HIGH":return e("risk.highSummary","High predicted delay risk based on the current project snapshot.");case"MEDIUM":return e("risk.mediumSummary","Moderate predicted delay risk based on the current project snapshot.");case"LOW":default:return e("risk.lowSummary","Low predicted delay risk based on the current project snapshot.")}}function ae(a){switch(typeof a=="string"?a.toUpperCase():_(a)){case"CRITICAL":return e("risk.criticalThreshold","Risk Level: CRITICAL (Threshold ≥ 80%)");case"HIGH":return e("risk.highThreshold","Risk Level: HIGH (Threshold: 60% – 79.9%)");case"MEDIUM":return e("risk.mediumThreshold","Risk Level: MEDIUM (Threshold: 40% – 59.9%)");case"LOW":default:return e("risk.lowThreshold","Risk Level: LOW (Threshold < 40%)")}}function k(a){switch(typeof a=="string"?a.toUpperCase():_(a)){case"CRITICAL":return e("risk.critical","CRITICAL");case"HIGH":return e("risk.high","HIGH");case"MEDIUM":return e("risk.medium","MEDIUM");case"LOW":default:return e("risk.low","LOW")}}function F(a){switch(typeof a=="string"?a.toUpperCase():_(a)){case"CRITICAL":return"bg-red-100 text-red-900 border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800";case"HIGH":return"bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800";case"MEDIUM":return"bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800";case"LOW":default:return"bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800"}}function M(a){switch(typeof a=="string"?a.toUpperCase():_(a)){case"CRITICAL":return"text-red-600 dark:text-red-400";case"HIGH":return"text-orange-600 dark:text-orange-400";case"MEDIUM":return"text-amber-600 dark:text-amber-400";case"LOW":default:return"text-emerald-600 dark:text-emerald-400"}}function ce(a){switch(typeof a=="string"?a.toUpperCase():_(a)){case"CRITICAL":return"text-red-600 dark:text-red-500";case"HIGH":return"text-orange-500 dark:text-orange-400";case"MEDIUM":return"text-amber-500 dark:text-amber-400";case"LOW":default:return"text-emerald-500 dark:text-emerald-400"}}class ue{constructor(){this.supported=typeof window<"u"&&"speechSynthesis"in window,this.voices=[],this.currentUtterance=null,this.state="idle",this.activeListener=null,this.supported&&(this.loadVoices(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=()=>this.loadVoices()))}loadVoices(){this.supported&&(this.voices=window.speechSynthesis.getVoices())}getBestVoice(t=null){(!this.voices||this.voices.length===0)&&this.loadVoices();const s=(t||w.getLanguage()).toLowerCase(),i={en:["en-IN","en-GB","en-US","en"],hi:["hi-IN","hi"],mr:["mr-IN","mr","hi-IN"]}[s]||[s];for(const r of i){const o=this.voices.find(l=>{const d=l.lang.toLowerCase().replace("_","-");return d===r.toLowerCase()||d.startsWith(r.toLowerCase())});if(o)return o}return this.voices[0]||null}speak(t,s=null,n=null){if(!this.supported)return console.warn("Speech synthesis is not supported in this browser environment."),!1;if(!t||typeof t!="string")return!1;this.stop();const i=s||w.getLanguage();this.activeListener=n;const r=new SpeechSynthesisUtterance(t),o=this.getBestVoice(i),l={en:"en-IN",hi:"hi-IN",mr:"mr-IN"};return r.lang=(o==null?void 0:o.lang)||l[i]||"en-IN",o&&(r.voice=o),r.rate=.95,r.pitch=1,r.onstart=()=>{this.state="speaking",this.activeListener&&this.activeListener("speaking")},r.onpause=()=>{this.state="paused",this.activeListener&&this.activeListener("paused")},r.onresume=()=>{this.state="speaking",this.activeListener&&this.activeListener("speaking")},r.onend=()=>{this.state="idle",this.currentUtterance=null,this.activeListener&&this.activeListener("idle")},r.onerror=d=>{console.warn("SpeechSynthesis error:",d),this.state="idle",this.currentUtterance=null,this.activeListener&&this.activeListener("idle")},this.currentUtterance=r,window.speechSynthesis.speak(r),!0}pause(){this.supported&&this.state==="speaking"&&(window.speechSynthesis.pause(),this.state="paused",this.activeListener&&this.activeListener("paused"))}resume(){this.supported&&this.state==="paused"&&(window.speechSynthesis.resume(),this.state="speaking",this.activeListener&&this.activeListener("speaking"))}stop(){this.supported&&(window.speechSynthesis.cancel(),this.state="idle",this.currentUtterance=null,this.activeListener&&this.activeListener("idle"))}toggle(t,s=null,n=null){this.state==="speaking"?this.pause():this.state==="paused"?this.resume():this.speak(t,s,n)}}const T=new ue;function K(a,t){const s=document.createElement("div");s.className="inline-flex items-center gap-1";const n=document.createElement("button");n.type="button",n.className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-xs font-semibold flex items-center gap-1 transition-all border border-outline-variant/30 shadow-sm",n.setAttribute("aria-label",e("tts.read_aria","Read assessment aloud")),n.title=e("tts.read_aloud","Read aloud"),n.innerHTML=`
    <span class="material-symbols-outlined text-[16px] text-secondary">volume_up</span>
    <span class="btn-label">${e("tts.read","Read")}</span>
  `;const i=document.createElement("button");i.type="button",i.className="hidden p-1 rounded bg-surface-container hover:bg-error/10 text-error font-label-sm text-xs transition-all border border-outline-variant/30",i.setAttribute("aria-label",e("tts.stop_aria","Stop reading aloud")),i.title=e("tts.stop_reading","Stop reading"),i.innerHTML='<span class="material-symbols-outlined text-[16px]">stop</span>',n.addEventListener("click",o=>{o.stopPropagation();const l=typeof a=="function"?a():a,d=typeof t=="function"?t():t||w.getLanguage();T.state==="speaking"?T.pause():T.state==="paused"?T.resume():T.speak(l,d,m=>{r(m)})}),i.addEventListener("click",o=>{o.stopPropagation(),T.stop(),r("idle")});function r(o){const l=n.querySelector(".btn-label"),d=n.querySelector(".material-symbols-outlined");o==="speaking"?(l&&(l.textContent=e("tts.pause","Pause")),d&&(d.textContent="pause"),n.classList.add("bg-secondary-fixed/40","ring-1","ring-secondary"),i.classList.remove("hidden")):o==="paused"?(l&&(l.textContent=e("tts.resume","Resume")),d&&(d.textContent="play_arrow"),n.classList.remove("bg-secondary-fixed/40","ring-1","ring-secondary"),i.classList.remove("hidden")):(l&&(l.textContent=e("tts.read","Read")),d&&(d.textContent="volume_up"),n.classList.remove("bg-secondary-fixed/40","ring-1","ring-secondary"),i.classList.add("hidden"))}return s.appendChild(n),s.appendChild(i),s}class pe{constructor(){const t=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;this.supported=!!t,this.recognition=t?new t:null,this.isListening=!1,this.activeCallbacks=null,this.recognition&&(this.recognition.continuous=!1,this.recognition.interimResults=!1,this.recognition.maxAlternatives=1,this.recognition.onstart=()=>{var s;this.isListening=!0,(s=this.activeCallbacks)!=null&&s.onStart&&this.activeCallbacks.onStart()},this.recognition.onresult=s=>{var i,r,o,l;const n=((o=(r=(i=s.results)==null?void 0:i[0])==null?void 0:r[0])==null?void 0:o.transcript)||"";(l=this.activeCallbacks)!=null&&l.onResult&&this.activeCallbacks.onResult(n)},this.recognition.onerror=s=>{var n;console.warn("SpeechRecognition error:",s.error),this.isListening=!1,(n=this.activeCallbacks)!=null&&n.onError&&this.activeCallbacks.onError(s.error)},this.recognition.onend=()=>{var s;this.isListening=!1,(s=this.activeCallbacks)!=null&&s.onEnd&&this.activeCallbacks.onEnd()})}start({onResult:t,onStart:s,onEnd:n,onError:i,langCode:r="en"}){if(!this.supported)return i&&i("not-supported"),!1;if(this.isListening)return this.stop(),!1;const o={en:"en-IN",hi:"hi-IN",mr:"mr-IN"};this.recognition.lang=o[r]||"en-IN",this.activeCallbacks={onResult:t,onStart:s,onEnd:n,onError:i};try{return this.recognition.start(),!0}catch(l){return console.warn("Could not start speech recognition:",l),this.isListening=!1,!1}}stop(){if(!(!this.supported||!this.isListening)){try{this.recognition.stop()}catch{}this.isListening=!1}}}const N=new pe;function se(a,t){if(!a)return null;const s=document.createElement("button");s.type="button",s.className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center",s.setAttribute("aria-label","Start voice input (Speak to Write)"),s.title="Speak to write",s.innerHTML=`
    <span class="material-symbols-outlined text-[16px] mic-icon">mic</span>
  `,s.addEventListener("click",i=>{if(i.preventDefault(),i.stopPropagation(),!N.supported){alert("Speech recognition is not supported in this browser. Please use Chrome, Edge, or a Web Speech-enabled browser.");return}const r=typeof t=="function"?t():t||"en";if(N.isListening){N.stop(),n(!1);return}N.start({langCode:r,onStart:()=>n(!0),onResult:o=>{if(o){const l=a.value.trim();a.value=l?`${l} ${o}`:o,a.dispatchEvent(new Event("input",{bubbles:!0})),a.dispatchEvent(new Event("change",{bubbles:!0})),a.focus()}},onEnd:()=>n(!1),onError:o=>{console.warn("Voice input ended with error:",o),n(!1)}})});function n(i){const r=s.querySelector(".mic-icon");i?(s.classList.add("text-error","animate-pulse"),s.setAttribute("aria-label","Listening... click to stop voice input"),s.title="Listening... (Speak now)",r&&(r.textContent="mic_active")):(s.classList.remove("text-error","animate-pulse"),s.setAttribute("aria-label","Start voice input (Speak to Write)"),s.title="Speak to write",r&&(r.textContent="mic"))}return s}function me(a,t,s){a.innerHTML=`
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
                <span>${e("dashboard.pipelineBadge","National Infrastructure Pipeline • MoRTH / MoR Analytics")}</span>
              </div>
              <h1 class="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                ${e("dashboard.title","Land Acquisition Intelligence")}
              </h1>
              <p class="font-body-lg text-body-lg text-on-surface-variant">
                ${e("dashboard.subtitle","Monitor project progress, detect emerging delay risks, and prioritize intervention across critical national infrastructure corridors.")}
              </p>
            </div>
            
            <!-- Quick Actions -->
            <div class="flex flex-wrap items-center gap-space-sm">
              <button class="flex items-center gap-space-xs px-space-md py-2.5 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-on-surface transition-all duration-150 active:scale-[0.98]" id="nationalScanBtn" type="button">
                <span class="material-symbols-outlined text-[18px] text-secondary-container">radar</span>
                <span>${e("dashboard.runScan","Run National Risk Scan")}</span>
              </button>
              <button class="flex items-center gap-space-xs px-space-md py-2.5 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-surface-container-low transition-all duration-150 border border-outline-variant/30" id="openAssessmentCtaBtn" type="button">
                <span class="material-symbols-outlined text-[18px] text-secondary">tune</span>
                <span>${e("dashboard.launchCockpit","Launch Assessment Cockpit")}</span>
              </button>
            </div>
          </div>

          <!-- Top Governance KPI Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
            
            <!-- Metric 1: Total Projects -->
            <div class="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-outline-variant/30">
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-space-xs">
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">${e("dashboard.totalProjects","Total Projects Monitored")}</span>
                  <span class="font-headline-lg text-headline-lg font-bold text-on-surface font-tabular-data">${e("dashboard.totalProjectsCount","142 Projects")}</span>
                </div>
                <div class="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                  <span class="material-symbols-outlined text-[22px]">account_tree</span>
                </div>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40"></span>
                <span>${e("dashboard.totalProjectsDesc","46 National Highways, 38 Freight, 58 Energy & Urban")}</span>
              </div>
            </div>

            <!-- Metric 2: High / Critical Risk -->
            <div class="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow overflow-hidden border border-outline-variant/30">
              <div class="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-space-xs">
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">${e("dashboard.highCriticalRisk","High / Critical Risk")}</span>
                  <div class="flex items-baseline gap-space-xs">
                    <span class="font-headline-lg text-headline-lg font-bold text-on-surface font-tabular-data">${e("dashboard.highCriticalCount","29 Projects")}</span>
                    <span class="font-label-sm text-label-sm text-secondary font-semibold font-tabular-data">(20.4%)</span>
                  </div>
                </div>
                <div class="w-10 h-10 rounded-lg bg-error-container/40 flex items-center justify-center text-error">
                  <span class="material-symbols-outlined text-[22px]" style="font-variation-settings: 'FILL' 1;">warning</span>
                </div>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-secondary-container font-label-sm text-label-sm font-semibold">
                <span class="material-symbols-outlined text-[14px]">trending_up</span>
                <span>${e("dashboard.highCriticalDesc","+3 from last sprint • 18 High, 11 Critical")}</span>
              </div>
            </div>

            <!-- Metric 3: Requiring Intervention -->
            <div class="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-outline-variant/30">
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-space-xs">
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">${e("dashboard.requiringIntervention","Requiring Intervention")}</span>
                  <span class="font-headline-lg text-headline-lg font-bold text-on-surface font-tabular-data">${e("dashboard.interventionCount","14 Immediate Actions")}</span>
                </div>
                <div class="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-fixed">
                  <span class="material-symbols-outlined text-[22px]">notification_important</span>
                </div>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
                <span class="w-2 h-2 rounded-full bg-secondary-container"></span>
                <span>${e("dashboard.interventionDesc","8 Document Bottlenecks, 6 Compensation Escrows")}</span>
              </div>
            </div>

            <!-- Metric 4: Average Delay Risk -->
            <div class="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-outline-variant/30">
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-space-xs">
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">${e("dashboard.avgDelayRisk","Average Delay Risk")}</span>
                  <div class="flex items-baseline gap-space-xs">
                    <span class="font-headline-lg text-headline-lg font-bold text-on-surface font-tabular-data">36.8%</span>
                    <span class="font-label-sm text-label-sm text-on-surface-variant">${e("dashboard.modelConfidence","Model CI 95%")}</span>
                  </div>
                </div>
                <div class="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                  <span class="material-symbols-outlined text-[22px]">speed</span>
                </div>
              </div>
              <div class="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span class="text-on-surface font-medium">${e("dashboard.lowMediumZone","Low-Medium Zone")}</span>
                <span class="font-tabular-data text-label-sm text-on-surface-variant">${e("dashboard.baselineVariance","Baseline variance -2.4% vs state avg")}</span>
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
                    <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">${e("dashboard.riskOverview","Risk Overview & Distribution")}</h3>
                    <span class="font-body-sm text-body-sm text-on-surface-variant">${e("dashboard.portfolioBreakdown","National Portfolio breakdown (N=142)")}</span>
                  </div>
                  <span class="font-tabular-data font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-semibold">
                    ${e("dashboard.liveModelActive","Live Model Active")}
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
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">${k("CRITICAL")}</span>
                    </div>
                    <div class="flex items-baseline justify-between mt-1">
                      <span class="font-headline-sm text-headline-sm font-bold text-on-surface font-tabular-data">11</span>
                      <span class="font-tabular-data text-label-sm text-error font-semibold">8%</span>
                    </div>
                    <span class="font-body-sm text-[11px] text-on-surface-variant">${e("dashboard.actionPlanMandatory","Action plan mandatory")}</span>
                  </div>
                  <!-- High -->
                  <div class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-0.5 hover:bg-surface-container transition-colors border border-outline-variant/20">
                    <div class="flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">${k("HIGH")}</span>
                    </div>
                    <div class="flex items-baseline justify-between mt-1">
                      <span class="font-headline-sm text-headline-sm font-bold text-on-surface font-tabular-data">18</span>
                      <span class="font-tabular-data text-label-sm text-secondary font-semibold">13%</span>
                    </div>
                    <span class="font-body-sm text-[11px] text-on-surface-variant">${e("dashboard.stagnationWatchlist","Stagnation watchlist")}</span>
                  </div>
                  <!-- Medium -->
                  <div class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-0.5 hover:bg-surface-container transition-colors border border-outline-variant/20">
                    <div class="flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim"></span>
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">${k("MEDIUM")}</span>
                    </div>
                    <div class="flex items-baseline justify-between mt-1">
                      <span class="font-headline-sm text-headline-sm font-bold text-on-surface font-tabular-data">48</span>
                      <span class="font-tabular-data text-label-sm text-on-surface-variant font-semibold">34%</span>
                    </div>
                    <span class="font-body-sm text-[11px] text-on-surface-variant">${e("dashboard.statutoryTracking","Statutory tracking")}</span>
                  </div>
                  <!-- Low -->
                  <div class="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-0.5 hover:bg-surface-container transition-colors border border-outline-variant/20">
                    <div class="flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim"></span>
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">${k("LOW")}</span>
                    </div>
                    <div class="flex items-baseline justify-between mt-1">
                      <span class="font-headline-sm text-headline-sm font-bold text-on-surface font-tabular-data">65</span>
                      <span class="font-tabular-data text-label-sm text-on-surface-variant font-semibold">45%</span>
                    </div>
                    <span class="font-body-sm text-[11px] text-on-surface-variant">${e("dashboard.nominalTrajectory","Nominal trajectory")}</span>
                  </div>
                </div>

                <!-- Key Risk Drivers Breakdown -->
                <div class="pt-space-sm flex flex-col gap-space-sm border-t border-surface-container-high">
                  <div class="flex items-center justify-between">
                    <span class="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">${e("dashboard.keyRiskDrivers","Key Risk Drivers")}</span>
                    <span class="font-label-sm text-label-sm text-on-surface-variant">${e("dashboard.rootCauseCluster","Root Cause Cluster")}</span>
                  </div>
                  <!-- Driver Progress Bars -->
                  <div class="flex flex-col gap-space-xs">
                    <div class="flex flex-col gap-1">
                      <div class="flex justify-between font-label-sm text-label-sm">
                        <span class="text-on-surface font-medium">${e("dashboard.driverDocumentation","Documentation Backlog (Title & 3A)")}</span>
                        <span class="font-tabular-data font-bold text-on-surface">38%</span>
                      </div>
                      <div class="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                        <div class="h-full bg-on-surface" style="width: 38%"></div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-1">
                      <div class="flex justify-between font-label-sm text-label-sm">
                        <span class="text-on-surface font-medium">${e("dashboard.driverPossession","Possession Delays (Encroachments)")}</span>
                        <span class="font-tabular-data font-bold text-on-surface">27%</span>
                      </div>
                      <div class="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                        <div class="h-full bg-secondary-container" style="width: 27%"></div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-1">
                      <div class="flex justify-between font-label-sm text-label-sm">
                        <span class="text-on-surface font-medium">${e("dashboard.driverDisputes","Court Disputes & Injunctions")}</span>
                        <span class="font-tabular-data font-bold text-on-surface">19%</span>
                      </div>
                      <div class="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                        <div class="h-full bg-secondary" style="width: 19%"></div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-1">
                      <div class="flex justify-between font-label-sm text-label-sm">
                        <span class="text-on-surface font-medium">${e("dashboard.driverApprovals","Approval Stalls (Inter-Agency)")}</span>
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
                    <span class="font-label-md text-label-md font-bold uppercase tracking-wider">${e("dashboard.predictiveTriangulationAlert","Predictive Triangulation Alert")}</span>
                  </div>
                  <div id="alertReadAloudSlot"></div>
                </div>
                <p class="font-body-md text-body-md text-on-primary/90" id="triangulationAlertText">
                  ${e("dashboard.triangulationAlertText","Corridors passing through industrial agro-zones face an 82% likelihood of Section 15 objection escalation within 14 days without active district tehsildar hearings.")}
                </p>
                <div class="pt-space-xs flex items-center justify-between">
                  <span class="font-label-sm text-label-sm text-primary-fixed-dim">${e("dashboard.modelConfidenceTag","Model Confidence: 91.4% (SIH Model XG-26)")}</span>
                  <button class="px-space-sm py-1 bg-surface-container-lowest text-on-surface font-label-sm text-label-sm rounded hover:bg-surface-container transition-colors font-semibold" id="jumpToAssessmentBtn" type="button">
                    ${e("dashboard.assessBtn","Assess Impact")}
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
                      ${e("dashboard.priorityProjects","Priority Projects Requiring Administrative Oversight")}
                    </h3>
                    <span class="font-body-sm text-body-sm text-on-surface-variant">
                      ${e("dashboard.cadastralEscalation","Cadastral escalation ledger sorted by delay probability")}
                    </span>
                  </div>
                  <!-- Quick Table Filters -->
                  <div class="flex items-center gap-space-xs">
                    <div class="relative flex items-center">
                      <input class="pl-7 pr-8 py-1 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface w-48 border border-outline-variant/40" id="projectSearchInput" placeholder="${e("dashboard.searchPlaceholder","Search project or ID...")}" type="text"/>
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
                        <th class="py-2.5 px-space-sm font-bold">${e("dashboard.colId","Project ID")}</th>
                        <th class="py-2.5 px-space-sm font-bold">${e("dashboard.colName","Name & Sector")}</th>
                        <th class="py-2.5 px-space-sm font-bold">${e("dashboard.colDistrict","District / State")}</th>
                        <th class="py-2.5 px-space-sm font-bold font-tabular-data">${e("dashboard.colProgress","Progress")}</th>
                        <th class="py-2.5 px-space-sm font-bold font-tabular-data">${e("dashboard.colRisk","Delay Risk")}</th>
                        <th class="py-2.5 px-space-sm font-bold">${e("dashboard.colTier","Tier")}</th>
                        <th class="py-2.5 px-space-sm font-bold text-right">${e("dashboard.colAction","Action")}</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-surface-container font-body-sm text-body-sm" id="projectsTableBody">
                      ${Y(E)}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  `;const n=a.querySelector("#projectSearchInput"),i=a.querySelector("#projectsTableBody");if(n&&i){n.addEventListener("input",u=>{const b=u.target.value.toLowerCase().trim(),x=E.filter(c=>c.id.toLowerCase().includes(b)||c.name.toLowerCase().includes(b)||c.district.toLowerCase().includes(b)||c.state.toLowerCase().includes(b));i.innerHTML=Y(x),J(a,t,s)});const p=a.querySelector("#dashboardSearchMicSlot");if(p){const u=se(n,()=>w.getLanguage());u&&p.appendChild(u)}}const r=a.querySelector("#alertReadAloudSlot"),o=a.querySelector("#triangulationAlertText");if(r&&o){const p=K(()=>`${e("dashboard.predictiveTriangulationAlert","Predictive Triangulation Alert")}: ${o.textContent.trim()}`,()=>w.getLanguage());r.appendChild(p)}const l=a.querySelector("#openAssessmentCtaBtn"),d=a.querySelector("#jumpToAssessmentBtn"),m=a.querySelector("#nationalScanBtn");l&&t&&l.addEventListener("click",()=>t("medium")),d&&t&&d.addEventListener("click",()=>t("high")),m&&m.addEventListener("click",()=>{alert(e("dashboard.scanCompleted","National Scan Completed: 29 High/Critical risks identified."))}),J(a,t,s)}function Y(a){return a.length===0?`<tr><td colspan="7" class="text-center py-4 text-on-surface-variant">${e("dashboard.noMatchingProjects","No matching projects found.")}</td></tr>`:a.map(t=>{const s=t.riskLevel||_(t.delayProbability),n=k(s);return`
    <tr class="hover:bg-surface-container-low/70 transition-colors group">
      <td class="py-space-sm px-space-sm font-tabular-data font-bold text-on-surface">
        ${t.id}
      </td>
      <td class="py-space-sm px-space-sm">
        <div class="flex flex-col">
          <span class="font-semibold text-on-surface">${t.name}</span>
          <span class="text-on-surface-variant font-label-sm text-label-sm">${t.sector}</span>
        </div>
      </td>
      <td class="py-space-sm px-space-sm text-on-surface-variant">
        ${t.district}, ${t.state}
      </td>
      <td class="py-space-sm px-space-sm font-tabular-data">
        <div class="flex items-center gap-space-xs">
          <span class="font-medium text-on-surface">${t.progressPct}%</span>
          <div class="w-12 h-1.5 rounded-full bg-surface-container-high overflow-hidden">
            <div class="h-full bg-on-surface" style="width: ${t.progressPct}%"></div>
          </div>
        </div>
      </td>
      <td class="py-space-sm px-space-sm font-tabular-data font-bold ${M(s)}">
        ${t.delayProbability}%
      </td>
      <td class="py-space-sm px-space-sm">
        <span class="px-2 py-0.5 rounded-full ${F(s)} font-label-sm text-label-sm font-bold inline-flex items-center gap-1 border">
          <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
          ${n}
        </span>
      </td>
      <td class="py-space-sm px-space-sm text-right">
        <div class="inline-flex items-center gap-1">
          <button class="assess-project-btn px-space-xs py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded hover:bg-surface-tint transition-colors font-semibold" data-preset="${t.presetKey||"medium"}" type="button">
            ${e("dashboard.assessBtn","Assess")}
          </button>
          <button class="audit-project-btn px-space-xs py-1 bg-surface-container text-on-surface font-label-sm text-label-sm rounded hover:bg-surface-container-high transition-colors font-medium" data-id="${t.id}" type="button">
            ${e("dashboard.auditBtn","Audit")}
          </button>
        </div>
      </td>
    </tr>
  `}).join("")}function J(a,t,s){a.querySelectorAll(".assess-project-btn").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-preset")||"medium";t&&t(i)})}),a.querySelectorAll(".audit-project-btn").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-id");s&&s(i)})})}const ne=typeof import.meta<"u"&&"http://127.0.0.1:8000"||"http://127.0.0.1:8000";class H extends Error{constructor(t,s=null,n=null){super(t),this.name="ApiError",this.status=s,this.details=n}}async function Q(a,t={}){const s=`${ne}${a}`,n=new AbortController,i=setTimeout(()=>n.abort(),t.timeout||15e3),r={"Content-Type":"application/json",Accept:"application/json"};try{const o=await fetch(s,{...t,headers:{...r,...t.headers||{}},signal:n.signal});clearTimeout(i);const l=o.headers.get("content-type")||"";let d=null;if(l.includes("application/json")?d=await o.json():d=await o.text(),!o.ok){const m=d&&typeof d=="object"&&d.detail?d.detail:`Request failed with status ${o.status}`;throw new H(m,o.status,d)}return d}catch(o){throw clearTimeout(i),o instanceof H?o:o.name==="AbortError"?new H("Request timed out while contacting Bhoomi Sakha prediction engine.",408):(console.debug(`[ApiClient] Network request failed for ${a}:`,o),new H("Prediction service is temporarily unavailable. Please try again.",0,o))}}const U={baseUrl:ne,get(a,t={}){return Q(a,{...t,method:"GET"})},post(a,t,s={}){return Q(a,{...s,method:"POST",body:JSON.stringify(t)})}},W={async checkHealth(){try{const a=await U.get("/health",{timeout:4e3});return{online:a.status==="healthy",modelLoaded:!!a.model_loaded,featureCount:a.features||76,raw:a}}catch(a){return{online:!1,modelLoaded:!1,featureCount:0,error:a.message}}},async getMetadata(){return U.get("/meta")},async predictRisk(a){return U.post("/predict",a)}};let q={activePreset:"medium",lastPrediction:null,isLoading:!1};function fe(a,t="medium"){q.activePreset=t;const s=L[t]||L.medium;a.innerHTML=`
    <div class="flex flex-col w-full">
      <!-- Interactive Top Control Canvas -->
      <div class="w-full px-gutter-desktop py-space-lg flex flex-col gap-space-md">
        <!-- Title and Metadata Strip -->
        <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
          <div class="flex flex-col">
            <div class="flex items-center gap-space-sm">
              <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
              <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">${e("assessment.title","Assess Project Risk")}</h1>
              <span class="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">${e("assessment.engineBadge","FastAPI • XGB-26017 Engine")}</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant mt-0.5">
              ${e("assessment.subtitle","Enter or edit project telemetry to estimate statutory delay probability and inspect model-derived risk drivers via POST /predict.")}
            </p>
          </div>

          <!-- Mode Selector Switch -->
          <div class="inline-flex p-1 rounded-xl bg-surface-container-high shadow-inner shrink-0">
            <button class="px-space-md py-1.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5" id="modeSelectBtn" type="button">
              <span class="material-symbols-outlined text-[16px]">folder_open</span>
              <span>${e("assessment.selectProject","Select Existing Project")}</span>
            </button>
            <button class="px-space-md py-1.5 rounded font-label-md text-label-md bg-surface-container-lowest text-on-surface shadow-sm font-semibold flex items-center gap-1.5 transition-all" id="modeSimulateBtn" type="button">
              <span class="material-symbols-outlined text-[16px] text-secondary">tune</span>
              <span>${e("assessment.testScenario","Create / Test Scenario")}</span>
            </button>
          </div>
        </div>

        <!-- Quick Scenario Presets Bar -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border border-outline-variant/30">
          <div class="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm pl-space-xs">
            <span class="material-symbols-outlined text-[16px] text-secondary">flash_on</span>
            <span class="uppercase tracking-wider font-semibold">${e("assessment.statutoryPresets","Statutory Test Presets:")}</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-space-xs w-full lg:w-auto">
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors text-left flex items-center justify-between gap-space-sm group" data-preset="low" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate group-hover:text-primary">NH-44 Bypass Ph. 2</span>
                <span class="font-label-sm text-[10px] text-emerald-600 font-tabular-data font-semibold">${e("risk.lowTier","Low Delay Tier")}</span>
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
                <span class="font-label-sm text-[10px] text-on-surface-variant font-tabular-data">${e("risk.highTier","High Bottleneck Tier")}</span>
              </div>
              <span class="w-2 h-2 rounded-full bg-orange-600 shrink-0"></span>
            </button>
            <button class="preset-pill px-space-sm py-1.5 rounded bg-surface-container-low hover:bg-surface-container transition-colors text-left flex items-center justify-between gap-space-sm group" data-preset="critical" type="button">
              <div class="flex flex-col truncate">
                <span class="font-label-sm text-label-sm text-on-surface truncate group-hover:text-primary">Court Injunction HC</span>
                <span class="font-label-sm text-[10px] text-on-surface-variant font-tabular-data">${e("risk.criticalTier","Critical Injunction Tier")}</span>
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
                <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">${e("assessment.telemetryMatrices","Telemetry Input Matrices")}</h2>
                <p class="font-body-sm text-body-sm text-on-surface-variant">${e("assessment.telemetrySubtitle","Configure cadastral attributes according to Section 11 & 19 statutory filings")}</p>
              </div>
            </div>
            <button class="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 px-space-sm py-1 rounded hover:bg-surface-container transition-colors border border-outline-variant/40" id="resetFormBtn" type="button">
              <span class="material-symbols-outlined text-[15px]">refresh</span>
              <span>${e("assessment.resetValues","Reset Values")}</span>
            </button>
          </div>

          <!-- SECTION A: Project Profile -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="w-1.5 h-3 bg-primary rounded-full"></span> ${e("assessment.sectionA","Section A • Project Profile")}
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">${e("assessment.coreClassification","Core Classification")}</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelProjectType","Project Type")}</label>
                <select class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_projectType">
                  <option value="Highway">${e("dropdown.project_type.highway","Highway")}</option>
                  <option value="Railway">${e("dropdown.project_type.railway","Railway")}</option>
                  <option value="Industrial">${e("dropdown.project_type.industrial","Industrial Node")}</option>
                  <option value="Metro">${e("dropdown.project_type.metro","Metro Rail")}</option>
                  <option value="Irrigation">${e("dropdown.project_type.irrigation","Irrigation")}</option>
                  <option value="Power">${e("dropdown.project_type.power","Power Grid")}</option>
                  <option value="Urban Development">${e("dropdown.project_type.urban","Urban Development")}</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelLandType","Land Classification")}</label>
                <select class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_landType">
                  <option value="Agricultural">${e("dropdown.land_type.agricultural","Agricultural")}</option>
                  <option value="Commercial">${e("dropdown.land_type.commercial","Commercial")}</option>
                  <option value="Industrial">${e("dropdown.land_type.industrial","Industrial")}</option>
                  <option value="Mixed">${e("dropdown.land_type.mixed","Mixed Revenue")}</option>
                  <option value="Residential">${e("dropdown.land_type.residential","Residential")}</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelPriority","Priority Tier")}</label>
                <select class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_priority">
                  <option value="Normal">${e("dropdown.priority.normal","Normal")}</option>
                  <option value="High">${e("dropdown.priority.high","High")}</option>
                  <option value="Critical">${e("dropdown.priority.critical","Critical")}</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelComplexity","Complexity (0-100)")}</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_complexity" step="0.1" min="0" max="100" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelTotalParcels","Total Parcels")}</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_totalParcels" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelAffectedFamilies","Affected Families (PAFs)")}</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_affectedFamilies" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelLandArea","Land Extent (Ha)")}</label>
                <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_landArea" step="0.1" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelPlannedDuration","Planned Duration (d)")}</label>
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
                  <span class="w-1.5 h-3 bg-secondary rounded-full"></span> ${e("assessment.sectionB","Section B • Progress")}
                </span>
                <span class="font-tabular-data text-label-sm text-secondary font-semibold" id="badgeAcqVelocity">${e("assessment.velocityActive","Velocity Active")}</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelAcqProgress","Acq. Progress (%)")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_acqProgress" min="0" max="100" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelVelocity","Velocity (%/30d)")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_velocity" step="0.01" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelParcelsPending","Parcels Pending")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_parcelsPending" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelPossessionPending","Possession Pending")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_possessionPending" min="0" type="number"/>
                </div>
              </div>
            </div>

            <!-- SECTION C: Documentation Telemetry -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm relative overflow-hidden border border-outline-variant/30">
              <div class="absolute top-0 right-0 w-24 h-1 bg-secondary-container"></div>
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-secondary-container rounded-full"></span> ${e("assessment.sectionC","Section C • Documentation")}
                </span>
                <span class="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[10px] font-semibold">${e("assessment.keyModelDriver","Key Model Driver")}</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelDocsReq","Docs Required")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_docsReq" min="1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-secondary font-semibold mb-1 flex items-center gap-1">
                    <span>${e("assessment.labelDocsPending","Docs Pending")}</span>
                    <span class="material-symbols-outlined text-[13px]">edit</span>
                  </label>
                  <input class="bg-surface-container-high px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface font-bold focus:outline-none focus:ring-2 focus:ring-secondary-container border border-outline-variant/50" id="field_docsPending" min="0" type="number"/>
                </div>
                <div class="col-span-2 flex flex-col gap-1">
                  <div class="flex items-center justify-between font-label-sm text-label-sm">
                    <span class="text-on-surface-variant">${e("assessment.labelDocCompletion","Documentation Completion")}</span>
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
                  <span class="w-1.5 h-3 bg-outline rounded-full"></span> ${e("assessment.sectionD","Section D • Compensation")}
                </span>
                <span class="font-tabular-data text-label-sm text-on-surface-variant" id="label_compDisbursedBadge">${e("assessment.escrowTranche","Escrow Tranche")}</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelCompCases","Pending Cases")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compCases" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelCompAmount","Pending (₹ Cr)")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compAmount" min="0" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelCompDisbursed","Disbursed %")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compDisbursed" min="0" max="100" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- SECTION E: Clearances / Approvals -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
              <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="w-1.5 h-3 bg-outline rounded-full"></span> ${e("assessment.sectionE","Section E • Clearances")}
                </span>
                <span class="font-label-sm text-label-sm text-error font-medium" id="label_clearanceAlert">${e("assessment.interAgencyGate","Inter-Agency Gate")}</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs">
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelApprPending","Approvals Pend.")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprPending" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelApprOverdue","Overdue Num")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprOverdue" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelApprDelay","Avg Delay (d)")}</label>
                  <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprDelay" min="0" step="0.1" type="number"/>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION F: Legal & Litigation -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="w-1.5 h-3 bg-error rounded-full"></span> ${e("assessment.sectionF","Section F • Legal Litigations & Objections")}
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">${e("assessment.section15Hearings","Section 15 Hearings")}</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelPendingObj","Pending Objections")}</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_pendingObj" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelActiveDisputes","Active Land Disputes")}</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_activeDisputes" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">${e("assessment.labelOwnerDisputes","Ownership Conflicts")}</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_ownerDisputes" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <label class="font-label-sm text-label-sm text-error font-bold mb-1">${e("assessment.labelCourtStays","Court Stays / Writs")}</label>
                <input class="bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface font-bold focus:outline-none border border-error/50" id="field_courtStays" min="0" type="number"/>
              </div>
            </div>
          </div>

          <!-- SECTIONS G, H, I, J: Compact Telemetry Quartet -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            
            <!-- Section G: R&R -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">${e("assessment.sectionG","Section G • R&R Resettlement")}</span>
                <span class="font-tabular-data text-[11px] text-emerald-600 font-semibold" id="label_rrSummary">${e("assessment.rfctlarrCompliance","RFCTLARR Compliance")}</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelRrPending","Pending Cases")}</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_rrPending" min="0" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelRrCompletion","Completion %")}</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_rrCompletion" min="0" max="100" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section H: Schedule -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">${e("assessment.sectionH","Section H • Schedule & Variance")}</span>
                <span class="font-tabular-data text-[11px] text-amber-600 font-semibold" id="label_schedSlippage">${e("assessment.criticalPath","Critical Path")}</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelSchedVariance","Variance (Days)")}</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_schedVariance" step="0.1" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelMilestonesOverdue","Overdue Milestones")}</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_milestonesOverdue" min="0" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section I: Stakeholders -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">${e("assessment.sectionI","Section I • Stakeholder Coordination")}</span>
                <span class="font-tabular-data text-[11px] text-on-surface-variant">${e("assessment.responseLatency","Response Latency")}</span>
              </div>
              <div class="grid grid-cols-3 gap-space-xs pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelShActions","Pending Act.")}</label>
                  <input class="w-full bg-surface-container-low px-1.5 py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shActions" min="0" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelShResponse","Avg Resp (d)")}</label>
                  <input class="w-full bg-surface-container-low px-1.5 py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shResponse" min="0" step="0.1" type="number"/>
                </div>
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelShScore","Score /10")}</label>
                  <input class="w-full bg-surface-container-low px-1.5 py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shScore" min="0" max="10" step="0.1" type="number"/>
                </div>
              </div>
            </div>

            <!-- Section J: Historical Context -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/30">
              <div class="flex items-center justify-between border-b border-surface-container-high pb-1">
                <span class="font-label-sm text-label-sm uppercase text-on-surface font-bold">${e("assessment.sectionJ","Section J • Historical Delay Context")}</span>
                <span class="font-tabular-data text-[11px] text-on-surface-variant">${e("assessment.regionalPriors","Regional Priors")}</span>
              </div>
              <div class="grid grid-cols-2 gap-space-sm pt-1">
                <div>
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelHistDelay","Avg Reg. Delay (d)")}</label>
                  <input class="w-full bg-surface-container-low px-space-sm py-1 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_histDelay" min="0" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col justify-end">
                  <span class="font-label-sm text-[11px] text-on-surface-variant">${e("assessment.trainingArchetype","Training Archetype:")}</span>
                  <span class="font-label-sm text-label-sm font-semibold text-on-surface">${e("assessment.linearInfra","Linear Infrastructure (NLRMP)")}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sticky Operational Action Bar -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md sticky bottom-4 z-20 border-2 border-surface-container-high">
            <div class="flex items-center gap-space-sm">
              <div class="flex flex-col">
                <span class="font-label-md text-label-md text-on-surface font-semibold">${e("assessment.targetWindow","Inference Target: Statutory 5-Year Window")}</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">${e("assessment.mandateValidation","LARR Act 2013 § 25 Mandate Validation • XGBoost Engine")}</span>
              </div>
            </div>
            <div class="flex items-center gap-space-sm w-full sm:w-auto">
              <button class="w-1/3 sm:w-auto px-space-md py-2.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors border border-outline-variant/40" id="resetScenarioBtn" type="button">
                ${e("assessment.resetBtn","Reset")}
              </button>
              <button class="w-2/3 sm:w-auto px-space-lg py-2.5 rounded bg-primary text-on-primary hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 group font-bold tracking-wide uppercase" id="runPredictionBtn" type="button">
                <span class="material-symbols-outlined text-[20px] text-secondary-container group-hover:rotate-12 transition-transform">model_training</span>
                <span>${e("assessment.assessRiskBtn","Assess Project Risk")}</span>
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
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold">${e("assessment.analyzingTelemetry","Analyzing Project Telemetry...")}</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant font-tabular-data">${e("assessment.callingApi","Calling FastAPI POST /predict & XGBoost Tree Contributions")}</span>
              </div>
            </div>

            <!-- Top Row with State Badge & Read Aloud -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-secondary text-[22px]">analytics</span>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">${e("assessment.riskIndex","Predictive Risk Index")}</h3>
              </div>
              <div class="flex items-center gap-2">
                <div id="assessmentReadAloudSlot"></div>
                <span class="px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 transition-all" id="riskBadge">
                  ${k("MEDIUM")}
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
                  <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">${e("assessment.predictedDelayProb","Predicted Delay Probability")}</span>
                  <span class="mt-1 font-label-sm text-[11px] font-semibold text-amber-600" id="decisionOutcome">${te("MEDIUM")}</span>
                </div>
              </div>

              <!-- Contextual Snapshot Summary & Statutory Threshold -->
              <div class="w-full mt-3 p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 border border-outline-variant/30 text-center">
                <p class="font-body-sm text-xs text-on-surface font-medium" id="riskSummaryText">
                  ${B("MEDIUM")}
                </p>
                <div class="flex items-center justify-center gap-2 font-label-sm text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-high/60">
                  <span id="riskThresholdNote" class="font-semibold">${ae("MEDIUM")}</span>
                </div>
              </div>
            </div>

            <!-- Explanatory Cadastral Model Note -->
            <div class="bg-surface-container-low p-space-sm rounded-lg flex items-start gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
              <span class="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">verified</span>
              <span>${e("assessment.modelNote","Predicted by XGBoost Model (SIH 26017) trained on 3,000,000 national records. Live model inference via POST /predict.")}</span>
            </div>
          </div>

          <!-- 2. Risk-Increasing Factors (Red / Orange Bars) -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-error flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-[16px]">trending_up</span> ${e("assessment.riskIncreasingFactors","Risk-Increasing Factors")}
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data">${e("assessment.modelContributionPos","Model Contribution (+Δ)")}</span>
            </div>
            <div class="flex flex-col gap-space-sm pt-space-xs" id="riskIncreasingContainer">
              <!-- Dynamically rendered -->
            </div>
          </div>

          <!-- 3. Factors Reducing Predicted Risk (Green Negative Bars) -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-emerald-700 flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-[16px]">trending_down</span> ${e("assessment.riskReducingFactors","Factors Reducing Predicted Risk")}
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data">${e("assessment.modelContributionNeg","Model Contribution (-Δ)")}</span>
            </div>
            <div class="flex flex-col gap-space-sm pt-space-xs" id="riskReducingContainer">
              <!-- Dynamically rendered -->
            </div>
            <div class="pt-1 text-[11px] text-on-surface-variant italic">
              ${e("assessment.mathematicalNote","Note: Values reflect mathematical dampening within the XGBoost model and are not causal recommendations.")}
            </div>
          </div>

          <!-- 4. Statutory Directives / Priority Actions -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-[16px] text-secondary">gavel</span> ${e("assessment.recommendedDirectives","Recommended Statutory Directives")}
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-semibold">${e("assessment.priorityExecution","Priority Execution")}</span>
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
                <span class="font-label-md text-label-md text-on-surface font-semibold">${e("assessment.methodology","Methodology & Model Evaluation")}</span>
              </div>
              <span class="material-symbols-outlined text-[18px] text-on-surface-variant transition-transform" id="accordionChevron">expand_more</span>
            </button>
            <div class="hidden px-space-md pb-space-md pt-0 text-on-surface-variant font-body-sm text-body-sm flex flex-col gap-space-xs border-t border-surface-container-high" id="transparencyContent">
              <p class="pt-space-xs">
                ${e("assessment.methodologyText","The Bhoomi Sakha inference engine executes binary classification across 76 engineered features aligned with statutory RFCTLARR Act 2013 and national cadastral norms.")}
              </p>
              <div class="grid grid-cols-2 gap-2 my-1 text-[12px] bg-surface-container-low p-2 rounded">
                <div><strong>${e("assessment.accuracy","Accuracy")}:</strong> 71.05%</div>
                <div><strong>${e("assessment.rocAuc","ROC-AUC")}:</strong> 0.7805</div>
                <div><strong>${e("assessment.precision","Precision")}:</strong> 68.07%</div>
                <div><strong>${e("assessment.recall","Recall")}:</strong> 71.98%</div>
                <div><strong>${e("assessment.trainingDataset","Training Dataset")}:</strong> 3,000,000 rows</div>
                <div><strong>${e("assessment.projectsEvaluated","Projects Evaluated")}:</strong> 400,127</div>
              </div>
              <ul class="list-disc pl-5 flex flex-col gap-1 text-[11px]">
                <li><strong>${e("assessment.treeContribs","Tree Contributions")}:</strong> ${e("assessment.treeContribsDesc","Feature weights reflect exact gradient boosting margin impacts per project snapshot.")}</li>
                <li><strong>${e("assessment.riskThresholds","Risk Thresholds")}:</strong> LOW &lt; 40%, MEDIUM 40-60%, HIGH 60-80%, CRITICAL &ge; 80%.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,be(a,s)}function be(a,t){G(t.values),I();const s=a.querySelector("#assessmentReadAloudSlot");if(s){s.innerHTML="";const b=K(()=>{var v,A,y,C;const x=((v=a.querySelector("#probabilityValue"))==null?void 0:v.textContent)||"0%",c=((A=a.querySelector("#riskBadge"))==null?void 0:A.textContent)||"",f=((y=a.querySelector("#riskSummaryText"))==null?void 0:y.textContent)||"",g=((C=a.querySelector("#riskThresholdNote"))==null?void 0:C.textContent)||"";return`${e("assessment.readAloudIntro","Bhoomi Sakha assessment outcome.")} ${e("detail.modelDelayProb","Delay probability")}: ${x}. ${c}. ${f}. ${g}`},()=>w.getLanguage());s.appendChild(b)}a.querySelectorAll(".preset-pill").forEach(b=>{b.addEventListener("click",()=>{const x=b.getAttribute("data-preset");a.querySelectorAll(".preset-pill").forEach(f=>{f.classList.remove("bg-surface-container-high","ring-1","ring-secondary"),f.classList.add("bg-surface-container-low")}),b.classList.remove("bg-surface-container-low"),b.classList.add("bg-surface-container-high","ring-1","ring-secondary");const c=L[x];c&&(q.activePreset=x,G(c.values),I(),D(a))})});const n=a.querySelector("#field_docsPending"),i=a.querySelector("#field_docsReq");n&&n.addEventListener("input",I),i&&i.addEventListener("input",I);const r=a.querySelector("#runPredictionBtn");r&&r.addEventListener("click",()=>D(a));const o=a.querySelector("#resetScenarioBtn"),l=a.querySelector("#resetFormBtn"),d=()=>{const b=L[q.activePreset]||L.medium;G(b.values),I(),D(a)};o&&o.addEventListener("click",d),l&&l.addEventListener("click",d);const m=a.querySelector("#transparencyAccordionBtn"),p=a.querySelector("#transparencyContent"),u=a.querySelector("#accordionChevron");m&&p&&m.addEventListener("click",()=>{p.classList.contains("hidden")?(p.classList.remove("hidden"),u.style.transform="rotate(180deg)"):(p.classList.add("hidden"),u.style.transform="rotate(0deg)")}),D(a)}function I(){var r,o;const a=parseFloat((r=document.getElementById("field_docsReq"))==null?void 0:r.value)||1,t=parseFloat((o=document.getElementById("field_docsPending"))==null?void 0:o.value)||0,s=Math.max(0,Math.min(100,(a-t)/a*100)).toFixed(1),n=document.getElementById("label_docCompletion"),i=document.getElementById("bar_docCompletion");n&&(n.textContent=`${s}%`),i&&(i.style.width=`${s}%`)}function G(a){if(!a)return;const t=(s,n)=>{const i=document.getElementById(s);i&&n!==void 0&&(i.value=n)};t("field_projectType",a.project_type||"Highway"),t("field_landType",a.land_type||"Agricultural"),t("field_priority",a.priority||"Normal"),t("field_complexity",a.complexity_score??47.7),t("field_totalParcels",a.total_parcels??233),t("field_affectedFamilies",a.affected_families??113),t("field_landArea",a.land_area_hectares??132.5),t("field_plannedDuration",a.planned_duration_days??607),t("field_acqProgress",a.acquisition_progress_pct??6),t("field_velocity",a.acquisition_velocity_pct_per_30d??6.13),t("field_parcelsPending",a.parcels_pending??219),t("field_possessionPending",a.possession_pending_parcels??218),t("field_docsReq",a.documents_required??241),t("field_docsPending",a.documents_pending??232),t("field_compCases",a.compensation_pending_cases??105),t("field_compAmount",a.compensation_pending_amount??10.95),t("field_compDisbursed",a.compensation_completion_pct??6.2),t("field_apprPending",a.approvals_pending??5),t("field_apprOverdue",a.overdue_approvals??2),t("field_apprDelay",a.avg_approval_delay_days??41),t("field_pendingObj",a.pending_objections??0),t("field_activeDisputes",a.active_legal_disputes??0),t("field_ownerDisputes",a.ownership_disputes??0),t("field_courtStays",a.court_stay_cases??0),t("field_rrPending",a.rr_pending_cases??47),t("field_rrCompletion",a.rr_completion_pct??4.08),t("field_schedVariance",a.schedule_variance_days??-7.19),t("field_milestonesOverdue",a.milestones_overdue??1),t("field_shActions",a.pending_stakeholder_actions??7),t("field_shResponse",a.avg_stakeholder_response_days??28.59),t("field_shScore",a.stakeholder_responsiveness_score??5.14),t("field_histDelay",a.historical_avg_delay_days??100.8)}function ge(){var x;const a=(c,f=0)=>{var v;const g=parseFloat((v=document.getElementById(c))==null?void 0:v.value);return isNaN(g)?f:Math.max(0,g)},t=(c,f=0)=>{var v;const g=parseInt((v=document.getElementById(c))==null?void 0:v.value,10);return isNaN(g)?f:Math.max(0,g)},s=(c,f="")=>{var g;return((g=document.getElementById(c))==null?void 0:g.value)||f},n=t("field_totalParcels",200),i=t("field_parcelsPending",50),r=Math.max(0,n-i),o=t("field_docsReq",200),l=t("field_docsPending",50),d=Math.max(0,o-l),m=o>0?Math.min(100,Math.max(0,d/o*100)):0,p=t("field_compCases",10),u=a("field_compAmount",10),b=Math.min(100,a("field_compDisbursed",50));return{project_type:s("field_projectType","Highway"),land_type:s("field_landType","Mixed"),priority:s("field_priority","Normal"),current_stage:"Survey",complexity_score:a("field_complexity",40),total_parcels:n,parcels_pending:i,parcels_acquired:r,affected_families:a("field_affectedFamilies",50),land_area_hectares:a("field_landArea",100),planned_duration_days:t("field_plannedDuration",600),days_since_notification:30,days_elapsed:30,days_in_current_stage:30,planned_stage_duration_days:30,schedule_variance_days:parseFloat((x=document.getElementById("field_schedVariance"))==null?void 0:x.value)||0,milestones_due:2,milestones_completed:1,milestones_overdue:t("field_milestonesOverdue",0),acquisition_progress_pct:Math.min(100,a("field_acqProgress",50)),acquisition_velocity_pct_per_30d:a("field_velocity",5),possession_progress_pct:Math.min(100,(1-t("field_possessionPending",50)/Math.max(1,n))*100),possession_pending_parcels:t("field_possessionPending",50),compensation_total_amount:u*1.5,compensation_assessed_amount:u*1.2,compensation_disbursed_amount:u*.5,compensation_pending_amount:u,compensation_completion_pct:b,compensation_pending_cases:p,avg_compensation_delay_days:p*.5,documents_required:o,documents_verified:d,documents_pending:l,documentation_completion_pct:m,approvals_required:10,approvals_completed:5,approvals_pending:t("field_apprPending",2),approval_completion_pct:50,avg_approval_delay_days:a("field_apprDelay",10),overdue_approvals:t("field_apprOverdue",0),active_legal_disputes:t("field_activeDisputes",0),resolved_legal_disputes:0,ownership_disputes:t("field_ownerDisputes",0),court_stay_cases:t("field_courtStays",0),pending_objections:t("field_pendingObj",0),families_requiring_rr:t("field_rrPending",0)+10,families_rr_completed:10,rr_completion_pct:Math.min(100,a("field_rrCompletion",50)),rr_pending_cases:t("field_rrPending",0),pending_stakeholder_actions:t("field_shActions",0),avg_stakeholder_response_days:a("field_shResponse",10),stakeholder_responsiveness_score:a("field_shScore",5),interdepartmental_pending_actions:2,historical_avg_delay_days:a("field_histDelay",50)}}async function D(a){const t=a.querySelector("#loadingOverlay"),s=a.querySelector("#runPredictionBtn");t&&t.classList.remove("hidden"),s&&(s.disabled=!0,s.classList.add("opacity-70","cursor-not-allowed"));try{const n=ge(),i=await W.predictRisk(n);q.lastPrediction=i,xe(a,i)}catch(n){console.error("Prediction failed:",n),he(a,n.message)}finally{t&&t.classList.add("hidden"),s&&(s.disabled=!1,s.classList.remove("opacity-70","cursor-not-allowed"))}}function xe(a,t){const s=t.delay_probability_pct!==void 0?t.delay_probability_pct:t.delay_probability!==void 0?t.delay_probability*100:0,n=typeof s=="number"&&!isNaN(s)?s:0,i=_(n),r=te(i),o=B(i),l=ae(i),d=a.querySelector("#probabilityValue"),m=a.querySelector("#probabilityCircle"),p=a.querySelector("#decisionOutcome"),u=a.querySelector("#riskBadge"),b=a.querySelector("#riskSummaryText"),x=a.querySelector("#riskThresholdNote");d&&(d.textContent=`${n.toFixed(2)}%`),p&&(p.textContent=r,p.className=`mt-1 font-label-sm text-[11px] font-semibold ${M(i)}`),b&&(b.textContent=o),x&&(x.textContent=l);const c=301.59,f=c-c*(Math.min(100,Math.max(0,n))/100);m&&(m.style.strokeDashoffset=f,m.className=`transition-all duration-700 ease-out ${ce(i)}`),u&&(u.textContent=`${k(i)} ${e("risk.tier","Tier")}`,u.className=`px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider border ${F(i)}`);const g=a.querySelector("#riskIncreasingContainer");if(g){const y=t.risk_drivers||[];if(y.length===0)g.innerHTML=`
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          ${e("assessment.noRiskIncreasing","No major risk-increasing factors identified for this project state.")}
        </div>
      `;else{const C=Math.max(...y.map(h=>Math.abs(h.contribution)),.1);g.innerHTML=y.map(h=>{const P=Math.min(100,Math.max(15,Math.abs(h.contribution)/C*100)),$=h.contribution>.4?"bg-error":"bg-secondary-container";return`
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-semibold">${h.factor}: <span class="font-bold text-on-surface font-tabular-data">${h.value??"--"}</span></span>
              <span class="font-tabular-data font-bold text-error">+${h.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="${$} h-full rounded-full transition-all duration-700" style="width: ${P.toFixed(0)}%;"></div>
            </div>
            <span class="font-body-sm text-[11px] text-on-surface-variant italic">
              <strong>${e("assessment.action","Action:")}</strong> ${h.recommendation||"Prioritize verification and monitoring."}
            </span>
          </div>
        `}).join("")}}const v=a.querySelector("#riskReducingContainer");if(v){const y=t.risk_reducing_factors||[];if(y.length===0)v.innerHTML=`
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          ${e("assessment.noRiskReducing","No significant risk-reducing factors detected.")}
        </div>
      `;else{const C=Math.max(...y.map(h=>Math.abs(h.contribution)),.1);v.innerHTML=y.map(h=>{const P=Math.min(100,Math.max(15,Math.abs(h.contribution)/C*100));return`
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-medium">${h.factor}: <span class="font-bold text-on-surface font-tabular-data">${h.value??"--"}</span></span>
              <span class="font-tabular-data font-semibold text-emerald-600">${h.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-600 h-full rounded-full transition-all duration-700" style="width: ${P.toFixed(0)}%;"></div>
            </div>
          </div>
        `}).join("")}}const A=a.querySelector("#directivesContainer");if(A){const y=t.risk_drivers||[];y.length>0?A.innerHTML=y.slice(0,2).map((C,h)=>{const P=h===0?e("assessment.p1Priority","P1 PRIORITY"):e("assessment.p2Priority","P2 PRIORITY");return`
          <div class="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm border border-outline-variant/30">
            <span class="px-1.5 py-0.5 rounded ${h===0?"bg-error text-on-error":"bg-secondary text-on-secondary"} font-label-sm text-[10px] font-bold shrink-0 mt-0.5">${P}</span>
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm font-bold text-on-surface">${C.factor} ${e("assessment.resolution","Resolution")}</span>
              <p class="font-body-sm text-[12px] text-on-surface-variant mt-0.5">${C.recommendation}</p>
            </div>
          </div>
        `}).join(""):A.innerHTML=`
        <div class="p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-xs">
          ${e("assessment.nominalDirectives","Statutory progress remains nominal. Continue scheduled monitoring under Section 19 protocols.")}
        </div>
      `}}function he(a,t){const s=a.querySelector("#riskIncreasingContainer"),n=t&&!t.includes("uvicorn")?t:"Prediction service is temporarily unavailable. Please try again.";if(s){s.innerHTML=`
      <div class="p-space-sm rounded bg-error-container/40 border border-error text-on-surface flex flex-col gap-2">
        <div class="flex items-center gap-1.5 text-error font-bold text-label-sm">
          <span class="material-symbols-outlined text-[16px]">error</span>
          <span>${e("assessment.inferenceUnavailable","Inference Unavailable")}</span>
        </div>
        <span class="font-body-sm text-xs text-on-surface">${n}</span>
        <button class="mt-1 self-start px-2.5 py-1 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-xs font-semibold rounded border border-outline-variant/40 shadow-sm flex items-center gap-1 transition-colors" id="retryPredictionBtn" type="button">
          <span class="material-symbols-outlined text-[14px]">refresh</span>
          <span>${e("assessment.retryAssessment","Retry Assessment")}</span>
        </button>
      </div>
    `;const i=s.querySelector("#retryPredictionBtn");i&&i.addEventListener("click",()=>D(a))}}function ve(a,t,s){a.innerHTML=`
    <div class="px-margin-desktop py-space-xl flex flex-col gap-space-lg w-full">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
            <h1 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">${e("projects.title","National Projects Directory")}</h1>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            ${e("projects.subtitle","Explore active infrastructure corridors, cadastral verification stages, and predicted delay exposures across all state jurisdictions.")}
          </p>
        </div>
        <button class="px-space-md py-2 bg-primary text-on-primary font-label-md rounded-lg shadow-sm hover:bg-on-surface transition-all flex items-center gap-1.5 self-start sm:self-auto" id="newAssessmentBtn" type="button">
          <span class="material-symbols-outlined text-[18px]">add_chart</span>
          <span>${e("projects.newAssessment","New Project Assessment")}</span>
        </button>
      </div>

      <!-- Filters & Stats Strip -->
      <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-space-md border border-outline-variant/30">
        <div class="flex flex-wrap items-center gap-space-sm">
          <div class="flex flex-col">
            <label class="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">${e("projects.filterSector","Filter By Sector")}</label>
            <select class="bg-surface-container-low px-space-sm py-1.5 rounded font-label-sm text-label-sm text-on-surface border border-outline-variant/40" id="filterSector">
              <option value="all">${e("projects.allSectors","All Sectors (Highway, Rail, Power, Metro)")}</option>
              <option value="Highway">${e("dropdown.project_type.highway","Highways & Expressways")}</option>
              <option value="Railway">${e("dropdown.project_type.railway","Freight Corridors")}</option>
              <option value="Power">${e("dropdown.project_type.power","Renewable Energy")}</option>
              <option value="Metro">${e("dropdown.project_type.metro","Urban Mass Transit")}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label class="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">${e("projects.filterRisk","Risk Tier")}</label>
            <select class="bg-surface-container-low px-space-sm py-1.5 rounded font-label-sm text-label-sm text-on-surface border border-outline-variant/40" id="filterRisk">
              <option value="all">${e("projects.allRisks","All Risk Tiers")}</option>
              <option value="CRITICAL">${e("risk.critical","Critical")} (≥80%)</option>
              <option value="HIGH">${e("risk.high","High")} (60-80%)</option>
              <option value="MEDIUM">${e("risk.medium","Medium")} (40-60%)</option>
              <option value="LOW">${e("risk.low","Low")} (<40%)</option>
            </select>
          </div>
        </div>

        <div class="relative w-full sm:w-64 flex items-center">
          <input class="w-full pl-8 pr-8 py-1.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="directorySearchInput" placeholder="${e("projects.searchPlaceholder","Filter by name, ID, or district...")}" type="text"/>
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
                <th class="py-3 px-space-md font-bold">${e("projects.colId","Project ID")}</th>
                <th class="py-3 px-space-md font-bold">${e("projects.colName","Name & Corridor")}</th>
                <th class="py-3 px-space-md font-bold">${e("projects.colDistrict","State & District")}</th>
                <th class="py-3 px-space-md font-bold">${e("projects.colStage","Statutory Stage")}</th>
                <th class="py-3 px-space-md font-bold font-tabular-data">${e("projects.colProgress","Acquisition Progress")}</th>
                <th class="py-3 px-space-md font-bold font-tabular-data">${e("projects.colRisk","Predicted Delay Risk")}</th>
                <th class="py-3 px-space-md font-bold">${e("projects.colTier","Status Tier")}</th>
                <th class="py-3 px-space-md font-bold text-right">${e("projects.colAction","Actions")}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-container font-body-sm text-body-sm" id="directoryTableBody">
              <!-- Rendered via JS -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;const n=a.querySelector("#directoryTableBody"),i=a.querySelector("#directorySearchInput"),r=a.querySelector("#filterSector"),o=a.querySelector("#filterRisk"),l=a.querySelector("#directorySearchMicSlot");if(l&&i){const p=se(i,()=>w.getLanguage());p&&l.appendChild(p)}const d=()=>{if(!n)return;const p=((i==null?void 0:i.value)||"").toLowerCase().trim(),u=(r==null?void 0:r.value)||"all",b=(o==null?void 0:o.value)||"all",x=E.filter(c=>{const f=c.id.toLowerCase().includes(p)||c.name.toLowerCase().includes(p)||c.district.toLowerCase().includes(p)||c.state.toLowerCase().includes(p),g=u==="all"||c.type===u,v=b==="all"||c.riskLevel===b;return f&&g&&v});if(x.length===0){n.innerHTML=`<tr><td colspan="8" class="text-center py-6 text-on-surface-variant">${e("projects.noRecords","No matching records found in national database.")}</td></tr>`;return}n.innerHTML=x.map(c=>{const f=c.riskLevel||_(c.delayProbability),g=k(f);return`
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
                <div class="bg-primary h-full" style="width: ${c.progressPct}%"></div>
              </div>
            </div>
          </td>
          <td class="py-space-md px-space-md font-tabular-data font-bold ${M(f)}">${c.delayProbability}%</td>
          <td class="py-space-md px-space-md">
            <span class="px-2 py-0.5 rounded-full ${F(f)} font-label-sm text-xs font-bold border">${g}</span>
          </td>
          <td class="py-space-md px-space-md text-right">
            <div class="inline-flex items-center gap-1.5">
              <button class="dir-assess-btn px-2 py-1 bg-primary text-on-primary rounded font-label-sm text-xs font-bold hover:bg-surface-tint transition-colors" data-preset="${c.presetKey||"medium"}" type="button">
                ${e("projects.assessRisk","Assess Risk")}
              </button>
              <button class="dir-audit-btn px-2 py-1 bg-surface-container text-on-surface rounded font-label-sm text-xs font-medium hover:bg-surface-container-high transition-colors" data-id="${c.id}" type="button">
                ${e("projects.auditFile","Audit File")}
              </button>
            </div>
          </td>
        </tr>
      `}).join(""),n.querySelectorAll(".dir-assess-btn").forEach(c=>{c.addEventListener("click",()=>{const f=c.getAttribute("data-preset");t&&t(f)})}),n.querySelectorAll(".dir-audit-btn").forEach(c=>{c.addEventListener("click",()=>{const f=c.getAttribute("data-id");s&&s(f)})})};i&&i.addEventListener("input",d),r&&r.addEventListener("change",d),o&&o.addEventListener("change",d);const m=a.querySelector("#newAssessmentBtn");m&&t&&m.addEventListener("click",()=>t("medium")),d()}function ye(a,t="BF-NH-2024-09",s){const n=E.find(p=>p.id===t)||E[0],i=_(n.delayProbability),r=k(i);a.innerHTML=`
    <div class="flex flex-col w-full">
      <!-- Contextual Ribbon / Meta Bar -->
      <div class="w-full bg-surface-container-low px-gutter-desktop py-space-sm flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div class="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant flex-wrap">
          <span class="hover:text-on-surface cursor-pointer" id="backToProjectsBreadcrumb">${e("detail.breadcrumbProjects","Projects")}</span>
          <span>/</span>
          <span>${n.state}</span>
          <span>/</span>
          <span class="text-on-surface font-semibold font-tabular-data">${n.id}</span>
          <span>/</span>
          <span class="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-semibold">${e("detail.detailedAnalysis","Detailed Risk Analysis")}</span>
        </div>
        <div class="flex items-center gap-space-md font-label-sm text-label-sm">
          <span class="inline-flex items-center gap-1.5 text-on-surface-variant">
            <span class="material-symbols-outlined text-[15px] text-secondary">verified_user</span>
            ${e("detail.statutoryHash","Statutory Hash")}: <span class="font-tabular-data text-on-surface font-semibold">SHA256-7D88-${n.district.substring(0,3).toUpperCase()}</span>
          </span>
          <span class="text-outline-variant">•</span>
          <span class="inline-flex items-center gap-1 text-on-surface-variant">
            <span class="material-symbols-outlined text-[15px]">update</span>
            ${e("detail.modelInference","Model Inference")}: <span class="font-tabular-data text-on-surface">${e("detail.liveSynchronized","Live Synchronized")}</span>
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
                ${n.id}
              </span>
              <span class="px-space-xs py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded uppercase font-semibold">
                ${e("detail.nationalCorridor","National Corridor")} (${n.sector})
              </span>
              <span class="px-space-xs py-0.5 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded">
                ${e("detail.authorityWing","MoRTH / Authority Corridors Wing")}
              </span>
              <span class="px-space-xs py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded flex items-center gap-1">
                <span class="material-symbols-outlined text-[13px]">gavel</span>
                ${e("detail.stage","Stage")}: ${n.stage}
              </span>
            </div>
            <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              ${n.name}
            </h1>
            <div class="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                ${e("detail.district","District")}: ${n.district}, ${n.state}
              </span>
              <span>•</span>
              <span class="flex items-center gap-1 font-tabular-data">
                <span class="material-symbols-outlined text-[16px]">straighten</span>
                ${e("detail.alignment","Alignment")}: Ch. 124+400 to 168+200 (43.8 km)
              </span>
              <span>•</span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">account_balance</span>
                ${e("detail.cala","CALA: Competent Authority Land Acquisition")}, ${n.district} ${e("detail.division","Division")}
              </span>
            </div>
          </div>

          <!-- Action Panel Buttons -->
          <div class="flex flex-wrap items-center gap-space-sm w-full xl:w-auto shrink-0">
            <div id="detailReadAloudSlot"></div>
            <button class="px-space-md py-2 bg-secondary-container hover:bg-secondary text-on-surface hover:text-on-secondary font-label-md text-label-md rounded transition-colors flex items-center gap-1.5 shadow-sm font-bold" id="detailRerunBtn" type="button">
              <span class="material-symbols-outlined text-[18px]">bolt</span>
              <span>${e("detail.rerunAssessment","Re-run Assessment")}</span>
            </button>
            <button class="px-space-md py-2 bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface font-label-md text-label-md rounded transition-colors flex items-center gap-1.5 shadow-sm" id="draftDcOrderBtn" type="button">
              <span class="material-symbols-outlined text-[18px]">history_edu</span>
              <span>${e("detail.draftDcOrder","Draft DC Order")}</span>
            </button>
          </div>
        </div>

        <!-- Predictive Executive Risk Dossier Card -->
        <div class="w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-outline-variant/30">
          
          <!-- Severity Anchor Column -->
          <div class="lg:col-span-4 ${i==="CRITICAL"?"bg-error-container/40":i==="HIGH"?"bg-orange-50 dark:bg-orange-950/40":i==="MEDIUM"?"bg-amber-50 dark:bg-amber-950/40":"bg-emerald-50 dark:bg-emerald-950/40"} p-space-xl flex flex-col justify-between relative overflow-hidden">
            <div class="flex flex-col gap-space-md relative z-10">
              <div class="flex items-center justify-between">
                <span class="px-space-xs py-1 rounded ${F(i)} font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm border">
                  <span class="w-2 h-2 rounded-full bg-current animate-ping"></span>
                  ${r} ${e("detail.riskTier","Risk Tier")}
                </span>
                <span class="font-tabular-data text-label-sm font-semibold">${e("detail.engineXgb","XGB-26017 Engine")}</span>
              </div>
              <div class="flex flex-col pt-space-xs">
                <span class="font-label-md text-label-md uppercase tracking-wide text-on-surface-variant font-semibold">${e("detail.modelDelayProb","Model Delay Probability")}</span>
                <div class="flex items-baseline gap-space-xs">
                  <span class="font-headline-xl text-headline-xl font-tabular-data ${M(i)} font-extrabold tracking-tight">${n.delayProbability}%</span>
                  <span class="font-headline-sm text-headline-sm font-bold text-on-surface">${e("detail.probability","PROBABILITY")}</span>
                </div>
              </div>
              <div class="p-space-sm rounded bg-surface-container-lowest/80 shadow-sm backdrop-blur-sm flex flex-col gap-0.5 border border-outline-variant/30">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${e("detail.predictedStatutoryImpact","Predicted Statutory Impact")}</span>
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                  ${B(i)}
                </span>
              </div>
            </div>
            <div class="pt-space-lg flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant relative z-10">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                ${e("detail.modelConfidence","Model Confidence")}: <strong class="font-tabular-data font-semibold">91.4%</strong>
              </span>
              <span class="font-tabular-data text-label-sm">${e("detail.trainedRecords","N = 3,000,000 Trained")}</span>
            </div>
          </div>

          <!-- Contextual Field Geographic & Administrative Vector -->
          <div class="lg:col-span-8 p-space-xl flex flex-col justify-between gap-space-lg">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>${e("detail.totalRequisition","Total Land Requisition")}</span>
                  <span class="material-symbols-outlined text-[16px]">map</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">184.20 Ha</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">${e("detail.spreadVillages","Spread over 14 Revenue Villages")}</span>
              </div>
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>${e("detail.affectedLandowners","Affected Landowners")}</span>
                  <span class="material-symbols-outlined text-[16px]">groups</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">1,892 ${e("detail.khatas","Khatas")}</span>
                <span class="font-body-sm text-body-sm text-error font-medium">${e("detail.unresolvedMutations","410 mutations unresolved")}</span>
              </div>
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>${e("detail.sanctionedEscrow","Sanctioned Escrow")}</span>
                  <span class="material-symbols-outlined text-[16px]">payments</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">₹62.00 Cr</span>
                <span class="font-body-sm text-body-sm text-secondary font-medium">${e("detail.undisbursedEscrow","₹29.60 Cr undisbursed")}</span>
              </div>
            </div>

            <!-- Injunction & Field Vector -->
            <div class="flex flex-col gap-space-xs bg-surface-container-low rounded-lg p-space-md border border-outline-variant/30">
              <div class="flex items-center justify-between font-label-sm text-label-sm text-on-surface">
                <span class="font-bold flex items-center gap-1 text-secondary">
                  <span class="material-symbols-outlined text-[16px]">warning</span>
                  ${e("detail.statutoryCutoffLabel","Section 19 Statutory Cutoff Timeline:")}
                </span>
                <span class="font-tabular-data font-bold text-error">${e("detail.slippageRisk","+94 Days Slippage Risk")}</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-error h-full rounded-full" style="width: 78%"></div>
              </div>
              <span class="font-body-sm text-xs text-on-surface-variant">${e("detail.bottleneckFlag","Critical path bottleneck flagged in ownership verification and mutation camp clearance.")}</span>
            </div>
          </div>

        </div>

        <!-- Multi-Domain Progress Gauges Bar -->
        <div class="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md border border-outline-variant/30">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
            <div>
              <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">${e("detail.progressGaugesTitle","Multi-Domain Acquisition Progress Gauges")}</h2>
              <p class="font-body-sm text-body-sm text-on-surface-variant">${e("detail.progressGaugesSubtitle","Cadastral metrics synchronized with state e-Bhoomi records registry")}</p>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data px-space-xs py-1 rounded bg-surface-container font-semibold">
              ${e("detail.cycleAudit","Cycle Audit: FY26-Q1-ACTIVE")}
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md pt-space-xs">
            <!-- 1: Overall Progress -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${e("detail.overallProgress","Overall Progress")}</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">${n.progressPct}%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-primary h-full rounded-full" style="width: ${n.progressPct}%"></div>
              </div>
            </div>

            <!-- 2: Joint Survey -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${e("detail.jointSurvey","Joint Survey 3A")}</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">68%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-secondary-container h-full rounded-full" style="width: 68%"></div>
              </div>
            </div>

            <!-- 3: Award Declaration -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${e("detail.sec23Award","Sec 23 Award")}</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">34%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-secondary h-full rounded-full" style="width: 34%"></div>
              </div>
            </div>

            <!-- 4: Physical Possession -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${e("detail.physicalRow","Physical ROW")}</span>
                <span class="font-headline-sm text-headline-sm font-tabular-data text-on-surface font-bold">29%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-outline h-full rounded-full" style="width: 29%"></div>
              </div>
            </div>

            <!-- 5: Escrow DBT -->
            <div class="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm border border-outline-variant/20">
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${e("detail.dbtEscrow","DBT Escrow")}</span>
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
  `;const o=a.querySelector("#detailReadAloudSlot");if(o){const p=K(()=>`${e("detail.dossierFor","Project dossier for")} ${n.name}, ${e("projects.colId","Project ID")} ${n.id}. ${e("detail.state","State")}: ${n.state}, ${e("detail.district","District")}: ${n.district}. ${e("detail.statutoryStage","Current statutory stage")}: ${n.stage}. ${e("detail.overallProgress","Progress")}: ${n.progressPct}%. ${e("detail.modelDelayProb","Predicted delay risk")}: ${n.delayProbability}%, ${e("detail.riskTier","Risk Tier")}: ${k(i)}. ${B(i)}`,()=>w.getLanguage());o.appendChild(p)}const l=a.querySelector("#detailRerunBtn");l&&s&&l.addEventListener("click",()=>s(n.presetKey||"medium"));const d=a.querySelector("#draftDcOrderBtn");d&&d.addEventListener("click",()=>{we(n,i)});const m=a.querySelector("#backToProjectsBreadcrumb");m&&m.addEventListener("click",()=>{window.location.hash="#/projects"})}function we(a,t){var u,b,x,c,f;const n=(L[a.presetKey]||L.medium).values||{},i=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}),r=`BS-CALA/${a.id}/${new Date().getFullYear()}/PR-DRAFT`,o=document.getElementById("draftDcOrderModal");o&&o.remove();const l=document.createElement("div");l.id="draftDcOrderModal",l.className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto",l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true"),l.setAttribute("aria-labelledby","draftOrderModalTitle");const d=`${e("detail.modalPrototypeDraft","PROTOTYPE DRAFT ORDER - FOR GOVERNANCE DEMONSTRATION ONLY")}
${e("detail.modalSimulationMode","NOT AN OFFICIAL STATUTORY GOVERNMENT ORDER")}

${e("detail.modalOffice","OFFICE OF THE DISTRICT COLLECTOR & COMPETENT AUTHORITY (LAND ACQUISITION)")}
${a.district.toUpperCase()} DISTRICT, ${a.state.toUpperCase()}

${e("detail.modalRef","Memo Ref")}: ${r}
${e("detail.modalDate","Date")}: ${i}

SUB: ${e("detail.modalMemoSub","Pre-emptive Administrative Acceleration Directive under RFCTLARR Framework")}
REF: ${e("projects.colId","Project ID")}: ${a.id} | ${a.name} (${a.sector})
     ${e("detail.statutoryStage","Current Statutory Stage")}: ${a.stage} | ${e("detail.overallProgress","Current Physical Progress")}: ${a.progressPct}%

${e("detail.modalTeleFindings","1. TELEMETRY & PREDICTIVE AUDIT FINDINGS:")}
   - ${e("detail.modalTargetArea","Total Target Land Area")}: ${n.land_area_hectares||100} Hectares
   - ${e("detail.modalAffectedFam","Total Affected Families")}: ${n.affected_families||120} Families
   - ${e("detail.modalParcels","Total Cadastral Parcels")}: ${n.total_parcels||200}
   - ${e("detail.modelDelayProb","Model Delay Risk Probability")}: ${a.delayProbability}% (${k(t)})
   - ${e("detail.predictedStatutoryImpact","Statutory Impact")}: ${B(t)}

${e("detail.modalDirectives","2. ADMINISTRATIVE DIRECTIVES TO COMPETENT AUTHORITIES (CALA):")}
   ${e("detail.modalDirectiveA","a) Joint Site Inspection: The Special Land Acquisition Officer (SLAO) and Sub-Divisional Magistrate (SDM) shall initiate immediate expedited joint site inspection for remaining pending parcels.")}
   ${e("detail.modalDirectiveB","b) DBT Escrow Acceleration: Direct Benefit Transfer (DBT) reconciliation and compensation award payouts shall be expedited within a 14-day statutory timeline to prevent critical milestone slippage.")}
   ${e("detail.modalDirectiveC","c) Lok Adalat Conciliation: Outstanding objections and title verification issues must be scheduled for expedited hearing during the upcoming weekly revenue Lok Adalat.")}

DISCLAIMER:
${e("detail.modalDisclaimer","This document is a prototype draft generated automatically for governance simulation and review by the Bhoomi Sakha Early Delay Warning System. It does NOT constitute an official legal or statutory order unless vetted, approved, and officially signed by the District Collector and gazetted under the relevant state and central legislation.")}`;l.innerHTML=`
    <div class="relative w-full max-w-3xl bg-surface-container-lowest text-on-surface rounded-xl shadow-2xl border border-outline-variant/40 overflow-hidden my-8 max-h-[90vh] flex flex-col">
      <!-- Modal Header -->
      <div class="p-space-lg bg-surface-container-low border-b border-outline-variant/30 flex items-start justify-between gap-space-md shrink-0">
        <div>
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 uppercase tracking-wider">
              ${e("detail.modalPrototypeDraft","Prototype Draft")}
            </span>
            <span class="text-xs text-on-surface-variant font-medium">${e("detail.modalSimulationMode","Simulation Mode • Not Legally Enforceable")}</span>
          </div>
          <h3 id="draftOrderModalTitle" class="font-headline-sm text-headline-sm font-bold text-on-surface">
            ${e("detail.modalTitle","Draft DC Order / Administrative Directive")}
          </h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">
            ${e("detail.modalSubtitle","Pre-populated prototype administrative memo based on real-time project risk telemetry.")}
          </p>
        </div>
        <button id="closeDraftModalBtn" type="button" class="p-2 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors focus:ring-2 focus:ring-primary" aria-label="${e("detail.modalClose","Close modal")}">
          <span class="material-symbols-outlined text-xl">close</span>
        </button>
      </div>

      <!-- Modal Body (Printable Paper Look) -->
      <div class="p-space-lg overflow-y-auto space-y-space-md text-sm font-body">
        
        <!-- Official Watermark / Header Box -->
        <div class="p-4 rounded-lg bg-surface-container-low/70 border border-outline-variant/20 flex flex-col items-center text-center">
          <span class="material-symbols-outlined text-3xl text-primary mb-1">account_balance</span>
          <div class="font-bold text-base tracking-wide uppercase">${e("detail.modalOffice","Office of the District Collector & District Magistrate")}</div>
          <div class="text-xs text-on-surface-variant uppercase font-semibold">${e("detail.modalCala","Competent Authority Land Acquisition (CALA)")} • ${a.district}, ${a.state}</div>
          <div class="text-xs font-tabular-data text-on-surface-variant mt-1">${e("detail.modalRef","Ref")}: <span class="font-semibold text-on-surface">${r}</span> • ${e("detail.modalDate","Date")}: <span class="font-semibold text-on-surface">${i}</span></div>
        </div>

        <!-- Telemetry Summary Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">${e("projects.colId","Project ID")}</span>
            <span class="font-bold font-tabular-data text-on-surface">${a.id}</span>
          </div>
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">${e("detail.stage","Stage")}</span>
            <span class="font-bold text-on-surface truncate block">${a.stage}</span>
          </div>
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">${e("detail.modalAreaFamilies","Area / Families")}</span>
            <span class="font-bold font-tabular-data text-on-surface">${n.land_area_hectares||"—"} Ha / ${n.affected_families||"—"} Fam</span>
          </div>
          <div class="p-2.5 rounded ${t==="CRITICAL"?"bg-red-500/10 border-red-500/30":t==="HIGH"?"bg-orange-500/10 border-orange-500/30":"bg-amber-500/10 border-amber-500/30"} border">
            <span class="text-on-surface-variant block uppercase font-medium">${e("detail.predictedRisk","Predicted Risk")}</span>
            <span class="font-bold font-tabular-data ${M(t)}">${a.delayProbability}% (${k(t)})</span>
          </div>
        </div>

        <!-- Draft Order Content -->
        <div class="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30 space-y-3 font-mono text-xs leading-relaxed text-on-surface/90 select-text whitespace-pre-wrap">${d}</div>

        <!-- Warning Callout -->
        <div class="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs flex items-start gap-2.5">
          <span class="material-symbols-outlined text-lg shrink-0 mt-0.5 text-amber-600 dark:text-amber-400">gavel</span>
          <div>
            <strong>${e("detail.modalPrototypeDraft","Prototype Disclaimer")}:</strong> ${e("detail.modalDisclaimer","This draft memo is generated for governance evaluation within the Bhoomi Sakha prototype. It does not replace statutory procedures under the RFCTLARR Act 2013 or respective State Land Acquisition rules and carries no legal authority without official executive signature.")}
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-space-md bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between gap-space-sm shrink-0 flex-wrap">
        <button id="copyDraftBtn" type="button" class="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5 focus:ring-2 focus:ring-primary">
          <span class="material-symbols-outlined text-[18px]">content_copy</span>
          <span id="copyDraftLabel">${e("detail.modalCopyDraft","Copy Draft Text")}</span>
        </button>
        <div class="flex items-center gap-2">
          <button id="printDraftBtn" type="button" class="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5 focus:ring-2 focus:ring-primary">
            <span class="material-symbols-outlined text-[18px]">print</span>
            <span>${e("detail.modalPrint","Print / Save")}</span>
          </button>
          <button id="closeDraftModalFooterBtn" type="button" class="px-4 py-2 rounded-lg bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface font-label-md text-label-md transition-colors focus:ring-2 focus:ring-primary font-medium">
            ${e("detail.modalClose","Close")}
          </button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(l);const m=()=>{document.removeEventListener("keydown",p),l.remove();const g=document.getElementById("draftDcOrderBtn");g&&g.focus()},p=g=>{g.key==="Escape"&&m()};document.addEventListener("keydown",p),l.addEventListener("click",g=>{g.target===l&&m()}),(u=l.querySelector("#closeDraftModalBtn"))==null||u.addEventListener("click",m),(b=l.querySelector("#closeDraftModalFooterBtn"))==null||b.addEventListener("click",m),(x=l.querySelector("#copyDraftBtn"))==null||x.addEventListener("click",()=>{var g;(g=navigator.clipboard)!=null&&g.writeText&&navigator.clipboard.writeText(d).then(()=>{const v=l.querySelector("#copyDraftLabel");v&&(v.textContent=e("detail.modalCopied","Copied to Clipboard!"),setTimeout(()=>{v.textContent=e("detail.modalCopyDraft","Copy Draft Text")},2e3))}).catch(()=>{alert(e("detail.modalCopied","Copied to Clipboard!"))})}),(c=l.querySelector("#printDraftBtn"))==null||c.addEventListener("click",()=>{window.print()}),(f=l.querySelector("#closeDraftModalBtn"))==null||f.focus()}const Z="bhoomi_notifications_read",V=[{id:"notif-crit-1",category:"Risk Alert",severity:"critical",title:"Critical delay risk detected in current assessment",summary:"Delhi-Amritsar Expressway (Pkg 4) evaluated with 84.6% delay probability requiring urgent Section 19 intervention.",timestamp:"15 mins ago",actionRoute:"#/assessment?preset=critical",actionLabel:"Inspect Assessment"},{id:"notif-engine-2",category:"Engine",severity:"info",title:"Backend prediction engine connected",summary:"FastAPI service connected with 76 engineered cadastral features ready for live XGBoost inference.",timestamp:"1 hour ago",actionRoute:"#/dashboard",actionLabel:"View Dashboard"},{id:"notif-atten-3",category:"Officer Attention",severity:"high",title:"Assessment contains factors requiring officer attention",summary:"18 high-bottleneck parcel cases in Western Freight Corridor flagged for documentation backlog review.",timestamp:"3 hours ago",actionRoute:"#/assessment?preset=high",actionLabel:"Review Factors"},{id:"notif-stat-4",category:"System",severity:"info",title:"Risk assessment pipeline initialized",summary:"National Cadastral Matrix synchronized with 142 monitored infrastructure corridors.",timestamp:"Today, 09:30 AM",actionRoute:"#/projects",actionLabel:"Projects Directory"}];class Ce{constructor(){this.listeners=[]}getReadIds(){try{const t=localStorage.getItem(Z);return t?JSON.parse(t):[]}catch{return[]}}saveReadIds(t){try{localStorage.setItem(Z,JSON.stringify(t)),this.notifyListeners()}catch(s){console.error("Failed to save read notifications:",s)}}getAll(){const t=new Set(this.getReadIds());return V.map(s=>({...s,title:e(`notifications.items.${s.id}.title`,s.title),summary:e(`notifications.items.${s.id}.summary`,s.summary),category:e(`notifications.categories.${s.category}`,s.category),actionLabel:e(`notifications.items.${s.id}.actionLabel`,s.actionLabel),isRead:t.has(s.id)}))}getUnreadCount(){const t=new Set(this.getReadIds());return V.filter(s=>!t.has(s.id)).length}markAsRead(t){const s=new Set(this.getReadIds());s.add(t),this.saveReadIds(Array.from(s))}markAsUnread(t){const s=new Set(this.getReadIds());s.delete(t),this.saveReadIds(Array.from(s))}markAllAsRead(){const t=V.map(s=>s.id);this.saveReadIds(t)}resetAll(){this.saveReadIds([])}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(s=>s!==t)}}notifyListeners(){const t=this.getUnreadCount();this.listeners.forEach(s=>s(t))}}const R=new Ce;function ke(a,t){let s="all";function n(){const i=R.getAll(),r=R.getUnreadCount(),o=s==="unread"?i.filter(u=>!u.isRead):i;a.innerHTML=`
      <div class="px-margin-desktop py-space-xl flex flex-col gap-space-lg w-full max-w-5xl mx-auto">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md border-b border-outline-variant/30 pb-space-md">
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
              <h1 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">${e("notifications.title","System Notifications")}</h1>
              ${r>0?`
                <span class="px-2 py-0.5 rounded-full bg-error text-white font-label-sm text-xs font-bold font-tabular-data">
                  ${r} ${e("notifications.unread","Unread")}
                </span>
              `:`
                <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-xs font-semibold">
                  ${e("notifications.allCaughtUp","All Caught Up")}
                </span>
              `}
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant">
              ${e("notifications.subtitle","Application alerts, inference milestones, and statutory threshold notifications generated by Bhoomi Sakha.")}
            </p>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 self-start sm:self-auto">
            ${r>0?`
              <button class="px-space-md py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-xs font-semibold rounded border border-outline-variant/40 flex items-center gap-1.5 transition-colors" id="markAllReadBtn" type="button">
                <span class="material-symbols-outlined text-[16px]">done_all</span>
                <span>${e("notifications.markAllRead","Mark All Read")}</span>
              </button>
            `:`
              <button class="px-space-md py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-sm text-xs font-medium rounded border border-outline-variant/30 flex items-center gap-1.5 transition-colors" id="resetNotifsBtn" type="button">
                <span class="material-symbols-outlined text-[16px]">refresh</span>
                <span>${e("notifications.resetDemoAlerts","Reset Demo Alerts")}</span>
              </button>
            `}
          </div>
        </div>

        <!-- Filter Controls -->
        <div class="flex items-center gap-2">
          <button class="px-3 py-1 rounded font-label-sm text-xs font-semibold transition-all ${s==="all"?"bg-primary text-on-primary shadow-sm":"bg-surface-container-low text-on-surface-variant hover:text-on-surface"}" id="filterAllBtn" type="button">
            ${e("notifications.filterAll","All")} (${i.length})
          </button>
          <button class="px-3 py-1 rounded font-label-sm text-xs font-semibold transition-all ${s==="unread"?"bg-primary text-on-primary shadow-sm":"bg-surface-container-low text-on-surface-variant hover:text-on-surface"}" id="filterUnreadBtn" type="button">
            ${e("notifications.filterUnread","Unread")} (${r})
          </button>
        </div>

        <!-- Notification List -->
        <div class="flex flex-col gap-3" id="notificationsList">
          ${o.length===0?`
            <div class="p-space-xl bg-surface-container-lowest rounded-xl border border-outline-variant/30 text-center flex flex-col items-center justify-center gap-2">
              <span class="material-symbols-outlined text-[36px] text-on-surface-variant/60">notifications_off</span>
              <span class="font-headline-sm text-base text-on-surface font-bold">${e("notifications.noNotifications","No notifications to display")}</span>
              <p class="font-body-sm text-xs text-on-surface-variant">${e("notifications.noNotificationsDesc","There are currently no notifications under this filter.")}</p>
            </div>
          `:o.map(u=>{const b=u.severity==="critical"?"border-l-4 border-l-red-500 bg-red-50/20 dark:bg-red-950/20":u.severity==="high"?"border-l-4 border-l-orange-500 bg-orange-50/20 dark:bg-orange-950/20":"border-l-4 border-l-sky-500 bg-sky-50/20 dark:bg-sky-950/20",x=u.isRead?"opacity-85 border border-outline-variant/20 bg-surface-container-lowest":"border border-outline-variant/50 shadow-sm";return`
              <div class="p-space-md rounded-xl ${b} ${x} bg-surface-container-lowest flex flex-col md:flex-row md:items-center justify-between gap-space-sm transition-all" data-id="${u.id}">
                <div class="flex items-start gap-space-sm">
                  <div class="mt-0.5 shrink-0">
                    ${u.isRead?`
                      <span class="w-2.5 h-2.5 rounded-full bg-surface-container-high block"></span>
                    `:`
                      <span class="w-2.5 h-2.5 rounded-full bg-secondary-container block ring-2 ring-surface-container-lowest"></span>
                    `}
                  </div>
                  <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="px-2 py-0.5 rounded font-label-sm text-[10px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface">
                        ${u.category}
                      </span>
                      <span class="font-body-sm text-xs text-on-surface-variant font-tabular-data">${u.timestamp}</span>
                      ${u.isRead?"":`
                        <span class="px-1.5 py-0.2 rounded text-[10px] bg-secondary-fixed text-on-secondary-fixed font-bold uppercase">${e("notifications.newTag","New")}</span>
                      `}
                    </div>
                    <h3 class="font-headline-sm text-base text-on-surface font-semibold ${u.isRead?"":"font-bold"}">
                      ${u.title}
                    </h3>
                    <p class="font-body-sm text-xs text-on-surface-variant max-w-2xl">
                      ${u.summary}
                    </p>
                  </div>
                </div>

                <!-- Card Actions -->
                <div class="flex items-center gap-2 shrink-0 self-end md:self-center pl-6 md:pl-0">
                  <button class="notif-read-btn p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-id="${u.id}" aria-label="${e("common.readAloud","Read aloud")}" title="${e("common.readAloud","Read aloud")}" type="button">
                    <span class="material-symbols-outlined text-[18px]">volume_up</span>
                  </button>
                  <a class="px-3 py-1.5 rounded font-label-sm text-xs font-semibold bg-primary text-on-primary hover:bg-surface-tint transition-colors flex items-center gap-1" href="${u.actionRoute}">
                    <span>${u.actionLabel}</span>
                    <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                  <button class="toggle-read-btn p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-id="${u.id}" title="${u.isRead?e("notifications.markAsUnread","Mark as Unread"):e("notifications.markAsRead","Mark as Read")}" type="button">
                    <span class="material-symbols-outlined text-[18px]">
                      ${u.isRead?"mark_email_unread":"check_circle"}
                    </span>
                  </button>
                </div>
              </div>
            `}).join("")}
        </div>

      </div>
    `;const l=a.querySelector("#markAllReadBtn");l&&l.addEventListener("click",()=>{R.markAllAsRead(),n(),t&&t()});const d=a.querySelector("#resetNotifsBtn");d&&d.addEventListener("click",()=>{R.resetAll(),n(),t&&t()});const m=a.querySelector("#filterAllBtn");m&&m.addEventListener("click",()=>{s="all",n()});const p=a.querySelector("#filterUnreadBtn");p&&p.addEventListener("click",()=>{s="unread",n()}),a.querySelectorAll(".notif-read-btn").forEach(u=>{u.addEventListener("click",b=>{b.stopPropagation();const x=u.getAttribute("data-id"),c=R.getAll().find(f=>f.id===x);if(c){const f=u.querySelector(".material-symbols-outlined");T.speak(`${c.category} alert. ${c.title}. ${c.summary}`,w.getLanguage(),g=>{f&&(f.textContent=g==="speaking"?"pause":"volume_up")})}})}),a.querySelectorAll(".toggle-read-btn").forEach(u=>{u.addEventListener("click",b=>{b.stopPropagation();const x=u.getAttribute("data-id"),c=R.getAll().find(f=>f.id===x);c!=null&&c.isRead?R.markAsUnread(x):R.markAsRead(x),n(),t&&t()})})}n()}const ee="bhoomi_theme",S={SYSTEM:"system",LIGHT:"light",DARK:"dark"};class _e{constructor(){this.mediaQuery=window.matchMedia("(prefers-color-scheme: dark)"),this.listeners=[],this.currentTheme=this.getStoredTheme()}init(){this.applyTheme(this.currentTheme),this.mediaQuery.addEventListener("change",()=>{this.currentTheme===S.SYSTEM&&this.applyTheme(S.SYSTEM)})}getStoredTheme(){try{const t=localStorage.getItem(ee);if(t&&Object.values(S).includes(t))return t}catch{}return S.SYSTEM}getResolvedTheme(){return this.currentTheme===S.SYSTEM?this.mediaQuery.matches?S.DARK:S.LIGHT:this.currentTheme}setTheme(t){if(Object.values(S).includes(t)){this.currentTheme=t;try{localStorage.setItem(ee,t)}catch(s){console.warn("Could not persist theme to localStorage:",s)}this.applyTheme(t),this.notifyListeners()}}applyTheme(t){const s=t===S.DARK||t===S.SYSTEM&&this.mediaQuery.matches,n=document.documentElement;s?n.classList.add("dark"):n.classList.remove("dark"),n.setAttribute("data-theme",t)}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(s=>s!==t)}}notifyListeners(){this.listeners.forEach(t=>t(this.currentTheme,this.getResolvedTheme()))}}const O=new _e;class Ae{constructor(){this.container=document.getElementById("appViewContainer"),this.currentView="dashboard",this.isBackendOnline=!1,this.healthInterval=null,this.clockInterval=null}init(){O.init(),this.setupThemeToggle(),this.setupLanguageToggle(),this.setupNavigation(),this.setupMobileMenu(),this.updateLanguageUI(),this.setupClock(),this.setupNotificationBell(),this.startHealthPolling(),this.handleRouting(),window.addEventListener("hashchange",()=>this.handleRouting());const t=document.getElementById("brandHeaderHome");t&&(t.addEventListener("click",()=>{window.location.hash="#/dashboard"}),t.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),window.location.hash="#/dashboard")}));const s=document.getElementById("backendStatusPill");s&&(s.addEventListener("click",()=>this.checkBackendHealth(!0)),s.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.checkBackendHealth(!0))}))}setupNotificationBell(){const t=document.getElementById("notifBellBtn");t&&t.addEventListener("click",()=>{window.location.hash="#/notifications"}),this.updateNotificationBadge(),R.subscribe(()=>this.updateNotificationBadge())}updateNotificationBadge(){const t=R.getUnreadCount(),s=document.getElementById("notifBellBadge"),n=document.getElementById("notifBellBtn");s&&(t>0?(s.textContent=t>9?"9+":t,s.classList.remove("hidden")):(s.textContent="",s.classList.add("hidden"))),n&&n.setAttribute("title",t>0?`${t} Unread System Notifications`:"No Unread Notifications")}setupThemeToggle(){const t=document.getElementById("themeToggleBtn"),s=document.getElementById("themeMenu"),n=document.getElementById("themeIcon"),i=document.querySelectorAll(".theme-option-btn"),r=o=>{const l={system:"brightness_auto",light:"light_mode",dark:"dark_mode"};n&&(n.textContent=l[o]||"brightness_auto"),i.forEach(d=>{const m=d.getAttribute("data-theme"),p=d.querySelector(".check-icon");m===o?(d.classList.add("bg-surface-container","font-semibold"),p&&p.classList.remove("hidden")):(d.classList.remove("bg-surface-container","font-semibold"),p&&p.classList.add("hidden"))})};r(O.currentTheme),O.subscribe(o=>r(o)),t&&s&&(t.addEventListener("click",o=>{if(o.stopPropagation(),!s.classList.contains("hidden"))s.classList.add("hidden"),t.setAttribute("aria-expanded","false");else{s.classList.remove("hidden"),t.setAttribute("aria-expanded","true");const d=s.querySelector(".theme-option-btn");d&&d.focus()}}),i.forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("data-theme");O.setTheme(l),s.classList.add("hidden"),t.setAttribute("aria-expanded","false"),t.focus()})}),document.addEventListener("click",o=>{!t.contains(o.target)&&!s.contains(o.target)&&(s.classList.add("hidden"),t.setAttribute("aria-expanded","false"))}),document.addEventListener("keydown",o=>{o.key==="Escape"&&!s.classList.contains("hidden")&&(s.classList.add("hidden"),t.setAttribute("aria-expanded","false"),t.focus())}))}setupLanguageToggle(){const t=document.getElementById("langToggleBtn"),s=document.getElementById("langMenu"),n=document.getElementById("langCurrentLabel"),i=document.querySelectorAll(".lang-option-btn"),r=o=>{n&&(n.textContent=o.toUpperCase()),i.forEach(l=>{const d=l.getAttribute("data-lang"),m=l.querySelector(".check-icon");d===o?(l.classList.add("bg-surface-container","font-semibold"),l.setAttribute("aria-selected","true"),m&&m.classList.remove("hidden")):(l.classList.remove("bg-surface-container","font-semibold"),l.setAttribute("aria-selected","false"),m&&m.classList.add("hidden"))}),this.updateLanguageUI()};r(w.getLanguage()),w.subscribe(o=>{r(o),this.handleRouting()}),t&&s&&(t.addEventListener("click",o=>{if(o.stopPropagation(),!s.classList.contains("hidden"))s.classList.add("hidden"),t.setAttribute("aria-expanded","false");else{s.classList.remove("hidden"),t.setAttribute("aria-expanded","true");const d=s.querySelector('[aria-selected="true"]')||i[0];d&&d.focus()}}),i.forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("data-lang");w.setLanguage(l),s.classList.add("hidden"),t.setAttribute("aria-expanded","false"),t.focus()})}),document.addEventListener("click",o=>{!t.contains(o.target)&&!s.contains(o.target)&&(s.classList.add("hidden"),t.setAttribute("aria-expanded","false"))}),document.addEventListener("keydown",o=>{o.key==="Escape"&&!s.classList.contains("hidden")&&(s.classList.add("hidden"),t.setAttribute("aria-expanded","false"),t.focus())}))}setupMobileMenu(){const t=document.getElementById("mobileMenuToggleBtn"),s=document.getElementById("mobileNavigationMenu"),n=document.getElementById("mobileMenuIcon");if(!t||!s)return;const i=()=>{s.classList.add("hidden"),t.setAttribute("aria-expanded","false"),n&&(n.textContent="menu")},r=()=>{s.classList.remove("hidden"),t.setAttribute("aria-expanded","true"),n&&(n.textContent="close")};t.addEventListener("click",o=>{o.stopPropagation(),s.classList.contains("hidden")?r():i()}),s.querySelectorAll(".mobile-nav-tab").forEach(o=>{o.addEventListener("click",()=>{i()})}),document.addEventListener("click",o=>{!t.contains(o.target)&&!s.contains(o.target)&&i()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&!s.classList.contains("hidden")&&(i(),t.focus())})}updateLanguageUI(){const t=e("header.platformName","Bhoomi Sakha"),s=e("header.subtitle","Predictive Land Acquisition Delay-Risk Platform"),n=e("header.sihBadge","SIH 2026 • PS ID 26017");document.title=`${t} | ${s} (${n})`,document.querySelectorAll(".nav-tab").forEach(h=>{const P=h.getAttribute("data-target");if(P){const $=h.querySelector("span:not(.material-symbols-outlined)")||h;$.textContent=e(`nav.${P}`,$.textContent)}});const r=document.getElementById("breadcrumbRoot");r&&(r.textContent=e("header.commandCenter","Command Center"));const o=document.getElementById("currentViewName");o&&this.currentView&&(o.textContent=e(`views.${this.currentView}`,o.textContent));const l=document.getElementById("brandHeaderTitle");l&&(l.textContent=t);const d=document.getElementById("brandHeaderBadge");d&&(d.textContent=n);const m=document.getElementById("brandHeaderSubtitle");m&&(m.textContent=s);const p=document.getElementById("officerName");p&&(p.textContent=e("header.officerName","Dr. R. K. Sharma"));const u=document.getElementById("officerRole");u&&(u.textContent=e("header.officerRole","IAS, Land Commissioner"));const b=document.getElementById("statutoryCutoffLabel");b&&(b.textContent=e("header.statutoryCutoff","Statutory Cutoff: 48h Remaining"));const x=document.getElementById("liveISTLabel");x&&(x.textContent=`${e("header.istClock","IST")}:`);const c=document.getElementById("footerDescription");c&&(c.textContent=e("footer.description",c.textContent));const f=document.getElementById("footerAuditNode");f&&(f.textContent=e("footer.auditNode","Audit Node: 0x88F2B7"));const g=document.getElementById("footerProtocol");g&&(g.textContent=e("footer.protocol","Precision Cadastral Verification Protocol v4.1"));const v=document.getElementById("notifBellBtn");v&&v.setAttribute("title",e("header.openNotifications","System Notifications"));const A=document.getElementById("themeToggleBtn");A&&(A.setAttribute("title",e("header.toggleTheme","Color Theme")),A.setAttribute("aria-label",e("header.toggleTheme","Toggle color theme")));const y=document.getElementById("langToggleBtn");y&&(y.setAttribute("title",e("header.selectLanguage","Language")),y.setAttribute("aria-label",e("header.selectLanguage","Select application language")));const C=document.getElementById("mobileMenuToggleBtn");C&&C.setAttribute("aria-label",e("header.toggleMenu","Open navigation menu")),this.updateBackendStatusUI()}updateBackendStatusUI(){var s,n;const t=document.getElementById("backendStatusText");if(t)if(this.isBackendOnline){let i=e("header.statusConnected","FastAPI Connected • XGBoost Engine Active");(n=(s=this.cachedMetadata)==null?void 0:s.model)!=null&&n.version&&(i=`${i} (v${this.cachedMetadata.model.version})`),t.textContent=i}else t.textContent=e("header.statusUnavailable","Backend Unavailable • Click to Retry")}setupNavigation(){document.querySelectorAll(".nav-tab").forEach(s=>{s.addEventListener("click",()=>{const n=s.getAttribute("data-target");n&&this.updateNavState(n)})})}updateNavState(t){document.querySelectorAll(".nav-tab").forEach(i=>{const r=i.getAttribute("data-target")===t;i.classList.contains("mobile-nav-tab")?r?(i.className="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors bg-primary-container text-on-primary font-semibold shadow-sm focus:ring-2 focus:ring-primary",i.setAttribute("aria-current","page")):(i.className="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors text-on-surface-variant hover:text-on-surface hover:bg-surface-container focus:ring-2 focus:ring-primary",i.removeAttribute("aria-current")):r?(i.className="nav-tab px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-label-md rounded-lg shadow-sm font-semibold focus-visible:ring-2 focus-visible:ring-primary",i.setAttribute("aria-current","page")):(i.className="nav-tab px-space-md py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded focus-visible:ring-2 focus-visible:ring-primary",i.removeAttribute("aria-current"))});const n=document.getElementById("currentViewName");n&&(n.textContent=e(`views.${t}`,"Executive Command Center"))}handleRouting(){const t=window.location.hash||"#/dashboard",[s,n]=t.replace("#/","").split("?"),i=new URLSearchParams(n||"");switch(this.currentView=s||"dashboard",this.updateNavState(this.currentView),window.scrollTo({top:0,behavior:"smooth"}),this.currentView){case"notifications":ke(this.container,()=>this.updateNotificationBadge());break;case"assessment":const r=i.get("preset")||"medium";fe(this.container,r);break;case"projects":ve(this.container,l=>{window.location.hash=`#/assessment?preset=${l}`},l=>{window.location.hash=`#/audit?id=${l}`});break;case"audit":const o=i.get("id")||"BF-NH-2024-09";ye(this.container,o,l=>{window.location.hash=`#/assessment?preset=${l}`});break;case"dashboard":default:this.currentView="dashboard",me(this.container,l=>{window.location.hash=`#/assessment?preset=${l}`},l=>{window.location.hash=`#/audit?id=${l}`});break}}setupClock(){const t=()=>{const s=document.getElementById("liveISTClock");if(s){const n=new Date,i={timeZone:"Asia/Kolkata",hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"};s.textContent=n.toLocaleTimeString("en-GB",i)}};t(),this.clockInterval=setInterval(t,1e3)}async checkBackendHealth(t=!1){var r,o;const s=document.getElementById("backendStatusDot"),n=document.getElementById("backendStatusText");s&&(s.innerHTML='<span class="animate-pulse relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>'),n&&!this.isBackendOnline&&(n.textContent=e("header.statusConnecting","Backend: Connecting..."),n.className="font-label-sm text-label-sm text-on-surface-variant font-tabular-data");const i=await W.checkHealth();if(i.online&&i.modelLoaded){let l=e("header.statusConnected","FastAPI Connected • XGBoost Engine Active");try{this.cachedMetadata||(this.cachedMetadata=await W.getMetadata()),(o=(r=this.cachedMetadata)==null?void 0:r.model)!=null&&o.version&&(l=`${l} (v${this.cachedMetadata.model.version})`)}catch{}s&&(s.innerHTML=`
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        `),n&&(n.textContent=l,n.className="font-label-sm text-label-sm text-on-surface font-tabular-data font-semibold"),!this.isBackendOnline&&t&&this.showToast(e("header.statusConnected","FastAPI Connected • XGBoost Engine Active"),"success"),this.isBackendOnline=!0}else s&&(s.innerHTML=`
          <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        `),n&&(n.textContent=e("header.statusUnavailable","Backend Unavailable • Click to Retry"),n.className="font-label-sm text-label-sm text-red-600 dark:text-red-400 font-tabular-data font-semibold"),(this.isBackendOnline||t)&&this.showToast(e("header.statusUnavailable","Backend Unavailable • Click to Retry"),"warning"),this.isBackendOnline=!1}startHealthPolling(){this.checkBackendHealth(),this.healthInterval=setInterval(()=>this.checkBackendHealth(),6e3)}showToast(t,s="info"){const n=document.getElementById("toastContainer");if(!n)return;const i=document.createElement("div"),r=s==="success"?"bg-primary-container text-on-primary border-secondary":"bg-amber-100 text-amber-950 border-amber-400";i.className=`${r} px-4 py-3 rounded-lg shadow-lg border text-sm max-w-md pointer-events-auto flex items-start gap-2 transition-all duration-300 transform translate-y-2 opacity-0`,i.innerHTML=`
      <span class="material-symbols-outlined text-[18px] text-secondary-container mt-0.5">info</span>
      <span class="flex-1">${t}</span>
    `,n.appendChild(i),requestAnimationFrame(()=>{i.classList.remove("translate-y-2","opacity-0")}),setTimeout(()=>{i.classList.add("opacity-0","translate-y-2"),setTimeout(()=>i.remove(),300)},4500)}}document.addEventListener("DOMContentLoaded",()=>{new Ae().init()});

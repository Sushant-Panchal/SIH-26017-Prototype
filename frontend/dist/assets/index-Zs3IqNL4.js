(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const q={low:{id:"preset-low",name:"NH-44 Bypass Ph. 2",subtitle:"Low Delay • Clear Title",tag:"LOW RISK",values:{project_type:"Highway",land_type:"Agricultural",priority:"Normal",current_stage:"Notification",complexity_score:22.4,total_parcels:350,affected_families:48,land_area_hectares:65.2,planned_duration_days:420,days_since_notification:45,days_elapsed:45,days_in_current_stage:45,planned_stage_duration_days:60,acquisition_progress_pct:88.5,acquisition_velocity_pct_per_30d:14.8,parcels_pending:40,parcels_acquired:310,possession_pending_parcels:25,possession_progress_pct:92.8,documents_required:350,documents_pending:18,documents_verified:332,documentation_completion_pct:94.9,compensation_pending_cases:12,compensation_pending_amount:3.5,compensation_completion_pct:96.2,avg_compensation_delay_days:8,approvals_pending:1,overdue_approvals:0,avg_approval_delay_days:4,pending_objections:1,active_legal_disputes:0,ownership_disputes:0,court_stay_cases:0,rr_pending_cases:4,rr_completion_pct:94,schedule_variance_days:-12,milestones_overdue:0,pending_stakeholder_actions:2,avg_stakeholder_response_days:5.2,stakeholder_responsiveness_score:8.9,historical_avg_delay_days:14}},medium:{id:"preset-medium",name:"Western Freight Corridor",subtitle:"Baseline Model • FY26-Q1",tag:"MEDIUM RISK",values:{project_type:"Highway",land_type:"Agricultural",priority:"Normal",current_stage:"Notification",complexity_score:47.7,total_parcels:233,affected_families:113,land_area_hectares:132.47,planned_duration_days:607,days_since_notification:30,days_elapsed:30,days_in_current_stage:30,planned_stage_duration_days:26,acquisition_progress_pct:6.01,acquisition_velocity_pct_per_30d:6.13,parcels_pending:219,parcels_acquired:14,possession_pending_parcels:218,possession_progress_pct:6.47,documents_required:241,documents_pending:232,documents_verified:9,documentation_completion_pct:3.73,compensation_pending_cases:105,compensation_pending_amount:10.95,compensation_completion_pct:6.2,avg_compensation_delay_days:52.68,approvals_pending:5,overdue_approvals:2,avg_approval_delay_days:41.04,pending_objections:0,active_legal_disputes:0,ownership_disputes:0,court_stay_cases:0,rr_pending_cases:47,rr_completion_pct:4.08,schedule_variance_days:-7.19,milestones_overdue:1,pending_stakeholder_actions:7,avg_stakeholder_response_days:28.59,stakeholder_responsiveness_score:5.14,historical_avg_delay_days:100.8}},high:{id:"preset-high",name:"Docs Backlog Ph. 1",subtitle:"High Bottleneck • Stagnation Watchlist",tag:"HIGH RISK",values:{project_type:"Railway",land_type:"Commercial",priority:"Critical",current_stage:"Survey",complexity_score:68.5,total_parcels:1120,affected_families:420,land_area_hectares:210.5,planned_duration_days:900,days_since_notification:180,days_elapsed:180,days_in_current_stage:90,planned_stage_duration_days:60,acquisition_progress_pct:35,acquisition_velocity_pct_per_30d:2.5,parcels_pending:728,parcels_acquired:392,possession_pending_parcels:610,possession_progress_pct:28,documents_required:1120,documents_pending:580,documents_verified:540,documentation_completion_pct:48.2,compensation_pending_cases:240,compensation_pending_amount:42.6,compensation_completion_pct:38.5,avg_compensation_delay_days:72,approvals_pending:6,overdue_approvals:3,avg_approval_delay_days:65,pending_objections:18,active_legal_disputes:5,ownership_disputes:4,court_stay_cases:1,rr_pending_cases:85,rr_completion_pct:32,schedule_variance_days:54,milestones_overdue:3,pending_stakeholder_actions:9,avg_stakeholder_response_days:38,stakeholder_responsiveness_score:3.8,historical_avg_delay_days:95}},critical:{id:"preset-critical",name:"Court Injunction HC",subtitle:"Critical Hold • High Court Stay Active",tag:"CRITICAL RISK",values:{project_type:"Metro",land_type:"Industrial",priority:"Critical",current_stage:"Compensation",complexity_score:84,total_parcels:850,affected_families:610,land_area_hectares:184.2,planned_duration_days:1200,days_since_notification:360,days_elapsed:360,days_in_current_stage:180,planned_stage_duration_days:90,acquisition_progress_pct:22,acquisition_velocity_pct_per_30d:.8,parcels_pending:663,parcels_acquired:187,possession_pending_parcels:620,possession_progress_pct:18,documents_required:850,documents_pending:640,documents_verified:210,documentation_completion_pct:24.7,compensation_pending_cases:380,compensation_pending_amount:85.4,compensation_completion_pct:18,avg_compensation_delay_days:118,approvals_pending:9,overdue_approvals:6,avg_approval_delay_days:98,pending_objections:42,active_legal_disputes:14,ownership_disputes:8,court_stay_cases:4,rr_pending_cases:140,rr_completion_pct:14,schedule_variance_days:145,milestones_overdue:6,pending_stakeholder_actions:14,avg_stakeholder_response_days:52,stakeholder_responsiveness_score:2.1,historical_avg_delay_days:135}}},K=[{id:"BF-NH-2024-09",name:"Delhi-Amritsar Expressway (Pkg 4)",type:"Highway",sector:"National Highway",district:"Ludhiana",state:"Punjab",stage:"Sec 19 Declaration",progressPct:42,delayProbability:84.6,riskLevel:"CRITICAL",badgeClass:"bg-error-container text-on-error-container",presetKey:"critical"},{id:"BF-RL-2023-14",name:"Western Dedicated Freight Corridor",type:"Railway",sector:"Freight Rail Corridor",district:"Vadodara",state:"Gujarat",stage:"Compensation Award",progressPct:68,delayProbability:71.2,riskLevel:"HIGH",badgeClass:"bg-secondary-fixed text-on-secondary-fixed-variant",presetKey:"high"},{id:"BF-EN-2024-03",name:"Bhadla Solar Ultra Park Ext",type:"Power",sector:"Renewable Energy Grid",district:"Jodhpur",state:"Rajasthan",stage:"Joint Survey 3A",progressPct:31,delayProbability:58.4,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"},{id:"BF-NH-2024-22",name:"NH-66 Coastal Highway Expansion",type:"Highway",sector:"National Highway",district:"Udupi",state:"Karnataka",stage:"Notification",progressPct:54,delayProbability:42.3,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"},{id:"BF-MT-2024-05",name:"Pune Metro Line 3 Corridor",type:"Metro",sector:"Urban Mass Transit",district:"Pune",state:"Maharashtra",stage:"Rehabilitation",progressPct:79,delayProbability:34.8,riskLevel:"LOW",badgeClass:"bg-emerald-100 text-emerald-900 border border-emerald-300",presetKey:"low"},{id:"BF-IN-2024-18",name:"Dholera Special Investment Region Ph 1",type:"Industrial",sector:"Industrial Node / SEZ",district:"Ahmedabad",state:"Gujarat",stage:"Valuation",progressPct:62,delayProbability:46.1,riskLevel:"MEDIUM",badgeClass:"bg-amber-100 text-amber-900 border border-amber-300",presetKey:"medium"}],ze={auth:{loginTitle:"Sign in to Bhoomi Sakha",citizenTab:"Citizen / Landowner",officerTab:"Revenue Officer",citizenWelcomeSubtitle:"Landholder Rights, Grievance Redressal & Predictive Delay Analytics",officerWelcomeSubtitle:"National Land Acquisition Command & Case Management Portal",citizenSignInBtn:"Enter Citizen Portal",officerSignInBtn:"Enter Officer Command Center",citizenRegisterBtn:"Create Citizen Account",officerRegisterBtn:"Register Officer Account",emailLabel:"Email Address",emailPlaceholder:"citizen@example.com",officerEmailPlaceholder:"officer.name@gov.in",passwordLabel:"Password",passwordPlaceholder:"Enter your password",showPassword:"Show password",hidePassword:"Hide password",fullNameLabel:"Full Name",fullNamePlaceholder:"e.g. Rameshwar Patil",districtLabel:"District",districtPlaceholder:"e.g. Pune",phoneLabel:"Phone Number",phonePlaceholder:"e.g. +91 9822001122",officerKeyLabel:"Officer Registration Authorization Key",signingIn:"Authenticating...",registering:"Creating Account...",needAccount:"Don't have an account yet?",haveAccount:"Already have an account?",switchToRegister:"Create an Account",switchToLogin:"Sign In instead",signInBtn:"Sign In",signOutBtn:"Sign Out",signedOutToast:"Signed out successfully.",accessDeniedCitizen:"Access Restricted: Citizen accounts cannot access the Officer Command Center.",accessDeniedOfficer:"Access Restricted: Officer accounts cannot access Citizen-only views directly.",sessionVerifying:"Verifying secure cadastral session..."},header:{platformName:"Bhoomi Sakha",sihBadge:"SIH 2026 • PS ID 26017",subtitle:"Predictive Land Acquisition Delay-Risk Platform",statusConnecting:"Backend: Connecting...",statusConnected:"FastAPI Connected • XGBoost Engine Active",statusUnavailable:"Backend Unavailable • Click to Retry",commandCenter:"Command Center",statutoryCutoff:"Statutory Cutoff: 48h Remaining",istClock:"IST",officerName:"Dr. R. K. Sharma",officerRole:"IAS, Land Commissioner",openNotifications:"Open notifications",toggleTheme:"Toggle color theme",selectLanguage:"Select application language",toggleMenu:"Open navigation menu"},footer:{description:"Smart India Hackathon 2026 • Problem Statement ID 26017 • National Land Records Modernization Program (NLRMP) Architecture",auditNode:"Audit Node: 0x88F2B7",protocol:"Precision Cadastral Verification Protocol v4.1"},nav:{dashboard:"Dashboard",cases:"Case Queue",assessment:"Risk Assessment",projects:"Projects Directory",audit:"Audit Detail",notifications:"Notifications",citizenDashboard:"Dashboard",citizenLands:"My Land",citizenRisk:"Check Delay Risk",citizenComplaint:"File Grievance",citizenCases:"My Cases"},views:{dashboard:"National Cadastral Matrix (Overview)",cases:"Acquisition Grievance & Case Queue","officer-case-workspace":"Officer Case Workspace & Dossier",assessment:"Predictive Delay-Risk Assessment Cockpit",projects:"National Land Acquisition Projects Directory",audit:"Cadastral & Risk Detailed Dossier",notifications:"System Notifications & Operational Alerts","citizen-dashboard":"Citizen Acquisition Dashboard","citizen-lands":"Land Parcel & Cadastral Records","citizen-risk":"Land Acquisition Delay Risk Estimator","citizen-complaint":"File Land Acquisition Grievance","citizen-cases":"Grievance Dossier & Live Tracking"},dropdown:{project_type:{highway:"Highway",railway:"Railway",industrial:"Industrial Node",metro:"Metro Rail",irrigation:"Irrigation",power:"Power Grid",urban_development:"Urban Development"},land_type:{agricultural:"Agricultural",commercial:"Commercial",industrial:"Industrial",mixed:"Mixed Revenue",residential:"Residential"},priority:{normal:"Normal",high:"High",critical:"Critical"}},risk:{low:"LOW",medium:"MEDIUM",high:"HIGH",critical:"CRITICAL",lowRisk:"LOW RISK",mediumRisk:"MEDIUM RISK",highRisk:"HIGH RISK",criticalRisk:"CRITICAL RISK",lowTier:"Low Delay Tier",mediumTier:"Moderate Risk Tier",highTier:"High Bottleneck Tier",criticalTier:"Critical Injunction Tier",lowWording:"Low predicted delay risk",mediumWording:"Moderate predicted delay risk",highWording:"High predicted delay risk",criticalWording:"Critical predicted delay risk",lowSummary:"Low predicted delay risk based on the current project snapshot.",mediumSummary:"Moderate predicted delay risk based on the current project snapshot.",highSummary:"High predicted delay risk based on the current project snapshot.",criticalSummary:"Critical predicted delay risk based on the current project snapshot.",lowThreshold:"Risk Level: LOW (Threshold < 40%)",mediumThreshold:"Risk Level: MEDIUM (Threshold: 40% – 59.9%)",highThreshold:"Risk Level: HIGH (Threshold: 60% – 79.9%)",criticalThreshold:"Risk Level: CRITICAL (Threshold ≥ 80%)",tier:"Tier"},dashboard:{pipelineBadge:"National Infrastructure Pipeline • MoRTH / MoR Analytics",title:"Land Acquisition Intelligence",subtitle:"Monitor project progress, detect emerging delay risks, and prioritize intervention across critical national infrastructure corridors.",runScan:"Run National Risk Scan",scanning:"Scanning 142 National Projects...",scanCompleted:"National Scan Completed: 29 High/Critical risks identified.",launchCockpit:"Launch Assessment Cockpit",totalProjects:"Total Projects Monitored",totalProjectsCount:"142 Projects",totalProjectsDesc:"46 National Highways, 38 Freight, 58 Energy & Urban",highCriticalRisk:"High / Critical Risk",highCriticalCount:"29 Projects",highCriticalDesc:"+3 from last sprint • 18 High, 11 Critical",requiringIntervention:"Requiring Intervention",interventionCount:"14 Immediate Actions",interventionDesc:"8 Document Bottlenecks, 6 Compensation Escrows",avgDelayRisk:"Average Delay Risk",modelConfidence:"Model CI 95%",lowMediumZone:"Low-Medium Zone",baselineVariance:"Baseline variance -2.4% vs state avg",riskOverview:"Risk Overview & Distribution",portfolioBreakdown:"National Portfolio breakdown (N=142)",liveModelActive:"Live Model Active",actionPlanMandatory:"Action plan mandatory",stagnationWatchlist:"Stagnation watchlist",statutoryTracking:"Statutory tracking",nominalTrajectory:"Nominal trajectory",keyRiskDrivers:"Key Risk Drivers",rootCauseCluster:"Root Cause Cluster",driverDocumentation:"Documentation Backlog (Title & 3A)",driverPossession:"Possession Delays (Encroachments)",driverDisputes:"Court Disputes & Injunctions",driverApprovals:"Approval Stalls (Inter-Agency)",predictiveTriangulationAlert:"Predictive Triangulation Alert",triangulationAlertText:"Corridors passing through industrial agro-zones face an 82% likelihood of Section 15 objection escalation within 14 days without active district tehsildar hearings.",modelConfidenceTag:"Model Confidence: 91.4% (SIH Model XG-26)",priorityProjects:"Priority Projects Requiring Administrative Oversight",cadastralEscalation:"Cadastral escalation ledger sorted by delay probability",searchPlaceholder:"Search project or ID...",colId:"Project ID",colName:"Name & Sector",colDistrict:"District / State",colProgress:"Progress",colRisk:"Delay Risk",colTier:"Tier",colAction:"Action",assessBtn:"Assess",auditBtn:"Audit",noMatchingProjects:"No matching projects found."},assessment:{title:"Assess Project Risk",engineBadge:"FastAPI • XGB-26017 Engine",subtitle:"Enter or edit project telemetry to estimate statutory delay probability and inspect model-derived risk drivers via POST /predict.",selectProject:"Select Existing Project",testScenario:"Create / Test Scenario",statutoryPresets:"Statutory Test Presets:",telemetryMatrices:"Telemetry Input Matrices",telemetrySubtitle:"Configure cadastral attributes according to Section 11 & 19 statutory filings",resetValues:"Reset Values",sectionA:"Section A • Project Profile",coreClassification:"Core Classification",labelProjectType:"Project Type",labelLandType:"Land Classification",labelPriority:"Priority Tier",labelComplexity:"Complexity (0-100)",labelTotalParcels:"Total Parcels",labelAffectedFamilies:"Affected Families (PAFs)",labelLandArea:"Land Extent (Ha)",labelPlannedDuration:"Planned Duration (d)",sectionB:"Section B • Progress",velocityActive:"Velocity Active",labelAcqProgress:"Acq. Progress (%)",labelVelocity:"Velocity (%/30d)",labelParcelsPending:"Parcels Pending",labelPossessionPending:"Possession Pending",sectionC:"Section C • Documentation",keyModelDriver:"Key Model Driver",labelDocsReq:"Documents Required",labelDocsPending:"Documents Pending",labelDocCompletion:"Documentation Completion",adjustDocsPending:"Adjust pending documents",sectionD:"Section D • Compensation",escrowTranche:"Escrow Tranche",labelCompCases:"Pending Cases",labelCompAmount:"Pending (₹ Cr)",labelCompDisbursed:"Disbursed %",sectionE:"Section E • Clearances",interAgencyGate:"Inter-Agency Gate",labelApprPending:"Approvals Pend.",labelApprOverdue:"Overdue Num",labelApprDelay:"Avg Delay (d)",sectionF:"Section F • Legal Litigations & Objections",section15Hearings:"Section 15 Hearings",labelPendingObj:"Pending Objections",labelActiveDisputes:"Active Land Disputes",labelOwnerDisputes:"Ownership Conflicts",labelCourtStays:"Court Stays / Writs",sectionG:"Section G • R&R Resettlement",rfctlarrCompliance:"RFCTLARR Compliance",labelRrPending:"Pending Cases",labelRrCompletion:"Completion %",sectionH:"Section H • Schedule & Variance",criticalPath:"Critical Path",labelSchedVariance:"Variance (Days)",labelMilestonesOverdue:"Overdue Milestones",sectionI:"Section I • Stakeholder Coordination",responseLatency:"Response Latency",labelShActions:"Pending Act.",labelShResponse:"Avg Resp (d)",labelShScore:"Score /10",sectionJ:"Section J • Historical Delay Context",regionalPriors:"Regional Priors",labelHistDelay:"Avg Reg. Delay (d)",trainingArchetype:"Training Archetype:",linearInfra:"Linear Infrastructure (NLRMP)",targetWindow:"Inference Target: Statutory 5-Year Window",mandateValidation:"LARR Act 2013 § 25 Mandate Validation • XGBoost Engine",resetBtn:"Reset",assessRiskBtn:"Assess Project Risk",analyzingTelemetry:"Analyzing Project Telemetry...",callingApi:"Calling FastAPI POST /predict & XGBoost Tree Contributions",riskIndex:"Predictive Risk Index",predictedDelayProb:"Predicted Delay Probability",modelNote:"Predicted by XGBoost Model (SIH 26017) trained on 3,000,000 national records. Live model inference via POST /predict.",riskIncreasingFactors:"Risk-Increasing Factors",modelContributionPos:"Model Contribution (+Δ)",noRiskIncreasing:"No major risk-increasing factors identified for this project state.",action:"Action:",riskReducingFactors:"Factors Reducing Predicted Risk",modelContributionNeg:"Model Contribution (-Δ)",noRiskReducing:"No significant risk-reducing factors detected.",mathematicalNote:"Note: Values reflect mathematical dampening within the XGBoost model and are not causal recommendations.",recommendedDirectives:"Recommended Statutory Directives",priorityExecution:"Priority Execution",p1Priority:"P1 PRIORITY",p2Priority:"P2 PRIORITY",resolution:"Resolution",nominalDirectives:"Statutory progress remains nominal. Continue scheduled monitoring under Section 19 protocols.",methodology:"Methodology & Model Evaluation",methodologyText:"The Bhoomi Sakha inference engine executes binary classification across 76 engineered features aligned with statutory RFCTLARR Act 2013 and national cadastral norms.",accuracy:"Accuracy",rocAuc:"ROC-AUC",precision:"Precision",recall:"Recall",trainingDataset:"Training Dataset",projectsEvaluated:"Projects Evaluated",treeContribs:"Tree Contributions",treeContribsDesc:"Feature weights reflect exact gradient boosting margin impacts per project snapshot.",riskThresholds:"Risk Thresholds",inferenceUnavailable:"Inference Unavailable",retryAssessment:"Retry Assessment",readAloudIntro:"Bhoomi Sakha assessment outcome.",labelCurrentStage:"Current Statutory Stage",riskForecast:"Risk Forecast",delayProb:"Delay Prob",predictedOutcome:"Predicted Outcome",awaitingInput:"Awaiting Telemetry Input...",statutoryNotice:"Notice: Inference updates in real time based on active inputs.",serviceUnavailableMsg:"Prediction service is temporarily unavailable. Please try again."},projects:{title:"National Projects Directory",subtitle:"Explore active infrastructure corridors, cadastral verification stages, and predicted delay exposures across all state jurisdictions.",newAssessment:"New Project Assessment",filterSector:"Filter by Sector",allSectors:"All Sectors (Highway, Rail, Power, Metro)",filterRisk:"Risk Tier",allRisks:"All Risk Tiers",searchPlaceholder:"Filter by name, ID, or district...",colId:"Project ID",colName:"Name & Sector",colDistrict:"State & District",colStage:"Statutory Stage",colProgress:"Acquisition Progress",colRisk:"Predicted Delay Risk",colTier:"Status Tier",colAction:"Actions",assessRisk:"Assess Risk",auditFile:"Audit File",noRecords:"No matching records found in national database.",deepAudit:"Deep Audit"},detail:{breadcrumbProjects:"Projects",detailedAnalysis:"Detailed Risk Analysis",statutoryHash:"Statutory Hash",modelInference:"Model Inference",liveSynchronized:"Live Synchronized",nationalCorridor:"National Corridor",authorityWing:"MoRTH / Authority Corridors Wing",stage:"Stage",district:"District",alignment:"Alignment",cala:"CALA: Competent Authority Land Acquisition",division:"Division",rerunAssessment:"Re-run Assessment",draftDcOrder:"Draft DC Order",riskTier:"Risk Tier",engineXgb:"XGB-26017 Engine",modelDelayProb:"Model Delay Probability",probability:"PROBABILITY",predictedStatutoryImpact:"Predicted Statutory Impact",modelConfidence:"Model Confidence",trainedRecords:"N = 3,000,000 Trained",totalRequisition:"Total Land Requisition",spreadVillages:"Spread over 14 Revenue Villages",affectedLandowners:"Affected Landowners",khatas:"Khatas",unresolvedMutations:"410 mutations unresolved",sanctionedEscrow:"Sanctioned Escrow",undisbursedEscrow:"₹29.60 Cr undisbursed",statutoryCutoffLabel:"Section 19 Statutory Cutoff Timeline:",slippageRisk:"+94 Days Slippage Risk",bottleneckFlag:"Critical path bottleneck flagged in ownership verification and mutation camp clearance.",progressGaugesTitle:"Multi-Domain Acquisition Progress Gauges",progressGaugesSubtitle:"Cadastral metrics synchronized with state e-Bhoomi records registry",cycleAudit:"Cycle Audit: FY26-Q1-ACTIVE",overallProgress:"Overall Progress",jointSurvey:"Joint Survey 3A",sec23Award:"Sec 23 Award",physicalRow:"Physical ROW",dbtEscrow:"DBT Escrow",dossierFor:"Project dossier for",state:"State",statutoryStage:"Statutory Stage",modalPrototypeDraft:"Prototype Draft",modalSimulationMode:"Simulation Mode • Not Legally Enforceable",modalTitle:"Draft DC Order / Administrative Directive",modalSubtitle:"Pre-populated prototype administrative memo based on real-time project risk telemetry.",modalOffice:"Office of the District Collector & District Magistrate",modalCala:"Competent Authority Land Acquisition (CALA)",modalRef:"Ref",modalDate:"Date",modalAreaFamilies:"Area / Families",modalDisclaimer:"Prototype Disclaimer: This draft memo is generated for governance evaluation within the Bhoomi Sakha prototype. It does not replace statutory procedures under the RFCTLARR Act 2013 or respective State Land Acquisition rules and carries no legal authority without official executive signature.",modalCopyDraft:"Copy Draft Text",modalCopied:"Copied to Clipboard!",modalPrint:"Print / Save",modalClose:"Close",modalMemoSub:"Pre-emptive Administrative Acceleration Directive under RFCTLARR Framework",modalTeleFindings:"1. TELEMETRY & PREDICTIVE AUDIT FINDINGS:",modalTargetArea:"Total Target Land Area",modalAffectedFam:"Total Affected Families",modalParcels:"Total Cadastral Parcels",modalDirectives:"2. ADMINISTRATIVE DIRECTIVES TO COMPETENT AUTHORITIES (CALA):",modalDirectiveA:"a) Joint Site Inspection: The Special Land Acquisition Officer (SLAO) and Sub-Divisional Magistrate (SDM) shall initiate immediate expedited joint site inspection for remaining pending parcels.",modalDirectiveB:"b) DBT Escrow Acceleration: Direct Benefit Transfer (DBT) reconciliation and compensation award payouts shall be expedited within a 14-day statutory timeline to prevent critical milestone slippage.",modalDirectiveC:"c) Lok Adalat Conciliation: Outstanding objections and title verification issues must be scheduled for expedited hearing during the upcoming weekly revenue Lok Adalat."},notifications:{title:"System Notifications",unread:"Unread",allCaughtUp:"All Caught Up",subtitle:"Application alerts, inference milestones, and statutory threshold notifications generated by Bhoomi Sakha.",markAllRead:"Mark All Read",resetDemoAlerts:"Reset Demo Alerts",filterAll:"All",filterUnread:"Unread",noNotifications:"No notifications to display",noNotificationsDesc:"There are currently no notifications under this filter.",newTag:"New",markAsUnread:"Mark as Unread",markAsRead:"Mark as Read",categories:"Categories",items:{"notif-crit-1":{title:"Critical delay risk detected in current assessment",summary:"Delhi-Amritsar Expressway (Pkg 4) evaluated with 84.6% delay probability requiring urgent Section 19 intervention.",actionLabel:"Inspect Assessment"},"notif-engine-2":{title:"Backend prediction engine connected",summary:"FastAPI service connected with 76 engineered cadastral features ready for live XGBoost inference.",actionLabel:"View Dashboard"},"notif-atten-3":{title:"Assessment contains factors requiring officer attention",summary:"18 high-bottleneck parcel cases in Western Freight Corridor flagged for documentation backlog review.",actionLabel:"Review Factors"},"notif-stat-4":{title:"Risk assessment pipeline initialized",summary:"National Cadastral Matrix synchronized with 142 monitored infrastructure corridors.",actionLabel:"Projects Directory"}},severity:"Severity",readState:"Read State"},common:{readAloud:"Read Aloud",pause:"Pause",resume:"Resume",stop:"Stop",speakToWrite:"Speak to Write",listening:"Listening...",close:"Close",copy:"Copy",print:"Print",prototypeOnly:"Prototype Draft",themeToggle:"Color Theme",languageToggle:"Language",explain:"Explain",clickForDetails:"Click ⓘ for detailed explanation",infoFooterNote:"Bhoomi Sakha Institutional Guidance",min:"Min",max:"Max"},infoCategories:{input_feature:"Input Feature",dropdown_option:"Selectable Option",governance_metric:"Governance Metric",model_output:"Model Output",statutory_control:"Statutory Control",system_status:"System Status"},infoSections:{whatItMeans:"What It Means",whyItMatters:"Why It Matters",howToInterpret:"How to Interpret It",example:"Concrete Example",modelUsage:"Bhoomi Sakha / Model Usage"},info:{project_type:{title:"Project Type / Sector",short:"Categorical sector classification of the linear or node infrastructure asset.",whatItMeans:"Identifies the infrastructure domain under which the acquisition is statutory notified.",whyItMatters:"Corridors in different sectors exhibit varying right-of-way widths, legal frameworks, and dispute frequencies.",howToInterpret:"Select the sector specified in the official Section 11 / 3A Gazette notification.",example:"Select Highway for National Expressways, or Railway for Dedicated Freight Corridors.",modelUsage:"Used by the predictive model as a one-hot encoded categorical input feature."},opt_project_type_highway:{title:"Highway Corridor",short:"Linear multi-village road corridor governed under National Highways Act 1956 or RFCTLARR 2013.",whatItMeans:"Roadway expansion requiring contiguous ribbons of land across multiple rural and peri-urban survey zones.",whyItMatters:"Highways frequently cross dense agricultural holdings requiring extensive title searches.",howToInterpret:"Use for expressways, national/state highways, bypasses, and ring roads.",example:"NH-44 Bypass 4-lane corridor passing through 18 revenue villages.",modelUsage:"Categorical option mapped to Highway input feature."},opt_project_type_railway:{title:"Freight / Passenger Railway",short:"Dedicated rail alignment requiring continuous gradient-compliant land strips.",whatItMeans:"Rail infrastructure executed under Railways Amendment Act 2008 or RFCTLARR Act 2013.",whyItMatters:"Requires strict slope tolerance and zero-level-crossing safety clear zones.",howToInterpret:"Use for freight tracks, passenger line duplications, and high-speed rail.",example:"Western Dedicated Freight Corridor double-line track expansion.",modelUsage:"Categorical option mapped to Railway input feature."},opt_project_type_industrial:{title:"Industrial Node / SEZ",short:"Large contiguous land cluster acquired for manufacturing zones or special investment regions.",whatItMeans:"Area-based manufacturing hubs, dry ports, and integrated industrial parks.",whyItMatters:"Involves large land blocks with intensive environmental clearances and bulk compensation payouts.",howToInterpret:"Use for industrial estates, logistics hubs, and defense manufacturing corridors.",example:"Dholera Special Investment Region (SIR) Phase 1 manufacturing hub.",modelUsage:"Categorical option mapped to Industrial input feature."},opt_project_type_metro:{title:"Urban Mass Rapid Transit (Metro)",short:"High-density urban transit corridor involving high-value commercial and residential parcels.",whatItMeans:"Elevated or underground metro tracks, passenger stations, and maintenance depot yards.",whyItMatters:"Involves high circle rate valuations, underground easement rights, and intensive commercial displacement.",howToInterpret:"Use for city metro lines, light rail, and regional rapid transit systems (RRTS).",example:"Pune Metro Line 3 elevated viaduct and multimodal interchange.",modelUsage:"Categorical option mapped to Metro input feature."},opt_project_type_irrigation:{title:"Irrigation & Canal Network",short:"Water distribution canal networks, barrages, and reservoir submergence zones.",whatItMeans:"Water storage and canal right-of-way executed under state irrigation statutes.",whyItMatters:"Requires environmental clearances, seasonal boundary tracking, and multi-tier agrarian compensation.",howToInterpret:"Use for canal distributaries, feeder canals, and dam reservoir acquisition.",example:"Sardar Sarovar canal branch network expansion.",modelUsage:"Categorical option mapped to Irrigation input feature."},opt_project_type_power:{title:"Power Grid / Renewable Energy",short:"High-voltage transmission line tower footings and solar/wind generation parks.",whatItMeans:"Substations, transmission corridors, and solar generation fields.",whyItMatters:"Governed by Indian Telegraph Act right-of-user (RoU) provisions alongside standard acquisition.",howToInterpret:"Use for 400kV/765kV transmission lines, solar ultra parks, and green energy corridors.",example:"Bhadla 765kV green energy corridor evacuation substation.",modelUsage:"Categorical option mapped to Power input feature."},opt_project_type_urban:{title:"Urban Development & Smart City",short:"Civic infrastructure, municipal road widening, and township expansion projects.",whatItMeans:"Urban town planning schemes, drainage infrastructure, and municipal utilities.",whyItMatters:"Subject to municipal bylaws, high tenancy density, and complex built-up structure valuations.",howToInterpret:"Use for master plan roads, urban flyovers, civic amenities, and smart city nodes.",example:"Amaravati Capital City arterial spine road network.",modelUsage:"Categorical option mapped to Urban Development input feature."},land_type:{title:"Land Classification",short:"Revenue categorization of the acquired land parcel as recorded in the district Record of Rights.",whatItMeans:"The legal land use category established in state revenue records (Jamabandi/7/12).",whyItMatters:"Determines the statutory multiplier factor (1.0x to 2.0x) applied to base market value under RFCTLARR First Schedule.",howToInterpret:"Select the predominant land classification across the project alignment.",example:"Agricultural for cultivated farmland; Commercial for road frontage businesses.",modelUsage:"Used by the predictive model as a categorical input feature."},opt_land_type_agricultural:{title:"Agricultural Land",short:"Cultivated or rural arable land governed by standard rural multiplication factors.",whatItMeans:"Farmland designated for crops, orchards, or rural agrarian cultivation.",whyItMatters:"Rural factor multiplier (1.25x - 2.0x) applies; food security impact assessments required for multi-crop land.",howToInterpret:"Select for farmland, orchards, and irrigated agricultural holdings.",example:"Irrigated double-crop land acquired for expressway bypass alignment.",modelUsage:"Categorical option mapped to Agricultural."},opt_land_type_commercial:{title:"Commercial Land",short:"High-valuation parcels occupied by businesses, retail, or commercial establishments.",whatItMeans:"Parcels approved for commerce along road frontages or urban nodes.",whyItMatters:"Higher circle rates, loss of business goodwill compensation, and high litigation frequency.",howToInterpret:"Select for market shops, petrol pumps, warehouses, and commercial establishments.",example:"Highway frontage retail commercial plots.",modelUsage:"Categorical option mapped to Commercial."},opt_land_type_industrial:{title:"Industrial Land",short:"Land allocated for factories, warehousing, or manufacturing facilities.",whatItMeans:"Designated industrial estates or privately converted non-agricultural industrial plots.",whyItMatters:"Involves plant and machinery dismantling compensation and specialized valuation.",howToInterpret:"Select for manufacturing facilities, workshops, and processing yards.",example:"Suburban engineering workshop plots facing partial acquisition.",modelUsage:"Categorical option mapped to Industrial."},opt_land_type_mixed:{title:"Mixed Revenue Land",short:"Composite parcels comprising agricultural, residential abadi, and commercial uses.",whatItMeans:"Heterogeneous parcels common in peri-urban transition zones along expanding highways.",whyItMatters:"Requires parcel-by-parcel micro-valuation and varied solatium calculations.",howToInterpret:"Select when the corridor cuts across transitioning village abadi and semi-commercial fringes.",example:"Peri-urban corridor containing village homesteads alongside small agro-processing units.",modelUsage:"Categorical option mapped to Mixed."},opt_land_type_residential:{title:"Residential Land",short:"Inhabited residential settlements, rural abadi, or urban residential plots.",whatItMeans:"Parcels with domestic dwellings, private houses, or layout plots.",whyItMatters:"Mandates comprehensive Second Schedule R&R entitlements, constructed house compensation, and alternative homesteads.",howToInterpret:"Select for village abadi settlements, residential colonies, and housing plots.",example:"Village settlement fringe impacted by bypass interchange.",modelUsage:"Categorical option mapped to Residential."},priority:{title:"Priority Tier",short:"Administrative priority rating assigned by governing ministry (Normal, High, Critical).",whatItMeans:"Institutional urgency status determining administrative review cadence and inter-agency fast-tracking.",whyItMatters:"Influences escalation prioritization in CALA district review meetings and state steering committees.",howToInterpret:"Select based on national infrastructure priority designation (e.g. PM Gati Shakti, Bharatmala).",example:"Critical for prime economic corridors with strict public commission targets.",modelUsage:"Categorical input feature for administrative urgency."},opt_priority_normal:{title:"Normal Priority",short:"Standard capital expenditure project subject to regular statutory review schedules.",whatItMeans:"Baseline infrastructure project without specialized national fast-track mandates.",whyItMatters:"Operates under standard CALA and district administrative cycles.",howToInterpret:"Select for routine district road upgradation or feeder rail spur.",example:"Routine district road widening project.",modelUsage:"Baseline priority level."},opt_priority_high:{title:"High Priority",short:"Strategic state or regional corridor subject to bi-weekly executive monitoring.",whatItMeans:"Key economic corridor with committed public completion targets.",whyItMatters:"Receives expedited administrative attention for inter-agency clearances and utility shifting.",howToInterpret:"Select for state expressways, trunk rail links, and major port connectivity roads.",example:"State industrial corridor expressway link.",modelUsage:"Elevated priority tier level."},opt_priority_critical:{title:"Critical Priority",short:"Flagship national corridor monitored directly under PM Gati Shakti / Cabinet Secretariat.",whatItMeans:"Highest-urgency national connectivity asset with zero-tolerance for milestone slippage.",whyItMatters:"Triggers immediate Chief Secretary and District Collector escalation for pending clearances.",howToInterpret:"Select for golden quadrilateral augmentations, defense corridors, and flagship expressways.",example:"Delhi-Mumbai Expressway economic link or national strategic railway.",modelUsage:"Top priority tier level."},current_stage:{title:"Current Statutory Stage",short:"Active procedural phase under the RFCTLARR statutory land acquisition framework.",whatItMeans:"The current milestone in the legal journey from initial gazette notice to final physical handover.",whyItMatters:"Each stage carries statutory lapse timelines (e.g. 12 months between §11 and §19).",howToInterpret:"Select the milestone currently published in the official state Gazette.",example:"Section 19 Declaration when joint survey is complete and land plan is approved.",modelUsage:"Categorical statutory stage input."},opt_stage_notification:{title:"Section 11 Preliminary Notification",short:"Public notice declaring intent to acquire land and inviting preliminary objections.",whatItMeans:"Statutory publication in official gazette and daily newspapers under RFCTLARR Section 11.",whyItMatters:"Freezes land transactions and starts the statutory 60-day objection window under Section 15.",howToInterpret:"Select when Section 11 notice has been published and preliminary hearings are pending.",example:"Preliminary notification issued for 233 parcels across Ludhiana district.",modelUsage:"Early phase statutory stage."},opt_stage_survey:{title:"Joint Measurement Survey (JMS / 3A)",short:"On-site cadastral demarcation and physical verification of parcel boundaries.",whatItMeans:"Joint field inspection by revenue officials, survey team, and landowners to map exact boundaries.",whyItMatters:"Resolves boundary discrepancies and counts affected trees, wells, and structures.",howToInterpret:"Select when revenue teams are actively demarcating boundaries in the field.",example:"Joint survey completed for 180 out of 233 parcels.",modelUsage:"Field demarcation phase statutory stage."},opt_stage_valuation:{title:"Assessment & Valuation",short:"Determination of market value, asset appraisal, and solatium calculations.",whatItMeans:"Competent Authority assesses market rate, multiplier, and adds 100% solatium.",whyItMatters:"Establishes total financial compensation escrow requirements before award declaration.",howToInterpret:"Select when circle rates and private sale deed averages are being tabulated.",example:"Basic circle rate adjusted with rural 1.5x multiplier and solatium.",modelUsage:"Valuation phase statutory stage."},opt_stage_compensation:{title:"Section 23 Award & Compensation Disbursement",short:"Formal declaration of compensation award and disbursement to verified titleholders.",whatItMeans:"Final award pronounced under Section 23 with funds transferred via Direct Benefit Transfer (DBT).",whyItMatters:"Physical possession cannot be legally claimed until compensation is deposited in bank accounts.",howToInterpret:"Select when awards are being pronounced and funds disbursed to khatas.",example:"Award pronounced; ₹32.4 Cr disbursed to 140 khatas.",modelUsage:"Financial disbursement phase statutory stage."},opt_stage_possession:{title:"Section 38 Physical Possession",short:"Formal taking of physical possession and handover of Right-of-Way to executing agency.",whatItMeans:"Land vests absolutely in the Government free from all encumbrances under Section 38.",whyItMatters:"Enables civil contractors to mobilize equipment and begin ground construction.",howToInterpret:"Select when compensation is paid and physical land handover memos are being executed.",example:"Possession memo signed for 187 out of 233 parcels.",modelUsage:"Physical handover phase statutory stage."},opt_stage_rehabilitation:{title:"R&R Resettlement Execution",short:"Implementation of rehabilitation entitlements for displaced and livelihood-affected families.",whatItMeans:"Executing housing allotments, annuity grants, and livelihood allowances under Schedules 2 & 3.",whyItMatters:"Ensures social compliance and prevents human displacement grievances.",howToInterpret:"Select when resettlement colonies and rehabilitation allowances are being administered.",example:"Alternative housing plots allotted in nearby designated resettlement colony.",modelUsage:"Social rehabilitation phase statutory stage."},complexity_score:{title:"Complexity Score (0-100)",short:"Empirical index synthesizing parcel fragmentation, topography, and administrative jurisdictions.",whatItMeans:"A composite metric assessing operational friction based on parcel density and urban proximity.",whyItMatters:"Higher scores indicate dense multi-owner parcels requiring greater administrative hours.",howToInterpret:"0-30: Simple rural linear; 31-60: Moderate fragmented; 61-100: Complex peri-urban/multi-jurisdictional.",example:"47.7 indicates moderate rural fragmentation across two tehsils.",modelUsage:"Continuous numeric input feature normalized between 0.0 and 100.0."},total_parcels:{title:"Total Parcels",short:"Total count of individual cadastral land parcels gazetted for acquisition.",whatItMeans:"The number of distinct survey numbers/khasras across all impacted revenue villages.",whyItMatters:"Each parcel requires independent title search, joint measurement, and compensation award.",howToInterpret:"Higher parcel counts increase documentation processing volume linearly.",example:"233 revenue survey numbers in Punjab corridor package.",modelUsage:"Integer input feature tracking scope scale."},affected_families:{title:"Affected Families (PAFs)",short:"Count of Project Affected Families whose land or residential homestead is acquired.",whatItMeans:"Total titleholders and dependent livelihood-affected families recognized under Section 16.",whyItMatters:"Directly dictates R&R entitlement caseload, public hearing scale, and grievance redressal.",howToInterpret:"Compare against total parcels to assess title co-ownership density.",example:"113 families across 233 parcels (approx. 0.48 families per parcel).",modelUsage:"Integer input feature for socio-economic footprint."},land_area_hectares:{title:"Land Extent (Hectares)",short:"Total surface land area required for the corridor in hectares.",whatItMeans:"Physical footprint of the acquisition as delineated in the approved alignment plan.",whyItMatters:"Determines aggregate financial capital budget and environmental clearance thresholds.",howToInterpret:"Review alongside parcel count to deduce average parcel size.",example:"132.5 Hectares for 42 km dual carriageway right-of-way.",modelUsage:"Continuous numeric input feature measuring spatial footprint."},planned_duration_days:{title:"Planned Duration (Days)",short:"Target scheduled duration from Section 11 notice to possession in calendar days.",whatItMeans:"Baseline timeline established in the Project Implementation Unit (PIU) charter.",whyItMatters:"Serves as the benchmark against which schedule slippage and delay probability are assessed.",howToInterpret:"Standard statutory benchmark is 540-730 days (18-24 months) under RFCTLARR Act.",example:"607 days (approx. 20 months) planned schedule.",modelUsage:"Integer input feature establishing project baseline tempo."},acquisition_progress_pct:{title:"Acquisition Progress (%)",short:"Cumulative percentage of gazetted parcels whose statutory acquisition is finalized.",whatItMeans:"Proportion of total parcels that have crossed Section 23 award and compensation deposit.",whyItMatters:"Core progress metric for contractor mobilization and construction clearance.",howToInterpret:"Below 40% in late project stages indicates substantial backlog.",example:"6.01% acquired at current operational audit timestamp.",modelUsage:"Continuous numeric input feature (0-100%)."},acquisition_velocity_pct_per_30d:{title:"Acquisition Velocity (% / 30 Days)",short:"Monthly rate of parcel acquisition clearance over the preceding 30 days.",whatItMeans:"Rolling tempo metric tracking progress acceleration or stagnation.",whyItMatters:"Stagnant velocity (< 2%/month) highlights administrative or legal bottlenecks.",howToInterpret:"Compare current velocity against required monthly burn rate to reach planned completion.",example:"6.13% per month indicates active ongoing parcel awards.",modelUsage:"Continuous numeric input feature capturing dynamic momentum."},parcels_pending:{title:"Parcels Pending",short:"Count of gazetted parcels still awaiting final award declaration.",whatItMeans:"Total parcels minus parcels acquired.",whyItMatters:"Represents the active administrative caseload confronting the CALA team.",howToInterpret:"A large pending count near statutory deadlines signals lapse risk.",example:"219 parcels remaining to be acquired out of 233 total.",modelUsage:"Integer input feature tracking remaining backlog."},possession_pending_parcels:{title:"Possession Pending Parcels",short:"Parcels where compensation is awarded but physical site handover remains uncompleted.",whatItMeans:"Parcels hindered by standing crops, structure demolition, or lingering encumbrances.",whyItMatters:"Prevents contractors from accessing the right-of-way despite legal award completion.",howToInterpret:"High discrepancy between parcels acquired and possession indicates on-ground resistance.",example:"218 parcels pending physical possession.",modelUsage:"Integer input feature representing physical handover lag."},documents_required:{title:"Documents Required",short:"Total statutory cadastral title documents and revenue records required for verification.",whatItMeans:"Sum of RoR jamabandi, mutation entries, indemnity bonds, and bank mandates.",whyItMatters:"Complete document files are legally required before funds disbursement.",howToInterpret:"Usually scales with total parcels multiplied by co-owner ratios.",example:"241 total document dossiers required across landowners.",modelUsage:"Integer input feature measuring documentation universe."},documents_pending:{title:"Documents Pending",short:"Count of required statutory document dossiers still pending verification.",whatItMeans:"Represents the number of required land and title documents that remain pending verification. Changing this value directly updates Documentation Completion (((Required - Pending) / Required) * 100).",whyItMatters:"Pending documents are a primary driver of land acquisition delay, directly stalling Section 19 declaration and compensation award disbursement.",howToInterpret:"Lower pending document counts directly increase Documentation Completion toward 100% and reduce predicted delay risk. High pending counts trigger higher model delay probabilities.",example:"If 850 documents are required and 399 are pending, Documentation Completion is 53.1%.",modelUsage:"Primary project telemetry input feature directly feeding XGBoost decision trees to calculate delay risk."},documentation_completion_pct:{title:"Documentation Completion (%)",short:"Percentage ratio of verified document dossiers against total required.",whatItMeans:"Calculated as ((Documents Verified / Documents Required) * 100).",whyItMatters:"Direct health barometer of the CALA administrative back-office.",howToInterpret:"< 20% in late stages flags severe documentary stagnation.",example:"3.7% completion indicates early documentation stage.",modelUsage:"Calculated continuous feature derived from required and pending inputs."},compensation_pending_cases:{title:"Pending Compensation Cases",short:"Number of individual landowner compensation claims awaiting final award sanction or release.",whatItMeans:"Unprocessed claims awaiting verification, Lok Adalat conciliation, or escrow credit.",whyItMatters:"Directly correlates with landowner unrest and subsequent court injunction filings.",howToInterpret:"High case counts necessitate special village compensation disbursement camps.",example:"105 pending compensation cases.",modelUsage:"Integer input feature tracking unresolved financial files."},compensation_pending_amount:{title:"Pending Compensation Amount (₹ Cr)",short:"Financial quantum in Crores INR committed but not yet credited to landowner bank accounts.",whatItMeans:"Total estimated compensation liability awaiting bank escrow clearance.",whyItMatters:"High undisbursed capital risks statutory interest penalties (9% to 15% per annum under §80).",howToInterpret:"Review against escrow allocation to verify liquidity availability.",example:"₹10.95 Cr pending disbursement.",modelUsage:"Continuous numeric input feature measuring financial quantum."},compensation_completion_pct:{title:"Compensation Completion (%)",short:"Percentage of total sanctioned compensation disbursed via Direct Benefit Transfer (DBT).",whatItMeans:"Ratio of disbursed compensation funds against total assessed liability.",whyItMatters:"Statutory prerequisite under RFCTLARR §38 prior to physical land dispossession.",howToInterpret:"Low values indicate capital lockup in escrow accounts.",example:"6.2% disbursed to verified accounts.",modelUsage:"Continuous numeric input feature (0-100%)."},avg_compensation_delay_days:{title:"Avg Compensation Delay (Days)",short:"Mean delay in days between award determination and electronic fund transfer.",whatItMeans:"Administrative latency in treasury and bank account reconciliation.",whyItMatters:"Delays beyond 90 days trigger statutory interest liabilities under Section 80.",howToInterpret:"< 30 days is optimal; > 60 days signals bank mandate or mutation hurdles.",example:"52.7 days average turnaround latency.",modelUsage:"Continuous numeric feature capturing financial transaction friction."},approvals_pending:{title:"Approvals Pending",short:"Count of statutory clearances awaiting sanction from external government departments.",whatItMeans:"Forest clearance (FC Stage I/II), Railway crossing (ROB/RUB), wildlife, or utility shifting permits.",whyItMatters:"Linear infrastructure cannot proceed continuously if isolated parcels lack clearances.",howToInterpret:"Prioritize clearances on critical path parcels.",example:"5 statutory clearances pending (2 forest, 2 utility, 1 rail).",modelUsage:"Integer input feature reflecting inter-agency dependency."},overdue_approvals:{title:"Overdue Approvals",short:"Clearances that have breached their statutory or citizen charter SLA processing deadlines.",whatItMeans:"Clearance applications lingering beyond mandated inter-departmental response limits.",whyItMatters:"Strong indicator of inter-departmental gridlock requiring Chief Secretary intervention.",howToInterpret:"Any non-zero count warrants formal escalation memo to the nodal clearance authority.",example:"2 overdue approvals in forest tree felling.",modelUsage:"Integer input feature tracking compliance breach."},avg_approval_delay_days:{title:"Avg Approval Delay (Days)",short:"Average duration in calendar days that clearances remain pending past SLA deadlines.",whatItMeans:"Average backlog latency across all departmental clearance applications.",whyItMatters:"Quantifies regulatory friction across the corridor.",howToInterpret:"> 30 days indicates persistent inter-agency friction.",example:"41.0 days average clearance delay.",modelUsage:"Continuous numeric input feature."},pending_objections:{title:"Pending Objections",short:"Unresolved landowner objection petitions filed under RFCTLARR Section 15.",whatItMeans:"Objections regarding public purpose, alignment suitability, or excessive acquisition.",whyItMatters:"Section 19 declaration cannot be lawfully issued until Section 15 hearings are disposed.",howToInterpret:"Hearings must be completed within 60 days of Section 11 notice.",example:"0 pending objections (nominal clearance).",modelUsage:"Integer input feature measuring statutory procedural hurdles."},active_legal_disputes:{title:"Active Land Disputes",short:"Formal writ petitions or title disputes pending in Civil Courts or High Court.",whatItMeans:"Litigation challenging notifications, compensation rates, or boundary demarcation.",whyItMatters:"Can lead to judicial injunctions halting ground work.",howToInterpret:"Review status of legal counsel appearance and vacating petitions.",example:"0 active legal disputes.",modelUsage:"Integer input feature with high weight in dispute tree nodes."},ownership_disputes:{title:"Ownership Conflicts",short:"Intra-family or boundary title contests between rival claimants to a parcel.",whatItMeans:"Unresolved partition suits or revenue mutation appeals blocking award disbursement.",whyItMatters:"Funds must be deposited in Reference Court under §64 if ownership is disputed.",howToInterpret:"Refer to Revenue Lok Adalat for expedited conciliation.",example:"0 ownership disputes registered.",modelUsage:"Integer input feature."},court_stay_cases:{title:"Court Stays / Writs",short:"Formal interim judicial injunctions restraining possession or construction.",whatItMeans:"High Court or Civil Court orders restraining government action on specific survey numbers.",whyItMatters:"Directly stops civil work on affected chainage; critical cause of corridor fracturing.",howToInterpret:"Requires urgent filing of petition for vacating interim stay by state Advocate General.",example:"0 active stay orders.",modelUsage:"Integer input feature; heavy model risk escalator."},rr_pending_cases:{title:"R&R Pending Cases",short:"Count of displaced or affected families awaiting physical resettlement or rehabilitation package.",whatItMeans:"Families entitled to alternative housing, land-for-land, or annuity grants under Schedule 2.",whyItMatters:"Physical possession of residential homestead land requires prior R&R execution.",howToInterpret:"Track progress of designated resettlement colony infrastructure.",example:"47 families awaiting R&R package formalization.",modelUsage:"Integer input feature tracking social compliance."},rr_completion_pct:{title:"R&R Completion (%)",short:"Percentage of approved Rehabilitation & Resettlement schemes physically completed.",whatItMeans:"Proportion of entitled families who have received all statutory rehabilitation benefits.",whyItMatters:"Social safeguard requirement under RFCTLARR Act prior to displacement.",howToInterpret:"Values below 50% during possession stage represent severe non-compliance.",example:"4.08% R&R completed.",modelUsage:"Percentage input feature (0-100%)."},schedule_variance_days:{title:"Schedule Variance (Days)",short:"Timeline deviation in days between planned milestone schedule and actual operational progress.",whatItMeans:"Negative values indicate ahead-of-schedule; positive values indicate delayed milestones.",whyItMatters:"Direct indicator of project delivery trajectory against baseline target.",howToInterpret:"+60 days or more indicates severe corridor delivery slippage.",example:"-7.19 days indicates project is tracking slightly ahead of statutory milestones.",modelUsage:"Continuous numeric input feature capturing schedule drift."},milestones_overdue:{title:"Overdue Milestones",short:"Count of statutory gateway milestones that have breached planned calendar target dates.",whatItMeans:"Key gateway events (3A survey, 3D/Sec 19, award, possession) past due.",whyItMatters:"Breaches risk statutory notification lapse under Sections 19 & 25.",howToInterpret:"1 overdue milestone flagged in preliminary survey verification.",example:"1 overdue milestone.",modelUsage:"Integer input feature measuring statutory milestone slip."},pending_stakeholder_actions:{title:"Pending Stakeholder Actions",short:"Action items pending from external line departments, utilities, and local municipal bodies.",whatItMeans:"Electric utility tower shifting, water pipeline diversion, or municipal NOCs.",whyItMatters:"Physical work cannot commence safely until active utilities are relocated.",howToInterpret:"Review at weekly district coordination meetings chaired by District Magistrate.",example:"7 external utility action items pending.",modelUsage:"Integer input feature for external dependencies."},avg_stakeholder_response_days:{title:"Avg Stakeholder Response (Days)",short:"Mean calendar days taken by external departments to respond to CALA requisitions.",whatItMeans:"Response turnaround latency across state departments.",whyItMatters:"Measures bureaucratic friction and inter-agency coordination efficiency.",howToInterpret:"< 15 days is high-efficiency; > 30 days requires secretarial escalation.",example:"28.59 days average departmental response.",modelUsage:"Continuous numeric feature capturing coordination velocity."},stakeholder_responsiveness_score:{title:"Stakeholder Score (/10)",short:"Composite index (0 to 10) rating inter-agency cooperation and response timeliness.",whatItMeans:"Institutional responsiveness metric evaluating external agency alignment.",whyItMatters:"Identifies corridors with poor inter-agency alignment requiring governance focus.",howToInterpret:"Scores above 7.0 indicate proactive coordination; below 4.0 indicates administrative friction.",example:"5.14 / 10 indicates moderate departmental responsiveness.",modelUsage:"Continuous numeric rating feature (0.0 to 10.0)."},historical_avg_delay_days:{title:"Avg Historical Delay (Days)",short:"Historical average delay in days for comparable linear projects in the state/district.",whatItMeans:"Empirical prior derived from 3,000,000 historical national land records.",whyItMatters:"Provides Bayesian prior weighting in model inference based on regional precedent.",howToInterpret:"Districts with historically high court stays or complex tenancy laws show higher baselines.",example:"100.8 days historical baseline delay for this regional sector.",modelUsage:"Continuous numeric feature representing regional delay priors."},delay_probability:{title:"Predicted Delay Risk Probability",short:"The statistical likelihood (0-100%) that this land acquisition will experience statutory delay (> 5 years).",whatItMeans:"The model-estimated probability of the project experiencing timeline overrun under RFCTLARR Section 25.",whyItMatters:"Enables pre-emptive administrative interventions before statutory cutoff deadlines lapse.",howToInterpret:"<40% Low; 40-59.9% Medium; 60-79.9% High; ≥80% Critical.",example:"42.3% probability classifies corridor into Moderate Risk Tier.",modelUsage:"Primary output generated by XGBoost binary classifier (POST /predict)."},risk_level:{title:"Risk Tier Classification",short:"Administrative urgency classification based on predicted delay probability.",whatItMeans:"Categorization into Low, Medium, High, or Critical risk tiers.",whyItMatters:"Determines the level of executive oversight and reporting frequency required.",howToInterpret:"Critical requires immediate District Collector intervention; Low requires nominal monitoring.",example:"MEDIUM RISK indicates proactive administrative tracking needed.",modelUsage:"Derived classification based on calibrated probability threshold bounds."},risk_thresholds:{title:"Risk Policy Thresholds",short:"Statutory cutoff boundaries defining risk tier categorization.",whatItMeans:"Pre-defined policy bands: Low (<40%), Medium (40-60%), High (60-80%), Critical (≥80%).",whyItMatters:"Provides standardized governance classification across all state jurisdictions.",howToInterpret:"Corridors crossing 60% are automatically escalated to state monitoring.",example:"A project at 60.5% crosses into High Bottleneck Tier.",modelUsage:"Policy configuration applied to raw model output probabilities."},model_confidence:{title:"Model Confidence Score",short:"Empirical reliability index based on validation across 3,000,000 national records.",whatItMeans:"Statistical confidence interval derived from model cross-validation (ROC-AUC 0.7805).",whyItMatters:"Provides officers with transparency into model certainty.",howToInterpret:"Higher confidence indicates dense training data coverage for this corridor archetype.",example:"91.4% confidence based on comparable highway corridors in training dataset.",modelUsage:"System reliability metric displayed alongside prediction."},risk_drivers_increasing:{title:"Risk-Increasing Factors (+Δ)",short:"Telemetry inputs that push the predicted delay probability upward based on model tree splits.",whatItMeans:"Specific project conditions (e.g. pending documents, stay cases) that increase risk.",whyItMatters:"Highlights the exact operational bottlenecks that administrative action must target.",howToInterpret:"Higher positive contribution (+Δ) indicates stronger upward influence on risk.",example:"Documents Pending (+0.4215 contribution) is the primary risk driver.",modelUsage:"Extracted from XGBoost gradient boosting tree contributions (SHAP-aligned margins)."},risk_drivers_reducing:{title:"Risk-Reducing Factors (-Δ)",short:"Telemetry inputs that pull the predicted delay probability downward based on model tree splits.",whatItMeans:"Positive project conditions (e.g. high acquisition progress, zero disputes) that mitigate risk.",whyItMatters:"Affirms operational domains where project execution is healthy.",howToInterpret:"Higher negative contribution (-Δ) indicates stronger dampening effect on risk.",example:"Acquisition Velocity (-0.1840 contribution) actively mitigates delay probability.",modelUsage:"Extracted from XGBoost gradient boosting tree contributions."},statutory_directives:{title:"Recommended Statutory Directives",short:"Prioritized administrative recommendations generated based on top risk contributors.",whatItMeans:"Actionable legal and operational directives aligned with RFCTLARR provisions.",whyItMatters:"Guides CALA officers directly from analytical insight to administrative execution.",howToInterpret:"P1 indicates immediate mandatory action; P2 indicates secondary operational follow-up.",example:"P1 Priority: Conduct special village mutation camps to resolve title verification backlog.",modelUsage:"Rule-based expert system mapping model risk drivers to RFCTLARR statutory actions."},methodology_evaluation:{title:"Model Methodology & Metrics",short:"Technical specifications and evaluation benchmarks of the Bhoomi Sakha inference engine.",whatItMeans:"XGBoost binary classifier operating across 76 engineered cadastral features.",whyItMatters:"Ensures algorithmic transparency, accountability, and defensibility for governance users.",howToInterpret:"Accuracy: 71.05%, ROC-AUC: 0.7805, Precision: 68.07%, Recall: 71.98% across 3M records.",example:"Inference executed via FastAPI endpoint POST /predict with sub-second latency.",modelUsage:"System architecture specification."},statutory_presets:{title:"Statutory Test Presets",short:"Calibrated benchmark scenarios representing typical infrastructure project profiles.",whatItMeans:"Pre-configured datasets for Low, Baseline/Medium, High, and Critical risk corridors.",whyItMatters:"Enables instant evaluation and testing of model responsiveness without manual entry.",howToInterpret:"Click any preset pill to populate the entire telemetry matrix.",example:"Western Corridor loads the baseline 42.3% risk model profile.",modelUsage:"UI convenience utility loading predefined feature vectors."},mode_select_project:{title:"Select Existing Project",short:"Mode to load real vetted project telemetry from the national cadastral registry.",whatItMeans:"Inspects actual ongoing infrastructure corridor data without editing.",whyItMatters:"Used for executive audits of active government corridors.",howToInterpret:"Switch to this mode when conducting formal statutory review.",example:"Loads Delhi-Amritsar Expressway Pkg 4 telemetry.",modelUsage:"UI operational state switch."},mode_test_scenario:{title:"Create / Test Scenario",short:"Interactive simulation mode to modify telemetry inputs and observe risk impact.",whatItMeans:'Sensitivity testing cockpit allowing officers to simulate "what-if" administrative actions.',whyItMatters:"Helps determine whether expediting documents or settling disputes will bring a corridor into Low Risk.",howToInterpret:"Adjust inputs (e.g. reduce pending docs) and re-assess to view risk delta.",example:"Reducing pending docs from 232 to 50 lowers predicted risk from 42% to 28%.",modelUsage:"Interactive inference testing mode."},assess_project_risk:{title:"Assess Project Risk Button",short:"Executes real-time inference by transmitting form telemetry to the XGBoost backend.",whatItMeans:"Calls the FastAPI /predict endpoint and renders updated delay probability and factor contributions.",whyItMatters:"Produces the binding risk assessment score and statutory directives.",howToInterpret:"Click after adjusting any telemetry values to refresh the assessment.",example:"Submits 76 feature parameters and returns radial score in < 200ms.",modelUsage:"Primary action trigger for model inference."},reset_values:{title:"Reset Values Button",short:"Restores all telemetry input fields to the active preset baseline values.",whatItMeans:"Clears temporary manual edits and re-syncs with the calibrated scenario profile.",whyItMatters:"Ensures quick return to known baseline after experimental testing.",howToInterpret:"Use when wanting to discard manual modifications.",example:"Restores Western Corridor baseline values.",modelUsage:"Form state reset utility."},retry_assessment:{title:"Retry Assessment",short:"Re-transmits the inference request if a network or backend service interruption occurs.",whatItMeans:"Attempts to reconnect with the prediction service and re-evaluate project telemetry.",whyItMatters:"Recovers gracefully from temporary connectivity issues without data loss.",howToInterpret:'Click if an "Inference Unavailable" alert is displayed.',example:"Re-establishes connection with FastAPI service.",modelUsage:"Error recovery utility."},read_aloud:{title:"Read Aloud (TTS)",short:"Browser-native text-to-speech synthesis narrating visible text in the active language.",whatItMeans:"Speaks out the assessment findings using Indian regional voices (en-IN, hi-IN, mr-IN).",whyItMatters:"Improves accessibility for multi-lingual field officers and auditory review.",howToInterpret:"Click Read to start, Pause to pause, Stop to cancel.",example:'Narrates: "Bhoomi Sakha assessment outcome. Delay probability: 42.3%..."',modelUsage:"Accessibility feature powered by native window.speechSynthesis."},dash_total_projects:{title:"Total Projects Monitored",short:"Total infrastructure corridors currently monitored across the national pipeline.",whatItMeans:"Aggregate count of active linear and node infrastructure projects in the cadastral database.",whyItMatters:"Reflects total capital governance scope across highways, rail, energy, and urban transit.",howToInterpret:"Covers 142 national projects spanning 46 highways, 38 freight, and 58 energy/urban corridors.",example:"142 projects monitored across 24 states.",modelUsage:"Portfolio aggregation metric."},dash_high_critical:{title:"High / Critical Risk Corridors",short:"Count of monitored projects classified in the High (60-80%) or Critical (≥80%) delay probability tiers.",whatItMeans:"Corridors facing severe documentary, judicial, or stakeholder bottlenecks.",whyItMatters:"Directs ministerial and secretarial intervention to the most vulnerable 20% of projects.",howToInterpret:"Tracks whether the portfolio bottleneck count is shrinking or expanding sprint-over-sprint.",example:"29 projects (20.4% of portfolio) currently require executive tracking.",modelUsage:"Governance escalation index."},dash_intervention:{title:"Requiring Intervention",short:"Projects flagged with immediate statutory bottlenecks requiring district magistrate action.",whatItMeans:"Corridors with pending Section 19 cutoff deadlines, active stay orders, or escrow delays.",whyItMatters:"Represents actionable administrative escalations for the current governance cycle.",howToInterpret:"Each case requires targeted CALA directive (e.g. special mutation camp, stay vacation).",example:"14 immediate actions: 8 document bottlenecks, 6 compensation escrows.",modelUsage:"Actionable governance indicator."},dash_avg_risk:{title:"Average Delay Risk",short:"Arithmetic mean of predicted delay probabilities across all monitored national projects.",whatItMeans:"Portfolio-wide delay risk health index (currently 36.8%).",whyItMatters:"Measures macro health of national land acquisition governance against state baselines.",howToInterpret:"< 40% indicates portfolio is in the manageable Low-Medium risk zone.",example:"36.8% portfolio average with -2.4% variance vs state historical average.",modelUsage:"Macro portfolio health metric."},dash_risk_distribution:{title:"Portfolio Risk Distribution",short:"Proportional breakdown of national corridors across the four standardized risk tiers.",whatItMeans:"Segmented distribution bar: Critical (8%), High (13%), Medium (34%), Low (45%).",whyItMatters:"Visualizes risk skew and identifies whether systemic bottlenecks are accumulating.",howToInterpret:"An expanding Critical/High segment indicates emerging macro-level delays.",example:"65 projects (45%) in Low risk tier; 11 projects (8%) in Critical tier.",modelUsage:"Macro segmentation visualizer."},dash_key_drivers:{title:"Key Risk Drivers",short:"Aggregated frequency of root-cause bottlenecks identified by model tree contributions.",whatItMeans:"Cross-project ranking of primary friction sources: Documentation, Possession, Disputes, Approvals.",whyItMatters:"Informs systemic policy interventions (e.g. digital mutation drives, Lok Adalat special benches).",howToInterpret:"Documentation backlog (38%) is the leading contributor to project delays nationwide.",example:"38% Documentation, 27% Possession, 19% Disputes, 16% Approvals.",modelUsage:"Systemic feature contribution aggregation."},dash_triangulation_alert:{title:"Predictive Triangulation Alert",short:"Automated early warning generated from cross-project pattern correlation.",whatItMeans:"AI detection of emergent risks based on corridor characteristics and regional priors.",whyItMatters:"Warns administrators of probable dispute escalation before formal petitions are filed.",howToInterpret:"Review recommendation and schedule proactive stakeholder hearings.",example:"Industrial agro-zones face 82% likelihood of Section 15 objection escalation within 14 days.",modelUsage:"Pattern recognition derived from model historical training correlates."},dash_priority_projects:{title:"Priority Projects Table",short:"Cadastral escalation ledger prioritizing corridors by predicted delay probability.",whatItMeans:"Sorted table of national infrastructure projects requiring administrative oversight.",whyItMatters:"Allows officers to quickly drill down into high-risk projects and trigger audits.",howToInterpret:"Projects sorted with Critical risks at top; click Assess or Audit to inspect.",example:"Delhi-Amritsar Expressway (84.6% delay risk) listed as top priority.",modelUsage:"Interactive governance ledger."},proj_directory_filter_sector:{title:"Sector Filter",short:"Filters the project directory by infrastructure category (Highway, Rail, Power, Metro).",whatItMeans:"Segmented view to inspect sector-specific corridors.",whyItMatters:"Enables sectoral review for ministry nodal officers.",howToInterpret:"Select a sector from the dropdown to isolate matching records.",example:"Select Highway to view only national expressway corridors.",modelUsage:"Table filtering control."},proj_directory_filter_risk:{title:"Risk Tier Filter",short:"Filters the project directory by classified delay risk tier.",whatItMeans:"Isolates Critical, High, Medium, or Low risk projects in the ledger.",whyItMatters:"Enables officers to quickly audit all projects in a specific escalation bracket.",howToInterpret:"Filter by Critical to inspect projects requiring immediate executive action.",example:"Filter by Critical (≥80%) to isolate emergency intervention projects.",modelUsage:"Table filtering control."},proj_col_stage:{title:"Statutory Stage Column",short:"The gazetted legal milestone currently active under the RFCTLARR framework.",whatItMeans:"Indicates procedural progress from notification through survey, award, and possession.",whyItMatters:"Helps assess whether a project is tracking normally or stagnating in a particular stage.",howToInterpret:'Projects lingering in "Sec 19 Declaration" for > 10 months are at risk of statutory lapse.',example:"Sec 19 Declaration, Compensation Award, Joint Survey 3A.",modelUsage:"Statutory milestone display."},proj_action_assess:{title:"Assess Project Action",short:"Loads the selected project telemetry into the Assessment Cockpit for detailed re-evaluation.",whatItMeans:"Transfers the project feature snapshot to the simulation screen.",whyItMatters:'Enables officers to run "what-if" scenarios and adjust parameters for that specific project.',howToInterpret:"Click Assess to open the interactive cockpit pre-filled with this project.",example:"Opens Western Corridor in the Assessment Cockpit.",modelUsage:"Cockpit deep-link action."},proj_action_audit:{title:"Audit File Action",short:"Navigates to the comprehensive administrative audit dossier for the selected corridor.",whatItMeans:"Opens the deep-dive dossier showing land parcels, escrow funds, and draft DC orders.",whyItMatters:"Provides full administrative visibility into cadastral records and legal vectors.",howToInterpret:"Click Audit to review the complete statutory file and DC order preview.",example:"Opens audit dossier for project BF-NH-2024-09.",modelUsage:"Dossier deep-link action."},detail_statutory_hash:{title:"Statutory Audit Hash",short:"Cryptographic SHA-256 fingerprint certifying data integrity and provenance.",whatItMeans:"Unique cryptographic identifier generated from the verified revenue record snapshot.",whyItMatters:"Guarantees tamper-evident traceability under national cadastral modernization protocols.",howToInterpret:"Matches the digital signature on the gazetted Section 19 declaration.",example:"SHA256-7D88-LUD certifying Ludhiana district package 4.",modelUsage:"System security and audit compliance feature."},detail_model_inference:{title:"Model Inference Status",short:"Indicates that displayed metrics are synchronized live with the XGBoost inference model.",whatItMeans:"Real-time telemetry link confirming that predictions reflect current database state.",whyItMatters:"Assures officers that risk assessments are based on up-to-date cadastral data.",howToInterpret:'"Live Synchronized" indicates active connection with inference service.',example:"Live Synchronized via FastAPI microservice.",modelUsage:"System telemetry status indicator."},detail_land_requisition:{title:"Total Land Requisition",short:"Total land area gazetted for acquisition across all impacted revenue villages.",whatItMeans:"The complete surface footprint authorized under Section 19 declaration.",whyItMatters:"Establishes total land parcel requirements and compensation budget.",howToInterpret:"Spread over 14 revenue villages indicates multi-tehsil coordination required.",example:"184.20 Hectares across 14 villages.",modelUsage:"Core project scale metric."},detail_affected_landowners:{title:"Affected Landowners & Khatas",short:"Total registered khata revenue accounts and pending title mutation disputes.",whatItMeans:"Number of distinct landholding accounts entitled to compensation.",whyItMatters:"Unresolved mutations delay award disbursement and risk court challenges.",howToInterpret:"410 unresolved mutations out of 1,892 khatas indicates high title verification backlog.",example:"1,892 Khatas with 410 mutations unresolved.",modelUsage:"Ownership and title verification metric."},detail_sanctioned_escrow:{title:"Sanctioned Escrow Budget",short:"Total compensation escrow funds deposited with the Competent Authority (CALA).",whatItMeans:"Dedicated bank escrow account created to fund compensation awards.",whyItMatters:"Funds must be credited to landowners before physical possession can be taken under §38.",howToInterpret:"₹29.60 Cr undisbursed indicates funds are available but held up by documentation verification.",example:"₹62.00 Cr sanctioned, ₹29.60 Cr pending disbursement.",modelUsage:"Financial liquidity and disbursement metric."},detail_cutoff_timeline:{title:"Section 19 Statutory Cutoff Timeline",short:"Monitors the strict 12-month statutory deadline between Section 11 notice and Section 19 declaration.",whatItMeans:"Under RFCTLARR §19(7), if declaration is not published within 12 months, notification lapses entirely.",whyItMatters:"Lapse requires restarting the entire land acquisition process from scratch at severe financial loss.",howToInterpret:"48 hours remaining indicates emergency action required to publish declaration.",example:"+94 Days Slippage Risk flags critical path bottleneck in ownership verification.",modelUsage:"Statutory compliance deadline monitor."},detail_progress_gauges:{title:"Multi-Domain Acquisition Progress Gauges",short:"Operational progress meters synchronized with the state e-Bhoomi records registry.",whatItMeans:"Tracks progress across 5 distinct domains: Overall, Joint Survey, Sec 23 Award, Physical ROW, and DBT Escrow.",whyItMatters:"Identifies exactly which domain (survey, legal award, physical possession, or payment) is lagging.",howToInterpret:"Discrepancy between Award (34%) and Possession (29%) highlights on-ground handover friction.",example:"Overall Progress 42%, Joint Survey 68%, Sec 23 Award 34%, Physical ROW 29%, DBT Escrow 52%.",modelUsage:"Multi-domain operational telemetry."},detail_draft_dc_order:{title:"Prototype Draft DC Order",short:"Simulated administrative directive preview generated for governance demonstration.",whatItMeans:"A pre-populated prototype memo showing how automated risk insights translate into administrative orders.",whyItMatters:"Demonstrates end-to-end governance workflow from AI prediction to executive intervention.",howToInterpret:"PROTOTYPE SIMULATION ONLY — not an official government order and carries no legal authority without official DC signature.",example:"Pre-fills SLAO and SDM directives for joint inspection and DBT acceleration.",modelUsage:"Prototype governance simulation feature."},notif_severity:{title:"Alert Severity Level",short:"Urgency classification indicating the required administrative response speed.",whatItMeans:"Critical: Immediate action required; High: Review within 24 hours; Nominal: Informational update.",whyItMatters:"Prevents alert fatigue by highlighting high-stakes statutory deadlines.",howToInterpret:"Red border indicates Critical; Orange indicates High; Blue indicates System update.",example:"Critical alert for 84.6% delay risk on Delhi-Amritsar Expressway.",modelUsage:"Alert triage classification."},notif_categories:{title:"Notification Category",short:"Categorizes alerts by functional origin within the Bhoomi Sakha platform.",whatItMeans:"Risk Alert (model predictions), Engine (FastAPI/XGBoost status), Officer Attention (backlogs), System (platform sync).",whyItMatters:"Enables filtering and routing alerts to relevant departmental specialists.",howToInterpret:"Use category pills to focus on risk warnings or operational notices.",example:"Risk Alert: Section 19 intervention required.",modelUsage:"Functional alert classification."},notif_unread_state:{title:"Read / Unread Status",short:"Tracks whether an operational alert has been acknowledged by the reviewing officer.",whatItMeans:"Unread alerts show a prominent indicator and increment the header notification badge.",whyItMatters:"Ensures critical statutory warnings are not overlooked in the daily administrative workflow.",howToInterpret:"Click checkmark icon to toggle read status; click Mark All Read to clear badge.",example:'Unread alert displayed with glowing indicator and "New" badge.',modelUsage:"User notification tracking."}},tts:{read:"Read",read_aloud:"Read aloud",read_aria:"Read assessment aloud",pause:"Pause",resume:"Resume",stop:"Stop",stop_reading:"Stop reading",stop_aria:"Stop reading aloud"},stages:{"Sec 19 Declaration":"Sec 19 Declaration","Compensation Award":"Compensation Award (Sec 23)","Joint Survey 3A":"Joint Survey 3A",Notification:"Notification (Sec 11/3A)",Rehabilitation:"Rehabilitation & Resettlement (R&R)",Valuation:"Land & Asset Valuation",Survey:"Cadastral & Joint Survey",Compensation:"Compensation Determination & Escrow",Possession:"Physical Possession & ROW"},factors:{documents_pending:"Documents Pending",documents_required:"Documents Required",documentation_completion_pct:"Documentation Completion",compensation_pending_cases:"Compensation Pending Cases",compensation_pending_amount:"Compensation Pending Amount",compensation_total_amount:"Compensation Total Amount",compensation_completion_pct:"Compensation Completion",pending_objections:"Pending Objections",active_legal_disputes:"Active Legal Disputes",ownership_disputes:"Ownership Disputes",court_stay_cases:"Court Stay Cases",approvals_pending:"Approvals Pending",overdue_approvals:"Overdue Approvals",avg_approval_delay_days:"Avg Approval Delay Days",rr_pending_cases:"R&R Pending Cases",rr_completion_pct:"R&R Completion %",possession_pending_parcels:"Possession Pending Parcels",parcels_pending:"Parcels Pending",acquisition_progress_pct:"Acquisition Progress %",acquisition_velocity_pct_per_30d:"Acquisition Velocity",schedule_variance_days:"Schedule Variance Days",milestones_overdue:"Milestones Overdue",pending_stakeholder_actions:"Pending Stakeholder Actions",avg_stakeholder_response_days:"Avg Stakeholder Response Days",stakeholder_responsiveness_score:"Stakeholder Responsiveness Score",complexity_score:"Complexity Score",planned_duration_days:"Planned Duration Days",affected_families:"Affected Families",total_parcels:"Total Parcels",historical_avg_delay_days:"Historical Avg Delay Days",project_type_highway:"Project Type: Highway",project_type_railway:"Project Type: Railway",land_type_agricultural:"Land Classification: Agricultural",priority_critical:"Priority Tier: Critical",priority_high:"Priority Tier: High"},recommendations:{compensation_pending_cases:"Prioritize unresolved compensation cases and accelerate disbursement.",compensation_pending_amount:"Review outstanding compensation funds and resolve payment bottlenecks.",compensation_total_amount:"Review total sanctioned compensation allocation and disbursement schedule.",compensation_completion_pct:"Review incomplete compensation processing and prioritize remaining cases.",pending_objections:"Review unresolved objections and prioritize those blocking acquisition.",active_legal_disputes:"Escalate unresolved legal disputes and identify cases blocking acquisition.",ownership_disputes:"Prioritize ownership verification and disputed-title resolution.",court_stay_cases:"Track court stay cases separately and coordinate legal resolution.",documents_pending:"Prioritize verification of pending land and ownership documents.",documentation_completion_pct:"Accelerate document verification and resolve missing documentation.",documents_required:"Review the project's documentation requirements and verification workload.",approvals_pending:"Escalate pending approvals to the responsible authority.",overdue_approvals:"Escalate overdue approvals and establish clear resolution deadlines.",avg_approval_delay_days:"Review delayed approval workflows and escalate slow authorities.",rr_pending_cases:"Prioritize rehabilitation and resettlement cases.",rr_completion_pct:"Accelerate outstanding rehabilitation and resettlement actions.",possession_pending_parcels:"Identify parcels blocking possession and prioritize their resolution.",parcels_pending:"Identify pending acquisition parcels and remove their individual bottlenecks.",acquisition_progress_pct:"Review acquisition progress against the planned project schedule.",acquisition_velocity_pct_per_30d:"Investigate low acquisition velocity and identify recent process bottlenecks.",schedule_variance_days:"Review the critical path and address overdue milestones.",milestones_overdue:"Review overdue milestones and assign corrective actions.",pending_stakeholder_actions:"Escalate pending stakeholder actions and establish response deadlines.",avg_stakeholder_response_days:"Escalate slow stakeholder responses and set resolution deadlines.",stakeholder_responsiveness_score:"Review stakeholder coordination and outstanding responses.",complexity_score:"Apply closer monitoring because of the project's overall complexity.",planned_duration_days:"Review whether the project schedule adequately reflects its complexity.",affected_families:"Consider additional coordination due to the scale of affected families.",total_parcels:"Review parcel-level acquisition planning and outstanding cases.",historical_avg_delay_days:"Review this factor as part of the project risk assessment.",project_type_highway:"Review road infrastructure acquisition bottlenecks along the highway corridor.",project_type_railway:"Coordinate with railway authorities for linear corridor clearance.",land_type_agricultural:"Review crop cycles and farmer consultation schedules under Section 11.",priority_critical:"Apply apex-level executive oversight and accelerated interdepartmental clearances.",priority_high:"Conduct bi-weekly review meetings to clear statutory roadblocks.",default:"Review this factor as part of the project risk assessment.",reducing_risk:"This factor is currently reducing the predicted delay risk."},notifications:{title:"System Notifications",unread:"Unread",allCaughtUp:"All Caught Up",subtitle:"Application alerts, inference milestones, and statutory threshold notifications generated by Bhoomi Sakha.",markAllRead:"Mark All Read",resetDemoAlerts:"Reset Demo Alerts",filterAll:"All",filterUnread:"Unread",severity:"Severity",categoriesLabel:"Categories",categories:{"Risk Alert":"Risk Alert",Engine:"Engine","Officer Attention":"Officer Attention",System:"System"},readState:"Read State",noNotifications:"No notifications to display",noNotificationsDesc:"There are currently no notifications under this filter.",newTag:"New",markAsUnread:"Mark as Unread",markAsRead:"Mark as Read",timestamps:{"15 mins ago":"15 mins ago","1 hour ago":"1 hour ago","3 hours ago":"3 hours ago","Today, 09:30 AM":"Today, 09:30 AM"},items:{"notif-crit-1":{title:"Critical delay risk detected in current assessment",summary:"Delhi-Amritsar Expressway (Pkg 4) evaluated with 84.6% delay probability requiring urgent Section 19 intervention.",actionLabel:"Inspect Assessment"},"notif-engine-2":{title:"Backend prediction engine connected",summary:"FastAPI service connected with 76 engineered cadastral features ready for live XGBoost inference.",actionLabel:"View Dashboard"},"notif-atten-3":{title:"Assessment contains factors requiring officer attention",summary:"18 high-bottleneck parcel cases in Western Freight Corridor flagged for documentation backlog review.",actionLabel:"Review Factors"},"notif-stat-4":{title:"Risk assessment pipeline initialized",summary:"National Cadastral Matrix synchronized with 142 monitored infrastructure corridors.",actionLabel:"Projects Directory"}}}},He={auth:{loginTitle:"भूमि सखा में प्रवेश करें",citizenTab:"नागरिक / भूमि स्वामी",officerTab:"राजस्व अधिकारी",citizenWelcomeSubtitle:"भूमि अधिकार, शिकायत निवारण और संभावित विलंब विश्लेषण",officerWelcomeSubtitle:"राष्ट्रीय भूमि अधिग्रहण कमांड एवं प्रकरण प्रबंधन केंद्र",citizenSignInBtn:"नागरिक पोर्टल में प्रवेश करें",officerSignInBtn:"अधिकारी कमांड सेंटर में प्रवेश करें",citizenRegisterBtn:"नागरिक खाता बनाएं",officerRegisterBtn:"राजस्व अधिकारी खाता पंजीकृत करें",emailLabel:"ईमेल पता",emailPlaceholder:"citizen@example.com",officerEmailPlaceholder:"officer.name@gov.in",passwordLabel:"पासवर्ड",passwordPlaceholder:"अपना पासवर्ड दर्ज करें",showPassword:"पासवर्ड दिखाएं",hidePassword:"पासवर्ड छिपाएं",fullNameLabel:"पूरा नाम",fullNamePlaceholder:"उदा. रामेश्वर पाटिल",districtLabel:"जिला",districtPlaceholder:"उदा. पुणे",phoneLabel:"फ़ोन नंबर",phonePlaceholder:"उदा. +91 9822001122",officerKeyLabel:"अधिकारी पंजीकरण प्राधिकरण कुंजी",signingIn:"प्रमाणीकरण हो रहा है...",registering:"खाता बनाया जा रहा है...",needAccount:"क्या आपका अभी तक कोई खाता नहीं है?",haveAccount:"क्या आपके पास पहले से एक खाता है?",switchToRegister:"नया खाता बनाएं",switchToLogin:"साइन इन करें",signInBtn:"प्रवेश करें",signOutBtn:"साइन आउट",signedOutToast:"सफलतापूर्वक साइन आउट किया गया।",accessDeniedCitizen:"पहुंच प्रतिबंधित: नागरिक खाते अधिकारी कमांड सेंटर तक नहीं पहुंच सकते।",accessDeniedOfficer:"पहुंच प्रतिबंधित: अधिकारी खाते सीधे नागरिक पोर्टल में प्रवेश नहीं कर सकते।",sessionVerifying:"सुरक्षित सत्र सत्यापित किया जा रहा है..."},header:{platformName:"भूमि सखा",sihBadge:"SIH 2026 • PS ID 26017",subtitle:"पूर्वानुमानित भूमि अधिग्रहण विलंब-जोखिम प्रणाली",statusConnecting:"बैकएंड: कनेक्ट हो रहा है...",statusConnected:"फास्टएपीआई कनेक्टेड • एक्सजीबूस्ट इंजन सक्रिय",statusUnavailable:"बैकएंड अनुपलब्ध • पुनः प्रयास करने के लिए क्लिक करें",commandCenter:"कमांड सेंटर",statutoryCutoff:"सांविधिक समय-सीमा: 48 घंटे शेष",istClock:"IST",officerName:"डॉ. आर. के. शर्मा",officerRole:"आईएएस, भूमि आयुक्त",openNotifications:"अधिसूचनाएं खोलें",toggleTheme:"थीम बदलें",selectLanguage:"भाषा चुनें",toggleMenu:"नेविगेशन मेनू खोलें"},footer:{description:"स्मार्ट इंडिया हैकाथॉन 2026 • समस्या विवरण आईडी 26017 • राष्ट्रीय भूमि अभिलेख आधुनिकीकरण कार्यक्रम (NLRMP) संरचना",auditNode:"ऑडिट नोड: 0x88F2B7",protocol:"सटीक कैडस्ट्रल सत्यापन प्रोटोकॉल v4.1"},nav:{dashboard:"डैशबोर्ड",cases:"मामला कतार",assessment:"जोखिम आकलन",projects:"परियोजना निर्देशिका",audit:"ऑडिट विवरण",notifications:"अधिसूचनाएं",citizenDashboard:"डैशबोर्ड",citizenLands:"मेरी भूमि",citizenRisk:"विलंब जोखिम जांचें",citizenComplaint:"शिकायत दर्ज करें",citizenCases:"मेरे मामले"},views:{dashboard:"राष्ट्रीय कैडस्ट्रल मैट्रिक्स (सिंहावलोकन)",cases:"भूमि अधिग्रहण शिकायत एवं मामला कतार","officer-case-workspace":"अधिकारी मामला कार्यक्षेत्र एवं डोजियर",assessment:"पूर्वानुमानित विलंब-जोखिम आकलन कॉकपिट",projects:"राष्ट्रीय भूमि अधिग्रहण परियोजना निर्देशिका",audit:"कैडस्ट्रल एवं जोखिम विस्तृत डोजियर",notifications:"प्रणाली अधिसूचनाएं एवं परिचालन अलर्ट","citizen-dashboard":"नागरिक अधिग्रहण डैशबोर्ड","citizen-lands":"भूमि पार्सल एवं कैडस्ट्रल अभिलेख","citizen-risk":"भूमि अधिग्रहण विलंब जोखिम अनुमानक","citizen-complaint":"भूमि अधिग्रहण शिकायत दर्ज करें","citizen-cases":"शिकायत डोजियर एवं लाइव ट्रैकिंग"},dropdown:{project_type:{highway:"राष्ट्रीय राजमार्ग (Highway)",railway:"रेलवे / मालभाड़ा गलियारा (Railway)",industrial:"औद्योगिक नोड (Industrial)",metro:"मेट्रो रेल (Metro)",irrigation:"सिंचाई परियोजना (Irrigation)",power:"विद्युत ग्रिड / सौर पार्क (Power)",urban_development:"शहरी विकास (Urban Development)"},land_type:{agricultural:"कृषि भूमि (Agricultural)",commercial:"व्यावसायिक भूमि (Commercial)",industrial:"औद्योगिक भूमि (Industrial)",mixed:"मिश्रित राजस्व भूमि (Mixed)",residential:"आवासीय भूमि (Residential)"},priority:{normal:"सामान्य (Normal)",high:"उच्च (High)",critical:"अति-गंभीर (Critical)"}},risk:{low:"कम",medium:"मध्यम",high:"उच्च",critical:"अति-गंभीर",lowRisk:"कम जोखिम",mediumRisk:"मध्यम जोखिम",highRisk:"उच्च जोखिम",criticalRisk:"अति-गंभीर जोखिम",lowTier:"कम विलंब श्रेणी",mediumTier:"मध्यम जोखिम श्रेणी",highTier:"उच्च अवरोध श्रेणी",criticalTier:"अति-गंभीर स्थगन श्रेणी",lowWording:"वर्तमान परियोजना स्थिति के आधार पर कम विलंब जोखिम",mediumWording:"वर्तमान परियोजना स्थिति के आधार पर मध्यम विलंब जोखिम",highWording:"वर्तमान परियोजना स्थिति के आधार पर उच्च विलंब जोखिम",criticalWording:"वर्तमान परियोजना स्थिति के आधार पर अति-गंभीर विलंब जोखिम",lowSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर कम अनुमानित विलंब जोखिम।",mediumSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर मध्यम अनुमानित विलंब जोखिम।",highSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर उच्च अनुमानित विलंब जोखिम।",criticalSummary:"वर्तमान परियोजना स्नैपशॉट के आधार पर अति-गंभीर अनुमानित विलंब जोखिम।",lowThreshold:"जोखिम स्तर: कम (सीमा < 40%)",mediumThreshold:"जोखिम स्तर: मध्यम (सीमा: 40% – 59.9%)",highThreshold:"जोखिम स्तर: उच्च (सीमा: 60% – 79.9%)",criticalThreshold:"जोखिम स्तर: अति-गंभीर (सीमा ≥ 80%)",tier:"श्रेणी"},dashboard:{pipelineBadge:"राष्ट्रीय अवसंरचना पाइपलाइन • MoRTH / MoR एनालिटिक्स",title:"भूमि अधिग्रहण अभिसूचना",subtitle:"महत्वपूर्ण राष्ट्रीय अवसंरचना गलियारों में परियोजना प्रगति की निगरानी करें, उभरते विलंब जोखिमों की पहचान करें और त्वरित प्रशासनिक हस्तक्षेप को प्राथमिकता दें।",runScan:"राष्ट्रीय जोखिम स्कैन चलाएं",scanning:"142 राष्ट्रीय परियोजनाओं का स्कैन जारी है...",scanCompleted:"राष्ट्रीय स्कैन पूर्ण: 29 उच्च/अति-गंभीर जोखिमों की पहचान की गई।",launchCockpit:"आकलन कॉकपिट खोलें",totalProjects:"कुल मॉनिटर की जा रही परियोजनाएं",totalProjectsCount:"142 परियोजनाएं",totalProjectsDesc:"46 राष्ट्रीय राजमार्ग, 38 मालभाड़ा, 58 ऊर्जा एवं शहरी गलियारे",highCriticalRisk:"उच्च / अति-गंभीर जोखिम",highCriticalCount:"29 परियोजनाएं",highCriticalDesc:"पिछले चक्र से +3 • 18 उच्च, 11 अति-गंभीर",requiringIntervention:"हस्तक्षेप की आवश्यकता",interventionCount:"14 त्वरित कार्रवाइयां",interventionDesc:"8 दस्तावेज अवरोध, 6 मुआवजा एस्क्रो मामले",avgDelayRisk:"औसत विलंब जोखिम",modelConfidence:"मॉडल विश्वास स्तर 95%",lowMediumZone:"निम्न-मध्यम क्षेत्र",baselineVariance:"राज्य औसत की तुलना में आधारभूत विचलन -2.4%",riskOverview:"जोखिम अवलोकन एवं वितरण",portfolioBreakdown:"राष्ट्रीय पोर्टफोलियो वितरण (N=142)",liveModelActive:"लाइव मॉडल सक्रिय",actionPlanMandatory:"कार्य योजना अनिवार्य",stagnationWatchlist:"गतिरोध निगरानी सूची",statutoryTracking:"सांविधिक ट्रैकिंग जारी",nominalTrajectory:"सामान्य गति",keyRiskDrivers:"प्रमुख जोखिम कारक",rootCauseCluster:"मूल कारण समूह",driverDocumentation:"दस्तावेज बैकलॉग (स्वामित्व व धारा 3A)",driverPossession:"कब्जा विलंब (अतिक्रमण / भौतिक बाधाएं)",driverDisputes:"न्यायालय विवाद एवं स्थगनादेश",driverApprovals:"अंतर-विभागीय अनुमोदन अवरोध",predictiveTriangulationAlert:"पूर्वानुमानित त्रि-आयामी अलर्ट",triangulationAlertText:"सक्रिय तहसील सुनवाई के अभाव में कृषि-औद्योगिक गलियारों में 14 दिनों के भीतर धारा 15 आपत्तियों में 82% वृद्धि की संभावना है।",modelConfidenceTag:"मॉडल विश्वास: 91.4% (SIH मॉडल XG-26)",priorityProjects:"प्रशासनिक निगरानी की आवश्यकता वाली प्राथमिकता परियोजनाएं",cadastralEscalation:"विलंब संभावना के अनुसार क्रमबद्ध कैडस्ट्रल लेजर",searchPlaceholder:"परियोजना नाम या आईडी खोजें...",colId:"परियोजना आईडी",colName:"नाम एवं क्षेत्र",colDistrict:"जिला / राज्य",colProgress:"प्रगति",colRisk:"विलंब जोखिम",colTier:"श्रेणी",colAction:"कार्रवाई",assessBtn:"आकलन",auditBtn:"ऑडिट",noMatchingProjects:"कोई मेल खाती परियोजना नहीं मिली।"},assessment:{title:"परियोजना जोखिम का आकलन करें",engineBadge:"फास्टएपीआई • XGB-26017 इंजन",subtitle:"सांविधिक विलंब संभावना का अनुमान लगाने और POST /predict के माध्यम से मॉडल-आधारित जोखिम कारकों की जांच करने हेतु परियोजना टेलीमेट्री दर्ज या संपादित करें।",selectProject:"मौजूदा परियोजना चुनें",testScenario:"नया परिदृश्य बनाएं / परीक्षण करें",statutoryPresets:"सांविधिक परीक्षण प्रीसेट:",telemetryMatrices:"टेलीमेट्री इनपुट मैट्रिक्स",telemetrySubtitle:"धारा 11 और 19 वैधानिक दाखिलों के अनुसार कैडस्ट्रल विशेषताओं को कॉन्फ़िगर करें",resetValues:"मान रीसेट करें",sectionA:"खंड A • परियोजना रूपरेखा",coreClassification:"मूल वर्गीकरण",labelProjectType:"परियोजना प्रकार",labelLandType:"भूमि वर्गीकरण",labelPriority:"प्राथमिकता स्तर",labelComplexity:"जटिलता (0-100)",labelTotalParcels:"कुल खसरा / भूखंड",labelAffectedFamilies:"प्रभावित परिवार (PAFs)",labelLandArea:"भूमि क्षेत्र (हेक्टेयर)",labelPlannedDuration:"नियोजित अवधि (दिन)",sectionB:"खंड B • अधिग्रहण प्रगति",velocityActive:"गति सक्रिय",labelAcqProgress:"अधिग्रहण प्रगति (%)",labelVelocity:"गति (%/30 दिन)",labelParcelsPending:"लंबित भूखंड",labelPossessionPending:"कब्जा लंबित भूखंड",sectionC:"खंड C • दस्तावेजीकरण",keyModelDriver:"प्रमुख मॉडल कारक",labelDocsReq:"आवश्यक दस्तावेज़",labelDocsPending:"लंबित दस्तावेज़",labelDocCompletion:"दस्तावेज़ पूर्णता",adjustDocsPending:"लंबित दस्तावेज़ों की संख्या समायोजित करें",sectionD:"खंड D • मुआवजा वितरण",escrowTranche:"एस्क्रो किस्त",labelCompCases:"लंबित मामले",labelCompAmount:"लंबित राशि (₹ करोड़)",labelCompDisbursed:"संवितरित %",sectionE:"खंड E • वैधानिक स्वीकृतियां",interAgencyGate:"अंतर-विभागीय स्वीकृति",labelApprPending:"लंबित स्वीकृतियां",labelApprOverdue:"समय-सीमा पार स्वीकृतियां",labelApprDelay:"औसत विलंब (दिन)",sectionF:"खंड F • कानूनी विवाद एवं आपत्तियां",section15Hearings:"धारा 15 सुनवाई",labelPendingObj:"लंबित आपत्तियां",labelActiveDisputes:"सक्रिय भूमि विवाद",labelOwnerDisputes:"स्वामित्व संघर्ष",labelCourtStays:"न्यायालय स्थगनादेश / रिट",sectionG:"खंड G • पुनर्वास एवं पुनर्स्थापन (R&R)",rfctlarrCompliance:"आरएफसीटीएलएआरआर अनुपालन",labelRrPending:"लंबित मामले",labelRrCompletion:"पूर्णता %",sectionH:"खंड H • समय-सारणी एवं विचलन",criticalPath:"महत्वपूर्ण मार्ग (Critical Path)",labelSchedVariance:"समय विचलन (दिन)",labelMilestonesOverdue:"अतिदेय मील के पत्थर",sectionI:"खंड I • हितधारक समन्वय",responseLatency:"प्रतिक्रिया विलंबता",labelShActions:"लंबित कार्रवाइयां",labelShResponse:"औसत प्रतिक्रिया (दिन)",labelShScore:"स्कोर /10",sectionJ:"खंड J • ऐतिहासिक विलंब संदर्भ",regionalPriors:"क्षेत्रीय पूर्ववृत्त",labelHistDelay:"औसत क्षेत्रीय विलंब (दिन)",trainingArchetype:"प्रशिक्षण मॉडल स्वरूप:",linearInfra:"रैखिक अवसंरचना (NLRMP)",targetWindow:"पूर्वानुमान लक्ष्य: सांविधिक 5-वर्षीय समय-सीमा",mandateValidation:"LARR अधिनियम 2013 धारा 25 अधिदेश सत्यापन • एक्सजीबूस्ट इंजन",resetBtn:"रीसेट",assessRiskBtn:"परियोजना जोखिम का आकलन करें",analyzingTelemetry:"परियोजना टेलीमेट्री का विश्लेषण जारी है...",callingApi:"FastAPI POST /predict एवं XGBoost ट्री विश्लेषण सक्रिय",riskIndex:"पूर्वानुमानित जोखिम सूचकांक",predictedDelayProb:"पूर्वानुमानित विलंब संभावना",modelNote:"30 लाख राष्ट्रीय अभिलेखों पर प्रशिक्षित XGBoost मॉडल (SIH 26017) द्वारा अनुमानित। लाइव अनुमान POST /predict द्वारा।",riskIncreasingFactors:"जोखिम बढ़ाने वाले कारक",modelContributionPos:"मॉडल योगदान (+Δ)",noRiskIncreasing:"इस परियोजना स्थिति के लिए कोई प्रमुख जोखिम कारक नहीं मिला।",action:"कार्रवाई:",riskReducingFactors:"जोखिम कम करने वाले सहायक कारक",modelContributionNeg:"मॉडल योगदान (-Δ)",noRiskReducing:"कोई महत्वपूर्ण जोखिम-शामक कारक नहीं पाया गया।",mathematicalNote:"नोट: मान एक्सजीबूस्ट मॉडल के भीतर गणितीय प्रभाव को दर्शाते हैं, सीधे कारण नहीं हैं।",recommendedDirectives:"अनुशंसित सांविधिक निर्देश",priorityExecution:"प्राथमिकता निष्पादन",p1Priority:"P1 प्राथमिकता",p2Priority:"P2 प्राथमिकता",resolution:"समाधान",nominalDirectives:"सांविधिक प्रगति सामान्य है। धारा 19 प्रोटोकॉल के तहत नियमित निगरानी जारी रखें।",methodology:"कार्यप्रणाली एवं मॉडल मूल्यांकन",methodologyText:"भूमि सखा अनुमान इंजन RFCTLARR अधिनियम 2013 एवं राष्ट्रीय मानदंडों के अनुरूप 76 निर्मित विशेषताओं पर बाइनरी वर्गीकरण करता है।",accuracy:"सटीकता (Accuracy)",rocAuc:"आरओसी-एयूसी (ROC-AUC)",precision:"परिशुद्धता (Precision)",recall:"रिकॉल (Recall)",trainingDataset:"प्रशिक्षण डेटासेट",projectsEvaluated:"मूल्यांकित परियोजनाएं",treeContribs:"ट्री योगदान",treeContribsDesc:"विशेषता भार प्रत्येक परियोजना स्नैपशॉट पर सटीक ग्रेडिएंट बूस्टिंग मार्जिन प्रभाव दर्शाते हैं।",riskThresholds:"जोखिम सीमाएं",inferenceUnavailable:"अनुमान सेवा अनुपलब्ध",retryAssessment:"पुनः प्रयास करें",readAloudIntro:"भूमि सखा मूल्यांकन परिणाम।",labelCurrentStage:"वर्तमान सांविधिक चरण (Current Stage)",riskForecast:"जोखिम पूर्वानुमान (Risk Forecast)",delayProb:"विलंब संभावना",predictedOutcome:"पूर्वानुमानित परिणाम",awaitingInput:"टेलीमेट्री इनपुट की प्रतीक्षा...",statutoryNotice:"सूचना: सक्रिय इनपुट के आधार पर वास्तविक समय में अनुमान अद्यतन होता है।",serviceUnavailableMsg:"पूर्वानुमान सेवा अस्थायी रूप से अनुपलब्ध है। कृपया पुन: प्रयास करें।"},projects:{title:"राष्ट्रीय परियोजना निर्देशिका",subtitle:"सभी राज्य क्षेत्राधिकारों में सक्रिय अवसंरचना गलियारों, कैडस्ट्रल सत्यापन चरणों और अनुमानित विलंब जोखिमों का अन्वेषण करें।",newAssessment:"नया परियोजना आकलन",filterSector:"क्षेत्र के अनुसार फ़िल्टर (Filter by Sector)",allSectors:"सभी क्षेत्र (राजमार्ग, रेल, ऊर्जा, मेट्रो)",filterRisk:"जोखिम श्रेणी (Risk Tier)",allRisks:"सभी जोखिम श्रेणियां",searchPlaceholder:"नाम, आईडी या जिले द्वारा फ़िल्टर करें...",colId:"परियोजना आईडी",colName:"नाम एवं क्षेत्र (Name & Sector)",colDistrict:"राज्य एवं जिला (State & District)",colStage:"सांविधिक चरण (Statutory Stage)",colProgress:"अधिग्रहण प्रगति (Acquisition Progress)",colRisk:"पूर्वानुमानित विलंब जोखिम (Predicted Delay Risk)",colTier:"स्थिति श्रेणी (Status Tier)",colAction:"कार्रवाइयां (Actions)",assessRisk:"जोखिम आकलन (Assess Risk)",auditFile:"फाइल ऑडिट",noRecords:"राष्ट्रीय डेटाबेस में कोई मेल खाती प्रविष्टि नहीं मिली।",deepAudit:"गहन ऑडिट (Deep Audit)"},detail:{breadcrumbProjects:"परियोजनाएं",detailedAnalysis:"विस्तृत जोखिम विश्लेषण",statutoryHash:"सांविधिक हैश",modelInference:"मॉडल अनुमान",liveSynchronized:"लाइव सिंक किया गया",nationalCorridor:"राष्ट्रीय गलियारा",authorityWing:"सड़क परिवहन एवं राजमार्ग मंत्रालय प्रभाग",stage:"चरण",district:"जिला",alignment:"संरेखण (Alignment)",cala:"सक्षम प्राधिकारी भूमि अधिग्रहण (CALA)",division:"मंडल / प्रभाग",rerunAssessment:"पुनः आकलन चलाएं",draftDcOrder:"डीसी प्रारूप आदेश (Draft)",riskTier:"जोखिम श्रेणी",engineXgb:"XGB-26017 इंजन",modelDelayProb:"मॉडल विलंब संभावना",probability:"संभावना",predictedStatutoryImpact:"पूर्वानुमानित सांविधिक प्रभाव",modelConfidence:"मॉडल विश्वास स्तर",trainedRecords:"30,00,000 अभिलेखों पर प्रशिक्षित",totalRequisition:"कुल भूमि अधियाचन",spreadVillages:"14 राजस्व गांवों में विस्तारित",affectedLandowners:"प्रभावित भू-स्वामी",khatas:"खाते",unresolvedMutations:"410 नामांतरण अनिस्तारित",sanctionedEscrow:"स्वीकृत एस्क्रो राशि",undisbursedEscrow:"₹29.60 करोड़ अवितरित",statutoryCutoffLabel:"धारा 19 सांविधिक कटऑफ समयसीमा:",slippageRisk:"+94 दिन विलंब जोखिम",bottleneckFlag:"स्वामित्व सत्यापन और नामांतरण शिविर निस्तारण में क्रिटिकल पाथ बाधा चिह्नित।",progressGaugesTitle:"बहु-क्षेत्रीय भू-अधिग्रहण प्रगति गेज",progressGaugesSubtitle:"राज्य ई-भूमि अभिलेख रजिस्ट्री के साथ समन्वित भू-अभिलेखीय मेट्रिक्स",cycleAudit:"चक्र लेखापरीक्षा: FY26-Q1-सक्रिय",overallProgress:"समग्र प्रगति",jointSurvey:"संयुक्त सर्वेक्षण 3A",sec23Award:"धारा 23 पंचाट",physicalRow:"भौतिक कब्जा (ROW)",dbtEscrow:"डीबीटी एस्क्रो",dossierFor:"परियोजना डोजियर:",state:"राज्य",statutoryStage:"सांविधिक चरण (Statutory Stage)",modalPrototypeDraft:"प्रारूप आदेश (प्रोटोटाइप)",modalSimulationMode:"सिमुलेशन मोड • कानूनी रूप से बाध्यकारी नहीं",modalTitle:"प्रारूप डीसी आदेश / प्रशासनिक निर्देश",modalSubtitle:"वास्तविक समय परियोजना जोखिम टेलीमेट्री पर आधारित पूर्व-आबादी प्रोटोटाइप प्रशासनिक ज्ञापन।",modalOffice:"जिला कलेक्टर एवं जिला मजिस्ट्रेट कार्यालय",modalCala:"सक्षम प्राधिकारी भूमि अधिग्रहण (CALA)",modalRef:"संदर्भ",modalDate:"दिनांक",modalAreaFamilies:"क्षेत्रफल / परिवार",modalDisclaimer:"प्रोटोटाइप अस्वीकरण: यह प्रारूप ज्ञापन भूमि सखा प्रोटोटाइप के भीतर शासन मूल्यांकन के लिए तैयार किया गया है। यह RFCTLARR अधिनियम 2013 की वैधानिक प्रक्रियाओं का स्थान नहीं लेता और बिना आधिकारिक हस्ताक्षर के कोई कानूनी अधिकार नहीं रखता।",modalCopyDraft:"प्रारूप पाठ कॉपी करें",modalCopied:"क्लिपबोर्ड पर कॉपी किया गया!",modalPrint:"प्रिंट / सुरक्षित करें",modalClose:"बंद करें",modalMemoSub:"RFCTLARR ढांचे के तहत प्रशासनिक गतिवर्धन एवं पूर्व-निवारक निर्देश",modalTeleFindings:"1. टेलीमेट्री एवं पूर्वानुमानित ऑडिट निष्कर्ष:",modalTargetArea:"कुल लक्षित भूमि क्षेत्रफल",modalAffectedFam:"कुल प्रभावित परिवार",modalParcels:"कुल कैडस्ट्रल भूखंड",modalDirectives:"2. सक्षम प्राधिकारियों (CALA) को प्रशासनिक निर्देश:",modalDirectiveA:"क) संयुक्त स्थल निरीक्षण: विशेष भूमि अधिग्रहण अधिकारी (SLAO) और उप-विभागीय मजिस्ट्रेट (SDM) शेष लंबित भूखंडों के लिए तत्काल त्वरित संयुक्त स्थल निरीक्षण आरंभ करेंगे।",modalDirectiveB:"ख) डीबीटी एस्क्रो गतिवर्धन: महत्वपूर्ण मील के पत्थर के विलंब को रोकने के लिए प्रत्यक्ष लाभ अंतरण (DBT) सामंजस्य और मुआवजा पंचाट संवितरण 14 दिनों की सांविधिक समय-सीमा में त्वरित किया जाएगा।",modalDirectiveC:"ग) लोक अदालत सुलह: आगामी साप्ताहिक राजस्व लोक अदालत के दौरान त्वरित सुनवाई के लिए बकाया आपत्तियों और शीर्षक सत्यापन मुद्दों को सूचीबद्ध किया जाना अनिवार्य है।"},notifications:{title:"सिस्टम अधिसूचनाएं",unread:"अपठित",allCaughtUp:"सभी पढ़ी गईं",subtitle:"भूमि सखा द्वारा उत्पन्न एप्लिकेशन अलर्ट, अनुमान मील के पत्थर और सांविधिक सीमा अधिसूचनाएं।",markAllRead:"सभी को पढ़ा हुआ चिह्नित करें",resetDemoAlerts:"डेमो अलर्ट रीसेट करें",filterAll:"सभी",filterUnread:"अपठित",noNotifications:"प्रदर्शित करने के लिए कोई अधिसूचना नहीं है",noNotificationsDesc:"वर्तमान में इस फ़िल्टर के अंतर्गत कोई अधिसूचना उपलब्ध नहीं है।",newTag:"नया",markAsUnread:"अपठित के रूप में चिह्नित करें",markAsRead:"पठित के रूप में चिह्नित करें",categories:"श्रेणियां (Categories)",items:{"notif-crit-1":{title:"वर्तमान आकलन में अति-गंभीर विलंब जोखिम पाया गया",summary:"दिल्ली-अमृतसर एक्सप्रेसवे (पैकेज 4) का 84.6% विलंब संभावना के साथ मूल्यांकन किया गया, जिसमें तत्काल धारा 19 हस्तक्षेप की आवश्यकता है।",actionLabel:"आकलन देखें"},"notif-engine-2":{title:"बैकएंड पूर्वानुमान इंजन कनेक्ट हुआ",summary:"लाइव एक्सजीबूस्ट अनुमान के लिए तैयार 76 कैडस्ट्रल विशेषताओं के साथ फास्टएपीआई सेवा कनेक्ट हुई।",actionLabel:"डैशबोर्ड देखें"},"notif-atten-3":{title:"आकलन में अधिकारी ध्यान देने योग्य कारक शामिल हैं",summary:"दस्तावेजीकरण बैकलॉग समीक्षा के लिए वेस्टर्न फ्रेट कॉरिडोर में 18 उच्च-अवरोधक भूखंड मामलों को चिह्नित किया गया।",actionLabel:"कारकों की समीक्षा करें"},"notif-stat-4":{title:"जोखिम आकलन पाइपलाइन प्रारंभ हुई",summary:"राष्ट्रीय कैडस्ट्रल मैट्रिक्स को 142 मॉनिटर किए गए अवसंरचना गलियारों के साथ समन्वयित किया गया।",actionLabel:"परियोजना निर्देशिका"}},severity:"गंभीरता (Severity)",readState:"स्थिति (Read State)"},common:{readAloud:"बोलकर सुनाएं",pause:"रोकें",resume:"जारी रखें",stop:"समाप्त करें",speakToWrite:"बोलकर लिखें",listening:"सुन रहा है...",close:"बंद करें",copy:"कॉपी करें",print:"प्रिंट करें",prototypeOnly:"प्रोटोटाइप प्रारूप",themeToggle:"थीम चुनें",languageToggle:"भाषा",explain:"विवरण देखें",clickForDetails:"विस्तृत जानकारी के लिए ⓘ पर क्लिक करें",infoFooterNote:"भूमि सखा संस्थागत मार्गदर्शन",min:"न्यूनतम",max:"अधिकतम"},infoCategories:{input_feature:"इनपुट विशेषता (Input Feature)",dropdown_option:"चयन योग्य विकल्प (Selectable Option)",governance_metric:"प्रशासनिक मीट्रिक (Governance Metric)",model_output:"मॉडल आउटपुट (Model Output)",statutory_control:"सांविधिक नियंत्रण (Statutory Control)",system_status:"प्रणाली स्थिति (System Status)"},infoSections:{whatItMeans:"इसका क्या अर्थ है (What It Means)",whyItMatters:"यह क्यों महत्वपूर्ण है (Why It Matters)",howToInterpret:"इसकी व्याख्या कैसे करें (How to Interpret It)",example:"ठोस उदाहरण (Concrete Example)",modelUsage:"भूमि सखा / मॉडल उपयोग (Model & System Usage)"},info:{project_type:{title:"परियोजना का प्रकार / क्षेत्र (Project Type)",short:"रैखिक या नोड अवसंरचना संपत्ति का श्रेणीबद्ध क्षेत्रीय वर्गीकरण।",whatItMeans:"उस अवसंरचना क्षेत्र की पहचान करता है जिसके तहत भूमि अधिग्रहण को सांविधिक रूप से अधिसूचित किया गया है।",whyItMatters:"विभिन्न क्षेत्रों के गलियारों में अलग-अलग चौड़ाई का राइट-ऑफ-वे, कानूनी नियम और विवाद प्रवृत्तियां होती हैं।",howToInterpret:"आधिकारिक धारा 11 / 3A राजपत्र अधिसूचना में विनिर्दिष्ट मुख्य क्षेत्र का चयन करें।",example:"राष्ट्रीय एक्सप्रेसवे के लिए हाईवे या डेडिकेटेड फ्रेट कॉरिडोर के लिए रेलवे का चयन करें।",modelUsage:"पूर्वानुमानित मॉडल द्वारा वन-हॉट एन्कोडेड श्रेणीबद्ध इनपुट विशेषता के रूप में उपयोग किया जाता है।"},opt_project_type_highway:{title:"राजमार्ग गलियारा (Highway Corridor)",short:"राष्ट्रीय राजमार्ग अधिनियम 1956 या RFCTLARR 2013 के तहत शासित बहु-ग्राम सड़क गलियारा।",whatItMeans:"सड़क विस्तार जिसके लिए कई ग्रामीण और अर्ध-शहरी सर्वेक्षण क्षेत्रों में लगातार भूमि की आवश्यकता होती है।",whyItMatters:"राजमार्ग घनी कृषि जोतों से गुजरते हैं जहां गहन शीर्षक सत्यापन की आवश्यकता होती है।",howToInterpret:"एक्सप्रेसवे, राष्ट्रीय/राज्य राजमार्ग, बाईपास और रिंग रोड के लिए उपयोग करें।",example:"18 राजस्व गांवों से गुजरने वाला 4-लेन NH-44 बाईपास गलियारा।",modelUsage:"Highway इनपुट विशेषता से मैप किया गया विकल्प।"},opt_project_type_railway:{title:"माल / यात्री रेलवे (Freight / Passenger Railway)",short:"ढलान-अनुकूल पटरियों के लिए निरंतर गलियारा भूमि की आवश्यकता वाला रेल संरेखण।",whatItMeans:"रेलवे संशोधन अधिनियम 2008 या RFCTLARR अधिनियम 2013 के तहत निष्पादित रेल अवसंरचना।",whyItMatters:"सख्त ढलान सहिष्णुता और शून्य-स्तर क्रॉसिंग सुरक्षा क्षेत्रों की आवश्यकता होती है।",howToInterpret:"माल ढुलाई ट्रैक, यात्री लाइन दोहरीकरण और हाई-स्पीड रेल के लिए उपयोग करें।",example:"पश्चिमी समर्पित माल गलियारा (WDFC) दोहरी-लाइन ट्रैक विस्तार।",modelUsage:"Railway इनपुट विशेषता से मैप किया गया विकल्प।"},opt_project_type_industrial:{title:"औद्योगिक नोड / सेज (Industrial Node / SEZ)",short:"विनिर्माण क्षेत्रों या विशेष निवेश क्षेत्रों के लिए अधिग्रहित बड़ा सन्निहित भूमि समूह।",whatItMeans:"क्षेत्र-आधारित विनिर्माण केंद्र, शुष्क बंदरगाह (ड्राय पोर्ट) और एकीकृत औद्योगिक पार्क।",whyItMatters:"गहन पर्यावरणीय अनापत्तियों और थोक मुआवजा वितरण के साथ बड़े भूमि खंड शामिल होते हैं।",howToInterpret:"औद्योगिक एस्टेट, लॉजिस्टिक्स हब और रक्षा विनिर्माण गलियारों के लिए उपयोग करें।",example:"धोलेरा विशेष निवेश क्षेत्र (SIR) चरण 1 विनिर्माण केंद्र।",modelUsage:"Industrial इनपुट विशेषता से मैप किया गया विकल्प।"},opt_project_type_metro:{title:"शहरी मास रैपिड ट्रांजिट (Metro)",short:"उच्च-मूल्य वाले वाणिज्यिक और आवासीय भूखंडों से युक्त उच्च-घनत्व वाला शहरी पारगमन गलियारा।",whatItMeans:"एलिवेटेड या भूमिगत मेट्रो ट्रैक, यात्री स्टेशन और रखरखाव डिपो यार्ड।",whyItMatters:"उच्च सर्किल दर मूल्यांकन, भूमिगत सुगमता अधिकार और व्यापक वाणिज्यिक विस्थापन शामिल हैं।",howToInterpret:"शहरी मेट्रो लाइनों, लाइट रेल और क्षेत्रीय रैपिड ट्रांजिट सिस्टम (RRTS) के लिए उपयोग करें।",example:"पुणे मेट्रो लाइन 3 एलिवेटेड वायाडक्ट और मल्टीमॉडल इंटरचेंज।",modelUsage:"Metro इनपुट विशेषता से मैप किया गया विकल्प।"},opt_project_type_irrigation:{title:"सिंचाई एवं नहर नेटवर्क (Irrigation & Canal Network)",short:"जल वितरण नहर नेटवर्क, बैराज और जलाशय जलमग्नता क्षेत्र।",whatItMeans:"राज्य सिंचाई कानूनों के तहत निष्पादित जल भंडारण और नहर राइट-ऑफ-वे।",whyItMatters:"पर्यावरणीय अनापत्ति, मौसमी जल सीमा ट्रैकिंग और बहु-स्तरीय कृषि मुआवजे की आवश्यकता होती है।",howToInterpret:"नहर वितरिकाओं, फीडर नहरों और बांध जलाशय अधिग्रहण के लिए उपयोग करें।",example:"सरदार सरोवर नहर शाखा नेटवर्क विस्तार।",modelUsage:"Irrigation इनपुट विशेषता से मैप किया गया विकल्प।"},opt_project_type_power:{title:"पावर ग्रिड / नवीकरणीय ऊर्जा (Power Grid / Renewable Energy)",short:"उच्च-वोल्टेज ट्रांसमिशन लाइन टॉवर पाद और सौर/पवन उत्पादन पार्क।",whatItMeans:"सबस्टेशन, ट्रांसमिशन गलियारे और सौर ऊर्जा उत्पादन क्षेत्र।",whyItMatters:"मानक अधिग्रहण के साथ भारतीय टेलीग्राफ अधिनियम के उपयोग अधिकार (RoU) प्रावधानों द्वारा शासित।",howToInterpret:"400kV/765kV ट्रांसमिशन लाइनों, सौर अल्ट्रा पार्कों और हरित ऊर्जा गलियारों के लिए उपयोग करें।",example:"भादला 765kV हरित ऊर्जा निकासी सबस्टेशन।",modelUsage:"Power इनपुट विशेषता से मैप किया गया विकल्प।"},opt_project_type_urban:{title:"शहरी विकास एवं स्मार्ट सिटी (Urban Development & Smart City)",short:"नागरिक अवसंरचना, नगरपालिका सड़क चौड़ीकरण और टाउनशिप विस्तार परियोजनाएं।",whatItMeans:"शहरी नगर नियोजन योजनाएं, जल निकासी अवसंरचना और नागरिक सुविधाएं।",whyItMatters:"नगरपालिका उप-नियमों, उच्च किरायेदारी घनत्व और जटिल निर्मित संरचना मूल्यांकनों के अधीन।",howToInterpret:"मास्टर प्लान सड़कों, शहरी फ्लाईओवर, नागरिक सुविधाओं और स्मार्ट सिटी नोड्स के लिए उपयोग करें।",example:"अमरावती राजधानी शहर धमनी रीढ़ सड़क नेटवर्क।",modelUsage:"Urban Development इनपुट विशेषता से मैप किया गया विकल्प।"},land_type:{title:"भूमि वर्गीकरण (Land Classification)",short:"जिला अधिकार अभिलेख (जमाबंदी/खतौनी) में दर्ज अधिग्रहित भूमि भूखंड का राजस्व श्रेणीकरण।",whatItMeans:"राज्य राजस्व रिकॉर्ड (जमाबंदी/7/12) में स्थापित कानूनी भूमि उपयोग श्रेणी।",whyItMatters:"RFCTLARR प्रथम अनुसूची के तहत आधार बाजार मूल्य पर लागू सांविधिक गुणक कारक (1.0x से 2.0x) निर्धारित करता है।",howToInterpret:"परियोजना संरेखण में प्रमुख भूमि वर्गीकरण का चयन करें।",example:"खेती की जमीन के लिए कृषि; सड़क किनारे दुकानों के लिए वाणिज्यिक।",modelUsage:"पूर्वानुमानित मॉडल द्वारा श्रेणीबद्ध इनपुट विशेषता के रूप में उपयोग किया जाता है।"},opt_land_type_agricultural:{title:"कृषि भूमि (Agricultural Land)",short:"मानक ग्रामीण गुणन कारकों द्वारा शासित खेती योग्य या ग्रामीण कृषि भूमि।",whatItMeans:"फसलों, बागों या ग्रामीण कृषि आजीविका के लिए निर्दिष्ट कृषि भूमि।",whyItMatters:"ग्रामीण कारक गुणक (1.25x - 2.0x) लागू होता है; बहु-फसली भूमि के लिए खाद्य सुरक्षा प्रभाव आकलन आवश्यक है।",howToInterpret:"खेतों, बागों और सिंचित कृषि जोतों के लिए चयन करें।",example:"एक्सप्रेसवे बाईपास के लिए अधिग्रहित सिंचित दोहरी-फसल भूमि।",modelUsage:"Agricultural से मैप किया गया विकल्प।"},opt_land_type_commercial:{title:"वाणिज्यिक भूमि (Commercial Land)",short:"व्यवसायों, खुदरा या वाणिज्यिक प्रतिष्ठानों द्वारा कब्जा किए गए उच्च-मूल्यांकन वाले भूखंड।",whatItMeans:"सड़क किनारे या शहरी नोड्स पर वाणिज्य के लिए स्वीकृत भूखंड।",whyItMatters:"उच्च सर्किल दरें, व्यावसायिक साख (गुडविल) का नुकसान और उच्च मुकदमेबाजी आवृत्ति।",howToInterpret:"बाजार की दुकानों, पेट्रोल पंपों, गोदामों और वाणिज्यिक प्रतिष्ठानों के लिए चयन करें।",example:"राजमार्ग के अग्रभाग वाले खुदरा वाणिज्यिक भूखंड।",modelUsage:"Commercial से मैप किया गया विकल्प।"},opt_land_type_industrial:{title:"औद्योगिक भूमि (Industrial Land)",short:"कारखानों, गोदामों या विनिर्माण सुविधाओं के लिए आवंटित भूमि।",whatItMeans:"नामित औद्योगिक एस्टेट या निजी तौर पर परिवर्तित गैर-कृषि औद्योगिक भूखंड।",whyItMatters:"संयंत्र और मशीनरी डिस्मेंटलिंग मुआवजा और विशेष मूल्यांकन शामिल है।",howToInterpret:"विनिर्माण सुविधाओं, कार्यशालाओं और प्रसंस्करण यार्डों के लिए चयन करें।",example:"आंशिक अधिग्रहण का सामना कर रहे उपनगरीय इंजीनियरिंग वर्कशॉप भूखंड।",modelUsage:"Industrial से मैप किया गया विकल्प।"},opt_land_type_mixed:{title:"मिश्रित राजस्व भूमि (Mixed Revenue Land)",short:"कृषि, आवासीय आबादी और वाणिज्यिक उपयोगों से युक्त समग्र भूखंड।",whatItMeans:"विस्तारित राजमार्गों के साथ अर्ध-शहरी संक्रमण क्षेत्रों में सामान्य विषम भूखंड।",whyItMatters:"भूखंड-दर-भूखंड सूक्ष्म-मूल्यांकन और विभिन्न सोलेशियम गणनाओं की आवश्यकता होती है।",howToInterpret:"तब चयन करें जब गलियारा गांव की आबादी और अर्ध-वाणिज्यिक किनारों से होकर गुजरता हो।",example:"कृषि-प्रसंस्करण इकाइयों के साथ ग्रामीण बस्तियों वाला अर्ध-शहरी गलियारा।",modelUsage:"Mixed से मैप किया गया विकल्प।"},opt_land_type_residential:{title:"आवासीय भूमि (Residential Land)",short:"आबाद आवासीय बस्तियां, ग्रामीण आबादी या शहरी आवासीय भूखंड।",whatItMeans:"घरेलू आवासों, निजी मकानों या लेआउट भूखंडों वाली भूमि।",whyItMatters:"दूसरी अनुसूची के तहत व्यापक आरएंडआर अधिकार, निर्मित मकान मुआवजा और वैकल्पिक आवास अनिवार्य है।",howToInterpret:"ग्रामीण आबादी बस्तियों, आवासीय कॉलोनियों और आवास भूखंडों के लिए चयन करें।",example:"बाईपास इंटरचेंज से प्रभावित ग्रामीण बस्ती का किनारा।",modelUsage:"Residential से मैप किया गया विकल्प।"},priority:{title:"प्राथमिकता स्तर (Priority Tier)",short:"शासी मंत्रालय द्वारा सौंपी गई प्रशासनिक प्राथमिकता रेटिंग (सामान्य, उच्च, गंभीर)।",whatItMeans:"संस्थागत तत्परता स्थिति जो समीक्षा चक्र और अंतर-विभागीय त्वरित कार्रवाई तय करती है।",whyItMatters:"जिला समीक्षा बैठकों और राज्य संचालन समितियों में वृद्धि की प्राथमिकता को प्रभावित करती है।",howToInterpret:"राष्ट्रीय अवसंरचना पदनाम (जैसे पीएम गति शक्ति, भारतमाला) के आधार पर चयन करें।",example:"सख्त सार्वजनिक समापन लक्ष्यों वाले प्रमुख आर्थिक गलियारों के लिए गंभीर (Critical)।",modelUsage:"प्रशासनिक तात्कालिकता के लिए श्रेणीबद्ध इनपुट विशेषता।"},opt_priority_normal:{title:"सामान्य प्राथमिकता (Normal Priority)",short:"नियमित सांविधिक समीक्षा कार्यक्रम के अधीन मानक पूंजीगत व्यय परियोजना।",whatItMeans:"विशेष राष्ट्रीय फास्ट-ट्रैक आदेशों के बिना आधारभूत अवसंरचना परियोजना।",whyItMatters:"मानक जिला प्रशासनिक चक्रों के तहत संचालित होती है।",howToInterpret:"नियमित जिला सड़क उन्नयन या फीडर रेल लाइन के लिए चयन करें।",example:"नियमित जिला सड़क चौड़ीकरण परियोजना।",modelUsage:"आधारभूत प्राथमिकता स्तर।"},opt_priority_high:{title:"उच्च प्राथमिकता (High Priority)",short:"पाक्षिक (15-दिवसीय) कार्यकारी निगरानी के अधीन रणनीतिक राज्य या क्षेत्रीय गलियारा।",whatItMeans:"प्रतिबद्ध सार्वजनिक पूर्णता लक्ष्यों वाला प्रमुख आर्थिक गलियारा।",whyItMatters:"अंतर-विभागीय अनापत्तियों और उपयोगिता स्थानांतरण के लिए त्वरित ध्यान प्राप्त होता है।",howToInterpret:"राज्य एक्सप्रेसवे, ट्रंक रेल लिंक और प्रमुख बंदरगाह संपर्क सड़कों के लिए चयन करें।",example:"राज्य औद्योगिक गलियारा एक्सप्रेसवे लिंक।",modelUsage:"उच्च प्राथमिकता स्तर।"},opt_priority_critical:{title:"गंभीर / सर्वोच्च प्राथमिकता (Critical Priority)",short:"पीएम गति शक्ति / कैबिनेट सचिवालय के तहत सीधे मॉनिटर किया जाने वाला प्रमुख राष्ट्रीय गलियारा।",whatItMeans:"मील के पत्थर में शून्य-सहिष्णुता वाला सर्वोच्च-तात्कालिक राष्ट्रीय कनेक्टिविटी प्रोजेक्ट।",whyItMatters:"लंबित अनापत्तियों के लिए मुख्य सचिव और जिला कलेक्टर स्तर पर तत्काल हस्तक्षेप ट्रिगर करता है।",howToInterpret:"स्वर्णिम चतुर्भुज विस्तार, रक्षा गलियारों और प्रमुख एक्सप्रेसवे के लिए चयन करें।",example:"दिल्ली-मुंबई एक्सप्रेसवे लिंक या राष्ट्रीय रणनीतिक रेलवे।",modelUsage:"शीर्ष प्राथमिकता स्तर।"},current_stage:{title:"वर्तमान सांविधिक चरण (Current Statutory Stage)",short:"RFCTLARR सांविधिक भूमि अधिग्रहण प्रक्रिया के तहत सक्रिय चरण।",whatItMeans:"प्रारंभिक राजपत्र सूचना से अंतिम भौतिक कब्जे तक की कानूनी यात्रा का वर्तमान मील का पत्थर।",whyItMatters:"प्रत्येक चरण में सांविधिक समय-सीमा होती है (जैसे धारा 11 और धारा 19 के बीच 12 महीने)।",howToInterpret:"आधिकारिक राज्य राजपत्र में वर्तमान में प्रकाशित मील के पत्थर का चयन करें।",example:"धारा 19 घोषणा जब संयुक्त सर्वेक्षण पूरा हो और भूमि योजना स्वीकृत हो।",modelUsage:"श्रेणीबद्ध सांविधिक चरण इनपुट।"},opt_stage_notification:{title:"धारा 11 प्रारंभिक अधिसूचना (Section 11 Notification)",short:"भूमि अधिग्रहण की मंशा घोषित करने और प्रारंभिक आपत्तियां आमंत्रित करने वाली सार्वजनिक सूचना।",whatItMeans:"RFCTLARR धारा 11 के तहत आधिकारिक राजपत्र और दैनिक समाचार पत्रों में सांविधिक प्रकाशन।",whyItMatters:"भूमि लेनदेन को फ्रीज करता है और धारा 15 के तहत 60-दिवसीय आपत्ति अवधि शुरू करता है।",howToInterpret:"तब चयन करें जब धारा 11 अधिसूचना प्रकाशित हो गई हो और सुनवाई लंबित हो।",example:"लुधियाना जिले में 233 भूखंडों के लिए जारी प्रारंभिक अधिसूचना।",modelUsage:"प्रारंभिक चरण सांविधिक स्थिति।"},opt_stage_survey:{title:"संयुक्त माप सर्वेक्षण (JMS / 3A)",short:"भूखंड सीमाओं का स्थल पर कैडस्ट्रल सीमांकन और भौतिक सत्यापन।",whatItMeans:"राजस्व अधिकारियों, सर्वेक्षण दल और भूस्वामियों द्वारा सटीक सीमाओं का संयुक्त निरीक्षण।",whyItMatters:"सीमा विसंगतियों को सुलझाता है और प्रभावित पेड़ों, कुओं और संरचनाओं की गिनती करता है।",howToInterpret:"तब चयन करें जब राजस्व टीमें क्षेत्र में सीमाओं का सक्रिय रूप से सीमांकन कर रही हों।",example:"233 में से 180 भूखंडों के लिए संयुक्त सर्वेक्षण पूर्ण।",modelUsage:"क्षेत्र सीमांकन चरण सांविधिक स्थिति।"},opt_stage_valuation:{title:"आकलन एवं मूल्यांकन (Assessment & Valuation)",short:"बाजार मूल्य का निर्धारण, संपत्ति मूल्यांकन और सोलेशियम (तुष्टि राशि) की गणना।",whatItMeans:"सक्षम प्राधिकारी द्वारा बाजार दर, गुणक और 100% सोलेशियम जोड़कर दर तय करना।",whyItMatters:"पंचाट घोषणा से पहले कुल वित्तीय मुआवजा एस्क्रो आवश्यकताओं को स्थापित करता है।",howToInterpret:"तब चयन करें जब सर्किल दरों और निजी बिक्री विलेख औसतों को संकलित किया जा रहा हो।",example:"ग्रामीण 1.5x गुणक और सोलेशियम के साथ समायोजित मूल सर्किल दर।",modelUsage:"मूल्यांकन चरण सांविधिक स्थिति।"},opt_stage_compensation:{title:"धारा 23 पंचाट एवं मुआवजा वितरण (Section 23 Award)",short:"मुआवजा पंचाट की औपचारिक घोषणा और सत्यापित शीर्षकधारकों को वितरण।",whatItMeans:"धारा 23 के तहत अंतिम पंचाट और प्रत्यक्ष लाभ अंतरण (DBT) के माध्यम से राशि हस्तांतरण।",whyItMatters:"बैंक खातों में मुआवजा जमा होने तक भौतिक कब्जा कानूनी रूप से नहीं लिया जा सकता।",howToInterpret:"तब चयन करें जब पंचाट घोषित किए जा रहे हों और धनराशि खातों में भेजी जा रही हो।",example:"पंचाट घोषित; 140 खातों में ₹32.4 करोड़ वितरित।",modelUsage:"वित्तीय वितरण चरण सांविधिक स्थिति।"},opt_stage_possession:{title:"धारा 38 भौतिक कब्जा (Section 38 Possession)",short:"भौतिक कब्जा लेना और निर्माण एजेंसी को राइट-ऑफ-वे सौंपना।",whatItMeans:"धारा 38 के तहत सभी भारों से मुक्त होकर भूमि पूर्ण रूप से सरकार में निहित होती है।",whyItMatters:"ठेकेदारों को मशीनरी जुटाने और जमीनी निर्माण शुरू करने में सक्षम बनाता है।",howToInterpret:"तब चयन करें जब मुआवजा दिया जा चुका हो और जमीन सौंपने का ज्ञापन तैयार हो रहा हो।",example:"233 में से 187 भूखंडों के लिए कब्जा ज्ञापन पर हस्ताक्षर।",modelUsage:"भौतिक हस्तांतरण चरण सांविधिक स्थिति।"},opt_stage_rehabilitation:{title:"आरएंडआर पुनर्वास निष्पादन (R&R Execution)",short:"विस्थापित और आजीविका प्रभावित परिवारों के लिए पुनर्वास लाभों का क्रियान्वयन।",whatItMeans:"अनुसूची 2 और 3 के तहत आवास आवंटन, वार्षिकी अनुदान और आजीविका भत्तों का वितरण।",whyItMatters:"सामाजिक अनुपालन सुनिश्चित करता है और मानवीय विस्थापन संबंधी शिकायतों को रोकता है।",howToInterpret:"तब चयन करें जब पुनर्वास कॉलोनियों और भत्तों का प्रबंधन किया जा रहा हो।",example:"पास की नामित पुनर्वास कॉलोनी में वैकल्पिक आवास भूखंड आवंटित।",modelUsage:"सामाजिक पुनर्वास चरण सांविधिक स्थिति।"},complexity_score:{title:"जटिलता सूचकांक (0-100) (Complexity Score)",short:"भूखंड विखंडन, स्थलाकृति और प्रशासनिक क्षेत्राधिकारों को संश्लेषित करने वाला अनुभवजन्य सूचकांक।",whatItMeans:"भूखंड घनत्व और शहरी निकटता के आधार पर परिचालन घर्षण का आकलन करने वाला समग्र मीट्रिक।",whyItMatters:"उच्च स्कोर अधिक प्रशासनिक समय की मांग करने वाले घने बहु-मालिक भूखंडों को इंगित करता है।",howToInterpret:"0-30: सरल ग्रामीण; 31-60: मध्यम विखंडित; 61-100: जटिल अर्ध-शहरी/बहु-क्षेत्राधिकार।",example:"47.7 दो तहसीलों में मध्यम ग्रामीण विखंडन को दर्शाता है।",modelUsage:"0.0 और 100.0 के बीच सामान्यीकृत सतत संख्यात्मक इनपुट विशेषता।"},total_parcels:{title:"कुल भूखंड (Total Parcels)",short:"अधिग्रहण के लिए अधिसूचित अलग-अलग कैडस्ट्रल भूमि भूखंडों (खसरा/सर्वे नंबर) की कुल संख्या।",whatItMeans:"सभी प्रभावित राजस्व गांवों में अलग-अलग सर्वेक्षण संख्याओं की संख्या।",whyItMatters:"प्रत्येक भूखंड के लिए स्वतंत्र शीर्षक खोज, संयुक्त माप और मुआवजा पंचाट की आवश्यकता होती है।",howToInterpret:"अधिक भूखंड दस्तावेजीकरण प्रसंस्करण मात्रा को रैखिक रूप से बढ़ाते हैं।",example:"पंजाब कॉरिडोर पैकेज में 233 राजस्व सर्वेक्षण संख्याएं।",modelUsage:"पैमाने को ट्रैक करने वाली पूर्णांक इनपुट विशेषता।"},affected_families:{title:"प्रभावित परिवार (PAFs) (Affected Families)",short:"परियोजना प्रभावित परिवारों (PAFs) की संख्या जिनकी भूमि या आवासीय मकान अधिग्रहित किया गया है।",whatItMeans:"धारा 16 के तहत मान्यता प्राप्त कुल शीर्षकधारक और आश्रित आजीविका-प्रभावित परिवार।",whyItMatters:"सीधे तौर पर आरएंडआर अधिकार, जनसुनवाई के पैमाने और शिकायत निवारण को तय करता है।",howToInterpret:"स्वामित्व घनत्व का आकलन करने के लिए कुल भूखंडों के साथ तुलना करें।",example:"233 भूखंडों में 113 परिवार (लगभग 0.48 परिवार प्रति भूखंड)।",modelUsage:"सामाजिक-आर्थिक प्रभाव के लिए पूर्णांक इनपुट विशेषता।"},land_area_hectares:{title:"भूमि क्षेत्रफल (हेक्टेयर) (Land Area)",short:"हेक्टेयर में गलियारे के लिए आवश्यक कुल सतह भूमि क्षेत्रफल।",whatItMeans:"स्वीकृत संरेखण योजना में सीमांकित अधिग्रहण का भौतिक पदचिह्न।",whyItMatters:"कुल वित्तीय पूंजी बजट और पर्यावरणीय अनापत्ति सीमाओं को निर्धारित करता है।",howToInterpret:"औसत भूखंड आकार निकालने के लिए भूखंडों की संख्या के साथ समीक्षा करें।",example:"42 किमी 4-लेन राइट-ऑफ-वे के लिए 132.5 हेक्टेयर।",modelUsage:"स्थानिक पदचिह्न मापने वाली सतत संख्यात्मक विशेषता।"},planned_duration_days:{title:"नियोजित समय-सीमा (दिन) (Planned Duration)",short:"धारा 11 सूचना से कब्जे तक कैलेंडर दिनों में लक्षित निर्धारित समय।",whatItMeans:"परियोजना क्रियान्वयन इकाई (PIU) चार्टर में स्थापित आधारभूत समय-सीमा।",whyItMatters:"मानक बेंचमार्क के रूप में कार्य करता है जिसके विरुद्ध समय के विचलन का आकलन किया जाता है।",howToInterpret:"RFCTLARR अधिनियम के तहत मानक सांविधिक बेंचमार्क 540-730 दिन (18-24 महीने) है।",example:"607 दिन (लगभग 20 महीने) नियोजित कार्यक्रम।",modelUsage:"परियोजना की आधारभूत गति स्थापित करने वाली पूर्णांक इनपुट विशेषता।"},acquisition_progress_pct:{title:"अधिग्रहण प्रगति (%) (Acquisition Progress)",short:"अधिसूचित भूखंडों का संचयी प्रतिशत जिनका सांविधिक अधिग्रहण अंतिम रूप से पूरा हो चुका है।",whatItMeans:"कुल भूखंडों का वह अनुपात जिन्होंने धारा 23 पंचाट और मुआवजा जमा पार कर लिया है।",whyItMatters:"ठेकेदार लामबंदी और निर्माण निकासी के लिए मुख्य प्रगति मीट्रिक।",howToInterpret:"परियोजना के उत्तरार्ध में 40% से नीचे होना भारी बैकलॉग का संकेत है।",example:"वर्तमान ऑडिट पर 6.01% अधिग्रहित।",modelUsage:"सतत संख्यात्मक इनपुट विशेषता (0-100%)।"},acquisition_velocity_pct_per_30d:{title:"अधिग्रहण गति (%/30 दिन) (Acquisition Velocity)",short:"पिछले 30 दिनों में भूखंड अधिग्रहण निकासी की मासिक दर।",whatItMeans:"प्रगति त्वरण या ठहराव को ट्रैक करने वाला रोलिंग टेम्पो मीट्रिक।",whyItMatters:"स्थिर गति (< 2%/माह) प्रशासनिक या कानूनी बाधाओं को उजागर करती है।",howToInterpret:"नियोजित लक्ष्य तक पहुंचने के लिए आवश्यक मासिक दर के साथ तुलना करें।",example:"6.13% प्रति माह सक्रिय भूखंड पंचाटों को दर्शाता है।",modelUsage:"गतिशीलता को कैप्चर करने वाली सतत संख्यात्मक विशेषता।"},parcels_pending:{title:"लंबित भूखंड (Parcels Pending)",short:"अंतिम पंचाट घोषणा की प्रतीक्षा कर रहे अधिसूचित भूखंडों की संख्या।",whatItMeans:"कुल भूखंड घटा अधिग्रहित भूखंड।",whyItMatters:"सक्षम प्राधिकारी (CALA) टीम के समक्ष सक्रिय प्रशासनिक कार्यभार का प्रतिनिधित्व करता है।",howToInterpret:"सांविधिक समय-सीमा के निकट अधिक संख्या चूक (Lapse) के जोखिम का संकेत देती है।",example:"233 कुल में से 219 भूखंड अधिग्रहित किए जाने शेष हैं।",modelUsage:"शेष बैकलॉग को ट्रैक करने वाली पूर्णांक इनपुट विशेषता।"},possession_pending_parcels:{title:"भौतिक कब्जा लंबित भूखंड (Possession Pending)",short:"वे भूखंड जहां मुआवजा तय हो चुका है लेकिन भौतिक स्थल का कब्जा बाकी है।",whatItMeans:"खड़ी फसलों, संरचना विध्वंस या स्थानीय विरोध के कारण अटके भूखंड।",whyItMatters:"कानूनी पंचाट के बावजूद ठेकेदारों को राइट-ऑफ-वे तक पहुंचने से रोकता है।",howToInterpret:"अधिग्रहित भूखंडों और कब्जे के बीच बड़ा अंतर जमीनी प्रतिरोध को दर्शाता है।",example:"218 भूखंडों का भौतिक कब्जा लंबित है।",modelUsage:"भौतिक हस्तांतरण अंतराल को दर्शाने वाली पूर्णांक इनपुट विशेषता।"},documents_required:{title:"आवश्यक दस्तावेज (Documents Required)",short:"सत्यापन के लिए आवश्यक कुल सांविधिक स्वामित्व दस्तावेज और राजस्व रिकॉर्ड।",whatItMeans:"जमाबंदी, नामांतरण प्रविष्टियों, क्षतिपूर्ति बांड और बैंक मैंडेट का योग।",whyItMatters:"मुआवजा वितरण से पहले पूर्ण दस्तावेज फाइलें कानूनी रूप से अनिवार्य हैं।",howToInterpret:"आमतौर पर सह-मालिक अनुपात से गुणा किए गए कुल भूखंडों के साथ बढ़ता है।",example:"भूस्वामियों में कुल 241 दस्तावेजी डोजियर आवश्यक।",modelUsage:"दस्तावेजीकरण ब्रह्मांड को मापने वाली पूर्णांक इनपुट विशेषता।"},documents_pending:{title:"लंबित दस्तावेज़ (Documents Pending)",short:"सत्यापन के लिए अभी भी लंबित आवश्यक भूमि और स्वामित्व दस्तावेज़ों की संख्या।",whatItMeans:"यह आवश्यक दस्तावेज़ों की वह संख्या दर्शाता है जो अभी भी सत्यापन या राजस्व नामांतरण हेतु लंबित हैं। इस मान को बदलने से दस्तावेज़ पूर्णता (((आवश्यक - लंबित) / आवश्यक) * 100) सीधे प्रभावित और अद्यतित होती है।",whyItMatters:"लंबित दस्तावेज़ भूमि अधिग्रहण में विलंब का एक मुख्य कारण हैं, जिससे धारा 19 घोषणा और मुआवजा संवितरण रुक जाता है।",howToInterpret:"लंबित दस्तावेज़ों की संख्या घटाने से दस्तावेज़ पूर्णता 100% की ओर बढ़ती है और विलंब जोखिम घटता है। उच्च लंबित संख्या मॉडल में अधिक विलंब संभावना उत्पन्न करती है।",example:"यदि 850 आवश्यक में से 399 लंबित हैं, तो दस्तावेज़ पूर्णता 53.1% होगी।",modelUsage:"XGBoost मॉडल में विलंब जोखिम गणना के लिए उपयोग की जाने वाली प्रमुख परियोजना इनपुट टेलीमेट्री विशेषता।"},documentation_completion_pct:{title:"दस्तावेज पूर्णता (%) (Documentation Completion)",short:"कुल आवश्यक फाइलों के सापेक्ष सत्यापित दस्तावेज फाइलों का प्रतिशत अनुपात।",whatItMeans:"गणना: ((सत्यापित दस्तावेज / आवश्यक दस्तावेज) * 100)।",whyItMatters:"सक्षम प्राधिकारी प्रशासनिक बैक-ऑफिस का प्रत्यक्ष स्वास्थ्य बैरोमीटर।",howToInterpret:"बाद के चरणों में 20% से कम होना गंभीर दस्तावेजी गतिरोध को दर्शाता है।",example:"3.7% पूर्णता प्रारंभिक दस्तावेजीकरण चरण को इंगित करती है।",modelUsage:"आवश्यक और लंबित इनपुट से निकाली गई परिकलित सतत विशेषता।"},compensation_pending_cases:{title:"लंबित मुआवजा प्रकरण (Pending Compensation Cases)",short:"अंतिम पंचाट स्वीकृति या भुगतान की प्रतीक्षा कर रहे व्यक्तिगत भूस्वामी दावों की संख्या।",whatItMeans:"सत्यापन, लोक अदालत सुलह या एस्क्रो क्रेडिट की प्रतीक्षा में अनसुलझे दावे।",whyItMatters:"भूस्वामी असंतोष और बाद के अदालती मुकदमों के साथ सीधे संबंधित है।",howToInterpret:"उच्च प्रकरण संख्या विशेष ग्राम मुआवजा वितरण शिविरों की आवश्यकता दर्शाती है।",example:"105 लंबित मुआवजा प्रकरण।",modelUsage:"अनसुलझी वित्तीय फाइलों को ट्रैक करने वाली पूर्णांक इनपुट विशेषता।"},compensation_pending_amount:{title:"लंबित मुआवजा राशि (₹ करोड़) (Pending Compensation Amount)",short:"करोड़ रुपये में वित्तीय राशि जो स्वीकृत है लेकिन भूस्वामियों के खातों में जमा नहीं हुई है।",whatItMeans:"बैंक एस्क्रो निकासी की प्रतीक्षा कर रही कुल अनुमानित मुआवजा देनदारी।",whyItMatters:"अधिक अवितरित राशि धारा 80 के तहत ब्याज देनदारियों (9% से 15% प्रति वर्ष) का जोखिम उठाती है।",howToInterpret:"नकदी उपलब्धता सत्यापित करने के लिए एस्क्रो आवंटन के साथ समीक्षा करें।",example:"₹10.95 करोड़ संवितरण हेतु लंबित।",modelUsage:"वित्तीय मात्रा मापने वाली सतत संख्यात्मक इनपुट विशेषता।"},compensation_completion_pct:{title:"मुआवजा पूर्णता (%) (Compensation Completion)",short:"प्रत्यक्ष लाभ अंतरण (DBT) द्वारा वितरित कुल स्वीकृत मुआवजे का प्रतिशत।",whatItMeans:"कुल निर्धारित देनदारी के सापेक्ष वितरित मुआवजा राशि का अनुपात।",whyItMatters:"RFCTLARR धारा 38 के तहत भौतिक कब्जा लेने से पहले अनिवार्य कानूनी पूर्व-आवश्यकता।",howToInterpret:"कम मूल्य एस्क्रो खातों में पूंजी के रुके होने का संकेत देते हैं।",example:"सत्यापित खातों में 6.2% वितरित।",modelUsage:"सतत संख्यात्मक इनपुट विशेषता (0-100%)।"},avg_compensation_delay_days:{title:"औसत मुआवजा विलंब (दिन) (Avg Compensation Delay)",short:"पंचाट निर्धारण और इलेक्ट्रॉनिक फंड ट्रांसफर के बीच दिनों में औसत विलंब।",whatItMeans:"कोषागार और बैंक खाता समाधान में प्रशासनिक विलंबता।",whyItMatters:"90 दिनों से अधिक की देरी धारा 80 के तहत ब्याज देनदारियों को आकर्षित करती है।",howToInterpret:"< 30 दिन इष्टतम है; > 60 दिन बैंक या नामांतरण बाधाओं का संकेत देते हैं।",example:"52.7 दिन औसत टर्नअराउंड समय।",modelUsage:"वित्तीय लेनदेन घर्षण को कैप्चर करने वाली सतत संख्यात्मक विशेषता।"},approvals_pending:{title:"लंबित अनापत्तियां (Approvals Pending)",short:"बाहरी सरकारी विभागों से स्वीकृति की प्रतीक्षा कर रही सांविधिक अनापत्तियों की संख्या।",whatItMeans:"वन अनापत्ति (FC स्टेज I/II), रेलवे क्रॉसिंग (ROB), वन्यजीव, या उपयोगिता स्थानांतरण अनुमति।",whyItMatters:"रैखिक अवसंरचना सुचारू रूप से आगे नहीं बढ़ सकती यदि कुछ भूखंडों में अनापत्तियां गायब हों।",howToInterpret:"महत्वपूर्ण मार्ग वाले भूखंडों पर अनापत्तियों को प्राथमिकता दें।",example:"5 सांविधिक अनापत्तियां लंबित (2 वन, 2 उपयोगिता, 1 रेल)।",modelUsage:"अंतर-विभागीय निर्भरता को दर्शाने वाली पूर्णांक इनपुट विशेषता।"},overdue_approvals:{title:"समय-सीमा पार अनापत्तियां (Overdue Approvals)",short:"वे अनापत्तियां जिन्होंने अपनी सांविधिक या नागरिक चार्टर एसएलए प्रसंस्करण समय-सीमा पार कर ली है।",whatItMeans:"अनिवार्य अंतर-विभागीय प्रतिक्रिया सीमा से अधिक समय से लंबित अनापत्ति आवेदन।",whyItMatters:"अंतर-विभागीय गतिरोध का मजबूत संकेतक जिसके लिए मुख्य सचिव स्तर के हस्तक्षेप की आवश्यकता है।",howToInterpret:"कोई भी गैर-शून्य संख्या नोडल अधिकारी को औपचारिक ज्ञापन भेजने की मांग करती है।",example:"वन क्षेत्र में 2 समय-सीमा पार अनुमतियां।",modelUsage:"अनुपालन उल्लंघन को ट्रैक करने वाली पूर्णांक इनपुट विशेषता।"},avg_approval_delay_days:{title:"औसत अनापत्ति विलंब (दिन) (Avg Approval Delay)",short:"कैलेंडर दिनों में औसत अवधि जिसके दौरान अनुमतियां समय-सीमा से अधिक समय तक लंबित रहती हैं।",whatItMeans:"सभी विभागीय अनापत्ति आवेदनों में औसत बैकलॉग विलंबता।",whyItMatters:"गलियारे में विनियामक घर्षण की मात्रा निर्धारित करता है।",howToInterpret:"> 30 दिन लगातार अंतर-विभागीय घर्षण का संकेत देते हैं।",example:"41.0 दिन औसत अनापत्ति विलंब।",modelUsage:"सतत संख्यात्मक इनपुट विशेषता।"},pending_objections:{title:"लंबित आपत्तियां (Pending Objections)",short:"RFCTLARR धारा 15 के तहत दायर अनसुलझी भूस्वामी आपत्ति याचिकाएं।",whatItMeans:"सार्वजनिक उद्देश्य, संरेखण उपयुक्तता, या अत्यधिक अधिग्रहण के संबंध में आपत्तियां।",whyItMatters:"धारा 15 की सुनवाइयों का निपटारा होने तक धारा 19 की घोषणा कानूनी रूप से जारी नहीं हो सकती।",howToInterpret:"धारा 11 की सूचना के 60 दिनों के भीतर सुनवाई पूरी होनी चाहिए।",example:"0 लंबित आपत्तियां (स्वीकृत स्थिति)।",modelUsage:"सांविधिक प्रक्रियात्मक बाधाओं को मापने वाली पूर्णांक इनपुट विशेषता।"},active_legal_disputes:{title:"सक्रिय न्यायालयीन वाद (Active Land Disputes)",short:"दीवानी अदालतों या उच्च न्यायालय में लंबित औपचारिक रिट याचिकाएं या शीर्षक विवाद।",whatItMeans:"अधिसूचनाओं, मुआवजा दरों, या सीमा सीमांकन को चुनौती देने वाली मुकदमेबाजी।",whyItMatters:"न्यायिक स्थगनादेश (स्टे) उत्पन्न कर सकता है जिससे जमीनी कार्य रुक जाता है।",howToInterpret:"कानूनी वकील की उपस्थिति और स्टे खारिज कराने की याचिकाओं की स्थिति की समीक्षा करें।",example:"0 सक्रिय कानूनी विवाद।",modelUsage:"विवाद ट्री नोड्स में उच्च भार वाली पूर्णांक इनपुट विशेषता।"},ownership_disputes:{title:"स्वामित्व एवं विरासत विवाद (Ownership Conflicts)",short:"एक भूखंड के प्रतिद्वंद्वी दावेदारों के बीच पारिवारिक या सीमा विवाद।",whatItMeans:"अनसुलझे बंटवारे के मुकदमे या राजस्व नामांतरण अपीलें जो पंचाट वितरण को रोकती हैं।",whyItMatters:"स्वामित्व विवादित होने पर धारा 64 के तहत राशि न्यायालय में जमा करनी पड़ती है।",howToInterpret:"त्वरित सुलह के लिए राजस्व लोक अदालत को संदर्भित करें।",example:"0 स्वामित्व विवाद पंजीकृत।",modelUsage:"पूर्णांक इनपुट विशेषता।"},court_stay_cases:{title:"न्यायिक स्थगनादेश / स्टे (Court Stays / Writs)",short:"कब्जे या निर्माण पर रोक लगाने वाले औपचारिक अंतरिम अदालती आदेश।",whatItMeans:"विशिष्ट सर्वेक्षण संख्याओं पर सरकारी कार्रवाई पर रोक लगाने वाले न्यायालय के आदेश।",whyItMatters:"प्रभावित लंबाई पर सीधे निर्माण रोक देता है; गलियारा टूटने का मुख्य कारण।",howToInterpret:"राज्य के महाधिवक्ता द्वारा स्थगनादेश हटाने के लिए तत्काल याचिका दायर करने की आवश्यकता।",example:"0 सक्रिय स्थगनादेश।",modelUsage:"पूर्णांक इनपुट विशेषता; मॉडल जोखिम को अत्यधिक बढ़ाने वाला कारक।"},rr_pending_cases:{title:"लंबित आरएंडआर प्रकरण (R&R Pending Cases)",short:"भौतिक पुनर्वास पैकेज की प्रतीक्षा कर रहे विस्थापित या प्रभावित परिवारों की संख्या।",whatItMeans:"अनुसूची 2 के तहत वैकल्पिक आवास, जमीन के बदले जमीन, या वार्षिकी अनुदान के पात्र परिवार।",whyItMatters:"आवासीय भूमि का भौतिक कब्जा लेने से पहले आरएंडआर का निष्पादन अनिवार्य है।",howToInterpret:"नामित पुनर्वास कॉलोनी अवसंरचना की प्रगति को ट्रैक करें।",example:"47 परिवार आरएंडआर पैकेज का इंतजार कर रहे हैं।",modelUsage:"सामाजिक अनुपालन को ट्रैक करने वाली पूर्णांक इनपुट विशेषता।"},rr_completion_pct:{title:"आरएंडआर पूर्णता (%) (R&R Completion)",short:"स्वीकृत पुनर्वास एवं पुनर्व्यवस्थापन योजनाओं का भौतिक रूप से पूर्ण प्रतिशत।",whatItMeans:"पात्र परिवारों का वह अनुपात जिन्हें सभी सांविधिक पुनर्वास लाभ प्राप्त हो चुके हैं।",whyItMatters:"विस्थापन से पहले RFCTLARR अधिनियम के तहत सामाजिक सुरक्षा आवश्यकता।",howToInterpret:"कब्जे के चरण में 50% से नीचे का मान गंभीर गैर-अनुपालन दर्शाता है।",example:"4.08% आरएंडआर पूर्ण।",modelUsage:"प्रतिशत इनपुट विशेषता (0-100%)।"},schedule_variance_days:{title:"समय-सारणी विचलन (दिन) (Schedule Variance)",short:"नियोजित मील के पत्थर और वास्तविक परिचालन प्रगति के बीच दिनों में समय का अंतर।",whatItMeans:"ऋणात्मक मान समय से आगे होने का संकेत देते हैं; धनात्मक मान विलंब दर्शाते हैं।",whyItMatters:"आधारभूत लक्ष्य के विरुद्ध परियोजना वितरण प्रक्षेपवक्र का प्रत्यक्ष संकेतक।",howToInterpret:"+60 दिन या उससे अधिक गंभीर परियोजना विचलन का संकेत देते हैं।",example:"-7.19 दिन दर्शाता है कि परियोजना सांविधिक लक्ष्यों से थोड़ी आगे चल रही है।",modelUsage:"समय विचलन को पकड़ने वाली सतत संख्यात्मक इनपुट विशेषता।"},milestones_overdue:{title:"विलंबित मील के पत्थर (Overdue Milestones)",short:"वे सांविधिक मील के पत्थर जिन्होंने नियोजित कैलेंडर लक्ष्य तिथियों का उल्लंघन किया है।",whatItMeans:"मुख्य चरण (3A सर्वेक्षण, धारा 19, पंचाट, कब्जा) जो समय पर पूरे नहीं हुए।",whyItMatters:"धारा 19 और 25 के तहत सांविधिक अधिसूचना चूक का जोखिम पैदा करता है।",howToInterpret:"प्रारंभिक सर्वेक्षण सत्यापन में 1 विलंबित मील का पत्थर चिह्नित।",example:"1 विलंबित मील का पत्थर।",modelUsage:"सांविधिक अंतराल को मापने वाली पूर्णांक इनपुट विशेषता।"},pending_stakeholder_actions:{title:"लंबित हितधारक कार्रवाइयां (Pending Stakeholder Actions)",short:"बाहरी विभागों, उपयोगिता कंपनियों और स्थानीय निकायों से लंबित कार्रवाई मदें।",whatItMeans:"बिजली के खंभों/लाइनों का स्थानांतरण, पानी की पाइपलाइन मोड़ना, या नगरपालिका एनओसी।",whyItMatters:"जब तक उपयोगिताओं को स्थानांतरित नहीं किया जाता, निर्माण कार्य सुरक्षित रूप से शुरू नहीं हो सकता।",howToInterpret:"जिला मजिस्ट्रेट की अध्यक्षता में साप्ताहिक समन्वय बैठकों में समीक्षा करें।",example:"7 बाहरी उपयोगिता मदें लंबित।",modelUsage:"बाहरी निर्भरता के लिए पूर्णांक इनपुट विशेषता।"},avg_stakeholder_response_days:{title:"औसत हितधारक प्रतिक्रिया (दिन) (Avg Stakeholder Response)",short:"सक्षम प्राधिकारी की मांगों पर बाहरी विभागों द्वारा प्रतिक्रिया देने में लगे औसत कैलेंडर दिन।",whatItMeans:"राज्य के विभागों में प्रतिक्रिया देने का औसत समय।",whyItMatters:"विभागीय लालफीताशाही और अंतर-विभागीय समन्वय दक्षता को मापता है।",howToInterpret:"< 15 दिन उच्च दक्षता है; > 30 दिन में उच्च स्तरीय हस्तक्षेप की आवश्यकता होती है।",example:"28.59 दिन औसत विभागीय प्रतिक्रिया।",modelUsage:"समन्वय गति को पकड़ने वाली सतत संख्यात्मक विशेषता।"},stakeholder_responsiveness_score:{title:"हितधारक स्कोर (/10) (Stakeholder Score)",short:"अंतर-विभागीय सहयोग और समयबद्धता का मूल्यांकन करने वाला समग्र सूचकांक (0 से 10)।",whatItMeans:"बाहरी एजेंसियों के सामंजस्य का मूल्यांकन करने वाला प्रशासनिक प्रतिक्रिया मीट्रिक।",whyItMatters:"खराब अंतर-विभागीय समन्वय वाले गलियारों की पहचान करता है।",howToInterpret:"7.0 से ऊपर सक्रिय समन्वय दर्शाता है; 4.0 से नीचे प्रशासनिक रुकावट का संकेत है।",example:"5.14 / 10 मध्यम विभागीय प्रतिक्रिया को इंगित करता है।",modelUsage:"सतत संख्यात्मक रेटिंग विशेषता (0.0 से 10.0)।"},historical_avg_delay_days:{title:"ऐतिहासिक औसत विलंब (दिन) (Historical Avg Delay)",short:"राज्य/जिले में तुलनीय रैखिक परियोजनाओं के लिए दिनों में ऐतिहासिक औसत विलंब।",whatItMeans:"30 लाख ऐतिहासिक राष्ट्रीय भूमि अभिलेखों से प्राप्त अनुभवजन्य पूर्व-ज्ञान (Prior)।",whyItMatters:"क्षेत्रीय मिसालों के आधार पर मॉडल अनुमान में बेयसियन भार प्रदान करता है।",howToInterpret:"अदालती मुकदमों के उच्च इतिहास वाले जिलों में यह आधारभूत मान अधिक होता है।",example:"इस क्षेत्रीय क्षेत्र के लिए 100.8 दिन का ऐतिहासिक आधारभूत विलंब।",modelUsage:"क्षेत्रीय विलंब रुझान को दर्शाने वाली सतत संख्यात्मक विशेषता।"},delay_probability:{title:"पूर्वानुमानित विलंब जोखिम संभावना (Predicted Delay Probability)",short:"सांख्यिकीय संभावना (0-100%) कि यह भूमि अधिग्रहण 5 वर्ष से अधिक का सांविधिक विलंब अनुभव करेगा।",whatItMeans:"RFCTLARR धारा 25 के तहत समय-सीमा से अधिक जाने की मॉडल-अनुमानित संभावना।",whyItMatters:"सांविधिक समय-सीमा समाप्त होने से पहले पूर्व-निवारक प्रशासनिक हस्तक्षेप की अनुमति देता है।",howToInterpret:"<40% कम; 40-59.9% मध्यम; 60-79.9% उच्च; ≥80% गंभीर।",example:"42.3% संभावना गलियारे को मध्यम जोखिम स्तर में वर्गीकृत करती है।",modelUsage:"XGBoost बाइनरी क्लासिफायर (POST /predict) द्वारा उत्पन्न प्राथमिक आउटपुट।"},risk_level:{title:"जोखिम स्तर वर्गीकरण (Risk Tier Classification)",short:"पूर्वानुमानित विलंब संभावना के आधार पर प्रशासनिक तत्परता वर्गीकरण।",whatItMeans:"कम (Low), मध्यम (Medium), उच्च (High), या गंभीर (Critical) जोखिम स्तरों में श्रेणीकरण।",whyItMatters:"आवश्यक कार्यकारी निरीक्षण और रिपोर्टिंग आवृत्ति के स्तर को निर्धारित करता है।",howToInterpret:"गंभीर में तत्काल जिला कलेक्टर हस्तक्षेप आवश्यक है; कम में सामान्य निगरानी पर्याप्त है।",example:"MEDIUM RISK सक्रिय प्रशासनिक ट्रैकिंग की आवश्यकता को इंगित करता है।",modelUsage:"कैलिब्रेटेड संभावना सीमा के आधार पर निकाला गया वर्गीकरण।"},risk_thresholds:{title:"जोखिम नीति सीमाएं (Risk Policy Thresholds)",short:"जोखिम स्तर वर्गीकरण को परिभाषित करने वाली सांविधिक नीति सीमाएं।",whatItMeans:"पूर्व-निर्धारित नीति बैंड: कम (<40%), मध्यम (40-60%), उच्च (60-80%), गंभीर (≥80%)।",whyItMatters:"सभी राज्य क्षेत्राधिकारों में मानकीकृत शासन वर्गीकरण प्रदान करता है।",howToInterpret:"60% पार करने वाले गलियारे स्वचालित रूप से राज्य निगरानी में आ जाते हैं।",example:"60.5% वाला प्रोजेक्ट उच्च अड़चन स्तर (High Tier) में प्रवेश करता है।",modelUsage:"कच्चे मॉडल आउटपुट संभावनाओं पर लागू नीति विन्यास।"},model_confidence:{title:"मॉडल विश्वसनीयता स्कोर (Model Confidence)",short:"30 लाख राष्ट्रीय अभिलेखों पर सत्यापन के आधार पर अनुभवजन्य विश्वसनीयता सूचकांक।",whatItMeans:"मॉडल क्रॉस-सत्यापन (ROC-AUC 0.7805) से प्राप्त सांख्यिकीय विश्वास अंतराल।",whyItMatters:"अधिकारियों को मॉडल निश्चितता में पारदर्शिता प्रदान करता है।",howToInterpret:"उच्च स्कोर इस गलियारा प्रकार के लिए घने प्रशिक्षण डेटा कवरेज को दर्शाता है।",example:"प्रशिक्षण डेटासेट में तुलनीय राजमार्गों के आधार पर 91.4% विश्वसनीयता।",modelUsage:"पूर्वानुमान के साथ प्रदर्शित प्रणाली विश्वसनीयता मीट्रिक।"},risk_drivers_increasing:{title:"जोखिम बढ़ाने वाले कारक (+Δ) (Risk-Increasing Drivers)",short:"परियोजना की वे स्थितियां जो मॉडल ट्री स्प्लिट्स के अनुसार विलंब संभावना को ऊपर धकेलती हैं।",whatItMeans:"विशिष्ट अड़चनें (जैसे लंबित दस्तावेज, अदालती रोक) जो जोखिम बढ़ाती हैं।",whyItMatters:"उन सटीक परिचालन बाधाओं को उजागर करता है जिन पर प्रशासनिक कार्रवाई लक्षित होनी चाहिए।",howToInterpret:"उच्च धनात्मक योगदान (+Δ) जोखिम पर मजबूत प्रभाव को इंगित करता है।",example:"लंबित दस्तावेज (+0.4215 योगदान) प्राथमिक जोखिम चालक है।",modelUsage:"XGBoost ट्री योगदान (SHAP मार्जिन) से निकाला गया।"},risk_drivers_reducing:{title:"जोखिम घटाने वाले कारक (-Δ) (Risk-Reducing Factors)",short:"परियोजना की वे सकारात्मक स्थितियां जो मॉडल ट्री स्प्लिट्स के अनुसार विलंब संभावना को कम करती हैं।",whatItMeans:"सकारात्मक स्थितियां (जैसे तेज प्रगति, शून्य विवाद) जो जोखिम को कम करती हैं।",whyItMatters:"उन परिचालन क्षेत्रों की पुष्टि करता है जहां परियोजना निष्पादन सुचारू है।",howToInterpret:"अधिक ऋणात्मक योगदान (-Δ) जोखिम पर मजबूत शमन प्रभाव को इंगित करता है।",example:"अधिग्रहण गति (-0.1840 योगदान) सक्रिय रूप से विलंब संभावना को कम करती है।",modelUsage:"XGBoost ट्री योगदान से निकाला गया।"},statutory_directives:{title:"अनुशंसित सांविधिक निर्देश (Statutory Directives)",short:"शीर्ष जोखिम योगदानकर्ताओं के आधार पर उत्पन्न प्राथमिकता वाली प्रशासनिक सिफारिशें।",whatItMeans:"RFCTLARR प्रावधानों के अनुरूप कार्रवाई योग्य कानूनी और परिचालन निर्देश।",whyItMatters:"अधिकारियों को सीधे विश्लेषणात्मक निष्कर्ष से प्रशासनिक निष्पादन की ओर ले जाता है।",howToInterpret:"P1 तत्काल अनिवार्य कार्रवाई दर्शाता है; P2 द्वितीयक अनुवर्ती कार्रवाई दर्शाता है।",example:"P1 प्राथमिकता: नामांतरण बैकलॉग को हल करने के लिए विशेष ग्राम शिविर आयोजित करें।",modelUsage:"मॉडल जोखिम चालकों को RFCTLARR कार्रवाइयों से मैप करने वाला नियम-आधारित विशेषज्ञ सिस्टम।"},methodology_evaluation:{title:"मॉडल कार्यप्रणाली एवं मूल्यांकन (Methodology & Metrics)",short:"भूमि सखा अनुमान इंजन के तकनीकी विनिर्देश और मूल्यांकन बेंचमार्क।",whatItMeans:"76 इंजीनियर कैडस्ट्रल विशेषताओं पर काम करने वाला XGBoost बाइनरी क्लासिफायर।",whyItMatters:"प्रशासनिक उपयोगकर्ताओं के लिए एल्गोरिथम पारदर्शिता और जवाबदेही सुनिश्चित करता है।",howToInterpret:"सटीकता: 71.05%, ROC-AUC: 0.7805, परिशुद्धता: 68.07%, रिकॉल: 71.98% (30 लाख रिकॉर्ड्स)।",example:"FastAPI एंडपॉइंट POST /predict के माध्यम से उप-सेकंड विलंबता में निष्पादन।",modelUsage:"सिस्टम आर्किटेक्चर विनिर्देश।"},statutory_presets:{title:"सांविधिक परीक्षण परिदृश्य (Statutory Presets)",short:"विशिष्ट बुनियादी ढांचा परियोजना प्रोफाइल का प्रतिनिधित्व करने वाले कैलिब्रेटेड बेंचमार्क परिदृश्य।",whatItMeans:"कम, मध्यम, उच्च और गंभीर जोखिम वाले गलियारों के लिए पूर्व-कॉन्फ़िगर डेटासेट।",whyItMatters:"मैन्युअल प्रविष्टि के बिना मॉडल संवेदनशीलता के त्वरित परीक्षण की अनुमति देता है।",howToInterpret:"पूरी मैट्रिक्स भरने के लिए किसी भी प्रीसेट बटन पर क्लिक करें।",example:"वेस्टर्न कॉरिडोर बेसलाइन 42.3% जोखिम मॉडल प्रोफाइल लोड करता है।",modelUsage:"पूर्वनिर्धारित फीचर वैक्टर लोड करने वाली यूआई उपयोगिता।"},mode_select_project:{title:"मौजूदा परियोजना चुनें (Select Project Mode)",short:"राष्ट्रीय कैडस्ट्रल रजिस्ट्री से वास्तविक सत्यापित परियोजना डेटा लोड करने का मोड।",whatItMeans:"बिना संपादन के वास्तविक चल रहे अवसंरचना गलियारे के डेटा का निरीक्षण करता है।",whyItMatters:"सक्रिय सरकारी गलियारों के कार्यकारी ऑडिट के लिए उपयोग किया जाता है।",howToInterpret:"औपचारिक सांविधिक समीक्षा करते समय इस मोड पर स्विच करें।",example:"दिल्ली-अमृतसर एक्सप्रेसवे पैकेज 4 का डेटा लोड करता है।",modelUsage:"यूआई परिचालन स्थिति स्विच।"},mode_test_scenario:{title:"परिदृश्य बनाएं / परीक्षण करें (Test Scenario Mode)",short:"इनपुट को संशोधित करने और जोखिम प्रभाव का निरीक्षण करने के लिए इंटरैक्टिव सिमुलेशन मोड।",whatItMeans:'संवेदनशीलता परीक्षण कॉकपिट जो "क्या-अगर" प्रशासनिक कार्रवाइयों का अनुकरण करने की अनुमति देता है।',whyItMatters:"यह निर्धारित करने में मदद करता है कि क्या दस्तावेजों को तेज करने से परियोजना कम जोखिम में आएगी।",howToInterpret:"इनपुट समायोजित करें (जैसे लंबित दस्तावेज कम करें) और जोखिम अंतर देखने के लिए पुन: आकलन करें।",example:"दस्तावेजों को 232 से घटाकर 50 करने पर जोखिम 42% से घटकर 28% हो जाता है।",modelUsage:"इंटरएक्टिव मॉडल परीक्षण मोड।"},assess_project_risk:{title:"परियोजना जोखिम आकलन बटन (Assess Risk Button)",short:"XGBoost बैकएंड पर फॉर्म डेटा भेजकर वास्तविक समय में अनुमान निष्पादित करता है।",whatItMeans:"FastAPI /predict एंडपॉइंट को कॉल करता है और अद्यतन जोखिम संभावना प्रस्तुत करता है।",whyItMatters:"अंतिम जोखिम स्कोर और सांविधिक निर्देश उत्पन्न करता है।",howToInterpret:"मूल्यांकन को ताज़ा करने के लिए किसी भी मान को बदलने के बाद क्लिक करें।",example:"76 पैरामीटर जमा करता है और < 200ms में स्कोर लौटाता है।",modelUsage:"मॉडल अनुमान का प्राथमिक एक्शन ट्रिगर।"},reset_values:{title:"मान रीसेट करें बटन (Reset Values Button)",short:"सभी इनपुट फ़ील्ड को सक्रिय प्रीसेट आधारभूत मानों पर पुनर्स्थापित करता है।",whatItMeans:"अस्थायी मैन्युअल संपादन को साफ करता है और कैलिब्रेटेड प्रोफाइल के साथ पुनः सिंक करता है।",whyItMatters:"प्रायोगिक परीक्षण के बाद ज्ञात आधार रेखा पर त्वरित वापसी सुनिश्चित करता है।",howToInterpret:"मैन्युअल संशोधनों को त्यागने के लिए उपयोग करें।",example:"वेस्टर्न कॉरिडोर बेसलाइन मानों को पुनर्स्थापित करता है।",modelUsage:"फॉर्म स्थिति रीसेट उपयोगिता।"},retry_assessment:{title:"पुनः प्रयास करें (Retry Assessment)",short:"नेटवर्क या बैकएंड सेवा में व्यवधान होने पर अनुमान अनुरोध पुनः भेजता है।",whatItMeans:"पूर्वानुमान सेवा से पुनः जुड़ने और परियोजना डेटा का पुनर्मूल्यांकन करने का प्रयास करता है।",whyItMatters:"डेटा हानि के बिना अस्थायी कनेक्टिविटी समस्याओं से उबरता है।",howToInterpret:'"इनफरेंस अनुपलब्ध" चेतावनी प्रदर्शित होने पर क्लिक करें।',example:"FastAPI सेवा के साथ कनेक्शन पुनः स्थापित करता है।",modelUsage:"त्रुटि निवारण उपयोगिता।"},read_aloud:{title:"बोलकर सुनाएं (Read Aloud TTS)",short:"सक्रिय भाषा में दृश्य पाठ को बोलने वाला ब्राउज़र-मूल टेक्स्ट-टू-स्पीच संश्लेषण।",whatItMeans:"भारतीय क्षेत्रीय आवाज़ों (en-IN, hi-IN, mr-IN) का उपयोग करके निष्कर्ष सुनाता है।",whyItMatters:"क्षेत्रीय अधिकारियों और श्रवण समीक्षा के लिए पहुंच में सुधार करता है।",howToInterpret:"शुरू करने के लिए सुनाएं (Read) पर क्लिक करें, रोकने के लिए रोकें (Pause) पर क्लिक करें।",example:'"भूमि सखा आकलन निष्कर्ष। विलंब संभावना: 42.3%..." बोलकर सुनाता है।',modelUsage:"नेटिव window.speechSynthesis द्वारा संचालित एक्सेसिबिलिटी सुविधा।"},dash_total_projects:{title:"कुल मॉनिटर की गई परियोजनाएं (Total Projects Monitored)",short:"राष्ट्रीय पाइपलाइन के तहत वर्तमान में मॉनिटर किए जा रहे कुल बुनियादी ढांचा गलियारे।",whatItMeans:"कैडस्ट्रल डेटाबेस में सक्रिय राजमार्ग, रेल, ऊर्जा और शहरी परियोजनाओं की कुल संख्या।",whyItMatters:"सभी प्रमुख क्षेत्रों में कुल पूंजीगत शासन के दायरे को दर्शाता है।",howToInterpret:"46 राजमार्गों, 38 माल ढुलाई और 58 ऊर्जा/शहरी गलियारों में 142 राष्ट्रीय परियोजनाओं को कवर करता है।",example:"24 राज्यों में 142 परियोजनाएं मॉनिटर की गईं।",modelUsage:"पोर्टफोलियो एकत्रीकरण मीट्रिक।"},dash_high_critical:{title:"उच्च / गंभीर जोखिम वाले गलियारे (High/Critical Corridors)",short:"उच्च (60-80%) या गंभीर (≥80%) विलंब संभावना स्तर में वर्गीकृत परियोजनाओं की संख्या।",whatItMeans:"वे गलियारे जो गंभीर दस्तावेजी, न्यायिक या हितधारक अड़चनों का सामना कर रहे हैं।",whyItMatters:"मंत्रालयीय और सचिवीय हस्तक्षेप को सबसे कमजोर 20% परियोजनाओं पर केंद्रित करता है।",howToInterpret:"ट्रैक करता है कि क्या अड़चनों की संख्या समय के साथ घट रही है या बढ़ रही है।",example:"वर्तमान में 29 परियोजनाओं (20.4%) में तत्काल कार्यकारी ध्यान देने की आवश्यकता है।",modelUsage:"प्रशासनिक वृद्धि सूचकांक।"},dash_intervention:{title:"हस्तक्षेप की आवश्यकता (Requiring Intervention)",short:"तत्काल सांविधिक अड़चनों वाली परियोजनाएं जहां जिला मजिस्ट्रेट कार्रवाई आवश्यक है।",whatItMeans:"लंबित धारा 19 समय-सीमा, सक्रिय स्थगनादेश, या एस्क्रो देरी वाले गलियारे।",whyItMatters:"वर्तमान प्रशासनिक चक्र के लिए कार्रवाई योग्य प्रशासनिक प्राथमिकताओं का प्रतिनिधित्व करता है।",howToInterpret:"प्रत्येक मामले में लक्षित निर्देश (जैसे विशेष शिविर, स्थगनादेश वापसी) की आवश्यकता होती है।",example:"14 तत्काल कार्रवाइयां: 8 दस्तावेज अड़चनें, 6 मुआवजा एस्क्रो।",modelUsage:"कार्रवाई योग्य शासन संकेतक।"},dash_avg_risk:{title:"औसत विलंब जोखिम (Average Delay Risk)",short:"सभी मॉनिटर की गई राष्ट्रीय परियोजनाओं में अनुमानित विलंब संभावनाओं का अंकगणितीय औसत।",whatItMeans:"पोर्टफोलियो-व्यापी विलंब जोखिम स्वास्थ्य सूचकांक (वर्तमान में 36.8%)।",whyItMatters:"राज्य के आधारभूत स्तरों के मुकाबले राष्ट्रीय भूमि अधिग्रहण शासन के समग्र स्वास्थ्य को मापता है।",howToInterpret:"< 40% इंगित करता है कि पोर्टफोलियो प्रबंधनीय कम-मध्यम जोखिम क्षेत्र में है।",example:"राज्य ऐतिहासिक औसत के मुकाबले -2.4% विचलन के साथ 36.8% पोर्टफोलियो औसत।",modelUsage:"मैक्रो पोर्टफोलियो स्वास्थ्य मीट्रिक।"},dash_risk_distribution:{title:"पोर्टफोलियो जोखिम वितरण (Risk Distribution)",short:"चार मानकीकृत जोखिम स्तरों में राष्ट्रीय गलियारों का आनुपातिक विभाजन।",whatItMeans:"खंडित वितरण पट्टी: गंभीर (8%), उच्च (13%), मध्यम (34%), कम (45%)।",whyItMatters:"जोखिम के झुकाव को दर्शाता है और पहचानता है कि क्या प्रणालीगत अड़चनें जमा हो रही हैं।",howToInterpret:"गंभीर/उच्च खंड का बढ़ना उभरते व्यापक विलंब का संकेत देता है।",example:"65 परियोजनाएं (45%) कम जोखिम में; 11 परियोजनाएं (8%) गंभीर स्तर में।",modelUsage:"मैक्रो विभाजन विज़ुअलाइज़र।"},dash_key_drivers:{title:"प्रमुख जोखिम चालक (Key Risk Drivers)",short:"मॉडल ट्री योगदानों द्वारा पहचानी गई मूल कारणों की समग्र आवृत्ति।",whatItMeans:"प्राथमिक घर्षण स्रोतों की रैंकिंग: दस्तावेजीकरण, कब्जा, विवाद, अनापत्तियां।",whyItMatters:"प्रणालीगत नीति हस्तक्षेपों (जैसे डिजिटल नामांतरण अभियान, लोक अदालत बेंच) को सूचित करता है।",howToInterpret:"दस्तावेजीकरण बैकलॉग (38%) राष्ट्रव्यापी स्तर पर परियोजना विलंब का मुख्य कारण है।",example:"38% दस्तावेजीकरण, 27% कब्जा, 19% विवाद, 16% अनापत्तियां।",modelUsage:"प्रणालीगत योगदान एकत्रीकरण।"},dash_triangulation_alert:{title:"पूर्वानुमानित त्रिकोणीय चेतावनी (Triangulation Alert)",short:"क्रॉस-प्रोजेक्ट पैटर्न सहसंबंध से उत्पन्न स्वचालित पूर्व चेतावनी।",whatItMeans:"गलियारे की विशेषताओं और क्षेत्रीय इतिहास के आधार पर उभरते जोखिमों का एआई द्वारा पता लगाना।",whyItMatters:"औपचारिक याचिकाएं दायर होने से पहले ही अधिकारियों को संभावित विवादों की चेतावनी देता है।",howToInterpret:"सिफारिश की समीक्षा करें और सक्रिय हितधारक सुनवाई निर्धारित करें।",example:"औद्योगिक कृषि-क्षेत्रों में 14 दिनों के भीतर धारा 15 आपत्तियां बढ़ने की 82% संभावना है।",modelUsage:"प्रशिक्षण डेटा पैटर्न से प्राप्त चेतावनी।"},dash_priority_projects:{title:"प्राथमिकता परियोजनाएं तालिका (Priority Projects)",short:"पूर्वानुमानित विलंब संभावना के आधार पर गलियारों को प्राथमिकता देने वाला कैडस्ट्रल लेजर।",whatItMeans:"प्रशासनिक निरीक्षण की आवश्यकता वाली राष्ट्रीय परियोजनाओं की क्रमबद्ध तालिका।",whyItMatters:"अधिकारियों को उच्च जोखिम वाली परियोजनाओं का तुरंत विस्तृत ऑडिट करने की अनुमति देता है।",howToInterpret:"गंभीर जोखिम शीर्ष पर छांटे गए हैं; निरीक्षण के लिए आकलन या ऑडिट पर क्लिक करें।",example:"दिल्ली-अमृतसर एक्सप्रेसवे (84.6% विलंब जोखिम) शीर्ष प्राथमिकता के रूप में सूचीबद्ध।",modelUsage:"इंटरएक्टिव प्रशासनिक लेजर।"},proj_directory_filter_sector:{title:"क्षेत्र फ़िल्टर (Sector Filter)",short:"अवसंरचना श्रेणी (राजमार्ग, रेल, ऊर्जा, मेट्रो) द्वारा परियोजना निर्देशिका को फ़िल्टर करता है।",whatItMeans:"विशिष्ट क्षेत्र के गलियारों का निरीक्षण करने के लिए खंडित दृश्य।",whyItMatters:"मंत्रालय के नोडल अधिकारियों के लिए क्षेत्रीय समीक्षा को सक्षम बनाता है।",howToInterpret:"केवल संबंधित रिकॉर्ड देखने के लिए ड्रॉपडाउन से एक क्षेत्र चुनें।",example:"केवल राष्ट्रीय एक्सप्रेसवे गलियारों को देखने के लिए हाईवे चुनें।",modelUsage:"तालिका फ़िल्टरिंग नियंत्रण।"},proj_directory_filter_risk:{title:"जोखिम स्तर फ़िल्टर (Risk Tier Filter)",short:"वर्गीकृत विलंब जोखिम स्तर द्वारा परियोजना निर्देशिका को फ़िल्टर करता है।",whatItMeans:"लेजर में गंभीर, उच्च, मध्यम या कम जोखिम वाली परियोजनाओं को अलग करता है।",whyItMatters:"अधिकारियों को किसी विशिष्ट श्रेणी की सभी परियोजनाओं का त्वरित ऑडिट करने की अनुमति देता है।",howToInterpret:"तत्काल कार्रवाई योग्य परियोजनाओं के लिए गंभीर (Critical) फ़िल्टर का उपयोग करें।",example:"आपातकालीन हस्तक्षेप परियोजनाओं को अलग करने के लिए गंभीर (≥80%) द्वारा फ़िल्टर करें।",modelUsage:"तालिका फ़िल्टरिंग नियंत्रण।"},proj_col_stage:{title:"सांविधिक चरण कॉलम (Statutory Stage Column)",short:"RFCTLARR ढांचे के तहत वर्तमान में सक्रिय कानूनी मील का पत्थर।",whatItMeans:"अधिसूचना से सर्वेक्षण, पंचाट और कब्जे तक प्रक्रियात्मक प्रगति को इंगित करता है।",whyItMatters:"यह आकलन करने में मदद करता है कि परियोजना सामान्य चल रही है या किसी चरण में अटकी है।",howToInterpret:'10 महीने से अधिक समय तक "धारा 19" में रुकी परियोजनाएं चूक के जोखिम में हैं।',example:"धारा 19 घोषणा, मुआवजा पंचाट, संयुक्त सर्वेक्षण 3A।",modelUsage:"सांविधिक मील का पत्थर प्रदर्शन।"},proj_action_assess:{title:"परियोजना आकलन कार्रवाई (Assess Project Action)",short:"विस्तृत पुनर्मूल्यांकन के लिए चयनित परियोजना डेटा को आकलन कॉकपिट में लोड करता है।",whatItMeans:"परियोजना के फीचर स्नैपशॉट को सिमुलेशन स्क्रीन पर स्थानांतरित करता है।",whyItMatters:'अधिकारियों को उस विशिष्ट परियोजना के लिए "क्या-अगर" परिदृश्य चलाने में सक्षम बनाता है।',howToInterpret:"इस परियोजना से पहले से भरे कॉकपिट को खोलने के लिए आकलन (Assess) पर क्लिक करें।",example:"आकलन कॉकपिट में वेस्टर्न कॉरिडोर लोड करता है।",modelUsage:"कॉकपिट डीप-लिंक कार्रवाई।"},proj_action_audit:{title:"फाइल ऑडिट कार्रवाई (Audit File Action)",short:"चयनित गलियारे के लिए व्यापक प्रशासनिक ऑडिट डोजियर खोलता है।",whatItMeans:"भूखंडों, एस्क्रो फंड और प्रारूप डीसी आदेशों को दिखाने वाला विस्तृत डोजियर खोलता है।",whyItMatters:"कैडस्ट्रल रिकॉर्ड और कानूनी स्थिति में पूर्ण प्रशासनिक दृश्यता प्रदान करता है।",howToInterpret:"पूरी सांविधिक फाइल और डीसी आदेश पूर्वावलोकन की समीक्षा के लिए ऑडिट (Audit) पर क्लिक करें।",example:"परियोजना BF-NH-2024-09 के लिए ऑडिट डोजियर खोलता है।",modelUsage:"डोजियर डीप-लिंक कार्रवाई।"},detail_statutory_hash:{title:"सांविधिक ऑडिट हैश (Statutory Audit Hash)",short:"डेटा अखंडता और उत्पत्ति को प्रमाणित करने वाला क्रिप्टोग्राफिक SHA-256 फिंगरप्रिंट।",whatItMeans:"सत्यापित राजस्व रिकॉर्ड स्नैपशॉट से उत्पन्न अद्वितीय क्रिप्टोग्राफिक पहचानकर्ता।",whyItMatters:"राष्ट्रीय आधुनिकीकरण प्रोटोकॉल के तहत छेड़छाड़-रोधी ट्रैसेबिलिटी की गारंटी देता है।",howToInterpret:"राजपत्रित धारा 19 घोषणा पर डिजिटल हस्ताक्षर से मेल खाता है।",example:"लुधियाना पैकेज 4 को प्रमाणित करने वाला SHA256-7D88-LUD।",modelUsage:"सुरक्षा और ऑडिट अनुपालन सुविधा।"},detail_model_inference:{title:"मॉडल अनुमान स्थिति (Model Inference Status)",short:"इंगित करता है कि प्रदर्शित मीट्रिक सीधे XGBoost अनुमान मॉडल के साथ सिंक्रनाइज़ हैं।",whatItMeans:"वास्तविक समय की स्थिति पुष्टि करती है कि पूर्वानुमान वर्तमान डेटाबेस स्थिति को दर्शाते हैं।",whyItMatters:"अधिकारियों को आश्वस्त करता है कि जोखिम आकलन अद्यतन आंकड़ों पर आधारित है।",howToInterpret:'"लाइव सिंक्रनाइज़" अनुमान सेवा के साथ सक्रिय कनेक्शन को इंगित करता है।',example:"FastAPI माइक्रोसर्विस के माध्यम से लाइव सिंक्रनाइज़।",modelUsage:"सिस्टम टेलीमेट्री स्थिति संकेतक।"},detail_land_requisition:{title:"कुल भूमि मांग (Total Land Requisition)",short:"सभी प्रभावित राजस्व गांवों में अधिग्रहण के लिए अधिसूचित कुल भूमि क्षेत्रफल।",whatItMeans:"धारा 19 घोषणा के तहत अधिकृत संपूर्ण सतह पदचिह्न।",whyItMatters:"कुल भूखंड आवश्यकताओं और आवश्यक मुआवजा बजट को स्थापित करता है।",howToInterpret:"14 राजस्व गांवों में फैला होना दर्शाता है कि बहु-तहसील समन्वय आवश्यक है।",example:"14 गांवों में 184.20 हेक्टेयर।",modelUsage:"परियोजना के पैमाने का मूल मीट्रिक।"},detail_affected_landowners:{title:"प्रभावित भूस्वामी एवं खाते (Affected Landowners & Khatas)",short:"कुल पंजीकृत खाता राजस्व खाते और लंबित शीर्षक नामांतरण विवाद।",whatItMeans:"मुआवजे के हकदार अलग-अलग भूमिधारक खातों की संख्या।",whyItMatters:"अनसुलझे नामांतरण पंचाट वितरण में देरी करते हैं और अदालती चुनौतियों का जोखिम बढ़ाते हैं।",howToInterpret:"1,892 खातों में से 410 अनसुलझे नामांतरण उच्च दस्तावेजी बैकलॉग का संकेत देते हैं।",example:"1,892 खाते जिनमें 410 नामांतरण अनसुलझे हैं।",modelUsage:"स्वामित्व और शीर्षक सत्यापन मीट्रिक।"},detail_sanctioned_escrow:{title:"स्वीकृत एस्क्रो बजट (Sanctioned Escrow Budget)",short:"सक्षम प्राधिकारी (CALA) के पास जमा कुल मुआवजा एस्क्रो धनराशि।",whatItMeans:"मुआवजा पंचाटों को निधि देने के लिए बनाया गया समर्पित बैंक एस्क्रो खाता।",whyItMatters:"धारा 38 के तहत भौतिक कब्जा लेने से पहले राशि का भुगतान होना चाहिए।",howToInterpret:"₹29.60 करोड़ अवितरित होना दर्शाता है कि धन उपलब्ध है लेकिन सत्यापन में अटका है।",example:"₹62.00 करोड़ स्वीकृत, ₹29.60 करोड़ वितरण हेतु लंबित।",modelUsage:"वित्तीय तरलता और संवितरण मीट्रिक।"},detail_cutoff_timeline:{title:"धारा 19 सांविधिक समय-सीमा (Section 19 Cutoff Timeline)",short:"धारा 11 की सूचना और धारा 19 की घोषणा के बीच 12 महीने की सख्त समय-सीमा की निगरानी।",whatItMeans:"RFCTLARR धारा 19(7) के तहत 12 महीने में घोषणा न होने पर अधिसूचना पूरी तरह रद्द हो जाती है।",whyItMatters:"रद्द होने पर भारी वित्तीय नुकसान के साथ पूरी प्रक्रिया दोबारा शुरू करनी पड़ती है।",howToInterpret:"48 घंटे शेष होना दर्शाता है कि घोषणा तुरंत जारी करने के लिए आपात कार्रवाई चाहिए।",example:"+94 दिन का विचलन जोखिम स्वामित्व सत्यापन में गंभीर अड़चन को दर्शाता है।",modelUsage:"सांविधिक अनुपालन समय-सीमा मॉनिटर।"},detail_progress_gauges:{title:"बहु-क्षेत्रीय भूमि अधिग्रहण प्रगति गेज (Multi-Domain Gauges)",short:"राज्य ई-भूमि रिकॉर्ड रजिस्ट्री के साथ सिंक्रनाइज़ किए गए परिचालन प्रगति मीटर।",whatItMeans:"5 डोमेन में प्रगति ट्रैक करता है: कुल, संयुक्त सर्वेक्षण, धारा 23 पंचाट, कब्जा, और डीबीटी।",whyItMatters:"पहचानता है कि कौन सा डोमेन (सर्वेक्षण, कानूनी पंचाट, कब्जा, या भुगतान) पिछड़ रहा है।",howToInterpret:"पंचाट (34%) और कब्जे (29%) के बीच का अंतर जमीनी हस्तांतरण में रुकावट को उजागर करता है।",example:"कुल प्रगति 42%, संयुक्त सर्वेक्षण 68%, पंचाट 34%, कब्जा 29%, डीबीटी 52%।",modelUsage:"बहु-क्षेत्रीय परिचालन टेलीमेट्री।"},detail_draft_dc_order:{title:"प्रोटोटाइप प्रारूप डीसी आदेश (Prototype Draft DC Order)",short:"शासन प्रदर्शन और प्रशासनिक त्वरित कार्रवाई के लिए उत्पन्न सिमुलेटेड निर्देश पूर्वावलोकन।",whatItMeans:"एक पूर्व-निर्मित प्रारूप ज्ञापन जो दिखाता है कि एआई जोखिम अंतर्दृष्टि प्रशासनिक आदेशों में कैसे बदलती है।",whyItMatters:"एआई पूर्वानुमान से लेकर कार्यकारी हस्तक्षेप तक संपूर्ण शासन कार्यप्रवाह को प्रदर्शित करता है।",howToInterpret:"केवल प्रोटोटाइप सिमुलेशन — आधिकारिक डीसी हस्ताक्षर के बिना इसका कोई कानूनी अधिकार नहीं है।",example:"संयुक्त निरीक्षण और डीबीटी में तेजी लाने के लिए अधिकारियों को निर्देश।",modelUsage:"प्रोटोटाइप शासन सिमुलेशन सुविधा।"},notif_severity:{title:"चेतावनी गंभीरता स्तर (Alert Severity Level)",short:"आवश्यक प्रशासनिक प्रतिक्रिया गति को इंगित करने वाला तात्कालिकता वर्गीकरण।",whatItMeans:"गंभीर: तत्काल कार्रवाई; उच्च: 24 घंटे में समीक्षा; सामान्य: केवल सूचनात्मक अपडेट।",whyItMatters:"महत्वपूर्ण सांविधिक समय-सीमाओं को उजागर करके चेतावनी थकान को रोकता है।",howToInterpret:"लाल किनारा गंभीर दर्शाता है; नारंगी उच्च दर्शाता है; नीला प्रणाली अपडेट दर्शाता है।",example:"दिल्ली-अमृतसर एक्सप्रेसवे पर 84.6% विलंब जोखिम के लिए गंभीर चेतावनी।",modelUsage:"चेतावनी प्राथमिकता वर्गीकरण।"},notif_categories:{title:"अधिसूचना श्रेणी (Notification Category)",short:"प्लेटफॉर्म के भीतर कार्यात्मक स्रोत द्वारा चेतावनियों को वर्गीकृत करता है।",whatItMeans:"जोखिम चेतावनी (मॉडल), इंजन (FastAPI स्थिति), अधिकारी ध्यान (बैकलॉग), सिस्टम (सिंक)।",whyItMatters:"संबंधित विभागीय विशेषज्ञों को चेतावनियां फ़िल्टर और रूट करने में सक्षम बनाता है।",howToInterpret:"जोखिम चेतावनियों या परिचालन सूचनाओं पर ध्यान केंद्रित करने के लिए श्रेणियों का उपयोग करें।",example:"जोखिम अलर्ट: धारा 19 हस्तक्षेप आवश्यक।",modelUsage:"कार्यात्मक चेतावनी वर्गीकरण।"},notif_unread_state:{title:"पठित / अपठित स्थिति (Read / Unread Status)",short:"ट्रैक करता है कि समीक्षा करने वाले अधिकारी द्वारा परिचालन चेतावनी देखी गई है या नहीं।",whatItMeans:"अपठित चेतावनियां स्पष्ट रूप से चमकती हैं और शीर्ष बार के बैज को बढ़ाती हैं।",whyItMatters:"सुनिश्चित करता है कि दैनिक प्रशासनिक कार्य में महत्वपूर्ण चेतावनियां अनदेखी न रह जाएं।",howToInterpret:"स्थिति बदलने के लिए चेकमार्क पर क्लिक करें; बैज हटाने के लिए सभी को पढ़ा हुआ चिह्नित करें।",example:'"नया" बैज के साथ प्रदर्शित अपठित चेतावनी।',modelUsage:"उपयोगकर्ता सूचना ट्रैकिंग।"}},tts:{read:"सुने",read_aloud:"बोलकर सुनाएं",read_aria:"मूल्यांकन को बोलकर सुनाएं",pause:"रोकें",resume:"जारी रखें",stop:"बंद करें",stop_reading:"पठन बंद करें",stop_aria:"बोलना बंद करें"},stages:{"Sec 19 Declaration":"धारा 19 घोषणा (Sec 19 Declaration)","Compensation Award":"मुआवजा पंचाट (Compensation Award Sec 23)","Joint Survey 3A":"संयुक्त सर्वेक्षण 3A (Joint Survey 3A)",Notification:"प्रारंभिक अधिसूचना (Notification Sec 11/3A)",Rehabilitation:"पुनर्वास एवं पुनर्स्थापन (R&R)",Valuation:"भूमि एवं परिसंपत्ति मूल्यांकन (Valuation)",Survey:"कैडस्ट्रल एवं संयुक्त सर्वेक्षण (Survey)",Compensation:"मुआवजा निर्धारण एवं एस्क्रो (Compensation)",Possession:"भौतिक कब्जा एवं आरओडब्ल्यू (Possession)"},factors:{documents_pending:"लंबित दस्तावेज (Documents Pending)",documents_required:"आवश्यक दस्तावेज (Documents Required)",documentation_completion_pct:"दस्तावेजीकरण पूर्णता (Documentation Completion %)",compensation_pending_cases:"लंबित मुआवजा मामले (Compensation Pending Cases)",compensation_pending_amount:"लंबित मुआवजा राशि (Compensation Pending Amount)",compensation_total_amount:"कुल मुआवजा राशि (Compensation Total Amount)",compensation_completion_pct:"मुआवजा पूर्णता दर (Compensation Completion %)",pending_objections:"लंबित आपत्तियां (Pending Objections)",active_legal_disputes:"सक्रिय कानूनी विवाद (Active Legal Disputes)",ownership_disputes:"स्वामित्व विवाद (Ownership Disputes)",court_stay_cases:"अदालती स्थगन मामले (Court Stay Cases)",approvals_pending:"लंबित अनुमोदन (Approvals Pending)",overdue_approvals:"अतिदेय अनुमोदन (Overdue Approvals)",avg_approval_delay_days:"औसत अनुमोदन विलंब दिन (Avg Approval Delay Days)",rr_pending_cases:"पुनर्वास लंबित मामले (R&R Pending Cases)",rr_completion_pct:"पुनर्वास पूर्णता दर (R&R Completion %)",possession_pending_parcels:"कब्जा लंबित भूखंड (Possession Pending Parcels)",parcels_pending:"लंबित भूखंड (Parcels Pending)",acquisition_progress_pct:"अधिग्रहण प्रगति (Acquisition Progress %)",acquisition_velocity_pct_per_30d:"अधिग्रहण गति (Acquisition Velocity)",schedule_variance_days:"समय विचलन दिन (Schedule Variance Days)",milestones_overdue:"अतिदेय मील के पत्थर (Milestones Overdue)",pending_stakeholder_actions:"लंबित हितधारक कार्रवाइयां (Pending Stakeholder Actions)",avg_stakeholder_response_days:"औसत हितधारक प्रतिक्रिया दिन (Avg Stakeholder Response Days)",stakeholder_responsiveness_score:"हितधारक अनुक्रियाशीलता स्कोर (Stakeholder Responsiveness Score)",complexity_score:"जटिलता सूचकांक (Complexity Score)",planned_duration_days:"नियोजित अवधि दिन (Planned Duration Days)",affected_families:"प्रभावित परिवार (Affected Families)",total_parcels:"कुल भूखंड (Total Parcels)",historical_avg_delay_days:"ऐतिहासिक औसत विलंब दिन (Historical Avg Delay Days)",project_type_highway:"परियोजना प्रकार: राजमार्ग (Highway)",project_type_railway:"परियोजना प्रकार: रेलवे (Railway)",land_type_agricultural:"भूमि वर्गीकरण: कृषि भूमि (Agricultural)",priority_critical:"प्राथमिकता स्तर: अति-गंभीर (Critical)",priority_high:"प्राथमिकता स्तर: उच्च (High)"},recommendations:{compensation_pending_cases:"अनसुलझे मुआवजा मामलों को प्राथमिकता दें और संवितरण में तेजी लाएं।",compensation_pending_amount:"बकाया मुआवजा निधियों की समीक्षा करें और भुगतान अवरोधों का समाधान करें।",compensation_total_amount:"कुल स्वीकृत मुआवजा आवंटन और संवितरण कार्यक्रम की समीक्षा करें।",compensation_completion_pct:"अपूर्ण मुआवजा प्रक्रिया की समीक्षा करें और शेष मामलों को प्राथमिकता दें।",pending_objections:"अनसुलझी आपत्तियों की समीक्षा करें और अधिग्रहण रोकने वाले मामलों को प्राथमिकता दें।",active_legal_disputes:"अनसुलझे कानूनी विवादों को उच्च स्तर पर ले जाएं और अधिग्रहण में बाधक मामलों की पहचान करें।",ownership_disputes:"स्वामित्व सत्यापन और विवादित शीर्षक समाधान को प्राथमिकता दें।",court_stay_cases:"अदालती स्थगन मामलों को अलग से ट्रैक करें और कानूनी समाधान का समन्वय करें।",documents_pending:"लंबित भूमि और स्वामित्व दस्तावेजों के सत्यापन को प्राथमिकता दें।",documentation_completion_pct:"दस्तावेज सत्यापन में तेजी लाएं और छूटे दस्तावेजों का समाधान करें।",documents_required:"परियोजना की दस्तावेजी आवश्यकताओं और सत्यापन कार्यभार की समीक्षा करें।",approvals_pending:"संबंधित प्राधिकारी के पास लंबित अनुमोदनों को तत्काल आगे बढ़ाएं।",overdue_approvals:"अतिदेय अनुमोदनों को आगे बढ़ाएं और स्पष्ट समाधान समय-सीमा निर्धारित करें।",avg_approval_delay_days:"विलंबित अनुमोदन कार्यप्रवाह की समीक्षा करें और संबंधित प्राधिकारियों से समन्वय करें।",rr_pending_cases:"पुनर्वास एवं पुनर्स्थापन (R&R) मामलों को प्राथमिकता दें।",rr_completion_pct:"बकाया पुनर्वास एवं पुनर्स्थापन कार्रवाइयों में तेजी लाएं।",possession_pending_parcels:"कब्जा रोकने वाले भूखंडों की पहचान करें और उनके समाधान को प्राथमिकता दें।",parcels_pending:"लंबित अधिग्रहण भूखंडों की पहचान करें और उनके व्यक्तिगत अवरोधों को दूर करें।",acquisition_progress_pct:"नियोजित परियोजना कार्यक्रम के अनुसार अधिग्रहण प्रगति की समीक्षा करें।",acquisition_velocity_pct_per_30d:"कम अधिग्रहण गति की जांच करें और प्रक्रिया में हालिया अवरोधों की पहचान करें।",schedule_variance_days:"क्रिटिकल पाथ की समीक्षा करें और अतिदेय मील के पत्थरों का समाधान करें।",milestones_overdue:"अतिदेय मील के पत्थरों की समीक्षा करें और सुधारात्मक कार्रवाइयां सौंपें।",pending_stakeholder_actions:"लंबित हितधारक कार्रवाइयों को आगे बढ़ाएं और प्रतिक्रिया समय-सीमा निर्धारित करें।",avg_stakeholder_response_days:"धीमी हितधारक प्रतिक्रियाओं को आगे बढ़ाएं और समाधान समय-सीमा तय करें।",stakeholder_responsiveness_score:"हितधारक समन्वय और बकाया प्रतिक्रियाओं की समीक्षा करें।",complexity_score:"परियोजना की समग्र जटिलता के कारण अधिक गहन निगरानी लागू करें।",planned_duration_days:"समीक्षा करें कि क्या परियोजना कार्यक्रम इसकी जटिलता को पर्याप्त रूप से दर्शाता है।",affected_families:"प्रभावित परिवारों के पैमाने को देखते हुए अतिरिक्त समन्वय पर विचार करें।",total_parcels:"भूखंड-स्तरीय अधिग्रहण योजना और बकाया मामलों की समीक्षा करें।",historical_avg_delay_days:"परियोजना जोखिम आकलन के भाग के रूप में इस कारक की समीक्षा करें।",project_type_highway:"राजमार्ग गलियारे के साथ सड़क अवसंरचना अधिग्रहण अवरोधों की समीक्षा करें।",project_type_railway:"रैखिक गलियारा निकासी के लिए रेलवे अधिकारियों के साथ समन्वय करें।",land_type_agricultural:"धारा 11 के तहत फसल चक्र और किसान परामर्श कार्यक्रम की समीक्षा करें।",priority_critical:"शीर्ष-स्तरीय प्रशासनिक निगरानी और त्वरित अंतर-विभागीय स्वीकृतियां लागू करें।",priority_high:"सांविधिक बाधाओं को दूर करने के लिए पाक्षिक समीक्षा बैठकें आयोजित करें।",default:"परियोजना जोखिम आकलन के भाग के रूप में इस कारक की समीक्षा करें।",reducing_risk:"यह कारक वर्तमान में अनुमानित विलंब जोखिम को कम कर रहा है।"},notifications:{title:"प्रणाली सूचनाएं",unread:"अपठित",allCaughtUp:"सभी पढ़ी जा चुकी हैं",subtitle:"भूमि सखा द्वारा उत्पन्न एप्लिकेशन अलर्ट, इन्फेरेंस मील के पत्थर और सांविधिक सीमा सूचनाएं।",markAllRead:"सभी को पढ़ा हुआ चिह्नित करें",resetDemoAlerts:"डेमो अलर्ट रीसेट करें",filterAll:"सभी",filterUnread:"अपठित",severity:"गंभीरता",categoriesLabel:"श्रेणियां",categories:{"Risk Alert":"जोखिम चेतावनी",Engine:"इंजन","Officer Attention":"अधिकारी ध्यानाकर्षण",System:"प्रणाली"},readState:"पठन स्थिति",noNotifications:"प्रदर्शित करने के लिए कोई सूचना नहीं है",noNotificationsDesc:"इस फ़िल्टर के अंतर्गत वर्तमान में कोई सूचना नहीं है।",newTag:"नई",markAsUnread:"अपठित चिह्नित करें",markAsRead:"पढ़ा हुआ चिह्नित करें",timestamps:{"15 mins ago":"15 मिनट पहले","1 hour ago":"1 घंटा पहले","3 hours ago":"3 घंटे पहले","Today, 09:30 AM":"आज, 09:30 AM"},items:{"notif-crit-1":{title:"वर्तमान मूल्यांकन में गंभीर विलंब जोखिम की पहचान हुई",summary:"दिल्ली-अमृतसर एक्सप्रेसवे (Pkg 4) का 84.6% विलंब संभावना के साथ मूल्यांकन किया गया, जिसके लिए तत्काल धारा 19 हस्तक्षेप आवश्यक है।",actionLabel:"मूल्यांकन जांचें"},"notif-engine-2":{title:"बैकएंड पूर्वानुमान इंजन कनेक्टेड है",summary:"लाइव XGBoost इन्फेरेंस के लिए 76 इंजीनियर भू-अभिलेख विशेषताओं के साथ FastAPI सेवा कनेक्ट है।",actionLabel:"डैशबोर्ड देखें"},"notif-atten-3":{title:"मूल्यांकन में ऐसे कारक शामिल हैं जिन पर अधिकारी के ध्यान की आवश्यकता है",summary:"पश्चिमी फ्रेट कॉरिडोर में 18 उच्च बाधा वाले भूखंड मामलों को दस्तावेज़ बैकलॉग समीक्षा के लिए चिह्नित किया गया।",actionLabel:"कारकों की समीक्षा करें"},"notif-stat-4":{title:"जोखिम मूल्यांकन पाइपलाइन प्रारंभ की गई",summary:"142 निगरानी वाले बुनियादी ढांचा गलियारों के साथ राष्ट्रीय भू-अभिलेख मैट्रिक्स सिंक्रोनाइज़ हुआ।",actionLabel:"परियोजना निर्देशिका"}}}},Fe={auth:{loginTitle:"भूमी सखा मध्ये प्रवेश करा",citizenTab:"नागरिक / जमीन मालक",officerTab:"महसूल अधिकारी",citizenWelcomeSubtitle:"जमीन हक्क, तक्रार निवारण आणि संभाव्य विलंब विश्लेषण",officerWelcomeSubtitle:"राष्ट्रीय भूसंपादन कमांड व प्रकरण व्यवस्थापन केंद्र",citizenSignInBtn:"नागरिक पोर्टलमध्ये प्रवेश करा",officerSignInBtn:"अधिकारी कमांड सेंटरमध्ये प्रवेश करा",citizenRegisterBtn:"नागरिक खाते तयार करा",officerRegisterBtn:"महसूल अधिकारी खाते नोंदणी करा",emailLabel:"ईमेल पत्ता",emailPlaceholder:"citizen@example.com",officerEmailPlaceholder:"officer.name@gov.in",passwordLabel:"पासवर्ड",passwordPlaceholder:"आपला पासवर्ड प्रविष्ट करा",showPassword:"पासवर्ड दाखवा",hidePassword:"पासवर्ड लपवा",fullNameLabel:"पूर्ण नाव",fullNamePlaceholder:"उदा. रामेश्वर पाटील",districtLabel:"जिल्हा",districtPlaceholder:"उदा. पुणे",phoneLabel:"फोन नंबर",phonePlaceholder:"उदा. +91 9822001122",officerKeyLabel:"अधिकारी नोंदणी प्रमाणीकरण की",signingIn:"प्रमाणीकरण होत आहे...",registering:"खाते तयार होत आहे...",needAccount:"अद्याप खाते नाही का?",haveAccount:"आधीच खाते आहे का?",switchToRegister:"नवीन खाते तयार करा",switchToLogin:"साइन इन करा",signInBtn:"साइन इन",signOutBtn:"साइन आउट",signedOutToast:"यशस्वीरित्या साइन आउट केले.",accessDeniedCitizen:"प्रवेश प्रतिबंधित: नागरिक खाती अधिकारी कमांड सेंटरमध्ये प्रवेश करू शकत नाहीत.",accessDeniedOfficer:"प्रवेश प्रतिबंधित: अधिकारी खाती थेट नागरिक पोर्टलमध्ये प्रवेश करू शकत नाहीत.",sessionVerifying:"सुरक्षित सत्र तपासले जात आहे..."},header:{platformName:"भूमी सखा",sihBadge:"SIH 2026 • PS ID 26017",subtitle:"भाकीत जमीन संपादन विलंब-जोखीम प्रणाली",statusConnecting:"बॅकएंड: जोडत आहे...",statusConnected:"फास्टएपीआय कनेक्टेड • एक्सजीबूस्ट इंजिन सक्रिय",statusUnavailable:"बॅकएंड अनुपलब्ध • पुन्हा प्रयत्न करण्यासाठी क्लिक करा",commandCenter:"कमांड सेंटर",statutoryCutoff:"वैधानिक मुदत: 48 तास शिल्लक",istClock:"IST",officerName:"डॉ. आर. के. शर्मा",officerRole:"आयएएस, भूमी आयुक्त",openNotifications:"सूचना उघडा",toggleTheme:"रंग थीम बदला",selectLanguage:"भाषा निवडा",toggleMenu:"नेव्हिगेशन मेनू उघडा"},footer:{description:"स्मार्ट इंडिया हॅकाथॉन 2026 • समस्या विधान आयडी 26017 • राष्ट्रीय भूमी अभिलेख आधुनिकीकरण कार्यक्रम (NLRMP) संरचना",auditNode:"ऑडिट नोड: 0x88F2B7",protocol:"अचूक कॅडस्ट्रल पडताळणी प्रोटोकॉल v4.1"},nav:{dashboard:"डॅशबोर्ड",cases:"प्रकरण रांग",assessment:"जोखीम मूल्यांकन",projects:"प्रकल्प निर्देशिका",audit:"ऑडिट तपशील",notifications:"सूचना",citizenDashboard:"डॅशबोर्ड",citizenLands:"माझी जमीन",citizenRisk:"विलंब जोखीम तपासा",citizenComplaint:"तक्रार दाखल करा",citizenCases:"माझी प्रकरणे"},views:{dashboard:"राष्ट्रीय कॅडस्ट्रल मॅट्रिक्स (सिंहावलोकन)",cases:"जमीन संपादन तक्रार व प्रकरण रांग","officer-case-workspace":"अधिकारी प्रकरण कार्यक्षेत्र व डॉसियर",assessment:"अंदाजित विलंब-जोखीम मूल्यांकन कॉकपिट",projects:"राष्ट्रीय जमीन संपादन प्रकल्प निर्देशिका",audit:"कॅडस्ट्रल आणि जोखीम तपशीलवार डॉसियर",notifications:"प्रणाली सूचना आणि ऑपरेशनल अलर्ट","citizen-dashboard":"नागरिक संपादन डॅशबोर्ड","citizen-lands":"जमीन पार्सल आणि कॅडस्ट्रल अभिलेख","citizen-risk":"जमीन संपादन विलंब जोखीम अंदाज","citizen-complaint":"जमीन संपादन तक्रार दाखल करा","citizen-cases":"तक्रार डॉसियर आणि थेट ट्रॅकिंग"},dropdown:{project_type:{highway:"राष्ट्रीय महामार्ग (Highway)",railway:"रेल्वे / मालवाहतूक कॉरिडॉर (Railway)",industrial:"औद्योगिक नोड (Industrial)",metro:"मेट्रो रेल (Metro)",irrigation:"सिंचन प्रकल्प (Irrigation)",power:"ऊर्जा ग्रीड / सोलर पार्क (Power)",urban_development:"नागरी विकास (Urban Development)"},land_type:{agricultural:"शेतजमीन (Agricultural)",commercial:"व्यावसायिक जमीन (Commercial)",industrial:"औद्योगिक जमीन (Industrial)",mixed:"मिश्र महसूल जमीन (Mixed)",residential:"निवासी जमीन (Residential)"},priority:{normal:"सामान्य (Normal)",high:"उच्च (High)",critical:"अति-गंभीर (Critical)"}},risk:{low:"कमी",medium:"मध्यम",high:"उच्च",critical:"अति-गंभीर",lowRisk:"कमी जोखीम",mediumRisk:"मध्यम जोखीम",highRisk:"उच्च जोखीम",criticalRisk:"अति-गंभीर जोखीम",lowTier:"कमी विलंब श्रेणी",mediumTier:"मध्यम जोखीम श्रेणी",highTier:"उच्च अडथळा श्रेणी",criticalTier:"अति-गंभीर स्थगिती श्रेणी",lowWording:"सध्याच्या प्रकल्प स्थितीनुसार कमी विलंब जोखीम",mediumWording:"सध्याच्या प्रकल्प स्थितीनुसार मध्यम विलंब जोखीम",highWording:"सध्याच्या प्रकल्प स्थितीनुसार उच्च विलंब जोखीम",criticalWording:"सध्याच्या प्रकल्प स्थितीनुसार अति-गंभीर विलंब जोखीम",lowSummary:"सध्याच्या प्रकल्प स्नॅपशॉटवर आधारित कमी अंदाजित विलंब जोखीम.",mediumSummary:"सध्याच्या प्रकल्प स्नॅपशॉटवर आधारित मध्यम अंदाजित विलंब जोखीम.",highSummary:"सध्याच्या प्रकल्प स्नॅपशॉटवर आधारित उच्च अंदाजित विलंब जोखीम.",criticalSummary:"सध्याच्या प्रकल्प स्नॅपशॉटवर आधारित अति-गंभीर अंदाजित विलंब जोखीम.",lowThreshold:"जोखीम स्तर: कमी (मर्यादा < 40%)",mediumThreshold:"जोखीम स्तर: मध्यम (मर्यादा: 40% – 59.9%)",highThreshold:"जोखीम स्तर: उच्च (मर्यादा: 60% – 79.9%)",criticalThreshold:"जोखीम स्तर: अति-गंभीर (मर्यादा ≥ 80%)",tier:"श्रेणी"},dashboard:{pipelineBadge:"राष्ट्रीय पायाभूत सुविधा पाइपलाइन • MoRTH / MoR ॲनालिटिक्स",title:"जमीन संपादन गुप्तचर प्रणाली",subtitle:"महत्त्वाच्या राष्ट्रीय पायाभूत सुविधा कॉरिडॉरमध्ये प्रकल्पाच्या प्रगतीचे निरीक्षण करा, संभाव्य विलंब जोखमी ओळखा आणि प्रशासकीय हस्तक्षेपाला प्राधान्य द्या.",runScan:"राष्ट्रीय जोखीम स्कॅन चालवा",scanning:"142 राष्ट्रीय प्रकल्पांचे स्कॅनिंग सुरू आहे...",scanCompleted:"राष्ट्रीय स्कॅन पूर्ण: 29 उच्च/अति-गंभीर जोखीम प्रकल्प आढळले.",launchCockpit:"मूल्यांकन कॉकपिट सुरू करा",totalProjects:"एकूण निरीक्षण केलेले प्रकल्प",totalProjectsCount:"142 प्रकल्प",totalProjectsDesc:"46 राष्ट्रीय महामार्ग, 38 मालवाहतूक, 58 ऊर्जा आणि नागरी कॉरिडॉर",highCriticalRisk:"उच्च / अति-गंभीर जोखीम",highCriticalCount:"29 प्रकल्प",highCriticalDesc:"मागील कालावधीपेक्षा +3 • 18 उच्च, 11 अति-गंभीर",requiringIntervention:"हस्तक्षेपाची आवश्यकता",interventionCount:"14 त्वरित कृती",interventionDesc:"8 दस्तऐवज अडथळे, 6 भरपाई एस्क्रो प्रकरणे",avgDelayRisk:"सरासरी विलंब जोखीम",modelConfidence:"मॉडेल विश्वास पातळी 95%",lowMediumZone:"कमी-मध्यम क्षेत्र",baselineVariance:"राज्य सरासरीच्या तुलनेत मूळ विचलन -2.4%",riskOverview:"जोखीम विहंगावलोकन आणि वितरण",portfolioBreakdown:"राष्ट्रीय पोर्टफोलिओ वितरण (N=142)",liveModelActive:"लाइव्ह मॉडेल सक्रिय",actionPlanMandatory:"कृती योजना अनिवार्य",stagnationWatchlist:"स्थगिती वॉचलिस्ट",statutoryTracking:"वैधानिक ट्रॅकिंग",nominalTrajectory:"सामान्य गती",keyRiskDrivers:"प्रमुख जोखीम घटक",rootCauseCluster:"मूळ कारण समूह",driverDocumentation:"दस्तऐवजीकरण अनुशेष (मालकी हक्क आणि 3A)",driverPossession:"ताबा विलंब (अतिक्रमण / भौतिक अडथळे)",driverDisputes:"न्यायालयीन विवाद आणि स्थगिती आदेश",driverApprovals:"आंतर-विभागीय मंजुरी अडथळे",predictiveTriangulationAlert:"अंदाजित ट्रायंग्युलेशन इशारा",triangulationAlertText:"सक्रिय तहसीलदार सुनावणीशिवाय औद्योगिक कृषी-क्षेत्रांमधून जाणाऱ्या कॉरिडॉरमध्ये 14 दिवसांत कलम 15 आक्षेपांची 82% शक्यता आहे.",modelConfidenceTag:"मॉडेल विश्वास पातळी: 91.4% (SIH मॉडेल XG-26)",priorityProjects:"प्रशासकीय देखरेखीची आवश्यकता असलेले प्राधान्य प्रकल्प",cadastralEscalation:"विलंब संभाव्यतेनुसार क्रमवारी लावलेली कॅडस्ट्रल नोंदवही",searchPlaceholder:"प्रकल्पाचे नाव किंवा आयडी शोधा...",colId:"प्रकल्प आयडी",colName:"नाव आणि क्षेत्र",colDistrict:"जिल्हा / राज्य",colProgress:"प्रगती",colRisk:"विलंब जोखीम",colTier:"श्रेणी",colAction:"कृती",assessBtn:"मूल्यांकन",auditBtn:"ऑडिट",noMatchingProjects:"कोणताही जुळणारा प्रकल्प आढळला नाही."},assessment:{title:"प्रकल्प जोखमीचे मूल्यांकन करा",engineBadge:"फास्टएपीआय • XGB-26017 इंजिन",subtitle:"वैधानिक विलंब संभाव्यतेचा अंदाज घेण्यासाठी आणि POST /predict द्वारे मॉडेल-आधारित जोखीम घटकांची तपासणी करण्यासाठी प्रकल्प टेलिमेट्री प्रविष्ट किंवा संपादित करा.",selectProject:"विद्यमान प्रकल्प निवडा",testScenario:"नवीन परिस्थिती तयार करा / तपासा",statutoryPresets:"वैधानिक चाचणी प्रीसेट्स:",telemetryMatrices:"टेलिमेट्री इनपुट मॅट्रिक्स",telemetrySubtitle:"कलम 11 आणि 19 वैधानिक नोंदींनुसार कॅडस्ट्रल वैशिष्ट्ये कॉन्फिगर करा",resetValues:"मूल्ये रीसेट करा",sectionA:"विभाग A • प्रकल्प प्रोफाइल",coreClassification:"मूळ वर्गीकरण",labelProjectType:"प्रकल्प प्रकार",labelLandType:"जमीन वर्गीकरण",labelPriority:"प्राधान्य स्तर",labelComplexity:"गुंतागुंत (0-100)",labelTotalParcels:"एकूण भूखंड / गट",labelAffectedFamilies:"बाधित कुटुंबे (PAFs)",labelLandArea:"जमिनीचे क्षेत्रफळ (हेक्टर)",labelPlannedDuration:"नियोजित कालावधी (दिवस)",sectionB:"विभाग B • संपादन प्रगती",velocityActive:"वेग सक्रिय",labelAcqProgress:"संपादन प्रगती (%)",labelVelocity:"वेग (%/30 दिवस)",labelParcelsPending:"प्रलंबित भूखंड",labelPossessionPending:"ताबा प्रलंबित भूखंड",sectionC:"विभाग C • दस्तऐवजीकरण",keyModelDriver:"प्रमुख मॉडेल चालक",labelDocsReq:"आवश्यक कागदपत्रे",labelDocsPending:"प्रलंबित कागदपत्रे",labelDocCompletion:"कागदपत्र पूर्णता",adjustDocsPending:"प्रलंबित कागदपत्रांची संख्या समायोजित करा",sectionD:"विभाग D • नुकसानभरपाई वाटप",escrowTranche:"एस्क्रो हप्ता",labelCompCases:"प्रलंबित प्रकरणे",labelCompAmount:"प्रलंबित रक्कम (₹ कोटी)",labelCompDisbursed:"वितरित %",sectionE:"विभाग E • वैधानिक परवानग्या",interAgencyGate:"आंतर-विभागीय परवानगी",labelApprPending:"प्रलंबित मंजुऱ्या",labelApprOverdue:"मुदत उलटलेल्या मंजुऱ्या",labelApprDelay:"सरासरी विलंब (दिवस)",sectionF:"विभाग F • न्यायालयीन विवाद आणि आक्षेप",section15Hearings:"कलम 15 सुनावणी",labelPendingObj:"प्रलंबित आक्षेप",labelActiveDisputes:"सक्रिय जमीन विवाद",labelOwnerDisputes:"मालकी हक्क वाद",labelCourtStays:"न्यायालयीन स्थगिती आदेश",sectionG:"विभाग G • पुनर्वसन आणि पुनर्स्थापना (R&R)",rfctlarrCompliance:"RFCTLARR अनुपालन",labelRrPending:"प्रलंबित प्रकरणे",labelRrCompletion:"पूर्णता %",sectionH:"विभाग H • वेळापत्रक आणि फरक",criticalPath:"महत्त्वाचा मार्ग (Critical Path)",labelSchedVariance:"वेळेतील फरक (दिवस)",labelMilestonesOverdue:"थकबाकी टप्पे",sectionI:"विभाग I • भागधारक समन्वय",responseLatency:"प्रतिसाद विलंब",labelShActions:"प्रलंबित कृती",labelShResponse:"सरासरी प्रतिसाद (दिवस)",labelShScore:"गुण /10",sectionJ:"विभाग J • ऐतिहासिक विलंब संदर्भ",regionalPriors:"प्रादेशिक पूर्वइतिहास",labelHistDelay:"सरासरी प्रादेशिक विलंब (दिवस)",trainingArchetype:"प्रशिक्षण मॉडेल रचना:",linearInfra:"रेषीय पायाभूत सुविधा (NLRMP)",targetWindow:"अंदाज लक्ष्य: वैधानिक 5-वर्षीय कालावधी",mandateValidation:"LARR कायदा 2013 कलम 25 कायदेशीर वैधता • XGBoost इंजिन",resetBtn:"रीसेट करा",assessRiskBtn:"प्रकल्प जोखमीचे मूल्यांकन करा",analyzingTelemetry:"प्रकल्प टेलिमेट्रीचे विश्लेषण सुरू आहे...",callingApi:"FastAPI POST /predict आणि XGBoost ट्री विश्लेषण सुरू आहे",riskIndex:"अंदाजित जोखीम निर्देशांक",predictedDelayProb:"अंदाजित विलंब संभाव्यता",modelNote:"30 लाख राष्ट्रीय नोंदींवर प्रशिक्षित XGBoost मॉडेल (SIH 26017) द्वारे वर्तवलेले. थेट अंदाज POST /predict द्वारे.",riskIncreasingFactors:"जोखीम वाढवणारे घटक",modelContributionPos:"मॉडेल योगदान (+Δ)",noRiskIncreasing:"या प्रकल्पासाठी कोणतेही प्रमुख जोखीम वाढवणारे घटक आढळले नाहीत.",action:"कृती:",riskReducingFactors:"जोखीम कमी करणारे घटक",modelContributionNeg:"मॉडेल योगदान (-Δ)",noRiskReducing:"कोणतेही महत्त्वपूर्ण जोखीम कमी करणारे घटक आढळले नाहीत.",mathematicalNote:"टीप: मूल्ये XGBoost मॉडेलमधील गणितीय प्रभाव दर्शवतात, प्रत्यक्ष कारणे नव्हेत.",recommendedDirectives:"शिफारस केलेले वैधानिक निर्देश",priorityExecution:"प्राधान्य अंमलबजावणी",p1Priority:"P1 प्राधान्य",p2Priority:"P2 प्राधान्य",resolution:"निराकरण",nominalDirectives:"वैधानिक प्रगती सामान्य आहे. कलम 19 नियमांनुसार नियमित देखरेख सुरू ठेवा.",methodology:"कार्यपद्धती आणि मॉडेल मूल्यमापन",methodologyText:"भूमी सखा अंदाज इंजिन RFCTLARR कायदा 2013 आणि राष्ट्रीय नियमांनुसार 76 वैशिष्ट्यांवर बायनरी वर्गीकरण करते.",accuracy:"अचूकता (Accuracy)",rocAuc:"ROC-AUC",precision:"परिशुद्धता (Precision)",recall:"रिकॉल (Recall)",trainingDataset:"प्रशिक्षण डेटासेट",projectsEvaluated:"मूल्यांकन केलेले प्रकल्प",treeContribs:"ट्री योगदान",treeContribsDesc:"वैशिष्ट्य भार प्रत्येक प्रकल्पाच्या स्नॅपशॉटवर अचूक ग्रेडियंट बूस्टिंग मार्जिन प्रभाव दर्शवतात.",riskThresholds:"जोखीम मर्यादा",inferenceUnavailable:"अंदाज सेवा अनुपलब्ध",retryAssessment:"पुन्हा प्रयत्न करा",readAloudIntro:"भूमी सखा मूल्यांकन निकाल.",labelCurrentStage:"चालू वैधानिक टप्पा (Current Statutory Stage)",riskForecast:"जोखीम अंदाज (Risk Forecast)",delayProb:"विलंब शक्यता",predictedOutcome:"अंदाजित निष्कर्ष",awaitingInput:"टेलीमेट्री इनपुटची प्रतीक्षा...",statutoryNotice:"सूचना: सक्रिय इनपुटच्या आधारे रिअल-टाइममध्ये निष्कर्ष अद्यतनित होतो.",serviceUnavailableMsg:"पूर्वानुमान सेवा तात्पुरती अनुपलब्ध आहे. कृपया पुन्हा प्रयत्न करा."},projects:{title:"राष्ट्रीय प्रकल्प निर्देशिका",subtitle:"सर्व राज्य कार्यक्षेत्रांमध्ये सक्रिय पायाभूत सुविधा कॉरिडॉर, कॅडस्ट्रल पडताळणी टप्पे आणि अंदाजित विलंब जोखमींचा आढावा घ्या.",newAssessment:"नवीन प्रकल्प मूल्यांकन",filterSector:"क्षेत्रानुसार फिल्टर (Filter by Sector)",allSectors:"सर्व क्षेत्रे (महामार्ग, रेल्वे, ऊर्जा, मेट्रो)",filterRisk:"जोखीम श्रेणी (Risk Tier)",allRisks:"सर्व जोखीम श्रेणी",searchPlaceholder:"नाव, आयडी किंवा जिल्ह्यानुसार शोधा...",colId:"प्रकल्प आयडी",colName:"नाव आणि क्षेत्र (Name & Sector)",colDistrict:"राज्य व जिल्हा (State & District)",colStage:"वैधानिक टप्पा (Statutory Stage)",colProgress:"संपादन प्रगती (Acquisition Progress)",colRisk:"अंदाजित विलंब जोखीम (Predicted Delay Risk)",colTier:"स्थिती श्रेणी (Status Tier)",colAction:"कृती (Actions)",assessRisk:"जोखीम मूल्यांकन (Assess Risk)",auditFile:"फाइल ऑडिट",noRecords:"राष्ट्रीय डेटाबेसमध्ये कोणतीही जुळणारी नोंद आढळली नाही.",deepAudit:"सखोल ऑडिट (Deep Audit)"},detail:{breadcrumbProjects:"प्रकल्प",detailedAnalysis:"तपशीलवार जोखीम विश्लेषण",statutoryHash:"वैधानिक हॅश",modelInference:"मॉडेल अंदाज",liveSynchronized:"थेट समक्रमित",nationalCorridor:"राष्ट्रीय कॉरिडॉर",authorityWing:"रस्ते वाहतूक आणि महामार्ग मंत्रालय विभाग",stage:"टप्पा",district:"जिल्हा",alignment:"संरेखन (Alignment)",cala:"सक्षम अधिकारी जमीन संपादन (CALA)",division:"विभाग",rerunAssessment:"पुन्हा मूल्यांकन करा",draftDcOrder:"प्रारूप डीसी आदेश (Draft)",riskTier:"जोखीम श्रेणी",engineXgb:"XGB-26017 इंजिन",modelDelayProb:"मॉडेल विलंब संभाव्यता",probability:"संभाव्यता",predictedStatutoryImpact:"अंदाजित वैधानिक प्रभाव",modelConfidence:"मॉडेल विश्वास पातळी",trainedRecords:"30,00,000 नोंदींवर प्रशिक्षित",totalRequisition:"एकूण जमीन मागणी",spreadVillages:"14 महसूल गावांमध्ये पसरलेले",affectedLandowners:"बाधित जमीन मालक",khatas:"खाती",unresolvedMutations:"410 फेरफार प्रलंबित",sanctionedEscrow:"मंजूर एस्क्रो निधी",undisbursedEscrow:"₹29.60 कोटी अवितरित",statutoryCutoffLabel:"कलम 19 वैधानिक कटऑफ मुदत:",slippageRisk:"+94 दिवस विलंब जोखीम",bottleneckFlag:"मालकी हक्क पडताळणी आणि फेरफार शिबिर मंजुरीमध्ये मुख्य अडथळा चिन्हांकित.",progressGaugesTitle:"बहु-क्षेत्रीय जमीन संपादन प्रगती निर्देशक",progressGaugesSubtitle:"राज्य ई-भूमी नोंदणीशी जुळवून घेतलेले भू-अभिलेख मेट्रिक्स",cycleAudit:"चक्र लेखापरीक्षण: FY26-Q1-सक्रिय",overallProgress:"एकूण प्रगती",jointSurvey:"संयुक्त पाहणी 3A",sec23Award:"कलम 23 निवाडा",physicalRow:"प्रत्यक्ष ताबा (ROW)",dbtEscrow:"डीबीटी एस्क्रो",dossierFor:"प्रकल्प डॉसियर:",state:"राज्य",statutoryStage:"वैधानिक टप्पा (Statutory Stage)",modalPrototypeDraft:"प्रारूप आदेश (प्रोटोटाइप)",modalSimulationMode:"सिम्युलेशन मोड • कायदेशीरदृष्ट्या बंधनकारक नाही",modalTitle:"प्रारूप डीसी आदेश / प्रशासकीय निर्देश",modalSubtitle:"रिअल-टाइम प्रकल्प जोखीम टेलिमेट्रीवर आधारित पूर्व-तयार प्रोटोटाइप प्रशासकीय ज्ञापन.",modalOffice:"जिल्हाधिकारी व जिल्हा दंडाधिकारी कार्यालय",modalCala:"सक्षम अधिकारी जमीन संपादन (CALA)",modalRef:"संदर्भ",modalDate:"तारीख",modalAreaFamilies:"क्षेत्रफळ / कुटुंबे",modalDisclaimer:"प्रोटोटाइप अस्वीकरण: हे मसुदा ज्ञापन भूमी सखा प्रोटोटाइपमध्ये प्रशासकीय मूल्यमापनासाठी तयार केले गेले आहे. हे RFCTLARR कायदा 2013 च्या वैधानिक प्रक्रियेची जागा घेत नाही आणि अधिकृत स्वाक्षरीशिवाय त्याला कोणताही कायदेशीर अधिकार नाही.",modalCopyDraft:"मसुदा कॉपी करा",modalCopied:"क्लिपबोर्डवर कॉपी केले!",modalPrint:"प्रिंट / सेव्ह करा",modalClose:"बंद करा",modalMemoSub:"RFCTLARR चौकटीअंतर्गत प्रशासकीय गती वाढवणे आणि पूर्व-प्रतिबंधात्मक निर्देश",modalTeleFindings:"1. टेलिमेट्री आणि अंदाजित ऑडिट निष्कर्ष:",modalTargetArea:"एकूण लक्ष्यित जमीन क्षेत्र",modalAffectedFam:"एकूण बाधित कुटुंबे",modalParcels:"एकूण कॅडस्ट्रल भूखंड",modalDirectives:"2. सक्षम अधिकाऱ्यांना (CALA) प्रशासकीय निर्देश:",modalDirectiveA:"अ) संयुक्त स्थळ पाहणी: विशेष भूसंपादन अधिकारी (SLAO) आणि उपविभागीय दंडाधिकारी (SDM) उर्वरित प्रलंबित भूखंडांसाठी तात्काळ संयुक्त स्थळ पाहणी सुरू करतील.",modalDirectiveB:"ब) डीबीटी एस्क्रो गती: महत्त्वाच्या टप्प्यांमधील विलंब टाळण्यासाठी थेट लाभ हस्तांतरण (DBT) आणि नुकसानभरपाई वाटप 14 दिवसांच्या वैधानिक मुदतीत जलद केले जाईल.",modalDirectiveC:"क) लोकअदालत तडजोड: आगामी साप्ताहिक महसूल लोकअदालतीत जलद सुनावणीसाठी प्रलंबित आक्षेप आणि मालकी हक्क पडताळणीचे मुद्दे सूचीबद्ध केले पाहिजेत."},notifications:{title:"प्रणाली सूचना",unread:"न वाचलेल्या",allCaughtUp:"सर्व वाचल्या",subtitle:"भूमी सखा द्वारे निर्माण केलेले ॲप्लिकेशन अलर्ट, अंदाज टप्पे आणि वैधानिक मर्यादा सूचना.",markAllRead:"सर्व वाचल्याचे चिन्हांकित करा",resetDemoAlerts:"डेमो अलर्ट रीसेट करा",filterAll:"सर्व",filterUnread:"न वाचलेल्या",noNotifications:"दाखवण्यासाठी कोणत्याही सूचना नाहीत",noNotificationsDesc:"सध्या या फिल्टर अंतर्गत कोणत्याही सूचना उपलब्ध नाहीत.",newTag:"नवीन",markAsUnread:"न वाचलेले म्हणून चिन्हांकित करा",markAsRead:"वाचलेले म्हणून चिन्हांकित करा",categories:"वर्ग (Categories)",items:{"notif-crit-1":{title:"सध्याच्या मूल्यांकनात अति-गंभीर विलंब जोखीम आढळली",summary:"दिल्ली-अमृतसर एक्सप्रेसवे (पॅकेज 4) चे 84.6% विलंब संभाव्यतेसह मूल्यांकन केले गेले असून तातडीने कलम 19 हस्तक्षेपाची आवश्यकता आहे.",actionLabel:"मूल्यांकन पहा"},"notif-engine-2":{title:"बॅकएंड अंदाज इंजिन जोडले गेले",summary:"थेट XGBoost अंदाजासाठी तयार असलेल्या 76 कॅडस्ट्रल वैशिष्ट्यांसह FastAPI सेवा जोडली गेली.",actionLabel:"डॅशबोर्ड पहा"},"notif-atten-3":{title:"मूल्यांकनात अधिकाऱ्यांचे लक्ष आवश्यक असलेले घटक आहेत",summary:"दस्तऐवजीकरण अनुशेष पुनरावलोकनासाठी वेस्टर्न फ्रेट कॉरिडॉरमधील 18 उच्च-अडथळा भूखंड प्रकरणे चिन्हांकित केली गेली.",actionLabel:"घटकांचे पुनरावलोकन करा"},"notif-stat-4":{title:"जोखीम मूल्यांकन पाइपलाइन सुरू झाली",summary:"राष्ट्रीय कॅडस्ट्रल मॅट्रिक्स 142 निरीक्षण केलेल्या पायाभूत सुविधा कॉरिडॉरसह समक्रमित केले गेले.",actionLabel:"प्रकल्प निर्देशिका"}},severity:"तीव्रता (Severity)",readState:"वाचन स्थिती (Read State)"},common:{readAloud:"वाचून दाखवा",pause:"थांबवा",resume:"पुढे सुरू ठेवा",stop:"थांबवा",speakToWrite:"बोलून लिहा",listening:"ऐकत आहे...",close:"बंद करा",copy:"कॉपी करा",print:"प्रिंट करा",prototypeOnly:"प्रोटोटाइप मसुदा",themeToggle:"थीम निवडा",languageToggle:"भाषा",explain:"स्पष्टीकरण पहा",clickForDetails:"सविस्तर माहितीसाठी ⓘ वर क्लिक करा",infoFooterNote:"भूमी सखा प्रशासकीय मार्गदर्शन",min:"किमान",max:"कमाल"},infoCategories:{input_feature:"इनपुट वैशिष्ट्य (Input Feature)",dropdown_option:"निवडण्याजोगा पर्याय (Selectable Option)",governance_metric:"प्रशासकीय मेट्रिक (Governance Metric)",model_output:"मॉडेल आउटपुट (Model Output)",statutory_control:"वैधानिक नियंत्रण (Statutory Control)",system_status:"प्रणाली स्थिती (System Status)"},infoSections:{whatItMeans:"याचा नेमका अर्थ काय (What It Means)",whyItMatters:"हे का महत्त्वाचे आहे (Why It Matters)",howToInterpret:"याचे विश्लेषण कसे करावे (How to Interpret It)",example:"वास्तविक उदाहरण (Concrete Example)",modelUsage:"भूमी सखा / मॉडेल उपयोग (Model & System Usage)"},info:{project_type:{title:"प्रकल्पाचा प्रकार / क्षेत्र (Project Type)",short:"पायाभूत सुविधा मालमत्तेचे क्षेत्रीय वर्गीकरण.",whatItMeans:"ज्या पायाभूत सुविधा क्षेत्रासाठी भूसंपादन अधिसूचित केले आहे त्याची ओळख दर्शवतो.",whyItMatters:"वेगवेगळ्या क्षेत्रांनुसार राइट-ऑफ-वे रुंदी, भूसंपादन कायदे आणि संभाव्य न्यायालयीन वादांचे स्वरूप बदलते.",howToInterpret:"अधिकृत कलम ११ किंवा ३ए राजपत्र अधिसूचनेत नमूद केलेले मुख्य क्षेत्र निवडा.",example:"राष्ट्रीय महामार्गासाठी Highway किंवा मालवाहतूक रेल्वे मार्गासाठी Railway निवडा.",modelUsage:"अंदाज वर्तवणाऱ्या मशीन लर्निंग मॉडेलद्वारे वन-हॉट एन्कोडेड इनपुट म्हणून वापरले जाते."},opt_project_type_highway:{title:"महामार्ग कॉरिडॉर (Highway Corridor)",short:"राष्ट्रीय महामार्ग कायदा १९५६ किंवा RFCTLARR २०१३ अंतर्गत नियंत्रित बहु-गावांचा रस्ता कॉरिडॉर.",whatItMeans:"सलग रस्ता रुंदीकरण ज्यासाठी अनेक ग्रामीण आणि निम-शहरी गट क्रमांकांमधून जमीन संपादित करावी लागते.",whyItMatters:"महामार्ग सलग शेतजमिनींमधून जात असल्याने सखोल मालकी हक्क पडताळणी आवश्यक असते.",howToInterpret:"द्रुतगती मार्ग (Expressway), राष्ट्रीय/राज्य महामार्ग आणि रिंग रोडसाठी हा पर्याय निवडा.",example:"१८ महसुली गावांमधून जाणारा ४-पदरी NH-44 बायपास कॉरिडॉर.",modelUsage:"Highway इनपुट वैशिष्ट्याशी जोडलेला पर्याय."},opt_project_type_railway:{title:"रेल्वे मार्ग (Railway Corridor)",short:"सलग कॉरिडॉर जमिनीची गरज असलेला रेल्वे ट्रॅक विस्तार प्रकल्प.",whatItMeans:"रेल्वे दुरुस्ती कायदा २००८ किंवा RFCTLARR २०१३ अंतर्गत अंमलात आणलेली रेल्वे पायाभूत सुविधा.",whyItMatters:"कडक उतार नियम आणि विनाअडथळा लेव्हल क्रॉसिंग सुरक्षा पट्ट्याची आवश्यकता असते.",howToInterpret:"मालवाहतूक ट्रॅक, प्रवासी मार्ग दुहेरीकरण आणि हाय-स्पीड रेल्वेसाठी वापरा.",example:"पश्चिम समर्पित मालवाहतूक कॉरिडॉर (WDFC) दुहेरी ट्रॅक विस्तार.",modelUsage:"Railway इनपुट वैशिष्ट्याशी जोडलेला पर्याय."},opt_project_type_industrial:{title:"औद्योगिक संकुल / एमआयडीसी (Industrial Complex / MIDC)",short:"उत्पादन आणि विशेष आर्थिक क्षेत्रासाठी (SEZ) एकत्रित भूखंड संपादन.",whatItMeans:"औद्योगिक विकासासाठी सलग भूखंडांचे संपादन.",whyItMatters:"पर्यावरणीय ना-हरकत आणि पाणी-वीज जोडण्यांवर अवलंबून असते; पुनर्वसनाचा मोठा प्रभाव पडतो.",howToInterpret:"औद्योगिक वसाहती, लॉजिस्टिक पार्क आणि अन्न प्रक्रिया झोनसाठी वापरा.",example:"पुणे-नाशिक औद्योगिक पट्ट्यातील ३०० हेक्टरचा उत्पादन क्लस्टर.",modelUsage:"Industrial इनपुट वैशिष्ट्याशी जोडलेला पर्याय."},opt_project_type_metro:{title:"मेट्रो रेल कॉरिडॉर (Metro Rail Corridor)",short:"दाट लोकवस्तीच्या महानगरांमधील नागरी जलद वाहतूक संपादन.",whatItMeans:"मेट्रो रेल्वे कायदा आणि RFCTLARR अंतर्गत उन्नत स्थानके आणि डेपोसाठी संपादन.",whyItMatters:"अतिशय उच्च जमीन मूल्यांकन, व्यापारी विस्थापन आणि बहुमजली इमारतींचे हक्क वाद.",howToInterpret:"शहरी भागात चालणाऱ्या उन्नत किंवा भुयारी मेट्रो मार्गांसाठी वापरा.",example:"मुंबई मेट्रो लाइन कॉरिडॉर स्थानक प्रवेशद्वार संपादन.",modelUsage:"Metro इनपुट वैशिष्ट्याशी जोडलेला पर्याय."},opt_project_type_irrigation:{title:"सिंचन कालवा व धरण (Irrigation Canal / Dam)",short:"पाणी साठा, धरण पाणलोट क्षेत्र आणि शाखा कालवे संपादन.",whatItMeans:"पाणलोट बुडीत क्षेत्र आणि सिंचन नेटवर्कसाठी जमीन संपादन.",whyItMatters:"संपूर्ण गावे पाण्याखाली जात असल्याने पुनर्वसन (R&R) आणि सामाजिक प्रभाव मूल्यांकन अत्यंत क्लिष्ट असते.",howToInterpret:"धरणे, उपसा सिंचन योजना आणि मुख्य कालव्यांसाठी वापरा.",example:"गोदावरी उपखोरे कालवा विस्तारीकरण संपादन प्रकल्प.",modelUsage:"Irrigation इनपुट वैशिष्ट्याशी जोडलेला पर्याय."},opt_project_type_power:{title:"ऊर्जा पारेषण व वीज प्रकल्प (Power Transmission & Grid)",short:"विद्युत उपकेंद्रे आणि पारेषण टॉवर राइट-ऑफ-वे संपादन.",whatItMeans:"वीज पारेषण टॉवर बेस आणि उपकेंद्रांसाठी मर्यादित वापर हक्क संपादन.",whyItMatters:"टॉवर बेस भरपाई आणि तारांखालील पिकांच्या हानीवरून शेतकऱ्यांचे तीव्र आक्षेप असतात.",howToInterpret:"४०० केव्ही ग्रीड सबस्टेशन आणि सौर ऊर्जा पार्कसाठी वापरा.",example:"७६५ केव्ही आंतरराज्यीय पॉवर ग्रिड सबस्टेशन संपादन.",modelUsage:"Power इनपुट वैशिष्ट्याशी जोडलेला पर्याय."},opt_project_type_urban:{title:"नागरी विकास / स्मार्ट सिटी (Urban Development)",short:"नगर नियोजन, रिंग रोड आणि नागरी विस्तार पायाभूत सुविधा संपादन.",whatItMeans:"महानगरपालिका क्षेत्रातील रस्ते रुंदीकरण, ड्रेनेज आणि विकास योजनांसाठी संपादन.",whyItMatters:"जमीन तुकडेबंदी, अनधिकृत बांधकामे आणि उच्च बाजारभाव यामुळे मूल्यांकन वाद वाढतात.",howToInterpret:"स्मार्ट सिटी रस्ते प्रकल्प आणि नागरी गृहनिर्माण योजनांसाठी वापरा.",example:"पिंपरी-चिंचवड रिंग रोड रुंदीकरण संपादन.",modelUsage:"Urban Development इनपुट वैशिष्ट्याशी जोडलेला पर्याय."},land_type:{title:"जमिनीचे वर्गीकरण (Land Classification)",short:"संपादित केल्या जाणाऱ्या जमिनीचे महसुली व कृषी वर्गीकरण.",whatItMeans:"७/१२ उतारा आणि महसूल नोंदीनुसार संपादित जमिनीचा कायदेशीर संवर्ग.",whyItMatters:"कृषी, बागायत किंवा अकृषिक जमिनीनुसार भरपाईचे दर आणि आर अँड आर नियम बदलतात.",howToInterpret:"संयुक्त मोजणी आणि महसूल दस्तऐवजांनुसार प्रमुख जमीन प्रकार निवडा.",example:"बागायती शेती असल्यास Agricultural किंवा नागरी हद्दीतील भूखंडास Commercial निवडा.",modelUsage:"अंदाज वर्तवणाऱ्या मॉडेलमध्ये श्रेणीबद्ध इनपुट म्हणून वापरले जाते."},opt_land_type_agricultural:{title:"शेतजमीन (Agricultural Land)",short:"पिके घेतली जाणारी जिरायती किंवा बागायती महसुली जमीन.",whatItMeans:"७/१२ पत्रकात शेती म्हणून नोंद असलेली आणि शेतकऱ्यांच्या उपजीविकेचे साधन असलेली जमीन.",whyItMatters:"अन्न सुरक्षा निर्बंध, वारसा हक्क आणि कुळ कायदा कलम यामुळे मंजुरी वेळ घेते.",howToInterpret:"गावातील जिरायत, बागायत किंवा भातशेती क्षेत्रासाठी वापरा.",example:"दुबार पिके घेतली जाणारी कालवा ओलिताखालील शेतजमीन.",modelUsage:"Agricultural जमीन प्रकार इनपुट."},opt_land_type_commercial:{title:"व्यावसायिक जमीन (Commercial Land)",short:"व्यापार, दुकाने, पेट्रोल पंप किंवा गोदामे असलेली बिगरशेती जमीन.",whatItMeans:"व्यावसायिक वापरासाठी एनए (Non-Agricultural) परवानगी मिळालेली जमीन.",whyItMatters:"अतिशय उच्च बाजारमूल्य आणि व्यवसाय बुडीत भरपाई मागण्यांमुळे न्यायालयीन वाद संभवतात.",howToInterpret:"मार्केट परिसर, महामार्गालगतचे ढाबे आणि व्यावसायिक आस्थापनांसाठी वापरा.",example:"बायपास जंक्शनवरील व्यावसायिक कॉम्प्लेक्स भूखंड.",modelUsage:"Commercial जमीन प्रकार इनपुट."},opt_land_type_industrial:{title:"औद्योगिक जमीन (Industrial Land)",short:"कारखाने, प्रक्रिया उद्योग किंवा औद्योगिक कारणांसाठी मंजूर भूखंड.",whatItMeans:"औद्योगिक वापरासाठी रूपांतरित केलेली किंवा एमआयडीसी अखत्यारीतील जमीन.",whyItMatters:"कारखाना स्थलांतर, कामगार भरपाई आणि प्रदूषण नियंत्रण मंडळाच्या परवानग्या लागतात.",howToInterpret:"कारखाने, शीतगृहे आणि औद्योगिक गोदामांसाठी निवडा.",example:"५ हेक्टरचा रासायनिक प्रक्रिया कारखाना परिसर.",modelUsage:"Industrial जमीन प्रकार इनपुट."},opt_land_type_mixed:{title:"मिश्रित महसूल जमीन (Mixed Revenue Land)",short:"शेती, गावठाण व व्यावसायिक वापर एकत्रित असलेले संमिश्र भूखंड.",whatItMeans:"निमशहरी व महामार्गालगतचे बहुविध वापराचे क्षेत्र.",whyItMatters:"प्रत्येक घटकाचे वेगवेगळे दर आणि स्वतंत्र सोलेशियम गणना करावी लागते.",howToInterpret:"जिथे गावठाण, शेती आणि व्यावसायिक दुकाने एकत्र आहेत तिथे निवडा.",example:"महामार्गालगतची वस्ती आणि दुकाने असलेला पट्टा.",modelUsage:"Mixed जमीन प्रकार इनपुट."},opt_land_type_residential:{title:"निवासी जमीन व गावठाण (Residential Land / Gaothan)",short:"घरे, वस्त्या आणि नागरी वसाहती असलेली जमीन.",whatItMeans:"लोकवस्ती असलेली आणि राहती घरे उभी असलेली निवासी जमीन.",whyItMatters:"घरमालकांचे विस्थापन आणि पर्यायी घरांची बांधणी करावी लागत असल्याने तीव्र स्थानिक विरोध होऊ शकतो.",howToInterpret:"गावठाण विस्तार, वसाहती आणि निवासी भूखंडांसाठी वापरा.",example:"रस्ता रुंदीकरणात बाधित होणारे १२ घरांचे गावठाण क्षेत्र.",modelUsage:"Residential जमीन प्रकार इनपुट."},priority:{title:"प्रकल्प प्राधान्य स्तर (Priority Tier)",short:"प्रकल्पाचे राष्ट्रीय किंवा राज्यस्तरीय प्रशासकीय महत्त्व आणि देखरेख स्तर.",whatItMeans:"कॅबिनेट किंवा उच्चाधिकार समितीने ठरवलेला प्रशासकीय निकड स्तर.",whyItMatters:"उच्च प्राधान्य प्रकल्पांवर मुख्य सचिव किंवा पीएमओ स्तरावरून थेट देखरेख ठेवली जाते.",howToInterpret:"अधिकृत मंजुरी आदेशात नमूद केलेला देखरेख स्तर निवडा.",example:"पीएम गती शक्ती किंवा भारतमाला प्रकल्पांसाठी Critical किंवा High निवडा.",modelUsage:"अंदाज वर्तवणाऱ्या मॉडेलमध्ये श्रेणीबद्ध इनपुट म्हणून वापरले जाते."},opt_priority_normal:{title:"सामान्य प्राधान्य (Normal Priority)",short:"जिल्हास्तरीय मानक कार्यपद्धतीनुसार राबवला जाणारा नियमित प्रकल्प.",whatItMeans:"जिल्हाधिकारी कार्यालयाद्वारे नियमित वेळेत चालवला जाणारा विकास प्रकल्प.",whyItMatters:"साधारण प्रशासकीय कार्यगतीने काम चालते; विशेष जलदगती कक्ष नसतो.",howToInterpret:"जिल्हा मार्ग, मध्यम कालवे आणि स्थानिक विकास प्रकल्पांसाठी वापरा.",example:"तालुका मुख्यालयाला जोडणारा दोन पदरी राज्य मार्ग.",modelUsage:"Normal प्राधान्य इनपुट."},opt_priority_high:{title:"उच्च प्राधान्य (High Priority)",short:"मंत्रालय किंवा मुख्य सचिव स्तरावर मासिक आढावा असलेला महत्त्वाचा प्रकल्प.",whatItMeans:"राज्याच्या किंवा केंद्राच्या महत्त्वाकांक्षी यादीतील अग्रगण्य प्रकल्प.",whyItMatters:"निधीची वेळेवर तरतूद होते, मात्र आंतरविभागीय समन्वयात अडचणी येऊ शकतात.",howToInterpret:"प्रमुख राज्य महामार्ग, विमानतळ जोड रस्ते आणि मेट्रोसाठी वापरा.",example:"मुंबई-गोवा महामार्ग चौपदरीकरण टप्पा.",modelUsage:"High प्राधान्य इनपुट."},opt_priority_critical:{title:"अति-महत्त्वाचा प्राधान्य स्तर (Critical Priority)",short:"कॅबिनेट किंवा पीएमओ स्तरावर थेट साप्ताहिक आढावा घेतला जाणारा राष्ट्रीय प्रकल्प.",whatItMeans:"कडक कालमर्यादा असलेला सर्वोच्च राष्ट्रीय किंवा आंतरराज्यीय प्रकल्प.",whyItMatters:"किंचित विलंबाचाही इतर संबंधित पायाभूत प्रकल्पांवर मोठा साखळी परिणाम होतो.",howToInterpret:"पंतप्रधान गती शक्ती, संरक्षण किंवा आंतरराष्ट्रीय कॉरिडॉरसाठी वापरा.",example:"वंदे भारत विशेष रेल्वे कॉरिडॉर किंवा सामरिक महामार्ग.",modelUsage:"Critical प्राधान्य इनपुट."},current_stage:{title:"चालू वैधानिक टप्पा (Current Statutory Stage)",short:"RFCTLARR २०१३ किंवा संबंधित कायद्यानुसार सध्या सुरू असलेला कायदेशीर भूसंपादन टप्पा.",whatItMeans:"प्रकल्प सध्या प्राथमिक अधिसूचना, आक्षेप सुनावणी, निवाडा की ताबा प्रक्रियेत आहे हे दर्शवतो.",whyItMatters:"प्रत्येक टप्प्यासाठी कायद्याने कालमर्यादा ठरवून दिली आहे; मुदत संपल्यास अधिसूचना रद्द होऊ शकते.",howToInterpret:"सक्षम प्राधिकाऱ्याने (भूसंपादन अधिकारी / उपजिल्हाधिकारी) जारी केलेला सर्वात ताजा आदेश तपासा.",example:"जमीन मोजणी पूर्ण झाली असल्यास कलम १९ / ३डी निवडा.",modelUsage:"टप्प्यांच्या प्रगती आणि मुदत समाप्ती जोखमीच्या विश्लेषणासाठी वापरले जाते."},opt_stage_notification:{title:"कलम ११ / ३ए प्राथमिक अधिसूचना (Notification)",short:"भूसंपादनाचा उद्देश जाहीर करणारी आणि प्राथमिक सर्वेक्षण सुरू करणारी पहिली अधिसूचना.",whatItMeans:"शासनाने अमुक जमिनी संपादनासाठी निश्चित केल्याचे जाहीर केले आहे.",whyItMatters:"या तारखेनंतर जमिनीचे खरेदी-विक्री व्यवहार आणि बांधकामे थांबवली जातात; कलम १५ आक्षेप सुरू होतात.",howToInterpret:"राजपत्रात प्राथमिक प्रसिद्धी झाल्यानंतर हा पर्याय निवडा.",example:"राजपत्र अधिसूचना क्र. भूसं-२०२४/४५ प्रसिद्ध झाली आहे.",modelUsage:"Sec 11 / 3A टप्पा इनपुट."},opt_stage_survey:{title:"संयुक्त मोजणी व पाहणी (Joint Survey / SIA)",short:"भूमी अभिलेख विभाग व महसूल पथकाद्वारे प्रत्यक्ष जमिनीची सीमारेषा मोजणी.",whatItMeans:"प्रत्येक भूखंडाची प्रत्यक्ष जागेवर जाऊन मोजणी आणि झाडे-विहिरींची गणना.",whyItMatters:"मोजणी बिनचूक झाल्याशिवाय अंतिम कलम १९ घोषणा करता येत नाही.",howToInterpret:"संयुक्त मोजणी सुरू असताना किंवा एसआयए अहवाल तयार करताना निवडा.",example:"१५ गावांमधील भूखंडांची संयुक्त मोजणी मोहीम सुरू आहे.",modelUsage:"Survey टप्पा इनपुट."},opt_stage_valuation:{title:"मूल्यांकन व चौकशी (Valuation & Inquiry)",short:"जमिनीचे बाजारमूल्य आणि नुकसानभरपाई दर निश्चितीची कायदेशीर चौकशी.",whatItMeans:"रेडिरेकनर आणि खरेदीखतांच्या आधारे भरपाई दर ठरवण्याची प्रक्रिया.",whyItMatters:"दरांवरून शेतकरी असंतोष किंवा न्यायालयीन वाद निर्माण होण्याची शक्यता असते.",howToInterpret:"जिल्हास्तरीय दर समितीसमोर प्रस्ताव प्रलंबित असताना निवडा.",example:"जिल्हा दर समितीमार्फत प्रति हेक्टर मूल्यांकनाची छाननी सुरू.",modelUsage:"Valuation टप्पा इनपुट."},opt_stage_compensation:{title:"कलम २३ निवाडा व भरपाई (Award & Compensation)",short:"जमीन भरपाई रक्कम निश्चित करणारा आणि वाटप जाहीर करणारा अधिकृत निवाडा.",whatItMeans:"भूसंपादन अधिकाऱ्याने जमीन, झाडे, विहिरी आणि सोलेशियम धरून भरपाई रक्कम ठरवली आहे.",whyItMatters:"निवाडा झाल्यानंतर ८०% भरपाई वाटप केल्याशिवाय जमिनीचा प्रत्यक्ष ताबा घेता येत नाही.",howToInterpret:"अंतिम दर निश्चिती आणि भरपाई वाटप आदेशाच्या वेळी निवडा.",example:"हेक्टरी ₹५० लाख दराने भरपाई निवाडा घोषित करण्यात आला.",modelUsage:"Compensation Award टप्पा इनपुट."},opt_stage_possession:{title:"प्रत्यक्ष ताबा व राइट-ऑफ-वे (Physical Possession & ROW)",short:"जमीन प्रत्यक्ष ताब्यात घेऊन प्रकल्प यंत्रणेकडे हस्तांतरित करण्याचा अंतिम टप्पा.",whatItMeans:"बांधकामासाठी जमीन मोकळी करून कार्यकारी संस्थेच्या स्वाधीन करणे.",whyItMatters:"ठेकेदाराला १००% सलग मोकळा कॉरिडॉर मिळाल्याशिवाय प्रत्यक्ष काम वेगाने सुरू होत नाही.",howToInterpret:"भरपाई वाटप पूर्ण होऊन पंचनामा ताबा पावती देताना निवडा.",example:"पंचनामा करून ३५ किमी लांबीचा मार्ग कंत्राटदाराला हस्तांतरित केला.",modelUsage:"Possession टप्पा इनपुट."},opt_stage_rehabilitation:{title:"पुनर्वसन व फेरस्थापना (Rehabilitation & Resettlement)",short:"बाधित कुटुंबांना पर्यायी घरे, जमिनी आणि आर्थिक सहाय्य देण्याची प्रक्रिया.",whatItMeans:"आर अँड आर कायद्यानुसार विस्थापित कुटुंबांचे पुनर्वसन पूर्ण करणे.",whyItMatters:"पुनर्वसन रखडल्यास स्थानिक जनता जमिनीचा ताबा सोडण्यास नकार देते.",howToInterpret:"विस्थापित कुटुंबांच्या वसाहतीचे काम चालू असताना निवडा.",example:"८० विस्थापित कुटुंबांना नवीन वसाहतीत घरांचे वाटप सुरू.",modelUsage:"Rehabilitation टप्पा इनपुट."},complexity_score:{title:"भूसंपादन गुंतागुंत निर्देशांक (Land Acquisition Complexity Index)",short:"कायदेशीर, सामाजिक, पर्यावरणीय आणि भौगोलिक अडचणींचा सर्वसमावेशक निर्देशांक (० ते १).",whatItMeans:"भूखंडांची संख्या, खातेदार, न्यायालयीन वाद आणि वने मिळून ठरवलेला गुंतागुंत स्तर.",whyItMatters:"अधिक गुंतागुंत असलेल्या प्रकल्पांना अतिरिक्त महसूल अधिकारी आणि विशेष समन्वय कक्षाची गरज असते.",howToInterpret:"०.२ पेक्षा कमी: सोपे संपादन; ०.५ पेक्षा जास्त: मध्यम आव्हानात्मक; ०.७ पेक्षा जास्त: अत्यंत गुंतागुंतीचे.",example:"अनेक सहखातेदार आणि वनजमीन असलेला कॉरिडॉर ०.७८ गुंतागुंत दर्शवतो.",modelUsage:"मॉडेलमधील प्रमुख निरंतर संख्यात्मक इनपुट वैशिष्ट्य."},total_parcels:{title:"एकूण भूखंड / सर्व्हे गट संख्या (Total Survey Numbers / Gats)",short:"प्रकल्पासाठी संपादित करावयाच्या एकूण महसुली जमिनीच्या तुकड्यांची किंवा गटनंबरची संख्या.",whatItMeans:"ज्या सर्व्हे किंवा गट क्रमांकांमधून जमीन संपादित होणार आहे त्यांची एकूण संख्या.",whyItMatters:"प्रत्येक भूखंडाची स्वतंत्र मोजणी, ७/१२ तपासणी आणि फेरफार करावी लागते.",howToInterpret:"संयुक्त मोजणी पत्रकातील एकूण सर्व्हे नंबर तपासा.",example:"१५ गावांमधील एकूण ४५० गट क्रमांक.",modelUsage:"कार्यभार आणि महसुली व्याप्तीचे संख्यात्मक इनपुट."},affected_families:{title:"बाधित कुटुंबे (Project-Affected Families - PAFs)",short:"ज्या कुटुंबांची जमीन, घरे किंवा उपजीविका या संपादनामुळे बाधित झाली आहे.",whatItMeans:"सामाजिक प्रभाव मूल्यमापनानुसार (SIA) बाधित नोंदणीकृत कुटुंबांची संख्या.",whyItMatters:"कुटुंबांची संख्या जास्त असल्यास पुनर्वसन व फेरस्थापना (R&R) पॅकेज आणि सुनावण्या वाढतात.",howToInterpret:"एसआयए अहवालातील अंतिम पडताळणी झालेली कुटुंब संख्या भरा.",example:"रस्ता विस्तारामुळे विस्थापित होणारी १८० कुटुंबे.",modelUsage:"सामाजिक प्रभाव आणि आर अँड आर गुंतागुंतीचे इनपुट."},land_area_hectares:{title:"संपादित करावयाचे क्षेत्र (Land Extent in Hectares)",short:"प्रकल्पासाठी आवश्यक असणारे एकूण जमिनीचे क्षेत्रफळ (हेक्टरमध्ये).",whatItMeans:"राजपत्रात प्रसिद्ध केलेले एकूण भूसंपादन क्षेत्रफळ.",whyItMatters:"मोठ्या क्षेत्रासाठी जास्त महसूल पथके, मोजणी आणि निधीची आवश्यकता असते.",howToInterpret:"१ हेक्टर = २.४७ एकर. राजपत्र अधिसूचनेतील हेक्टर क्षेत्र प्रविष्ट करा.",example:"७५.५० हेक्टर शेत व बिगरशेती जमीन.",modelUsage:"भौतिक व्याप्ती मोजणारे मुख्य संख्यात्मक इनपुट."},planned_duration_days:{title:"नियोजित कालावधी (Planned Duration in Days)",short:"अधिसूचनेपासून अंतिम ताबा मिळण्यापर्यंत मंजूर केलेला एकूण अधिकृत कालावधी (दिवसांमध्ये).",whatItMeans:"प्रकल्प अहवालात (DPR) भूसंपादनासाठी ठरवून दिलेली एकूण मुदत.",whyItMatters:"हा कालावधी संपल्यानंतरचा प्रत्येक दिवस विलंब (Delay) म्हणून गणला जातो.",howToInterpret:"प्रकल्प सनद किंवा शासन निर्णयात मंजूर केलेले दिवस प्रविष्ट करा.",example:"दीड वर्षाच्या भूसंपादनासाठी ५४० दिवस.",modelUsage:"वेळापत्रक तफावत आणि विलंब मोजण्यासाठी पायाभूत बेसलाइन इनपुट."},acquisition_progress_pct:{title:"भूसंपादन प्रगती (Acquisition Progress %)",short:"एकूण क्षेत्रापैकी प्रत्यक्ष कायदेशीर हस्तांतरण पूर्ण झालेल्या क्षेत्राची टक्केवारी.",whatItMeans:"अंतिम ताबा मिळालेले क्षेत्र भागिले एकूण आवश्यक क्षेत्र × १००.",whyItMatters:"कंत्राटदाराला काम सुरू करण्यासाठी किमान ८० ते ९० टक्के सलग जमिनीचा ताबा आवश्यक असतो.",howToInterpret:"४०% खाली: सुरुवातीचा टप्पा; ७०-८०%: ताबा हस्तांतरण टप्पा; ९५%+: पूर्णत्वास.",example:"१०० हेक्टरपैकी ६२ हेक्टरचा प्रत्यक्ष ताबा मिळाल्यास ६२% प्रगती.",modelUsage:"प्रकल्प पूर्णता मोजणारे प्रमुख इनपुट."},acquisition_velocity_pct_per_30d:{title:"संपादन गती दर (Acquisition Velocity % per 30 Days)",short:"दर ३० दिवसांत संपादनाची टक्केवारी किती वेगाने वाढत आहे याचा मासिक दर.",whatItMeans:"मागील महिन्यांतील संपादनाची प्रत्यक्ष मासिक कार्यगती.",whyItMatters:"गती मंदावल्यास ठरलेल्या मुदतीत ताबा मिळणे अशक्य होते आणि विलंब संभवतो.",howToInterpret:"२% पेक्षा कमी: मंद गती; ५%+ दरमहा: वेगाने काम चालू.",example:"मागील महिन्यात ३.८% अतिरिक्त जमिनीचे संपादन पूर्ण झाले.",modelUsage:"भविष्यातील प्रगतीचा वेग तपासण्यासाठी मॉडेल वापरते."},parcels_pending:{title:"प्रलंबित गट / भूखंड (Parcels Pending Transfer)",short:"ज्यांचे भूसंपादन किंवा ताबा पावती अद्याप पूर्ण झालेली नाही असे उर्वरित सर्व्हे नंबर.",whatItMeans:"एकूण भूखंड वजा ताबा मिळालेले भूखंड.",whyItMatters:"कॉरिडॉर प्रकल्पात केवळ काही शिल्लक भूखंडांमुळेही संपूर्ण रस्त्याचे काम ठप्प होऊ शकते.",howToInterpret:"शिल्लक भूखंड विखुरलेले आहेत की एकाच पट्ट्यात आहेत हे तपासा.",example:"एकूण ५०० पैकी अद्याप प्रलंबित असलेले ४५ भूखंड.",modelUsage:"अडथळा ठरणाऱ्या उर्वरित कामाचे संख्यात्मक इनपुट."},possession_pending_parcels:{title:"प्रत्यक्ष ताबा प्रलंबित भूखंड (Possession Pending Parcels)",short:"ज्या सर्व्हे क्रमांकांचा प्रत्यक्ष जागेवर जाऊन ताबा घेणे बाकी आहे अशी भूखंड संख्या.",whatItMeans:"कागदोपत्री संपादन झाले तरी प्रत्यक्ष ताबा न मिळालेले भूखंड.",whyItMatters:"स्थानिक विरोध किंवा पिके उभी असल्यामुळे ताबा रखडला असू शकतो.",howToInterpret:"या भूखंडांवर तात्काळ महसूल व पोलीस संरक्षणात पंचनामा करावा लागतो.",example:"३२ भूखंडांवर प्रत्यक्ष ताबा घेणे बाकी आहे.",modelUsage:"प्रत्यक्ष जमिनीवरील उर्वरित अडथळे इनपुट."},documents_required:{title:"आवश्यक महसूल दस्तऐवज (Documents Required)",short:"कायदेशीर संपादनासाठी सर्व भूखंडांचे आवश्यक असलेले एकूण महसुली कागदपत्रे.",whatItMeans:"७/१२ उतारे, ८-अ, फेरफार पत्रके, मोजणी नकाशे आणि वारस नोंदींची एकूण संख्या.",whyItMatters:"अपूर्ण कागदपत्रांमुळे भरपाई वाटप आणि नावे बदलणे थांबते.",howToInterpret:"प्रत्येक सर्व्हे नंबरसाठी आवश्यक दस्तांची एकत्रित बेरीज.",example:"३५० भूखंडांसाठी आवश्यक असलेले १४०० महसूल उतारे व नकाशे.",modelUsage:"कागदपत्र भार मोजणारे इनपुट."},documents_pending:{title:"प्रलंबित कागदपत्रे (Documents Pending)",short:"पडताळणीसाठी अद्याप प्रलंबित असलेल्या आवश्यक जमीन व मालकी हक्क कागदपत्रांची संख्या.",whatItMeans:"हे एकूण आवश्यक कागदपत्रांपैकी अजूनही पडताळणी किंवा महसूल फेरफारासाठी प्रलंबित असलेल्या कागदपत्रांची संख्या दर्शवते. हे मूल्य बदलल्याने कागदपत्र पूर्णता (((आवश्यक - प्रलंबित) / आवश्यक) * 100) थेट प्रभावित आणि अद्यतनित होते.",whyItMatters:"प्रलंबित कागदपत्रे भूसंपादनातील विलंबाचे प्रमुख कारण आहेत, ज्यामुळे कलम 19 घोषणा आणि भरपाई वाटप रखडते.",howToInterpret:"प्रलंबित कागदपत्रे कमी केल्याने कागदपत्र पूर्णता 100% कडे वाढते आणि अंदाजित विलंब जोखीम कमी होते. जास्त प्रलंबित संख्या असल्यास मॉडेल अधिक विलंब संभाव्यता दर्शवते.",example:"जर 850 आवश्यक पैकी 399 प्रलंबित असतील, तर कागदपत्र पूर्णता 53.1% होईल.",modelUsage:"XGBoost मॉडेलमध्ये विलंब जोखीम मोजण्यासाठी वापरले जाणारे प्राथमिक प्रकल्प इनपुट टेलीमेट्री वैशिष्ट्य."},documentation_completion_pct:{title:"दस्तऐवजीकरण पूर्णता (Documentation Completion %)",short:"आवश्यक दस्तऐवजांपैकी पडताळणी पूर्ण झालेल्या दस्तऐवजांची टक्केवारी.",whatItMeans:"तपासलेले दस्तऐवज भागिले एकूण आवश्यक दस्तऐवज × १००.",whyItMatters:"हे प्रमाण ९०% च्या पुढे गेल्याशिवाय जलद भरपाई वाटप शक्य नसते.",howToInterpret:"५०% खाली असल्यास कागदपत्रांची मोठी कोंडी दर्शवते.",example:"६७.८% दस्तऐवजीकरण पूर्ण.",modelUsage:"मॉडेलमधील कागदपत्र गुणवत्ता दर्शक."},compensation_pending_cases:{title:"प्रलंबित भरपाई प्रकरणे (Pending Compensation Cases)",short:"ज्या खातेदारांची भरपाई अद्याप खात्यात जमा झालेली नाही अशा प्रकरणांची संख्या.",whatItMeans:"वारस वाद, बँक खाते त्रुटी किंवा आक्षेपामुळे प्रलंबित राहिलेली प्रकरणे.",whyItMatters:"प्रकरणांची संख्या जास्त असल्यास असंतोष वाढतो आणि कामावर स्थगिती येण्याचा धोका वाढतो.",howToInterpret:"५० पेक्षा जास्त प्रकरणे असल्यास विशेष निवारण कक्षाची स्थापना करावी.",example:"८८ शेतकरी कुटुंबांची भरपाई प्रकरणे प्रलंबित आहेत.",modelUsage:"असमाधान आणि विलंब जोखीम वाढवणारे इनपुट."},compensation_pending_amount:{title:"प्रलंबित भरपाई रक्कम (Compensation Pending Amount in ₹ Cr)",short:"जमीनमालकांना वाटप करण्यासाठी अद्याप शिल्लक असलेली भरपाई रक्कम (कोटी रुपयांमध्ये).",whatItMeans:"मंजूर निधी वजा प्रत्यक्ष वितरित निधी.",whyItMatters:"निधी असूनही वाटप रखडले असल्यास खातेदारांचे वाद किंवा बँक खात्यांच्या त्रुटी कारणीभूत असू शकतात.",howToInterpret:"प्रलंबित रक्कम कमी वेगाने वितरित होत असल्यास तातडीने डीबीटी शिबिरे घेणे आवश्यक असते.",example:"₹५३.५० कोटींचे वाटप बाकी आहे.",modelUsage:"वित्तीय अडथळा दर्शक इनपुट."},compensation_completion_pct:{title:"भरपाई वितरण टक्केवारी (Compensation Completion %)",short:"एकूण मंजूर रकमेच्या तुलनेत प्रत्यक्ष वितरित झालेल्या निधीची टक्केवारी.",whatItMeans:"वितरित रक्कम भागिले एकूण मंजूर रक्कम × १००.",whyItMatters:"८०% हा ताबा घेण्यासाठीचा कायदेशीर उंबरठा आहे.",howToInterpret:"८०% पेक्षा जास्त असणे प्रत्यक्ष ताबा मिळण्यासाठी अत्यंत अनुकूल असते.",example:"६३.२% भरपाई वितरण पूर्ण.",modelUsage:"आर्थिक प्रगती मोजणारे मुख्य मॉडेल वैशिष्ट्य."},avg_compensation_delay_days:{title:"सरासरी भरपाई विलंब (Average Compensation Delay Days)",short:"निवाडा जाहीर झाल्यापासून शेतकऱ्यांना पैसे मिळेपर्यंत झालेला सरासरी विलंब (दिवसांमध्ये).",whatItMeans:"प्रशासकीय मान्यतेपासून प्रत्यक्ष खात्यात पैसे जमा होण्यामधील सरासरी उशीर.",whyItMatters:"जास्त विलंबावर कलम ३४ नुसार सरकारला ९% ते १५% अतिरिक्त व्याज भरावे लागते.",howToInterpret:"३० दिवसांच्या आत वितरण आदर्श मानले जाते; ६०+ दिवस चिंताजनक आहे.",example:"सरासरी ४२ दिवस विलंब झाला आहे.",modelUsage:"आर्थिक प्रक्रिया कार्यक्षमता दर्शक."},approvals_pending:{title:"प्रलंबित परवानग्या (Approvals Pending)",short:"विविध मंत्रालये किंवा विभागांकडे मंजुरीसाठी प्रलंबित असलेल्या प्रस्तावांची संख्या.",whatItMeans:"अद्याप निर्णय न झालेले आणि संबंधित विभागांकडे प्रलंबित असलेले प्रस्ताव.",whyItMatters:"विशेषतः वन किंवा वन्यजीव मंजुरी प्रलंबित असल्यास वर्षानुवर्षे काम अडकू शकते.",howToInterpret:"प्रलंबित परवानग्या कोणत्या विभागाकडे आहेत हे ओळखून पाठपुरावा करावा लागतो.",example:"६ परवानग्या (वन, रेल्वे व पर्यावरण) अद्याप प्रलंबित आहेत.",modelUsage:"नियामक अडथळा दर्शक इनपुट."},overdue_approvals:{title:"मुदत उलटलेल्या परवानग्या (Overdue Approvals)",short:"ज्या परवानग्यांची विहित कायदेशीर मुदत संपली आहे तरीही निर्णय प्रलंबित आहे.",whatItMeans:"कायदेशीर कालमर्यादा ओलांडलेले गंभीर मंजुरी प्रस्ताव.",whyItMatters:"अशा परवानग्यांसाठी मुख्य सचिव स्तरावरील उच्चाधिकार समितीचा हस्तक्षेप लागतो.",howToInterpret:"शून्य असावे; संख्या जास्त असल्यास प्रकल्प त्वरित विलंबाच्या दिशेने जातो.",example:"३ परवानग्यांची विहित मुदत संपली आहे.",modelUsage:"जोखीम वाढवणारे प्रमुख इनपुट वैशिष्ट्य."},avg_approval_delay_days:{title:"मंजुरीतील सरासरी विलंब (Average Approval Delay Days)",short:"संबंधित विभागाकडून मंजुरी मिळण्यासाठी अधिकृत कालमर्यादेपेक्षा झालेला सरासरी उशीर.",whatItMeans:"सिटिझन चार्टर किंवा कायद्यातील वेळेपेक्षा किती दिवस जास्त लागले.",whyItMatters:"जास्त उशीर आंतरविभागीय समन्वयातील लालफितीचा कारभार दर्शवतो.",howToInterpret:"४५ दिवसांपेक्षा जास्त सरासरी उशीर लाल बावटा मानला जातो.",example:"परवानग्यांमध्ये सरासरी ५५ दिवसांचा विलंब नोंदवला गेला.",modelUsage:"प्रशासकीय कार्यक्षमता इनपुट."},pending_objections:{title:"प्रलंबित हरकती / आक्षेप (Pending Objections - Sec 15)",short:"कलम १५ किंवा संबंधित तरतुदींनुसार जमीनमालकांनी नोंदवलेल्या आणि अद्याप न ऐकलेल्या हरकती.",whatItMeans:"संपादनाच्या आवश्यकतेवर किंवा सीमारेषेवर शेतकऱ्यांनी घेतलेले कायदेशीर आक्षेप.",whyItMatters:"सर्व आक्षेप अधिकृतरीत्या सुनावणी घेऊन निकाली काढल्याशिवाय कलम १९ घोषणा करता येत नाही.",howToInterpret:"६० दिवसांच्या आत सर्व हरकतींची सुनावणी पूर्ण करणे बंधनकारक असते.",example:"३५ शेतकऱ्यांच्या हरकतींवर प्राधिकाऱ्याकडे सुनावणी सुरू आहे.",modelUsage:"प्रशासकीय प्रक्रियेतील अडथळा दर्शक."},active_legal_disputes:{title:"सक्रिय न्यायालयीन वाद (Active Legal Disputes)",short:"उच्च न्यायालय, जिल्हा न्यायालय किंवा प्राधिकरणासमोर प्रलंबित असलेले सक्रिय दावे.",whatItMeans:"जमीन संपादनाविरोधात किंवा भरपाईविरोधात शेतकऱ्यांनी दाखल केलेले कोर्ट केसेस.",whyItMatters:"न्यायालयाकडून अंतरिम आदेश किंवा फेरसर्वेक्षणाचे आदेश आल्यास काम थांबते.",howToInterpret:"५ पेक्षा जास्त सक्रिय खटले असल्यास विधी अधिकाऱ्यांची विशेष नियुक्ती करावी लागते.",example:"७ शेतकऱ्यांनी भरपाई आणि संपादन वैधतेविरुद्ध उच्च न्यायालयात याचिका दाखल केली आहे.",modelUsage:"कायदेशीर जोखीम मोजणारे प्रमुख इनपुट."},ownership_disputes:{title:"मालकी हक्क / फेरफार वाद (Title & Mutation Disputes)",short:"जमीनमालक, वारसदार किंवा सहखातेदारांमधील अंतर्गत वादांची संख्या.",whatItMeans:"७/१२ वर नाव कोणाचे लावावे किंवा भरपाई कोणाला द्यावी यावरून आपापसातील भांडणे.",whyItMatters:"मालकी निश्चित न झाल्यास भरपाई न्यायालयात (कलम ६४/७७) जमा करावी लागते आणि ताबा लांबतो.",howToInterpret:"महसूल अदालत किंवा विशेष फेरफार शिबिरांद्वारे हे वाद सोडवले जाऊ शकतात.",example:"१२ शेतजमिनींवर भावा-भावांमधील वारसाहक्क वाद प्रलंबित आहेत.",modelUsage:"स्थानिक विवाद गुंतागुंत इनपुट."},court_stay_cases:{title:"न्यायालयीन स्थगिती प्रकरणे (Court Stay Orders)",short:"सक्षम न्यायालयाने भूसंपादनाला किंवा प्रत्यक्ष कामाला दिलेली तात्पुरती किंवा अंतिम स्थगिती.",whatItMeans:"कोर्टाचा स्थगिती किंवा जैसे थे आदेश ज्यायोगे प्रशासनाला काम करण्यास बंदी घातली जाते.",whyItMatters:"स्थगिती आदेश असेपर्यंत त्या जमिनीवर कोणतेही काम करणे हा न्यायालयाचा अवमान ठरतो; प्रकल्प थेट ठप्प होतो.",howToInterpret:"स्थगिती उठवण्यासाठी शासकीय वकिलांमार्फत तातडीने अर्ज करणे आवश्यक असते.",example:"२ प्रमुख भूखंडांवर उच्च न्यायालयाचा जैसे थे आदेश.",modelUsage:"विलंब जोखीम वाढवणारे अत्यंत गंभीर इनपुट वैशिष्ट्य."},rr_pending_cases:{title:"प्रलंबित पुनर्वसन कुटुंबे (R&R Pending Cases)",short:"ज्या कुटुंबांचे पुनर्वसन पॅकेज किंवा पर्यायी घरे अद्याप प्रलंबित आहेत.",whatItMeans:"मदत मिळण्याच्या प्रतीक्षेत असणारी बाधित कुटुंबे.",whyItMatters:"प्रलंबित कुटुंबे घराचा ताबा सोडण्यास नकार देऊ शकतात.",howToInterpret:"या कुटुंबांशी संवाद साधून पॅकेज वाटप तातडीने पूर्ण करावे लागते.",example:"४० कुटुंबांचे पुनर्वसन पॅकेज अद्याप बाकी आहे.",modelUsage:"सामाजिक अडथळा दर्शक इनपुट."},rr_completion_pct:{title:"पुनर्वसन पूर्णता दर (R&R Completion Rate %)",short:"एकूण पुनर्वसन पात्र कुटुंबांच्या तुलनेत पुनर्वसन पूर्ण झालेल्या कुटुंबांची टक्केवारी.",whatItMeans:"पुनर्वसित कुटुंबे भागिले एकूण पात्र कुटुंबे × १००.",whyItMatters:"हे प्रमाण कमी असल्यास स्थानिक आंदोलन आणि रस्ता रोकोचा धोका वाढतो.",howToInterpret:"७०% पेक्षा कमी असल्यास पुनर्वसन कामांना गती देणे आवश्यक असते.",example:"६६.७% पुनर्वसन काम पूर्ण झाले आहे.",modelUsage:"सामाजिक स्थैर्य आणि प्रगती दर्शक."},schedule_variance_days:{title:"वेळापत्रकातील तफावत (Schedule Variance Days)",short:"नियोजित वेळापत्रक आणि प्रत्यक्ष कामाची स्थिती यातील दिवसांमधील फरक.",whatItMeans:"धन (+) संख्या: प्रकल्प विलंबात आहे; शून्य किंवा ऋण (-): प्रकल्प वेळेवर किंवा पुढे आहे.",whyItMatters:"प्रकल्प किती दिवस मागे पडला आहे याचे थेट मोजमाप देते.",howToInterpret:"+४५ दिवस म्हणजे मूळ नियोजनापेक्षा काम दीड महिना मागे आहे.",example:"+६० दिवस वेळापत्रक तफावत.",modelUsage:"विद्यमान विलंब स्थिती दर्शवणारे थेट इनपुट."},milestones_overdue:{title:"मुदत उलटून गेलेले टप्पे (Milestones Overdue)",short:"ज्यांची नियोजित मुदत संपली आहे तरीही जे टप्पे अद्याप प्रलंबित आहेत.",whatItMeans:"वेळेत पूर्ण न होऊ शकलेली महत्त्वाची प्रशासकीय कामे.",whyItMatters:"ओव्हरड्यू टप्पे थेट साखळी विलंब निर्माण करतात आणि पुढील सर्व कामांना उशीर होतो.",howToInterpret:"शून्य असल्यास उत्तम; २ पेक्षा जास्त असल्यास उच्च प्रशासकीय लक्ष आवश्यक.",example:"२ टप्पे (संयुक्त मोजणी व निवाडा) मुदत उलटून गेली आहे.",modelUsage:"मॉडेलमधील विलंब जोखीम वाढवणारे इनपुट."},pending_stakeholder_actions:{title:"प्रलंबित भागधारक समन्वय (Pending Stakeholder Actions)",short:"विविध संस्था, स्थानिक स्वराज्य संस्था किंवा प्रतिनिधींकडे प्रलंबित असलेल्या मुद्द्यांची संख्या.",whatItMeans:"ग्रामपंचायत ठराव, पालिका ना-हरकत किंवा शेतकरी संघटनांशी चर्चा.",whyItMatters:"स्थानिक लोकप्रतिनिधी आणि ग्रामस्थांचे समाधान न झाल्यास काम बंद पाडले जाऊ शकते.",howToInterpret:"नियमित जनसंवाद बैठकांमुळे हे मुद्दे वेगाने निकाली निघतात.",example:"ग्रामपंचायतीच्या पाणंद रस्ते दुरुस्तीबाबत ३ प्रलंबित मागण्या.",modelUsage:"स्थानिक सहकार्य दर्शक इनपुट."},avg_stakeholder_response_days:{title:"भागधारक प्रतिसाद कालावधी (Average Stakeholder Response Time)",short:"स्थानिक संस्था किंवा विभागांना पत्र पाठवल्यानंतर उत्तर येण्यास लागणारा सरासरी वेळ.",whatItMeans:"प्रशासकीय पत्रव्यवहाराला मिळणारा प्रतिसाद वेग.",whyItMatters:"प्रतिसाद मिळण्यास जास्त महिने लागल्यास संपूर्ण प्रक्रिया रखडते.",howToInterpret:"३० दिवसांच्या आत उत्तर येणे आदर्श प्रशासकीय लक्षण आहे.",example:"सरासरी ३८ दिवसांत संस्थांकडून प्रतिसाद प्राप्त होतो.",modelUsage:"संवाद कार्यक्षमता निर्देशांक."},stakeholder_responsiveness_score:{title:"भागधारक सहकार्य निर्देशांक (Stakeholder Responsiveness Score)",short:"स्थानिक जनता, विभाग आणि संस्थांच्या सहकार्याचे मूल्यांकन करणारा निर्देशांक (० ते १००).",whatItMeans:"प्रकल्पाबाबत स्थानिक अनुकूलता आणि प्रशासकीय प्रतिसादाचा एकत्रित गुण.",whyItMatters:"उच्च सहकार्य गुण असल्यास भूसंपादन वेगाने आणि विनाअडथळा पार पडते.",howToInterpret:"७० पेक्षा जास्त: उत्तम सहकार्य; ५० पेक्षा कमी: असहकार आणि संवादाची गरज.",example:"७६ गुण (चांगले स्थानिक सहकार्य व संवाद).",modelUsage:"प्रकल्प सुलभता दर्शक इनपुट."},historical_avg_delay_days:{title:"ऐतिहासिक सरासरी विलंब दिवस (Historical Average Delay Days)",short:"समान प्रकारच्या प्रकल्पांमध्ये पूर्वी प्रत्यक्ष झालेला सरासरी विलंब (दिवसांमध्ये).",whatItMeans:"मागील ५० प्रकल्पांच्या विश्लेषणावरून काढलेला सरासरी उशीर.",whyItMatters:"सध्याच्या प्रकल्पाचे नियोजन किती वास्तववादी आहे हे तपासण्यासाठी बेंचमार्क म्हणून उपयुक्त.",howToInterpret:"१८० दिवस ऐतिहासिक सरासरी असल्यास सध्याच्या नियोजनात किमान तेवढा बफर ठेवावा लागतो.",example:"या क्षेत्रातील प्रकल्पांना सरासरी २१० दिवस विलंब झाला होता.",modelUsage:"ऐतिहासिक बेंचमार्क इनपुट."},delay_probability:{title:"अंदाज वर्तवलेली विलंब संभाव्यता (Predicted Delay Probability)",short:"प्रकल्प त्याच्या मंजूर नियोजित मुदतीपेक्षा जास्त लांबण्याची मॉडेलने काढलेली संभाव्यता (० ते १००%).",whatItMeans:"मशीन लर्निंग (XGBoost) मॉडेलने सर्व ६०+ घटकांचे विश्लेषण करून काढलेली शक्यता.",whyItMatters:"उच्च संभाव्यता वेळेत लक्षात आल्यास जिल्हाधिकारी आणि प्रकल्प संचालक आगाऊ उपाययोजना करू शकतात.",howToInterpret:"५०% पेक्षा कमी: कमी धोका; ५०-७०%: मध्यम धोका; ७०%+: उच्च किंवा अति-धोका.",example:"७८.४% विलंब संभाव्यता (तातडीच्या हस्तक्षेपाची गरज).",modelUsage:"भूमी सखा प्रणालीचे मुख्य सांख्यिकी आउटपुट."},risk_level:{title:"विलंब धोका स्तर (Delay Risk Level)",short:"संभाव्यतेच्या आधारे ठरवलेला प्रशासकीय धोका वर्ग (कमी, मध्यम, उच्च किंवा अति-धोका).",whatItMeans:"प्रशासकीय अधिकाऱ्यांना त्वरित समजण्यासाठी संभाव्यतेचे सुलभ वर्गीकरण.",whyItMatters:"धोका स्तरावर आधारित निर्णय घेऊन प्रकल्पाचा आढावा साप्ताहिक की मासिक घ्यायचा ते ठरते.",howToInterpret:"लाल: Critical/High (साप्ताहिक आढावा); पिवळा: Medium; हिरवा: Low (नियमित गती).",example:"Critical (अति-धोका स्तर).",modelUsage:"थ्रेशोल्ड आधारित अंतिम वर्गीकरण आउटपुट."},risk_thresholds:{title:"विलंब वर्गीकरण मर्यादा (Risk Thresholds)",short:"ज्या संभाव्यतेच्या वर प्रकल्पाला जोखीम श्रेणीत वर्गीकृत केले जाते ती सांख्यिकी सीमारेषा.",whatItMeans:"मॉडेलने ठरवलेले कट-ऑफ बिंदू (उदा. ५०% किंवा ७०%).",whyItMatters:"संभाव्यता या मर्यादेच्या वर गेल्यास प्रणाली धोक्याची सूचना जारी करते.",howToInterpret:"५०% मर्यादेच्या तुलनेत ७५% असल्यास प्रकल्प निश्चितपणे धोक्यात मानला जातो.",example:"वर्गीकरण थ्रेशोल्ड ५०.०% वर सेट आहे.",modelUsage:"द्विमान वर्गीकरण (Binary Classification) मर्यादा."},model_confidence:{title:"मॉडेल विश्वासार्हता (Model Statistical Confidence)",short:"प्रशिक्षणातील डेटा वितरण आणि वैशिष्ट्यांच्या उपलब्धतेवर आधारित सांख्यिकी खात्री (टक्केवारीत).",whatItMeans:"मॉडेलचे भाकीत किती मजबूत पुराव्यांवर आणि डेटावर आधारित आहे याचे मोजमाप.",whyItMatters:"डेटा अपूर्ण असल्यास विश्वासार्हता कमी होते आणि अधिक कागदपत्रे तपासण्याचा सल्ला दिला जातो.",howToInterpret:"८५%+ विश्वासार्हता: भाकीत अत्यंत खात्रीशीर मानले जाते.",example:"९१.२% मॉडेल विश्वासार्हता.",modelUsage:"सांख्यिकी विश्वासार्हता दर्शक."},risk_drivers_increasing:{title:"विलंब वाढवणारे जोखीम घटक (Risk-Increasing Drivers)",short:"ज्या घटकांमुळे विलंबाची संभाव्यता वरच्या दिशेने गेली आहे असे प्रमुख घटक (SHAP मूल्ये).",whatItMeans:"जसे की न्यायालयीन स्थगिती, मुदत उलटलेले टप्पे किंवा प्रलंबित भरपाई.",whyItMatters:"अधिकाऱ्यांना विलंबाचे मूळ कारण नेमके कशात आहे हे एका नजरेत समजते.",howToInterpret:"या यादीतील पहिल्या २ घटकांवर प्राधान्याने प्रशासकीय उपाययोजना कराव्यात.",example:"+२४% प्रभाव: न्यायालयीन स्थगिती प्रकरणे.",modelUsage:"मॉडेलमधील पॉझिटिव्ह SHAP फीचर कॉन्ट्रिब्युशन्स."},risk_drivers_reducing:{title:"विलंब कमी करणारे संरक्षक घटक (Risk-Reducing Mitigating Drivers)",short:"ज्या अनुकूल घटकांमुळे प्रकल्पाचा धोका कमी राहण्यास मदत झाली आहे.",whatItMeans:"जसे की उच्च भरपाई वाटप दर, उत्तम दस्तऐवजीकरण किंवा निकाली निघालेले खटले.",whyItMatters:"प्रकल्पाची कोणती बाजू मजबूत आहे हे दाखवून आत्मविश्वास वाढवते.",howToInterpret:"हे सकारात्मक घटक टिकवून ठेवण्यासाठी प्रयत्न चालू ठेवावेत.",example:"-१८% प्रभाव: ८८% पूर्ण झालेले भरपाई वाटप.",modelUsage:"मॉडेलमधील निगेटिव्ह SHAP फीचर कॉन्ट्रिब्युशन्स."},statutory_directives:{title:"वैधानिक मार्गदर्शक निर्देश (Statutory Directives)",short:"एआय निष्कर्षांवरून उद्भवणाऱ्या वैधानिक व प्रशासकीय कृतींचे मार्गदर्शन.",whatItMeans:"विद्यमान कायद्यानुसार (RFCTLARR) अधिकाऱ्यांनी घ्यावयाची सावधगिरी.",whyItMatters:"मुदत समाप्ती आणि न्यायालयीन अडचणी टाळण्यासाठी कायदेशीर संरक्षण देते.",howToInterpret:"या शिफारशींचा समावेश साप्ताहिक प्रगती आढाव्यात करावा.",example:"कलम १९ मुदत संपण्यापूर्वी संयुक्त मोजणी पूर्ण करण्याचे निर्देश.",modelUsage:"प्रशासकीय कृती मार्गदर्शक."},methodology_evaluation:{title:"भाकीत विश्लेषण व पद्धती (Prediction Methodology & Evaluation)",short:"मॉडेलच्या निष्कर्षाचे सुलभ मराठीतील सारांश विश्लेषण व मूल्यांकन.",whatItMeans:"डेटा आणि मॉडेलच्या निष्कर्षांची एकत्रित मांडणी.",whyItMatters:"तांत्रिक ज्ञान नसलेल्या महसूल अधिकाऱ्यांनाही परिस्थितीचे गांभीर्य त्वरित समजते.",howToInterpret:"दिलेल्या विश्लेषणाच्या आधारे पुढील बैठकीचा अजेंडा ठरवावा.",example:"न्यायालयीन स्थगिती आणि भरपाई वितरणातील उशीर यामुळे उच्च विलंब धोका निर्माण झाला आहे.",modelUsage:"अंतिम विश्लेषणात्मक सारांश."},statutory_presets:{title:"पूर्वनियोजित परिस्थिती (Scenario Presets)",short:"चाचणीसाठी आदर्श (Normal), गुंतागुंतीचा (Complex) किंवा अडचणीत असलेला (Distressed) प्रकल्प एका क्लिकवर लोड करतो.",whatItMeans:"वेगवेगळ्या प्रशासकीय परिस्थितींचे तयार नमुने.",whyItMatters:"प्रणालीची अचूकता आणि मॉडेलचे वर्तन तपासण्यासाठी अत्यंत जलद मार्ग.",howToInterpret:"Normal: कमी धोका; Complex: मध्यम धोका; Distressed: अति-गंभीर विलंब.",example:"Distressed दाबल्यास ८४% विलंब संभाव्यतेचा प्रकल्प लोड होतो.",modelUsage:"सिस्टम चाचणी नमुने."},mode_select_project:{title:"नोंदणीकृत प्रकल्प लोड करा (Load Registered Project)",short:"डेटाबेसमधून आधीच जतन केलेल्या प्रकल्पाची संपूर्ण माहिती फॉर्ममध्ये भरतो.",whatItMeans:"आधीच्या प्रकल्पांची माहिती एका क्लिकवर आणतो.",whyItMatters:"पुन्हा पुन्हा ६०+ रकाने हाताने भरण्याचा वेळ वाचवतो.",howToInterpret:"सूचीतील कोणताही प्रकल्प निवडून त्याची सद्यस्थिती तपासा.",example:"दिल्ली-अमृतसर द्रुतगती महामार्ग निवडून त्याची थेट माहिती लोड करा.",modelUsage:"प्रकल्प डेटा लोड करणारी सुविधा."},mode_test_scenario:{title:"सिम्युलेशन परिस्थिती चाचणी (Test Scenario)",short:"काल्पनिक बदल करून (उदा. भरपाई वाटप वाढवून) विलंबाचा धोका कसा बदलतो ते पाहतो.",whatItMeans:"प्रशासकीय हस्तक्षेपाचा काय परिणाम होईल हे पाहण्यासाठी व्हॉट-इफ (What-if) विश्लेषण.",whyItMatters:"कोणत्या उपायामुळे विलंबाचा धोका सर्वाधिक कमी होईल हे आधीच समजते.",howToInterpret:"उदा. वाद मिटवल्यास किंवा निधी दिल्यास जोखीम किती टक्क्यांनी घसरते ते पहा.",example:"भरपाई वाटप ९०% केल्यास धोका ७८% वरून ४२% वर घसरतो का ते तपासणे.",modelUsage:"सिम्युलेशन व पॉलिसी चाचणी टूल."},assess_project_risk:{title:"जोखीम मूल्यांकन चालवा (Run Risk Assessment)",short:"फॉर्ममधील डेटा जलदगतीने FastAPI बॅकएंड आणि XGBoost मॉडेलकडे विश्लेषणासाठी पाठवतो.",whatItMeans:"थेट एआय मॉडेल चालवून तात्काळ विलंब संभाव्यता प्राप्त करतो.",whyItMatters:"काही सेकंदात संपूर्ण वैज्ञानिक जोखीम अहवाल तयार होतो.",howToInterpret:"फॉर्म भरल्यानंतर हे बटण दाबा; निकाल उजव्या बाजूला दिसतील.",example:"बटन दाबल्यावर मॉडेल ७८.४% विलंब संभाव्यता दाखवते.",modelUsage:"थेट मॉडेल प्रेडिक्शन ट्रिगर."},reset_values:{title:"फॉर्म पूर्ववत करा (Reset Values)",short:"मूल्यांकन फॉर्ममधील सर्व रकाने रिकामे करून मूळ स्थितीत आणतो.",whatItMeans:"फॉर्ममधील सर्व प्रविष्ट केलेली मूल्ये साफ करतो.",whyItMatters:"नवीन प्रकल्पाचे कोरे मूल्यांकन सुरू करण्यासाठी उपयुक्त.",howToInterpret:"नवीन प्रकल्प माहिती भरण्यापूर्वी यावर क्लिक करा.",example:"सर्व रकाने रिकामे करून डिफॉल्ट मूल्यांवर आणले जातात.",modelUsage:"युझर इंटरफेस नियंत्रण."},retry_assessment:{title:"मूल्यांकन पुन्हा करा (Retry Assessment)",short:"नेटवर्क त्रुटी किंवा डेटा बदलल्यानंतर पुन्हा एकदा मूल्यांकन चालवतो.",whatItMeans:"पुन्हा प्रयत्न करण्याची सुविधा.",whyItMatters:"इंटरनेट किंवा सर्व्हर तात्पुरता व्यग्र असल्यास काम थांबत नाही.",howToInterpret:"त्रुटी संदेश दिसल्यास यावर क्लिक करा.",example:"सर्व्हर पूर्ववत झाल्यावर पुन्हा मूल्यमापन चालवणे.",modelUsage:"प्रणाली पुनर्प्रयत्न सुविधा."},read_aloud:{title:"मजकूर ऐका (Read Aloud Audio)",short:"स्क्रीनवरील जोखीम विश्लेषण आणि माहिती मराठीत ऑडिओद्वारे ऐकवतो.",whatItMeans:"ब्राउझरचे व्हॉइस सिंथेसिस वापरून मजकूर वाचून दाखवतो.",whyItMatters:"दौऱ्यात किंवा बैठकीत स्क्रीन न पाहता अहवाल ऐकण्यास मदत होते.",howToInterpret:"ऐकण्यासाठी प्ले दाबा; थांबवण्यासाठी पुन्हा दाबा.",example:"मराठी आवाजात जोखीम अहवाल ऐकवला जातो.",modelUsage:"सुलभता (Accessibility) व ऑडिओ सहाय्यक."},dash_total_projects:{title:"एकूण संनियंत्रित प्रकल्प (Total Monitored Projects)",short:"भूमी सखा प्लॅटफॉर्मवर सध्या सक्रिय देखरेखीखाली असलेल्या सर्व प्रकल्पांची एकूण संख्या.",whatItMeans:"डेटाबेसमध्ये नोंदणीकृत राष्ट्रीय व राज्य प्रकल्प.",whyItMatters:"संपूर्ण पोर्टफोलिओचा आकार आणि प्रशासकीय कक्षा दर्शवतो.",howToInterpret:"एकूण पायाभूत सुविधा प्रकल्पांची संख्या.",example:"देशभरातील २४ प्रमुख महामार्ग व रेल्वे प्रकल्प.",modelUsage:"डॅशबोर्ड पोर्टफोलिओ मेट्रिक."},dash_high_critical:{title:"उच्च व अति-जोखीम प्रकल्प (High & Critical Risk Projects)",short:"ज्यांची विलंब संभाव्यता ७०% पेक्षा जास्त आहे अशा धोक्यात असलेल्या प्रकल्पांची संख्या.",whatItMeans:"ज्या प्रकल्पांना त्वरित कालबद्ध हस्तक्षेपाची गरज आहे.",whyItMatters:"उच्चस्तरीय अधिकाऱ्यांनी या प्रकल्पांवर सर्वप्रथम लक्ष केंद्रित करणे आवश्यक असते.",howToInterpret:"ही संख्या कमी करणे हे प्रशासकीय सुधारणेचे मुख्य उद्दिष्ट आहे.",example:"२४ पैकी ७ प्रकल्प अति-जोखीम श्रेणीत आहेत.",modelUsage:"पोर्टफोलिओ जोखीम वर्गीकरण."},dash_intervention:{title:"तातडीच्या हस्तक्षेपाची गरज (Requiring Administrative Intervention)",short:"ज्या प्रकल्पांवर न्यायालयीन स्थगिती, मुदत संपलेले टप्पे किंवा तीव्र वाद प्रलंबित आहेत.",whatItMeans:"नियमित मार्गाने न सुटणाऱ्या आणि जिल्हाधिकारी/सचिव हस्तक्षेपाची गरज असलेले प्रकल्प.",whyItMatters:"हस्तक्षेप न झाल्यास हे प्रकल्प पूर्णपणे ठप्प होऊ शकतात.",howToInterpret:"तातडीने विशेष बैठक बोलवण्याची शिफारस केली जाते.",example:"५ प्रकल्पांना या आठवड्यात उच्चस्तरीय हस्तक्षेपाची गरज आहे.",modelUsage:"प्रशासकीय निकड दर्शक."},dash_avg_risk:{title:"राष्ट्रीय सरासरी विलंब जोखीम (National Average Delay Probability)",short:"पोर्टफोलिओमधील सर्व प्रकल्पांच्या विलंब संभाव्यतेची सरासरी टक्केवारी.",whatItMeans:"संपूर्ण देशातील किंवा राज्यातील भूसंपादनाची सरासरी आरोग्य स्थिती.",whyItMatters:"धोरणात्मक सुधारणांमुळे ही सरासरी कमी होत आहे की वाढत आहे हे समजते.",howToInterpret:"५०% पेक्षा खाली असणे संपूर्ण पोर्टफोलिओसाठी उत्तम मानले जाते.",example:"राष्ट्रीय सरासरी ४८.५% विलंब जोखीम.",modelUsage:"पोर्टफोलिओ सरासरी मेट्रिक."},dash_risk_distribution:{title:"जोखीम वितरण विश्लेषण (Risk Distribution Spectrum)",short:"प्रकल्पांचे Low, Medium, High आणि Critical या चार स्तरांमध्ये झालेले टक्केवारीनुसार विभाजन.",whatItMeans:"पोर्टफोलिओचा जोखीम आलेख.",whyItMatters:"बहुतांश प्रकल्प कोणत्या भागात मोडतात हे दाखवून संसाधनांचे वाटप ठरवण्यास मदत होते.",howToInterpret:"हिरवा भाग मोठा असल्यास पोर्टफोलिओ सुरक्षित मानला जातो.",example:"४०% Low, ३०% Medium, २०% High, १०% Critical.",modelUsage:"पोर्टफोलिओ सांख्यिकी विश्लेषण."},dash_key_drivers:{title:"प्रमुख जोखीम घटक (Dominant Delay Drivers)",short:"संपूर्ण पोर्टफोलिओमध्ये विलंबाला कारणीभूत ठरणारे सर्वाधिक वारंवार आढळणारे घटक.",whatItMeans:"जसे की न्यायालयीन स्थगिती किंवा वन मंजुरी प्रलंबित असणे.",whyItMatters:"शासन स्तरावर कोणती नियमावली बदलण्याची गरज आहे हे धोरणकर्त्यांना दाखवते.",howToInterpret:"सर्वात वरच्या घटकावर राज्यव्यापी मोहीम राबवावी.",example:"३८% प्रकल्पांमध्ये न्यायालयीन स्थगिती हा मुख्य विलंब घटक ठरला आहे.",modelUsage:"एकत्रित SHAP सांख्यिकी विश्लेषण."},dash_triangulation_alert:{title:"त्रिकोणी विसंगती इशारा (Triangulation Anomaly Alert)",short:"कागदोपत्री प्रगती, प्रत्यक्ष सॅटेलाइट निरीक्षण आणि भरपाई वाटप यातील विसंगती शोधणारा इशारा.",whatItMeans:"प्रशासकीय दाव्यांमध्ये आणि जमिनीवरील प्रत्यक्ष स्थितीत फरक असल्यास चेतावणी देतो.",whyItMatters:"खोटे अहवाल किंवा कागदोपत्री दिशाभूल तात्काळ पकडतो.",howToInterpret:"पिवळा किंवा लाल इशारा दिसल्यास प्रत्यक्ष जागेवर जाऊन चौकशी करण्याचे निर्देश द्या.",example:"८५% कागदोपत्री ताबा दाखवला असला तरी सॅटेलाइटवर ४०% शेती चालू असल्याचे आढळले.",modelUsage:"विसंगती शोध (Anomaly Detection) इंजिन."},dash_priority_projects:{title:"उच्च प्राधान्य देखरेख यादी (Priority Monitored Projects)",short:"पोर्टफोलिओमधील सर्वाधिक गंभीर विलंब धोका असलेले शीर्ष प्रकल्प.",whatItMeans:"उच्चस्तरीय आढाव्यासाठी तयार केलेली थेट कृती यादी.",whyItMatters:"अधिकाऱ्यांचा वेळ वाचवून केवळ समस्याग्रस्त प्रकल्पांवर लक्ष केंद्रित करतो.",howToInterpret:"यादीतील पहिल्या ३ प्रकल्पांवर तात्काळ बैठक लावा.",example:"दिल्ली-अमृतसर कॉरिडॉर ८४.६% विलंबासह शीर्षस्थानी आहे.",modelUsage:"जोखीम आधारित सॉर्ट केलेले प्रोजेक्ट्स."},proj_directory_filter_sector:{title:"क्षेत्रानुसार फिल्टर (Sector Classification Filter)",short:"महामार्ग, रेल्वे, ऊर्जा किंवा सिंचन यासारख्या विशिष्ट क्षेत्रानुसार प्रकल्प पाहण्याची सुविधा.",whatItMeans:"विभागीय सचिवांना त्यांच्या विभागाचे प्रकल्प पाहण्यास मदत करतो.",whyItMatters:"विशिष्ट क्षेत्रातील अडचणी स्वतंत्रपणे सोडवता येतात.",howToInterpret:"ड्रॉपडाउनमधून इच्छित क्षेत्र निवडा.",example:"फक्त Railway निवडून सर्व रेल्वे प्रकल्पांचा आढावा घेणे.",modelUsage:"डेटा ग्रिड फिल्टर."},proj_directory_filter_risk:{title:"जोखीम स्तरानुसार फिल्टर (Risk Tier Filter)",short:"केवळ Critical, High किंवा Low स्तरातील प्रकल्प पाहण्यासाठीचा फिल्टर.",whatItMeans:"गंभीरतेनुसार प्रकल्पांची वर्गवारी करतो.",whyItMatters:"संकटग्रस्त प्रकल्पांवर तातडीने लक्ष केंद्रित करता येते.",howToInterpret:"Critical निवडून केवळ सर्वाधिक विलंबाचे प्रकल्प पहा.",example:"Critical फिल्टर लावून ७ धोक्यात असलेले प्रकल्प तपासणे.",modelUsage:"डेटा ग्रिड फिल्टर."},proj_col_stage:{title:"वैधानिक संपादन टप्पा (Statutory Acquisition Stage)",short:"प्रकल्प सध्या कोणत्या कायदेशीर टप्प्यात आहे (३ए, ३डी, निवाडा, ताबा).",whatItMeans:"महसुली कायद्यानुसार प्रकल्पाची सद्यस्थिती.",whyItMatters:"टप्प्यावरून कायदेशीर कालमर्यादा आणि पुढील आव्हाने समजतात.",howToInterpret:"निवाडा टप्प्यानंतर भरपाई वितरण सुरू होते, त्यानंतर प्रत्यक्ष ताबा मिळतो.",example:"कलम १९ घोषणा पूर्ण झाली आहे.",modelUsage:"प्रक्रियेचा टप्पा दर्शक."},proj_action_assess:{title:"थेट जोखीम मूल्यांकन (Instant Risk Assessment)",short:"प्रकल्पाचा सर्व ताजा डेटा थेट असेसमेंट कॉकपिटमध्ये उघडून पुनर्परीक्षण करतो.",whatItMeans:"प्रकल्पाच्या मूल्यांकनासाठी जलद शॉर्टकट.",whyItMatters:"एका क्लिकवर सद्यस्थितीचे ताजे प्रेडिक्शन काढता येते.",howToInterpret:"बटण दाबून त्वरित मॉडेल चालवा.",example:"प्रकल्प कॉकपिटमध्ये लोड होऊन जोखीम तपासली जाते.",modelUsage:"असेसमेंट दृश्याकडे नेव्हिगेशन."},proj_action_audit:{title:"सखोल तपासणी लेखापरीक्षण (Deep Audit Investigation)",short:"प्रकल्पाचे तपशीलवार ऑडिट पृष्ठ उघडून सर्व खाती, मोजणी आणि वैधानिक मुदतींचे परीक्षण करतो.",whatItMeans:"प्रकल्पाच्या आत जाऊन प्रत्येक सर्व्हे नंबर आणि एस्क्रो खात्याची तपासणी.",whyItMatters:"वरवर न दिसणाऱ्या सूक्ष्म अडचणी आणि विलंबाची मुळे शोधून काढतो.",howToInterpret:"सखोल तपासणी करण्यासाठी या बटणावर क्लिक करा.",example:"ऑडिट पृष्ठावर जाऊन ४५ प्रलंबित भूखंडांची यादी तपासणे.",modelUsage:"तपशीलवार ऑडिट दृश्याची लिंक."},detail_statutory_hash:{title:"वैधानिक अखंडता हॅश (Statutory Ledger Hash)",short:"अधिसूचना आणि महसूल नोंदींमध्ये छेडछाड रोखण्यासाठी तयार केलेला क्रिप्टोग्राफिक ब्लॉकचेन हॅश.",whatItMeans:"शासकीय दस्तऐवजांच्या सत्यतेची डिजिटल खात्री.",whyItMatters:"अवैध नोंदी किंवा फेरफार बदल रोखून न्यायालयीन पारदर्शकता राखतो.",howToInterpret:"हॅश जुळत असल्यास दस्तऐवज १००% मूळ आणि कायदेशीर आहेत.",example:"SHA-256: e8b4...d291 (अखंडित नोंद).",modelUsage:"ऑडिट लेजर अखंडता प्रणाली."},detail_model_inference:{title:"थेट मॉडेल निष्कर्ष (Live Model Inference)",short:"प्रकल्पाच्या अद्ययावत डेटावर आधारित मशीन लर्निंग इंजिनने काढलेला सर्वात ताजा धोका निष्कर्ष.",whatItMeans:"रिअल-टाइम एआय जोखीम गणना.",whyItMatters:"डेटा अपडेट होताच त्वरित नवीन जोखीम टक्केवारी समोर आणतो.",howToInterpret:"ताजी संभाव्यता आणि जोखीम वर्ग तपासा.",example:"७८.४% विलंब संभाव्यता (Tier-1 Critical).",modelUsage:"लाइव्ह मॉडेल प्रेडिक्शन."},detail_land_requisition:{title:"संपादित भूखंड व क्षेत्र (Requisitioned Land Parcels)",short:"प्रकल्पासाठी आवश्यक असलेले एकूण भूखंड आणि हेक्टर क्षेत्रफळ.",whatItMeans:"संपादनाची एकूण भौतिक व्याप्ती.",whyItMatters:"प्रत्येक भूखंडाची मोजणी पूर्ण झाल्याशिवाय प्रत्यक्ष ताबा घेता येत नाही.",howToInterpret:"एकूण भूखंडांपैकी किती शिल्लक आहेत ते पहा.",example:"४५० भूखंडांपैकी ४०५ भूखंड संपादित झाले आहेत.",modelUsage:"भौतिक प्रगती मेट्रिक."},detail_affected_landowners:{title:"बाधित शेतकरी खातेदार (Affected Landowners / Khatedars)",short:"ज्यांची नावे ७/१२ वर नोंदलेली आहेत आणि ज्यांना भरपाई मिळणे आवश्यक आहे असे खातेदार.",whatItMeans:"प्रकल्पात जमीन गेलेले एकूण शेतकरी कुटुंबप्रमुख.",whyItMatters:"सर्व खातेदारांची केवायसी आणि बँक खाती पडताळल्याशिवाय भरपाई जमा होत नाही.",howToInterpret:"पडताळणी झालेले खातेदार विरुद्ध प्रलंबित खातेदार तपासा.",example:"६२० पैकी ५४० खातेदारांना भरपाई मंजूर झाली.",modelUsage:"सामाजिक व आर्थिक व्याप्ती दर्शक."},detail_sanctioned_escrow:{title:"मंजूर भरपाई एस्क्रो निधी (Sanctioned DBT Compensation Escrow)",short:"शेतकऱ्यांना भरपाई देण्यासाठी बँक एस्क्रो खात्यात जमा करण्यात आलेला सुरक्षित निधी.",whatItMeans:"सक्षम प्राधिकाऱ्याच्या नावे बँकेत जमा असलेला अधिकृत भरपाई निधी.",whyItMatters:"निधी थेट एस्क्रो खात्यात असल्यामुळे शेतकऱ्यांना त्वरित डीबीटीद्वारे वाटप शक्य होते.",howToInterpret:"एस्क्रो खात्यातील शिल्लक तपासा; निधी संपल्यास तातडीने पुरवणी मागणी करावी.",example:"₹१४० कोटी एस्क्रो खात्यात उपलब्ध आहेत.",modelUsage:"आर्थिक सुरक्षितता दर्शक."},detail_cutoff_timeline:{title:"वैधानिक मुदत मर्यादा (Statutory Section 25 Lapsing Cutoff)",short:"कलम १९ अधिसूचनेनंतर १२ महिन्यांच्या आत निवाडा न झाल्यास संपादन रद्द होण्याची वैधानिक अंतिम मुदत.",whatItMeans:"कायद्याने ठरवून दिलेली अंतिम मुदत.",whyItMatters:"ही मुदत संपल्यास संपूर्ण भूसंपादन रद्द होते आणि सर्व प्रक्रिया सुरुवातीपासून करावी लागते; कोट्यवधींचे नुकसान होते.",howToInterpret:"मुदत संपण्यास ३ महिन्यांपेक्षा कमी वेळ राहिल्यास उच्चाधिकारी स्तरावर तातडीने निवाडा काढणे बंधनकारक आहे.",example:"कलम २५ नुसार अंतिम मुदत संपण्यास केवळ ६८ दिवस शिल्लक आहेत.",modelUsage:"वैधानिक मुदत समाप्ती जोखीम दर्शक."},detail_progress_gauges:{title:"प्रगती मापन दर्शक (Progress Metric Gauges)",short:"मोजणी, दस्तऐवजीकरण, भरपाई आणि ताबा या चार प्रमुख टप्प्यांचे टक्केवारी दर्शक.",whatItMeans:"चारही स्तंभांवरील प्रगतीचे दृश्य आलेख.",whyItMatters:"कोणत्या एका स्तंभात काम अडकले आहे हे त्वरित उघड करते.",howToInterpret:"सर्वात कमी टक्केवारी असलेला स्तंभ म्हणजे प्रगतीतील मुख्य अडथळा.",example:"दस्तऐवजीकरण ९०% पण प्रत्यक्ष ताबा फक्त ४५%.",modelUsage:"एकात्मिक प्रगती निर्देशांक."},detail_draft_dc_order:{title:"जिल्हाधिकारी मसुदा आदेश (Prototype Simulated DC Draft Order)",short:"प्रशासकीय कार्यक्षमता दाखवण्यासाठी प्रणालीने तयार केलेला नमुना मसुदा आदेश पूर्वावलोकन.",whatItMeans:"एआय जोखीम विश्लेषणानंतर अधिकाऱ्यांना कोणती कृती करावी हे दाखवणारा सिमुलेटेड मसुदा.",whyItMatters:"पूर्वानुमानाचे रूपांतर प्रत्यक्ष प्रशासकीय आदेशात कसे करता येते याचे प्रात्यक्षिक.",howToInterpret:"केवळ प्रोटोटाइप सिमुलेशन — अधिकृत जिल्हाधिकारी स्वाक्षरीशिवाय यास कोणताही कायदेशीर अधिकार नाही.",example:"संयुक्त मोजणी आणि डीबीटी वाटप वेगाने करण्याचे महसूल अधिकाऱ्यांना निर्देश देणारा मसुदा.",modelUsage:"प्रोटोटाइप प्रशासकीय सिमुलेशन सुविधा."},notif_severity:{title:"सूचना तीव्रता स्तर (Notification Urgency Level)",short:"आवश्यक असलेल्या प्रशासकीय प्रतिसादाची निकड दर्शवणारे वर्गीकरण.",whatItMeans:"गंभीर (Critical): तात्काळ लक्ष; उच्च (High): २४ तासांत आढावा; सामान्य: माहितीपर.",whyItMatters:"अत्यंत महत्त्वाच्या कायदेशीर मुदतींकडे लक्ष वेधून चेतावणींचा गोंधळ टाळतो.",howToInterpret:"लाल रंग तात्काळ कृती दर्शवतो; निळा रंग केवळ माहिती देतो.",example:"८४.६% विलंब धोक्यासाठी गंभीर (Critical) इशारा.",modelUsage:"सूचना प्राधान्य वर्गीकरण."},notif_categories:{title:"सूचना वर्ग (Notification Category)",short:"प्रणालीतील कार्यानुसार सूचनांचे केलेले वर्गीकरण (जोखीम, इंजिन, समन्वय, सिंक).",whatItMeans:"सूचना नेमकी कशाबद्दल आहे हे स्पष्ट करणारा वर्ग.",whyItMatters:"संबंधित अधिकाऱ्याला फक्त त्याच्या कामाच्या सूचना फिल्टर करण्यास मदत करतो.",howToInterpret:"जोखीम अलर्ट किंवा तांत्रिक सूचना स्वतंत्रपणे पाहण्यासाठी वापरा.",example:"जोखीम सूचना: कलम १९ मुदत संपत आहे.",modelUsage:"कार्यात्मक सूचना वर्गीकरण."},notif_unread_state:{title:"वाचन स्थिती (Read / Unread Notification Status)",short:"संबंधित अधिकाऱ्याने ही सूचना पाहिली आहे की नाही याची नोंद.",whatItMeans:"न वाचलेल्या सूचना ठळकपणे दिसतात आणि वरील घंटीच्या चिन्हावर संख्या वाढवतात.",whyItMatters:"दैनंदिन कामात महत्त्वाची सूचना दुर्लक्षित राहू नये याची खात्री करतो.",howToInterpret:"पाहिल्यानंतर चेकमार्कवर क्लिक करून वाचले म्हणून चिन्हांकित करा.",example:"नवीन बिल्ल्यासह दिसणारी न वाचलेली सूचना.",modelUsage:"वापरकर्ता सूचना ट्रॅकिंग."}},tts:{read:"ऐका",read_aloud:"मोठ्याने ऐका",read_aria:"मूल्यांकन मोठ्याने ऐका",pause:"थांबवा",resume:"पुढे सुरू ठेवा",stop:"बंद करा",stop_reading:"वाचन बंद करा",stop_aria:"वाचन थांबवा"},stages:{"Sec 19 Declaration":"कलम 19 घोषणा (Sec 19 Declaration)","Compensation Award":"भरपाई निवाडा (Compensation Award Sec 23)","Joint Survey 3A":"संयुक्त पाहणी 3A (Joint Survey 3A)",Notification:"प्राथमिक अधिसूचना (Notification Sec 11/3A)",Rehabilitation:"पुनर्वसन आणि पुनर्वसाहत (R&R)",Valuation:"जमीन व मालमत्ता मूल्यांकन (Valuation)",Survey:"भूकर व संयुक्त पाहणी (Survey)",Compensation:"भरपाई निश्चिती व एस्क्रो (Compensation)",Possession:"प्रत्यक्ष ताबा व आरओडब्ल्यू (Possession)"},factors:{documents_pending:"प्रलंबित कागदपत्रे (Documents Pending)",documents_required:"आवश्यक कागदपत्रे (Documents Required)",documentation_completion_pct:"कागदपत्र पूर्णता (Documentation Completion %)",compensation_pending_cases:"प्रलंबित भरपाई प्रकरणे (Compensation Pending Cases)",compensation_pending_amount:"प्रलंबित भरपाई रक्कम (Compensation Pending Amount)",compensation_total_amount:"एकूण भरपाई रक्कम (Compensation Total Amount)",compensation_completion_pct:"भरपाई पूर्णता प्रमाण (Compensation Completion %)",pending_objections:"प्रलंबित हरकती (Pending Objections)",active_legal_disputes:"सक्रिय कायदेशीर वाद (Active Legal Disputes)",ownership_disputes:"मालकी हक्क वाद (Ownership Disputes)",court_stay_cases:"न्यायालयीन स्थगिती प्रकरणे (Court Stay Cases)",approvals_pending:"प्रलंबित मंजुऱ्या (Approvals Pending)",overdue_approvals:"मुदत संपलेल्या मंजुऱ्या (Overdue Approvals)",avg_approval_delay_days:"सरासरी मंजुरी विलंब दिवस (Avg Approval Delay Days)",rr_pending_cases:"पुनर्वसन प्रलंबित प्रकरणे (R&R Pending Cases)",rr_completion_pct:"पुनर्वसन पूर्णता प्रमाण (R&R Completion %)",possession_pending_parcels:"ताबा प्रलंबित भूखंड (Possession Pending Parcels)",parcels_pending:"प्रलंबित भूखंड (Parcels Pending)",acquisition_progress_pct:"संपादन प्रगती (Acquisition Progress %)",acquisition_velocity_pct_per_30d:"संपादन वेग (Acquisition Velocity)",schedule_variance_days:"वेळापत्रक विचलन दिवस (Schedule Variance Days)",milestones_overdue:"मुदत संपलेले टप्पे (Milestones Overdue)",pending_stakeholder_actions:"प्रलंबित भागधारक कृती (Pending Stakeholder Actions)",avg_stakeholder_response_days:"सरासरी भागधारक प्रतिसाद दिवस (Avg Stakeholder Response Days)",stakeholder_responsiveness_score:"भागधारक प्रतिसादक्षमता गुण (Stakeholder Responsiveness Score)",complexity_score:"गुंतागुंत निर्देशांक (Complexity Score)",planned_duration_days:"नियोजित कालावधी दिवस (Planned Duration Days)",affected_families:"बाधित कुटुंबे (Affected Families)",total_parcels:"एकूण भूखंड (Total Parcels)",historical_avg_delay_days:"ऐतिहासिक सरासरी विलंब दिवस (Historical Avg Delay Days)",project_type_highway:"प्रकल्प प्रकार: महामार्ग (Highway)",project_type_railway:"प्रकल्प प्रकार: रेल्वे (Railway)",land_type_agricultural:"जमीन वर्गीकरण: शेतजमीन (Agricultural)",priority_critical:"प्राधान्य स्तर: अति-गंभीर (Critical)",priority_high:"प्राधान्य स्तर: उच्च (High)"},recommendations:{compensation_pending_cases:"न सुटलेल्या भरपाई प्रकरणांना प्राधान्य द्या आणि वाटप जलद करा.",compensation_pending_amount:"थकबाकी भरपाई निधीचे पुनरावलोकन करा आणि पेमेंटमधील अडचणी दूर करा.",compensation_total_amount:"एकूण मंजूर भरपाई वाटप आणि वितरण वेळापत्रकाचे पुनरावलोकन करा.",compensation_completion_pct:"अपूर्ण भरपाई प्रक्रियेचे पुनरावलोकन करा आणि उर्वरित प्रकरणांना प्राधान्य द्या.",pending_objections:"न सुटलेल्या हरकतींचे पुनरावलोकन करा आणि संपादनात अडथळा आणणाऱ्यांना प्राधान्य द्या.",active_legal_disputes:"न सुटलेले कायदेशीर वाद वरिष्ठ स्तरावर पाठवा आणि संपादनात अडथळा आणणारी प्रकरणे ओळखा.",ownership_disputes:"मालकी हक्क पडताळणी आणि वादग्रस्त शीर्षक निवारणाला प्राधान्य द्या.",court_stay_cases:"न्यायालयीन स्थगिती प्रकरणांचा स्वतंत्रपणे मागोवा घ्या आणि कायदेशीर निवारणाचा समन्वय साधा.",documents_pending:"प्रलंबित जमीन व मालकी हक्क कागदपत्रांच्या पडताळणीला प्राधान्य द्या.",documentation_completion_pct:"कागदपत्र पडताळणी जलद करा आणि गहाळ कागदपत्रांचे निवारण करा.",documents_required:"प्रकल्पाच्या कागदपत्रांच्या आवश्यकतांचे आणि पडताळणी कार्यभाराचे पुनरावलोकन करा.",approvals_pending:"जबाबदार प्राधिकरणाकडे प्रलंबित मंजुऱ्या त्वरित पाठवा.",overdue_approvals:"मुदत संपलेल्या मंजुऱ्या वरिष्ठ स्तरावर पाठवा आणि स्पष्ट निवारण मुदत निश्चित करा.",avg_approval_delay_days:"विलंबित मंजुरी कार्यप्रवाहाचे पुनरावलोकन करा आणि संबंधित प्राधिकरणांशी समन्वय साधा.",rr_pending_cases:"पुनर्वसन आणि पुनर्वसाहत (R&R) प्रकरणांना प्राधान्य द्या.",rr_completion_pct:"थकबाकी पुनर्वसन आणि पुनर्वसाहत कृतींना गती द्या.",possession_pending_parcels:"ताब्यात अडथळा आणणारे भूखंड ओळखा आणि त्यांच्या निवारणाला प्राधान्य द्या.",parcels_pending:"प्रलंबित संपादन भूखंड ओळखा आणि त्यांच्या वैयक्तिक अडचणी दूर करा.",acquisition_progress_pct:"नियोजित प्रकल्प वेळापत्रकानुसार संपादन प्रगतीचे पुनरावलोकन करा.",acquisition_velocity_pct_per_30d:"संथ संपादन वेगाची चौकशी करा आणि प्रक्रियेतील अलीकडील अडथळे ओळखा.",schedule_variance_days:"क्रिटिकल पाथचे पुनरावलोकन करा आणि मुदत संपलेले टप्पे पूर्ण करा.",milestones_overdue:"मुदत संपलेल्या टप्प्यांचे पुनरावलोकन करा आणि सुधारात्मक कृती नियुक्त करा.",pending_stakeholder_actions:"प्रलंबित भागधारक कृतींचा पाठपुरावा करा आणि प्रतिसाद मुदत निश्चित करा.",avg_stakeholder_response_days:"संथ भागधारक प्रतिसादांचा पाठपुरावा करा आणि निवारण मुदत निश्चित करा.",stakeholder_responsiveness_score:"भागधारक समन्वय आणि थकबाकी प्रतिसादांचे पुनरावलोकन करा.",complexity_score:"प्रकल्पाच्या एकूण गुंतागुंतीमुळे अधिक बारकाईने निरीक्षण लागू करा.",planned_duration_days:"प्रकल्प वेळापत्रक त्याच्या गुंतागुंतीचे पुरेसे प्रतिबिंब दर्शवते का याचे पुनरावलोकन करा.",affected_families:"बाधित कुटुंबांच्या संख्येचा विचार करून अतिरिक्त समन्वयाचा विचार करा.",total_parcels:"भूखंड-स्तरीय संपादन नियोजन आणि थकबाकी प्रकरणांचे पुनरावलोकन करा.",historical_avg_delay_days:"प्रकल्प जोखीम मूल्यांकनाचा भाग म्हणून या घटकाचे पुनरावलोकन करा.",project_type_highway:"महामार्ग कॉरिडॉरवरील रस्ते पायाभूत सुविधा संपादन अडचणींचे पुनरावलोकन करा.",project_type_railway:"रेषीय कॉरिडॉर मंजुरीसाठी रेल्वे अधिकाऱ्यांशी समन्वय साधा.",land_type_agricultural:"कलम 11 अंतर्गत पीक चक्र आणि शेतकरी सल्लामसलत वेळापत्रकाचे पुनरावलोकन करा.",priority_critical:"सर्वोच्च स्तरावरील प्रशासकीय देखरेख आणि जलद आंतर-विभागीय मंजुऱ्या लागू करा.",priority_high:"वैधानिक अडथळे दूर करण्यासाठी द्विसाप्ताहिक आढावा बैठका घ्या.",default:"प्रकल्प जोखीम मूल्यांकनाचा भाग म्हणून या घटकाचे पुनरावलोकन करा.",reducing_risk:"हा घटक सध्या अंदाजित विलंब जोखीम कमी करत आहे."},notifications:{title:"प्रणाली सूचना",unread:"न वाचलेले",allCaughtUp:"सर्व वाचले गेले आहेत",subtitle:"भूमी सखा द्वारे व्युत्पन्न केलेले ॲप्लिकेशन अलर्ट, अनुमान टप्पे आणि वैधानिक मर्यादा सूचना.",markAllRead:"सर्व वाचलेले म्हणून चिन्हांकित करा",resetDemoAlerts:"डेमो अलर्ट रीसेट करा",filterAll:"सर्व",filterUnread:"न वाचलेले",severity:"तीव्रता",categoriesLabel:"श्रेण्या",categories:{"Risk Alert":"धोका इशारा",Engine:"इंजिन","Officer Attention":"अधिकारी लक्ष",System:"प्रणाली"},readState:"वाचलेली स्थिती",noNotifications:"दर्शवण्यासाठी कोणत्याही सूचना नाहीत",noNotificationsDesc:"या फिल्टर अंतर्गत सध्या कोणत्याही सूचना नाहीत.",newTag:"नवीन",markAsUnread:"न वाचलेले म्हणून चिन्हांकित करा",markAsRead:"वाचलेले म्हणून चिन्हांकित करा",timestamps:{"15 mins ago":"15 मिनिटांपूर्वी","1 hour ago":"1 तासापूर्वी","3 hours ago":"3 तासांपूर्वी","Today, 09:30 AM":"आज, 09:30 AM"},items:{"notif-crit-1":{title:"सध्याच्या मूल्यांकनात गंभीर विलंब जोखीम आढळली",summary:"दिल्ली-अमृतसर एक्सप्रेसवे (Pkg 4) चे 84.6% विलंब संभाव्यतेसह मूल्यांकन केले गेले, ज्यासाठी तातडीने कलम 19 हस्तक्षेपाची आवश्यकता आहे.",actionLabel:"मूल्यांकन तपासा"},"notif-engine-2":{title:"बॅकएंड अंदाज इंजिन कनेक्ट केले आहे",summary:"थेट XGBoost अनुमानासाठी 76 इंजिनिअर केलेल्या भू-अभिलेख वैशिष्ट्यांसह FastAPI सेवा कनेक्ट केली आहे.",actionLabel:"डॅशबोर्ड पहा"},"notif-atten-3":{title:"मूल्यांकनात अधिकाऱ्यांच्या लक्ष देण्याची आवश्यकता असलेले घटक समाविष्ट आहेत",summary:"वेस्टर्न फ्रेट कॉरिडॉरमधील 18 उच्च अडथळ्यांच्या भूखंड प्रकरणांना दस्तऐवज अनुशेष पुनरावलोकनासाठी चिन्हांकित केले गेले.",actionLabel:"घटकांचे पुनरावलोकन करा"},"notif-stat-4":{title:"जोखीम मूल्यांकन पाइपलाइन सुरू केली",summary:"142 देखरेखीखालील पायाभूत सुविधा कॉरिडॉरसह राष्ट्रीय भू-अभिलेख मॅट्रिक्स समक्रमित केले.",actionLabel:"प्रकल्प निर्देशिका"}}}},we="bhoomi_language",J={en:{code:"en",label:"English",nativeLabel:"English"},hi:{code:"hi",label:"Hindi",nativeLabel:"हिंदी"},mr:{code:"mr",label:"Marathi",nativeLabel:"मराठी"}},_e={en:ze,hi:He,mr:Fe};class Ge{constructor(){this.currentLanguage=this.getStoredLanguage(),this.listeners=[],typeof document<"u"&&document.documentElement&&document.documentElement.setAttribute("lang",this.currentLanguage)}getStoredLanguage(){try{const a=localStorage.getItem(we);if(a&&J[a])return a}catch{}return"en"}setLanguage(a){if(J[a]){this.currentLanguage=a;try{typeof localStorage<"u"&&localStorage.setItem(we,a)}catch(s){console.warn("Could not persist language to localStorage:",s)}typeof document<"u"&&document.documentElement&&document.documentElement.setAttribute("lang",a),this.notifyListeners()}}getLanguage(){return this.currentLanguage}getLanguageMeta(){return J[this.currentLanguage]||J.en}t(a,s=""){const n=a.split(".");let i=_e[this.currentLanguage],r=!0;for(const p of n)if(i&&i[p]!==void 0)i=i[p];else{r=!1;break}if(r&&typeof i=="string")return i;let l=_e.en,o=!0;for(const p of n)if(l&&l[p]!==void 0)l=l[p];else{o=!1;break}return o&&typeof l=="string"?l:s||a}subscribe(a){return this.listeners.push(a),()=>{this.listeners=this.listeners.filter(s=>s!==a)}}notifyListeners(){this.listeners.forEach(a=>a(this.currentLanguage))}}const P=new Ge,e=(t,a)=>P.t(t,a);function Ve(t){return typeof t!="number"||isNaN(t)?0:t>1?t/100:Math.max(0,t)}function $(t){const a=Ve(t);return a>=.8?"CRITICAL":a>=.6?"HIGH":a>=.4?"MEDIUM":"LOW"}function We(t){switch(typeof t=="string"?t.toUpperCase():$(t)){case"CRITICAL":return e("risk.criticalWording","Critical predicted delay risk");case"HIGH":return e("risk.highWording","High predicted delay risk");case"MEDIUM":return e("risk.mediumWording","Moderate predicted delay risk");case"LOW":default:return e("risk.lowWording","Low predicted delay risk")}}function re(t){switch(typeof t=="string"?t.toUpperCase():$(t)){case"CRITICAL":return e("risk.criticalSummary","Critical predicted delay risk based on the current project snapshot.");case"HIGH":return e("risk.highSummary","High predicted delay risk based on the current project snapshot.");case"MEDIUM":return e("risk.mediumSummary","Moderate predicted delay risk based on the current project snapshot.");case"LOW":default:return e("risk.lowSummary","Low predicted delay risk based on the current project snapshot.")}}function Ke(t){switch(typeof t=="string"?t.toUpperCase():$(t)){case"CRITICAL":return e("risk.criticalThreshold","Risk Level: CRITICAL (Threshold ≥ 80%)");case"HIGH":return e("risk.highThreshold","Risk Level: HIGH (Threshold: 60% – 79.9%)");case"MEDIUM":return e("risk.mediumThreshold","Risk Level: MEDIUM (Threshold: 40% – 59.9%)");case"LOW":default:return e("risk.lowThreshold","Risk Level: LOW (Threshold < 40%)")}}function D(t){switch(typeof t=="string"?t.toUpperCase():$(t)){case"CRITICAL":return e("risk.critical","CRITICAL");case"HIGH":return e("risk.high","HIGH");case"MEDIUM":return e("risk.medium","MEDIUM");case"LOW":default:return e("risk.low","LOW")}}function pe(t){switch(typeof t=="string"?t.toUpperCase():$(t)){case"CRITICAL":return"bg-red-100 text-red-900 border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800";case"HIGH":return"bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800";case"MEDIUM":return"bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800";case"LOW":default:return"bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800"}}function Y(t){switch(typeof t=="string"?t.toUpperCase():$(t)){case"CRITICAL":return"text-red-600 dark:text-red-400";case"HIGH":return"text-orange-600 dark:text-orange-400";case"MEDIUM":return"text-amber-600 dark:text-amber-400";case"LOW":default:return"text-emerald-600 dark:text-emerald-400"}}function Xe(t){switch(typeof t=="string"?t.toUpperCase():$(t)){case"CRITICAL":return"text-red-600 dark:text-red-500";case"HIGH":return"text-orange-500 dark:text-orange-400";case"MEDIUM":return"text-amber-500 dark:text-amber-400";case"LOW":default:return"text-emerald-500 dark:text-emerald-400"}}class Ye{constructor(){this.supported=typeof window<"u"&&"speechSynthesis"in window,this.voices=[],this.currentUtterance=null,this.state="idle",this.activeListener=null,this.supported&&(this.loadVoices(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=()=>this.loadVoices()))}loadVoices(){this.supported&&(this.voices=window.speechSynthesis.getVoices())}getBestVoice(a=null){(!this.voices||this.voices.length===0)&&this.loadVoices();const s=(a||P.getLanguage()).toLowerCase(),i={en:["en-IN","en-GB","en-US","en"],hi:["hi-IN","hi"],mr:["mr-IN","mr","hi-IN"]}[s]||[s];for(const r of i){const l=this.voices.find(o=>{const p=o.lang.toLowerCase().replace("_","-");return p===r.toLowerCase()||p.startsWith(r.toLowerCase())});if(l)return l}return this.voices[0]||null}speak(a,s=null,n=null){if(!this.supported)return console.warn("Speech synthesis is not supported in this browser environment."),!1;if(!a||typeof a!="string")return!1;this.stop();const i=s||P.getLanguage();this.activeListener=n;const r=new SpeechSynthesisUtterance(a),l=this.getBestVoice(i),o={en:"en-IN",hi:"hi-IN",mr:"mr-IN"};return r.lang=(l==null?void 0:l.lang)||o[i]||"en-IN",l&&(r.voice=l),r.rate=.95,r.pitch=1,r.onstart=()=>{this.state="speaking",this.activeListener&&this.activeListener("speaking")},r.onpause=()=>{this.state="paused",this.activeListener&&this.activeListener("paused")},r.onresume=()=>{this.state="speaking",this.activeListener&&this.activeListener("speaking")},r.onend=()=>{this.state="idle",this.currentUtterance=null,this.activeListener&&this.activeListener("idle")},r.onerror=p=>{console.warn("SpeechSynthesis error:",p),this.state="idle",this.currentUtterance=null,this.activeListener&&this.activeListener("idle")},this.currentUtterance=r,window.speechSynthesis.speak(r),!0}pause(){this.supported&&this.state==="speaking"&&(window.speechSynthesis.pause(),this.state="paused",this.activeListener&&this.activeListener("paused"))}resume(){this.supported&&this.state==="paused"&&(window.speechSynthesis.resume(),this.state="speaking",this.activeListener&&this.activeListener("speaking"))}stop(){this.supported&&(window.speechSynthesis.cancel(),this.state="idle",this.currentUtterance=null,this.activeListener&&this.activeListener("idle"))}toggle(a,s=null,n=null){this.state==="speaking"?this.pause():this.state==="paused"?this.resume():this.speak(a,s,n)}}const N=new Ye;function ue(t,a){const s=document.createElement("div");s.className="inline-flex items-center gap-1";const n=document.createElement("button");n.type="button",n.className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-xs font-semibold flex items-center gap-1 transition-all border border-outline-variant/30 shadow-sm",n.setAttribute("aria-label",e("tts.read_aria","Read assessment aloud")),n.title=e("tts.read_aloud","Read aloud"),n.innerHTML=`
    <span class="material-symbols-outlined text-[16px] text-secondary">volume_up</span>
    <span class="btn-label">${e("tts.read","Read")}</span>
  `;const i=document.createElement("button");i.type="button",i.className="hidden p-1 rounded bg-surface-container hover:bg-error/10 text-error font-label-sm text-xs transition-all border border-outline-variant/30",i.setAttribute("aria-label",e("tts.stop_aria","Stop reading aloud")),i.title=e("tts.stop_reading","Stop reading"),i.innerHTML='<span class="material-symbols-outlined text-[16px]">stop</span>',n.addEventListener("click",l=>{l.stopPropagation();const o=typeof t=="function"?t():t,p=typeof a=="function"?a():a||P.getLanguage();N.state==="speaking"?N.pause():N.state==="paused"?N.resume():N.speak(o,p,d=>{r(d)})}),i.addEventListener("click",l=>{l.stopPropagation(),N.stop(),r("idle")});function r(l){const o=n.querySelector(".btn-label"),p=n.querySelector(".material-symbols-outlined");l==="speaking"?(o&&(o.textContent=e("tts.pause","Pause")),p&&(p.textContent="pause"),n.classList.add("bg-secondary-fixed/40","ring-1","ring-secondary"),i.classList.remove("hidden")):l==="paused"?(o&&(o.textContent=e("tts.resume","Resume")),p&&(p.textContent="play_arrow"),n.classList.remove("bg-secondary-fixed/40","ring-1","ring-secondary"),i.classList.remove("hidden")):(o&&(o.textContent=e("tts.read","Read")),p&&(p.textContent="volume_up"),n.classList.remove("bg-secondary-fixed/40","ring-1","ring-secondary"),i.classList.add("hidden"))}return s.appendChild(n),s.appendChild(i),s}class Je{constructor(){const a=typeof window<"u"?window.SpeechRecognition||window.webkitSpeechRecognition:null;this.supported=!!a,this.recognition=a?new a:null,this.isListening=!1,this.activeCallbacks=null,this.recognition&&(this.recognition.continuous=!1,this.recognition.interimResults=!1,this.recognition.maxAlternatives=1,this.recognition.onstart=()=>{var s;this.isListening=!0,(s=this.activeCallbacks)!=null&&s.onStart&&this.activeCallbacks.onStart()},this.recognition.onresult=s=>{var i,r,l,o;const n=((l=(r=(i=s.results)==null?void 0:i[0])==null?void 0:r[0])==null?void 0:l.transcript)||"";(o=this.activeCallbacks)!=null&&o.onResult&&this.activeCallbacks.onResult(n)},this.recognition.onerror=s=>{var n;console.warn("SpeechRecognition error:",s.error),this.isListening=!1,(n=this.activeCallbacks)!=null&&n.onError&&this.activeCallbacks.onError(s.error)},this.recognition.onend=()=>{var s;this.isListening=!1,(s=this.activeCallbacks)!=null&&s.onEnd&&this.activeCallbacks.onEnd()})}start({onResult:a,onStart:s,onEnd:n,onError:i,langCode:r="en"}){if(!this.supported)return i&&i("not-supported"),!1;if(this.isListening)return this.stop(),!1;const l={en:"en-IN",hi:"hi-IN",mr:"mr-IN"};this.recognition.lang=l[r]||"en-IN",this.activeCallbacks={onResult:a,onStart:s,onEnd:n,onError:i};try{return this.recognition.start(),!0}catch(o){return console.warn("Could not start speech recognition:",o),this.isListening=!1,!1}}stop(){if(!(!this.supported||!this.isListening)){try{this.recognition.stop()}catch{}this.isListening=!1}}}const Q=new Je;function Le(t,a){if(!t)return null;const s=document.createElement("button");s.type="button",s.className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center",s.setAttribute("aria-label","Start voice input (Speak to Write)"),s.title="Speak to write",s.innerHTML=`
    <span class="material-symbols-outlined text-[16px] mic-icon">mic</span>
  `,s.addEventListener("click",i=>{if(i.preventDefault(),i.stopPropagation(),!Q.supported){alert("Speech recognition is not supported in this browser. Please use Chrome, Edge, or a Web Speech-enabled browser.");return}const r=typeof a=="function"?a():a||"en";if(Q.isListening){Q.stop(),n(!1);return}Q.start({langCode:r,onStart:()=>n(!0),onResult:l=>{if(l){const o=t.value.trim();t.value=o?`${o} ${l}`:l,t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.focus()}},onEnd:()=>n(!1),onError:l=>{console.warn("Voice input ended with error:",l),n(!1)}})});function n(i){const r=s.querySelector(".mic-icon");i?(s.classList.add("text-error","animate-pulse"),s.setAttribute("aria-label","Listening... click to stop voice input"),s.title="Listening... (Speak now)",r&&(r.textContent="mic_active")):(s.classList.remove("text-error","animate-pulse"),s.setAttribute("aria-label","Start voice input (Speak to Write)"),s.title="Speak to write",r&&(r.textContent="mic"))}return s}const g={INPUT_FEATURE:"input_feature",DROPDOWN_OPTION:"dropdown_option",GOVERNANCE_METRIC:"governance_metric",MODEL_OUTPUT:"model_output",STATUTORY_CONTROL:"statutory_control",SYSTEM_STATUS:"system_status"},Qe={project_type:{category:g.INPUT_FEATURE,modelUsageType:"Categorical input feature for XGBoost inference (one-hot encoded)."},opt_project_type_highway:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for project_type."},opt_project_type_railway:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for project_type."},opt_project_type_industrial:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for project_type."},opt_project_type_metro:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for project_type."},opt_project_type_irrigation:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for project_type."},opt_project_type_power:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for project_type."},opt_project_type_urban:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for project_type."},land_type:{category:g.INPUT_FEATURE,modelUsageType:"Categorical input feature for XGBoost inference (one-hot encoded)."},opt_land_type_agricultural:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for land_type."},opt_land_type_commercial:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for land_type."},opt_land_type_industrial:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for land_type."},opt_land_type_mixed:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for land_type."},opt_land_type_residential:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for land_type."},priority:{category:g.INPUT_FEATURE,modelUsageType:"Categorical input feature for administrative urgency tier."},opt_priority_normal:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for priority."},opt_priority_high:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for priority."},opt_priority_critical:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for priority."},current_stage:{category:g.INPUT_FEATURE,modelUsageType:"Categorical statutory milestone stage within RFCTLARR workflow."},opt_stage_notification:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for current_stage."},opt_stage_survey:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for current_stage."},opt_stage_valuation:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for current_stage."},opt_stage_compensation:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for current_stage."},opt_stage_possession:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for current_stage."},opt_stage_rehabilitation:{category:g.DROPDOWN_OPTION,modelUsageType:"Categorical level for current_stage."},complexity_score:{category:g.INPUT_FEATURE,modelUsageType:"Continuous numeric input feature (0.0 to 100.0)."},total_parcels:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature indicating total cadastral parcels required."},affected_families:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature measuring human resettlement footprint."},land_area_hectares:{category:g.INPUT_FEATURE,modelUsageType:"Continuous numeric input feature measuring land acquisition area."},planned_duration_days:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature defining baseline scheduled duration."},acquisition_progress_pct:{category:g.INPUT_FEATURE,modelUsageType:"Percentage input feature (0-100%) tracking completed land parcels."},acquisition_velocity_pct_per_30d:{category:g.INPUT_FEATURE,modelUsageType:"Calculated velocity metric measuring pace of parcel acquisitions per month."},parcels_pending:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature tracking remaining un-acquired parcels."},possession_pending_parcels:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature tracking parcels where physical handover is pending."},documents_required:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature indicating total statutory documents required."},documents_pending:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature tracking unverified ownership/title records."},documentation_completion_pct:{category:g.INPUT_FEATURE,modelUsageType:"Calculated ratio feature ((verified / required) * 100)."},compensation_pending_cases:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature tracking unresolved compensation files."},compensation_pending_amount:{category:g.INPUT_FEATURE,modelUsageType:"Continuous numeric feature representing escrow balance in Crores INR."},compensation_completion_pct:{category:g.INPUT_FEATURE,modelUsageType:"Percentage input feature tracking Direct Benefit Transfer payouts."},avg_compensation_delay_days:{category:g.INPUT_FEATURE,modelUsageType:"Continuous numeric feature measuring average compensation award turnaround latency."},approvals_pending:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature tracking pending inter-agency statutory permissions."},overdue_approvals:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature tracking clearances past legal response deadlines."},avg_approval_delay_days:{category:g.INPUT_FEATURE,modelUsageType:"Continuous numeric feature representing average statutory approval latency."},pending_objections:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature tracking Section 15 landowner objection petitions."},active_legal_disputes:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature counting active court petitions."},ownership_disputes:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature counting conflicting title claims between co-heirs."},court_stay_cases:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature counting active judicial stay orders on project parcels."},rr_pending_cases:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature tracking pending rehabilitation entitlements."},rr_completion_pct:{category:g.INPUT_FEATURE,modelUsageType:"Percentage input feature tracking completed resettlement benefits."},schedule_variance_days:{category:g.INPUT_FEATURE,modelUsageType:"Continuous numeric feature measuring variance against baseline master schedule."},milestones_overdue:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature counting missed statutory gateway milestones."},pending_stakeholder_actions:{category:g.INPUT_FEATURE,modelUsageType:"Integer input feature counting outstanding actions across utility/state bodies."},avg_stakeholder_response_days:{category:g.INPUT_FEATURE,modelUsageType:"Continuous numeric feature measuring external agency turnaround time."},stakeholder_responsiveness_score:{category:g.INPUT_FEATURE,modelUsageType:"Continuous numeric rating (0 to 10) evaluating inter-agency coordination velocity."},historical_avg_delay_days:{category:g.INPUT_FEATURE,modelUsageType:"Continuous numeric feature representing historical delay priors for the district/sector."},delay_probability:{category:g.MODEL_OUTPUT,modelUsageType:"Direct model output probability score from XGBoost binary classifier (0.0% to 100.0%)."},risk_level:{category:g.MODEL_OUTPUT,modelUsageType:"Categorical risk classification derived from model probability score."},risk_thresholds:{category:g.GOVERNANCE_METRIC,modelUsageType:"Calibrated administrative policy thresholds: LOW (<40%), MEDIUM (40-60%), HIGH (60-80%), CRITICAL (≥80%)."},model_confidence:{category:g.MODEL_OUTPUT,modelUsageType:"Empirical model validation metric based on cross-validation on 3,000,000 national records."},risk_drivers_increasing:{category:g.MODEL_OUTPUT,modelUsageType:"Feature contributions with positive sign (+Δ) that elevate predicted delay risk."},risk_drivers_reducing:{category:g.MODEL_OUTPUT,modelUsageType:"Feature contributions with negative sign (-Δ) that dampen predicted delay risk."},statutory_directives:{category:g.STATUTORY_CONTROL,modelUsageType:"Actionable policy directives generated based on top risk contributors."},methodology_evaluation:{category:g.SYSTEM_STATUS,modelUsageType:"Model architecture details: XGBoost with 76 engineered features, evaluated with 71.05% accuracy and 0.7805 ROC-AUC."},mode_select_project:{category:g.STATUTORY_CONTROL,modelUsageType:"UI control to load existing vetted infrastructure corridor telemetry."},mode_test_scenario:{category:g.STATUTORY_CONTROL,modelUsageType:"UI control to manually configure custom simulation scenarios for sensitivity testing."},statutory_presets:{category:g.STATUTORY_CONTROL,modelUsageType:"Pre-calibrated empirical project benchmarks representing real-world project risk archetypes."},assess_project_risk:{category:g.STATUTORY_CONTROL,modelUsageType:"Executes POST /predict inference call against the FastAPI backend XGBoost model."},reset_values:{category:g.STATUTORY_CONTROL,modelUsageType:"Restores all form fields to active scenario preset baseline values."},retry_assessment:{category:g.STATUTORY_CONTROL,modelUsageType:"Retries the model prediction request if network or service error occurred."},read_aloud:{category:g.STATUTORY_CONTROL,modelUsageType:"Browser-native speech synthesis speaking visible content in active language voice."},dash_total_projects:{category:g.GOVERNANCE_METRIC,modelUsageType:"Aggregate portfolio volume monitored under National Infrastructure Pipeline."},dash_high_critical:{category:g.GOVERNANCE_METRIC,modelUsageType:"Sum of monitored corridors falling in HIGH (60-80%) or CRITICAL (≥80%) delay probability tiers."},dash_intervention:{category:g.GOVERNANCE_METRIC,modelUsageType:"Projects flagged with severe document backlogs, court stays, or escrow bottlenecks."},dash_avg_risk:{category:g.GOVERNANCE_METRIC,modelUsageType:"Portfolio-wide arithmetic mean of predicted delay probability."},dash_risk_distribution:{category:g.GOVERNANCE_METRIC,modelUsageType:"Proportional breakdown of all active projects across the 4 risk tiers."},dash_key_drivers:{category:g.GOVERNANCE_METRIC,modelUsageType:"Portfolio-wide root-cause cluster frequencies identified by model tree contributions."},dash_triangulation_alert:{category:g.MODEL_OUTPUT,modelUsageType:"Predictive correlation alert generated from cross-project pattern analysis."},dash_priority_projects:{category:g.GOVERNANCE_METRIC,modelUsageType:"Sorted administrative oversight table prioritizing corridors by delay probability."},proj_directory_filter_sector:{category:g.STATUTORY_CONTROL,modelUsageType:"Interactive filter to segment national corridors by infrastructure domain."},proj_directory_filter_risk:{category:g.STATUTORY_CONTROL,modelUsageType:"Interactive filter to view corridors by predicted delay risk tier."},proj_col_stage:{category:g.GOVERNANCE_METRIC,modelUsageType:"Statutory milestone under the Right to Fair Compensation and Transparency in Land Acquisition Act."},proj_action_assess:{category:g.STATUTORY_CONTROL,modelUsageType:"Loads the selected project telemetry into the Assessment Cockpit for detailed re-evaluation."},proj_action_audit:{category:g.STATUTORY_CONTROL,modelUsageType:"Navigates to the comprehensive audit dossier and legal inspection screen."},detail_statutory_hash:{category:g.SYSTEM_STATUS,modelUsageType:"Cryptographic SHA-256 fingerprint guaranteeing tamper-evident audit record provenance."},detail_model_inference:{category:g.SYSTEM_STATUS,modelUsageType:"Indicates that displayed metrics are synchronized live with the XGBoost inference model."},detail_land_requisition:{category:g.GOVERNANCE_METRIC,modelUsageType:"Total land area gazetted for acquisition across all revenue villages."},detail_affected_landowners:{category:g.GOVERNANCE_METRIC,modelUsageType:"Total registered khata revenue accounts and pending mutation disputes."},detail_sanctioned_escrow:{category:g.GOVERNANCE_METRIC,modelUsageType:"Total sanctioned compensation budget and undisbursed escrow balance."},detail_cutoff_timeline:{category:g.STATUTORY_CONTROL,modelUsageType:"Monitors the strict 12-month statutory deadline between Section 11 and Section 19 notifications."},detail_progress_gauges:{category:g.GOVERNANCE_METRIC,modelUsageType:"Multi-domain operational gauges tracking survey, award, physical possession, and escrow disbursements."},detail_draft_dc_order:{category:g.STATUTORY_CONTROL,modelUsageType:"Prototype administrative memo preview generated for governance review; non-binding without executive signoff."},notif_severity:{category:g.SYSTEM_STATUS,modelUsageType:"Severity tier (Critical, High, Nominal) indicating urgency of required administrative review."},notif_categories:{category:g.SYSTEM_STATUS,modelUsageType:"Categorizes notifications by system origin: Risk Alert, Engine, Officer Attention, or System."},notif_unread_state:{category:g.STATUTORY_CONTROL,modelUsageType:"Indicates whether the notification has been reviewed by the land administration officer."}};function X(t){const a=Qe[t]||{category:g.INPUT_FEATURE,modelUsageType:"Used by the predictive model as an input feature."},s=e(`info.${t}.title`,t.replace(/_/g," ")),n=e(`info.${t}.short`,"Informational guidance for this item."),i=e(`info.${t}.whatItMeans`,n),r=e(`info.${t}.whyItMatters`,"Helps contextualize project risk and statutory adherence."),l=e(`info.${t}.howToInterpret`,"Review value against statutory targets and regional benchmarks."),o=e(`info.${t}.example`,"Standard infrastructure corridor telemetry."),p=e(`info.${t}.modelUsage`,a.modelUsageType),d=e(`infoCategories.${a.category}`,a.category.replace("_"," "));return{key:t,title:s,short:n,whatItMeans:i,whyItMatters:r,howToInterpret:l,example:o,modelUsage:p,category:a.category,categoryLabel:d}}let ie=null,V=null,oe=null;function h(t,a=""){const s=X(t),n=`${e("common.explain","Explain")}: ${s.title}`;return`
    <button type="button" 
      class="info-btn inline-flex items-center justify-center w-4 h-4 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary text-[11px] font-bold select-none cursor-pointer shrink-0 ${a}" 
      data-info-key="${t}" 
      aria-label="${n}" 
      title="${s.short}">
      <span aria-hidden="true">ⓘ</span>
    </button>
  `}function Ie(t,a){le();const s=X(a),n=document.createElement("div");n.id="bhoomiQuickTooltip",n.className="fixed z-50 max-w-xs sm:max-w-sm p-2.5 rounded-lg bg-surface-container-highest text-on-surface border border-outline-variant/60 shadow-xl text-xs pointer-events-none transition-opacity duration-150 flex flex-col gap-1",n.setAttribute("role","tooltip"),n.innerHTML=`
    <div class="flex items-center justify-between gap-2 border-b border-outline-variant/30 pb-1">
      <span class="font-bold text-primary font-label-sm truncate">${s.title}</span>
      <span class="text-[10px] uppercase font-semibold text-on-surface-variant">${s.categoryLabel}</span>
    </div>
    <p class="font-body-sm text-on-surface/90 leading-relaxed">${s.short}</p>
    <div class="pt-1 flex items-center gap-1 text-[10px] text-secondary font-medium">
      <span class="material-symbols-outlined text-[12px]">touch_app</span>
      <span>${e("common.clickForDetails","Click ⓘ for detailed explanation")}</span>
    </div>
  `,document.body.appendChild(n),ie=n;const i=t.getBoundingClientRect(),r=n.getBoundingClientRect();let l=i.top-r.height-8;l<10&&(l=i.bottom+8);let o=i.left+i.width/2-r.width/2;o<10&&(o=10),o+r.width>window.innerWidth-10&&(o=window.innerWidth-r.width-10),n.style.top=`${l}px`,n.style.left=`${o}px`}function le(){ie&&(ie.remove(),ie=null)}function ve(t,a=null){var d,c,u;le(),oe=t,V=a||document.activeElement;const s=X(t),n=document.getElementById("bhoomiInfoModal");n&&n.remove();const i=document.createElement("div");i.id="bhoomiInfoModal",i.className="fixed inset-0 z-50 flex items-center justify-center sm:justify-end p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-all duration-300",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-labelledby","infoModalTitle");const r=`${s.title}. ${s.whatItMeans} ${e("infoSections.whyItMatters","Why it matters")}: ${s.whyItMatters} ${e("infoSections.example","Example")}: ${s.example}`;i.innerHTML=`
    <div class="relative w-full sm:max-w-xl h-full sm:h-auto sm:max-h-[92vh] bg-surface-container-lowest text-on-surface rounded-none sm:rounded-2xl shadow-2xl border border-outline-variant/40 overflow-hidden flex flex-col transform transition-transform duration-300 translate-x-0">
      
      <!-- Drawer Header -->
      <div class="p-space-md sm:p-space-lg bg-surface-container-low border-b border-outline-variant/30 flex items-start justify-between gap-space-md shrink-0">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-primary-container text-on-primary">
              ${s.categoryLabel}
            </span>
            <span class="text-xs text-on-surface-variant font-mono">${t}</span>
          </div>
          <h2 id="infoModalTitle" class="font-headline-sm text-lg sm:text-headline-sm font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-secondary text-[22px]">info</span>
            <span>${s.title}</span>
          </h2>
        </div>
        <div class="flex items-center gap-1">
          <div id="modalReadAloudSlot"></div>
          <button id="closeInfoModalBtn" type="button" class="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary" aria-label="${e("common.close","Close")}">
            <span class="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
      </div>

      <!-- Drawer Body: Five Structured Sections -->
      <div class="p-space-md sm:p-space-lg overflow-y-auto space-y-space-md text-sm font-body">
        
        <!-- Section 1: What it means -->
        <div class="flex flex-col gap-1 bg-surface-container-low/50 p-3 rounded-lg border border-outline-variant/20">
          <span class="font-label-sm text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">menu_book</span>
            ${e("infoSections.whatItMeans","What It Means")}
          </span>
          <p class="font-body-sm text-on-surface text-sm leading-relaxed">${s.whatItMeans}</p>
        </div>

        <!-- Section 2: Why it matters -->
        <div class="flex flex-col gap-1 bg-surface-container-low/50 p-3 rounded-lg border border-outline-variant/20">
          <span class="font-label-sm text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">psychology_alt</span>
            ${e("infoSections.whyItMatters","Why It Matters")}
          </span>
          <p class="font-body-sm text-on-surface text-sm leading-relaxed">${s.whyItMatters}</p>
        </div>

        <!-- Section 3: How to interpret it -->
        <div class="flex flex-col gap-1 bg-surface-container-low/50 p-3 rounded-lg border border-outline-variant/20">
          <span class="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">query_stats</span>
            ${e("infoSections.howToInterpret","How to Interpret It")}
          </span>
          <p class="font-body-sm text-on-surface text-sm leading-relaxed">${s.howToInterpret}</p>
        </div>

        <!-- Section 4: Concrete Example -->
        <div class="flex flex-col gap-1 bg-surface-container-low/50 p-3 rounded-lg border border-outline-variant/20">
          <span class="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">lightbulb</span>
            ${e("infoSections.example","Concrete Example")}
          </span>
          <p class="font-body-sm text-on-surface text-sm leading-relaxed font-mono text-xs bg-surface-container-lowest p-2 rounded border border-outline-variant/20">${s.example}</p>
        </div>

        <!-- Section 5: Model & System Usage -->
        <div class="flex flex-col gap-1 bg-primary-container/10 p-3 rounded-lg border border-primary/20">
          <span class="font-label-sm text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">memory</span>
            ${e("infoSections.modelUsage","Bhoomi Sakha / Model Usage")}
          </span>
          <p class="font-body-sm text-on-surface text-xs leading-relaxed">${s.modelUsage}</p>
        </div>

      </div>

      <!-- Drawer Footer -->
      <div class="p-space-sm sm:p-space-md bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between shrink-0">
        <span class="text-xs text-on-surface-variant">${e("common.infoFooterNote","Bhoomi Sakha Institutional Guidance")}</span>
        <button id="closeInfoModalFooterBtn" type="button" class="px-space-md py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-surface-tint transition-colors font-medium">
          ${e("common.close","Close")}
        </button>
      </div>

    </div>
  `,document.body.appendChild(i);const l=i.querySelector("#modalReadAloudSlot");if(l){const f=ue(()=>r,()=>P.getLanguage());l.appendChild(f)}const o=()=>{oe=null,document.removeEventListener("keydown",p),i.remove(),V&&typeof V.focus=="function"&&V.focus()},p=f=>{if(f.key==="Escape"&&o(),f.key==="Tab"){const v=i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(v.length===0)return;const b=v[0],y=v[v.length-1];f.shiftKey&&document.activeElement===b?(f.preventDefault(),y.focus()):!f.shiftKey&&document.activeElement===y&&(f.preventDefault(),b.focus())}};document.addEventListener("keydown",p),i.addEventListener("click",f=>{f.target===i&&o()}),(d=i.querySelector("#closeInfoModalBtn"))==null||d.addEventListener("click",o),(c=i.querySelector("#closeInfoModalFooterBtn"))==null||c.addEventListener("click",o),(u=i.querySelector("#closeInfoModalBtn"))==null||u.focus()}function Ze(){document.addEventListener("mouseover",t=>{const a=t.target.closest("[data-info-key]");if(a){const s=a.getAttribute("data-info-key");Ie(a,s)}}),document.addEventListener("mouseout",t=>{t.target.closest("[data-info-key]")&&le()}),document.addEventListener("focusin",t=>{const a=t.target.closest("[data-info-key]");if(a){const s=a.getAttribute("data-info-key");Ie(a,s)}}),document.addEventListener("focusout",t=>{t.target.closest("[data-info-key]")&&le()}),document.addEventListener("click",t=>{const a=t.target.closest(".info-btn");if(a){t.preventDefault(),t.stopPropagation();const s=a.getAttribute("data-info-key");s&&ve(s,a)}}),P.subscribe(()=>{oe&&document.getElementById("bhoomiInfoModal")&&ve(oe,V)})}const et=()=>{const t=typeof import.meta<"u"?"http://127.0.0.1:8000":null;return typeof window<"u"&&!(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")?!t||t.includes("localhost")||t.includes("127.0.0.1")?"https://sih-26017-prototype.onrender.com":t:t||"http://127.0.0.1:8000"},De=et();class Z extends Error{constructor(a,s=null,n=null){super(a),this.name="ApiError",this.status=s,this.details=n}}async function G(t,a={}){const s=`${De}${t}`,n=new AbortController,i=setTimeout(()=>n.abort(),a.timeout||15e3),r={"Content-Type":"application/json",Accept:"application/json"},l=typeof window<"u"?localStorage.getItem("bs_token"):null;l&&(r.Authorization=`Bearer ${l}`);try{const o=await fetch(s,{...a,headers:{...r,...a.headers||{}},signal:n.signal});clearTimeout(i);const p=o.headers.get("content-type")||"";let d=null;if(p.includes("application/json")?d=await o.json():d=await o.text(),!o.ok){const c=d&&typeof d=="object"&&d.detail?d.detail:`Request failed with status ${o.status}`;throw new Z(c,o.status,d)}return d}catch(o){throw clearTimeout(i),o instanceof Z?o:o.name==="AbortError"?new Z("Request timed out while contacting Bhoomi Sakha prediction engine.",408):(console.debug(`[ApiClient] Network request failed for ${t}:`,o),new Z("Prediction service is temporarily unavailable. Please try again.",0,o))}}const k={baseUrl:De,get(t,a={}){return G(t,{...a,method:"GET"})},post(t,a,s={}){return G(t,{...s,method:"POST",body:JSON.stringify(a)})},patch(t,a,s={}){return G(t,{...s,method:"PATCH",body:JSON.stringify(a)})},put(t,a,s={}){return G(t,{...s,method:"PUT",body:JSON.stringify(a)})},delete(t,a={}){return G(t,{...a,method:"DELETE"})}},S={async createUser(t){return k.post("/api/users",t)},async getUser(t){return k.get(`/api/users/${encodeURIComponent(t)}`)},async createLand(t){return k.post("/api/lands",t)},async getLand(t){return k.get(`/api/lands/${encodeURIComponent(t)}`)},async getUserLands(t){return k.get(`/api/users/${encodeURIComponent(t)}/lands`)},async updateLand(t,a){return k.patch?k.patch(`/api/lands/${encodeURIComponent(t)}`,a):k.post(`/api/lands/${encodeURIComponent(t)}`,a)},async createCase(t){return k.post("/api/cases",t)},async getCase(t){return k.get(`/api/cases/${encodeURIComponent(t)}`)},async listCases(t={}){const a=new URLSearchParams;Object.entries(t).forEach(([n,i])=>{i!=null&&i!==""&&a.append(n,i)});const s=a.toString()?`?${a.toString()}`:"";return k.get(`/api/cases${s}`)},async getMetricsSummary(t=null){const a=t?`?officer_id=${encodeURIComponent(t)}`:"";return k.get(`/api/cases/metrics/summary${a}`)},async getUserCases(t){return k.get(`/api/users/${encodeURIComponent(t)}/cases`)},async getOfficerCases(t){return k.get(`/api/officers/${encodeURIComponent(t)}/cases`)},async assignCase(t,a){return k.post(`/api/cases/${encodeURIComponent(t)}/assign`,a)},async updateCaseStatus(t,a){return k.post(`/api/cases/${encodeURIComponent(t)}/status`,a)},async requestDocument(t,a){return k.post(`/api/cases/${encodeURIComponent(t)}/request-document`,a)},async verifyDocument(t,a,s){return k.post(`/api/cases/${encodeURIComponent(t)}/documents/${encodeURIComponent(a)}/verify`,s)},async createCaseEvent(t,a){return k.post(`/api/cases/${encodeURIComponent(t)}/events`,a)},async getCaseEvents(t){return k.get(`/api/cases/${encodeURIComponent(t)}/events`)},async createCaseDocument(t,a){return k.post(`/api/cases/${encodeURIComponent(t)}/documents`,a)},async getCaseDocuments(t){return k.get(`/api/cases/${encodeURIComponent(t)}/documents`)},async getUserNotifications(t){return k.get(`/api/users/${encodeURIComponent(t)}/notifications`)},async markNotificationRead(t){return k.post(`/api/notifications/${encodeURIComponent(t)}/read`,{})}};function tt(t,a,s){t.innerHTML=`
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
                  <div class="flex items-center gap-1">
                    <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">${e("dashboard.totalProjects","Total Projects Monitored")}</span>
                    ${h("dash_total_projects")}
                  </div>
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
                  <div class="flex items-center gap-1">
                    <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">${e("dashboard.highCriticalRisk","High / Critical Risk")}</span>
                    ${h("dash_high_critical")}
                  </div>
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
                  <div class="flex items-center gap-1">
                    <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">${e("dashboard.requiringIntervention","Requiring Intervention")}</span>
                    ${h("dash_intervention")}
                  </div>
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
                  <div class="flex items-center gap-1">
                    <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">${e("dashboard.avgDelayRisk","Average Delay Risk")}</span>
                    ${h("dash_avg_risk")}
                  </div>
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

          <!-- Case Intelligence & Citizen Grievance Matrix (Phase 14) -->
          <div class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-outline-variant/30 flex flex-col gap-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/20 pb-2.5">
              <div class="flex items-center gap-2">
                <span class="p-1.5 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                  <span class="material-symbols-outlined text-[18px]">gavel</span>
                </span>
                <div>
                  <h3 class="font-headline-sm text-sm sm:text-base font-bold text-on-surface">${e("dashboard.caseMatrixTitle","Citizen Grievance & Case Intelligence Matrix")}</h3>
                  <span class="text-xs text-on-surface-variant">${e("dashboard.caseMatrixSub","Shared persistence layer bridging citizen grievances, document requests, and officer intervention")}</span>
                </div>
              </div>
              <a href="#/cases" class="px-3 py-1.5 bg-primary text-on-primary text-xs font-semibold rounded-lg hover:opacity-95 flex items-center gap-1 self-start sm:self-auto transition-all shadow-xs">
                <span>${e("dashboard.openCaseQueue","Open Case Queue")}</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1">
              <div class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3">
                <span class="text-[10px] font-bold text-on-surface-variant uppercase block">Total Cases</span>
                <div class="text-xl font-bold font-tabular-data text-on-surface mt-0.5" id="dashMetricTotal">-</div>
              </div>
              <div class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3">
                <span class="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase block">New Grievances</span>
                <div class="text-xl font-bold font-tabular-data text-blue-700 dark:text-blue-300 mt-0.5" id="dashMetricNew">-</div>
              </div>
              <div class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3">
                <span class="text-[10px] font-bold text-error uppercase block">High Risk (AI)</span>
                <div class="text-xl font-bold font-tabular-data text-error mt-0.5" id="dashMetricHighRisk">-</div>
              </div>
              <div class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3">
                <span class="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase block">Docs Required</span>
                <div class="text-xl font-bold font-tabular-data text-amber-700 dark:text-amber-300 mt-0.5" id="dashMetricDocs">-</div>
              </div>
              <div class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3">
                <span class="text-[10px] font-bold text-purple-700 dark:text-purple-300 uppercase block">Escalated</span>
                <div class="text-xl font-bold font-tabular-data text-purple-700 dark:text-purple-300 mt-0.5" id="dashMetricEscalated">-</div>
              </div>
              <div class="bg-surface-container-low border border-outline-variant/40 rounded-lg p-3">
                <span class="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase block">Resolved</span>
                <div class="text-xl font-bold font-tabular-data text-emerald-700 dark:text-emerald-300 mt-0.5" id="dashMetricResolved">-</div>
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
                    <div class="flex items-center gap-1.5">
                      <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">${e("dashboard.riskOverview","Risk Overview & Distribution")}</h3>
                      ${h("dash_risk_distribution")}
                    </div>
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
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">${D("CRITICAL")}</span>
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
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">${D("HIGH")}</span>
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
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">${D("MEDIUM")}</span>
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
                      <span class="font-label-sm text-label-sm font-bold text-on-surface">${D("LOW")}</span>
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
                    <div class="flex items-center gap-1.5">
                      <span class="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">${e("dashboard.keyRiskDrivers","Key Risk Drivers")}</span>
                      ${h("dash_key_drivers")}
                    </div>
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
                    ${h("dash_triangulation_alert")}
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
                    <div class="flex items-center gap-1.5">
                      <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                        ${e("dashboard.priorityProjects","Priority Projects Requiring Administrative Oversight")}
                      </h3>
                      ${h("dash_priority_projects")}
                    </div>
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
                      ${ke(K)}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  `;const n=t.querySelector("#projectSearchInput"),i=t.querySelector("#projectsTableBody");if(n&&i){n.addEventListener("input",u=>{const f=u.target.value.toLowerCase().trim(),v=K.filter(b=>b.id.toLowerCase().includes(f)||b.name.toLowerCase().includes(f)||b.district.toLowerCase().includes(f)||b.state.toLowerCase().includes(f));i.innerHTML=ke(v),Ce(t,a,s)});const c=t.querySelector("#dashboardSearchMicSlot");if(c){const u=Le(n,()=>P.getLanguage());u&&c.appendChild(u)}}const r=t.querySelector("#alertReadAloudSlot"),l=t.querySelector("#triangulationAlertText");if(r&&l){const c=ue(()=>`${e("dashboard.predictiveTriangulationAlert","Predictive Triangulation Alert")}: ${l.textContent.trim()}`,()=>P.getLanguage());r.appendChild(c)}const o=t.querySelector("#openAssessmentCtaBtn"),p=t.querySelector("#jumpToAssessmentBtn"),d=t.querySelector("#nationalScanBtn");o&&a&&o.addEventListener("click",()=>a("medium")),p&&a&&p.addEventListener("click",()=>a("high")),d&&d.addEventListener("click",()=>{alert(e("dashboard.scanCompleted","National Scan Completed: 29 High/Critical risks identified."))}),S.getMetricsSummary().then(c=>{const u=(f,v)=>{const b=t.querySelector(f);b&&(b.textContent=v!==void 0?v:"0")};u("#dashMetricTotal",c.total_cases),u("#dashMetricNew",c.new_cases),u("#dashMetricHighRisk",c.high_risk),u("#dashMetricDocs",c.documents_required),u("#dashMetricEscalated",c.escalated),u("#dashMetricResolved",c.resolved)}).catch(c=>{console.warn("Could not load case metrics:",c)}),Ce(t,a,s)}function ke(t){return t.length===0?`<tr><td colspan="7" class="text-center py-4 text-on-surface-variant">${e("dashboard.noMatchingProjects","No matching projects found.")}</td></tr>`:t.map(a=>{const s=a.riskLevel||$(a.delayProbability),n=D(s);return`
    <tr class="hover:bg-surface-container-low/70 transition-colors group">
      <td class="py-space-sm px-space-sm font-tabular-data font-bold text-on-surface">
        ${a.id}
      </td>
      <td class="py-space-sm px-space-sm">
        <div class="flex flex-col">
          <span class="font-semibold text-on-surface">${a.name}</span>
          <span class="text-on-surface-variant font-label-sm text-label-sm">${a.sector}</span>
        </div>
      </td>
      <td class="py-space-sm px-space-sm text-on-surface-variant">
        ${a.district}, ${a.state}
      </td>
      <td class="py-space-sm px-space-sm font-tabular-data">
        <div class="flex items-center gap-space-xs">
          <span class="font-medium text-on-surface">${a.progressPct}%</span>
          <div class="w-12 h-1.5 rounded-full bg-surface-container-high overflow-hidden">
            <div class="h-full bg-on-surface" style="width: ${a.progressPct}%"></div>
          </div>
        </div>
      </td>
      <td class="py-space-sm px-space-sm font-tabular-data font-bold ${Y(s)}">
        ${a.delayProbability}%
      </td>
      <td class="py-space-sm px-space-sm">
        <span class="px-2 py-0.5 rounded-full ${pe(s)} font-label-sm text-label-sm font-bold inline-flex items-center gap-1 border">
          <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
          ${n}
        </span>
      </td>
      <td class="py-space-sm px-space-sm text-right">
        <div class="inline-flex items-center gap-1">
          <button class="assess-project-btn px-space-xs py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded hover:bg-surface-tint transition-colors font-semibold" data-preset="${a.presetKey||"medium"}" type="button">
            ${e("dashboard.assessBtn","Assess")}
          </button>
          <button class="audit-project-btn px-space-xs py-1 bg-surface-container text-on-surface font-label-sm text-label-sm rounded hover:bg-surface-container-high transition-colors font-medium" data-id="${a.id}" type="button">
            ${e("dashboard.auditBtn","Audit")}
          </button>
        </div>
      </td>
    </tr>
  `}).join("")}function Ce(t,a,s){t.querySelectorAll(".assess-project-btn").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-preset")||"medium";a&&a(i)})}),t.querySelectorAll(".audit-project-btn").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-id");s&&s(i)})})}const ce={async checkHealth(){try{const t=await k.get("/health",{timeout:4e3});return{online:t.status==="healthy",modelLoaded:!!t.model_loaded,featureCount:t.features||76,raw:t}}catch(t){return{online:!1,modelLoaded:!1,featureCount:0,error:t.message}}},async getMetadata(){return k.get("/meta")},async predictRisk(t){return k.post("/predict",t)}};function ee({id:t,value:a,options:s,onChange:n=null}){const i=document.createElement("div");i.className="custom-select-container relative w-full",i.setAttribute("data-select-id",t);let r=a||(s[0]?s[0].value:""),l=s.findIndex(m=>m.value===r);l===-1&&(l=0);let o=!1;const p=document.createElement("input");p.type="hidden",p.id=t,p.value=r;const d=document.createElement("button");d.type="button",d.id=`${t}_trigger`,d.className="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface flex items-center justify-between gap-1 border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-left",d.setAttribute("role","combobox"),d.setAttribute("aria-haspopup","listbox"),d.setAttribute("aria-expanded","false"),d.setAttribute("aria-controls",`${t}_listbox`);const c=document.createElement("div");c.id=`${t}_listbox`,c.className="hidden absolute top-full left-0 right-0 mt-1 bg-surface-container-lowest border border-outline-variant/50 rounded-lg shadow-2xl py-1 z-40 flex flex-col text-on-surface font-label-sm text-xs max-h-72 overflow-hidden",c.setAttribute("role","listbox"),c.setAttribute("tabindex","-1");const u=document.createElement("div");u.className="overflow-y-auto max-h-48 py-1 divide-y divide-surface-container/40";const f=document.createElement("div");f.className="p-2 bg-surface-container-low border-t border-outline-variant/30 text-[11px] text-on-surface-variant flex flex-col gap-0.5 shrink-0",f.innerHTML=`
    <span class="font-bold text-on-surface explainer-title"></span>
    <span class="explainer-desc text-on-surface/80"></span>
  `,c.appendChild(u),c.appendChild(f);function v(m){if(m.labelKey){const I=e(m.labelKey);if(I&&I!==m.labelKey)return I}if(m.infoKey){const I=X(m.infoKey);if(I&&I.title)return I.title}return m.value}function b(){const m=s.find(R=>R.value===r)||s[0],I=m?v(m):r;d.innerHTML=`
      <span class="truncate font-medium">${I}</span>
      <span class="material-symbols-outlined text-[16px] text-on-surface-variant shrink-0 select-arrow">arrow_drop_down</span>
    `}function y(m){if(!m)return;const I=X(m.infoKey),R=f.querySelector(".explainer-title"),M=f.querySelector(".explainer-desc");R&&(R.textContent=`${I.title} (${m.value})`),M&&(M.textContent=I.short)}function w(){u.innerHTML="",s.forEach((m,I)=>{const R=m.value===r,M=I===l,A=document.createElement("div");A.className=`custom-opt-item px-space-sm py-2 flex items-center justify-between gap-2 cursor-pointer transition-colors ${R?"bg-primary-container/20 font-bold text-primary":"hover:bg-surface-container-low text-on-surface"} ${M?"ring-1 ring-primary/40 bg-surface-container":""}`,A.setAttribute("role","option"),A.setAttribute("id",`${t}_opt_${I}`),A.setAttribute("aria-selected",R?"true":"false"),A.setAttribute("data-value",m.value),A.setAttribute("data-index",I);const F=v(m);A.innerHTML=`
        <div class="flex items-center gap-2 truncate">
          <span class="material-symbols-outlined text-[14px] ${R?"text-primary":"text-transparent"}">check</span>
          <span class="truncate">${F}</span>
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <button type="button" 
            class="opt-info-btn w-4 h-4 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container flex items-center justify-center text-[10px] font-bold transition-colors" 
            data-info-key="${m.infoKey}" 
            title="${e("common.explain","Explain")}: ${F}" 
            aria-label="${e("common.explain","Explain")}: ${F}">
            ⓘ
          </button>
        </div>
      `,A.addEventListener("mouseenter",()=>{l=I,_(),y(m)}),A.addEventListener("click",me=>{if(me.target.closest(".opt-info-btn")){me.stopPropagation(),ve(m.infoKey,me.target.closest(".opt-info-btn"));return}T(m.value),x()}),u.appendChild(A)})}function _(){u.querySelectorAll(".custom-opt-item").forEach((I,R)=>{R===l?(I.classList.add("bg-surface-container","ring-1","ring-primary/40"),I.scrollIntoView({block:"nearest"})):I.classList.remove("bg-surface-container","ring-1","ring-primary/40")}),s[l]&&y(s[l])}function T(m){r=m,p.value=m,l=s.findIndex(I=>I.value===m),b(),w(),typeof n=="function"&&n(m),p.dispatchEvent(new Event("change",{bubbles:!0}))}function C(){o=!0,c.classList.remove("hidden"),d.setAttribute("aria-expanded","true"),w(),_();const m=d.getBoundingClientRect();m.bottom+250>window.innerHeight&&m.top>250?(c.classList.remove("top-full","mt-1"),c.classList.add("bottom-full","mb-1")):(c.classList.remove("bottom-full","mb-1"),c.classList.add("top-full","mt-1"))}function x(){o=!1,c.classList.add("hidden"),d.setAttribute("aria-expanded","false")}return d.addEventListener("click",m=>{m.stopPropagation(),o?x():C()}),d.addEventListener("keydown",m=>{m.key==="ArrowDown"||m.key==="Down"?(m.preventDefault(),o?(l=(l+1)%s.length,_()):C()):m.key==="ArrowUp"||m.key==="Up"?(m.preventDefault(),o?(l=(l-1+s.length)%s.length,_()):C()):m.key==="Home"?o&&(m.preventDefault(),l=0,_()):m.key==="End"?o&&(m.preventDefault(),l=s.length-1,_()):m.key==="Enter"||m.key===" "?(m.preventDefault(),o?(s[l]&&T(s[l].value),x()):C()):m.key==="Escape"?o&&(m.preventDefault(),x(),d.focus()):m.key==="Tab"&&o&&x()}),document.addEventListener("click",m=>{i.contains(m.target)||o&&x()}),b(),w(),i.appendChild(p),i.appendChild(d),i.appendChild(c),i.setValue=m=>{T(m)},i.getValue=()=>r,i.updateLabels=()=>{b(),w()},i}function z(t){if(!t)return"";const a=`stages.${t}`,s=e(a);if(s&&s!==a)return s;const n={"Section 19":"Sec 19 Declaration","Sec 19":"Sec 19 Declaration","3A Survey":"Joint Survey 3A","Joint Survey":"Joint Survey 3A","Section 23":"Compensation Award",Award:"Compensation Award"};if(n[t]){const i=`stages.${n[t]}`,r=e(i);if(r&&r!==i)return r}return t}function fe(t){if(!t)return"";const a=typeof t=="object"?t.feature||Re(t.factor):Re(t);if(a){const s=`factors.${a}`,n=e(s);if(n&&n!==s)return n;const i=`info.${a}.title`,r=e(i);if(r&&r!==i)return r}return(typeof t=="object"?t.factor:t)||a||""}function Te(t){if(!t)return"";if(typeof t=="object"){if(t.direction==="reduces_risk")return e("recommendations.reducing_risk","This factor is currently reducing the predicted delay risk.");if(t.feature){const n=`recommendations.${t.feature}`,i=e(n);if(i&&i!==n)return i}}const a=typeof t=="object"?t.recommendation:t;if(!a)return e("recommendations.default","Review this factor as part of the project risk assessment.");const s=at(a);if(s){const n=`recommendations.${s}`,i=e(n);if(i&&i!==n)return i}return a}function Se(t,a=""){if(t==null)return"--";if(typeof t=="number")return t;const s=String(t).trim(),n={Highway:"dropdown.project_type.highway",Railway:"dropdown.project_type.railway",Industrial:"dropdown.project_type.industrial",Metro:"dropdown.project_type.metro",Irrigation:"dropdown.project_type.irrigation",Power:"dropdown.project_type.power","Urban Development":"dropdown.project_type.urban"};if(n[s]){const o=e(n[s]);if(o&&o!==n[s])return o}const i={Agricultural:"dropdown.land_type.agricultural",Commercial:"dropdown.land_type.commercial",Industrial:"dropdown.land_type.industrial",Mixed:"dropdown.land_type.mixed",Residential:"dropdown.land_type.residential"};if(i[s]){const o=e(i[s]);if(o&&o!==i[s])return o}const r={Normal:"dropdown.priority.normal",High:"dropdown.priority.high",Critical:"dropdown.priority.critical"};if(r[s]){const o=e(r[s]);if(o&&o!==r[s])return o}const l=z(s);return l&&l!==s?l:s}function Re(t){return t?String(t).toLowerCase().replace(/^project type:\s*/i,"project_type_").replace(/^land type:\s*/i,"land_type_").replace(/^priority:\s*/i,"priority_").replace(/[^a-z0-9_]/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,""):""}function at(t){return t?t.includes("reducing the predicted delay risk")?"reducing_risk":t.includes("part of the project risk assessment")?"default":String(t).toLowerCase().substring(0,40).replace(/[^a-z0-9_]/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,""):""}let de={activePreset:"medium",lastPrediction:null,isLoading:!1};function st(t,a="medium"){de.activePreset=a;const s=q[a]||q.medium;t.innerHTML=`
    <div class="flex flex-col w-full">
      <!-- Interactive Top Control Canvas -->
      <div class="w-full px-gutter-desktop py-space-lg flex flex-col gap-space-md">
        <!-- Title and Metadata Strip -->
        <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
          <div class="flex flex-col">
            <div class="flex items-center gap-space-sm flex-wrap">
              <span class="w-2.5 h-6 bg-secondary-container rounded-sm"></span>
              <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">${e("assessment.title","Assess Project Risk")}</h1>
              <span class="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">${e("assessment.engineBadge","FastAPI • XGB-26017 Engine")}</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant mt-0.5">
              ${e("assessment.subtitle","Enter or edit project telemetry to estimate statutory delay probability and inspect model-derived risk drivers via POST /predict.")}
            </p>
          </div>

          <!-- Mode Selector Switch -->
          <div class="inline-flex p-1 rounded-xl bg-surface-container-high shadow-inner shrink-0 items-center gap-1">
            <button class="px-space-md py-1.5 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5" id="modeSelectBtn" type="button">
              <span class="material-symbols-outlined text-[16px]">folder_open</span>
              <span>${e("assessment.selectProject","Select Existing Project")}</span>
              ${h("mode_select_project")}
            </button>
            <button class="px-space-md py-1.5 rounded font-label-md text-label-md bg-surface-container-lowest text-on-surface shadow-sm font-semibold flex items-center gap-1.5 transition-all" id="modeSimulateBtn" type="button">
              <span class="material-symbols-outlined text-[16px] text-secondary">tune</span>
              <span>${e("assessment.testScenario","Create / Test Scenario")}</span>
              ${h("mode_test_scenario")}
            </button>
          </div>
        </div>

        <!-- Quick Scenario Presets Bar -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border border-outline-variant/30">
          <div class="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm pl-space-xs">
            <span class="material-symbols-outlined text-[16px] text-secondary">flash_on</span>
            <span class="uppercase tracking-wider font-semibold">${e("assessment.statutoryPresets","Statutory Test Presets:")}</span>
            ${h("statutory_presets")}
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
                <span class="font-label-sm text-[10px] text-secondary font-tabular-data font-bold">42.3% ${e("risk.mediumTier","Baseline")}</span>
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
            <div class="flex items-center gap-1.5">
              <button class="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 px-space-sm py-1 rounded hover:bg-surface-container transition-colors border border-outline-variant/40" id="resetFormBtn" type="button">
                <span class="material-symbols-outlined text-[15px]">refresh</span>
                <span>${e("assessment.resetValues","Reset Values")}</span>
              </button>
              ${h("reset_values")}
            </div>
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
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelProjectType","Project Type")}</label>
                  ${h("project_type")}
                </div>
                <div id="mount_projectType"></div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelLandType","Land Classification")}</label>
                  ${h("land_type")}
                </div>
                <div id="mount_landType"></div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelPriority","Priority Tier")}</label>
                  ${h("priority")}
                </div>
                <div id="mount_priority"></div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelComplexity","Complexity (0-100)")}</label>
                  ${h("complexity_score")}
                </div>
                <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_complexity" step="0.1" min="0" max="100" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelTotalParcels","Total Parcels")}</label>
                  ${h("total_parcels")}
                </div>
                <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_totalParcels" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelAffectedFamilies","Affected Families (PAFs)")}</label>
                  ${h("affected_families")}
                </div>
                <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_affectedFamilies" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelLandArea","Land Extent (Ha)")}</label>
                  ${h("land_area_hectares")}
                </div>
                <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_landArea" step="0.1" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelPlannedDuration","Planned Duration (d)")}</label>
                  ${h("planned_duration_days")}
                </div>
                <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none focus:ring-1 focus:ring-on-surface border border-outline-variant/40" id="field_plannedDuration" min="0" type="number"/>
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
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelAcqProgress","Acq. Progress (%)")}</label>
                    ${h("acquisition_progress_pct")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_acqProgress" min="0" max="100" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelVelocity","Velocity (%/30d)")}</label>
                    ${h("acquisition_velocity_pct_per_30d")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_velocity" step="0.01" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelParcelsPending","Parcels Pending")}</label>
                    ${h("parcels_pending")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_parcelsPending" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelPossessionPending","Possession Pending")}</label>
                    ${h("possession_pending_parcels")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_possessionPending" min="0" type="number"/>
                </div>
                <div class="col-span-2 flex flex-col pt-1">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelCurrentStage","Current Statutory Stage")}</label>
                    ${h("current_stage")}
                  </div>
                  <div id="mount_currentStage"></div>
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
                <!-- Documents Required -->
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium" for="field_docsReq">${e("assessment.labelDocsReq","Documents Required")}</label>
                    ${h("documents_required")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_docsReq" min="0" step="1" type="number"/>
                </div>

                <!-- Documents Pending (Numeric Input) -->
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1" for="field_docsPending">
                      <span>${e("assessment.labelDocsPending","Documents Pending")}</span>
                      <span class="material-symbols-outlined text-[13px]">edit</span>
                    </label>
                    ${h("documents_pending")}
                  </div>
                  <input class="bg-surface-container-high px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface font-bold focus:outline-none focus:ring-2 focus:ring-secondary-container border border-outline-variant/50" id="field_docsPending" min="0" step="1" type="number"/>
                </div>

                <!-- Dual Range Slider Control for Docs Pending -->
                <div class="col-span-2 flex flex-col gap-1.5 pt-1.5">
                  <div class="flex items-center justify-between font-label-sm text-xs">
                    <label class="text-on-surface-variant font-medium flex items-center gap-1.5 cursor-pointer" for="slider_docsPending">
                      <span class="material-symbols-outlined text-[16px] text-secondary">tune</span>
                      <span>${e("assessment.adjustDocsPending","Adjust pending documents")}</span>
                    </label>
                    <span class="font-tabular-data font-bold text-on-surface text-xs px-2 py-0.5 rounded bg-surface-container-high" id="sliderDocsPendingDisplay">-- / --</span>
                  </div>
                  <div class="relative flex items-center w-full py-0.5">
                    <input 
                      type="range" 
                      id="slider_docsPending" 
                      class="w-full h-2.5 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-1 focus:ring-offset-surface-container-lowest transition-all"
                      min="0" 
                      max="100" 
                      value="0" 
                      step="1"
                      aria-label="${e("assessment.adjustDocsPending","Adjust pending documents")}"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow="0"
                    />
                  </div>
                  <div class="flex justify-between font-tabular-data text-[11px] text-on-surface-variant font-semibold px-0.5">
                    <span class="flex items-center gap-0.5">
                      <span>0</span>
                      <span class="text-[9px] uppercase text-on-surface-variant/70 font-normal">(${e("common.min","Min")})</span>
                    </span>
                    <span class="flex items-center gap-0.5">
                      <span id="sliderMaxLabel">--</span>
                      <span class="text-[9px] uppercase text-on-surface-variant/70 font-normal">(${e("common.max","Max")})</span>
                    </span>
                  </div>
                </div>

                <!-- Documentation Completion Bar -->
                <div class="col-span-2 flex flex-col gap-1 pt-1.5 border-t border-surface-container-high/60">
                  <div class="flex items-center justify-between font-label-sm text-label-sm">
                    <div class="flex items-center gap-1">
                      <span class="text-on-surface-variant font-medium">${e("assessment.labelDocCompletion","Documentation Completion")}</span>
                      ${h("documentation_completion_pct")}
                    </div>
                    <span class="font-tabular-data font-bold text-on-surface" id="label_docCompletion">--%</span>
                  </div>
                  <div class="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
                    <div class="bg-secondary-container h-full transition-all duration-200 rounded-full" id="bar_docCompletion" style="width: 0%;"></div>
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
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${e("assessment.labelCompCases","Cases")}</label>
                    ${h("compensation_pending_cases")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compCases" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${e("assessment.labelCompAmount","₹ Cr")}</label>
                    ${h("compensation_pending_amount")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compAmount" min="0" step="0.1" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${e("assessment.labelCompDisbursed","Disb %")}</label>
                    ${h("compensation_completion_pct")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_compDisbursed" min="0" max="100" step="0.1" type="number"/>
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
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${e("assessment.labelApprPending","Pending")}</label>
                    ${h("approvals_pending")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprPending" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${e("assessment.labelApprOverdue","Overdue")}</label>
                    ${h("overdue_approvals")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprOverdue" min="0" type="number"/>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${e("assessment.labelApprDelay","Delay (d)")}</label>
                    ${h("avg_approval_delay_days")}
                  </div>
                  <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_apprDelay" min="0" step="0.1" type="number"/>
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
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelPendingObj","Pending Objections")}</label>
                  ${h("pending_objections")}
                </div>
                <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_pendingObj" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelActiveDisputes","Active Disputes")}</label>
                  ${h("active_legal_disputes")}
                </div>
                <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_activeDisputes" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelOwnerDisputes","Ownership Conflicts")}</label>
                  ${h("ownership_disputes")}
                </div>
                <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface focus:outline-none border border-outline-variant/40" id="field_ownerDisputes" min="0" type="number"/>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-1">
                  <label class="font-label-sm text-label-sm text-error font-bold">${e("assessment.labelCourtStays","Court Stays")}</label>
                  ${h("court_stay_cases")}
                </div>
                <input class="bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface font-bold focus:outline-none border border-error/50" id="field_courtStays" min="0" type="number"/>
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
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelRrPending","Pending Cases")}</label>
                    ${h("rr_pending_cases")}
                  </div>
                  <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_rrPending" min="0" type="number"/>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelRrCompletion","Completion %")}</label>
                    ${h("rr_completion_pct")}
                  </div>
                  <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_rrCompletion" min="0" max="100" step="0.1" type="number"/>
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
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelSchedVariance","Variance (d)")}</label>
                    ${h("schedule_variance_days")}
                  </div>
                  <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_schedVariance" step="0.1" type="number"/>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelMilestonesOverdue","Overdue")}</label>
                    ${h("milestones_overdue")}
                  </div>
                  <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_milestonesOverdue" min="0" type="number"/>
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
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${e("assessment.labelShActions","Actions")}</label>
                    ${h("pending_stakeholder_actions")}
                  </div>
                  <input class="w-full bg-surface-container-low px-1.5 py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shActions" min="0" type="number"/>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${e("assessment.labelShResponse","Resp (d)")}</label>
                    ${h("avg_stakeholder_response_days")}
                  </div>
                  <input class="w-full bg-surface-container-low px-1.5 py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shResponse" min="0" step="0.1" type="number"/>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium truncate">${e("assessment.labelShScore","Score/10")}</label>
                    ${h("stakeholder_responsiveness_score")}
                  </div>
                  <input class="w-full bg-surface-container-low px-1.5 py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_shScore" min="0" max="10" step="0.1" type="number"/>
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
                  <div class="flex items-center justify-between mb-1">
                    <label class="font-label-sm text-label-sm text-on-surface-variant font-medium">${e("assessment.labelHistDelay","Avg Reg. Delay (d)")}</label>
                    ${h("historical_avg_delay_days")}
                  </div>
                  <input class="w-full bg-surface-container-low px-space-sm py-1.5 rounded font-tabular-data text-label-md text-on-surface border border-outline-variant/40" id="field_histDelay" min="0" step="0.1" type="number"/>
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
              <div class="flex items-center gap-1.5 w-2/3 sm:w-auto">
                <button class="w-full sm:w-auto px-space-lg py-2.5 rounded bg-primary text-on-primary hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 group font-bold tracking-wide uppercase" id="runPredictionBtn" type="button">
                  <span class="material-symbols-outlined text-[20px] text-secondary-container group-hover:rotate-12 transition-transform">model_training</span>
                  <span>${e("assessment.assessRiskBtn","Assess Project Risk")}</span>
                </button>
                ${h("assess_project_risk")}
              </div>
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
                <span class="font-headline-sm text-base font-bold text-on-surface">${e("assessment.riskForecast","Risk Forecast")}</span>
                ${h("delay_probability")}
              </div>
              <div class="flex items-center gap-space-xs">
                <span class="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold uppercase tracking-wider" id="riskBadge">--</span>
                ${h("risk_level")}
                <div id="assessmentReadAloudSlot"></div>
              </div>
            </div>

            <!-- Main Probability Radial Dial & Metric -->
            <div class="flex flex-col sm:flex-row items-center gap-space-lg py-space-xs">
              <div class="relative w-32 h-32 flex items-center justify-center shrink-0">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="48" stroke-width="10" stroke="currentColor" fill="none" class="text-surface-container-high"/>
                  <circle id="probabilityCircle" cx="60" cy="60" r="48" stroke-width="10" stroke="currentColor" fill="none" stroke-dasharray="301.59" stroke-dashoffset="301.59" stroke-linecap="round" class="text-secondary transition-all duration-700 ease-out"/>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span class="font-headline-lg text-2xl font-black font-tabular-data tracking-tight text-on-surface" id="probabilityValue">--%</span>
                  <span class="font-label-sm text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">${e("assessment.delayProb","Delay Prob")}</span>
                </div>
              </div>

              <div class="flex flex-col gap-1 text-center sm:text-left flex-1">
                <div class="flex items-center gap-1.5 justify-center sm:justify-start">
                  <span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">${e("assessment.predictedOutcome","Predicted Outcome")}</span>
                  ${h("model_confidence")}
                </div>
                <span class="font-headline-sm text-lg font-bold text-on-surface leading-tight" id="riskSummaryText">
                  ${e("assessment.awaitingInput","Awaiting Telemetry Input...")}
                </span>
                <span class="font-label-sm text-xs font-semibold text-secondary" id="decisionOutcome">--</span>
                <div class="flex items-center gap-1 mt-1 justify-center sm:justify-start">
                  <span class="font-body-sm text-[11px] text-on-surface-variant" id="riskThresholdNote">
                    ${e("assessment.statutoryNotice","Notice: Inference updates in real time based on active inputs.")}
                  </span>
                  ${h("risk_thresholds")}
                </div>
              </div>
            </div>

          </div>

          <!-- 2. Risk-Increasing Factors (Red / Amber Drivers) -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <div class="flex items-center gap-1.5">
                <span class="font-label-md text-label-md text-error flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="material-symbols-outlined text-[16px]">trending_up</span> ${e("assessment.riskIncreasingFactors","Risk-Increasing Factors")}
                </span>
                ${h("risk_drivers_increasing")}
              </div>
              <span class="font-label-sm text-label-sm text-on-surface-variant font-tabular-data">${e("assessment.modelContributionPos","Model Contribution (+Δ)")}</span>
            </div>
            <div class="flex flex-col gap-space-sm pt-space-xs" id="riskIncreasingContainer">
              <!-- Dynamically rendered -->
            </div>
          </div>

          <!-- 3. Factors Reducing Predicted Risk (Green Negative Bars) -->
          <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm border border-outline-variant/30">
            <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
              <div class="flex items-center gap-1.5">
                <span class="font-label-md text-label-md text-emerald-700 flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="material-symbols-outlined text-[16px]">trending_down</span> ${e("assessment.riskReducingFactors","Factors Reducing Predicted Risk")}
                </span>
                ${h("risk_drivers_reducing")}
              </div>
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
              <div class="flex items-center gap-1.5">
                <span class="font-label-md text-label-md text-on-surface flex items-center gap-1.5 uppercase tracking-wider font-bold">
                  <span class="material-symbols-outlined text-[16px] text-secondary">gavel</span> ${e("assessment.recommendedDirectives","Recommended Statutory Directives")}
                </span>
                ${h("statutory_directives")}
              </div>
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
                ${h("methodology_evaluation")}
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
  `,it(t,s)}function it(t,a){const s=t.querySelector("#mount_projectType");if(s){s.innerHTML="";const _=ee({id:"field_projectType",value:a.values.project_type||"Highway",options:[{value:"Highway",labelKey:"dropdown.project_type.highway",infoKey:"opt_project_type_highway"},{value:"Railway",labelKey:"dropdown.project_type.railway",infoKey:"opt_project_type_railway"},{value:"Industrial",labelKey:"dropdown.project_type.industrial",infoKey:"opt_project_type_industrial"},{value:"Metro",labelKey:"dropdown.project_type.metro",infoKey:"opt_project_type_metro"},{value:"Irrigation",labelKey:"dropdown.project_type.irrigation",infoKey:"opt_project_type_irrigation"},{value:"Power",labelKey:"dropdown.project_type.power",infoKey:"opt_project_type_power"},{value:"Urban Development",labelKey:"dropdown.project_type.urban_development",infoKey:"opt_project_type_urban"}]});s.appendChild(_)}const n=t.querySelector("#mount_landType");if(n){n.innerHTML="";const _=ee({id:"field_landType",value:a.values.land_type||"Agricultural",options:[{value:"Agricultural",labelKey:"dropdown.land_type.agricultural",infoKey:"opt_land_type_agricultural"},{value:"Commercial",labelKey:"dropdown.land_type.commercial",infoKey:"opt_land_type_commercial"},{value:"Industrial",labelKey:"dropdown.land_type.industrial",infoKey:"opt_land_type_industrial"},{value:"Mixed",labelKey:"dropdown.land_type.mixed",infoKey:"opt_land_type_mixed"},{value:"Residential",labelKey:"dropdown.land_type.residential",infoKey:"opt_land_type_residential"}]});n.appendChild(_)}const i=t.querySelector("#mount_priority");if(i){i.innerHTML="";const _=ee({id:"field_priority",value:a.values.priority||"Normal",options:[{value:"Normal",labelKey:"dropdown.priority.normal",infoKey:"opt_priority_normal"},{value:"High",labelKey:"dropdown.priority.high",infoKey:"opt_priority_high"},{value:"Critical",labelKey:"dropdown.priority.critical",infoKey:"opt_priority_critical"}]});i.appendChild(_)}const r=t.querySelector("#mount_currentStage");if(r){r.innerHTML="";const _=ee({id:"field_currentStage",value:a.values.current_stage||"Survey",options:[{value:"Notification",labelKey:"info.opt_stage_notification.title",infoKey:"opt_stage_notification"},{value:"Survey",labelKey:"info.opt_stage_survey.title",infoKey:"opt_stage_survey"},{value:"Valuation",labelKey:"info.opt_stage_valuation.title",infoKey:"opt_stage_valuation"},{value:"Compensation",labelKey:"info.opt_stage_compensation.title",infoKey:"opt_stage_compensation"},{value:"Possession",labelKey:"info.opt_stage_possession.title",infoKey:"opt_stage_possession"},{value:"Rehabilitation",labelKey:"info.opt_stage_rehabilitation.title",infoKey:"opt_stage_rehabilitation"}]});r.appendChild(_)}be(a.values),ge();const l=t.querySelector("#assessmentReadAloudSlot");if(l){l.innerHTML="";const _=ue(()=>{var I,R,M,A;const T=((I=t.querySelector("#probabilityValue"))==null?void 0:I.textContent)||"0%",C=((R=t.querySelector("#riskBadge"))==null?void 0:R.textContent)||"",x=((M=t.querySelector("#riskSummaryText"))==null?void 0:M.textContent)||"",m=((A=t.querySelector("#riskThresholdNote"))==null?void 0:A.textContent)||"";return`${e("assessment.readAloudIntro","Bhoomi Sakha assessment outcome.")} ${e("detail.modelDelayProb","Delay probability")}: ${T}. ${C}. ${x}. ${m}`},()=>P.getLanguage());l.appendChild(_)}t.querySelectorAll(".preset-pill").forEach(_=>{_.addEventListener("click",()=>{const T=_.getAttribute("data-preset");t.querySelectorAll(".preset-pill").forEach(x=>{x.classList.remove("bg-surface-container-high","ring-1","ring-secondary"),x.classList.add("bg-surface-container-low")}),_.classList.remove("bg-surface-container-low"),_.classList.add("bg-surface-container-high","ring-1","ring-secondary");const C=q[T];C&&(de.activePreset=T,be(C.values),ge(),W(t))})});const o=t.querySelector("#field_docsPending"),p=t.querySelector("#slider_docsPending"),d=t.querySelector("#field_docsReq");p&&(p.addEventListener("input",()=>j("slider")),p.addEventListener("change",()=>j("slider"))),o&&(o.addEventListener("input",()=>j("numeric")),o.addEventListener("change",()=>j("numeric")),o.addEventListener("blur",()=>{o.value.trim()===""&&(o.value="0",j("numeric"))})),d&&(d.addEventListener("input",()=>j("req")),d.addEventListener("change",()=>j("req")),d.addEventListener("blur",()=>{d.value.trim()===""&&(d.value="0",j("req"))}));const c=t.querySelector("#runPredictionBtn");c&&c.addEventListener("click",()=>W(t));const u=t.querySelector("#resetScenarioBtn"),f=t.querySelector("#resetFormBtn"),v=()=>{const _=q[de.activePreset]||q.medium;be(_.values),ge(),W(t)};u&&u.addEventListener("click",v),f&&f.addEventListener("click",v);const b=t.querySelector("#transparencyAccordionBtn"),y=t.querySelector("#transparencyContent"),w=t.querySelector("#accordionChevron");b&&y&&b.addEventListener("click",()=>{y.classList.contains("hidden")?(y.classList.remove("hidden"),w.style.transform="rotate(180deg)"):(y.classList.add("hidden"),w.style.transform="rotate(0deg)")}),W(t)}function j(t="none"){const a=document.getElementById("field_docsReq"),s=document.getElementById("field_docsPending"),n=document.getElementById("slider_docsPending"),i=document.getElementById("sliderMaxLabel"),r=document.getElementById("sliderDocsPendingDisplay"),l=document.getElementById("label_docCompletion"),o=document.getElementById("bar_docCompletion");if(!a||!s)return;const p=a.value!==void 0?String(a.value).trim():"";let d=p===""?0:parseInt(p,10);(isNaN(d)||d<0)&&(d=0),p!==""&&(parseFloat(p)!==d||d<0)&&(a.value=d);let c=0;if(t==="slider"){const v=n?parseInt(n.value,10):0;c=isNaN(v)?0:v,c<0&&(c=0),c>d&&(c=d),s.value=c}else if(t==="numeric"){const v=s.value!==void 0?String(s.value).trim():"";v===""?c=0:(c=parseInt(v,10),isNaN(c)&&(c=0)),c<0?(c=0,s.value=0):c>d?(c=d,s.value=d):v!==""&&parseFloat(v)!==c&&(s.value=c)}else{const v=s.value!==void 0?String(s.value).trim():"";v===""?c=0:(c=parseInt(v,10),isNaN(c)&&(c=0)),c<0?(c=0,s.value=0):c>d&&(c=d,s.value=d)}n&&(n.min="0",n.max=String(d),n.value=String(c),n.setAttribute("aria-valuemin","0"),n.setAttribute("aria-valuemax",String(d)),n.setAttribute("aria-valuenow",String(c))),i&&(i.textContent=d),r&&(r.textContent=`${c} / ${d}`);let u="0%",f=0;if(d>0){const v=(d-c)/d*100;f=Math.max(0,Math.min(100,v)),f===0?u="0%":f===100?u="100%":u=`${f.toFixed(1)}%`}l&&(l.textContent=u),o&&(o.style.width=`${f}%`)}function ge(){j("none")}function be(t){if(!t)return;const a=(s,n)=>{const i=document.getElementById(s);if(!i||n===void 0)return;i.value=n;const r=i.closest(".custom-select-container")||document.querySelector(`[data-select-id="${s}"]`);r&&typeof r.setValue=="function"&&r.setValue(n)};a("field_projectType",t.project_type||"Highway"),a("field_landType",t.land_type||"Agricultural"),a("field_priority",t.priority||"Normal"),a("field_currentStage",t.current_stage||"Survey"),a("field_complexity",t.complexity_score??47.7),a("field_totalParcels",t.total_parcels??233),a("field_affectedFamilies",t.affected_families??113),a("field_landArea",t.land_area_hectares??132.5),a("field_plannedDuration",t.planned_duration_days??607),a("field_acqProgress",t.acquisition_progress_pct??6),a("field_velocity",t.acquisition_velocity_pct_per_30d??6.13),a("field_parcelsPending",t.parcels_pending??219),a("field_possessionPending",t.possession_pending_parcels??218),a("field_docsReq",t.documents_required??241),a("field_docsPending",t.documents_pending??232),a("field_compCases",t.compensation_pending_cases??105),a("field_compAmount",t.compensation_pending_amount??10.95),a("field_compDisbursed",t.compensation_completion_pct??6.2),a("field_apprPending",t.approvals_pending??5),a("field_apprOverdue",t.overdue_approvals??2),a("field_apprDelay",t.avg_approval_delay_days??41),a("field_pendingObj",t.pending_objections??0),a("field_activeDisputes",t.active_legal_disputes??0),a("field_ownerDisputes",t.ownership_disputes??0),a("field_courtStays",t.court_stay_cases??0),a("field_rrPending",t.rr_pending_cases??47),a("field_rrCompletion",t.rr_completion_pct??4.08),a("field_schedVariance",t.schedule_variance_days??-7.19),a("field_milestonesOverdue",t.milestones_overdue??1),a("field_shActions",t.pending_stakeholder_actions??7),a("field_shResponse",t.avg_stakeholder_response_days??28.59),a("field_shScore",t.stakeholder_responsiveness_score??5.14),a("field_histDelay",t.historical_avg_delay_days??100.8)}function nt(){var v;const t=(b,y=0)=>{var _;const w=parseFloat((_=document.getElementById(b))==null?void 0:_.value);return isNaN(w)?y:Math.max(0,w)},a=(b,y=0)=>{var _;const w=parseInt((_=document.getElementById(b))==null?void 0:_.value,10);return isNaN(w)?y:Math.max(0,w)},s=(b,y="")=>{var w;return((w=document.getElementById(b))==null?void 0:w.value)||y},n=a("field_totalParcels",200),i=a("field_parcelsPending",50),r=Math.max(0,n-i),l=a("field_docsReq",200),o=a("field_docsPending",50),p=Math.max(0,l-o),d=l>0?Math.min(100,Math.max(0,p/l*100)):0,c=a("field_compCases",10),u=t("field_compAmount",10),f=Math.min(100,t("field_compDisbursed",50));return{project_type:s("field_projectType","Highway"),land_type:s("field_landType","Mixed"),priority:s("field_priority","Normal"),current_stage:s("field_currentStage","Survey"),complexity_score:t("field_complexity",40),total_parcels:n,parcels_pending:i,parcels_acquired:r,affected_families:t("field_affectedFamilies",50),land_area_hectares:t("field_landArea",100),planned_duration_days:a("field_plannedDuration",600),days_since_notification:30,days_elapsed:30,days_in_current_stage:30,planned_stage_duration_days:30,schedule_variance_days:parseFloat((v=document.getElementById("field_schedVariance"))==null?void 0:v.value)||0,milestones_due:2,milestones_completed:1,milestones_overdue:a("field_milestonesOverdue",0),acquisition_progress_pct:Math.min(100,t("field_acqProgress",50)),acquisition_velocity_pct_per_30d:t("field_velocity",5),possession_progress_pct:Math.min(100,(1-a("field_possessionPending",50)/Math.max(1,n))*100),possession_pending_parcels:a("field_possessionPending",50),compensation_total_amount:u*1.5,compensation_assessed_amount:u*1.2,compensation_disbursed_amount:u*.5,compensation_pending_amount:u,compensation_completion_pct:f,compensation_pending_cases:c,avg_compensation_delay_days:c*.5,documents_required:l,documents_verified:p,documents_pending:o,documentation_completion_pct:d,approvals_required:10,approvals_completed:5,approvals_pending:a("field_apprPending",2),approval_completion_pct:50,avg_approval_delay_days:t("field_apprDelay",10),overdue_approvals:a("field_apprOverdue",0),active_legal_disputes:a("field_activeDisputes",0),resolved_legal_disputes:0,ownership_disputes:a("field_ownerDisputes",0),court_stay_cases:a("field_courtStays",0),pending_objections:a("field_pendingObj",0),families_requiring_rr:a("field_rrPending",0)+10,families_rr_completed:10,rr_completion_pct:Math.min(100,t("field_rrCompletion",50)),rr_pending_cases:a("field_rrPending",0),pending_stakeholder_actions:a("field_shActions",0),avg_stakeholder_response_days:t("field_shResponse",10),stakeholder_responsiveness_score:t("field_shScore",5),interdepartmental_pending_actions:2,historical_avg_delay_days:t("field_histDelay",50)}}async function W(t){const a=t.querySelector("#loadingOverlay"),s=t.querySelector("#runPredictionBtn");a&&a.classList.remove("hidden"),s&&(s.disabled=!0,s.classList.add("opacity-70","cursor-not-allowed"));try{const n=nt(),i=await ce.predictRisk(n);de.lastPrediction=i,rt(t,i)}catch(n){console.error("Prediction failed:",n),ot(t,n.message)}finally{a&&a.classList.add("hidden"),s&&(s.disabled=!1,s.classList.remove("opacity-70","cursor-not-allowed"))}}function rt(t,a){const s=a.delay_probability_pct!==void 0?a.delay_probability_pct:a.delay_probability!==void 0?a.delay_probability*100:0,n=typeof s=="number"&&!isNaN(s)?s:0,i=$(n),r=We(i),l=re(i),o=Ke(i),p=t.querySelector("#probabilityValue"),d=t.querySelector("#probabilityCircle"),c=t.querySelector("#decisionOutcome"),u=t.querySelector("#riskBadge"),f=t.querySelector("#riskSummaryText"),v=t.querySelector("#riskThresholdNote");p&&(p.textContent=`${n.toFixed(2)}%`),c&&(c.textContent=r,c.className=`mt-1 font-label-sm text-[11px] font-semibold ${Y(i)}`),f&&(f.textContent=l),v&&(v.textContent=o);const b=301.59,y=b-b*(Math.min(100,Math.max(0,n))/100);d&&(d.style.strokeDashoffset=y,d.setAttribute("class",`transition-all duration-700 ease-out ${Xe(i)}`)),u&&(u.textContent=`${D(i)} ${e("risk.tier","Tier")}`,u.className=`px-space-sm py-1 rounded font-label-sm text-label-sm font-bold uppercase tracking-wider border ${pe(i)}`);const w=t.querySelector("#riskIncreasingContainer");if(w){const C=a.risk_drivers||[];if(C.length===0)w.innerHTML=`
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          ${e("assessment.noRiskIncreasing","No major risk-increasing factors identified for this project state.")}
        </div>
      `;else{const x=Math.max(...C.map(m=>Math.abs(m.contribution)),.1);w.innerHTML=C.map(m=>{const I=Math.min(100,Math.max(15,Math.abs(m.contribution)/x*100)),R=m.contribution>.4?"bg-error":"bg-secondary-container",M=fe(m),A=Se(m.value,m.feature),F=Te(m);return`
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-semibold">${M}: <span class="font-bold text-on-surface font-tabular-data">${A}</span></span>
              <span class="font-tabular-data font-bold text-error">+${m.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="${R} h-full rounded-full transition-all duration-700" style="width: ${I.toFixed(0)}%;"></div>
            </div>
            <span class="font-body-sm text-[11px] text-on-surface-variant italic">
              <strong>${e("assessment.action","Action:")}</strong> ${F}
            </span>
          </div>
        `}).join("")}}const _=t.querySelector("#riskReducingContainer");if(_){const C=a.risk_reducing_factors||[];if(C.length===0)_.innerHTML=`
        <div class="text-on-surface-variant font-body-sm text-sm italic py-2">
          ${e("assessment.noRiskReducing","No significant risk-reducing factors detected.")}
        </div>
      `;else{const x=Math.max(...C.map(m=>Math.abs(m.contribution)),.1);_.innerHTML=C.map(m=>{const I=Math.min(100,Math.max(15,Math.abs(m.contribution)/x*100)),R=fe(m),M=Se(m.value,m.feature);return`
          <div class="flex flex-col gap-1 border-b border-surface-container-high/40 pb-2 last:border-none">
            <div class="flex items-center justify-between font-label-sm text-label-sm">
              <span class="text-on-surface font-medium">${R}: <span class="font-bold text-on-surface font-tabular-data">${M}</span></span>
              <span class="font-tabular-data font-semibold text-emerald-600">${m.contribution.toFixed(4)}</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-600 h-full rounded-full transition-all duration-700" style="width: ${I.toFixed(0)}%;"></div>
            </div>
          </div>
        `}).join("")}}const T=t.querySelector("#directivesContainer");if(T){const C=a.risk_drivers||[];C.length>0?T.innerHTML=C.slice(0,2).map((x,m)=>{const I=m===0?e("assessment.p1Priority","P1 PRIORITY"):e("assessment.p2Priority","P2 PRIORITY"),R=m===0?"bg-error text-on-error":"bg-secondary text-on-secondary",M=fe(x),A=Te(x);return`
          <div class="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm border border-outline-variant/30">
            <span class="px-1.5 py-0.5 rounded ${R} font-label-sm text-[10px] font-bold shrink-0 mt-0.5">${I}</span>
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm font-bold text-on-surface">${M} — ${e("assessment.resolution","Resolution")}</span>
              <p class="font-body-sm text-[12px] text-on-surface-variant mt-0.5">${A}</p>
            </div>
          </div>
        `}).join(""):T.innerHTML=`
        <div class="p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-xs">
          ${e("assessment.nominalDirectives","Statutory progress remains nominal. Continue scheduled monitoring under Section 19 protocols.")}
        </div>
      `}}function ot(t,a){const s=t.querySelector("#riskIncreasingContainer"),n=a&&!a.includes("uvicorn")?a:e("assessment.serviceUnavailableMsg","Prediction service is temporarily unavailable. Please try again.");if(s){s.innerHTML=`
      <div class="p-space-sm rounded bg-error-container/40 border border-error text-on-surface flex flex-col gap-2">
        <div class="flex items-center gap-1.5 text-error font-bold text-label-sm">
          <span class="material-symbols-outlined text-[16px]">error</span>
          <span>${e("assessment.inferenceUnavailable","Inference Unavailable")}</span>
        </div>
        <span class="font-body-sm text-xs text-on-surface">${n}</span>
        <div class="flex items-center gap-1.5 mt-1">
          <button class="self-start px-2.5 py-1 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-xs font-semibold rounded border border-outline-variant/40 shadow-sm flex items-center gap-1 transition-colors" id="retryPredictionBtn" type="button">
            <span class="material-symbols-outlined text-[14px]">refresh</span>
            <span>${e("assessment.retryAssessment","Retry Assessment")}</span>
          </button>
          ${h("retry_assessment")}
        </div>
      </div>
    `;const i=s.querySelector("#retryPredictionBtn");i&&i.addEventListener("click",()=>W(t))}}function lt(t,a,s){t.innerHTML=`
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
            <div class="flex items-center gap-1">
              <label class="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">${e("projects.filterSector","Filter By Sector")}</label>
              ${h("proj_directory_filter_sector")}
            </div>
            <select class="bg-surface-container-low px-space-sm py-1.5 rounded font-label-sm text-label-sm text-on-surface border border-outline-variant/40" id="filterSector">
              <option value="all">${e("projects.allSectors","All Sectors (Highway, Rail, Power, Metro)")}</option>
              <option value="Highway">${e("dropdown.project_type.highway","Highways & Expressways")}</option>
              <option value="Railway">${e("dropdown.project_type.railway","Freight Corridors")}</option>
              <option value="Power">${e("dropdown.project_type.power","Renewable Energy")}</option>
              <option value="Metro">${e("dropdown.project_type.metro","Urban Mass Transit")}</option>
            </select>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1">
              <label class="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">${e("projects.filterRisk","Risk Tier")}</label>
              ${h("proj_directory_filter_risk")}
            </div>
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
                <th class="py-3 px-space-md font-bold">
                  <div class="flex items-center gap-1">
                    <span>${e("projects.colId","Project ID")}</span>
                    ${h("project_id")}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold">
                  <div class="flex items-center gap-1">
                    <span>${e("projects.colName","Name & Sector")}</span>
                    ${h("project_name_corridor")}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold">
                  <div class="flex items-center gap-1">
                    <span>${e("projects.colDistrict","State & District")}</span>
                    ${h("state_district")}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold">
                  <div class="flex items-center gap-1">
                    <span>${e("projects.colStage","Statutory Stage")}</span>
                    ${h("proj_col_stage")}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold font-tabular-data">
                  <div class="flex items-center gap-1">
                    <span>${e("projects.colProgress","Acquisition Progress")}</span>
                    ${h("acquisition_progress_pct")}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold font-tabular-data">
                  <div class="flex items-center gap-1">
                    <span>${e("projects.colRisk","Predicted Delay Risk")}</span>
                    ${h("delay_probability")}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold">
                  <div class="flex items-center gap-1">
                    <span>${e("projects.colTier","Status Tier")}</span>
                    ${h("status_tier_badge")}
                  </div>
                </th>
                <th class="py-3 px-space-md font-bold text-right">
                  <div class="flex items-center justify-end gap-1">
                    <span>${e("projects.colAction","Actions")}</span>
                    ${h("proj_action_audit")}
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
  `;const n=t.querySelector("#directoryTableBody"),i=t.querySelector("#directorySearchInput"),r=t.querySelector("#filterSector"),l=t.querySelector("#filterRisk"),o=t.querySelector("#directorySearchMicSlot");if(o&&i){const c=Le(i,()=>P.getLanguage());c&&o.appendChild(c)}const p=()=>{if(!n)return;const c=((i==null?void 0:i.value)||"").toLowerCase().trim(),u=(r==null?void 0:r.value)||"all",f=(l==null?void 0:l.value)||"all",v=K.filter(b=>{const y=b.id.toLowerCase().includes(c)||b.name.toLowerCase().includes(c)||b.district.toLowerCase().includes(c)||b.state.toLowerCase().includes(c),w=u==="all"||b.type===u,_=f==="all"||b.riskLevel===f;return y&&w&&_});if(v.length===0){n.innerHTML=`<tr><td colspan="8" class="text-center py-6 text-on-surface-variant">${e("projects.noRecords","No matching records found in national database.")}</td></tr>`;return}n.innerHTML=v.map(b=>{const y=b.riskLevel||$(b.delayProbability),w=D(y);return`
        <tr class="hover:bg-surface-container-low/70 transition-colors">
          <td class="py-space-md px-space-md font-tabular-data font-bold text-on-surface">${b.id}</td>
          <td class="py-space-md px-space-md">
            <div class="flex flex-col">
              <span class="font-semibold text-on-surface">${b.name}</span>
              <span class="text-on-surface-variant font-label-sm text-xs">${b.sector}</span>
            </div>
          </td>
          <td class="py-space-md px-space-md text-on-surface-variant">${b.district}, ${b.state}</td>
          <td class="py-space-md px-space-md">
            <span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-xs">${z(b.stage)}</span>
          </td>
          <td class="py-space-md px-space-md font-tabular-data">
            <div class="flex items-center gap-2">
              <span class="font-bold text-on-surface">${b.progressPct}%</span>
              <div class="w-16 h-2 rounded-full bg-surface-container-high overflow-hidden">
                <div class="bg-primary h-full" style="width: ${b.progressPct}%"></div>
              </div>
            </div>
          </td>
          <td class="py-space-md px-space-md font-tabular-data font-bold ${Y(y)}">${b.delayProbability}%</td>
          <td class="py-space-md px-space-md">
            <span class="px-2 py-0.5 rounded-full ${pe(y)} font-label-sm text-xs font-bold border">${w}</span>
          </td>
          <td class="py-space-md px-space-md text-right">
            <div class="inline-flex items-center gap-1.5">
              <button class="dir-assess-btn px-2 py-1 bg-primary text-on-primary rounded font-label-sm text-xs font-bold hover:bg-surface-tint transition-colors" data-preset="${b.presetKey||"medium"}" type="button">
                ${e("projects.assessRisk","Assess Risk")}
              </button>
              <button class="dir-audit-btn px-2 py-1 bg-surface-container text-on-surface rounded font-label-sm text-xs font-medium hover:bg-surface-container-high transition-colors" data-id="${b.id}" type="button">
                ${e("projects.deepAudit","Deep Audit")}
              </button>
            </div>
          </td>
        </tr>
      `}).join(""),n.querySelectorAll(".dir-assess-btn").forEach(b=>{b.addEventListener("click",()=>{const y=b.getAttribute("data-preset");a&&a(y)})}),n.querySelectorAll(".dir-audit-btn").forEach(b=>{b.addEventListener("click",()=>{const y=b.getAttribute("data-id");s&&s(y)})})};i&&i.addEventListener("input",p),r&&r.addEventListener("change",p),l&&l.addEventListener("change",p);const d=t.querySelector("#newAssessmentBtn");d&&a&&d.addEventListener("click",()=>a("medium")),p()}function ct(t,a="BF-NH-2024-09",s){const n=K.find(c=>c.id===a)||K[0],i=$(n.delayProbability),r=D(i);t.innerHTML=`
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
            ${h("detail_statutory_hash")}
          </span>
          <span class="text-outline-variant">•</span>
          <span class="inline-flex items-center gap-1 text-on-surface-variant">
            <span class="material-symbols-outlined text-[15px]">update</span>
            ${e("detail.modelInference","Model Inference")}: <span class="font-tabular-data text-on-surface">${e("detail.liveSynchronized","Live Synchronized")}</span>
            ${h("detail_model_inference")}
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
                ${e("detail.stage","Stage")}: ${z(n.stage)}
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
            <div class="flex items-center gap-1">
              <button class="px-space-md py-2 bg-primary hover:bg-surface-container-high text-on-primary hover:text-on-surface font-label-md text-label-md rounded transition-colors flex items-center gap-1.5 shadow-sm" id="draftDcOrderBtn" type="button">
                <span class="material-symbols-outlined text-[18px]">history_edu</span>
                <span>${e("detail.draftDcOrder","Draft DC Order")}</span>
              </button>
              ${h("detail_draft_dc_order")}
            </div>
          </div>
        </div>

        <!-- Predictive Executive Risk Dossier Card -->
        <div class="w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-outline-variant/30">
          
          <!-- Severity Anchor Column -->
          <div class="lg:col-span-4 ${i==="CRITICAL"?"bg-error-container/40":i==="HIGH"?"bg-orange-50 dark:bg-orange-950/40":i==="MEDIUM"?"bg-amber-50 dark:bg-amber-950/40":"bg-emerald-50 dark:bg-emerald-950/40"} p-space-xl flex flex-col justify-between relative overflow-hidden">
            <div class="flex flex-col gap-space-md relative z-10">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <span class="px-space-xs py-1 rounded ${pe(i)} font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm border">
                    <span class="w-2 h-2 rounded-full bg-current animate-ping"></span>
                    ${r} ${e("detail.riskTier","Risk Tier")}
                  </span>
                  ${h("risk_level")}
                </div>
                <span class="font-tabular-data text-label-sm font-semibold">${e("detail.engineXgb","XGB-26017 Engine")}</span>
              </div>
              <div class="flex flex-col pt-space-xs">
                <div class="flex items-center gap-1.5">
                  <span class="font-label-md text-label-md uppercase tracking-wide text-on-surface-variant font-semibold">${e("detail.modelDelayProb","Model Delay Probability")}</span>
                  ${h("delay_probability")}
                </div>
                <div class="flex items-baseline gap-space-xs">
                  <span class="font-headline-xl text-headline-xl font-tabular-data ${Y(i)} font-extrabold tracking-tight">${n.delayProbability}%</span>
                  <span class="font-headline-sm text-headline-sm font-bold text-on-surface">${e("detail.probability","PROBABILITY")}</span>
                </div>
              </div>
              <div class="p-space-sm rounded bg-surface-container-lowest/80 shadow-sm backdrop-blur-sm flex flex-col gap-0.5 border border-outline-variant/30">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">${e("detail.predictedStatutoryImpact","Predicted Statutory Impact")}</span>
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                  ${re(i)}
                </span>
              </div>
            </div>
            <div class="pt-space-lg flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant relative z-10">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                ${e("detail.modelConfidence","Model Confidence")}: <strong class="font-tabular-data font-semibold">91.4%</strong>
                ${h("model_confidence")}
              </span>
              <span class="font-tabular-data text-label-sm">${e("detail.trainedRecords","N = 3,000,000 Trained")}</span>
            </div>
          </div>

          <!-- Contextual Field Geographic & Administrative Vector -->
          <div class="lg:col-span-8 p-space-xl flex flex-col justify-between gap-space-lg">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <div class="flex items-center gap-1">
                    <span>${e("detail.totalRequisition","Total Land Requisition")}</span>
                    ${h("detail_land_requisition")}
                  </div>
                  <span class="material-symbols-outlined text-[16px]">map</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">184.20 Ha</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">${e("detail.spreadVillages","Spread over 14 Revenue Villages")}</span>
              </div>
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <div class="flex items-center gap-1">
                    <span>${e("detail.affectedLandowners","Affected Landowners")}</span>
                    ${h("detail_affected_landowners")}
                  </div>
                  <span class="material-symbols-outlined text-[16px]">groups</span>
                </div>
                <span class="font-headline-sm text-headline-sm text-on-surface font-tabular-data font-bold">1,892 ${e("detail.khatas","Khatas")}</span>
                <span class="font-body-sm text-body-sm text-error font-medium">${e("detail.unresolvedMutations","410 mutations unresolved")}</span>
              </div>
              <div class="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1 border border-outline-variant/30">
                <div class="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <div class="flex items-center gap-1">
                    <span>${e("detail.sanctionedEscrow","Sanctioned Escrow")}</span>
                    ${h("detail_sanctioned_escrow")}
                  </div>
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
                  ${h("detail_cutoff_timeline")}
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
              <div class="flex items-center gap-1.5">
                <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">${e("detail.progressGaugesTitle","Multi-Domain Acquisition Progress Gauges")}</h2>
                ${h("detail_progress_gauges")}
              </div>
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
  `;const l=t.querySelector("#detailReadAloudSlot");if(l){const c=ue(()=>`${e("detail.dossierFor","Project dossier for")} ${n.name}, ${e("projects.colId","Project ID")} ${n.id}. ${e("detail.state","State")}: ${n.state}, ${e("detail.district","District")}: ${n.district}. ${e("detail.statutoryStage","Current statutory stage")}: ${z(n.stage)}. ${e("detail.overallProgress","Progress")}: ${n.progressPct}%. ${e("detail.modelDelayProb","Predicted delay risk")}: ${n.delayProbability}%, ${e("detail.riskTier","Risk Tier")}: ${D(i)}. ${re(i)}`,()=>P.getLanguage());l.appendChild(c)}const o=t.querySelector("#detailRerunBtn");o&&s&&o.addEventListener("click",()=>s(n.presetKey||"medium"));const p=t.querySelector("#draftDcOrderBtn");p&&p.addEventListener("click",()=>{dt(n,i)});const d=t.querySelector("#backToProjectsBreadcrumb");d&&d.addEventListener("click",()=>{window.location.hash="#/projects"})}function dt(t,a){var u,f,v,b,y;const n=(q[t.presetKey]||q.medium).values||{},i=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}),r=`BS-CALA/${t.id}/${new Date().getFullYear()}/PR-DRAFT`,l=document.getElementById("draftDcOrderModal");l&&l.remove();const o=document.createElement("div");o.id="draftDcOrderModal",o.className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-labelledby","draftOrderModalTitle");const p=`${e("detail.modalPrototypeDraft","PROTOTYPE DRAFT ORDER - FOR GOVERNANCE DEMONSTRATION ONLY")}
${e("detail.modalSimulationMode","NOT AN OFFICIAL STATUTORY GOVERNMENT ORDER")}

${e("detail.modalOffice","OFFICE OF THE DISTRICT COLLECTOR & COMPETENT AUTHORITY (LAND ACQUISITION)")}
${t.district.toUpperCase()} DISTRICT, ${t.state.toUpperCase()}

${e("detail.modalRef","Memo Ref")}: ${r}
${e("detail.modalDate","Date")}: ${i}

SUB: ${e("detail.modalMemoSub","Pre-emptive Administrative Acceleration Directive under RFCTLARR Framework")}
REF: ${e("projects.colId","Project ID")}: ${t.id} | ${t.name} (${t.sector})
     ${e("detail.statutoryStage","Current Statutory Stage")}: ${z(t.stage)} | ${e("detail.overallProgress","Current Physical Progress")}: ${t.progressPct}%

${e("detail.modalTeleFindings","1. TELEMETRY & PREDICTIVE AUDIT FINDINGS:")}
   - ${e("detail.modalTargetArea","Total Target Land Area")}: ${n.land_area_hectares||100} Hectares
   - ${e("detail.modalAffectedFam","Total Affected Families")}: ${n.affected_families||120} Families
   - ${e("detail.modalParcels","Total Cadastral Parcels")}: ${n.total_parcels||200}
   - ${e("detail.modelDelayProb","Model Delay Risk Probability")}: ${t.delayProbability}% (${D(a)})
   - ${e("detail.predictedStatutoryImpact","Statutory Impact")}: ${re(a)}

${e("detail.modalDirectives","2. ADMINISTRATIVE DIRECTIVES TO COMPETENT AUTHORITIES (CALA):")}
   ${e("detail.modalDirectiveA","a) Joint Site Inspection: The Special Land Acquisition Officer (SLAO) and Sub-Divisional Magistrate (SDM) shall initiate immediate expedited joint site inspection for remaining pending parcels.")}
   ${e("detail.modalDirectiveB","b) DBT Escrow Acceleration: Direct Benefit Transfer (DBT) reconciliation and compensation award payouts shall be expedited within a 14-day statutory timeline to prevent critical milestone slippage.")}
   ${e("detail.modalDirectiveC","c) Lok Adalat Conciliation: Outstanding objections and title verification issues must be scheduled for expedited hearing during the upcoming weekly revenue Lok Adalat.")}

DISCLAIMER:
${e("detail.modalDisclaimer","This document is a prototype draft generated automatically for governance simulation and review by the Bhoomi Sakha Early Delay Warning System. It does NOT constitute an official legal or statutory order unless vetted, approved, and officially signed by the District Collector and gazetted under the relevant state and central legislation.")}`;o.innerHTML=`
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
          <div class="flex items-center gap-1.5">
            <h3 id="draftOrderModalTitle" class="font-headline-sm text-headline-sm font-bold text-on-surface">
              ${e("detail.modalTitle","Draft DC Order / Administrative Directive")}
            </h3>
            ${h("detail_draft_dc_order")}
          </div>
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
          <div class="text-xs text-on-surface-variant uppercase font-semibold">${e("detail.modalCala","Competent Authority Land Acquisition (CALA)")} • ${t.district}, ${t.state}</div>
          <div class="text-xs font-tabular-data text-on-surface-variant mt-1">${e("detail.modalRef","Ref")}: <span class="font-semibold text-on-surface">${r}</span> • ${e("detail.modalDate","Date")}: <span class="font-semibold text-on-surface">${i}</span></div>
        </div>

        <!-- Telemetry Summary Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">${e("projects.colId","Project ID")}</span>
            <span class="font-bold font-tabular-data text-on-surface">${t.id}</span>
          </div>
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">${e("detail.stage","Stage")}</span>
            <span class="font-bold text-on-surface truncate block">${z(t.stage)}</span>
          </div>
          <div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/20">
            <span class="text-on-surface-variant block uppercase font-medium">${e("detail.modalAreaFamilies","Area / Families")}</span>
            <span class="font-bold font-tabular-data text-on-surface">${n.land_area_hectares||"—"} Ha / ${n.affected_families||"—"} Fam</span>
          </div>
          <div class="p-2.5 rounded ${a==="CRITICAL"?"bg-red-500/10 border-red-500/30":a==="HIGH"?"bg-orange-500/10 border-orange-500/30":"bg-amber-500/10 border-amber-500/30"} border">
            <span class="text-on-surface-variant block uppercase font-medium">${e("detail.predictedRisk","Predicted Risk")}</span>
            <span class="font-bold font-tabular-data ${Y(a)}">${t.delayProbability}% (${D(a)})</span>
          </div>
        </div>

        <!-- Draft Order Content -->
        <div class="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30 space-y-3 font-mono text-xs leading-relaxed text-on-surface/90 select-text whitespace-pre-wrap">${p}</div>

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
  `,document.body.appendChild(o);const d=()=>{document.removeEventListener("keydown",c),o.remove();const w=document.getElementById("draftDcOrderBtn");w&&w.focus()},c=w=>{w.key==="Escape"&&d()};document.addEventListener("keydown",c),o.addEventListener("click",w=>{w.target===o&&d()}),(u=o.querySelector("#closeDraftModalBtn"))==null||u.addEventListener("click",d),(f=o.querySelector("#closeDraftModalFooterBtn"))==null||f.addEventListener("click",d),(v=o.querySelector("#copyDraftBtn"))==null||v.addEventListener("click",()=>{var w;(w=navigator.clipboard)!=null&&w.writeText&&navigator.clipboard.writeText(p).then(()=>{const _=o.querySelector("#copyDraftLabel");_&&(_.textContent=e("detail.modalCopied","Copied to Clipboard!"),setTimeout(()=>{_.textContent=e("detail.modalCopyDraft","Copy Draft Text")},2e3))}).catch(()=>{alert(e("detail.modalCopied","Copied to Clipboard!"))})}),(b=o.querySelector("#printDraftBtn"))==null||b.addEventListener("click",()=>{window.print()}),(y=o.querySelector("#closeDraftModalBtn"))==null||y.focus()}const Ae="bhoomi_notifications_read",ye=[{id:"notif-crit-1",category:"Risk Alert",severity:"critical",title:"Critical delay risk detected in current assessment",summary:"Delhi-Amritsar Expressway (Pkg 4) evaluated with 84.6% delay probability requiring urgent Section 19 intervention.",timestamp:"15 mins ago",actionRoute:"#/assessment?preset=critical",actionLabel:"Inspect Assessment"},{id:"notif-engine-2",category:"Engine",severity:"info",title:"Backend prediction engine connected",summary:"FastAPI service connected with 76 engineered cadastral features ready for live XGBoost inference.",timestamp:"1 hour ago",actionRoute:"#/dashboard",actionLabel:"View Dashboard"},{id:"notif-atten-3",category:"Officer Attention",severity:"high",title:"Assessment contains factors requiring officer attention",summary:"18 high-bottleneck parcel cases in Western Freight Corridor flagged for documentation backlog review.",timestamp:"3 hours ago",actionRoute:"#/assessment?preset=high",actionLabel:"Review Factors"},{id:"notif-stat-4",category:"System",severity:"info",title:"Risk assessment pipeline initialized",summary:"National Cadastral Matrix synchronized with 142 monitored infrastructure corridors.",timestamp:"Today, 09:30 AM",actionRoute:"#/projects",actionLabel:"Projects Directory"}];class pt{constructor(){this.listeners=[]}getReadIds(){try{const a=localStorage.getItem(Ae);return a?JSON.parse(a):[]}catch{return[]}}saveReadIds(a){try{localStorage.setItem(Ae,JSON.stringify(a)),this.notifyListeners()}catch(s){console.error("Failed to save read notifications:",s)}}getAll(){const a=new Set(this.getReadIds());return ye.map(s=>({...s,title:e(`notifications.items.${s.id}.title`,s.title),summary:e(`notifications.items.${s.id}.summary`,s.summary),category:e(`notifications.categories.${s.category}`,s.category),actionLabel:e(`notifications.items.${s.id}.actionLabel`,s.actionLabel),timestamp:e(`notifications.timestamps.${s.timestamp}`,s.timestamp),isRead:a.has(s.id)}))}getUnreadCount(){const a=new Set(this.getReadIds());return ye.filter(s=>!a.has(s.id)).length}markAsRead(a){const s=new Set(this.getReadIds());s.add(a),this.saveReadIds(Array.from(s))}markAsUnread(a){const s=new Set(this.getReadIds());s.delete(a),this.saveReadIds(Array.from(s))}markAllAsRead(){const a=ye.map(s=>s.id);this.saveReadIds(a)}resetAll(){this.saveReadIds([])}subscribe(a){return this.listeners.push(a),()=>{this.listeners=this.listeners.filter(s=>s!==a)}}notifyListeners(){const a=this.getUnreadCount();this.listeners.forEach(s=>s(a))}}const U=new pt;function ut(t,a){let s="all";function n(){const i=U.getAll(),r=U.getUnreadCount(),l=s==="unread"?i.filter(u=>!u.isRead):i;t.innerHTML=`
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

        <!-- Filter Controls & Context Guidance -->
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <div class="flex items-center gap-2">
            <button class="px-3 py-1 rounded font-label-sm text-xs font-semibold transition-all ${s==="all"?"bg-primary text-on-primary shadow-sm":"bg-surface-container-low text-on-surface-variant hover:text-on-surface"}" id="filterAllBtn" type="button">
              ${e("notifications.filterAll","All")} (${i.length})
            </button>
            <button class="px-3 py-1 rounded font-label-sm text-xs font-semibold transition-all ${s==="unread"?"bg-primary text-on-primary shadow-sm":"bg-surface-container-low text-on-surface-variant hover:text-on-surface"}" id="filterUnreadBtn" type="button">
              ${e("notifications.filterUnread","Unread")} (${r})
            </button>
          </div>
          <div class="flex items-center gap-space-sm font-label-sm text-xs text-on-surface-variant">
            <div class="flex items-center gap-1">
              <span>${e("notifications.severity","Severity")}</span>
              ${h("notif_severity")}
            </div>
            <div class="flex items-center gap-1">
              <span>${e("notifications.categoriesLabel","Categories")}</span>
              ${h("notif_categories")}
            </div>
            <div class="flex items-center gap-1">
              <span>${e("notifications.readState","Read State")}</span>
              ${h("notif_unread_state")}
            </div>
          </div>
        </div>

        <!-- Notification List -->
        <div class="flex flex-col gap-3" id="notificationsList">
          ${l.length===0?`
            <div class="p-space-xl bg-surface-container-lowest rounded-xl border border-outline-variant/30 text-center flex flex-col items-center justify-center gap-2">
              <span class="material-symbols-outlined text-[36px] text-on-surface-variant/60">notifications_off</span>
              <span class="font-headline-sm text-base text-on-surface font-bold">${e("notifications.noNotifications","No notifications to display")}</span>
              <p class="font-body-sm text-xs text-on-surface-variant">${e("notifications.noNotificationsDesc","There are currently no notifications under this filter.")}</p>
            </div>
          `:l.map(u=>{const f=u.severity==="critical"?"border-l-4 border-l-red-500 bg-red-50/20 dark:bg-red-950/20":u.severity==="high"?"border-l-4 border-l-orange-500 bg-orange-50/20 dark:bg-orange-950/20":"border-l-4 border-l-sky-500 bg-sky-50/20 dark:bg-sky-950/20",v=u.isRead?"opacity-85 border border-outline-variant/20 bg-surface-container-lowest":"border border-outline-variant/50 shadow-sm";return`
              <div class="p-space-md rounded-xl ${f} ${v} bg-surface-container-lowest flex flex-col md:flex-row md:items-center justify-between gap-space-sm transition-all" data-id="${u.id}">
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
    `;const o=t.querySelector("#markAllReadBtn");o&&o.addEventListener("click",()=>{U.markAllAsRead(),n(),a&&a()});const p=t.querySelector("#resetNotifsBtn");p&&p.addEventListener("click",()=>{U.resetAll(),n(),a&&a()});const d=t.querySelector("#filterAllBtn");d&&d.addEventListener("click",()=>{s="all",n()});const c=t.querySelector("#filterUnreadBtn");c&&c.addEventListener("click",()=>{s="unread",n()}),t.querySelectorAll(".notif-read-btn").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation();const v=u.getAttribute("data-id"),b=U.getAll().find(y=>y.id===v);if(b){const y=u.querySelector(".material-symbols-outlined");N.speak(`${b.category}. ${b.title}. ${b.summary}`,P.getLanguage(),w=>{y&&(y.textContent=w==="speaking"?"pause":"volume_up")})}})}),t.querySelectorAll(".toggle-read-btn").forEach(u=>{u.addEventListener("click",f=>{f.stopPropagation();const v=u.getAttribute("data-id"),b=U.getAll().find(y=>y.id===v);b!=null&&b.isRead?U.markAsUnread(v):U.markAsRead(v),n(),a&&a()})})}n()}const te="bs_token",O="bs_user";let ae=[];const L={async login(t,a){const s=await k.post("/api/auth/login",{email:t,password:a});return s.access_token&&(localStorage.setItem(te,s.access_token),localStorage.setItem(O,JSON.stringify(s.user)),this.notifyAuthChange(s.user)),s},async register(t){const a=await k.post("/api/auth/register",t);return a.access_token&&(localStorage.setItem(te,a.access_token),localStorage.setItem(O,JSON.stringify(a.user)),this.notifyAuthChange(a.user)),a},async getCurrentUser(){try{const t=await k.get("/api/auth/me");return localStorage.setItem(O,JSON.stringify(t)),this.notifyAuthChange(t),t}catch(t){return t.status===401&&this.logout(),null}},async verifySession(){if(!this.getStoredToken())return this.clearSession(),null;try{const a=await k.get("/api/auth/me");return a&&a.user_id?(localStorage.setItem(O,JSON.stringify(a)),a):(this.clearSession(),null)}catch{return this.clearSession(),null}},clearSession(){typeof window<"u"&&(localStorage.removeItem(te),localStorage.removeItem(O)),this.notifyAuthChange(null)},async logout(){try{await k.post("/api/auth/logout",{})}catch{}finally{this.clearSession()}},getStoredToken(){return typeof window<"u"?localStorage.getItem(te):null},getStoredUser(){if(typeof window>"u")return null;try{const t=localStorage.getItem(O);return t?JSON.parse(t):null}catch{return null}},getCurrentUserId(){var t;return((t=this.getStoredUser())==null?void 0:t.user_id)||null},getCurrentUserRole(){var t;return((t=this.getStoredUser())==null?void 0:t.role)||null},isAuthenticated(){return!!(this.getStoredToken()&&this.getStoredUser())},hasRole(t){const a=this.getStoredUser();return a&&a.role===t},isOfficer(){const t=this.getStoredUser();return t&&(t.role==="officer"||t.role==="super_admin")},isCitizen(){const t=this.getStoredUser();return t&&t.role==="citizen"},onAuthChange(t){return ae.push(t),()=>{ae=ae.filter(a=>a!==t)}},notifyAuthChange(t){ae.forEach(a=>{try{a(t)}catch(s){console.warn("Error in auth change listener:",s)}})}};let ne=null;function xe({role:t="citizen",mode:a="login",onSuccess:s=null}={}){he();let n=t,i=a,r="",l=!1;const o=document.createElement("div");o.id="bhoomiAuthModal",o.className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-labelledby","authModalTitle");const p=()=>{o.innerHTML=`
      <div class="bg-surface border border-outline-variant/60 rounded-2xl p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-5 animate-scale-in">
        
        <!-- Header & Close -->
        <div class="flex items-center justify-between border-b border-outline-variant/30 pb-3.5">
          <div class="flex items-center gap-2">
            <span class="p-1.5 rounded-lg ${n==="officer"?"bg-primary-container text-on-primary":"bg-primary text-on-primary"} flex items-center justify-center shadow-xs">
              <span class="material-symbols-outlined text-[20px]">${n==="officer"?"shield_person":"person"}</span>
            </span>
            <div>
              <h2 id="authModalTitle" class="text-base font-bold text-on-surface">
                ${i==="login"?n==="officer"?e("auth.officerSignIn","Officer Command Sign In"):e("auth.citizenSignIn","Citizen Sign In"):n==="officer"?e("auth.officerRegister","Officer Account Registration"):e("auth.citizenRegister","Create Citizen Account")}
              </h2>
              <span class="text-xs text-on-surface-variant font-label-sm">
                ${n==="officer"?"National Revenue & Land Acquisition Network":"Landholder Rights & Grievance Portal"}
              </span>
            </div>
          </div>
          <button id="closeAuthModalBtn" type="button" class="text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-colors" aria-label="Close authentication modal">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Role Selector Segmented Bar -->
        <div class="flex items-center p-1 bg-surface-container rounded-lg border border-outline-variant/40 text-xs font-semibold">
          <button type="button" id="tabRoleCitizen" class="flex-1 py-1.5 rounded-md transition-all flex items-center justify-center gap-1.5 ${n==="citizen"?"bg-primary text-on-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}">
            <span class="material-symbols-outlined text-[16px]">person</span>
            <span>Citizen / Landowner</span>
          </button>
          <button type="button" id="tabRoleOfficer" class="flex-1 py-1.5 rounded-md transition-all flex items-center justify-center gap-1.5 ${n==="officer"?"bg-primary text-on-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}">
            <span class="material-symbols-outlined text-[16px]">badge</span>
            <span>Revenue Officer</span>
          </button>
        </div>

        <!-- Mode Toggle (Sign In vs Register) -->
        <div class="flex items-center justify-center gap-2 text-xs">
          <span class="text-on-surface-variant">
            ${i==="login"?"Don't have an account yet?":"Already have an account?"}
          </span>
          <button type="button" id="toggleAuthModeBtn" class="font-bold text-primary hover:underline focus:outline-none">
            ${i==="login"?"Create an Account":"Sign In instead"}
          </button>
        </div>

        <!-- Error Message Banner -->
        ${r?`
          <div class="p-3 rounded-lg bg-error/10 border border-error/30 text-error text-xs flex items-start gap-2 animate-fade-in">
            <span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">error</span>
            <span class="font-medium">${r}</span>
          </div>
        `:""}

        <!-- Interactive Form -->
        <form id="authModalForm" class="space-y-3.5 text-xs">
          ${i==="register"?`
            <div>
              <label class="block font-semibold text-on-surface mb-1">Full Name *</label>
              <input type="text" id="authName" required placeholder="e.g. Rameshwar Patil" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          `:""}

          <div>
            <label class="block font-semibold text-on-surface mb-1">Email Address *</label>
            <input type="email" id="authEmail" required placeholder="${n==="officer"?"officer.name@gov.in":"citizen@example.com"}" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          ${i==="register"?`
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block font-semibold text-on-surface mb-1">Mobile Number</label>
                <input type="tel" id="authPhone" placeholder="+91 9822001122" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-tabular-data" />
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${n==="officer"?"District / Division":"District"}</label>
                <input type="text" id="authDistrict" placeholder="e.g. Pune" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
          `:""}

          ${i==="register"&&n==="officer"?`
            <div>
              <label class="block font-semibold text-on-surface mb-1 flex items-center justify-between">
                <span>Officer Registration Key *</span>
                <span class="text-[10px] text-on-surface-variant font-normal">Official Authorization</span>
              </label>
              <input type="password" id="authOfficerKey" required placeholder="Enter administrative authorization key" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-mono text-[11px]" />
            </div>
          `:""}

          <div>
            <label class="block font-semibold text-on-surface mb-1">Password *</label>
            <input type="password" id="authPassword" required minlength="6" placeholder="••••••••" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <div class="pt-2">
            <button type="submit" id="authSubmitBtn" ${l?"disabled":""} class="w-full py-2.5 bg-primary text-on-primary font-semibold rounded-lg hover:opacity-95 transition-all flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50">
              ${l?`
                <span class="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
                <span>Authenticating...</span>
              `:`
                <span class="material-symbols-outlined text-[16px]">lock_open</span>
                <span>${i==="login"?"Sign In to Portal":"Complete Registration"}</span>
              `}
            </button>
          </div>
        </form>

        <p class="text-[10px] text-center text-on-surface-variant leading-relaxed">
          Protected by Bhoomi Sakha Cryptographic Token Authentication. Data persists securely in the national MongoDB case cluster.
        </p>
      </div>
    `,o.querySelector("#closeAuthModalBtn").addEventListener("click",he),o.querySelector("#tabRoleCitizen").addEventListener("click",()=>{n!=="citizen"&&(n="citizen",r="",p())}),o.querySelector("#tabRoleOfficer").addEventListener("click",()=>{n!=="officer"&&(n="officer",r="",p())}),o.querySelector("#toggleAuthModeBtn").addEventListener("click",()=>{i=i==="login"?"register":"login",r="",p()}),o.querySelector("#authModalForm").addEventListener("submit",async c=>{var v,b,y;c.preventDefault(),r="",l=!0,p();const u=o.querySelector("#authEmail").value.trim(),f=o.querySelector("#authPassword").value;try{let w;if(i==="login")w=await L.login(u,f);else{const _=o.querySelector("#authName").value.trim(),T=((v=o.querySelector("#authPhone"))==null?void 0:v.value.trim())||"",C=((b=o.querySelector("#authDistrict"))==null?void 0:b.value.trim())||"",x={name:_,email:u,password:f,phone:T,district:C,role:n};n==="officer"&&(x.officer_key=((y=o.querySelector("#authOfficerKey"))==null?void 0:y.value.trim())||"",x.designation="Land Acquisition Officer",x.department="Revenue"),w=await L.register(x)}he(),s&&s(w.user)}catch(w){l=!1,r=w.message||"Authentication failed. Please verify credentials.",p()}})};p(),document.body.appendChild(o),ne=o}function he(){ne&&(ne.remove(),ne=null)}function H(t,{role:a="citizen",title:s="Citizen Portal Sign In Required",message:n="Please sign in or register to access your registered land records, calculate personalized delay risks, and file acquisition complaints.",onLoginSuccess:i=null}={}){t.innerHTML=`
    <div class="max-w-xl mx-auto py-16 px-4 animate-fade-in">
      <div class="bg-surface-container-low border border-outline-variant/50 rounded-2xl p-7 md:p-9 text-center shadow-md space-y-5">
        <div class="inline-flex p-3.5 rounded-full ${a==="officer"?"bg-primary-container text-on-primary":"bg-primary text-on-primary"} shadow-sm">
          <span class="material-symbols-outlined text-[36px]">${a==="officer"?"admin_panel_settings":"lock"}</span>
        </div>

        <div class="space-y-1.5">
          <h2 class="text-xl md:text-2xl font-bold font-headline-md text-on-surface">${s}</h2>
          <p class="text-xs md:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
            ${n}
          </p>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button id="gatewaySignInBtn" type="button" class="w-full sm:w-auto px-5 py-2.5 bg-primary text-on-primary font-semibold text-xs rounded-lg hover:opacity-95 transition-all shadow-sm flex items-center justify-center gap-1.5">
            <span class="material-symbols-outlined text-[18px]">login</span>
            <span>Sign In to Account</span>
          </button>

          <button id="gatewayRegisterBtn" type="button" class="w-full sm:w-auto px-5 py-2.5 bg-surface-container border border-outline-variant/60 text-on-surface font-semibold text-xs rounded-lg hover:bg-surface-container-high transition-all flex items-center justify-center gap-1.5">
            <span class="material-symbols-outlined text-[18px]">person_add</span>
            <span>Create New Account</span>
          </button>
        </div>

        <div class="pt-4 border-t border-outline-variant/20 flex items-center justify-center gap-4 text-xs text-on-surface-variant">
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[15px] text-emerald-600">verified_user</span>
            <span>Persistent MongoDB Storage</span>
          </span>
          <span>•</span>
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[15px] text-blue-600">key</span>
            <span>NIST PBKDF2 Encryption</span>
          </span>
        </div>
      </div>
    </div>
  `,t.querySelector("#gatewaySignInBtn").addEventListener("click",()=>{xe({role:a,mode:"login",onSuccess:i})}),t.querySelector("#gatewayRegisterBtn").addEventListener("click",()=>{xe({role:a,mode:"register",onSuccess:i})})}async function $e(t){const a=L.getStoredUser();if(!a||a.role!=="citizen"){H(t,{role:"citizen",title:e("auth.citizenGatewayTitle","Citizen Portal Sign In Required"),message:e("auth.citizenGatewayMsg","Please sign in or register your citizen account to manage your land holdings, check predictive delay risks, and view your grievance status."),onLoginSuccess:()=>$e(t)});return}t.innerHTML=`
    <div class="space-y-6 max-w-7xl mx-auto pb-12 animate-fade-in">
      <!-- Citizen Header / Greeting -->
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center justify-center p-1.5 rounded-lg bg-primary-container text-on-primary">
              <span class="material-symbols-outlined text-[22px]">person</span>
            </span>
            <span class="text-xs font-semibold uppercase tracking-wider text-primary font-label-sm">
              ${e("citizen.portalTitle","Citizen Land Rights & Case Portal")}
            </span>
          </div>
          <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface mt-1">
            ${e("citizen.welcome","Welcome")}, ${a.name}
          </h1>
          <p class="text-sm font-body-sm text-on-surface-variant mt-0.5">
            ${e("citizen.subtitle","Track your acquisition status, register land holdings, calculate delay risks, and manage grievances directly with authorities.")}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2.5">
          <a href="#/citizen-lands" class="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-xs font-semibold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[18px]">add_location_alt</span>
            <span>${e("citizen.addLandBtn","Add Land")}</span>
          </a>
          <a href="#/citizen-complaint" class="px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-xs font-semibold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[18px]">report_problem</span>
            <span>${e("citizen.fileGrievanceBtn","File Complaint")}</span>
          </a>
        </div>
      </div>

      <!-- Action Required Banner (Dynamic) -->
      <div id="citizenActionBanner" class="hidden"></div>

      <!-- Overview Metrics Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm">
          <div class="flex items-center justify-between text-on-surface-variant mb-1">
            <span class="text-xs font-label-sm">${e("citizen.statLands","Registered Lands")}</span>
            <span class="material-symbols-outlined text-[18px] text-primary">landscape</span>
          </div>
          <div class="text-2xl font-bold font-tabular-data text-on-surface" id="statLandsCount">-</div>
          <div class="text-[11px] text-on-surface-variant mt-1">${e("citizen.statLandsSub","Cadastral parcels")}</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm">
          <div class="flex items-center justify-between text-on-surface-variant mb-1">
            <span class="text-xs font-label-sm">${e("citizen.statCases","Active Cases")}</span>
            <span class="material-symbols-outlined text-[18px] text-secondary">gavel</span>
          </div>
          <div class="text-2xl font-bold font-tabular-data text-on-surface" id="statCasesCount">-</div>
          <div class="text-[11px] text-on-surface-variant mt-1">${e("citizen.statCasesSub","In process / review")}</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm">
          <div class="flex items-center justify-between text-on-surface-variant mb-1">
            <span class="text-xs font-label-sm">${e("citizen.statDocsPending","Pending Actions")}</span>
            <span class="material-symbols-outlined text-[18px] text-amber-500">pending_actions</span>
          </div>
          <div class="text-2xl font-bold font-tabular-data text-on-surface" id="statPendingActionsCount">-</div>
          <div class="text-[11px] text-on-surface-variant mt-1">${e("citizen.statDocsSub","Officer requests")}</div>
        </div>

        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm">
          <div class="flex items-center justify-between text-on-surface-variant mb-1">
            <span class="text-xs font-label-sm">${e("citizen.statRisk","Latest Risk")}</span>
            <span class="material-symbols-outlined text-[18px] text-emerald-500">analytics</span>
          </div>
          <div class="text-2xl font-bold text-on-surface" id="statLatestRisk">-</div>
          <div class="text-[11px] text-on-surface-variant mt-1">${e("citizen.statRiskSub","Delay probability")}</div>
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
              ${e("citizen.actionMyLandTitle","My Land Records")}
            </h3>
            <p class="text-xs text-on-surface-variant mt-1 line-clamp-2">
              ${e("citizen.actionMyLandDesc","View registered survey numbers, area, village details, and government acquisition status.")}
            </p>
          </div>
          <div class="flex items-center gap-1 text-xs text-primary font-semibold mt-4">
            <span>${e("citizen.viewRecords","View Holdings")}</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </a>

        <a href="#/citizen-risk" class="group bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/60 rounded-xl p-5 transition-all shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <span class="material-symbols-outlined">speed</span>
            </div>
            <h3 class="font-headline-sm text-base font-bold text-on-surface group-hover:text-primary transition-colors">
              ${e("citizen.actionRiskTitle","Check Delay Risk")}
            </h3>
            <p class="text-xs text-on-surface-variant mt-1 line-clamp-2">
              ${e("citizen.actionRiskDesc","Use AI predictive analysis to estimate acquisition delay risks and compensation timeline.")}
            </p>
          </div>
          <div class="flex items-center gap-1 text-xs text-primary font-semibold mt-4">
            <span>${e("citizen.runEstimate","Run AI Assessment")}</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </a>

        <a href="#/citizen-complaint" class="group bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/60 rounded-xl p-5 transition-all shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <span class="material-symbols-outlined">rate_review</span>
            </div>
            <h3 class="font-headline-sm text-base font-bold text-on-surface group-hover:text-primary transition-colors">
              ${e("citizen.actionComplaintTitle","File Complaint")}
            </h3>
            <p class="text-xs text-on-surface-variant mt-1 line-clamp-2">
              ${e("citizen.actionComplaintDesc","Lodge grievances for pending compensation, measurement errors, notice issues, or mutation.")}
            </p>
          </div>
          <div class="flex items-center gap-1 text-xs text-primary font-semibold mt-4">
            <span>${e("citizen.registerGrievance","Lodge Grievance")}</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </a>

        <a href="#/citizen-cases" class="group bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/60 rounded-xl p-5 transition-all shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <span class="material-symbols-outlined">track_changes</span>
            </div>
            <h3 class="font-headline-sm text-base font-bold text-on-surface group-hover:text-primary transition-colors">
              ${e("citizen.actionTrackingTitle","Track My Cases")}
            </h3>
            <p class="text-xs text-on-surface-variant mt-1 line-clamp-2">
              ${e("citizen.actionTrackingDesc","Real-time case progress, official officer actions, verified documents, and resolution history.")}
            </p>
          </div>
          <div class="flex items-center gap-1 text-xs text-primary font-semibold mt-4">
            <span>${e("citizen.viewCases","Open Tracker")}</span>
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
              ${e("citizen.recentCasesTitle","My Recent Cases & Grievances")}
            </h2>
          </div>
          <a href="#/citizen-cases" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            <span>${e("citizen.seeAllCases","View All Cases")}</span>
            <span class="material-symbols-outlined text-[14px]">chevron_right</span>
          </a>
        </div>

        <div id="citizenRecentCasesList" class="space-y-3">
          <div class="py-8 text-center text-on-surface-variant text-sm">
            <span class="animate-spin inline-block mr-2 material-symbols-outlined text-[18px]">progress_activity</span>
            ${e("common.loading","Loading case records...")}
          </div>
        </div>
      </div>
    </div>
  `,mt(a.user_id)}async function mt(t){const a=document.getElementById("statLandsCount"),s=document.getElementById("statCasesCount"),n=document.getElementById("statPendingActionsCount"),i=document.getElementById("statLatestRisk"),r=document.getElementById("citizenRecentCasesList"),l=document.getElementById("citizenActionBanner");try{let o=[];try{o=await S.getUserLands(t)}catch{o=[]}a&&(a.textContent=o.length);let p=[];try{p=await S.getUserCases(t)}catch{p=[]}if(s){const c=p.filter(u=>!["resolved","closed","rejected"].includes(u.status)).length;s.textContent=c}const d=p.filter(c=>c.status==="documents_required");if(n&&(n.textContent=d.length),d.length>0&&l&&(l.className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-amber-900 dark:text-amber-200",l.innerHTML=`
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[24px]">notification_important</span>
          <div>
            <div class="font-bold text-sm">${e("citizen.docRequiredBannerTitle","Action Required: Supporting Document Requested")}</div>
            <div class="text-xs opacity-90">${e("citizen.docRequiredBannerDesc","An officer has requested documents for case")} <strong>${d[0].case_id}</strong>.</div>
          </div>
        </div>
        <a href="#/citizen-cases?id=${encodeURIComponent(d[0].case_id)}" class="px-3.5 py-1.5 bg-amber-600 text-white font-semibold text-xs rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap shadow-sm">
          ${e("citizen.uploadNowBtn","Respond & Upload")}
        </a>
      `),i){const c=p.find(u=>u.risk_probability!==null&&u.risk_probability!==void 0);if(c){const u=Math.round(c.risk_probability*100);i.textContent=`${u}% (${c.risk_level||"EST"})`,i.className=`text-2xl font-bold font-tabular-data ${u>=65?"text-error":u>=35?"text-amber-500":"text-emerald-600"}`}else i.textContent="None",i.className="text-2xl font-bold text-on-surface-variant"}if(r)if(p.length===0)r.innerHTML=`
          <div class="text-center py-8 text-on-surface-variant">
            <span class="material-symbols-outlined text-[36px] opacity-40">assignment_turned_in</span>
            <div class="font-medium text-sm mt-1">${e("citizen.noCases","No active cases filed yet.")}</div>
            <p class="text-xs opacity-80 mt-0.5">${e("citizen.noCasesSub","If you have an issue with land compensation or survey measurement, you can file a complaint directly.")}</p>
            <a href="#/citizen-complaint" class="inline-block mt-3 px-3 py-1.5 bg-primary text-on-primary text-xs font-semibold rounded-lg hover:opacity-95">
              ${e("citizen.fileGrievanceBtn","File First Complaint")}
            </a>
          </div>
        `;else{const c={submitted:"bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",received:"bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",assigned:"bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200",under_review:"bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",documents_required:"bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200 animate-pulse",investigation:"bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200",action_taken:"bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200",escalated:"bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200",resolved:"bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",closed:"bg-slate-100 text-slate-800 dark:bg-slate-900/40 dark:text-slate-300",rejected:"bg-neutral-100 text-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-300"};r.innerHTML=p.slice(0,5).map(u=>`
          <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-primary/40 transition-colors">
            <div class="flex items-start gap-3">
              <span class="p-2 rounded bg-surface-container text-on-surface-variant shrink-0 mt-0.5">
                <span class="material-symbols-outlined text-[20px]">description</span>
              </span>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-tabular-data font-bold text-sm text-on-surface">${u.case_id}</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-semibold uppercase ${c[u.status]||"bg-surface-container text-on-surface"}">
                    ${u.status.replace("_"," ")}
                  </span>
                  ${u.priority==="high"||u.priority==="critical"?`<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-error/10 text-error uppercase">${u.priority}</span>`:""}
                </div>
                <div class="text-xs text-on-surface font-medium mt-1">
                  ${u.category.replace(/_/g," ").toUpperCase()}
                </div>
                <div class="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">
                  ${u.description}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
              <a href="#/citizen-cases?id=${encodeURIComponent(u.case_id)}" class="px-3 py-1.5 rounded-lg border border-outline-variant/60 hover:bg-surface-container text-xs font-semibold text-primary transition-colors flex items-center gap-1">
                <span>${e("citizen.trackBtn","Track Case")}</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        `).join("")}}catch(o){console.error("[CitizenDashboard] Error loading dashboard data:",o),r&&(r.innerHTML=`
        <div class="text-center py-6 text-error text-xs">
          ${e("common.errorLoading","Failed to load case data. Please try again.")}
        </div>
      `)}}async function Ee(t){const a=L.getStoredUser();if(!a||a.role!=="citizen"){H(t,{role:"citizen",title:e("auth.citizenLandGatewayTitle","Sign In to Access Your Land Holdings"),message:e("auth.citizenLandGatewayMsg","Access cadastral parcels, view compensation records, and register survey numbers under your verified account."),onLoginSuccess:()=>Ee(t)});return}t.innerHTML=`
    <div class="space-y-6 max-w-7xl mx-auto pb-12 animate-fade-in">
      <!-- Breadcrumb & Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-label-sm mb-1">
            <a href="#/citizen-dashboard" class="hover:text-primary transition-colors">${e("nav.citizenDashboard","Citizen Portal")}</a>
            <span>/</span>
            <span class="text-on-surface font-semibold">${e("nav.myLand","My Land Records")}</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface">
            ${e("citizen.landHeader","Registered Land Parcels")}
          </h1>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            ${e("citizen.landSub","Manage your survey numbers, declared area, and view official notification milestones.")}
          </p>
        </div>

        <button id="openAddLandModalBtn" type="button" class="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-xs font-semibold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-sm">
          <span class="material-symbols-outlined text-[18px]">add</span>
          <span>${e("citizen.registerNewLand","Register New Land Record")}</span>
        </button>
      </div>

      <!-- Land Records Container -->
      <div id="citizenLandsContainer" class="space-y-4">
        <div class="py-12 text-center text-on-surface-variant text-sm bg-surface-container-low border border-outline-variant/30 rounded-xl">
          <span class="animate-spin inline-block mr-2 material-symbols-outlined text-[20px]">progress_activity</span>
          ${e("common.loading","Loading land records...")}
        </div>
      </div>

      <!-- Modal Dialog: Register / Edit Land -->
      <div id="landModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <div class="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
            <h2 id="modalTitle" class="text-lg font-headline-sm font-bold text-on-surface">
              ${e("citizen.modalAddTitle","Register Land Record")}
            </h2>
            <button id="closeLandModalBtn" type="button" class="text-on-surface-variant hover:text-on-surface p-1 rounded-lg">
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <form id="landForm" class="space-y-3.5 text-xs">
            <input type="hidden" id="editLandId" value="" />

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldState","State")} *</label>
                <input type="text" id="landState" required value="Maharashtra" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldDistrict","District")} *</label>
                <input type="text" id="landDistrict" required placeholder="e.g. Pune" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldTaluka","Taluka")} *</label>
                <input type="text" id="landTaluka" required placeholder="e.g. Haveli" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldVillage","Village")} *</label>
                <input type="text" id="landVillage" required placeholder="e.g. Wagholi" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldSurvey","Survey / Gat No.")} *</label>
                <input type="text" id="landSurvey" required placeholder="e.g. 142/3B" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldArea","Area (Hectares)")} *</label>
                <input type="number" step="0.01" min="0.01" id="landArea" required placeholder="e.g. 1.75" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldLandType","Land Type")}</label>
                <select id="landType" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="Agricultural">Agricultural</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Residential">Residential</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldAcquisitionStatus","Acquisition Status")}</label>
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
              <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldProject","Associated Project (Optional)")}</label>
              <input type="text" id="landProject" placeholder="e.g. Pune Ring Road Section 2" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div class="p-3 bg-primary/5 border border-primary/20 rounded-lg text-[11px] text-on-surface-variant flex items-start gap-2">
              <span class="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">verified_user</span>
              <span>${e("citizen.landDeclarationNote","Citizen-Declared Information. Official cadastral boundaries and awards will be cross-checked during officer review.")}</span>
            </div>

            <div class="flex items-center justify-end gap-2 pt-2 border-t border-outline-variant/30">
              <button type="button" id="cancelLandBtn" class="px-4 py-2 border border-outline-variant/60 rounded-lg text-on-surface font-semibold hover:bg-surface-container transition-colors">
                ${e("common.cancel","Cancel")}
              </button>
              <button type="submit" id="saveLandSubmitBtn" class="px-4 py-2 bg-primary text-on-primary rounded-lg font-semibold hover:opacity-95 transition-all shadow-sm">
                ${e("common.save","Save Record")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;const s=document.getElementById("landModal"),n=document.getElementById("openAddLandModalBtn"),i=document.getElementById("closeLandModalBtn"),r=document.getElementById("cancelLandBtn"),l=document.getElementById("landForm"),o=(d=!1,c=null)=>{document.getElementById("modalTitle").textContent=d?e("citizen.modalEditTitle","Edit Land Record"):e("citizen.modalAddTitle","Register Land Record"),document.getElementById("editLandId").value=d&&c?c.land_id:"",d&&c?(document.getElementById("landState").value=c.state||"Maharashtra",document.getElementById("landDistrict").value=c.district||"",document.getElementById("landTaluka").value=c.taluka||"",document.getElementById("landVillage").value=c.village||"",document.getElementById("landSurvey").value=c.survey_number||"",document.getElementById("landArea").value=c.area_hectares||"",document.getElementById("landType").value=c.land_type||"Agricultural",document.getElementById("landAcquisitionStatus").value=c.acquisition_status||"not_notified",document.getElementById("landProject").value=c.project_id||""):(l.reset(),document.getElementById("landState").value="Maharashtra",document.getElementById("editLandId").value=""),s.classList.remove("hidden")},p=()=>{s.classList.add("hidden"),l.reset()};n&&n.addEventListener("click",()=>o(!1)),i&&i.addEventListener("click",p),r&&r.addEventListener("click",p),l.addEventListener("submit",async d=>{d.preventDefault();const c=document.getElementById("editLandId").value,u={state:document.getElementById("landState").value.trim(),district:document.getElementById("landDistrict").value.trim(),taluka:document.getElementById("landTaluka").value.trim(),village:document.getElementById("landVillage").value.trim(),survey_number:document.getElementById("landSurvey").value.trim(),area_hectares:parseFloat(document.getElementById("landArea").value),land_type:document.getElementById("landType").value,acquisition_status:document.getElementById("landAcquisitionStatus").value,project_id:document.getElementById("landProject").value.trim()||null};try{const f=document.getElementById("saveLandSubmitBtn");f.disabled=!0,f.textContent="Saving...",c?await S.updateLand(c,u):await S.createLand({owner_id:a.user_id,...u}),p(),Me(a.user_id,o)}catch(f){alert(`Error saving land record: ${f.message}`)}finally{const f=document.getElementById("saveLandSubmitBtn");f&&(f.disabled=!1,f.textContent=e("common.save","Save Record"))}}),Me(a.user_id,o)}async function Me(t,a){const s=document.getElementById("citizenLandsContainer");if(s)try{const n=await S.getUserLands(t);if(n.length===0){s.innerHTML=`
        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-8 text-center text-on-surface-variant">
          <span class="material-symbols-outlined text-[44px] text-primary/40">landscape</span>
          <h3 class="text-base font-bold text-on-surface mt-2">${e("citizen.noLandsTitle","No Land Parcels Registered Yet")}</h3>
          <p class="text-xs text-on-surface-variant max-w-md mx-auto mt-1">
            ${e("citizen.noLandsDesc","Register your agricultural or residential land parcels to monitor acquisition notices, estimate delay risks, and file grievance cases.")}
          </p>
          <button id="addFirstLandBtn" type="button" class="mt-4 px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-semibold hover:opacity-95 shadow-sm inline-flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">add</span>
            <span>${e("citizen.registerNewLand","Register New Land Record")}</span>
          </button>
        </div>
      `;const i=document.getElementById("addFirstLandBtn");i&&i.addEventListener("click",()=>a(!1));return}s.innerHTML=n.map(i=>`
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 shadow-sm space-y-4 hover:border-primary/40 transition-colors">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-outline-variant/30 pb-3">
          <div class="flex items-center gap-3">
            <span class="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
              <span class="material-symbols-outlined text-[24px]">pin_drop</span>
            </span>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-base text-on-surface font-tabular-data">${i.village}, Survey ${i.survey_number}</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-primary-container text-on-primary uppercase">${i.land_type}</span>
              </div>
              <div class="text-xs text-on-surface-variant mt-0.5">
                ${i.taluka}, ${i.district}, ${i.state} • ID: <span class="font-tabular-data font-semibold text-on-surface">${i.land_id}</span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 self-end sm:self-center">
            <a href="#/citizen-risk?land_id=${encodeURIComponent(i.land_id)}" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-1 shadow-xs">
              <span class="material-symbols-outlined text-[14px]">speed</span>
              <span>${e("citizen.checkRiskBtn","Check Risk")}</span>
            </a>
            <a href="#/citizen-complaint?land_id=${encodeURIComponent(i.land_id)}" class="px-3 py-1.5 bg-secondary text-on-secondary rounded-lg text-xs font-semibold hover:opacity-95 transition-colors flex items-center gap-1 shadow-xs">
              <span class="material-symbols-outlined text-[14px]">report_problem</span>
              <span>${e("citizen.fileGrievanceBtn","File Complaint")}</span>
            </a>
            <button class="edit-land-btn p-1.5 text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors" data-id="${i.land_id}" title="Edit Land Details">
              <span class="material-symbols-outlined text-[18px]">edit</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
            <span class="text-on-surface-variant text-[11px] block">${e("citizen.landArea","Declared Area")}</span>
            <span class="text-sm font-bold font-tabular-data text-on-surface mt-0.5 block">${i.area_hectares} Ha</span>
          </div>

          <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
            <span class="text-on-surface-variant text-[11px] block">${e("citizen.fieldAcquisitionStatus","Acquisition Status")}</span>
            <span class="text-xs font-bold text-on-surface mt-0.5 block capitalize">${(i.acquisition_status||"not_notified").replace(/_/g," ")}</span>
          </div>

          <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
            <span class="text-on-surface-variant text-[11px] block">${e("citizen.fieldProject","Associated Project")}</span>
            <span class="text-xs font-semibold text-on-surface mt-0.5 block truncate">${i.project_id||"Direct Public Acquisition"}</span>
          </div>

          <div class="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30">
            <span class="text-on-surface-variant text-[11px] block">${e("citizen.registeredOn","Registration Date")}</span>
            <span class="text-xs font-tabular-data text-on-surface mt-0.5 block">${new Date(i.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    `).join(""),s.querySelectorAll(".edit-land-btn").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-id"),l=n.find(o=>o.land_id===r);l&&a(!0,l)})})}catch(n){s.innerHTML=`
      <div class="p-6 bg-error/10 border border-error/20 rounded-xl text-center text-error text-xs">
        Failed to load land holdings: ${n.message}
      </div>
    `}}async function ft(t){const s=new URLSearchParams(window.location.hash.split("?")[1]||"").get("land_id"),n=L.getStoredUser(),i=(n==null?void 0:n.user_id)||null;t.innerHTML=`
    <div class="space-y-6 max-w-7xl mx-auto pb-12 animate-fade-in">
      <!-- Breadcrumb & Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-label-sm mb-1">
            <a href="#/citizen-dashboard" class="hover:text-primary transition-colors">${e("nav.citizenDashboard","Citizen Portal")}</a>
            <span>/</span>
            <span class="text-on-surface font-semibold">${e("nav.checkDelayRisk","Check Delay Risk")}</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface">
            ${e("citizen.riskHeader","AI Land Acquisition Delay-Risk Estimator")}
          </h1>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            ${e("citizen.riskSub","Analyze compensation delays, administrative bottlenecks, and document processing timelines for your parcel.")}
          </p>
        </div>
      </div>

      <!-- Legal & Advisory Disclaimer Notice -->
      <div class="p-4 bg-primary/5 border border-primary/20 rounded-xl text-xs text-on-surface-variant flex items-start gap-3 shadow-xs">
        <span class="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">info</span>
        <div>
          <span class="font-bold text-on-surface block mb-0.5">${e("citizen.disclaimerTitle","Official Predictive Analytics Notice")}</span>
          <span>${e("citizen.disclaimerText","This is an estimated predictive assessment based on the information provided and machine-learning models trained on historical land acquisition milestones. It is not a legal determination, guarantee, or statutory court order.")}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Assessment Form (Left Column) -->
        <div class="lg:col-span-6 bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm space-y-4">
          <h2 class="text-base font-headline-sm font-bold text-on-surface border-b border-outline-variant/30 pb-2 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">tune</span>
            <span>${e("citizen.step1Title","Parcel & Milestone Information")}</span>
          </h2>

          <form id="citizenRiskForm" class="space-y-4 text-xs">
            <div>
              <label class="block font-semibold text-on-surface mb-1">${e("citizen.selectLand","Select Registered Land")}</label>
              <select id="riskLandSelect" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">-- ${e("citizen.chooseLandOrManual","Choose a registered land or enter manual details")} --</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldArea","Land Area (Hectares)")} *</label>
                <input type="number" id="riskArea" step="0.01" min="0.01" required value="2.5" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldLandType","Land Type")}</label>
                <select id="riskLandType" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="Agricultural">Agricultural</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Residential">Residential</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldCurrentStage","Current Acquisition Stage")}</label>
                <select id="riskStage" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="Notification">Notification (Sec 4)</option>
                  <option value="Survey">Joint Measurement Survey</option>
                  <option value="Valuation">Valuation & Award Hearing</option>
                  <option value="Compensation" selected>Compensation Disbursement</option>
                  <option value="Possession">Possession Handover</option>
                  <option value="Rehabilitation">Rehabilitation & Resettlement</option>
                  <option value="Closure">Final Closure</option>
                </select>
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${e("citizen.daysSinceNotice","Days Since Initial Notice")}</label>
                <input type="number" id="riskDaysNotice" min="0" value="180" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div class="border-t border-outline-variant/30 pt-3 space-y-3">
              <span class="text-xs font-bold text-on-surface block uppercase tracking-wider text-primary">${e("citizen.compensationStatus","Compensation Status")}</span>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block font-semibold text-on-surface mb-1">${e("citizen.compensationReceived","Have you received compensation?")}</label>
                  <select id="riskCompensationStatus" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="pending" selected>No / Pending Award</option>
                    <option value="partial">Partially Received</option>
                    <option value="full">Fully Received</option>
                    <option value="dispute">In Legal Dispute</option>
                  </select>
                </div>
                <div>
                  <label class="block font-semibold text-on-surface mb-1">${e("citizen.activeDisputes","Active Legal / Court Objections")}</label>
                  <select id="riskLegalDisputes" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="0" selected>None</option>
                    <option value="1">1 Active Objection / Stay</option>
                    <option value="2">Multiple Disputes</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block font-semibold text-on-surface mb-1">${e("citizen.docsSubmitted","Documentation Status")}</label>
                  <select id="riskDocsStatus" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="complete">All Documents Submitted & Verified</option>
                    <option value="pending" selected>Some Documents Pending / Verification Awaited</option>
                    <option value="rejected">Document Mutation Disputed</option>
                  </select>
                </div>
                <div>
                  <label class="block font-semibold text-on-surface mb-1">${e("citizen.possessionStatus","Land Possession")}</label>
                  <select id="riskPossessionStatus" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="owner" selected>Still in Landowner Possession</option>
                    <option value="taken">Possession Taken by Authority</option>
                    <option value="disputed">Possession Disputed</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" id="calculateRiskBtn" class="w-full py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-xs font-semibold hover:opacity-95 transition-all shadow-sm flex items-center justify-center gap-2 mt-2">
              <span class="material-symbols-outlined text-[18px]">neurology</span>
              <span>${e("citizen.runModelBtn","Calculate Estimated Delay Risk")}</span>
            </button>
          </form>
        </div>

        <!-- Assessment Results (Right Column) -->
        <div class="lg:col-span-6 bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h2 class="text-base font-headline-sm font-bold text-on-surface border-b border-outline-variant/30 pb-2 flex items-center gap-2">
              <span class="material-symbols-outlined text-emerald-600 text-[20px]">analytics</span>
              <span>${e("citizen.assessmentResultsTitle","Predictive Analysis Results")}</span>
            </h2>

            <div id="riskResultPlaceholder" class="py-16 text-center text-on-surface-variant space-y-2">
              <span class="material-symbols-outlined text-[48px] text-primary/30">insights</span>
              <div class="font-medium text-sm">${e("citizen.readyToAssess","Ready to evaluate delay risk")}</div>
              <p class="text-xs max-w-sm mx-auto opacity-80">${e("citizen.readyToAssessSub","Fill in your parcel details and click Calculate to run the ML model.")}</p>
            </div>

            <div id="riskResultContent" class="hidden space-y-5 animate-fade-in">
              <!-- Score Badge Banner -->
              <div class="p-5 rounded-xl border flex items-center justify-between" id="riskBannerContainer">
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider font-label-sm" id="riskLevelText">HIGH RISK</span>
                  <div class="text-3xl font-extrabold font-tabular-data mt-0.5" id="riskProbabilityText">78%</div>
                  <span class="text-xs opacity-90">${e("citizen.riskProbLabel","Predicted Probability of Acquisition Delay")}</span>
                </div>
                <div class="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl border-4" id="riskCircleScore">
                  !
                </div>
              </div>

              <!-- Risk Drivers (What increases delay) -->
              <div class="space-y-2">
                <span class="font-bold text-xs text-on-surface flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-error text-[16px]">warning</span>
                  <span>${e("citizen.keyFactors","Primary Delay Risk Factors")}</span>
                </span>
                <ul id="riskDriversList" class="space-y-1.5 text-xs text-on-surface-variant"></ul>
              </div>

              <!-- Recommendations / Next Steps -->
              <div class="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded-xl space-y-2 text-xs">
                <span class="font-bold text-on-surface flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-primary text-[16px]">lightbulb</span>
                  <span>${e("citizen.recommendedAction","Recommended Action for Citizen")}</span>
                </span>
                <p id="riskRecommendationText" class="text-on-surface-variant leading-relaxed"></p>
              </div>
            </div>
          </div>

          <!-- Bottom Action: Link to Complaint Filing -->
          <div id="fileComplaintPrefilledAction" class="hidden pt-4 border-t border-outline-variant/30">
            <button id="fileComplaintWithRiskBtn" type="button" class="w-full py-2.5 bg-secondary text-on-secondary rounded-lg font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-sm transition-all">
              <span class="material-symbols-outlined text-[18px]">report_problem</span>
              <span>${e("citizen.fileGrievanceWithData","File Official Grievance With This Assessment")}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,i&&gt(i,s);const r=document.getElementById("citizenRiskForm");let l=null;r.addEventListener("submit",async p=>{p.preventDefault();const d=document.getElementById("calculateRiskBtn");d.disabled=!0,d.innerHTML=`
      <span class="animate-spin material-symbols-outlined text-[18px]">progress_activity</span>
      <span>${e("citizen.evaluatingRisk","Running ML Model...")}</span>
    `;try{const c=parseFloat(document.getElementById("riskArea").value)||2.5,u=document.getElementById("riskStage").value,f=parseInt(document.getElementById("riskDaysNotice").value,10)||180,v=document.getElementById("riskCompensationStatus").value,b=parseInt(document.getElementById("riskLegalDisputes").value,10)||0,y=document.getElementById("riskDocsStatus").value,w=document.getElementById("riskPossessionStatus").value,_={snapshot_day:f,project_type:"Highway",land_type:document.getElementById("riskLandType").value,priority:"High",current_stage:u,land_area_hectares:c,affected_families:Math.max(1,Math.round(c*3)),complexity_score:v==="dispute"?4.5:v==="pending"?3.5:2,days_since_notification:f,planned_duration_days:365,days_elapsed:f,schedule_variance_days:f>180?f-180:0,total_parcels:20,parcels_acquired:v==="full"?18:v==="partial"?8:2,parcels_pending:v==="full"?2:v==="partial"?12:18,acquisition_progress_pct:v==="full"?90:v==="partial"?40:10,documents_required:50,documents_verified:y==="complete"?48:y==="pending"?25:10,documents_pending:y==="complete"?2:y==="pending"?25:40,documentation_completion_pct:y==="complete"?96:y==="pending"?50:20,active_legal_disputes:b,court_stay_cases:b>1?1:0,compensation_completion_pct:v==="full"?100:v==="partial"?40:0,compensation_pending_cases:v==="full"?0:5,possession_progress_pct:w==="taken"?100:w==="disputed"?20:0},T=await ce.predictRisk(_);l={probability:T.delay_probability||.5,level:T.risk_level||"MEDIUM",drivers:T.risk_drivers||[],land_id:document.getElementById("riskLandSelect").value||null},bt(l)}catch(c){alert(`Prediction failed: ${c.message}`)}finally{d.disabled=!1,d.innerHTML=`
        <span class="material-symbols-outlined text-[18px]">neurology</span>
        <span>${e("citizen.runModelBtn","Calculate Estimated Delay Risk")}</span>
      `}});const o=document.getElementById("fileComplaintWithRiskBtn");o&&o.addEventListener("click",()=>{if(!l)return;const p=new URLSearchParams;l.land_id&&p.set("land_id",l.land_id),p.set("risk_probability",l.probability.toFixed(3)),p.set("risk_level",l.level),window.location.hash=`#/citizen-complaint?${p.toString()}`})}async function gt(t,a){const s=document.getElementById("riskLandSelect");if(s)try{const n=await S.getUserLands(t);if(n.forEach(i=>{const r=document.createElement("option");r.value=i.land_id,r.textContent=`${i.village} (Survey ${i.survey_number}) - ${i.area_hectares} Ha`,a&&i.land_id===a&&(r.selected=!0),s.appendChild(r)}),s.addEventListener("change",()=>{const i=n.find(r=>r.land_id===s.value);i&&(document.getElementById("riskArea").value=i.area_hectares,document.getElementById("riskLandType").value=i.land_type||"Agricultural")}),a){const i=n.find(r=>r.land_id===a);i&&(document.getElementById("riskArea").value=i.area_hectares,document.getElementById("riskLandType").value=i.land_type||"Agricultural")}}catch{}}function bt(t){const a=document.getElementById("riskResultPlaceholder"),s=document.getElementById("riskResultContent"),n=document.getElementById("fileComplaintPrefilledAction");a&&a.classList.add("hidden"),s&&s.classList.remove("hidden"),n&&n.classList.remove("hidden");const i=Math.round(t.probability*100),r=t.level==="HIGH"||t.level==="CRITICAL"||i>=65,l=t.level==="MEDIUM"||i>=35&&i<65,o=document.getElementById("riskBannerContainer"),p=document.getElementById("riskLevelText"),d=document.getElementById("riskProbabilityText"),c=document.getElementById("riskCircleScore"),u=document.getElementById("riskDriversList"),f=document.getElementById("riskRecommendationText");o&&(o.className=r?"p-5 rounded-xl border bg-rose-500/10 border-rose-500/30 text-rose-950 dark:text-rose-100 flex items-center justify-between":l?"p-5 rounded-xl border bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-100 flex items-center justify-between":"p-5 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-100 flex items-center justify-between"),p&&(p.textContent=`${t.level} DELAY RISK`),d&&(d.textContent=`${i}%`),c&&(c.textContent=`${i}%`,c.className=`w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm border-4 ${r?"border-rose-500 bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-200":l?"border-amber-500 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-200":"border-emerald-500 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-200"}`),u&&(t.drivers&&t.drivers.length>0?u.innerHTML=t.drivers.slice(0,3).map(v=>`
        <li class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-error shrink-0"></span>
          <span>${v.feature?v.feature.replace(/_/g," "):v}: High contribution to predicted delay</span>
        </li>
      `).join(""):u.innerHTML=`
        <li class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
          <span>Pending disbursement milestone and verification duration.</span>
        </li>
      `),f&&(r?f.textContent="High probability of procedural delay detected. Filing a formal grievance with the Special Land Acquisition Officer (SLAO) is strongly recommended to initiate priority verification.":l?f.textContent="Moderate delay risk identified. Ensure all 7/12 extracts, mutation records, and bank account proofs are submitted to the competent authority to prevent hold-ups.":f.textContent="Low delay risk. Acquisition milestones appear on track based on standard statutory processing timelines.")}async function Ue(t){const a=new URLSearchParams(window.location.hash.split("?")[1]||""),s=a.get("land_id"),n=a.get("risk_probability"),i=a.get("risk_level"),r=L.getStoredUser();if(!r||r.role!=="citizen"){H(t,{role:"citizen",title:e("auth.citizenComplaintGatewayTitle","Sign In to File Land Acquisition Grievance"),message:e("auth.citizenComplaintGatewayMsg","Authenticated identity is required to generate statutory case IDs, assign revenue officers, and track dispute timelines."),onLoginSuccess:()=>Ue(t)});return}t.innerHTML=`
    <div class="space-y-6 max-w-4xl mx-auto pb-12 animate-fade-in">
      <!-- Breadcrumb & Header -->
      <div>
        <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-label-sm mb-1">
          <a href="#/citizen-dashboard" class="hover:text-primary transition-colors">${e("nav.citizenDashboard","Citizen Portal")}</a>
          <span>/</span>
          <span class="text-on-surface font-semibold">${e("nav.fileComplaint","File Grievance")}</span>
        </div>
        <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface">
          ${e("citizen.fileGrievanceTitle","File Official Land Grievance")}
        </h1>
        <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
          ${e("citizen.fileGrievanceSub","Submit your grievance directly to the Special Land Acquisition Officer. Each case is assigned a permanent tracking ID.")}
        </p>
      </div>

      ${i?`
        <div class="p-3.5 bg-primary/5 border border-primary/20 rounded-xl text-xs flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[18px]">verified</span>
            <span>Attached AI Delay Assessment: <strong>${Math.round(parseFloat(n)*100)}% (${i})</strong></span>
          </div>
          <span class="text-[11px] text-primary font-semibold uppercase">Auto-attached</span>
        </div>
      `:""}

      <!-- Form Container -->
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-6 shadow-sm">
        <form id="grievanceForm" class="space-y-4 text-xs">
          <!-- Step 1: Land Record -->
          <div>
            <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldSelectLandParcel","Select Land Holding / Parcel")} *</label>
            <select id="caseLandId" required class="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">-- Choose registered land parcel --</option>
            </select>
            <div id="noLandsPrompt" class="hidden p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs flex items-center justify-between gap-2 mt-2">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px] text-amber-600 dark:text-amber-400">warning</span>
                <span>No registered land records found under your account. Please register your parcel before submitting a formal grievance.</span>
              </div>
              <a href="#/citizen-lands" class="px-2.5 py-1 bg-primary text-on-primary rounded font-semibold text-[11px] whitespace-nowrap shadow-xs">Register Land</a>
            </div>
            <div class="flex items-center justify-between text-[11px] text-on-surface-variant mt-1.5">
              <span>Parcel not registered?</span>
              <a href="#/citizen-lands" class="text-primary font-semibold hover:underline flex items-center gap-0.5">
                <span>Register new land first</span>
                <span class="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          </div>

          <!-- Step 2: Complaint Category & Priority -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldCategory","Complaint Category")} *</label>
              <select id="caseCategory" required class="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="compensation_not_received">Compensation Not Received</option>
                <option value="compensation_dispute">Compensation Amount Dispute / Award Rate</option>
                <option value="land_measurement">Land Boundary & Measurement Discrepancy</option>
                <option value="notice_issue">Statutory Notice Not Served / Address Error</option>
                <option value="documentation">Documentation / Mutation / 7-12 Correction</option>
                <option value="ownership_mutation">Ownership Title & Succession Mutation Issue</option>
                <option value="possession">Premature or Disputed Physical Possession</option>
                <option value="rehabilitation_resettlement">Rehabilitation & Resettlement (R&R) Claim</option>
                <option value="other">Other Grievance</option>
              </select>
            </div>

            <div>
              <label class="block font-semibold text-on-surface mb-1">${e("citizen.fieldPriority","Citizen Urgency")}</label>
              <select id="casePriority" class="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="normal" selected>Normal</option>
                <option value="high">High (Delay > 6 months / Crop Loss)</option>
                <option value="critical">Critical (Court Stay / Possession Threat)</option>
              </select>
            </div>
          </div>

          <!-- Step 3: Description -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="font-semibold text-on-surface">${e("citizen.fieldDescription","Detailed Description of Grievance")} *</label>
              <button type="button" id="speakDescriptionBtn" class="text-primary hover:text-primary/80 flex items-center gap-1 text-[11px] font-semibold">
                <span class="material-symbols-outlined text-[16px]">mic</span>
                <span>Speak to Write</span>
              </button>
            </div>
            <textarea id="caseDescription" required rows="4" placeholder="${e("citizen.descPlaceholder","Clearly state your survey number, notification date, what award was promised or what discrepancy occurred...")}" class="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed"></textarea>
          </div>

          <!-- Step 4: Optional Supporting Document Metadata -->
          <div class="p-4 bg-surface-container-lowest border border-outline-variant/40 rounded-xl space-y-3">
            <span class="font-bold text-on-surface block text-xs flex items-center gap-1.5">
              <span class="material-symbols-outlined text-primary text-[18px]">attachment</span>
              <span>${e("citizen.supportingDocsTitle","Attach Supporting Document Metadata (Optional)")}</span>
            </span>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block font-medium text-on-surface-variant mb-1">Document Type</label>
                <select id="docType" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface">
                  <option value="7_12_extract">7/12 Extract / Record of Rights</option>
                  <option value="compensation_notice">Section 4 / Award Notice</option>
                  <option value="sale_deed">Registered Sale Deed / Title Deed</option>
                  <option value="aadhaar">Identity Proof (Aadhaar / Voter ID)</option>
                  <option value="bank_passbook">Bank Passbook / Cancelled Cheque</option>
                  <option value="objection_letter">Prior Objection Letter</option>
                  <option value="other">Other Document</option>
                </select>
              </div>

              <div>
                <label class="block font-medium text-on-surface-variant mb-1">File Name</label>
                <input type="text" id="docFileName" placeholder="e.g. 7_12_extract_survey_142.pdf" class="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/50 rounded-lg text-on-surface" />
              </div>
            </div>
            <p class="text-[11px] text-on-surface-variant">Note: Document reference will be logged to official audit trail upon submission.</p>
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <button type="submit" id="submitCaseBtn" class="w-full py-3 bg-secondary text-on-secondary rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-md">
              <span class="material-symbols-outlined text-[18px]">send</span>
              <span>${e("citizen.submitGrievanceBtn","Submit Formal Grievance to SLAO")}</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Success Modal -->
      <div id="caseSuccessModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <div class="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl max-w-md w-full p-6 shadow-2xl text-center space-y-4 animate-scale-up">
          <div class="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <span class="material-symbols-outlined text-[32px]">check_circle</span>
          </div>

          <h3 class="text-xl font-headline-md font-bold text-on-surface">
            ${e("citizen.caseSubmittedTitle","Grievance Submitted Successfully!")}
          </h3>

          <div class="p-4 bg-surface-container-low border border-outline-variant/40 rounded-xl space-y-1">
            <span class="text-xs text-on-surface-variant uppercase font-semibold">Your Official Case Tracking ID</span>
            <div class="text-2xl font-black font-tabular-data text-primary select-all" id="createdCaseIdDisplay">CAS-XXXX</div>
            <div class="text-[11px] text-on-surface-variant">Assigned queue: Special Land Acquisition Officer</div>
          </div>

          <p class="text-xs text-on-surface-variant">
            A confirmation notification has been sent. You can track officer assignment, view updates, and upload requested documents anytime.
          </p>

          <div class="flex items-center gap-2 pt-2">
            <button id="viewMyCasesBtn" class="flex-1 py-2.5 bg-primary text-on-primary rounded-lg font-semibold text-xs hover:opacity-95 transition-all shadow-sm">
              Track This Case Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `,yt(r.user_id,s);const l=document.getElementById("speakDescriptionBtn");if(l&&("webkitSpeechRecognition"in window||"SpeechRecognition"in window)){const c=window.SpeechRecognition||window.webkitSpeechRecognition,u=new c;u.continuous=!1,u.interimResults=!1,u.lang="en-IN";let f=!1;l.addEventListener("click",()=>{if(f)u.stop(),f=!1,l.classList.remove("text-error"),l.querySelector("span:last-child").textContent="Speak to Write";else try{u.start(),f=!0,l.classList.add("text-error"),l.querySelector("span:last-child").textContent="Listening..."}catch{}}),u.onresult=v=>{const b=v.results[0][0].transcript,y=document.getElementById("caseDescription");y&&(y.value=y.value?`${y.value} ${b}`:b),f=!1,l.classList.remove("text-error"),l.querySelector("span:last-child").textContent="Speak to Write"},u.onerror=()=>{f=!1,l.classList.remove("text-error"),l.querySelector("span:last-child").textContent="Speak to Write"}}const o=document.getElementById("grievanceForm");let p=null;o.addEventListener("submit",async c=>{c.preventDefault();const u=document.getElementById("submitCaseBtn");u.disabled=!0,u.innerHTML=`
      <span class="animate-spin material-symbols-outlined text-[18px]">progress_activity</span>
      <span>Submitting to Officer Queue...</span>
    `;try{const f=document.getElementById("caseLandId").value;if(!f){alert('Please select a registered land parcel. If you have not registered your land yet, please visit "My Land" to register your survey number first.'),u.disabled=!1,u.innerHTML=`
          <span class="material-symbols-outlined text-[18px]">send</span>
          <span>${e("citizen.submitGrievanceBtn","Submit Formal Grievance to SLAO")}</span>
        `;return}const v=document.getElementById("caseCategory").value,b=document.getElementById("casePriority").value,y=document.getElementById("caseDescription").value.trim(),w={citizen_id:r.user_id,land_id:f,category:v,priority:b,description:y,risk_probability:n?parseFloat(n):null,risk_level:i||null};p=(await S.createCase(w)).case_id;const T=document.getElementById("docFileName").value.trim();T&&p&&await S.createCaseDocument(p,{uploaded_by:r.user_id,land_id:f,document_type:document.getElementById("docType").value,file_name:T,storage_reference:`storage/cases/${p}/${T}`}),document.getElementById("createdCaseIdDisplay").textContent=p,document.getElementById("caseSuccessModal").classList.remove("hidden")}catch(f){alert(`Submission failed: ${f.message}`)}finally{u.disabled=!1,u.innerHTML=`
        <span class="material-symbols-outlined text-[18px]">send</span>
        <span>${e("citizen.submitGrievanceBtn","Submit Formal Grievance to SLAO")}</span>
      `}});const d=document.getElementById("viewMyCasesBtn");d&&d.addEventListener("click",()=>{window.location.hash=`#/citizen-cases?id=${encodeURIComponent(p||"")}`})}async function yt(t,a){const s=document.getElementById("caseLandId");if(s)try{const n=await S.getUserLands(t);if(n.forEach(i=>{const r=document.createElement("option");r.value=i.land_id,r.textContent=`${i.village} (Survey ${i.survey_number}) - ${i.area_hectares} Ha (${i.land_type})`,a&&i.land_id===a&&(r.selected=!0),s.appendChild(r)}),n.length===0){const i=document.createElement("option");i.value="",i.disabled=!0,i.selected=!0,i.textContent="-- No registered land parcels found --",s.appendChild(i);const r=document.getElementById("noLandsPrompt");r&&r.classList.remove("hidden")}}catch{const i=document.createElement("option");i.value="",i.disabled=!0,i.selected=!0,i.textContent="-- Error loading land holdings --",s.appendChild(i)}}async function je(t){const s=new URLSearchParams(window.location.hash.split("?")[1]||"").get("id"),n=L.getStoredUser();if(!n||n.role!=="citizen"){H(t,{role:"citizen",title:e("auth.citizenTrackingGatewayTitle","Sign In to Track Acquisition Grievances"),message:e("auth.citizenTrackingGatewayMsg","Access real-time case progression, respond to officer document requests, and review verified status updates under your account."),onLoginSuccess:()=>je(t)});return}t.innerHTML=`
    <div class="space-y-6 max-w-7xl mx-auto pb-12 animate-fade-in">
      <!-- Breadcrumb & Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-label-sm mb-1">
            <a href="#/citizen-dashboard" class="hover:text-primary transition-colors">${e("nav.citizenDashboard","Citizen Portal")}</a>
            <span>/</span>
            <span class="text-on-surface font-semibold">${e("nav.myCases","My Cases Tracker")}</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface">
            ${e("citizen.caseTrackerTitle","Case Status & Lifecycle Tracker")}
          </h1>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            ${e("citizen.caseTrackerSub","Real-time timeline, official status changes, document requests, and officer resolutions.")}
          </p>
        </div>

        <a href="#/citizen-complaint" class="px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-xs font-semibold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-sm">
          <span class="material-symbols-outlined text-[18px]">add</span>
          <span>${e("citizen.fileGrievanceBtn","File New Grievance")}</span>
        </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Cases List Sidebar (Left Column) -->
        <div class="lg:col-span-4 bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
          <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
            <span class="font-bold text-xs uppercase tracking-wider text-on-surface">${e("citizen.allMyCases","My Registered Cases")}</span>
            <span class="text-xs font-bold font-tabular-data text-primary" id="citizenCasesTotalBadge">-</span>
          </div>

          <div id="citizenCasesNavList" class="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
            <div class="py-8 text-center text-on-surface-variant text-xs">
              <span class="animate-spin inline-block mr-1 material-symbols-outlined text-[16px]">progress_activity</span>
              Loading cases...
            </div>
          </div>
        </div>

        <!-- Case Detail & Timeline (Right Column) -->
        <div class="lg:col-span-8 space-y-5" id="caseDetailMainArea">
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-12 text-center text-on-surface-variant">
            <span class="material-symbols-outlined text-[48px] text-primary/30">manage_search</span>
            <div class="font-medium text-sm mt-2">Select a case from the list to track its real-time progress</div>
          </div>
        </div>
      </div>
    </div>
  `,ht(n.user_id,s)}async function ht(t,a){const s=document.getElementById("citizenCasesNavList"),n=document.getElementById("citizenCasesTotalBadge"),i=document.getElementById("caseDetailMainArea");try{const r=await S.getUserCases(t);if(n&&(n.textContent=`${r.length} cases`),r.length===0){s&&(s.innerHTML=`
          <div class="py-8 text-center text-on-surface-variant text-xs">
            No complaints found.
          </div>
        `),i&&(i.innerHTML=`
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-12 text-center text-on-surface-variant space-y-3">
            <span class="material-symbols-outlined text-[48px] text-primary/40">assignment_add</span>
            <h3 class="font-bold text-base text-on-surface">No Grievances Filed</h3>
            <p class="text-xs max-w-sm mx-auto">Have an issue regarding delayed land compensation, boundary disputes, or pending awards? You can lodge a case directly with the SLAO.</p>
            <a href="#/citizen-complaint" class="inline-block px-4 py-2 bg-primary text-on-primary text-xs font-semibold rounded-lg hover:opacity-95 shadow-sm">
              File First Grievance
            </a>
          </div>
        `);return}const l=r.find(o=>o.case_id===a)||r[0];s.innerHTML=r.map(o=>`
        <button type="button" class="select-case-btn w-full text-left p-3 rounded-lg border transition-all ${o.case_id===l.case_id?"bg-primary-container text-on-primary border-primary font-semibold shadow-xs":"bg-surface-container-lowest text-on-surface border-outline-variant/30 hover:border-primary/50"}" data-id="${o.case_id}">
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-tabular-data font-bold">${o.case_id}</span>
            <span class="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold ${o.status==="resolved"?"bg-emerald-500/20 text-emerald-800 dark:text-emerald-300":o.status==="documents_required"?"bg-rose-500/20 text-rose-800 dark:text-rose-300":"bg-surface-container text-on-surface"}">
              ${o.status.replace("_"," ")}
            </span>
          </div>
          <div class="text-[11px] truncate opacity-90">${o.category.replace(/_/g," ").toUpperCase()}</div>
          <div class="text-[10px] opacity-75 mt-1 font-tabular-data">${new Date(o.created_at).toLocaleDateString()}</div>
        </button>
      `).join(""),s.querySelectorAll(".select-case-btn").forEach(o=>{o.addEventListener("click",()=>{const p=o.getAttribute("data-id");window.location.hash=`#/citizen-cases?id=${encodeURIComponent(p)}`})}),vt(l,i)}catch(r){i&&(i.innerHTML=`<div class="p-6 bg-error/10 text-error text-xs rounded-xl">Failed to load tracker: ${r.message}</div>`)}}async function vt(t,a){a.innerHTML=`
    <!-- Case Overview Header -->
    <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm space-y-4">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-outline-variant/30 pb-4">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-headline-sm text-xl font-bold font-tabular-data text-on-surface">${t.case_id}</span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${t.status==="resolved"?"bg-emerald-500 text-white":t.status==="documents_required"?"bg-rose-600 text-white animate-pulse":"bg-primary-container text-on-primary"}">
              ${t.status.replace(/_/g," ")}
            </span>
            ${t.priority==="high"||t.priority==="critical"?`<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-error/15 text-error uppercase">${t.priority} Urgency</span>`:""}
          </div>
          <div class="text-xs text-on-surface-variant mt-1">
            Category: <strong class="text-on-surface capitalize">${t.category.replace(/_/g," ")}</strong>
            • Land ID: <strong class="text-on-surface">${t.land_id}</strong>
          </div>
        </div>

        <div class="text-right text-xs">
          <span class="text-on-surface-variant block">Assigned Officer</span>
          <span class="font-bold text-on-surface">${t.assigned_officer_id||"Awaiting SLAO Assignment"}</span>
        </div>
      </div>

      <!-- Description Block -->
      <div class="text-xs bg-surface-container-lowest p-3.5 rounded-lg border border-outline-variant/30 space-y-1">
        <span class="font-bold text-on-surface block text-[11px] uppercase tracking-wider text-primary">Declared Grievance</span>
        <p class="text-on-surface-variant leading-relaxed">${t.description}</p>
      </div>

      <!-- Estimated Delay Risk Badge (if attached) -->
      ${t.risk_probability!==null&&t.risk_probability!==void 0?`
        <div class="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/30 flex items-center justify-between text-xs">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[18px]">neurology</span>
            <span>Attached Predictive Delay Risk: <strong>${Math.round(t.risk_probability*100)}% (${t.risk_level||"ASSESSED"})</strong></span>
          </div>
          <span class="text-[11px] text-on-surface-variant font-tabular-data">XGBoost Model v1.1</span>
        </div>
      `:""}
    </div>

    <!-- Document Request Alert & Upload Form (if status == documents_required) -->
    <div id="citizenUploadSection"></div>

    <!-- Documents List -->
    <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 shadow-sm space-y-3">
      <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
        <span class="font-bold text-xs uppercase tracking-wider text-on-surface flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px] text-primary">folder</span>
          <span>Submitted Case Documents</span>
        </span>
        <span id="caseDocsCountBadge" class="text-xs font-semibold text-on-surface-variant font-tabular-data">0 documents</span>
      </div>

      <div id="caseDocsList" class="space-y-2">
        <div class="text-center py-4 text-xs text-on-surface-variant">Loading documents...</div>
      </div>
    </div>

    <!-- Real-time Case Milestones & Timeline (From persisted case_events) -->
    <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm space-y-4">
      <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
        <h3 class="font-headline-sm text-base font-bold text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-[20px]">timeline</span>
          <span>Official Case Lifecycle Timeline</span>
        </h3>
        <span class="text-[11px] text-on-surface-variant">Append-only audit trail</span>
      </div>

      <div id="caseTimelineList" class="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/60">
        <div class="text-xs text-on-surface-variant py-4">Loading timeline events...</div>
      </div>
    </div>
  `,Be(t.case_id),Ne(t.case_id),t.status==="documents_required"&&xt(t.case_id)}async function Be(t){const a=document.getElementById("caseDocsList"),s=document.getElementById("caseDocsCountBadge");if(a)try{const n=await S.getCaseDocuments(t);if(s&&(s.textContent=`${n.length} document${n.length===1?"":"s"}`),n.length===0){a.innerHTML='<div class="text-center py-4 text-xs text-on-surface-variant">No supporting documents uploaded for this case.</div>';return}a.innerHTML=n.map(i=>{const r=i.verification_status==="verified",l=i.verification_status==="rejected";return`
        <div class="p-3 bg-surface-container-lowest border border-outline-variant/30 rounded-lg flex items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2.5">
            <span class="p-1.5 rounded bg-surface-container text-on-surface-variant">
              <span class="material-symbols-outlined text-[18px]">description</span>
            </span>
            <div>
              <div class="font-semibold text-on-surface">${i.file_name}</div>
              <div class="text-[11px] text-on-surface-variant capitalize">${i.document_type.replace(/_/g," ")} • Uploaded on ${new Date(i.uploaded_at).toLocaleDateString()}</div>
              ${i.rejection_reason?`<div class="text-[11px] text-error mt-0.5">Rejection reason: ${i.rejection_reason}</div>`:""}
            </div>
          </div>

          <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${r?"bg-emerald-500/20 text-emerald-800 dark:text-emerald-300":l?"bg-rose-500/20 text-rose-800 dark:text-rose-300":"bg-amber-500/20 text-amber-800 dark:text-amber-300"}">
            ${i.verification_status}
          </span>
        </div>
      `}).join("")}catch(n){a.innerHTML=`<div class="text-error text-xs">Failed to load documents: ${n.message}</div>`}}async function Ne(t){const a=document.getElementById("caseTimelineList");if(a)try{const s=await S.getCaseEvents(t);if(s.length===0){a.innerHTML='<div class="text-xs text-on-surface-variant">No milestones recorded.</div>';return}a.innerHTML=s.map(n=>`
      <div class="relative group">
        <span class="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container-low"></span>
        <div class="text-xs">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-bold text-on-surface capitalize">${n.action.replace(/_/g," ")}</span>
            <span class="text-[11px] text-on-surface-variant font-tabular-data">${new Date(n.timestamp).toLocaleString()}</span>
          </div>
          ${n.old_status&&n.new_status?`
            <div class="text-[11px] text-on-surface-variant mt-0.5">
              Status changed: <span class="font-semibold uppercase">${n.old_status}</span> → <span class="font-semibold text-primary uppercase">${n.new_status}</span>
            </div>
          `:""}
          ${n.comment?`
            <p class="text-xs text-on-surface mt-1 bg-surface-container-lowest p-2.5 rounded-lg border border-outline-variant/30 leading-relaxed">${n.comment}</p>
          `:""}
        </div>
      </div>
    `).join("")}catch(s){a.innerHTML=`<div class="text-error text-xs">Failed to load timeline: ${s.message}</div>`}}function xt(t){const a=document.getElementById("citizenUploadSection");if(!a)return;a.innerHTML=`
    <div class="bg-amber-500/10 border border-amber-500/40 rounded-xl p-5 shadow-sm space-y-3 animate-pulse-subtle">
      <div class="flex items-center gap-2.5 text-amber-900 dark:text-amber-200">
        <span class="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[24px]">notification_important</span>
        <div>
          <h4 class="font-bold text-sm">Action Required: Officer Requested Supporting Document</h4>
          <p class="text-xs opacity-90">Please provide the certified document so the SLAO can proceed with investigation.</p>
        </div>
      </div>

      <form id="respondDocUploadForm" class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
        <div>
          <label class="block font-semibold text-on-surface mb-1">Document Type</label>
          <select id="respDocType" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface">
            <option value="7_12_extract">7/12 Extract</option>
            <option value="compensation_notice">Compensation Notice</option>
            <option value="sale_deed">Sale Deed / Title</option>
            <option value="bank_passbook">Bank Passbook / Cheque</option>
            <option value="other">Other Requested Record</option>
          </select>
        </div>

        <div>
          <label class="block font-semibold text-on-surface mb-1">File Name</label>
          <input type="text" id="respFileName" required placeholder="e.g. certified_712_update.pdf" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface" />
        </div>

        <div class="flex items-end">
          <button type="submit" id="respSubmitBtn" class="w-full py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-sm flex items-center justify-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">upload_file</span>
            <span>Upload Document</span>
          </button>
        </div>
      </form>
    </div>
  `,document.getElementById("respondDocUploadForm").addEventListener("submit",async n=>{n.preventDefault();const i=document.getElementById("respSubmitBtn");i.disabled=!0,i.textContent="Uploading...";const r=L.getStoredUser();if(!r){alert("Authentication required to upload documents.");return}const l=document.getElementById("respFileName").value.trim(),o=document.getElementById("respDocType").value;try{await S.createCaseDocument(t,{uploaded_by:r.user_id,document_type:o,file_name:l,storage_reference:`storage/cases/${t}/${l}`}),alert("Document registered and attached to case audit trail."),Be(t),Ne(t),a.innerHTML=""}catch(p){alert(`Upload failed: ${p.message}`)}finally{i.disabled=!1,i.textContent="Upload Document"}})}async function qe(t){const a=L.getStoredUser();if(!a||a.role!=="officer"&&a.role!=="super_admin"){H(t,{role:"officer",title:e("auth.officerGatewayTitle","Revenue Officer Sign In Required"),message:e("auth.officerGatewayMsg","Official administrative credentials required to inspect citizen grievance dossiers, verify revenue documents, and manage statutory case queues."),onLoginSuccess:()=>qe(t)});return}t.innerHTML=`
    <div class="space-y-6 max-w-7xl mx-auto pb-12 animate-fade-in">
      <!-- Breadcrumb & Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-label-sm mb-1">
            <a href="#/dashboard" class="hover:text-primary transition-colors">${e("nav.dashboard","Command Center")}</a>
            <span>/</span>
            <span class="text-on-surface font-semibold">${e("nav.cases","Case Queue")}</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-headline-md font-bold text-on-surface">
            ${e("officer.casesHeader","Acquisition Grievance & Case Queue")}
          </h1>
          <p class="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            ${e("officer.casesSub","Monitor citizen complaints, prioritize high-risk acquisition bottlenecks, assign officers, and audit case resolutions.")}
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
  `;let s=1;const n=()=>wt(s);document.getElementById("filterStatus").addEventListener("change",()=>{s=1,n()}),document.getElementById("filterRisk").addEventListener("change",()=>{s=1,n()}),document.getElementById("refreshOfficerCasesBtn").addEventListener("click",n);const i=document.getElementById("officerSearchInput");let r=null;i.addEventListener("input",()=>{clearTimeout(r),r=setTimeout(()=>{s=1,n()},300)}),document.getElementById("officerPrevPageBtn").addEventListener("click",()=>{s>1&&(s--,n())}),document.getElementById("officerNextPageBtn").addEventListener("click",()=>{s++,n()}),n()}async function wt(t=1){var l,o,p;const a=document.getElementById("officerCasesTableBody"),s=document.getElementById("officerPaginationText"),n=document.getElementById("officerCurrentPageDisplay"),i=document.getElementById("officerPrevPageBtn"),r=document.getElementById("officerNextPageBtn");try{const d=await S.getMetricsSummary();document.getElementById("metricTotalCases")&&(document.getElementById("metricTotalCases").textContent=d.total_cases),document.getElementById("metricNewCases")&&(document.getElementById("metricNewCases").textContent=d.new_cases),document.getElementById("metricHighRisk")&&(document.getElementById("metricHighRisk").textContent=d.high_risk),document.getElementById("metricDocsRequired")&&(document.getElementById("metricDocsRequired").textContent=d.documents_required),document.getElementById("metricEscalated")&&(document.getElementById("metricEscalated").textContent=d.escalated),document.getElementById("metricResolved")&&(document.getElementById("metricResolved").textContent=d.resolved)}catch{}try{const d=((l=document.getElementById("filterStatus"))==null?void 0:l.value)||"",c=((o=document.getElementById("filterRisk"))==null?void 0:o.value)||"",u=((p=document.getElementById("officerSearchInput"))==null?void 0:p.value.trim())||"",f=await S.listCases({status:d||void 0,risk_level:c||void 0,search:u||void 0,page:t,limit:15});if(s&&(s.textContent=`Showing ${f.items.length} of ${f.total} cases`),n&&(n.textContent=`${f.page} / ${f.pages||1}`),i&&(i.disabled=f.page<=1),r&&(r.disabled=f.page>=f.pages),f.items.length===0){a.innerHTML=`
        <tr>
          <td colspan="8" class="text-center py-12 text-on-surface-variant">
            No cases match the selected filters.
          </td>
        </tr>
      `;return}const v=y=>`<span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${{submitted:"bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",received:"bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",assigned:"bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200",under_review:"bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",documents_required:"bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200 font-bold",investigation:"bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200",action_taken:"bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200",escalated:"bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 font-bold",resolved:"bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 font-bold",closed:"bg-slate-100 text-slate-800 dark:bg-slate-900/40 dark:text-slate-300"}[y]||"bg-surface-container text-on-surface"}">${y.replace(/_/g," ")}</span>`,b=(y,w)=>{if(y==null)return'<span class="text-on-surface-variant font-tabular-data">Not Assessed</span>';const _=Math.round(y*100);return`
        <span class="inline-flex items-center gap-1 font-bold font-tabular-data ${w==="HIGH"||w==="CRITICAL"||_>=65?"text-error":_>=35?"text-amber-600 dark:text-amber-400":"text-emerald-600"}">
          <span>${_}%</span>
          <span class="text-[10px] font-semibold">(${w||"EST"})</span>
        </span>
      `};a.innerHTML=f.items.map(y=>`
      <tr class="hover:bg-surface-container/60 transition-colors">
        <td class="py-3 px-4 font-bold font-tabular-data text-primary whitespace-nowrap">
          <a href="#/officer-case-workspace?id=${encodeURIComponent(y.case_id)}" class="hover:underline flex items-center gap-1">
            <span>${y.case_id}</span>
          </a>
        </td>
        <td class="py-3 px-4 font-semibold text-on-surface whitespace-nowrap">
          ${y.category.replace(/_/g," ").toUpperCase()}
        </td>
        <td class="py-3 px-4">
          <div class="font-medium text-on-surface">${y.citizen_id}</div>
          <div class="text-[11px] text-on-surface-variant font-tabular-data">Parcel: ${y.land_id}</div>
        </td>
        <td class="py-3 px-4 whitespace-nowrap">
          ${b(y.risk_probability,y.risk_level)}
        </td>
        <td class="py-3 px-4 whitespace-nowrap">
          ${v(y.status)}
        </td>
        <td class="py-3 px-4 text-on-surface-variant whitespace-nowrap">
          ${y.assigned_officer_id?`<span class="font-medium text-on-surface">${y.assigned_officer_id}</span>`:'<span class="italic text-amber-600">Unassigned</span>'}
        </td>
        <td class="py-3 px-4 font-tabular-data text-on-surface-variant whitespace-nowrap">
          ${new Date(y.created_at).toLocaleDateString()}
        </td>
        <td class="py-3 px-4 text-right whitespace-nowrap">
          <a href="#/officer-case-workspace?id=${encodeURIComponent(y.case_id)}" class="px-2.5 py-1 bg-primary text-on-primary rounded text-xs font-semibold hover:opacity-95 shadow-xs inline-flex items-center gap-1">
            <span>Open</span>
            <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
          </a>
        </td>
      </tr>
    `).join("")}catch(d){a.innerHTML=`
      <tr>
        <td colspan="8" class="text-center py-8 text-error">
          Error loading case queue: ${d.message}
        </td>
      </tr>
    `}}const _t={submitted:["received","assigned","under_review","rejected"],received:["assigned","under_review","rejected"],assigned:["under_review","documents_required","investigation"],under_review:["documents_required","investigation","action_taken","escalated","resolved","rejected"],documents_required:["under_review","investigation"],investigation:["action_taken","escalated","under_review","resolved"],action_taken:["resolved","investigation","escalated"],escalated:["investigation","action_taken","resolved"],resolved:["closed","investigation"],rejected:["under_review"],closed:[]};async function Oe(t){const a=window.location.hash,s=a.includes("?")?a.split("?")[1]:"",i=new URLSearchParams(s).get("id"),r=L.getStoredUser();if(!r||r.role!=="officer"&&r.role!=="super_admin"){H(t,{role:"officer",title:e("auth.officerWorkspaceGatewayTitle","Revenue Officer Sign In Required"),message:e("auth.officerWorkspaceGatewayMsg","Official authorization is required to access confidential dossiers, verify documents, and issue statutory case determinations."),onLoginSuccess:()=>Oe(t)});return}if(!i){t.innerHTML=`
      <div class="max-w-4xl mx-auto py-12 px-4 text-center">
        <div class="inline-flex p-3 bg-error/10 text-error rounded-full mb-3">
          <span class="material-symbols-outlined text-[32px]">warning</span>
        </div>
        <h2 class="text-xl font-bold text-on-surface">No Case ID Specified</h2>
        <p class="text-xs text-on-surface-variant mt-1 mb-4">Please select a case from the officer case queue.</p>
        <a href="#/cases" class="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-semibold inline-flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to Case Queue</span>
        </a>
      </div>
    `;return}t.innerHTML=`
    <div class="max-w-7xl mx-auto pb-16 animate-fade-in space-y-6">
      <div class="flex items-center justify-between text-xs text-on-surface-variant font-label-sm">
        <a href="#/cases" class="hover:text-primary transition-colors flex items-center gap-1">
          <span class="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to Case Queue</span>
        </a>
        <span class="font-tabular-data">Officer: <strong class="text-on-surface">${r.name||r.user_id}</strong> (${r.role})</span>
      </div>

      <div id="workspaceContent" class="space-y-6">
        <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-8 text-center text-on-surface-variant">
          <span class="material-symbols-outlined animate-spin text-[32px] text-primary mb-2">progress_activity</span>
          <p class="text-sm font-medium">Loading case dossier and audit history for ${i}...</p>
        </div>
      </div>

      <!-- Action Modals Container -->
      <div id="workspaceModalContainer"></div>
    </div>
  `,await B(i,r,t)}async function B(t,a,s){const n=s.querySelector("#workspaceContent"),i=s.querySelector("#workspaceModalContainer");try{const[r,l,o]=await Promise.all([S.getCase(t),S.getCaseEvents(t),S.getCaseDocuments(t).catch(()=>[])]);let p=null;if(r.land_id)try{p=await S.getLand(r.land_id)}catch(x){console.warn("Could not load land data:",x)}let d=null;if(r.citizen_id)try{d=await S.getUser(r.citizen_id)}catch(x){console.warn("Could not load citizen data:",x)}const c=x=>{const m={submitted:"bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border-blue-300 dark:border-blue-700",received:"bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200 border-sky-300 dark:border-sky-700",assigned:"bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700",under_review:"bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 border-purple-300 dark:border-purple-700",documents_required:"bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 border-amber-300 dark:border-amber-700",investigation:"bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200 border-orange-300 dark:border-orange-700",action_taken:"bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200 border-teal-300 dark:border-teal-700",escalated:"bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200 border-rose-300 dark:border-rose-700",resolved:"bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700",closed:"bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600",rejected:"bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border-red-300 dark:border-red-700"};return`<span class="px-2.5 py-1 text-xs font-bold rounded-md border ${m[x]||m.submitted}">${x.replace(/_/g," ").toUpperCase()}</span>`},u=(x,m)=>{const I=Math.round((x||0)*100),R=m==="HIGH"||I>=65,M=m==="MEDIUM"||I>=35&&I<65;return`<span class="px-2.5 py-1 text-xs font-bold font-tabular-data rounded-md border ${R?"bg-error/15 text-error border-error/30":M?"bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30":"bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"}">${I}% DELAY RISK (${m||"NORMAL"})</span>`},f=_t[r.status]||[];n.innerHTML=`
      <!-- Case Dossier Header -->
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 shadow-sm space-y-4">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1.5">
              <span class="text-xs font-bold font-tabular-data px-2 py-0.5 rounded bg-surface-container text-on-surface">
                ${r.case_id}
              </span>
              ${c(r.status)}
              ${u(r.risk_probability,r.risk_level)}
            </div>
            <h1 class="text-2xl font-bold font-headline-md text-on-surface">
              ${r.category.replace(/_/g," ").toUpperCase()}
            </h1>
            <p class="text-xs text-on-surface-variant mt-1 flex flex-wrap items-center gap-3">
              <span>Filed: <strong class="text-on-surface font-tabular-data">${new Date(r.created_at).toLocaleString()}</strong></span>
              <span>•</span>
              <span>Assigned Officer: <strong class="text-on-surface">${r.assigned_officer_id||'<span class="text-amber-600 italic">Unassigned</span>'}</strong></span>
              <span>•</span>
              <span>Project: <strong class="text-on-surface">${r.project_id||"General Acquisition"}</strong></span>
            </p>
          </div>

          <!-- Officer Quick Actions Bar -->
          <div class="flex flex-wrap items-center gap-2">
            <button id="btnOpenStatusModal" class="px-3 py-2 bg-primary text-on-primary rounded-lg text-xs font-semibold hover:opacity-95 shadow-xs flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">sync_alt</span>
              <span>Update Status</span>
            </button>

            <button id="btnOpenAssignModal" class="px-3 py-2 bg-surface-container border border-outline-variant/60 rounded-lg text-xs font-semibold text-on-surface hover:bg-surface-container-high flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">person_add</span>
              <span>Assign / Reassign</span>
            </button>

            <button id="btnOpenDocRequestModal" class="px-3 py-2 bg-surface-container border border-outline-variant/60 rounded-lg text-xs font-semibold text-on-surface hover:bg-surface-container-high flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">post_add</span>
              <span>Request Document</span>
            </button>

            <button id="btnOpenInternalNoteModal" class="px-3 py-2 bg-surface-container border border-outline-variant/60 rounded-lg text-xs font-semibold text-on-surface hover:bg-surface-container-high flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">lock</span>
              <span>Add Internal Note</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Main Workspace 3-Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

        <!-- Column 1: Citizen Profile, Land Cadastre, & AI Prediction (4 cols) -->
        <div class="lg:col-span-4 space-y-6">

          <!-- Citizen Profile Card -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
            <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
              <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary">person</span>
                <span>Complainant Details</span>
              </h2>
              <span class="text-[11px] font-tabular-data text-on-surface-variant">${r.citizen_id}</span>
            </div>
            <div class="text-xs space-y-2">
              <div class="flex justify-between">
                <span class="text-on-surface-variant">Name:</span>
                <span class="font-semibold text-on-surface">${d?d.name:"Citizen User"}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-on-surface-variant">Phone / Mobile:</span>
                <span class="font-tabular-data text-on-surface">${d?d.phone:"Not provided"}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-on-surface-variant">Email Address:</span>
                <span class="text-on-surface">${d?d.email:"N/A"}</span>
              </div>
            </div>
          </div>

          <!-- Land Cadastral Information Card -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
            <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
              <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary">terrain</span>
                <span>Cadastral Land Parcel</span>
              </h2>
              <span class="text-[11px] font-tabular-data text-on-surface-variant">${r.land_id}</span>
            </div>
            ${p?`
              <div class="text-xs space-y-2">
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Survey / Gat No:</span>
                  <span class="font-bold text-on-surface font-tabular-data">${p.survey_number}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Location:</span>
                  <span class="text-on-surface font-medium">${p.village}, ${p.taluka}, ${p.district}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Land Area:</span>
                  <span class="font-tabular-data text-on-surface">${p.area_acres} Acres (${p.land_type||"Agricultural"})</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Acquisition Status:</span>
                  <span class="font-semibold text-primary">${p.acquisition_status||"Notification Issued"}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-on-surface-variant">Declared by Citizen:</span>
                  <span class="font-tabular-data text-on-surface-variant">${p.citizen_declared_dispute?'<span class="text-error font-semibold">Active Dispute Noted</span>':"Clear Ownership"}</span>
                </div>
              </div>
            `:`
              <p class="text-xs text-on-surface-variant italic">Cadastral land parcel record linked directly via ${r.land_id}.</p>
            `}
          </div>

          <!-- AI ML Risk Assessment Card -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
            <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
              <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary">psychology</span>
                <span>AI Delay Risk Intelligence</span>
              </h2>
              <span class="text-[10px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded">XGBoost ML</span>
            </div>

            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="font-medium text-on-surface-variant">Estimated Delay Likelihood</span>
                  <span class="font-bold font-tabular-data text-on-surface">${Math.round((r.risk_probability||0)*100)}%</span>
                </div>
                <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <div class="h-full ${(r.risk_probability||0)>=.65?"bg-error":(r.risk_probability||0)>=.35?"bg-amber-500":"bg-emerald-500"}" style="width: ${Math.round((r.risk_probability||0)*100)}%"></div>
                </div>
              </div>

              <div class="bg-surface-container-lowest p-2.5 rounded-lg border border-outline-variant/30 text-xs">
                <span class="text-[11px] font-bold text-on-surface-variant block mb-1">Impact Factors:</span>
                <ul class="space-y-1 text-on-surface text-[11px]">
                  <li class="flex items-center gap-1 text-error">
                    <span class="material-symbols-outlined text-[13px]">arrow_upward</span>
                    <span>Grievance Category: ${r.category.replace(/_/g," ")}</span>
                  </li>
                  <li class="flex items-center gap-1 text-amber-600">
                    <span class="material-symbols-outlined text-[13px]">schedule</span>
                    <span>Pending Verification Stage</span>
                  </li>
                </ul>
              </div>

              <p class="text-[10px] text-on-surface-variant/80 italic leading-relaxed">
                Predictive estimate based on historical acquisition bottleneck benchmarks. Does not constitute a statutory determination.
              </p>
            </div>
          </div>

        </div>

        <!-- Column 2: Grievance Dossier & Document Verification Center (5 cols) -->
        <div class="lg:col-span-5 space-y-6">

          <!-- Grievance Dossier -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 shadow-sm space-y-3">
            <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 border-b border-outline-variant/30 pb-2">
              <span class="material-symbols-outlined text-[16px] text-primary">description</span>
              <span>Grievance Description & Demands</span>
            </h2>

            <div class="text-xs text-on-surface leading-relaxed bg-surface-container-lowest p-3.5 rounded-lg border border-outline-variant/30">
              ${r.description||"No detailed narrative provided."}
            </div>

            <div class="grid grid-cols-2 gap-2 text-xs pt-1">
              <div class="p-2 bg-surface-container rounded-lg">
                <span class="text-[10px] text-on-surface-variant uppercase block">Category</span>
                <span class="font-semibold text-on-surface">${r.category.replace(/_/g," ").toUpperCase()}</span>
              </div>
              <div class="p-2 bg-surface-container rounded-lg">
                <span class="text-[10px] text-on-surface-variant uppercase block">Target SLA</span>
                <span class="font-semibold text-on-surface">15 Working Days</span>
              </div>
            </div>
          </div>

          <!-- Document Verification Center (Phase 13) -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 shadow-sm space-y-4">
            <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
              <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary">folder_shared</span>
                <span>Document Verification Center</span>
              </h2>
              <span class="text-xs font-bold font-tabular-data text-on-surface">${o.length} File(s)</span>
            </div>

            ${o.length===0?`
              <div class="py-6 text-center text-on-surface-variant text-xs italic bg-surface-container-lowest rounded-lg border border-dashed border-outline-variant/40">
                <span class="material-symbols-outlined text-[24px] text-on-surface-variant/60 block mb-1">attachment</span>
                <span>No supporting documents uploaded yet.</span>
                <div class="mt-2">
                  <button id="btnEmptyDocRequest" class="text-primary hover:underline font-semibold">Request documents from citizen</button>
                </div>
              </div>
            `:`
              <div class="space-y-3">
                ${o.map(x=>{const m=x.verification_status==="verified",I=x.verification_status==="rejected",R=!m&&!I;return`
                    <div class="bg-surface-container-lowest p-3.5 rounded-lg border border-outline-variant/40 text-xs space-y-2.5">
                      <div class="flex items-start justify-between gap-2">
                        <div>
                          <div class="font-bold text-on-surface flex items-center gap-1.5">
                            <span class="material-symbols-outlined text-[16px] text-primary">draft</span>
                            <span>${x.file_name}</span>
                          </div>
                          <div class="text-[11px] text-on-surface-variant mt-0.5">
                            Type: <strong class="text-on-surface">${x.document_type.replace(/_/g," ").toUpperCase()}</strong> • Ref: <span class="font-tabular-data">${x.storage_reference}</span>
                          </div>
                        </div>

                        <div>
                          ${m?`
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200 border border-emerald-300">
                              ✓ VERIFIED
                            </span>
                          `:I?`
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border border-red-300">
                              ✕ REJECTED
                            </span>
                          `:`
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 border border-amber-300">
                              PENDING REVIEW
                            </span>
                          `}
                        </div>
                      </div>

                      ${x.rejection_reason?`
                        <div class="text-[11px] text-error bg-error/10 p-2 rounded border border-error/20">
                          Rejection Reason: ${x.rejection_reason}
                        </div>
                      `:""}

                      ${R?`
                        <div class="flex items-center justify-end gap-2 pt-1 border-t border-outline-variant/20">
                          <button data-doc-id="${x.document_id}" class="btnVerifyDoc px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-bold flex items-center gap-1">
                            <span class="material-symbols-outlined text-[13px]">check</span>
                            <span>Verify Document</span>
                          </button>
                          <button data-doc-id="${x.document_id}" class="btnRejectDoc px-2.5 py-1 bg-error hover:opacity-90 text-white rounded text-[11px] font-bold flex items-center gap-1">
                            <span class="material-symbols-outlined text-[13px]">close</span>
                            <span>Reject with Reason</span>
                          </button>
                        </div>
                      `:""}
                    </div>
                  `}).join("")}
              </div>
            `}
          </div>

        </div>

        <!-- Column 3: Audit Trail & Internal Investigation Notes (3 cols) -->
        <div class="lg:col-span-3 space-y-6">

          <!-- Internal Note Form -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
            <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 border-b border-outline-variant/30 pb-2">
              <span class="material-symbols-outlined text-[16px] text-primary">lock</span>
              <span>Confidential Internal Note</span>
            </h2>
            <p class="text-[11px] text-on-surface-variant">
              Internal notes are recorded strictly in the officer audit log and are <strong>never</strong> visible to citizens.
            </p>
            <form id="internalNoteForm" class="space-y-2">
              <textarea id="internalNoteText" rows="3" required placeholder="Record field inspection notes, legal counsel inputs, or verification status..." class="w-full text-xs p-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              <button type="submit" class="w-full py-2 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/60 rounded-lg text-xs font-semibold text-on-surface flex items-center justify-center gap-1.5">
                <span class="material-symbols-outlined text-[14px]">save</span>
                <span>Save Note</span>
              </button>
            </form>
          </div>

          <!-- Complete Audit Trail (Phase 11) -->
          <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 shadow-sm space-y-3">
            <div class="flex items-center justify-between border-b border-outline-variant/30 pb-2">
              <h2 class="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary">history</span>
                <span>Audit Trail (${l.length})</span>
              </h2>
            </div>

            <div class="relative pl-4 space-y-4 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/40 text-xs">
              ${l.map(x=>{const m=x.is_internal===!0;return`
                  <div class="relative group">
                    <span class="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full ${m?"bg-amber-500":"bg-primary"} border-2 border-surface"></span>
                    <div class="${m?"bg-amber-500/10 border-amber-500/30":"bg-surface-container-lowest border-outline-variant/30"} p-2.5 rounded-lg border">
                      <div class="flex items-center justify-between gap-1 text-[10px]">
                        <span class="font-bold uppercase tracking-wider ${m?"text-amber-700 dark:text-amber-300":"text-primary"}">
                          ${m?"🔒 ":""}${x.action.replace(/_/g," ")}
                        </span>
                        <span class="font-tabular-data text-on-surface-variant">${new Date(x.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span>
                      </div>
                      ${x.comment?`<p class="text-on-surface text-[11px] mt-1 font-medium leading-relaxed">${x.comment}</p>`:""}
                      <div class="text-[9px] text-on-surface-variant/80 mt-1 flex justify-between">
                        <span>Actor: ${x.actor_user_id}</span>
                        <span>${new Date(x.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                `}).join("")}
            </div>
          </div>

        </div>

      </div>
    `,n.querySelectorAll(".btnVerifyDoc").forEach(x=>{x.addEventListener("click",async()=>{const m=x.dataset.docId;x.disabled=!0,x.innerHTML='<span class="material-symbols-outlined text-[13px] animate-spin">progress_activity</span> Verifying...';try{await S.verifyDocument(t,m,{actor_user_id:a.user_id,verification_status:"verified"}),await B(t,a,s)}catch(I){alert("Verification failed: "+I.message),x.disabled=!1,x.innerHTML='<span class="material-symbols-outlined text-[13px]">check</span> Verify Document'}})}),n.querySelectorAll(".btnRejectDoc").forEach(x=>{x.addEventListener("click",()=>{const m=x.dataset.docId;Tt(t,m,a,i,()=>B(t,a,s))})});const v=n.querySelector("#btnOpenStatusModal");v&&v.addEventListener("click",()=>{It(r,a,f,i,()=>B(t,a,s))});const b=n.querySelector("#btnOpenAssignModal");b&&b.addEventListener("click",()=>{kt(r,a,i,()=>B(t,a,s))});const y=n.querySelector("#btnOpenDocRequestModal"),w=n.querySelector("#btnEmptyDocRequest"),_=()=>{Ct(r,a,i,()=>B(t,a,s))};y&&y.addEventListener("click",_),w&&w.addEventListener("click",_);const T=n.querySelector("#btnOpenInternalNoteModal");T&&T.addEventListener("click",()=>{const x=n.querySelector("#internalNoteText");x&&(x.focus(),x.scrollIntoView({behavior:"smooth"}))});const C=n.querySelector("#internalNoteForm");C&&C.addEventListener("submit",async x=>{x.preventDefault();const m=n.querySelector("#internalNoteText").value.trim();if(!m)return;const I=C.querySelector('button[type="submit"]');I.disabled=!0;try{await S.createCaseEvent(t,{actor_user_id:a.user_id,action:"officer_note_added",comment:m,is_internal:!0}),await B(t,a,s)}catch(R){alert("Failed to save internal note: "+R.message),I.disabled=!1}})}catch(r){n.innerHTML=`
      <div class="bg-surface-container-low border border-outline-variant/40 rounded-xl p-8 text-center text-error space-y-3">
        <span class="material-symbols-outlined text-[32px]">error</span>
        <h2 class="text-base font-bold">Failed to Load Case Dossier</h2>
        <p class="text-xs text-on-surface-variant">${r.message}</p>
        <button id="btnRetryWorkspace" class="px-3 py-1.5 bg-primary text-on-primary rounded text-xs font-semibold">
          Retry
        </button>
      </div>
    `;const l=n.querySelector("#btnRetryWorkspace");l&&l.addEventListener("click",()=>B(t,a,s))}}function It(t,a,s,n,i){n.innerHTML=`
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface border border-outline-variant rounded-xl p-6 max-w-md w-full shadow-lg space-y-4">
        <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
          <h3 class="text-sm font-bold text-on-surface flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary">sync_alt</span>
            <span>Update Case Lifecycle Status</span>
          </h3>
          <button id="closeModalBtn" class="text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="statusUpdateForm" class="space-y-3.5 text-xs">
          <div>
            <label class="block font-semibold text-on-surface mb-1">Current Status</label>
            <input type="text" disabled value="${t.status.toUpperCase()}" class="w-full px-3 py-2 bg-surface-container rounded-lg font-bold text-on-surface-variant" />
          </div>

          <div>
            <label class="block font-semibold text-on-surface mb-1">Target Next Status *</label>
            ${s.length===0?`
              <p class="text-xs text-on-surface-variant italic">This case is in a terminal status (${t.status}). No transitions available.</p>
            `:`
              <select id="targetStatusSelect" required class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                ${s.map(o=>`
                  <option value="${o}">${o.replace(/_/g," ").toUpperCase()}</option>
                `).join("")}
              </select>
            `}
          </div>

          <div>
            <label class="block font-semibold text-on-surface mb-1">Status Change Comment / Official Note *</label>
            <textarea id="statusCommentText" rows="3" required placeholder="Explain reason for transition, statutory findings, or field decisions..." class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button type="button" id="cancelModalBtn" class="px-3 py-1.5 border border-outline-variant/60 rounded-lg text-on-surface hover:bg-surface-container">
              Cancel
            </button>
            ${s.length>0?`
              <button type="submit" id="submitStatusBtn" class="px-4 py-1.5 bg-primary text-on-primary font-semibold rounded-lg hover:opacity-95">
                Apply Transition
              </button>
            `:""}
          </div>
        </form>
      </div>
    </div>
  `;const r=()=>{n.innerHTML=""};n.querySelector("#closeModalBtn").addEventListener("click",r),n.querySelector("#cancelModalBtn").addEventListener("click",r);const l=n.querySelector("#statusUpdateForm");l&&l.addEventListener("submit",async o=>{o.preventDefault();const p=n.querySelector("#targetStatusSelect").value,d=n.querySelector("#statusCommentText").value.trim(),c=n.querySelector("#submitStatusBtn");c.disabled=!0,c.textContent="Applying...";try{await S.updateCaseStatus(t.case_id,{actor_user_id:a.user_id,status:p,comment:d}),r(),i()}catch(u){alert("Status update failed: "+u.message),c.disabled=!1,c.textContent="Apply Transition"}})}function kt(t,a,s,n){s.innerHTML=`
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface border border-outline-variant rounded-xl p-6 max-w-md w-full shadow-lg space-y-4">
        <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
          <h3 class="text-sm font-bold text-on-surface flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary">person_add</span>
            <span>Assign Officer to Dossier</span>
          </h3>
          <button id="closeModalBtn" class="text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="assignForm" class="space-y-3.5 text-xs">
          <div>
            <label class="block font-semibold text-on-surface mb-1">Target Officer ID *</label>
            <input type="text" id="targetOfficerId" required value="${t.assigned_officer_id||a.user_id}" placeholder="e.g. USR-..." class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-tabular-data" />
          </div>

          <div>
            <label class="block font-semibold text-on-surface mb-1">Assignment Directive / Note</label>
            <textarea id="assignComment" rows="3" placeholder="Specify investigation priority, relevant acquisition survey, or deadline..." class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button type="button" id="cancelModalBtn" class="px-3 py-1.5 border border-outline-variant/60 rounded-lg text-on-surface hover:bg-surface-container">
              Cancel
            </button>
            <button type="submit" id="submitAssignBtn" class="px-4 py-1.5 bg-primary text-on-primary font-semibold rounded-lg hover:opacity-95">
              Confirm Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  `;const i=()=>{s.innerHTML=""};s.querySelector("#closeModalBtn").addEventListener("click",i),s.querySelector("#cancelModalBtn").addEventListener("click",i),s.querySelector("#assignForm").addEventListener("submit",async l=>{l.preventDefault();const o=s.querySelector("#targetOfficerId").value.trim(),p=s.querySelector("#assignComment").value.trim(),d=s.querySelector("#submitAssignBtn");d.disabled=!0,d.textContent="Assigning...";try{await S.assignCase(t.case_id,{actor_user_id:a.user_id,assigned_officer_id:o,comment:p||`Assigned to ${o}`}),i(),n()}catch(c){alert("Assignment failed: "+c.message),d.disabled=!1,d.textContent="Confirm Assignment"}})}function Ct(t,a,s,n){s.innerHTML=`
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface border border-outline-variant rounded-xl p-6 max-w-md w-full shadow-lg space-y-4">
        <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
          <h3 class="text-sm font-bold text-on-surface flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary">post_add</span>
            <span>Request Supporting Document</span>
          </h3>
          <button id="closeModalBtn" class="text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="docRequestForm" class="space-y-3.5 text-xs">
          <div>
            <label class="block font-semibold text-on-surface mb-1">Document Type *</label>
            <select id="reqDocType" required class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="7_12_extract">7/12 RoR Extract</option>
              <option value="mutation_entry">Mutation Entry (Ferfar / 6D)</option>
              <option value="bank_passbook">Bank Passbook / Cancelled Cheque</option>
              <option value="aadhaar_copy">Identity Proof (Aadhaar / Voter ID)</option>
              <option value="sale_deed">Registered Sale / Partition Deed</option>
              <option value="joint_measurement_sheet">Joint Measurement Sheet (JMR)</option>
              <option value="valuation_certificate">Valuation Certificate</option>
              <option value="other">Other Official Document</option>
            </select>
          </div>

          <div>
            <label class="block font-semibold text-on-surface mb-1">Official Reason for Request *</label>
            <input type="text" id="reqReason" required placeholder="e.g. Discrepancy in parcel boundary vs Section 19 notification" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <div>
            <label class="block font-semibold text-on-surface mb-1">Message to Citizen (Optional)</label>
            <textarea id="reqMessage" rows="2" placeholder="Please upload clear scanned PDF showing official revenue stamp..." class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button type="button" id="cancelModalBtn" class="px-3 py-1.5 border border-outline-variant/60 rounded-lg text-on-surface hover:bg-surface-container">
              Cancel
            </button>
            <button type="submit" id="submitDocReqBtn" class="px-4 py-1.5 bg-primary text-on-primary font-semibold rounded-lg hover:opacity-95">
              Send Request to Citizen
            </button>
          </div>
        </form>
      </div>
    </div>
  `;const i=()=>{s.innerHTML=""};s.querySelector("#closeModalBtn").addEventListener("click",i),s.querySelector("#cancelModalBtn").addEventListener("click",i),s.querySelector("#docRequestForm").addEventListener("submit",async l=>{l.preventDefault();const o=s.querySelector("#reqDocType").value,p=s.querySelector("#reqReason").value.trim(),d=s.querySelector("#reqMessage").value.trim(),c=s.querySelector("#submitDocReqBtn");c.disabled=!0,c.textContent="Sending...";try{await S.requestDocument(t.case_id,{actor_user_id:a.user_id,document_type:o,reason:p,message:d}),i(),n()}catch(u){alert("Failed to request document: "+u.message),c.disabled=!1,c.textContent="Send Request to Citizen"}})}function Tt(t,a,s,n,i){n.innerHTML=`
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface border border-outline-variant rounded-xl p-6 max-w-md w-full shadow-lg space-y-4">
        <div class="flex items-center justify-between border-b border-outline-variant/40 pb-3">
          <h3 class="text-sm font-bold text-error flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px]">close</span>
            <span>Reject Submitted Document</span>
          </h3>
          <button id="closeModalBtn" class="text-on-surface-variant hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="rejectDocForm" class="space-y-3.5 text-xs">
          <div>
            <label class="block font-semibold text-on-surface mb-1">Rejection Reason *</label>
            <textarea id="rejectionReasonText" rows="3" required placeholder="Specify why the document cannot be verified (e.g. illegible scan, outdated revenue extract, seal missing)..." class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-error"></textarea>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button type="button" id="cancelModalBtn" class="px-3 py-1.5 border border-outline-variant/60 rounded-lg text-on-surface hover:bg-surface-container">
              Cancel
            </button>
            <button type="submit" id="submitRejectBtn" class="px-4 py-1.5 bg-error text-white font-semibold rounded-lg hover:opacity-95">
              Confirm Rejection
            </button>
          </div>
        </form>
      </div>
    </div>
  `;const r=()=>{n.innerHTML=""};n.querySelector("#closeModalBtn").addEventListener("click",r),n.querySelector("#cancelModalBtn").addEventListener("click",r),n.querySelector("#rejectDocForm").addEventListener("submit",async o=>{o.preventDefault();const p=n.querySelector("#rejectionReasonText").value.trim(),d=n.querySelector("#submitRejectBtn");d.disabled=!0,d.textContent="Rejecting...";try{await S.verifyDocument(t,a,{actor_user_id:s.user_id,verification_status:"rejected",rejection_reason:p}),r(),i()}catch(c){alert("Failed to reject document: "+c.message),d.disabled=!1,d.textContent="Confirm Rejection"}})}const Pe="bhoomi_theme",E={SYSTEM:"system",LIGHT:"light",DARK:"dark"};class St{constructor(){this.mediaQuery=window.matchMedia("(prefers-color-scheme: dark)"),this.listeners=[],this.currentTheme=this.getStoredTheme()}init(){this.applyTheme(this.currentTheme),this.mediaQuery.addEventListener("change",()=>{this.currentTheme===E.SYSTEM&&this.applyTheme(E.SYSTEM)})}getStoredTheme(){try{const a=localStorage.getItem(Pe);if(a&&Object.values(E).includes(a))return a}catch{}return E.SYSTEM}getResolvedTheme(){return this.currentTheme===E.SYSTEM?this.mediaQuery.matches?E.DARK:E.LIGHT:this.currentTheme}setTheme(a){if(Object.values(E).includes(a)){this.currentTheme=a;try{localStorage.setItem(Pe,a)}catch(s){console.warn("Could not persist theme to localStorage:",s)}this.applyTheme(a),this.notifyListeners()}}applyTheme(a){const s=a===E.DARK||a===E.SYSTEM&&this.mediaQuery.matches,n=document.documentElement;s?n.classList.add("dark"):n.classList.remove("dark"),n.setAttribute("data-theme",a)}subscribe(a){return this.listeners.push(a),()=>{this.listeners=this.listeners.filter(s=>s!==a)}}notifyListeners(){this.listeners.forEach(a=>a(this.currentTheme,this.getResolvedTheme()))}}const se=new St;class Rt{constructor(){this.container=document.getElementById("appViewContainer"),this.currentView="dashboard",this.currentPortal="officer",this.isBackendOnline=!1,this.healthInterval=null,this.clockInterval=null}init(){Ze(),se.init(),this.setupThemeToggle(),this.setupLanguageToggle(),this.setupPortalSwitcher(),this.setupNavigation(),this.setupMobileMenu(),this.setupUserSession(),this.updateLanguageUI(),this.setupClock(),this.setupNotificationBell(),this.startHealthPolling(),this.handleRouting(),window.addEventListener("hashchange",()=>this.handleRouting());const a=document.getElementById("brandHeaderHome");a&&(a.addEventListener("click",()=>{window.location.hash="#/dashboard"}),a.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),window.location.hash="#/dashboard")}));const s=document.getElementById("backendStatusPill");s&&(s.addEventListener("click",()=>this.checkBackendHealth(!0)),s.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.checkBackendHealth(!0))}))}setupNotificationBell(){const a=document.getElementById("notifBellBtn");a&&a.addEventListener("click",()=>{window.location.hash="#/notifications"}),this.updateNotificationBadge(),U.subscribe(()=>this.updateNotificationBadge())}updateNotificationBadge(){const a=U.getUnreadCount(),s=document.getElementById("notifBellBadge"),n=document.getElementById("notifBellBtn");s&&(a>0?(s.textContent=a>9?"9+":a,s.classList.remove("hidden")):(s.textContent="",s.classList.add("hidden"))),n&&n.setAttribute("title",a>0?`${a} Unread System Notifications`:"No Unread Notifications")}setupThemeToggle(){const a=document.getElementById("themeToggleBtn"),s=document.getElementById("themeMenu"),n=document.getElementById("themeIcon"),i=document.querySelectorAll(".theme-option-btn"),r=l=>{const o={system:"brightness_auto",light:"light_mode",dark:"dark_mode"};n&&(n.textContent=o[l]||"brightness_auto"),i.forEach(p=>{const d=p.getAttribute("data-theme"),c=p.querySelector(".check-icon");d===l?(p.classList.add("bg-surface-container","font-semibold"),c&&c.classList.remove("hidden")):(p.classList.remove("bg-surface-container","font-semibold"),c&&c.classList.add("hidden"))})};r(se.currentTheme),se.subscribe(l=>r(l)),a&&s&&(a.addEventListener("click",l=>{if(l.stopPropagation(),!s.classList.contains("hidden"))s.classList.add("hidden"),a.setAttribute("aria-expanded","false");else{s.classList.remove("hidden"),a.setAttribute("aria-expanded","true");const p=s.querySelector(".theme-option-btn");p&&p.focus()}}),i.forEach(l=>{l.addEventListener("click",()=>{const o=l.getAttribute("data-theme");se.setTheme(o),s.classList.add("hidden"),a.setAttribute("aria-expanded","false"),a.focus()})}),document.addEventListener("click",l=>{!a.contains(l.target)&&!s.contains(l.target)&&(s.classList.add("hidden"),a.setAttribute("aria-expanded","false"))}),document.addEventListener("keydown",l=>{l.key==="Escape"&&!s.classList.contains("hidden")&&(s.classList.add("hidden"),a.setAttribute("aria-expanded","false"),a.focus())}))}setupLanguageToggle(){const a=document.getElementById("langToggleBtn"),s=document.getElementById("langMenu"),n=document.getElementById("langCurrentLabel"),i=document.querySelectorAll(".lang-option-btn"),r=l=>{n&&(n.textContent=l.toUpperCase()),i.forEach(o=>{const p=o.getAttribute("data-lang"),d=o.querySelector(".check-icon");p===l?(o.classList.add("bg-surface-container","font-semibold"),o.setAttribute("aria-selected","true"),d&&d.classList.remove("hidden")):(o.classList.remove("bg-surface-container","font-semibold"),o.setAttribute("aria-selected","false"),d&&d.classList.add("hidden"))}),this.updateLanguageUI()};r(P.getLanguage()),P.subscribe(l=>{r(l),this.handleRouting()}),a&&s&&(a.addEventListener("click",l=>{if(l.stopPropagation(),!s.classList.contains("hidden"))s.classList.add("hidden"),a.setAttribute("aria-expanded","false");else{s.classList.remove("hidden"),a.setAttribute("aria-expanded","true");const p=s.querySelector('[aria-selected="true"]')||i[0];p&&p.focus()}}),i.forEach(l=>{l.addEventListener("click",()=>{const o=l.getAttribute("data-lang");P.setLanguage(o),s.classList.add("hidden"),a.setAttribute("aria-expanded","false"),a.focus()})}),document.addEventListener("click",l=>{!a.contains(l.target)&&!s.contains(l.target)&&(s.classList.add("hidden"),a.setAttribute("aria-expanded","false"))}),document.addEventListener("keydown",l=>{l.key==="Escape"&&!s.classList.contains("hidden")&&(s.classList.add("hidden"),a.setAttribute("aria-expanded","false"),a.focus())}))}setupMobileMenu(){const a=document.getElementById("mobileMenuToggleBtn"),s=document.getElementById("mobileNavigationMenu"),n=document.getElementById("mobileMenuIcon");if(!a||!s)return;const i=()=>{s.classList.add("hidden"),a.setAttribute("aria-expanded","false"),n&&(n.textContent="menu")},r=()=>{s.classList.remove("hidden"),a.setAttribute("aria-expanded","true"),n&&(n.textContent="close")};a.addEventListener("click",l=>{l.stopPropagation(),s.classList.contains("hidden")?r():i()}),s.querySelectorAll(".mobile-nav-tab").forEach(l=>{l.addEventListener("click",()=>{i()})}),document.addEventListener("click",l=>{!a.contains(l.target)&&!s.contains(l.target)&&i()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&!s.classList.contains("hidden")&&(i(),a.focus())})}updateLanguageUI(){const a=e("header.platformName","Bhoomi Sakha"),s=e("header.subtitle","Predictive Land Acquisition Delay-Risk Platform"),n=e("header.sihBadge","SIH 2026 • PS ID 26017");document.title=`${a} | ${s} (${n})`,document.querySelectorAll(".nav-tab").forEach(C=>{const x=C.getAttribute("data-target");if(x){const m=C.querySelector("span:not(.material-symbols-outlined)")||C;m.textContent=e(`nav.${x}`,m.textContent)}});const r=document.getElementById("breadcrumbRoot");r&&(r.textContent=e("header.commandCenter","Command Center"));const l=document.getElementById("currentViewName");l&&this.currentView&&(l.textContent=e(`views.${this.currentView}`,l.textContent));const o=document.getElementById("brandHeaderTitle");o&&(o.textContent=a);const p=document.getElementById("brandHeaderBadge");p&&(p.textContent=n);const d=document.getElementById("brandHeaderSubtitle");d&&(d.textContent=s),this.updateUserSessionUI();const c=document.getElementById("statutoryCutoffLabel");c&&(c.textContent=e("header.statutoryCutoff","Statutory Cutoff: 48h Remaining"));const u=document.getElementById("liveISTLabel");u&&(u.textContent=`${e("header.istClock","IST")}:`);const f=document.getElementById("footerDescription");f&&(f.textContent=e("footer.description",f.textContent));const v=document.getElementById("footerAuditNode");v&&(v.textContent=e("footer.auditNode","Audit Node: 0x88F2B7"));const b=document.getElementById("footerProtocol");b&&(b.textContent=e("footer.protocol","Precision Cadastral Verification Protocol v4.1"));const y=document.getElementById("notifBellBtn");y&&y.setAttribute("title",e("header.openNotifications","System Notifications"));const w=document.getElementById("themeToggleBtn");w&&(w.setAttribute("title",e("header.toggleTheme","Color Theme")),w.setAttribute("aria-label",e("header.toggleTheme","Toggle color theme")));const _=document.getElementById("langToggleBtn");_&&(_.setAttribute("title",e("header.selectLanguage","Language")),_.setAttribute("aria-label",e("header.selectLanguage","Select application language")));const T=document.getElementById("mobileMenuToggleBtn");T&&T.setAttribute("aria-label",e("header.toggleMenu","Open navigation menu")),this.updateBackendStatusUI()}updateBackendStatusUI(){var s,n;const a=document.getElementById("backendStatusText");if(a)if(this.isBackendOnline){let i=e("header.statusConnected","FastAPI Connected • XGBoost Engine Active");(n=(s=this.cachedMetadata)==null?void 0:s.model)!=null&&n.version&&(i=`${i} (v${this.cachedMetadata.model.version})`),a.textContent=i}else a.textContent=e("header.statusUnavailable","Backend Unavailable • Click to Retry")}setupUserSession(){this.updateUserSessionUI(),L.onAuthChange(a=>{this.updateUserSessionUI(),a&&(a.role==="officer"||a.role==="super_admin")&&this.currentPortal!=="officer"?this.setPortalMode("officer",!1):a&&a.role==="citizen"&&this.currentPortal!=="citizen"&&this.setPortalMode("citizen",!1),this.handleRouting()})}updateUserSessionUI(){const a=document.getElementById("headerUserContainer");if(!a)return;const s=L.getStoredUser();if(!s){a.innerHTML=`
        <button id="headerSignInBtn" type="button" class="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Sign In or Register">
          <span class="material-symbols-outlined text-[16px]">lock_open</span>
          <span>${e("auth.signInBtn","Sign In / Register")}</span>
        </button>
      `;const p=document.getElementById("headerSignInBtn");p&&p.addEventListener("click",()=>{xe({role:this.currentPortal,onSuccess:d=>{this.showToast(`Signed in as ${d.name} (${d.role})`,"success"),d.role==="citizen"&&this.currentPortal!=="citizen"?this.setPortalMode("citizen",!0):d.role==="officer"&&this.currentPortal!=="officer"?this.setPortalMode("officer",!0):this.handleRouting()}})});return}const n=(s.name||s.email||"U").split(" ").filter(Boolean).map(p=>p[0]).join("").slice(0,2).toUpperCase(),i=s.role==="officer"||s.role==="super_admin"?s.designation||"Revenue Officer":"Citizen / Landowner";a.innerHTML=`
      <div class="relative" id="userMenuContainer">
        <button id="userProfileBtn" type="button" class="flex items-center gap-2 p-1 rounded-lg hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary" aria-label="User account menu" aria-haspopup="true" aria-expanded="false">
          <div class="flex flex-col text-right hidden lg:flex">
            <span class="font-label-md text-xs text-on-surface font-semibold truncate max-w-[150px]">${s.name}</span>
            <span class="font-label-sm text-[11px] text-on-surface-variant font-medium">${i}</span>
          </div>
          <div class="w-8 h-8 rounded-full ${s.role==="officer"?"bg-primary-container text-on-primary":"bg-primary text-on-primary"} flex items-center justify-center font-bold text-xs ring-1 ring-outline-variant/60 shadow-xs" title="${s.name} (${s.email})">
            ${n}
          </div>
        </button>
        <div id="userProfileDropdown" class="hidden absolute right-0 mt-2 w-56 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-xl py-2 z-50 text-xs text-on-surface animate-fade-in">
          <div class="px-3.5 py-2 border-b border-outline-variant/30">
            <div class="font-bold truncate text-on-surface">${s.name}</div>
            <div class="text-[11px] text-on-surface-variant truncate font-tabular-data">${s.email}</div>
            <div class="text-[10px] text-primary font-semibold mt-1 uppercase font-tabular-data">ID: ${s.user_id}</div>
          </div>
          <div class="p-1">
            <button id="headerSignOutBtn" type="button" class="w-full px-3 py-2 text-left rounded-lg text-error hover:bg-error/10 flex items-center gap-2 transition-colors font-medium">
              <span class="material-symbols-outlined text-[16px]">logout</span>
              <span>${e("auth.signOutBtn","Sign Out")}</span>
            </button>
          </div>
        </div>
      </div>
    `;const r=document.getElementById("userProfileBtn"),l=document.getElementById("userProfileDropdown"),o=document.getElementById("headerSignOutBtn");r&&l&&(r.addEventListener("click",p=>{p.stopPropagation(),!l.classList.contains("hidden")?(l.classList.add("hidden"),r.setAttribute("aria-expanded","false")):(l.classList.remove("hidden"),r.setAttribute("aria-expanded","true"))}),document.addEventListener("click",p=>{!r.contains(p.target)&&!l.contains(p.target)&&(l.classList.add("hidden"),r.setAttribute("aria-expanded","false"))})),o&&o.addEventListener("click",async()=>{await L.logout(),this.showToast(e("auth.signedOutToast","Signed out successfully."),"info"),this.updateUserSessionUI(),this.handleRouting()})}setupPortalSwitcher(){const a=document.getElementById("switchToOfficerBtn"),s=document.getElementById("switchToCitizenBtn");a&&a.addEventListener("click",()=>{this.currentPortal!=="officer"&&this.setPortalMode("officer",!0)}),s&&s.addEventListener("click",()=>{this.currentPortal!=="citizen"&&this.setPortalMode("citizen",!0)}),this.renderPortalNavigation()}setPortalMode(a,s=!1){this.currentPortal=a;const n=document.getElementById("switchToOfficerBtn"),i=document.getElementById("switchToCitizenBtn");n&&i&&(a==="officer"?(n.className="px-2 py-1 rounded transition-all flex items-center gap-1 bg-primary text-on-primary shadow-xs font-semibold",i.className="px-2 py-1 rounded transition-all flex items-center gap-1 text-on-surface-variant hover:text-on-surface"):(i.className="px-2 py-1 rounded transition-all flex items-center gap-1 bg-primary text-on-primary shadow-xs font-semibold",n.className="px-2 py-1 rounded transition-all flex items-center gap-1 text-on-surface-variant hover:text-on-surface"));const r=document.getElementById("breadcrumbRoot");r&&(r.textContent=a==="officer"?e("header.commandCenter","Command Center"):e("citizen.portalTitle","Citizen Portal")),this.updateUserSessionUI(),this.renderPortalNavigation(),s&&(a==="officer"?window.location.hash="#/dashboard":window.location.hash="#/citizen-dashboard")}renderPortalNavigation(){const a=document.getElementById("mainNavigation"),s=document.getElementById("mobileNavigationMenu");!a||!s||(this.currentPortal==="citizen"?(a.innerHTML=`
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="citizen-dashboard" href="#/citizen-dashboard"><span>${e("nav.citizenDashboard","Dashboard")}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="citizen-lands" href="#/citizen-lands"><span>${e("nav.citizenLands","My Land")}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="citizen-risk" href="#/citizen-risk"><span>${e("nav.citizenRisk","Check Delay Risk")}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="citizen-complaint" href="#/citizen-complaint"><span>${e("nav.citizenComplaint","File Grievance")}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="citizen-cases" href="#/citizen-cases"><span>${e("nav.citizenCases","My Cases")}</span></a>
      `,s.innerHTML=`
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="citizen-dashboard" href="#/citizen-dashboard">
          <span class="material-symbols-outlined text-[18px]">dashboard</span>
          <span>${e("nav.citizenDashboard","Dashboard")}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="citizen-lands" href="#/citizen-lands">
          <span class="material-symbols-outlined text-[18px]">terrain</span>
          <span>${e("nav.citizenLands","My Land")}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="citizen-risk" href="#/citizen-risk">
          <span class="material-symbols-outlined text-[18px]">psychology</span>
          <span>${e("nav.citizenRisk","Check Delay Risk")}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="citizen-complaint" href="#/citizen-complaint">
          <span class="material-symbols-outlined text-[18px]">report_problem</span>
          <span>${e("nav.citizenComplaint","File Grievance")}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="citizen-cases" href="#/citizen-cases">
          <span class="material-symbols-outlined text-[18px]">assignment</span>
          <span>${e("nav.citizenCases","My Cases")}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="notifications" href="#/notifications">
          <span class="material-symbols-outlined text-[18px]">notifications</span>
          <span>${e("nav.notifications","Notifications")}</span>
        </a>
      `):(a.innerHTML=`
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="dashboard" href="#/dashboard"><span>${e("nav.dashboard","Command Center")}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="cases" href="#/cases"><span>${e("nav.cases","Case Queue")}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="assessment" href="#/assessment"><span>${e("nav.assessment","Risk Assessment")}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="projects" href="#/projects"><span>${e("nav.projects","Projects Directory")}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="audit" href="#/audit"><span>${e("nav.audit","Audit Detail")}</span></a>
      `,s.innerHTML=`
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="dashboard" href="#/dashboard">
          <span class="material-symbols-outlined text-[18px]">dashboard</span>
          <span>${e("nav.dashboard","Command Center")}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="cases" href="#/cases">
          <span class="material-symbols-outlined text-[18px]">gavel</span>
          <span>${e("nav.cases","Case Queue")}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="assessment" href="#/assessment">
          <span class="material-symbols-outlined text-[18px]">analytics</span>
          <span>${e("nav.assessment","Risk Assessment")}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="projects" href="#/projects">
          <span class="material-symbols-outlined text-[18px]">folder_open</span>
          <span>${e("nav.projects","Projects Directory")}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="audit" href="#/audit">
          <span class="material-symbols-outlined text-[18px]">description</span>
          <span>${e("nav.audit","Audit Detail")}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="notifications" href="#/notifications">
          <span class="material-symbols-outlined text-[18px]">notifications</span>
          <span>${e("nav.notifications","Notifications")}</span>
        </a>
      `),this.setupNavigation())}setupNavigation(){document.querySelectorAll(".nav-tab").forEach(s=>{s.addEventListener("click",()=>{const n=s.getAttribute("data-target");n&&this.updateNavState(n)})})}updateNavState(a){document.querySelectorAll(".nav-tab").forEach(i=>{const r=i.getAttribute("data-target")===a;i.classList.contains("mobile-nav-tab")?r?(i.className="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors bg-primary-container text-on-primary font-semibold shadow-sm focus:ring-2 focus:ring-primary",i.setAttribute("aria-current","page")):(i.className="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors text-on-surface-variant hover:text-on-surface hover:bg-surface-container focus:ring-2 focus:ring-primary",i.removeAttribute("aria-current")):r?(i.className="nav-tab px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-label-md rounded-lg shadow-sm font-semibold focus-visible:ring-2 focus-visible:ring-primary",i.setAttribute("aria-current","page")):(i.className="nav-tab px-space-md py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded focus-visible:ring-2 focus-visible:ring-primary",i.removeAttribute("aria-current"))});const n=document.getElementById("currentViewName");n&&(n.textContent=e(`views.${a}`,a.replace(/-/g," ").toUpperCase()))}handleRouting(){const a=window.location.hash||"#/dashboard",[s,n]=a.replace("#/","").split("?"),i=new URLSearchParams(n||"");switch(this.currentView=s||"dashboard",this.currentView.startsWith("citizen-")&&this.currentPortal!=="citizen"?this.setPortalMode("citizen",!1):!this.currentView.startsWith("citizen-")&&this.currentView!=="notifications"&&this.currentPortal!=="officer"&&this.setPortalMode("officer",!1),this.updateNavState(this.currentView),window.scrollTo({top:0,behavior:"smooth"}),this.currentView){case"citizen-dashboard":$e(this.container);break;case"citizen-lands":Ee(this.container);break;case"citizen-risk":ft(this.container);break;case"citizen-complaint":Ue(this.container);break;case"citizen-cases":je(this.container);break;case"cases":qe(this.container);break;case"officer-case-workspace":Oe(this.container);break;case"notifications":ut(this.container,()=>this.updateNotificationBadge());break;case"assessment":const r=i.get("preset")||"medium";st(this.container,r);break;case"projects":lt(this.container,o=>{window.location.hash=`#/assessment?preset=${o}`},o=>{window.location.hash=`#/audit?id=${o}`});break;case"audit":const l=i.get("id")||"BF-NH-2024-09";ct(this.container,l,o=>{window.location.hash=`#/assessment?preset=${o}`});break;case"dashboard":default:this.currentView="dashboard",tt(this.container,o=>{window.location.hash=`#/assessment?preset=${o}`},o=>{window.location.hash=`#/audit?id=${o}`});break}}setupClock(){const a=()=>{const s=document.getElementById("liveISTClock");if(s){const n=new Date,i={timeZone:"Asia/Kolkata",hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"};s.textContent=n.toLocaleTimeString("en-GB",i)}};a(),this.clockInterval=setInterval(a,1e3)}async checkBackendHealth(a=!1){var r,l;const s=document.getElementById("backendStatusDot"),n=document.getElementById("backendStatusText");s&&(s.innerHTML='<span class="animate-pulse relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>'),n&&!this.isBackendOnline&&(n.textContent=e("header.statusConnecting","Backend: Connecting..."),n.className="font-label-sm text-label-sm text-on-surface-variant font-tabular-data");const i=await ce.checkHealth();if(i.online&&i.modelLoaded){let o=e("header.statusConnected","FastAPI Connected • XGBoost Engine Active");try{this.cachedMetadata||(this.cachedMetadata=await ce.getMetadata()),(l=(r=this.cachedMetadata)==null?void 0:r.model)!=null&&l.version&&(o=`${o} (v${this.cachedMetadata.model.version})`)}catch{}s&&(s.innerHTML=`
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        `),n&&(n.textContent=o,n.className="font-label-sm text-label-sm text-on-surface font-tabular-data font-semibold"),!this.isBackendOnline&&a&&this.showToast(e("header.statusConnected","FastAPI Connected • XGBoost Engine Active"),"success"),this.isBackendOnline=!0}else s&&(s.innerHTML=`
          <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        `),n&&(n.textContent=e("header.statusUnavailable","Backend Unavailable • Click to Retry"),n.className="font-label-sm text-label-sm text-red-600 dark:text-red-400 font-tabular-data font-semibold"),(this.isBackendOnline||a)&&this.showToast(e("header.statusUnavailable","Backend Unavailable • Click to Retry"),"warning"),this.isBackendOnline=!1}startHealthPolling(){this.checkBackendHealth(),this.healthInterval=setInterval(()=>this.checkBackendHealth(),6e3)}showToast(a,s="info"){const n=document.getElementById("toastContainer");if(!n)return;const i=document.createElement("div"),r=s==="success"?"bg-primary-container text-on-primary border-secondary":"bg-amber-100 text-amber-950 border-amber-400";i.className=`${r} px-4 py-3 rounded-lg shadow-lg border text-sm max-w-md pointer-events-auto flex items-start gap-2 transition-all duration-300 transform translate-y-2 opacity-0`,i.innerHTML=`
      <span class="material-symbols-outlined text-[18px] text-secondary-container mt-0.5">info</span>
      <span class="flex-1">${a}</span>
    `,n.appendChild(i),requestAnimationFrame(()=>{i.classList.remove("translate-y-2","opacity-0")}),setTimeout(()=>{i.classList.add("opacity-0","translate-y-2"),setTimeout(()=>i.remove(),300)},4500)}}document.addEventListener("DOMContentLoaded",()=>{new Rt().init()});

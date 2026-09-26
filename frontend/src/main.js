/**
 * Bhoomi Sakha - Main Application Entrypoint
 * Coordinates client-side routing, health polling, live time, and view lifecycles.
 */

import { renderDashboardView } from './views/dashboard.js';
import { renderAssessmentView } from './views/assessment.js';
import { renderProjectsView } from './views/projects.js';
import { renderDetailView } from './views/detail.js';
import { renderNotificationsView } from './views/notifications.js';
import { renderCitizenDashboardView } from './views/citizenDashboard.js';
import { renderCitizenLandView } from './views/citizenLand.js';
import { renderCitizenRiskView } from './views/citizenRisk.js';
import { renderCitizenComplaintView } from './views/citizenComplaint.js';
import { renderCitizenCaseTrackingView } from './views/citizenCaseTracking.js';
import { renderOfficerCasesView } from './views/officerCases.js';
import { renderOfficerWorkspaceView } from './views/officerWorkspace.js';
import { authService } from './api/auth.js';
import { openAuthModal } from './components/authModal.js';
import { predictionService } from './api/prediction.js';
import { notificationStore } from './utils/notifications.js';
import { themeManager } from './utils/theme.js';
import { initInfoSystem } from './utils/infoModal.js';
import { i18n, t } from './i18n/index.js';

class BhoomiSakhaApp {
  constructor() {
    this.container = document.getElementById('appViewContainer');
    this.currentView = 'dashboard';
    this.currentPortal = 'officer';
    this.isBackendOnline = false;
    this.healthInterval = null;
    this.clockInterval = null;
  }

  init() {
    initInfoSystem();
    themeManager.init();
    this.setupThemeToggle();
    this.setupLanguageToggle();
    this.setupPortalSwitcher();
    this.setupNavigation();
    this.setupMobileMenu();
    this.setupUserSession();
    this.updateLanguageUI();
    this.setupClock();
    this.setupNotificationBell();
    this.startHealthPolling();
    this.handleRouting();

    window.addEventListener('hashchange', () => this.handleRouting());

    const brandBtn = document.getElementById('brandHeaderHome');
    if (brandBtn) {
      brandBtn.addEventListener('click', () => {
        window.location.hash = '#/dashboard';
      });
      brandBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.hash = '#/dashboard';
        }
      });
    }

    const backendPill = document.getElementById('backendStatusPill');
    if (backendPill) {
      backendPill.addEventListener('click', () => this.checkBackendHealth(true));
      backendPill.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.checkBackendHealth(true);
        }
      });
    }
  }

  setupNotificationBell() {
    const bellBtn = document.getElementById('notifBellBtn');
    if (bellBtn) {
      bellBtn.addEventListener('click', () => {
        window.location.hash = '#/notifications';
      });
    }
    this.updateNotificationBadge();
    notificationStore.subscribe(() => this.updateNotificationBadge());
  }

  updateNotificationBadge() {
    const count = notificationStore.getUnreadCount();
    const badge = document.getElementById('notifBellBadge');
    const bellBtn = document.getElementById('notifBellBtn');
    if (badge) {
      if (count > 0) {
        badge.textContent = count > 9 ? '9+' : count;
        badge.classList.remove('hidden');
      } else {
        badge.textContent = '';
        badge.classList.add('hidden');
      }
    }
    if (bellBtn) {
      bellBtn.setAttribute('title', count > 0 ? `${count} Unread System Notifications` : 'No Unread Notifications');
    }
  }

  setupThemeToggle() {
    const toggleBtn = document.getElementById('themeToggleBtn');
    const menu = document.getElementById('themeMenu');
    const themeIcon = document.getElementById('themeIcon');
    const optionBtns = document.querySelectorAll('.theme-option-btn');

    const updateUI = (theme) => {
      const iconMap = {
        system: 'brightness_auto',
        light: 'light_mode',
        dark: 'dark_mode',
      };
      if (themeIcon) {
        themeIcon.textContent = iconMap[theme] || 'brightness_auto';
      }
      optionBtns.forEach(btn => {
        const itemTheme = btn.getAttribute('data-theme');
        const check = btn.querySelector('.check-icon');
        if (itemTheme === theme) {
          btn.classList.add('bg-surface-container', 'font-semibold');
          if (check) check.classList.remove('hidden');
        } else {
          btn.classList.remove('bg-surface-container', 'font-semibold');
          if (check) check.classList.add('hidden');
        }
      });
    };

    updateUI(themeManager.currentTheme);
    themeManager.subscribe((theme) => updateUI(theme));

    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !menu.classList.contains('hidden');
        if (isOpen) {
          menu.classList.add('hidden');
          toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          menu.classList.remove('hidden');
          toggleBtn.setAttribute('aria-expanded', 'true');
          const firstBtn = menu.querySelector('.theme-option-btn');
          if (firstBtn) firstBtn.focus();
        }
      });

      optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const selected = btn.getAttribute('data-theme');
          themeManager.setTheme(selected);
          menu.classList.add('hidden');
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.focus();
        });
      });

      document.addEventListener('click', (e) => {
        if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.add('hidden');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.focus();
        }
      });
    }
  }

  setupLanguageToggle() {
    const toggleBtn = document.getElementById('langToggleBtn');
    const menu = document.getElementById('langMenu');
    const currentLabel = document.getElementById('langCurrentLabel');
    const optionBtns = document.querySelectorAll('.lang-option-btn');

    const updateUI = (lang) => {
      if (currentLabel) {
        currentLabel.textContent = lang.toUpperCase();
      }
      optionBtns.forEach(btn => {
        const itemLang = btn.getAttribute('data-lang');
        const check = btn.querySelector('.check-icon');
        if (itemLang === lang) {
          btn.classList.add('bg-surface-container', 'font-semibold');
          btn.setAttribute('aria-selected', 'true');
          if (check) check.classList.remove('hidden');
        } else {
          btn.classList.remove('bg-surface-container', 'font-semibold');
          btn.setAttribute('aria-selected', 'false');
          if (check) check.classList.add('hidden');
        }
      });
      this.updateLanguageUI();
    };

    updateUI(i18n.getLanguage());
    i18n.subscribe((lang) => {
      updateUI(lang);
      this.handleRouting();
    });

    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !menu.classList.contains('hidden');
        if (isOpen) {
          menu.classList.add('hidden');
          toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          menu.classList.remove('hidden');
          toggleBtn.setAttribute('aria-expanded', 'true');
          const activeBtn = menu.querySelector('[aria-selected="true"]') || optionBtns[0];
          if (activeBtn) activeBtn.focus();
        }
      });

      optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const selected = btn.getAttribute('data-lang');
          i18n.setLanguage(selected);
          menu.classList.add('hidden');
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.focus();
        });
      });

      document.addEventListener('click', (e) => {
        if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.add('hidden');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.focus();
        }
      });
    }
  }

  setupMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuToggleBtn');
    const menu = document.getElementById('mobileNavigationMenu');
    const icon = document.getElementById('mobileMenuIcon');

    if (!toggleBtn || !menu) return;

    const closeMenu = () => {
      menu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      if (icon) icon.textContent = 'menu';
    };

    const openMenu = () => {
      menu.classList.remove('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
      if (icon) icon.textContent = 'close';
    };

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isClosed = menu.classList.contains('hidden');
      if (isClosed) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    menu.querySelectorAll('.mobile-nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
        closeMenu();
        toggleBtn.focus();
      }
    });
  }

  updateLanguageUI() {
    // 1. Document title
    const platformName = t('header.platformName', 'Bhoomi Sakha');
    const subtitle = t('header.subtitle', 'Predictive Land Acquisition Delay-Risk Platform');
    const badge = t('header.sihBadge', 'SIH 2026 • PS ID 26017');
    document.title = `${platformName} | ${subtitle} (${badge})`;

    // 2. Navigation tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
      const target = tab.getAttribute('data-target');
      if (target) {
        const textSpan = tab.querySelector('span:not(.material-symbols-outlined)') || tab;
        textSpan.textContent = t(`nav.${target}`, textSpan.textContent);
      }
    });

    // 3. Breadcrumb & View title
    const breadcrumbRoot = document.getElementById('breadcrumbRoot');
    if (breadcrumbRoot) {
      breadcrumbRoot.textContent = t('header.commandCenter', 'Command Center');
    }

    const breadcrumbLabel = document.getElementById('currentViewName');
    if (breadcrumbLabel && this.currentView) {
      breadcrumbLabel.textContent = t(`views.${this.currentView}`, breadcrumbLabel.textContent);
    }

    // 4. Header brand & badges
    const brandHeaderTitle = document.getElementById('brandHeaderTitle');
    if (brandHeaderTitle) brandHeaderTitle.textContent = platformName;

    const brandHeaderBadge = document.getElementById('brandHeaderBadge');
    if (brandHeaderBadge) brandHeaderBadge.textContent = badge;

    const brandHeaderSubtitle = document.getElementById('brandHeaderSubtitle');
    if (brandHeaderSubtitle) brandHeaderSubtitle.textContent = subtitle;

    // 5. User Session & Persona
    this.updateUserSessionUI();

    // 6. Secondary ribbon
    const statutoryCutoffLabel = document.getElementById('statutoryCutoffLabel');
    if (statutoryCutoffLabel) statutoryCutoffLabel.textContent = t('header.statutoryCutoff', 'Statutory Cutoff: 48h Remaining');

    const liveISTLabel = document.getElementById('liveISTLabel');
    if (liveISTLabel) liveISTLabel.textContent = `${t('header.istClock', 'IST')}:`;

    // 7. Civic Footer
    const footerDesc = document.getElementById('footerDescription');
    if (footerDesc) footerDesc.textContent = t('footer.description', footerDesc.textContent);

    const footerAuditNode = document.getElementById('footerAuditNode');
    if (footerAuditNode) footerAuditNode.textContent = t('footer.auditNode', 'Audit Node: 0x88F2B7');

    const footerProtocol = document.getElementById('footerProtocol');
    if (footerProtocol) footerProtocol.textContent = t('footer.protocol', 'Precision Cadastral Verification Protocol v4.1');

    // 8. Header action labels & accessibility
    const notifBellBtn = document.getElementById('notifBellBtn');
    if (notifBellBtn) notifBellBtn.setAttribute('title', t('header.openNotifications', 'System Notifications'));

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('title', t('header.toggleTheme', 'Color Theme'));
      themeToggleBtn.setAttribute('aria-label', t('header.toggleTheme', 'Toggle color theme'));
    }

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
      langToggleBtn.setAttribute('title', t('header.selectLanguage', 'Language'));
      langToggleBtn.setAttribute('aria-label', t('header.selectLanguage', 'Select application language'));
    }

    const mobileMenuToggleBtn = document.getElementById('mobileMenuToggleBtn');
    if (mobileMenuToggleBtn) {
      mobileMenuToggleBtn.setAttribute('aria-label', t('header.toggleMenu', 'Open navigation menu'));
    }

    // 9. Update status text
    this.updateBackendStatusUI();
  }

  updateBackendStatusUI() {
    const text = document.getElementById('backendStatusText');
    if (!text) return;
    if (this.isBackendOnline) {
      let engineLabel = t('header.statusConnected', 'FastAPI Connected • XGBoost Engine Active');
      if (this.cachedMetadata?.model?.version) {
        engineLabel = `${engineLabel} (v${this.cachedMetadata.model.version})`;
      }
      text.textContent = engineLabel;
    } else {
      text.textContent = t('header.statusUnavailable', 'Backend Unavailable • Click to Retry');
    }
  }

  setupUserSession() {
    this.updateUserSessionUI();
    authService.onAuthChange((user) => {
      this.updateUserSessionUI();
      if (user && (user.role === 'officer' || user.role === 'super_admin') && this.currentPortal !== 'officer') {
        this.setPortalMode('officer', false);
      } else if (user && user.role === 'citizen' && this.currentPortal !== 'citizen') {
        this.setPortalMode('citizen', false);
      }
      this.handleRouting();
    });
  }

  updateUserSessionUI() {
    const userContainer = document.getElementById('headerUserContainer');
    if (!userContainer) return;

    const user = authService.getStoredUser();

    if (!user) {
      userContainer.innerHTML = `
        <button id="headerSignInBtn" type="button" class="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Sign In or Register">
          <span class="material-symbols-outlined text-[16px]">lock_open</span>
          <span>${t('auth.signInBtn', 'Sign In / Register')}</span>
        </button>
      `;

      const signInBtn = document.getElementById('headerSignInBtn');
      if (signInBtn) {
        signInBtn.addEventListener('click', () => {
          openAuthModal({
            role: this.currentPortal,
            onSuccess: (authUser) => {
              this.showToast(`Signed in as ${authUser.name} (${authUser.role})`, 'success');
              if (authUser.role === 'citizen' && this.currentPortal !== 'citizen') {
                this.setPortalMode('citizen', true);
              } else if (authUser.role === 'officer' && this.currentPortal !== 'officer') {
                this.setPortalMode('officer', true);
              } else {
                this.handleRouting();
              }
            },
          });
        });
      }
      return;
    }

    // Authenticated user
    const initials = (user.name || user.email || 'U')
      .split(' ')
      .filter(Boolean)
      .map(part => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    const roleLabel = (user.role === 'officer' || user.role === 'super_admin')
      ? (user.designation || 'Revenue Officer')
      : 'Citizen / Landowner';

    userContainer.innerHTML = `
      <div class="relative" id="userMenuContainer">
        <button id="userProfileBtn" type="button" class="flex items-center gap-2 p-1 rounded-lg hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary" aria-label="User account menu" aria-haspopup="true" aria-expanded="false">
          <div class="flex flex-col text-right hidden lg:flex">
            <span class="font-label-md text-xs text-on-surface font-semibold truncate max-w-[150px]">${user.name}</span>
            <span class="font-label-sm text-[11px] text-on-surface-variant font-medium">${roleLabel}</span>
          </div>
          <div class="w-8 h-8 rounded-full ${user.role === 'officer' ? 'bg-primary-container text-on-primary' : 'bg-primary text-on-primary'} flex items-center justify-center font-bold text-xs ring-1 ring-outline-variant/60 shadow-xs" title="${user.name} (${user.email})">
            ${initials}
          </div>
        </button>
        <div id="userProfileDropdown" class="hidden absolute right-0 mt-2 w-56 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-xl py-2 z-50 text-xs text-on-surface animate-fade-in">
          <div class="px-3.5 py-2 border-b border-outline-variant/30">
            <div class="font-bold truncate text-on-surface">${user.name}</div>
            <div class="text-[11px] text-on-surface-variant truncate font-tabular-data">${user.email}</div>
            <div class="text-[10px] text-primary font-semibold mt-1 uppercase font-tabular-data">ID: ${user.user_id}</div>
          </div>
          <div class="p-1">
            <button id="headerSignOutBtn" type="button" class="w-full px-3 py-2 text-left rounded-lg text-error hover:bg-error/10 flex items-center gap-2 transition-colors font-medium">
              <span class="material-symbols-outlined text-[16px]">logout</span>
              <span>${t('auth.signOutBtn', 'Sign Out')}</span>
            </button>
          </div>
        </div>
      </div>
    `;

    const userProfileBtn = document.getElementById('userProfileBtn');
    const userProfileDropdown = document.getElementById('userProfileDropdown');
    const signOutBtn = document.getElementById('headerSignOutBtn');

    if (userProfileBtn && userProfileDropdown) {
      userProfileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !userProfileDropdown.classList.contains('hidden');
        if (isOpen) {
          userProfileDropdown.classList.add('hidden');
          userProfileBtn.setAttribute('aria-expanded', 'false');
        } else {
          userProfileDropdown.classList.remove('hidden');
          userProfileBtn.setAttribute('aria-expanded', 'true');
        }
      });

      document.addEventListener('click', (e) => {
        if (!userProfileBtn.contains(e.target) && !userProfileDropdown.contains(e.target)) {
          userProfileDropdown.classList.add('hidden');
          userProfileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    if (signOutBtn) {
      signOutBtn.addEventListener('click', async () => {
        await authService.logout();
        this.showToast(t('auth.signedOutToast', 'Signed out successfully.'), 'info');
        this.updateUserSessionUI();
        this.handleRouting();
      });
    }
  }

  setupPortalSwitcher() {
    const officerBtn = document.getElementById('switchToOfficerBtn');
    const citizenBtn = document.getElementById('switchToCitizenBtn');

    if (officerBtn) {
      officerBtn.addEventListener('click', () => {
        if (this.currentPortal !== 'officer') {
          this.setPortalMode('officer', true);
        }
      });
    }

    if (citizenBtn) {
      citizenBtn.addEventListener('click', () => {
        if (this.currentPortal !== 'citizen') {
          this.setPortalMode('citizen', true);
        }
      });
    }

    this.renderPortalNavigation();
  }

  setPortalMode(mode, navigate = false) {
    this.currentPortal = mode;
    const officerBtn = document.getElementById('switchToOfficerBtn');
    const citizenBtn = document.getElementById('switchToCitizenBtn');

    if (officerBtn && citizenBtn) {
      if (mode === 'officer') {
        officerBtn.className = 'px-2 py-1 rounded transition-all flex items-center gap-1 bg-primary text-on-primary shadow-xs font-semibold';
        citizenBtn.className = 'px-2 py-1 rounded transition-all flex items-center gap-1 text-on-surface-variant hover:text-on-surface';
      } else {
        citizenBtn.className = 'px-2 py-1 rounded transition-all flex items-center gap-1 bg-primary text-on-primary shadow-xs font-semibold';
        officerBtn.className = 'px-2 py-1 rounded transition-all flex items-center gap-1 text-on-surface-variant hover:text-on-surface';
      }
    }

    // Update Breadcrumb
    const breadcrumbRoot = document.getElementById('breadcrumbRoot');
    if (breadcrumbRoot) {
      breadcrumbRoot.textContent = mode === 'officer' 
        ? t('header.commandCenter', 'Command Center') 
        : t('citizen.portalTitle', 'Citizen Portal');
    }

    this.updateUserSessionUI();
    this.renderPortalNavigation();

    if (navigate) {
      if (mode === 'officer') {
        window.location.hash = '#/dashboard';
      } else {
        window.location.hash = '#/citizen-dashboard';
      }
    }
  }

  renderPortalNavigation() {
    const desktopNav = document.getElementById('mainNavigation');
    const mobileNav = document.getElementById('mobileNavigationMenu');

    if (!desktopNav || !mobileNav) return;

    if (this.currentPortal === 'citizen') {
      desktopNav.innerHTML = `
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="citizen-dashboard" href="#/citizen-dashboard"><span>${t('nav.citizenDashboard', 'Dashboard')}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="citizen-lands" href="#/citizen-lands"><span>${t('nav.citizenLands', 'My Land')}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="citizen-risk" href="#/citizen-risk"><span>${t('nav.citizenRisk', 'Check Delay Risk')}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="citizen-complaint" href="#/citizen-complaint"><span>${t('nav.citizenComplaint', 'File Grievance')}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="citizen-cases" href="#/citizen-cases"><span>${t('nav.citizenCases', 'My Cases')}</span></a>
      `;

      mobileNav.innerHTML = `
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="citizen-dashboard" href="#/citizen-dashboard">
          <span class="material-symbols-outlined text-[18px]">dashboard</span>
          <span>${t('nav.citizenDashboard', 'Dashboard')}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="citizen-lands" href="#/citizen-lands">
          <span class="material-symbols-outlined text-[18px]">terrain</span>
          <span>${t('nav.citizenLands', 'My Land')}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="citizen-risk" href="#/citizen-risk">
          <span class="material-symbols-outlined text-[18px]">psychology</span>
          <span>${t('nav.citizenRisk', 'Check Delay Risk')}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="citizen-complaint" href="#/citizen-complaint">
          <span class="material-symbols-outlined text-[18px]">report_problem</span>
          <span>${t('nav.citizenComplaint', 'File Grievance')}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="citizen-cases" href="#/citizen-cases">
          <span class="material-symbols-outlined text-[18px]">assignment</span>
          <span>${t('nav.citizenCases', 'My Cases')}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="notifications" href="#/notifications">
          <span class="material-symbols-outlined text-[18px]">notifications</span>
          <span>${t('nav.notifications', 'Notifications')}</span>
        </a>
      `;
    } else {
      desktopNav.innerHTML = `
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="dashboard" href="#/dashboard"><span>${t('nav.dashboard', 'Command Center')}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="cases" href="#/cases"><span>${t('nav.cases', 'Case Queue')}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="assessment" href="#/assessment"><span>${t('nav.assessment', 'Risk Assessment')}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="projects" href="#/projects"><span>${t('nav.projects', 'Projects Directory')}</span></a>
        <a class="nav-tab px-space-md py-1.5 font-label-md text-label-md transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-primary" data-target="audit" href="#/audit"><span>${t('nav.audit', 'Audit Detail')}</span></a>
      `;

      mobileNav.innerHTML = `
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="dashboard" href="#/dashboard">
          <span class="material-symbols-outlined text-[18px]">dashboard</span>
          <span>${t('nav.dashboard', 'Command Center')}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="cases" href="#/cases">
          <span class="material-symbols-outlined text-[18px]">gavel</span>
          <span>${t('nav.cases', 'Case Queue')}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="assessment" href="#/assessment">
          <span class="material-symbols-outlined text-[18px]">analytics</span>
          <span>${t('nav.assessment', 'Risk Assessment')}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="projects" href="#/projects">
          <span class="material-symbols-outlined text-[18px]">folder_open</span>
          <span>${t('nav.projects', 'Projects Directory')}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="audit" href="#/audit">
          <span class="material-symbols-outlined text-[18px]">description</span>
          <span>${t('nav.audit', 'Audit Detail')}</span>
        </a>
        <a class="nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors focus:ring-2 focus:ring-primary" data-target="notifications" href="#/notifications">
          <span class="material-symbols-outlined text-[18px]">notifications</span>
          <span>${t('nav.notifications', 'Notifications')}</span>
        </a>
      `;
    }

    this.setupNavigation();
  }

  setupNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        if (target) this.updateNavState(target);
      });
    });
  }

  updateNavState(target) {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(t => {
      const isTarget = t.getAttribute('data-target') === target;
      const isMobile = t.classList.contains('mobile-nav-tab');

      if (isMobile) {
        if (isTarget) {
          t.className = 'nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors bg-primary-container text-on-primary font-semibold shadow-sm focus:ring-2 focus:ring-primary';
          t.setAttribute('aria-current', 'page');
        } else {
          t.className = 'nav-tab mobile-nav-tab px-3 py-2 font-label-md text-label-md rounded-lg flex items-center gap-2.5 transition-colors text-on-surface-variant hover:text-on-surface hover:bg-surface-container focus:ring-2 focus:ring-primary';
          t.removeAttribute('aria-current');
        }
      } else {
        if (isTarget) {
          t.className = 'nav-tab px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-label-md rounded-lg shadow-sm font-semibold focus-visible:ring-2 focus-visible:ring-primary';
          t.setAttribute('aria-current', 'page');
        } else {
          t.className = 'nav-tab px-space-md py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded focus-visible:ring-2 focus-visible:ring-primary';
          t.removeAttribute('aria-current');
        }
      }
    });

    const breadcrumbLabel = document.getElementById('currentViewName');
    if (breadcrumbLabel) {
      breadcrumbLabel.textContent = t(`views.${target}`, target.replace(/-/g, ' ').toUpperCase());
    }
  }

  handleRouting() {
    const hash = window.location.hash || '#/dashboard';
    const [path, queryString] = hash.replace('#/', '').split('?');
    const params = new URLSearchParams(queryString || '');

    this.currentView = path || 'dashboard';

    // Auto-detect portal based on route prefix
    if (this.currentView.startsWith('citizen-') && this.currentPortal !== 'citizen') {
      this.setPortalMode('citizen', false);
    } else if (!this.currentView.startsWith('citizen-') && this.currentView !== 'notifications' && this.currentPortal !== 'officer') {
      this.setPortalMode('officer', false);
    }

    this.updateNavState(this.currentView);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (this.currentView) {
      case 'citizen-dashboard':
        renderCitizenDashboardView(this.container);
        break;

      case 'citizen-lands':
        renderCitizenLandView(this.container);
        break;

      case 'citizen-risk':
        renderCitizenRiskView(this.container);
        break;

      case 'citizen-complaint':
        renderCitizenComplaintView(this.container);
        break;

      case 'citizen-cases':
        renderCitizenCaseTrackingView(this.container);
        break;

      case 'cases':
        renderOfficerCasesView(this.container);
        break;

      case 'officer-case-workspace':
        renderOfficerWorkspaceView(this.container);
        break;

      case 'notifications':
        renderNotificationsView(this.container, () => this.updateNotificationBadge());
        break;

      case 'assessment':
        const preset = params.get('preset') || 'medium';
        renderAssessmentView(this.container, preset);
        break;

      case 'projects':
        renderProjectsView(
          this.container,
          (presetKey) => {
            window.location.hash = `#/assessment?preset=${presetKey}`;
          },
          (projectId) => {
            window.location.hash = `#/audit?id=${projectId}`;
          }
        );
        break;

      case 'audit':
        const projectId = params.get('id') || 'BF-NH-2024-09';
        renderDetailView(
          this.container,
          projectId,
          (presetKey) => {
            window.location.hash = `#/assessment?preset=${presetKey}`;
          }
        );
        break;

      case 'dashboard':
      default:
        this.currentView = 'dashboard';
        renderDashboardView(
          this.container,
          (presetKey) => {
            window.location.hash = `#/assessment?preset=${presetKey}`;
          },
          (projectId) => {
            window.location.hash = `#/audit?id=${projectId}`;
          }
        );
        break;
    }
  }

  setupClock() {
    const updateTime = () => {
      const clockEl = document.getElementById('liveISTClock');
      if (clockEl) {
        const now = new Date();
        const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        clockEl.textContent = now.toLocaleTimeString('en-GB', options);
      }
    };
    updateTime();
    this.clockInterval = setInterval(updateTime, 1000);
  }

  async checkBackendHealth(showToast = false) {
    const dot = document.getElementById('backendStatusDot');
    const text = document.getElementById('backendStatusText');

    if (dot) {
      dot.innerHTML = `<span class="animate-pulse relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>`;
    }
    if (text && !this.isBackendOnline) {
      text.textContent = t('header.statusConnecting', 'Backend: Connecting...');
      text.className = 'font-label-sm text-label-sm text-on-surface-variant font-tabular-data';
    }

    const res = await predictionService.checkHealth();

    if (res.online && res.modelLoaded) {
      let engineLabel = t('header.statusConnected', 'FastAPI Connected • XGBoost Engine Active');
      try {
        if (!this.cachedMetadata) {
          this.cachedMetadata = await predictionService.getMetadata();
        }
        if (this.cachedMetadata?.model?.version) {
          engineLabel = `${engineLabel} (v${this.cachedMetadata.model.version})`;
        }
      } catch (e) {
        // Fallback to standard active label
      }

      if (dot) {
        dot.innerHTML = `
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        `;
      }
      if (text) {
        text.textContent = engineLabel;
        text.className = 'font-label-sm text-label-sm text-on-surface font-tabular-data font-semibold';
      }
      if (!this.isBackendOnline && showToast) {
        this.showToast(t('header.statusConnected', 'FastAPI Connected • XGBoost Engine Active'), 'success');
      }
      this.isBackendOnline = true;
    } else {
      if (dot) {
        dot.innerHTML = `
          <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        `;
      }
      if (text) {
        text.textContent = t('header.statusUnavailable', 'Backend Unavailable • Click to Retry');
        text.className = 'font-label-sm text-label-sm text-red-600 dark:text-red-400 font-tabular-data font-semibold';
      }
      if (this.isBackendOnline || showToast) {
        this.showToast(t('header.statusUnavailable', 'Backend Unavailable • Click to Retry'), 'warning');
      }
      this.isBackendOnline = false;
    }
  }

  startHealthPolling() {
    this.checkBackendHealth();
    this.healthInterval = setInterval(() => this.checkBackendHealth(), 6000);
  }

  showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    const bg = type === 'success' ? 'bg-primary-container text-on-primary border-secondary' : 'bg-amber-100 text-amber-950 border-amber-400';
    toast.className = `${bg} px-4 py-3 rounded-lg shadow-lg border text-sm max-w-md pointer-events-auto flex items-start gap-2 transition-all duration-300 transform translate-y-2 opacity-0`;
    
    toast.innerHTML = `
      <span class="material-symbols-outlined text-[18px] text-secondary-container mt-0.5">info</span>
      <span class="flex-1">${message}</span>
    `;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    });

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
}

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new BhoomiSakhaApp();
  app.init();
});

/**
 * Bhoomi Sakha - Main Application Entrypoint
 * Coordinates client-side routing, health polling, live time, and view lifecycles.
 */

import { renderDashboardView } from './views/dashboard.js';
import { renderAssessmentView } from './views/assessment.js';
import { renderProjectsView } from './views/projects.js';
import { renderDetailView } from './views/detail.js';
import { renderNotificationsView } from './views/notifications.js';
import { predictionService } from './api/prediction.js';
import { notificationStore } from './utils/notifications.js';

class BhoomiSakhaApp {
  constructor() {
    this.container = document.getElementById('appViewContainer');
    this.currentView = 'dashboard';
    this.isBackendOnline = false;
    this.healthInterval = null;
    this.clockInterval = null;
  }

  init() {
    this.setupNavigation();
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
    }

    const backendPill = document.getElementById('backendStatusPill');
    if (backendPill) {
      backendPill.addEventListener('click', () => this.checkBackendHealth(true));
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

  setupNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        navTabs.forEach(t => {
          t.className = 'nav-tab px-space-md py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded';
          t.removeAttribute('aria-current');
        });
        tab.className = 'nav-tab px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-label-md rounded-lg shadow-sm font-semibold';
        tab.setAttribute('aria-current', 'page');
      });
    });
  }

  updateNavState(target) {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(t => {
      const isTarget = t.getAttribute('data-target') === target;
      if (isTarget) {
        t.className = 'nav-tab px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-label-md rounded-lg shadow-sm font-semibold';
        t.setAttribute('aria-current', 'page');
      } else {
        t.className = 'nav-tab px-space-md py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded';
        t.removeAttribute('aria-current');
      }
    });

    const viewNameMap = {
      dashboard: 'National Cadastral Matrix (Overview)',
      assessment: 'Predictive Delay-Risk Assessment Cockpit',
      projects: 'National Land Acquisition Projects Directory',
      audit: 'Cadastral & Risk Detailed Dossier',
      notifications: 'System Notifications & Operational Alerts',
    };
    const breadcrumbLabel = document.getElementById('currentViewName');
    if (breadcrumbLabel) {
      breadcrumbLabel.textContent = viewNameMap[target] || 'Executive Command Center';
    }
  }

  handleRouting() {
    const hash = window.location.hash || '#/dashboard';
    const [path, queryString] = hash.replace('#/', '').split('?');
    const params = new URLSearchParams(queryString || '');

    this.currentView = path || 'dashboard';
    this.updateNavState(this.currentView);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (this.currentView) {
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
      text.textContent = 'Backend: Connecting...';
      text.className = 'font-label-sm text-label-sm text-on-surface-variant font-tabular-data';
    }

    const res = await predictionService.checkHealth();

    if (res.online && res.modelLoaded) {
      let engineLabel = 'FastAPI Connected • XGBoost Engine Active';
      try {
        if (!this.cachedMetadata) {
          this.cachedMetadata = await predictionService.getMetadata();
        }
        if (this.cachedMetadata?.model?.version) {
          engineLabel = `FastAPI Connected • XGBoost Engine v${this.cachedMetadata.model.version} Active`;
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
        this.showToast('Backend connected: XGBoost binary classifier loaded.', 'success');
      }
      this.isBackendOnline = true;
    } else {
      if (dot) {
        dot.innerHTML = `
          <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        `;
      }
      if (text) {
        text.textContent = 'Backend Unavailable • Click to Retry';
        text.className = 'font-label-sm text-label-sm text-red-600 dark:text-red-400 font-tabular-data font-semibold';
      }
      if (this.isBackendOnline || showToast) {
        this.showToast('Prediction service is temporarily unavailable. Please try again.', 'warning');
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

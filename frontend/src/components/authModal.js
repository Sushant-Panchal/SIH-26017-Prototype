/**
 * Bhoomi Sakha - Unified Authentication Modal & Access Gateway
 * Provides accessible, trilingual login and registration interfaces for Citizens and Officers.
 */

import { authService } from '../api/auth.js';
import { t } from '../i18n/index.js';

let activeAuthModalEl = null;

/**
 * Opens the interactive Login / Register modal
 * @param {Object} options
 * @param {'citizen' | 'officer'} options.role - Default role tab ('citizen' | 'officer')
 * @param {'login' | 'register'} options.mode - Default view mode ('login' | 'register')
 * @param {Function} options.onSuccess - Callback invoked on successful auth
 */
export function openAuthModal({ role = 'citizen', mode = 'login', onSuccess = null } = {}) {
  closeAuthModal();

  let currentRole = role;
  let currentMode = mode;
  let errorMessage = '';
  let isLoading = false;

  const modalEl = document.createElement('div');
  modalEl.id = 'bhoomiAuthModal';
  modalEl.className = 'fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in';
  modalEl.setAttribute('role', 'dialog');
  modalEl.setAttribute('aria-modal', 'true');
  modalEl.setAttribute('aria-labelledby', 'authModalTitle');

  const renderModalContent = () => {
    modalEl.innerHTML = `
      <div class="bg-surface border border-outline-variant/60 rounded-2xl p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-5 animate-scale-in">
        
        <!-- Header & Close -->
        <div class="flex items-center justify-between border-b border-outline-variant/30 pb-3.5">
          <div class="flex items-center gap-2">
            <span class="p-1.5 rounded-lg ${currentRole === 'officer' ? 'bg-primary-container text-on-primary' : 'bg-primary text-on-primary'} flex items-center justify-center shadow-xs">
              <span class="material-symbols-outlined text-[20px]">${currentRole === 'officer' ? 'shield_person' : 'person'}</span>
            </span>
            <div>
              <h2 id="authModalTitle" class="text-base font-bold text-on-surface">
                ${currentMode === 'login' 
                  ? (currentRole === 'officer' ? t('auth.officerSignIn', 'Officer Command Sign In') : t('auth.citizenSignIn', 'Citizen Sign In'))
                  : (currentRole === 'officer' ? t('auth.officerRegister', 'Officer Account Registration') : t('auth.citizenRegister', 'Create Citizen Account'))}
              </h2>
              <span class="text-xs text-on-surface-variant font-label-sm">
                ${currentRole === 'officer' ? 'National Revenue & Land Acquisition Network' : 'Landholder Rights & Grievance Portal'}
              </span>
            </div>
          </div>
          <button id="closeAuthModalBtn" type="button" class="text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-colors" aria-label="Close authentication modal">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Role Selector Segmented Bar -->
        <div class="flex items-center p-1 bg-surface-container rounded-lg border border-outline-variant/40 text-xs font-semibold">
          <button type="button" id="tabRoleCitizen" class="flex-1 py-1.5 rounded-md transition-all flex items-center justify-center gap-1.5 ${currentRole === 'citizen' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">
            <span class="material-symbols-outlined text-[16px]">person</span>
            <span>Citizen / Landowner</span>
          </button>
          <button type="button" id="tabRoleOfficer" class="flex-1 py-1.5 rounded-md transition-all flex items-center justify-center gap-1.5 ${currentRole === 'officer' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">
            <span class="material-symbols-outlined text-[16px]">badge</span>
            <span>Revenue Officer</span>
          </button>
        </div>

        <!-- Mode Toggle (Sign In vs Register) -->
        <div class="flex items-center justify-center gap-2 text-xs">
          <span class="text-on-surface-variant">
            ${currentMode === 'login' ? "Don't have an account yet?" : "Already have an account?"}
          </span>
          <button type="button" id="toggleAuthModeBtn" class="font-bold text-primary hover:underline focus:outline-none">
            ${currentMode === 'login' ? 'Create an Account' : 'Sign In instead'}
          </button>
        </div>

        <!-- Error Message Banner -->
        ${errorMessage ? `
          <div class="p-3 rounded-lg bg-error/10 border border-error/30 text-error text-xs flex items-start gap-2 animate-fade-in">
            <span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">error</span>
            <span class="font-medium">${errorMessage}</span>
          </div>
        ` : ''}

        <!-- Interactive Form -->
        <form id="authModalForm" class="space-y-3.5 text-xs">
          ${currentMode === 'register' ? `
            <div>
              <label class="block font-semibold text-on-surface mb-1">Full Name *</label>
              <input type="text" id="authName" required placeholder="e.g. Rameshwar Patil" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          ` : ''}

          <div>
            <label class="block font-semibold text-on-surface mb-1">Email Address *</label>
            <input type="email" id="authEmail" required placeholder="${currentRole === 'officer' ? 'officer.name@gov.in' : 'citizen@example.com'}" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          ${currentMode === 'register' ? `
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block font-semibold text-on-surface mb-1">Mobile Number</label>
                <input type="tel" id="authPhone" placeholder="+91 9822001122" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-tabular-data" />
              </div>
              <div>
                <label class="block font-semibold text-on-surface mb-1">${currentRole === 'officer' ? 'District / Division' : 'District'}</label>
                <input type="text" id="authDistrict" placeholder="e.g. Pune" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
          ` : ''}

          ${currentMode === 'register' && currentRole === 'officer' ? `
            <div>
              <label class="block font-semibold text-on-surface mb-1 flex items-center justify-between">
                <span>Officer Registration Key *</span>
                <span class="text-[10px] text-on-surface-variant font-normal">Official Authorization</span>
              </label>
              <input type="password" id="authOfficerKey" required placeholder="Enter administrative authorization key" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-mono text-[11px]" />
            </div>
          ` : ''}

          <div>
            <label class="block font-semibold text-on-surface mb-1">Password *</label>
            <input type="password" id="authPassword" required minlength="6" placeholder="••••••••" class="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <div class="pt-2">
            <button type="submit" id="authSubmitBtn" ${isLoading ? 'disabled' : ''} class="w-full py-2.5 bg-primary text-on-primary font-semibold rounded-lg hover:opacity-95 transition-all flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50">
              ${isLoading ? `
                <span class="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
                <span>Authenticating...</span>
              ` : `
                <span class="material-symbols-outlined text-[16px]">lock_open</span>
                <span>${currentMode === 'login' ? 'Sign In to Portal' : 'Complete Registration'}</span>
              `}
            </button>
          </div>
        </form>

        <p class="text-[10px] text-center text-on-surface-variant leading-relaxed">
          Protected by Bhoomi Sakha Cryptographic Token Authentication. Data persists securely in the national MongoDB case cluster.
        </p>
      </div>
    `;

    // Bind events
    modalEl.querySelector('#closeAuthModalBtn').addEventListener('click', closeAuthModal);

    modalEl.querySelector('#tabRoleCitizen').addEventListener('click', () => {
      if (currentRole !== 'citizen') {
        currentRole = 'citizen';
        errorMessage = '';
        renderModalContent();
      }
    });

    modalEl.querySelector('#tabRoleOfficer').addEventListener('click', () => {
      if (currentRole !== 'officer') {
        currentRole = 'officer';
        errorMessage = '';
        renderModalContent();
      }
    });

    modalEl.querySelector('#toggleAuthModeBtn').addEventListener('click', () => {
      currentMode = currentMode === 'login' ? 'register' : 'login';
      errorMessage = '';
      renderModalContent();
    });

    const form = modalEl.querySelector('#authModalForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      errorMessage = '';
      isLoading = true;
      renderModalContent();

      const email = modalEl.querySelector('#authEmail').value.trim();
      const password = modalEl.querySelector('#authPassword').value;

      try {
        let authResult;
        if (currentMode === 'login') {
          authResult = await authService.login(email, password);
        } else {
          const name = modalEl.querySelector('#authName').value.trim();
          const phone = modalEl.querySelector('#authPhone')?.value.trim() || '';
          const district = modalEl.querySelector('#authDistrict')?.value.trim() || '';
          const payload = {
            name,
            email,
            password,
            phone,
            district,
            role: currentRole,
          };
          if (currentRole === 'officer') {
            payload.officer_key = modalEl.querySelector('#authOfficerKey')?.value.trim() || '';
            payload.designation = 'Land Acquisition Officer';
            payload.department = 'Revenue';
          }
          authResult = await authService.register(payload);
        }

        closeAuthModal();

        if (onSuccess) {
          onSuccess(authResult.user);
        }
      } catch (err) {
        isLoading = false;
        errorMessage = err.message || 'Authentication failed. Please verify credentials.';
        renderModalContent();
      }
    });
  };

  renderModalContent();
  document.body.appendChild(modalEl);
  activeAuthModalEl = modalEl;
}

export function closeAuthModal() {
  if (activeAuthModalEl) {
    activeAuthModalEl.remove();
    activeAuthModalEl = null;
  }
}

/**
 * Renders an accessible Authentication Gateway card when a user accesses a protected view while unauthenticated.
 * @param {HTMLElement} container 
 * @param {Object} options
 */
export function renderAuthGateway(container, {
  role = 'citizen',
  title = 'Citizen Portal Sign In Required',
  message = 'Please sign in or register to access your registered land records, calculate personalized delay risks, and file acquisition complaints.',
  onLoginSuccess = null,
} = {}) {
  container.innerHTML = `
    <div class="max-w-xl mx-auto py-16 px-4 animate-fade-in">
      <div class="bg-surface-container-low border border-outline-variant/50 rounded-2xl p-7 md:p-9 text-center shadow-md space-y-5">
        <div class="inline-flex p-3.5 rounded-full ${role === 'officer' ? 'bg-primary-container text-on-primary' : 'bg-primary text-on-primary'} shadow-sm">
          <span class="material-symbols-outlined text-[36px]">${role === 'officer' ? 'admin_panel_settings' : 'lock'}</span>
        </div>

        <div class="space-y-1.5">
          <h2 class="text-xl md:text-2xl font-bold font-headline-md text-on-surface">${title}</h2>
          <p class="text-xs md:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
            ${message}
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
  `;

  container.querySelector('#gatewaySignInBtn').addEventListener('click', () => {
    openAuthModal({ role, mode: 'login', onSuccess: onLoginSuccess });
  });

  container.querySelector('#gatewayRegisterBtn').addEventListener('click', () => {
    openAuthModal({ role, mode: 'register', onSuccess: onLoginSuccess });
  });
}

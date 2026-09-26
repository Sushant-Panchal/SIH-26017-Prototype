/**
 * Bhoomi Sakha - Dedicated Authentication View
 * Production-quality, accessible login and registration interface.
 * Implements strict role-based entry for Citizens and Revenue Officers with i18n and theme support.
 */

import { authService } from '../api/auth.js';
import { t } from '../i18n/index.js';

export function renderLoginView(container, { mode = 'login', initialRole = 'citizen', onAuthSuccess = null } = {}) {
  let currentRole = initialRole; // 'citizen' | 'officer'
  let currentMode = mode; // 'login' | 'register'
  let isPasswordVisible = false;
  let isLoading = false;
  let errorMessage = '';

  function render() {
    container.innerHTML = `
      <div class="min-h-[calc(100vh-14rem)] flex items-center justify-center px-4 py-12 animate-fade-in relative overflow-hidden">
        
        <!-- Ambient Background Glows -->
        <div class="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>

        <div class="w-full max-w-lg bg-surface border border-outline-variant/60 rounded-2xl shadow-2xl p-6 sm:p-9 space-y-6 relative z-10 backdrop-blur-sm">
          
          <!-- Emblem & Institutional Header -->
          <div class="flex flex-col items-center text-center space-y-2">
            <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-primary-container p-0.5 shadow-md flex items-center justify-center">
              <svg class="h-10 w-10 object-contain" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="120" height="120" rx="24" fill="#0B192C"/>
                <path d="M28 42L60 24L92 42V78L60 96L28 78V42Z" stroke="#38BDF8" stroke-width="3" stroke-dasharray="4 4" opacity="0.4"/>
                <path d="M36 50L60 36L84 50V74L60 88L36 74V50Z" fill="#1E293B" stroke="#0EA5E9" stroke-width="2.5"/>
                <path d="M44 48L76 48L60 62L44 48Z" fill="#F97316" fill-opacity="0.9"/>
                <path d="M44 56L60 70L76 56L60 82L44 56Z" fill="#38BDF8" fill-opacity="0.85"/>
                <circle cx="60" cy="62" r="3.5" fill="#FFFFFF"/>
                <path d="M72 32L88 32L88 48" stroke="#F97316" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M60 60L88 32" stroke="#F97316" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>

            <div>
              <div class="flex items-center justify-center gap-2">
                <h1 class="font-headline-md text-2xl font-bold tracking-tight text-on-surface">
                  ${t('header.platformName', 'Bhoomi Sakha')}
                </h1>
                <span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] uppercase font-semibold">
                  ${t('header.sihBadge', 'SIH 2026')}
                </span>
              </div>
              <p class="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-1">
                ${currentRole === 'officer' 
                  ? t('auth.officerWelcomeSubtitle', 'National Land Acquisition Command & Case Management Portal')
                  : t('auth.citizenWelcomeSubtitle', 'Landholder Rights, Grievance Redressal & Predictive Delay Analytics')}
              </p>
            </div>
          </div>

          <!-- Role Selector Segmented Tabs -->
          <div class="flex items-center p-1 bg-surface-container rounded-xl border border-outline-variant/40 text-xs font-semibold" role="tablist" aria-label="Portal Selection">
            <button 
              type="button" 
              id="tabRoleCitizen" 
              role="tab"
              aria-selected="${currentRole === 'citizen'}"
              class="flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${currentRole === 'citizen' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'text-on-surface-variant hover:text-on-surface'}">
              <span class="material-symbols-outlined text-[18px]">person</span>
              <span>${t('auth.citizenTab', 'Citizen / Landowner')}</span>
            </button>
            <button 
              type="button" 
              id="tabRoleOfficer" 
              role="tab"
              aria-selected="${currentRole === 'officer'}"
              class="flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${currentRole === 'officer' ? 'bg-primary text-on-primary shadow-sm font-bold' : 'text-on-surface-variant hover:text-on-surface'}">
              <span class="material-symbols-outlined text-[18px]">badge</span>
              <span>${t('auth.officerTab', 'Revenue Officer')}</span>
            </button>
          </div>

          <!-- Error Alert Banner -->
          ${errorMessage ? `
            <div class="p-3.5 rounded-xl bg-error/10 border border-error/30 text-error text-xs flex items-start gap-2.5 animate-fade-in" role="alert">
              <span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">error</span>
              <div class="flex-1 font-medium leading-relaxed">${errorMessage}</div>
            </div>
          ` : ''}

          <!-- Authentication Form -->
          <form id="authMainForm" class="space-y-4 text-xs" novalidate>
            
            ${currentMode === 'register' ? `
              <!-- Full Name Field (Register Only) -->
              <div>
                <label for="inputName" class="block font-semibold text-on-surface mb-1">
                  ${t('auth.fullNameLabel', 'Full Name')} <span class="text-error">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-2.5 material-symbols-outlined text-[18px] text-on-surface-variant">person</span>
                  <input 
                    type="text" 
                    id="inputName" 
                    required 
                    placeholder="${t('auth.fullNamePlaceholder', 'e.g. Rameshwar Patil')}" 
                    class="w-full pl-9 pr-3 py-2.5 bg-surface-container-low border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs" />
                </div>
              </div>
            ` : ''}

            <!-- Email Address Field -->
            <div>
              <label for="inputEmail" class="block font-semibold text-on-surface mb-1">
                ${t('auth.emailLabel', 'Email Address')} <span class="text-error">*</span>
              </label>
              <div class="relative">
                <span class="absolute left-3 top-2.5 material-symbols-outlined text-[18px] text-on-surface-variant">mail</span>
                <input 
                  type="email" 
                  id="inputEmail" 
                  required 
                  placeholder="${currentRole === 'officer' ? t('auth.officerEmailPlaceholder', 'officer.name@gov.in') : t('auth.emailPlaceholder', 'citizen@example.com')}" 
                  class="w-full pl-9 pr-3 py-2.5 bg-surface-container-low border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs font-tabular-data" />
              </div>
            </div>

            <!-- Password Field with Show/Hide Toggle -->
            <div>
              <div class="flex items-center justify-between mb-1">
                <label for="inputPassword" class="block font-semibold text-on-surface">
                  ${t('auth.passwordLabel', 'Password')} <span class="text-error">*</span>
                </label>
                ${currentMode === 'register' ? `
                  <span class="text-[10px] text-on-surface-variant font-label-sm">Min 6 characters</span>
                ` : ''}
              </div>
              <div class="relative">
                <span class="absolute left-3 top-2.5 material-symbols-outlined text-[18px] text-on-surface-variant">lock</span>
                <input 
                  type="${isPasswordVisible ? 'text' : 'password'}" 
                  id="inputPassword" 
                  required 
                  placeholder="${t('auth.passwordPlaceholder', 'Enter your password')}" 
                  class="w-full pl-9 pr-10 py-2.5 bg-surface-container-low border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs font-tabular-data" />
                <button 
                  type="button" 
                  id="togglePasswordVisibilityBtn" 
                  class="absolute right-2.5 top-2 p-1 text-on-surface-variant hover:text-on-surface rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  title="${isPasswordVisible ? t('auth.hidePassword', 'Hide password') : t('auth.showPassword', 'Show password')}">
                  <span class="material-symbols-outlined text-[18px]">
                    ${isPasswordVisible ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            ${currentMode === 'register' && currentRole === 'officer' ? `
              <!-- Officer Secret Key (Officer Registration Only) -->
              <div>
                <label for="inputOfficerKey" class="block font-semibold text-on-surface mb-1">
                  ${t('auth.officerKeyLabel', 'Officer Registration Authorization Key')} <span class="text-error">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-2.5 material-symbols-outlined text-[18px] text-primary">key</span>
                  <input 
                    type="password" 
                    id="inputOfficerKey" 
                    required 
                    placeholder="Enter confidential revenue authority key" 
                    class="w-full pl-9 pr-3 py-2.5 bg-surface-container-low border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs font-tabular-data" />
                </div>
                <span class="text-[10px] text-on-surface-variant mt-1 block">
                  Mandatory security check: Prevents unauthorized privilege escalation.
                </span>
              </div>
            ` : ''}

            ${currentMode === 'register' ? `
              <!-- District & Location Details (Register Only) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label for="inputDistrict" class="block font-semibold text-on-surface mb-1">
                    ${t('auth.districtLabel', 'District')}
                  </label>
                  <input 
                    type="text" 
                    id="inputDistrict" 
                    placeholder="${t('auth.districtPlaceholder', 'e.g. Pune')}" 
                    class="w-full px-3 py-2.5 bg-surface-container-low border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs" />
                </div>
                <div>
                  <label for="inputPhone" class="block font-semibold text-on-surface mb-1">
                    ${t('auth.phoneLabel', 'Phone Number')}
                  </label>
                  <input 
                    type="tel" 
                    id="inputPhone" 
                    placeholder="${t('auth.phonePlaceholder', 'e.g. +91 9822001122')}" 
                    class="w-full px-3 py-2.5 bg-surface-container-low border border-outline-variant/60 rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs font-tabular-data" />
                </div>
              </div>
            ` : ''}

            <!-- Primary Submit Button -->
            <button 
              type="submit" 
              id="authSubmitBtn" 
              ${isLoading ? 'disabled' : ''} 
              class="w-full py-3 bg-primary text-on-primary font-semibold text-xs sm:text-sm rounded-xl hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-2">
              ${isLoading ? `
                <span class="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                <span>${currentMode === 'login' ? t('auth.signingIn', 'Authenticating...') : t('auth.registering', 'Creating Account...')}</span>
              ` : `
                <span class="material-symbols-outlined text-[18px]">${currentMode === 'login' ? 'login' : 'how_to_reg'}</span>
                <span>${currentMode === 'login' 
                  ? (currentRole === 'officer' ? t('auth.officerSignInBtn', 'Enter Officer Command Center') : t('auth.citizenSignInBtn', 'Enter Citizen Portal'))
                  : (currentRole === 'officer' ? t('auth.officerRegisterBtn', 'Register Officer Account') : t('auth.citizenRegisterBtn', 'Create Citizen Account'))}</span>
              `}
            </button>
          </form>

          <!-- Toggle Mode (Sign In vs Register) -->
          <div class="pt-3 border-t border-outline-variant/30 text-center text-xs">
            <span class="text-on-surface-variant">
              ${currentMode === 'login' ? t('auth.needAccount', "Don't have an account yet?") : t('auth.haveAccount', "Already have an account?")}
            </span>
            <button 
              type="button" 
              id="toggleModeBtn" 
              class="font-bold text-primary hover:underline focus:outline-none ml-1 cursor-pointer">
              ${currentMode === 'login' ? t('auth.switchToRegister', 'Create an Account') : t('auth.switchToLogin', 'Sign In instead')}
            </button>
          </div>

        </div>
      </div>
    `;

    attachListeners();
  }

  function attachListeners() {
    // Role tabs
    const tabCitizen = container.querySelector('#tabRoleCitizen');
    const tabOfficer = container.querySelector('#tabRoleOfficer');
    if (tabCitizen && tabOfficer) {
      tabCitizen.addEventListener('click', () => {
        if (currentRole !== 'citizen') {
          currentRole = 'citizen';
          errorMessage = '';
          render();
        }
      });
      tabOfficer.addEventListener('click', () => {
        if (currentRole !== 'officer') {
          currentRole = 'officer';
          errorMessage = '';
          render();
        }
      });
    }

    // Toggle Login vs Register
    const toggleModeBtn = container.querySelector('#toggleModeBtn');
    if (toggleModeBtn) {
      toggleModeBtn.addEventListener('click', () => {
        currentMode = currentMode === 'login' ? 'register' : 'login';
        errorMessage = '';
        render();
      });
    }

    // Show/Hide password
    const togglePwdBtn = container.querySelector('#togglePasswordVisibilityBtn');
    if (togglePwdBtn) {
      togglePwdBtn.addEventListener('click', () => {
        isPasswordVisible = !isPasswordVisible;
        const pwdInput = container.querySelector('#inputPassword');
        if (pwdInput) {
          pwdInput.type = isPasswordVisible ? 'text' : 'password';
        }
        const icon = togglePwdBtn.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.textContent = isPasswordVisible ? 'visibility_off' : 'visibility';
        }
      });
    }

    // Submit handler
    const form = container.querySelector('#authMainForm');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorMessage = '';

        const emailInput = container.querySelector('#inputEmail');
        const passwordInput = container.querySelector('#inputPassword');

        const email = emailInput ? emailInput.value.trim() : '';
        const password = passwordInput ? passwordInput.value : '';

        if (!email || !password) {
          errorMessage = 'Please provide both email and password.';
          render();
          return;
        }

        if (currentMode === 'register' && password.length < 6) {
          errorMessage = 'Password must be at least 6 characters long.';
          render();
          return;
        }

        isLoading = true;
        render();

        try {
          let authResult;
          if (currentMode === 'login') {
            authResult = await authService.login(email, password);
          } else {
            const nameInput = container.querySelector('#inputName');
            const districtInput = container.querySelector('#inputDistrict');
            const phoneInput = container.querySelector('#inputPhone');

            const payload = {
              name: nameInput ? nameInput.value.trim() : '',
              email,
              password,
              role: currentRole,
              district: districtInput ? districtInput.value.trim() : 'Pune',
              phone: phoneInput ? phoneInput.value.trim() : '',
            };

            if (currentRole === 'officer') {
              const officerKeyInput = container.querySelector('#inputOfficerKey');
              payload.officer_key = officerKeyInput ? officerKeyInput.value.trim() : '';
              payload.designation = 'Special Land Acquisition Officer';
              payload.department = 'Revenue & Cadastral Administration';
            }

            if (!payload.name) {
              throw new Error('Full Name is required for registration.');
            }

            authResult = await authService.register(payload);
          }

          isLoading = false;
          if (onAuthSuccess) {
            onAuthSuccess(authResult.user);
          }
        } catch (err) {
          isLoading = false;
          errorMessage = err.message || 'Authentication failed. Please verify credentials.';
          render();
        }
      });
    }
  }

  render();
}

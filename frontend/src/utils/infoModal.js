/**
 * Bhoomi Sakha - Contextual Information Modal & Tooltip System
 * Provides quick tooltips on hover/focus and accessible detailed drawers/modals on click.
 */

import { getInfoContent } from '../data/infoDefinitions.js';
import { createReadAloudButton } from './tts.js';
import { i18n, t } from '../i18n/index.js';

let activeTooltipEl = null;
let lastFocusedTrigger = null;
let activeModalKey = null;

/**
 * Generates an accessible info button HTML string.
 * @param {string} key - Info registry key
 * @param {string} extraClasses - Additional CSS classes
 * @returns {string} HTML string for ⓘ button
 */
export function renderInfoButton(key, extraClasses = '') {
  const content = getInfoContent(key);
  const ariaLabel = `${t('common.explain', 'Explain')}: ${content.title}`;
  return `
    <button type="button" 
      class="info-btn inline-flex items-center justify-center w-4 h-4 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary text-[11px] font-bold select-none cursor-pointer shrink-0 ${extraClasses}" 
      data-info-key="${key}" 
      aria-label="${ariaLabel}" 
      title="${content.short}">
      <span aria-hidden="true">ⓘ</span>
    </button>
  `;
}

/**
 * Creates an accessible Info Button DOM element.
 * @param {string} key 
 * @param {string} extraClasses 
 * @returns {HTMLButtonElement}
 */
export function createInfoButton(key, extraClasses = '') {
  const content = getInfoContent(key);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `info-btn inline-flex items-center justify-center w-4 h-4 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary text-[11px] font-bold select-none cursor-pointer shrink-0 ${extraClasses}`;
  btn.setAttribute('data-info-key', key);
  btn.setAttribute('aria-label', `${t('common.explain', 'Explain')}: ${content.title}`);
  btn.title = content.short;
  btn.innerHTML = '<span aria-hidden="true">ⓘ</span>';
  return btn;
}

/**
 * Displays a quick floating tooltip for an info key near the target element.
 */
export function showQuickTooltip(targetEl, key) {
  hideQuickTooltip();

  const content = getInfoContent(key);
  const tooltip = document.createElement('div');
  tooltip.id = 'bhoomiQuickTooltip';
  tooltip.className = 'fixed z-50 max-w-xs sm:max-w-sm p-2.5 rounded-lg bg-surface-container-highest text-on-surface border border-outline-variant/60 shadow-xl text-xs pointer-events-none transition-opacity duration-150 flex flex-col gap-1';
  tooltip.setAttribute('role', 'tooltip');

  tooltip.innerHTML = `
    <div class="flex items-center justify-between gap-2 border-b border-outline-variant/30 pb-1">
      <span class="font-bold text-primary font-label-sm truncate">${content.title}</span>
      <span class="text-[10px] uppercase font-semibold text-on-surface-variant">${content.categoryLabel}</span>
    </div>
    <p class="font-body-sm text-on-surface/90 leading-relaxed">${content.short}</p>
    <div class="pt-1 flex items-center gap-1 text-[10px] text-secondary font-medium">
      <span class="material-symbols-outlined text-[12px]">touch_app</span>
      <span>${t('common.clickForDetails', 'Click ⓘ for detailed explanation')}</span>
    </div>
  `;

  document.body.appendChild(tooltip);
  activeTooltipEl = tooltip;

  const rect = targetEl.getBoundingClientRect();
  const tipRect = tooltip.getBoundingClientRect();

  // Position above or below depending on viewport height
  let top = rect.top - tipRect.height - 8;
  if (top < 10) {
    top = rect.bottom + 8;
  }

  // Position horizontal aligned or bounded
  let left = rect.left + (rect.width / 2) - (tipRect.width / 2);
  if (left < 10) left = 10;
  if (left + tipRect.width > window.innerWidth - 10) {
    left = window.innerWidth - tipRect.width - 10;
  }

  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;
}

/**
 * Hides and removes the active floating tooltip.
 */
export function hideQuickTooltip() {
  if (activeTooltipEl) {
    activeTooltipEl.remove();
    activeTooltipEl = null;
  }
}

/**
 * Opens the Detailed Information Panel / Modal.
 * @param {string} key - Info registry key
 * @param {HTMLElement} triggerEl - Element that triggered the modal (for focus restoration)
 */
export function openInfoModal(key, triggerEl = null) {
  hideQuickTooltip();
  activeModalKey = key;
  lastFocusedTrigger = triggerEl || document.activeElement;

  const content = getInfoContent(key);

  const existing = document.getElementById('bhoomiInfoModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'bhoomiInfoModal';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center sm:justify-end p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-all duration-300';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'infoModalTitle');

  // Text for Read Aloud in active language
  const speakText = `${content.title}. ${content.whatItMeans} ${t('infoSections.whyItMatters', 'Why it matters')}: ${content.whyItMatters} ${t('infoSections.example', 'Example')}: ${content.example}`;

  modal.innerHTML = `
    <div class="relative w-full sm:max-w-xl h-full sm:h-auto sm:max-h-[92vh] bg-surface-container-lowest text-on-surface rounded-none sm:rounded-2xl shadow-2xl border border-outline-variant/40 overflow-hidden flex flex-col transform transition-transform duration-300 translate-x-0">
      
      <!-- Drawer Header -->
      <div class="p-space-md sm:p-space-lg bg-surface-container-low border-b border-outline-variant/30 flex items-start justify-between gap-space-md shrink-0">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-primary-container text-on-primary">
              ${content.categoryLabel}
            </span>
            <span class="text-xs text-on-surface-variant font-mono">${key}</span>
          </div>
          <h2 id="infoModalTitle" class="font-headline-sm text-lg sm:text-headline-sm font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-secondary text-[22px]">info</span>
            <span>${content.title}</span>
          </h2>
        </div>
        <div class="flex items-center gap-1">
          <div id="modalReadAloudSlot"></div>
          <button id="closeInfoModalBtn" type="button" class="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary" aria-label="${t('common.close', 'Close')}">
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
            ${t('infoSections.whatItMeans', 'What It Means')}
          </span>
          <p class="font-body-sm text-on-surface text-sm leading-relaxed">${content.whatItMeans}</p>
        </div>

        <!-- Section 2: Why it matters -->
        <div class="flex flex-col gap-1 bg-surface-container-low/50 p-3 rounded-lg border border-outline-variant/20">
          <span class="font-label-sm text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">psychology_alt</span>
            ${t('infoSections.whyItMatters', 'Why It Matters')}
          </span>
          <p class="font-body-sm text-on-surface text-sm leading-relaxed">${content.whyItMatters}</p>
        </div>

        <!-- Section 3: How to interpret it -->
        <div class="flex flex-col gap-1 bg-surface-container-low/50 p-3 rounded-lg border border-outline-variant/20">
          <span class="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">query_stats</span>
            ${t('infoSections.howToInterpret', 'How to Interpret It')}
          </span>
          <p class="font-body-sm text-on-surface text-sm leading-relaxed">${content.howToInterpret}</p>
        </div>

        <!-- Section 4: Concrete Example -->
        <div class="flex flex-col gap-1 bg-surface-container-low/50 p-3 rounded-lg border border-outline-variant/20">
          <span class="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">lightbulb</span>
            ${t('infoSections.example', 'Concrete Example')}
          </span>
          <p class="font-body-sm text-on-surface text-sm leading-relaxed font-mono text-xs bg-surface-container-lowest p-2 rounded border border-outline-variant/20">${content.example}</p>
        </div>

        <!-- Section 5: Model & System Usage -->
        <div class="flex flex-col gap-1 bg-primary-container/10 p-3 rounded-lg border border-primary/20">
          <span class="font-label-sm text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">memory</span>
            ${t('infoSections.modelUsage', 'Bhoomi Sakha / Model Usage')}
          </span>
          <p class="font-body-sm text-on-surface text-xs leading-relaxed">${content.modelUsage}</p>
        </div>

      </div>

      <!-- Drawer Footer -->
      <div class="p-space-sm sm:p-space-md bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between shrink-0">
        <span class="text-xs text-on-surface-variant">${t('common.infoFooterNote', 'Bhoomi Sakha Institutional Guidance')}</span>
        <button id="closeInfoModalFooterBtn" type="button" class="px-space-md py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-surface-tint transition-colors font-medium">
          ${t('common.close', 'Close')}
        </button>
      </div>

    </div>
  `;

  document.body.appendChild(modal);

  // Attach Read Aloud to modal
  const readSlot = modal.querySelector('#modalReadAloudSlot');
  if (readSlot) {
    const ttsBtn = createReadAloudButton(
      () => speakText,
      () => i18n.getLanguage()
    );
    readSlot.appendChild(ttsBtn);
  }

  const cleanup = () => {
    activeModalKey = null;
    document.removeEventListener('keydown', handleKeydown);
    modal.remove();
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  };

  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      cleanup();
    }
    // Simple focus trap
    if (e.key === 'Tab') {
      const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  document.addEventListener('keydown', handleKeydown);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) cleanup();
  });

  modal.querySelector('#closeInfoModalBtn')?.addEventListener('click', cleanup);
  modal.querySelector('#closeInfoModalFooterBtn')?.addEventListener('click', cleanup);

  // Focus the close button initially
  modal.querySelector('#closeInfoModalBtn')?.focus();
}

/**
 * Initializes global event delegation for info buttons and tooltips.
 * Should be called once on application startup.
 */
export function initInfoSystem() {
  // Event delegation for mouseover/focus (tooltips)
  document.addEventListener('mouseover', (e) => {
    const trigger = e.target.closest('[data-info-key]');
    if (trigger) {
      const key = trigger.getAttribute('data-info-key');
      showQuickTooltip(trigger, key);
    }
  });

  document.addEventListener('mouseout', (e) => {
    const trigger = e.target.closest('[data-info-key]');
    if (trigger) {
      hideQuickTooltip();
    }
  });

  document.addEventListener('focusin', (e) => {
    const trigger = e.target.closest('[data-info-key]');
    if (trigger) {
      const key = trigger.getAttribute('data-info-key');
      showQuickTooltip(trigger, key);
    }
  });

  document.addEventListener('focusout', (e) => {
    const trigger = e.target.closest('[data-info-key]');
    if (trigger) {
      hideQuickTooltip();
    }
  });

  // Event delegation for clicking .info-btn or element with data-info-click
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.info-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const key = btn.getAttribute('data-info-key');
      if (key) {
        openInfoModal(key, btn);
      }
    }
  });

  // Re-render open modal on language switch if practical
  i18n.subscribe(() => {
    if (activeModalKey && document.getElementById('bhoomiInfoModal')) {
      openInfoModal(activeModalKey, lastFocusedTrigger);
    }
  });
}

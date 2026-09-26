/**
 * Bhoomi Sakha - Accessible Custom Combobox / Dropdown Component
 * Fully accessible replacement for categorical inputs that enables:
 * 1. Live per-option quick explanations on hover & keyboard focus
 * 2. Dedicated ⓘ Info buttons on each option for detailed modals
 * 3. ARIA compliance (combobox/listbox/option)
 * 4. Full keyboard navigation (Arrow Up/Down, Enter, Escape, Tab, Home, End)
 * 5. Strict preservation of internal backend model values (e.g. "Highway", "Agricultural", "Normal")
 */

import { getInfoContent } from '../data/infoDefinitions.js';
import { openInfoModal } from '../utils/infoModal.js';
import { t } from '../i18n/index.js';

export function createCustomSelect({ id, value, options, onChange = null }) {
  const container = document.createElement('div');
  container.className = 'custom-select-container relative w-full';
  container.setAttribute('data-select-id', id);

  let currentValue = value || (options[0] ? options[0].value : '');
  let activeIndex = options.findIndex(o => o.value === currentValue);
  if (activeIndex === -1) activeIndex = 0;
  let isOpen = false;

  // Hidden input for form serialization & document.getElementById(id).value compatibility
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.id = id;
  hiddenInput.value = currentValue;

  // Trigger button
  const triggerBtn = document.createElement('button');
  triggerBtn.type = 'button';
  triggerBtn.id = `${id}_trigger`;
  triggerBtn.className = 'w-full bg-surface-container-low px-space-sm py-1.5 rounded font-label-md text-label-md text-on-surface flex items-center justify-between gap-1 border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-left';
  triggerBtn.setAttribute('role', 'combobox');
  triggerBtn.setAttribute('aria-haspopup', 'listbox');
  triggerBtn.setAttribute('aria-expanded', 'false');
  triggerBtn.setAttribute('aria-controls', `${id}_listbox`);

  // Dropdown listbox container
  const dropdown = document.createElement('div');
  dropdown.id = `${id}_listbox`;
  dropdown.className = 'hidden absolute top-full left-0 right-0 mt-1 bg-surface-container-lowest border border-outline-variant/50 rounded-lg shadow-2xl py-1 z-40 flex flex-col text-on-surface font-label-sm text-xs max-h-72 overflow-hidden';
  dropdown.setAttribute('role', 'listbox');
  dropdown.setAttribute('tabindex', '-1');

  // Options list container (scrollable)
  const optionsList = document.createElement('div');
  optionsList.className = 'overflow-y-auto max-h-48 py-1 divide-y divide-surface-container/40';

  // Live explanation footer inside dropdown
  const liveExplainer = document.createElement('div');
  liveExplainer.className = 'p-2 bg-surface-container-low border-t border-outline-variant/30 text-[11px] text-on-surface-variant flex flex-col gap-0.5 shrink-0';
  liveExplainer.innerHTML = `
    <span class="font-bold text-on-surface explainer-title"></span>
    <span class="explainer-desc text-on-surface/80"></span>
  `;

  dropdown.appendChild(optionsList);
  dropdown.appendChild(liveExplainer);

  function getOptionLabel(opt) {
    if (opt.labelKey) {
      const translated = t(opt.labelKey);
      if (translated && translated !== opt.labelKey) return translated;
    }
    if (opt.infoKey) {
      const info = getInfoContent(opt.infoKey);
      if (info && info.title) return info.title;
    }
    return opt.value;
  }

  function updateTriggerLabel() {
    const activeOpt = options.find(o => o.value === currentValue) || options[0];
    const label = activeOpt ? getOptionLabel(activeOpt) : currentValue;
    triggerBtn.innerHTML = `
      <span class="truncate font-medium">${label}</span>
      <span class="material-symbols-outlined text-[16px] text-on-surface-variant shrink-0 select-arrow">arrow_drop_down</span>
    `;
  }

  function updateLiveExplainer(opt) {
    if (!opt) return;
    const info = getInfoContent(opt.infoKey);
    const titleEl = liveExplainer.querySelector('.explainer-title');
    const descEl = liveExplainer.querySelector('.explainer-desc');
    if (titleEl) titleEl.textContent = `${info.title} (${opt.value})`;
    if (descEl) descEl.textContent = info.short;
  }

  function renderOptions() {
    optionsList.innerHTML = '';
    options.forEach((opt, idx) => {
      const isSelected = opt.value === currentValue;
      const isHighlighted = idx === activeIndex;

      const optBtn = document.createElement('div');
      optBtn.className = `custom-opt-item px-space-sm py-2 flex items-center justify-between gap-2 cursor-pointer transition-colors ${
        isSelected ? 'bg-primary-container/20 font-bold text-primary' : 'hover:bg-surface-container-low text-on-surface'
      } ${isHighlighted ? 'ring-1 ring-primary/40 bg-surface-container' : ''}`;
      optBtn.setAttribute('role', 'option');
      optBtn.setAttribute('id', `${id}_opt_${idx}`);
      optBtn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      optBtn.setAttribute('data-value', opt.value);
      optBtn.setAttribute('data-index', idx);

      const labelText = getOptionLabel(opt);

      optBtn.innerHTML = `
        <div class="flex items-center gap-2 truncate">
          <span class="material-symbols-outlined text-[14px] ${isSelected ? 'text-primary' : 'text-transparent'}">check</span>
          <span class="truncate">${labelText}</span>
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <button type="button" 
            class="opt-info-btn w-4 h-4 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container flex items-center justify-center text-[10px] font-bold transition-colors" 
            data-info-key="${opt.infoKey}" 
            title="${t('common.explain', 'Explain')}: ${labelText}" 
            aria-label="${t('common.explain', 'Explain')}: ${labelText}">
            ⓘ
          </button>
        </div>
      `;

      // Hover / focus updates live explainer
      optBtn.addEventListener('mouseenter', () => {
        activeIndex = idx;
        highlightActiveOption();
        updateLiveExplainer(opt);
      });

      // Click to select
      optBtn.addEventListener('click', (e) => {
        // If clicking info button, open modal instead of selecting
        if (e.target.closest('.opt-info-btn')) {
          e.stopPropagation();
          openInfoModal(opt.infoKey, e.target.closest('.opt-info-btn'));
          return;
        }
        selectValue(opt.value);
        closeDropdown();
      });

      optionsList.appendChild(optBtn);
    });
  }

  function highlightActiveOption() {
    const items = optionsList.querySelectorAll('.custom-opt-item');
    items.forEach((item, idx) => {
      if (idx === activeIndex) {
        item.classList.add('bg-surface-container', 'ring-1', 'ring-primary/40');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('bg-surface-container', 'ring-1', 'ring-primary/40');
      }
    });
    if (options[activeIndex]) {
      updateLiveExplainer(options[activeIndex]);
    }
  }

  function selectValue(newVal) {
    currentValue = newVal;
    hiddenInput.value = newVal;
    activeIndex = options.findIndex(o => o.value === newVal);
    updateTriggerLabel();
    renderOptions();
    if (typeof onChange === 'function') {
      onChange(newVal);
    }
    // Dispatch native change event on hidden input for listeners
    hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function openDropdown() {
    isOpen = true;
    dropdown.classList.remove('hidden');
    triggerBtn.setAttribute('aria-expanded', 'true');
    renderOptions();
    highlightActiveOption();

    // Position dropdown if clipped
    const rect = triggerBtn.getBoundingClientRect();
    if (rect.bottom + 250 > window.innerHeight && rect.top > 250) {
      dropdown.classList.remove('top-full', 'mt-1');
      dropdown.classList.add('bottom-full', 'mb-1');
    } else {
      dropdown.classList.remove('bottom-full', 'mb-1');
      dropdown.classList.add('top-full', 'mt-1');
    }
  }

  function closeDropdown() {
    isOpen = false;
    dropdown.classList.add('hidden');
    triggerBtn.setAttribute('aria-expanded', 'false');
  }

  // Keyboard navigation on trigger button
  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  triggerBtn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Down') {
      e.preventDefault();
      if (!isOpen) {
        openDropdown();
      } else {
        activeIndex = (activeIndex + 1) % options.length;
        highlightActiveOption();
      }
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
      e.preventDefault();
      if (!isOpen) {
        openDropdown();
      } else {
        activeIndex = (activeIndex - 1 + options.length) % options.length;
        highlightActiveOption();
      }
    } else if (e.key === 'Home') {
      if (isOpen) {
        e.preventDefault();
        activeIndex = 0;
        highlightActiveOption();
      }
    } else if (e.key === 'End') {
      if (isOpen) {
        e.preventDefault();
        activeIndex = options.length - 1;
        highlightActiveOption();
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOpen) {
        openDropdown();
      } else {
        if (options[activeIndex]) {
          selectValue(options[activeIndex].value);
        }
        closeDropdown();
      }
    } else if (e.key === 'Escape') {
      if (isOpen) {
        e.preventDefault();
        closeDropdown();
        triggerBtn.focus();
      }
    } else if (e.key === 'Tab') {
      if (isOpen) {
        closeDropdown();
      }
    }
  });

  // Global click outside to close
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      if (isOpen) closeDropdown();
    }
  });

  // Initial render
  updateTriggerLabel();
  renderOptions();

  container.appendChild(hiddenInput);
  container.appendChild(triggerBtn);
  container.appendChild(dropdown);

  // Expose programatic value setter on container
  container.setValue = (val) => {
    selectValue(val);
  };
  container.getValue = () => currentValue;
  container.updateLabels = () => {
    updateTriggerLabel();
    renderOptions();
  };

  return container;
}

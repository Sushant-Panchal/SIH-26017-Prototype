/**
 * Bhoomi Sakha - Internationalization (i18n) Engine
 * Explicit translation dictionary system for English, Hindi, and Marathi.
 * Persists selected language to localStorage with default fallback to English.
 */

import en from './en.js';
import hi from './hi.js';
import mr from './mr.js';

const STORAGE_KEY = 'bhoomi_language';

export const SUPPORTED_LANGUAGES = {
  en: { code: 'en', label: 'English', nativeLabel: 'English' },
  hi: { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी' },
  mr: { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी' },
};

const dictionaries = {
  en,
  hi,
  mr,
};

class I18nManager {
  constructor() {
    this.currentLanguage = this.getStoredLanguage();
    this.listeners = [];
  }

  getStoredLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGUAGES[saved]) {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'en';
  }

  setLanguage(langCode) {
    if (!SUPPORTED_LANGUAGES[langCode]) return;
    this.currentLanguage = langCode;
    try {
      localStorage.setItem(STORAGE_KEY, langCode);
    } catch (e) {
      console.warn('Could not persist language to localStorage:', e);
    }
    document.documentElement.setAttribute('lang', langCode);
    this.notifyListeners();
  }

  getLanguage() {
    return this.currentLanguage;
  }

  getLanguageMeta() {
    return SUPPORTED_LANGUAGES[this.currentLanguage] || SUPPORTED_LANGUAGES.en;
  }

  /**
   * Translate a dotted key path, e.g. t('nav.dashboard')
   * Fallback to English, then to provided fallback or key.
   */
  t(path, fallback = '') {
    const keys = path.split('.');
    
    // 1. Try active language
    let current = dictionaries[this.currentLanguage];
    let found = true;
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        found = false;
        break;
      }
    }
    if (found && typeof current === 'string') return current;

    // 2. Try English fallback
    let enCurrent = dictionaries.en;
    let enFound = true;
    for (const k of keys) {
      if (enCurrent && enCurrent[k] !== undefined) {
        enCurrent = enCurrent[k];
      } else {
        enFound = false;
        break;
      }
    }
    if (enFound && typeof enCurrent === 'string') return enCurrent;

    return fallback || path;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(fn => fn(this.currentLanguage));
  }
}

export const i18n = new I18nManager();
export const t = (path, fallback) => i18n.t(path, fallback);

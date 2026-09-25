/**
 * Bhoomi Sakha - Institutional Theme Management
 * Supports Light, Dark, and System modes with localStorage persistence
 * and prefers-color-scheme listener. Switching does not reload the page.
 */

const STORAGE_KEY = 'bhoomi_theme';

export const THEME_OPTIONS = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark',
};

class ThemeManager {
  constructor() {
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.listeners = [];
    this.currentTheme = this.getStoredTheme();
  }

  init() {
    this.applyTheme(this.currentTheme);

    // Watch system color scheme changes dynamically
    this.mediaQuery.addEventListener('change', () => {
      if (this.currentTheme === THEME_OPTIONS.SYSTEM) {
        this.applyTheme(THEME_OPTIONS.SYSTEM);
      }
    });
  }

  getStoredTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && Object.values(THEME_OPTIONS).includes(saved)) {
        return saved;
      }
    } catch {
      // Fallback
    }
    return THEME_OPTIONS.SYSTEM;
  }

  getResolvedTheme() {
    if (this.currentTheme === THEME_OPTIONS.SYSTEM) {
      return this.mediaQuery.matches ? THEME_OPTIONS.DARK : THEME_OPTIONS.LIGHT;
    }
    return this.currentTheme;
  }

  setTheme(theme) {
    if (!Object.values(THEME_OPTIONS).includes(theme)) return;
    this.currentTheme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      console.warn('Could not persist theme to localStorage:', e);
    }
    this.applyTheme(theme);
    this.notifyListeners();
  }

  applyTheme(theme) {
    const isDark = theme === THEME_OPTIONS.DARK || 
      (theme === THEME_OPTIONS.SYSTEM && this.mediaQuery.matches);

    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.setAttribute('data-theme', theme);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(fn => fn(this.currentTheme, this.getResolvedTheme()));
  }
}

export const themeManager = new ThemeManager();

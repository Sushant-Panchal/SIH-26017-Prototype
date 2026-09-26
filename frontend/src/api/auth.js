/**
 * Bhoomi Sakha - Authentication Service
 * Client-side session and identity management for Citizen & Officer portals.
 */

import { apiClient } from './client.js';

const TOKEN_KEY = 'bs_token';
const USER_KEY = 'bs_user';

let authListeners = [];

export const authService = {
  /**
   * Log in with email and password
   */
  async login(email, password) {
    const data = await apiClient.post('/api/auth/login', { email, password });
    if (data.access_token) {
      localStorage.setItem(TOKEN_KEY, data.access_token);
      localStorage.setItem(USER_KEY, JSON.stringify(data.user));
      this.notifyAuthChange(data.user);
    }
    return data;
  },

  /**
   * Register a new user (Citizen or Officer with authorization key)
   */
  async register(userData) {
    const data = await apiClient.post('/api/auth/register', userData);
    if (data.access_token) {
      localStorage.setItem(TOKEN_KEY, data.access_token);
      localStorage.setItem(USER_KEY, JSON.stringify(data.user));
      this.notifyAuthChange(data.user);
    }
    return data;
  },

  /**
   * Fetch latest profile from /api/auth/me
   */
  async getCurrentUser() {
    try {
      const user = await apiClient.get('/api/auth/me');
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      this.notifyAuthChange(user);
      return user;
    } catch (err) {
      if (err.status === 401) {
        this.logout();
      }
      return null;
    }
  },

  /**
   * Validates stored credentials with the backend and synchronizes session state.
   */
  async verifySession() {
    const token = this.getStoredToken();
    if (!token) {
      this.clearSession();
      return null;
    }
    try {
      const user = await apiClient.get('/api/auth/me');
      if (user && user.user_id) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        return user;
      }
      this.clearSession();
      return null;
    } catch (err) {
      this.clearSession();
      return null;
    }
  },

  clearSession() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
    this.notifyAuthChange(null);
  },

  /**
   * Terminate session
   */
  async logout() {
    try {
      await apiClient.post('/api/auth/logout', {});
    } catch (_) {
      // Ignore network failures on logout
    } finally {
      this.clearSession();
    }
  },

  /**
   * Get cached token
   */
  getStoredToken() {
    return typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null;
  },

  /**
   * Get cached user profile
   */
  getStoredUser() {
    if (typeof window === 'undefined') return null;
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  },

  /**
   * Return the current authenticated user's ID or null
   */
  getCurrentUserId() {
    return this.getStoredUser()?.user_id || null;
  },

  /**
   * Return the current authenticated user's role or null
   */
  getCurrentUserRole() {
    return this.getStoredUser()?.role || null;
  },

  /**
   * Check if user is currently logged in
   */
  isAuthenticated() {
    return Boolean(this.getStoredToken() && this.getStoredUser());
  },

  /**
   * Check user role
   */
  hasRole(role) {
    const user = this.getStoredUser();
    return user && user.role === role;
  },

  isOfficer() {
    const user = this.getStoredUser();
    return user && (user.role === 'officer' || user.role === 'super_admin');
  },

  isCitizen() {
    const user = this.getStoredUser();
    return user && user.role === 'citizen';
  },

  /**
   * Subscribe to authentication state changes
   */
  onAuthChange(callback) {
    authListeners.push(callback);
    return () => {
      authListeners = authListeners.filter(cb => cb !== callback);
    };
  },

  notifyAuthChange(user) {
    authListeners.forEach(cb => {
      try {
        cb(user);
      } catch (err) {
        console.warn('Error in auth change listener:', err);
      }
    });
  },
};

// Convenience direct exports
export const getCurrentUser = () => authService.getStoredUser();
export const getCurrentUserId = () => authService.getCurrentUserId();
export const getCurrentUserRole = () => authService.getCurrentUserRole();
export const isAuthenticated = () => authService.isAuthenticated();

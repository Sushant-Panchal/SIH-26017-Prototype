/**
 * Bhoomi Sakha - Authentication Service
 * Client-side session and identity management for Citizen & Officer portals.
 */

import { apiClient } from './client.js';

const TOKEN_KEY = 'bs_token';
const USER_KEY = 'bs_user';

export const authService = {
  /**
   * Log in with email and password
   */
  async login(email, password) {
    const data = await apiClient.post('/api/auth/login', { email, password });
    if (data.access_token) {
      localStorage.setItem(TOKEN_KEY, data.access_token);
      localStorage.setItem(USER_KEY, JSON.stringify(data.user));
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
      return user;
    } catch (err) {
      return null;
    }
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
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
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
   * Check if user is currently logged in
   */
  isAuthenticated() {
    return Boolean(this.getStoredToken());
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
};

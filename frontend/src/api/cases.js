/**
 * Bhoomi Sakha - Case Management Service Module
 * Provides clean service methods for Users, Lands, Cases, Documents, and Notifications.
 * Phase 1 Foundation: Shared persistence layer between Citizen and Officer workflows.
 */

import { apiClient } from './client.js';

export const caseService = {
  // ============================================================
  // Users
  // ============================================================
  async createUser(userData) {
    return apiClient.post('/api/users', userData);
  },

  async getUser(userId) {
    return apiClient.get(`/api/users/${encodeURIComponent(userId)}`);
  },

  // ============================================================
  // Lands
  // ============================================================
  async createLand(landData) {
    return apiClient.post('/api/lands', landData);
  },

  async getLand(landId) {
    return apiClient.get(`/api/lands/${encodeURIComponent(landId)}`);
  },

  async getUserLands(userId) {
    return apiClient.get(`/api/users/${encodeURIComponent(userId)}/lands`);
  },

  // ============================================================
  // Cases / Complaints
  // ============================================================
  async createCase(caseData) {
    return apiClient.post('/api/cases', caseData);
  },

  async getCase(caseId) {
    return apiClient.get(`/api/cases/${encodeURIComponent(caseId)}`);
  },

  async getUserCases(userId) {
    return apiClient.get(`/api/users/${encodeURIComponent(userId)}/cases`);
  },

  async getOfficerCases(officerId) {
    return apiClient.get(`/api/officers/${encodeURIComponent(officerId)}/cases`);
  },

  async assignCase(caseId, payload) {
    return apiClient.post(`/api/cases/${encodeURIComponent(caseId)}/assign`, payload);
  },

  async updateCaseStatus(caseId, payload) {
    return apiClient.post(`/api/cases/${encodeURIComponent(caseId)}/status`, payload);
  },

  async createCaseEvent(caseId, payload) {
    return apiClient.post(`/api/cases/${encodeURIComponent(caseId)}/events`, payload);
  },

  async getCaseEvents(caseId) {
    return apiClient.get(`/api/cases/${encodeURIComponent(caseId)}/events`);
  },

  // ============================================================
  // Documents Metadata
  // ============================================================
  async createCaseDocument(caseId, docData) {
    return apiClient.post(`/api/cases/${encodeURIComponent(caseId)}/documents`, docData);
  },

  async getCaseDocuments(caseId) {
    return apiClient.get(`/api/cases/${encodeURIComponent(caseId)}/documents`);
  },

  // ============================================================
  // Notifications
  // ============================================================
  async getUserNotifications(userId) {
    return apiClient.get(`/api/users/${encodeURIComponent(userId)}/notifications`);
  },

  async markNotificationRead(notificationId) {
    return apiClient.post(`/api/notifications/${encodeURIComponent(notificationId)}/read`, {});
  },
};

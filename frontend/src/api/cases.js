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

  async updateLand(landId, updates) {
    return apiClient.patch ? apiClient.patch(`/api/lands/${encodeURIComponent(landId)}`, updates) : apiClient.post(`/api/lands/${encodeURIComponent(landId)}`, updates);
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

  async listCases(params = {}) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') {
        searchParams.append(k, v);
      }
    });
    const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
    return apiClient.get(`/api/cases${query}`);
  },

  async getMetricsSummary(officerId = null) {
    const query = officerId ? `?officer_id=${encodeURIComponent(officerId)}` : '';
    return apiClient.get(`/api/cases/metrics/summary${query}`);
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

  async requestDocument(caseId, payload) {
    return apiClient.post(`/api/cases/${encodeURIComponent(caseId)}/request-document`, payload);
  },

  async verifyDocument(caseId, documentId, payload) {
    return apiClient.post(`/api/cases/${encodeURIComponent(caseId)}/documents/${encodeURIComponent(documentId)}/verify`, payload);
  },

  async createCaseEvent(caseId, payload) {
    return apiClient.post(`/api/cases/${encodeURIComponent(caseId)}/events`, payload);
  },

  async getCaseEvents(caseId) {
    return apiClient.get(`/api/cases/${encodeURIComponent(caseId)}/events`);
  },

  // ============================================================
  // Documents & Object Storage
  // ============================================================
  async createCaseDocument(caseId, docData) {
    return apiClient.post(`/api/cases/${encodeURIComponent(caseId)}/documents`, docData);
  },

  async requestDocumentUploadUrl(caseId, payload) {
    return apiClient.post(`/api/cases/${encodeURIComponent(caseId)}/documents/upload-url`, payload);
  },

  async confirmDocumentUpload(caseId, payload) {
    return apiClient.post(`/api/cases/${encodeURIComponent(caseId)}/documents/confirm`, payload);
  },

  async uploadCaseDocumentFile(caseId, formData) {
    return apiClient.upload(`/api/cases/${encodeURIComponent(caseId)}/documents/upload`, formData);
  },

  async getCaseDocuments(caseId) {
    return apiClient.get(`/api/cases/${encodeURIComponent(caseId)}/documents`);
  },

  async getDocumentAccessUrl(caseId, documentId) {
    return apiClient.get(`/api/cases/${encodeURIComponent(caseId)}/documents/${encodeURIComponent(documentId)}/access-url`);
  },

  getDocumentDownloadUrl(caseId, documentId) {
    return `${apiClient.baseUrl}/api/cases/${encodeURIComponent(caseId)}/documents/${encodeURIComponent(documentId)}/download`;
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

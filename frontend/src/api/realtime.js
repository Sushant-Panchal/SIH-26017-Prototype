/**
 * Bhoomi Sakha - Real-Time Server-Sent Events (SSE) Client
 * Establishes an authenticated, persistent event stream with the FastAPI backend.
 * Provides targeted event dispatching, automatic exponential-backoff reconnection,
 * state synchronization on reconnect, duplicate event filtering, and accessible i18n toasts.
 */

import { API_BASE_URL } from './client.js';
import { authService } from './auth.js';
import { notificationStore } from '../utils/notifications.js';
import { t } from '../i18n/index.js';

class RealtimeService {
  constructor() {
    this.eventSource = null;
    this.status = 'disconnected'; // 'disconnected' | 'connecting' | 'connected' | 'reconnecting'
    this.retryCount = 0;
    this.reconnectTimeout = null;
    this.subscribers = new Map(); // eventType -> Set of callbacks
    this.globalSubscribers = new Set(); // Set of callbacks for any event
    this.statusSubscribers = new Set(); // Set of callbacks for connection status
    this.processedEventIds = new Set(); // Deduplication window
  }

  /**
   * Connects to the authenticated real-time stream.
   * If token is missing, connection is safely skipped.
   */
  connect() {
    if (this.eventSource && (this.status === 'connected' || this.status === 'connecting')) {
      return;
    }

    const token = authService.getAccessToken();
    if (!token) {
      this.status = 'disconnected';
      this._notifyStatus();
      return;
    }

    this._clearReconnectTimeout();
    this.status = this.retryCount > 0 ? 'reconnecting' : 'connecting';
    this._notifyStatus();

    const sseUrl = `${API_BASE_URL}/api/realtime/events?token=${encodeURIComponent(token)}`;

    try {
      this.eventSource = new EventSource(sseUrl);

      // Handle standard handshake
      this.eventSource.addEventListener('connected', (e) => {
        this.status = 'connected';
        const wasReconnecting = this.retryCount > 0;
        this.retryCount = 0;
        this._notifyStatus();

        try {
          const payload = JSON.parse(e.data);
          this._dispatch('connected', payload);
        } catch (_) {}

        // If this was a re-connection, trigger synchronization
        if (wasReconnecting) {
          this._dispatch('reconnected', { timestamp: new Date().toISOString() });
        }
      });

      // Register listener for all known event types
      const registeredEvents = [
        'case_created',
        'case_assigned',
        'case_status_changed',
        'status_changed',
        'document_requested',
        'document_uploaded',
        'document_verified',
        'document_rejected',
        'case_escalated',
        'case_resolved',
        'case_event_added',
        'notification_created',
      ];

      registeredEvents.forEach((eventType) => {
        this.eventSource.addEventListener(eventType, (e) => {
          this._handleIncomingEvent(eventType, e.data);
        });
      });

      this.eventSource.onerror = (err) => {
        console.warn('[RealTime] EventSource connection interrupted:', err);
        this._handleDisconnect();
      };
    } catch (err) {
      console.error('[RealTime] Failed to initialize EventSource:', err);
      this._handleDisconnect();
    }
  }

  /**
   * Gracefully closes stream and resets state on logout.
   */
  disconnect() {
    this._clearReconnectTimeout();
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
    this.status = 'disconnected';
    this.retryCount = 0;
    this._notifyStatus();
  }

  /**
   * Internal disconnect handler with exponential backoff.
   */
  _handleDisconnect() {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }

    // Only reconnect if user is still actively authenticated
    const token = authService.getAccessToken();
    if (!token) {
      this.status = 'disconnected';
      this._notifyStatus();
      return;
    }

    this.status = 'reconnecting';
    this._notifyStatus();

    // Exponential backoff: 1.5s, 3s, 6s, 12s, max 30s
    const delay = Math.min(1500 * Math.pow(1.5, this.retryCount), 30000);
    this.retryCount += 1;

    this.reconnectTimeout = setTimeout(() => {
      this.connect();
    }, delay);
  }

  _clearReconnectTimeout() {
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }
  }

  /**
   * Deduplicates and dispatches incoming event payload.
   */
  _handleIncomingEvent(eventType, rawData) {
    let payload = null;
    try {
      payload = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
    } catch (e) {
      console.warn('[RealTime] Failed to parse event JSON:', e);
      return;
    }

    // Deduplication check
    const dedupKey = payload.data?.notification_id || payload.data?.event_id || `${eventType}_${payload.case_id}_${payload.timestamp}`;
    if (this.processedEventIds.has(dedupKey)) {
      return;
    }
    this.processedEventIds.add(dedupKey);
    // Keep deduplication window bounded
    if (this.processedEventIds.size > 200) {
      const first = this.processedEventIds.values().next().value;
      this.processedEventIds.delete(first);
    }

    // Trigger notification store refresh for badge
    if (eventType === 'notification_created') {
      notificationStore.notifyListeners();
    }

    // Dispatch accessible toast for key business events
    this._triggerEventToast(eventType, payload);

    // Dispatch to subscribers
    this._dispatch(eventType, payload);
  }

  _dispatch(eventType, payload) {
    // Exact event subscribers
    const callbacks = this.subscribers.get(eventType);
    if (callbacks) {
      callbacks.forEach((cb) => {
        try {
          cb(payload);
        } catch (err) {
          console.error(`[RealTime] Subscriber error for ${eventType}:`, err);
        }
      });
    }

    // Global subscribers
    this.globalSubscribers.forEach((cb) => {
      try {
        cb(eventType, payload);
      } catch (err) {
        console.error('[RealTime] Global subscriber error:', err);
      }
    });
  }

  /**
   * Displays an accessible, non-intrusive toast alert using i18n keys.
   */
  _triggerEventToast(eventType, payload) {
    if (typeof window === 'undefined') return;

    let toastText = null;
    let toastType = 'info';

    switch (eventType) {
      case 'case_assigned':
        toastText = t('realtime.caseAssigned', 'Case assigned to officer');
        toastType = 'info';
        break;
      case 'document_requested':
        toastText = t('realtime.documentRequested', 'Supporting document requested');
        toastType = 'warning';
        break;
      case 'document_uploaded':
        toastText = t('realtime.documentUploaded', 'Document uploaded to case dossier');
        toastType = 'success';
        break;
      case 'document_verified':
        toastText = t('realtime.documentVerified', 'Document verified successfully');
        toastType = 'success';
        break;
      case 'document_rejected':
        toastText = t('realtime.documentRejected', 'Document verification rejected');
        toastType = 'warning';
        break;
      case 'case_resolved':
        toastText = t('realtime.caseResolved', 'Case resolved successfully');
        toastType = 'success';
        break;
      case 'case_escalated':
        toastText = t('realtime.caseEscalated', 'Case escalated to higher authority');
        toastType = 'warning';
        break;
      case 'notification_created':
        // If message is present, show notification title
        if (payload.data?.title) {
          toastText = payload.data.title;
        }
        break;
      default:
        break;
    }

    if (toastText && window.bhoomiSakhaApp && typeof window.bhoomiSakhaApp.showToast === 'function') {
      window.bhoomiSakhaApp.showToast(toastText, toastType);
    }
  }

  /**
   * Subscribes to a specific real-time event.
   * Returns an unsubscribe function to prevent memory leaks.
   */
  subscribe(eventType, callback) {
    if (!this.subscribers.has(eventType)) {
      this.subscribers.set(eventType, new Set());
    }
    this.subscribers.get(eventType).add(callback);

    return () => {
      const set = this.subscribers.get(eventType);
      if (set) {
        set.delete(callback);
        if (set.size === 0) {
          this.subscribers.delete(eventType);
        }
      }
    };
  }

  /**
   * Subscribes to all real-time events.
   */
  subscribeAll(callback) {
    this.globalSubscribers.add(callback);
    return () => {
      this.globalSubscribers.delete(callback);
    };
  }

  /**
   * Subscribes to connection status changes.
   */
  onStatusChange(callback) {
    this.statusSubscribers.add(callback);
    callback(this.status);
    return () => {
      this.statusSubscribers.delete(callback);
    };
  }

  _notifyStatus() {
    this.statusSubscribers.forEach((cb) => {
      try {
        cb(this.status);
      } catch (_) {}
    });
  }
}

export const realtimeService = new RealtimeService();

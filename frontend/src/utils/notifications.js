/**
 * Bhoomi Sakha - Notifications State Management
 * Handles system/application alerts, unread counts, and localStorage persistence.
 */

const STORAGE_KEY = 'bhoomi_notifications_read';

export const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-crit-1',
    category: 'Risk Alert',
    severity: 'critical',
    title: 'Critical delay risk detected in current assessment',
    summary: 'Delhi-Amritsar Expressway (Pkg 4) evaluated with 84.6% delay probability requiring urgent Section 19 intervention.',
    timestamp: '15 mins ago',
    actionRoute: '#/assessment?preset=critical',
    actionLabel: 'Inspect Assessment',
  },
  {
    id: 'notif-engine-2',
    category: 'Engine',
    severity: 'info',
    title: 'Backend prediction engine connected',
    summary: 'FastAPI service connected with 76 engineered cadastral features ready for live XGBoost inference.',
    timestamp: '1 hour ago',
    actionRoute: '#/dashboard',
    actionLabel: 'View Dashboard',
  },
  {
    id: 'notif-atten-3',
    category: 'Officer Attention',
    severity: 'high',
    title: 'Assessment contains factors requiring officer attention',
    summary: '18 high-bottleneck parcel cases in Western Freight Corridor flagged for documentation backlog review.',
    timestamp: '3 hours ago',
    actionRoute: '#/assessment?preset=high',
    actionLabel: 'Review Factors',
  },
  {
    id: 'notif-stat-4',
    category: 'System',
    severity: 'info',
    title: 'Risk assessment pipeline initialized',
    summary: 'National Cadastral Matrix synchronized with 142 monitored infrastructure corridors.',
    timestamp: 'Today, 09:30 AM',
    actionRoute: '#/projects',
    actionLabel: 'Projects Directory',
  },
];

class NotificationStore {
  constructor() {
    this.listeners = [];
  }

  getReadIds() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveReadIds(ids) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
      this.notifyListeners();
    } catch (e) {
      console.error('Failed to save read notifications:', e);
    }
  }

  getAll() {
    const readIds = new Set(this.getReadIds());
    return INITIAL_NOTIFICATIONS.map(n => ({
      ...n,
      isRead: readIds.has(n.id),
    }));
  }

  getUnreadCount() {
    const readIds = new Set(this.getReadIds());
    return INITIAL_NOTIFICATIONS.filter(n => !readIds.has(n.id)).length;
  }

  markAsRead(id) {
    const readIds = new Set(this.getReadIds());
    readIds.add(id);
    this.saveReadIds(Array.from(readIds));
  }

  markAsUnread(id) {
    const readIds = new Set(this.getReadIds());
    readIds.delete(id);
    this.saveReadIds(Array.from(readIds));
  }

  markAllAsRead() {
    const allIds = INITIAL_NOTIFICATIONS.map(n => n.id);
    this.saveReadIds(allIds);
  }

  resetAll() {
    this.saveReadIds([]);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    const count = this.getUnreadCount();
    this.listeners.forEach(fn => fn(count));
  }
}

export const notificationStore = new NotificationStore();

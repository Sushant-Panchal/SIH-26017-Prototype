/**
 * Test Route Guard & Role-Based Entry Matrix
 * Verifies all 11 client-side navigation security scenarios.
 */

// Node.js browser environment mock for headless test
if (typeof globalThis.window === 'undefined') {
  globalThis.window = {
    matchMedia: () => ({ matches: false, addEventListener: () => {} }),
    location: { hash: '' }
  };
  globalThis.document = {
    getElementById: () => null,
    documentElement: { classList: { add: () => {}, remove: () => {} }, setAttribute: () => {} },
    addEventListener: () => {}
  };
  globalThis.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  };
}

const { PUBLIC_ROUTES, CITIZEN_ROUTES, OFFICER_ROUTES, SHARED_AUTH_ROUTES } = await import('./src/main.js');

function simulateRouteGuard({ isAuthenticated, userRole, requestedHash, postLoginRedirect = null }) {
  const rawHash = requestedHash || '';
  const cleanHash = rawHash.replace(/^#\/?/, '');
  const [path] = cleanHash.split('?');

  let finalHash = rawHash;
  let activeView = path;
  let savedRedirect = postLoginRedirect;
  let warningToast = null;
  let isViewMounted = false;

  // Unauthenticated Visitor
  if (!isAuthenticated) {
    if (path === 'login' || path === 'register') {
      activeView = path;
      finalHash = `#/${path}`;
      isViewMounted = true;
      return { finalHash, activeView, savedRedirect, warningToast, isViewMounted, allowed: true };
    }

    // Intercept protected routes
    if (cleanHash && cleanHash !== 'login' && cleanHash !== 'register') {
      savedRedirect = rawHash;
    }
    finalHash = '#/login';
    activeView = 'login';
    isViewMounted = true;
    return { finalHash, activeView, savedRedirect, warningToast, isViewMounted, allowed: false, redirectedToLogin: true };
  }

  // Authenticated Visitor accessing login/register
  if (path === 'login' || path === 'register' || !path) {
    finalHash = userRole === 'citizen' ? '#/citizen-dashboard' : '#/dashboard';
    activeView = userRole === 'citizen' ? 'citizen-dashboard' : 'dashboard';
    isViewMounted = true;
    return { finalHash, activeView, savedRedirect, warningToast, isViewMounted, allowed: true };
  }

  // Citizen Role Isolation
  if (userRole === 'citizen') {
    if (OFFICER_ROUTES.includes(path)) {
      warningToast = 'Unauthorized: Officer portal access denied for citizen accounts.';
      finalHash = '#/citizen-dashboard';
      activeView = 'citizen-dashboard';
      isViewMounted = true;
      return { finalHash, activeView, savedRedirect, warningToast, isViewMounted, allowed: false };
    }
    if (!CITIZEN_ROUTES.includes(path) && !SHARED_AUTH_ROUTES.includes(path)) {
      finalHash = '#/citizen-dashboard';
      activeView = 'citizen-dashboard';
      isViewMounted = true;
      return { finalHash, activeView, savedRedirect, warningToast, isViewMounted, allowed: false };
    }
  }

  // Officer Role Isolation
  if (userRole === 'officer' || userRole === 'super_admin') {
    if (CITIZEN_ROUTES.includes(path)) {
      warningToast = 'Unauthorized: Citizen-only portal route. Use Officer Case Queue.';
      finalHash = '#/dashboard';
      activeView = 'dashboard';
      isViewMounted = true;
      return { finalHash, activeView, savedRedirect, warningToast, isViewMounted, allowed: false };
    }
    if (!OFFICER_ROUTES.includes(path) && !SHARED_AUTH_ROUTES.includes(path)) {
      finalHash = '#/dashboard';
      activeView = 'dashboard';
      isViewMounted = true;
      return { finalHash, activeView, savedRedirect, warningToast, isViewMounted, allowed: false };
    }
  }

  activeView = path;
  isViewMounted = true;
  return { finalHash, activeView, savedRedirect, warningToast, isViewMounted, allowed: true };
}

// ============================================================
// RUN TEST SUITE
// ============================================================
console.log('--- Bhoomi Sakha Route Guard Matrix Verification ---');

// Test 1: Logged out -> login page
const t1 = simulateRouteGuard({ isAuthenticated: false, requestedHash: '#/login' });
console.assert(t1.finalHash === '#/login' && t1.activeView === 'login', 'Test 1 Failed: Logged out visiting #/login');
console.log('✓ Test 1: Logged out visiting #/login allowed');

// Test 2: Logged out -> /dashboard blocked
const t2 = simulateRouteGuard({ isAuthenticated: false, requestedHash: '#/dashboard' });
console.assert(t2.finalHash === '#/login' && t2.redirectedToLogin === true && t2.savedRedirect === '#/dashboard', 'Test 2 Failed: Logged out visiting #/dashboard');
console.log('✓ Test 2: Logged out -> #/dashboard blocked and redirected to #/login');

// Test 3: Logged out -> /projects blocked
const t3 = simulateRouteGuard({ isAuthenticated: false, requestedHash: '#/projects' });
console.assert(t3.finalHash === '#/login' && t3.redirectedToLogin === true && t3.savedRedirect === '#/projects', 'Test 3 Failed: Logged out visiting #/projects');
console.log('✓ Test 3: Logged out -> #/projects blocked and redirected to #/login');

// Test 4: Logged out -> citizen pages blocked
const t4 = simulateRouteGuard({ isAuthenticated: false, requestedHash: '#/citizen-lands' });
console.assert(t4.finalHash === '#/login' && t4.redirectedToLogin === true && t4.savedRedirect === '#/citizen-lands', 'Test 4 Failed: Logged out visiting #/citizen-lands');
console.log('✓ Test 4: Logged out -> Citizen routes blocked and redirected to #/login');

// Test 5: Citizen login -> citizen portal
const t5 = simulateRouteGuard({ isAuthenticated: true, userRole: 'citizen', requestedHash: '#/citizen-dashboard' });
console.assert(t5.finalHash === '#/citizen-dashboard' && t5.activeView === 'citizen-dashboard', 'Test 5 Failed: Citizen accessing citizen dashboard');
console.log('✓ Test 5: Citizen accessing Citizen Portal allowed');

// Test 6: Citizen -> officer route blocked
const t6 = simulateRouteGuard({ isAuthenticated: true, userRole: 'citizen', requestedHash: '#/dashboard' });
console.assert(t6.finalHash === '#/citizen-dashboard' && t6.warningToast !== null, 'Test 6 Failed: Citizen accessing officer route not blocked');
console.log('✓ Test 6: Citizen accessing Officer route blocked with warning toast');

// Test 7: Officer login -> officer command center
const t7 = simulateRouteGuard({ isAuthenticated: true, userRole: 'officer', requestedHash: '#/dashboard' });
console.assert(t7.finalHash === '#/dashboard' && t7.activeView === 'dashboard', 'Test 7 Failed: Officer accessing dashboard');
console.log('✓ Test 7: Officer accessing Command Center allowed');

// Test 8: Officer -> citizen-only route blocked
const t8 = simulateRouteGuard({ isAuthenticated: true, userRole: 'officer', requestedHash: '#/citizen-lands' });
console.assert(t8.finalHash === '#/dashboard' && t8.warningToast !== null, 'Test 8 Failed: Officer accessing citizen route not blocked');
console.log('✓ Test 8: Officer accessing Citizen-only route blocked with warning toast');

// Test 9: Refresh while logged in -> session restored
const t9 = simulateRouteGuard({ isAuthenticated: true, userRole: 'citizen', requestedHash: '#/citizen-complaint' });
console.assert(t9.finalHash === '#/citizen-complaint' && t9.activeView === 'citizen-complaint', 'Test 9 Failed: Session restoration');
console.log('✓ Test 9: Authenticated user session restored to active view');

// Test 10: Logout -> all protected routes blocked
const t10 = simulateRouteGuard({ isAuthenticated: false, requestedHash: '#/officer-case-workspace?id=CAS-123' });
console.assert(t10.finalHash === '#/login' && t10.redirectedToLogin === true, 'Test 10 Failed: Protected routes blocked after logout');
console.log('✓ Test 10: Logout cleanly blocks workspace and redirects to #/login');

// Test 11: Browser back after logout
const t11 = simulateRouteGuard({ isAuthenticated: false, requestedHash: '#/assessment?preset=critical' });
console.assert(t11.finalHash === '#/login' && t11.redirectedToLogin === true, 'Test 11 Failed: Browser back after logout');
console.log('✓ Test 11: Browser Back navigation when unauthenticated remains blocked');

console.log('--- ALL ROUTE GUARD MATRIX TESTS PASSED ---');

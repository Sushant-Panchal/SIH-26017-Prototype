/**
 * Bhoomi Sakha - Production Toast Notification System
 * Non-blocking, accessible, responsive feedback for asynchronous actions and errors.
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function showToast(message, type = 'info', duration = 4500) {
  if (typeof document === 'undefined') return;
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-md w-full px-4 sm:px-0';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const typeConfig = {
    success: {
      bg: 'bg-emerald-950/95 text-emerald-50 border-emerald-500/80 shadow-emerald-950/50',
      icon: 'check_circle',
      iconColor: 'text-emerald-400',
    },
    error: {
      bg: 'bg-rose-950/95 text-rose-50 border-rose-500/80 shadow-rose-950/50',
      icon: 'error',
      iconColor: 'text-rose-400',
    },
    warning: {
      bg: 'bg-amber-950/95 text-amber-50 border-amber-500/80 shadow-amber-950/50',
      icon: 'warning',
      iconColor: 'text-amber-400',
    },
    info: {
      bg: 'bg-slate-900/95 text-slate-50 border-sky-500/70 shadow-slate-950/50',
      icon: 'info',
      iconColor: 'text-sky-400',
    },
  };

  const config = typeConfig[type] || typeConfig.info;
  toast.className = `${config.bg} px-4 py-3 rounded-xl shadow-xl border text-xs sm:text-sm pointer-events-auto flex items-start gap-2.5 transition-all duration-300 transform translate-y-2 opacity-0 backdrop-blur-md`;
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
  toast.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite');

  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] ${config.iconColor} shrink-0 mt-0.5">${config.icon}</span>
    <div class="flex-1 font-medium leading-relaxed">${escapeHtml(message)}</div>
    <button type="button" class="text-white/60 hover:text-white p-0.5 ml-1 transition-colors shrink-0 rounded" aria-label="Dismiss notification">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `;

  const dismissBtn = toast.querySelector('button');
  let isRemoved = false;
  const removeToast = () => {
    if (isRemoved) return;
    isRemoved = true;
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => {
      try {
        toast.remove();
      } catch (_) {}
    }, 250);
  };

  if (dismissBtn) {
    dismissBtn.addEventListener('click', removeToast);
  }

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(removeToast, duration);
}

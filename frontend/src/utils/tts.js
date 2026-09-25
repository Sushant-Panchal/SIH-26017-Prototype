/**
 * Bhoomi Sakha - Browser-Native Text-to-Speech (Read Aloud)
 * Uses window.speechSynthesis with zero paid external services.
 * Supports Read, Pause, Resume, Stop, and language-matched voice selection.
 */

class SpeechSynthesizer {
  constructor() {
    this.supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
    this.voices = [];
    this.currentUtterance = null;
    this.state = 'idle'; // 'idle' | 'speaking' | 'paused'
    this.activeListener = null;

    if (this.supported) {
      this.loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.supported) return;
    this.voices = window.speechSynthesis.getVoices();
  }

  getBestVoice(langCode = 'en') {
    if (!this.voices || this.voices.length === 0) {
      this.loadVoices();
    }
    const target = langCode.toLowerCase();
    
    // Look for regional locale matches
    const langMap = {
      en: ['en-IN', 'en-GB', 'en-US', 'en'],
      hi: ['hi-IN', 'hi'],
      mr: ['mr-IN', 'mr', 'hi-IN'], // fallback to Hindi voice if Marathi voice absent
    };

    const searchList = langMap[target] || [target];

    for (const code of searchList) {
      const match = this.voices.find(v => v.lang.toLowerCase() === code.toLowerCase() || v.lang.toLowerCase().startsWith(code.toLowerCase()));
      if (match) return match;
    }

    // Default to first voice or null
    return this.voices[0] || null;
  }

  speak(text, langCode = 'en', onStateChange = null) {
    if (!this.supported) {
      console.warn('Speech synthesis is not supported in this browser environment.');
      return false;
    }

    if (!text || typeof text !== 'string') return false;

    // Stop existing speech
    this.stop();

    this.activeListener = onStateChange;
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = this.getBestVoice(langCode);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }

    utterance.rate = 0.95; // Clear government audit cadence
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.state = 'speaking';
      if (this.activeListener) this.activeListener('speaking');
    };

    utterance.onpause = () => {
      this.state = 'paused';
      if (this.activeListener) this.activeListener('paused');
    };

    utterance.onresume = () => {
      this.state = 'speaking';
      if (this.activeListener) this.activeListener('speaking');
    };

    utterance.onend = () => {
      this.state = 'idle';
      this.currentUtterance = null;
      if (this.activeListener) this.activeListener('idle');
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      this.state = 'idle';
      this.currentUtterance = null;
      if (this.activeListener) this.activeListener('idle');
    };

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    return true;
  }

  pause() {
    if (!this.supported) return;
    if (this.state === 'speaking') {
      window.speechSynthesis.pause();
      this.state = 'paused';
      if (this.activeListener) this.activeListener('paused');
    }
  }

  resume() {
    if (!this.supported) return;
    if (this.state === 'paused') {
      window.speechSynthesis.resume();
      this.state = 'speaking';
      if (this.activeListener) this.activeListener('speaking');
    }
  }

  stop() {
    if (!this.supported) return;
    window.speechSynthesis.cancel();
    this.state = 'idle';
    this.currentUtterance = null;
    if (this.activeListener) this.activeListener('idle');
  }

  toggle(text, langCode = 'en', onStateChange = null) {
    if (this.state === 'speaking') {
      this.pause();
    } else if (this.state === 'paused') {
      this.resume();
    } else {
      this.speak(text, langCode, onStateChange);
    }
  }
}

export const tts = new SpeechSynthesizer();

/**
 * Creates a reusable, accessible Read Aloud button component.
 */
export function createReadAloudButton(getTextFn, getLangFn) {
  const container = document.createElement('div');
  container.className = 'inline-flex items-center gap-1';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-xs font-semibold flex items-center gap-1 transition-all border border-outline-variant/30 shadow-sm';
  btn.setAttribute('aria-label', 'Read assessment aloud');
  btn.title = 'Read aloud';
  btn.innerHTML = `
    <span class="material-symbols-outlined text-[16px] text-secondary">volume_up</span>
    <span class="btn-label">Read</span>
  `;

  const stopBtn = document.createElement('button');
  stopBtn.type = 'button';
  stopBtn.className = 'hidden p-1 rounded bg-surface-container hover:bg-error/10 text-error font-label-sm text-xs transition-all border border-outline-variant/30';
  stopBtn.setAttribute('aria-label', 'Stop reading aloud');
  stopBtn.title = 'Stop reading';
  stopBtn.innerHTML = `<span class="material-symbols-outlined text-[16px]">stop</span>`;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const text = typeof getTextFn === 'function' ? getTextFn() : getTextFn;
    const lang = typeof getLangFn === 'function' ? getLangFn() : (getLangFn || 'en');

    if (tts.state === 'speaking') {
      tts.pause();
    } else if (tts.state === 'paused') {
      tts.resume();
    } else {
      tts.speak(text, lang, (state) => {
        updateUI(state);
      });
    }
  });

  stopBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    tts.stop();
    updateUI('idle');
  });

  function updateUI(state) {
    const label = btn.querySelector('.btn-label');
    const icon = btn.querySelector('.material-symbols-outlined');
    if (state === 'speaking') {
      if (label) label.textContent = 'Pause';
      if (icon) icon.textContent = 'pause';
      btn.classList.add('bg-secondary-fixed/40', 'ring-1', 'ring-secondary');
      stopBtn.classList.remove('hidden');
    } else if (state === 'paused') {
      if (label) label.textContent = 'Resume';
      if (icon) icon.textContent = 'play_arrow';
      btn.classList.remove('bg-secondary-fixed/40', 'ring-1', 'ring-secondary');
      stopBtn.classList.remove('hidden');
    } else {
      if (label) label.textContent = 'Read';
      if (icon) icon.textContent = 'volume_up';
      btn.classList.remove('bg-secondary-fixed/40', 'ring-1', 'ring-secondary');
      stopBtn.classList.add('hidden');
    }
  }

  container.appendChild(btn);
  container.appendChild(stopBtn);
  return container;
}

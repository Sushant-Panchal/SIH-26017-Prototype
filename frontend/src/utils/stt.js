/**
 * Bhoomi Sakha - Browser-Native Speech-to-Text (Speak to Write)
 * Uses SpeechRecognition / webkitSpeechRecognition with zero paid external services.
 * Supports explicit activation, pulsing listening indicator, field insertion, and language selection.
 */

export class SpeechRecognizer {
  constructor() {
    const SpeechRecognition = typeof window !== 'undefined'
      ? (window.SpeechRecognition || window.webkitSpeechRecognition)
      : null;

    this.supported = Boolean(SpeechRecognition);
    this.recognition = SpeechRecognition ? new SpeechRecognition() : null;
    this.isListening = false;
    this.activeCallbacks = null;

    if (this.recognition) {
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.recognition.onstart = () => {
        this.isListening = true;
        if (this.activeCallbacks?.onStart) this.activeCallbacks.onStart();
      };

      this.recognition.onresult = (event) => {
        const transcript = event.results?.[0]?.[0]?.transcript || '';
        if (this.activeCallbacks?.onResult) {
          this.activeCallbacks.onResult(transcript);
        }
      };

      this.recognition.onerror = (event) => {
        console.warn('SpeechRecognition error:', event.error);
        this.isListening = false;
        if (this.activeCallbacks?.onError) {
          this.activeCallbacks.onError(event.error);
        }
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (this.activeCallbacks?.onEnd) {
          this.activeCallbacks.onEnd();
        }
      };
    }
  }

  start({ onResult, onStart, onEnd, onError, langCode = 'en' }) {
    if (!this.supported) {
      if (onError) onError('not-supported');
      return false;
    }

    if (this.isListening) {
      this.stop();
      return false;
    }

    const langMap = {
      en: 'en-IN',
      hi: 'hi-IN',
      mr: 'mr-IN',
    };

    this.recognition.lang = langMap[langCode] || 'en-IN';
    this.activeCallbacks = { onResult, onStart, onEnd, onError };

    try {
      this.recognition.start();
      return true;
    } catch (e) {
      console.warn('Could not start speech recognition:', e);
      this.isListening = false;
      return false;
    }
  }

  stop() {
    if (!this.supported || !this.isListening) return;
    try {
      this.recognition.stop();
    } catch {
      // Ignore
    }
    this.isListening = false;
  }
}

export const stt = new SpeechRecognizer();

/**
 * Attaches a microphone Speak-to-Write button to any text input element.
 */
export function attachMicToInput(inputEl, getLangFn) {
  if (!inputEl) return null;

  const micBtn = document.createElement('button');
  micBtn.type = 'button';
  micBtn.className = 'p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center';
  micBtn.setAttribute('aria-label', 'Start voice input (Speak to Write)');
  micBtn.title = 'Speak to write';

  micBtn.innerHTML = `
    <span class="material-symbols-outlined text-[16px] mic-icon">mic</span>
  `;

  micBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!stt.supported) {
      alert('Speech recognition is not supported in this browser. Please use Chrome, Edge, or a Web Speech-enabled browser.');
      return;
    }

    const lang = typeof getLangFn === 'function' ? getLangFn() : (getLangFn || 'en');

    if (stt.isListening) {
      stt.stop();
      setListeningState(false);
      return;
    }

    stt.start({
      langCode: lang,
      onStart: () => setListeningState(true),
      onResult: (text) => {
        if (text) {
          const currentVal = inputEl.value.trim();
          inputEl.value = currentVal ? `${currentVal} ${text}` : text;
          inputEl.dispatchEvent(new Event('input', { bubbles: true }));
          inputEl.dispatchEvent(new Event('change', { bubbles: true }));
          inputEl.focus();
        }
      },
      onEnd: () => setListeningState(false),
      onError: (err) => {
        console.warn('Voice input ended with error:', err);
        setListeningState(false);
      },
    });
  });

  function setListeningState(isListening) {
    const icon = micBtn.querySelector('.mic-icon');
    if (isListening) {
      micBtn.classList.add('text-error', 'animate-pulse');
      micBtn.setAttribute('aria-label', 'Listening... click to stop voice input');
      micBtn.title = 'Listening... (Speak now)';
      if (icon) icon.textContent = 'mic_active';
    } else {
      micBtn.classList.remove('text-error', 'animate-pulse');
      micBtn.setAttribute('aria-label', 'Start voice input (Speak to Write)');
      micBtn.title = 'Speak to write';
      if (icon) icon.textContent = 'mic';
    }
  }

  return micBtn;
}

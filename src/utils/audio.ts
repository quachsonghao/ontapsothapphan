// Web Audio API Synthesizer for educational feedback sounds

let audioCtx: AudioContext | null = null;
let isMuted: boolean = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function setSoundMuted(muted: boolean) {
  isMuted = muted;
}

export function getSoundMuted(): boolean {
  return isMuted;
}

/**
 * Âm thanh khi học sinh làm ĐÚNG:
 * Chuỗi nốt vui tươi (C5 -> E5 -> G5 -> C6) mang cảm giác thành công, tươi sáng.
 */
export function playCorrectSound() {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);

      gain.gain.setValueAtTime(0, now + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.25, now + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.3);
    });
  } catch {
    // Ignore audio errors gracefully
  }
}

/**
 * Âm thanh khi học sinh làm SAI:
 * Hai nốt trầm nhẹ nhàng (F4 -> Db4), thân thiện, nhắc nhở chứ không gây tiêu cực.
 */
export function playIncorrectSound() {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(349.23, now); // F4
    osc.frequency.linearRampToValueAtTime(277.18, now + 0.2); // Db4

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.38);
  } catch {
    // Ignore audio errors
  }
}

/**
 * Âm thanh chuỗi đúng liên tiếp (Streak Combo):
 * Chuông ngân vang đặc biệt
 */
export function playStreakSound() {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const freqs = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
    
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0, now + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.22, now + idx * 0.06 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.42);
    });
  } catch {
    // Ignore audio errors
  }
}

/**
 * Âm thanh Vinh Quang / Cúp Chiến Thắng (Fanfare):
 * Đoạn nhạc kèn chiến thắng rộn rã khi học sinh hoàn thành toàn bộ bài tập và nhận cúp.
 */
export function playFanfareSound() {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Rộn rã: G4, C5, E5, G5, G5, G5, C6 (hùng tráng)
    const melody = [
      { f: 392.00, d: 0.12, t: 0.0 },  // G4
      { f: 523.25, d: 0.12, t: 0.14 }, // C5
      { f: 659.25, d: 0.12, t: 0.28 }, // E5
      { f: 783.99, d: 0.25, t: 0.42 }, // G5
      { f: 659.25, d: 0.12, t: 0.70 }, // E5
      { f: 783.99, d: 0.50, t: 0.85 }, // G5
      { f: 1046.50, d: 0.80, t: 1.40 }, // C6 high finale
    ];

    melody.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, now + note.t);

      gain.gain.setValueAtTime(0, now + note.t);
      gain.gain.linearRampToValueAtTime(0.28, now + note.t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + note.t);
      osc.stop(now + note.t + note.d + 0.05);
    });
  } catch {
    // Ignore audio errors
  }
}

/**
 * Âm thanh nhấp chuột giao diện (Click)
 */
export function playClickSound() {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  } catch {
    // Ignore audio errors
  }
}

import confetti from 'canvas-confetti';

export function fireTrophyConfetti() {
  const duration = 3.5 * 1000;
  const end = Date.now() + duration;

  const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: colors
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

export function fireSmallSuccessConfetti() {
  confetti({
    particleCount: 35,
    spread: 60,
    origin: { y: 0.75 },
    colors: ['#10b981', '#3b82f6', '#f59e0b']
  });
}

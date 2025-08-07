import { startTyping } from './typewriter.ts';

function initTypewriter(): void {
  const el = document.getElementById('typed');
  if (el) {
    startTyping();
  }
}

document.addEventListener('DOMContentLoaded', initTypewriter);
document.addEventListener('astro:after-swap', initTypewriter);

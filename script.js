/* ═══════════════════════════════════════════
   GABBY PICKERT — Actor Website
   script.js
═══════════════════════════════════════════ */

/* ─── FLOATING PETALS ─── */
const petalsBg = document.getElementById('petalsBg');
const petalEmojis = ['🌸', '🌺', '🌼', '🌷', '💐', '✿', '🌹'];

function createPetal() {
  const el = document.createElement('div');
  el.className = 'petal';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (Math.random() * 18 + 10) + 'px';
  el.style.animationDuration = (Math.random() * 12 + 10) + 's';
  el.style.animationDelay = (Math.random() * 15) + 's';
  el.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
  petalsBg.appendChild(el);
  el.addEventListener('animationend', () => {
    el.remove();
    createPetal();
  });
}

for (let i = 0; i < 22; i++) createPetal();

/* ─── MARQUEE NAME BUILD ─── */
// Scrolls right-to-left reversed: animation goes from -50% → 0%
// We still need 2 identical halves (8 chunks = 4 per half) for the seamless loop.
const track = document.getElementById('marqueeTrack');
const separators = ['🌸', '🌺', '🌼', '✿', '🌷'];
const nameHTML = `<span class="name-text">Gabby <em>Pickert</em></span>`;

let html = '';
for (let i = 0; i < 8; i++) {
  const sep = separators[i % separators.length];
  html += `<span class="name-marquee-chunk">${nameHTML}<span class="petal-sep">${sep}</span></span>`;
}
track.innerHTML = html;

/* ─── SCROLL REVEAL ─── */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));

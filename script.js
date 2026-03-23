/* ═══════════════════════════════════════════
   GABBY PICKERT — Director & Performer
   script.js
═══════════════════════════════════════════ */

/* ─── MARQUEE NAME BUILD ─── */
// 8 chunks (2 identical halves) for a seamless loop.
// Animation: -50% → 0% so name scrolls right.
const track = document.getElementById('marqueeTrack');
const nameHTML = `<span class="name-text">Gabby <em>Pickert</em></span>`;

let html = '';
for (let i = 0; i < 8; i++) {
  html += `<span class="name-marquee-chunk">${nameHTML}<span class="name-sep"></span></span>`;
}
track.innerHTML = html;

/* ─── RESUME TABS ─── */
document.querySelectorAll('.resume-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.resume-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.resume-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

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

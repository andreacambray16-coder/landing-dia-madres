// ── Falling petals ──
(function createPetals() {
  const container = document.getElementById('petals');
  const colors = ['#f9c5d1', '#e8637a', '#fde8c8', '#d4edd9', '#f5b8c4', '#fcd5ba'];
  const count = 22;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const size = Math.random() * 18 + 8; // 8–26px
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 8 + 7; // 7–15s
    const color = colors[Math.floor(Math.random() * colors.length)];

    petal.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      background: ${color};
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
    `;

    container.appendChild(petal);
  }
})();

// ── Scroll-reveal cards ──
(function initReveal() {
  const targets = document.querySelectorAll('.value-card, .gift-card');

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
})();

// ── CTA form ──
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '¡Listo! Te enviaremos las mejores ideas de regalo 💗';
  e.target.reset();
}

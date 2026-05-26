/* ============================================================
   City Gold Mobile Store — Main JavaScript
   ============================================================ */

'use strict';

/* ── UTILITIES ──────────────────────────────────────────────── */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const qs = id => document.getElementById(id);

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}
function getStars(r) {
  const full = Math.floor(r), half = r % 1 >= 0.5 ? 1 : 0, empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/* ── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initParticles();
  initCursor();
  initNavbar();
  initScrollProgress();
  initBackToTop();
  renderPhones(PHONES);
  renderAccessories(ACCESSORIES);
  renderReviews(REVIEWS);
  initFilters();
  initReviewsCarousel();
  initCounters();
  initReveal();
  initSmoothScroll();
  initMagneticButtons();
  initNotifications();
  initNavActiveLinks();
});

/* ── LOADER ─────────────────────────────────────────────────── */
function initLoader() {
  const loader = qs('loader');
  const bar = qs('loaderBar');
  const pct = qs('loaderPercent');
  if (!loader) return;
  let p = 0;
  const tick = setInterval(() => {
    p += Math.random() * 18 + 4;
    if (p >= 100) { p = 100; clearInterval(tick); }
    bar.style.width = p + '%';
    pct.textContent = Math.floor(p) + '%';
    if (p >= 100) {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        triggerHeroAnimations();
      }, 350);
    }
  }, 90);
  document.body.style.overflow = 'hidden';
}

function triggerHeroAnimations() {
  if (typeof gsap === 'undefined') return;
  gsap.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6, ease: 'back.out(1.7)' });
  gsap.from('.hero-title-line, .hero-title-gradient', {
    opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.1
  });
  gsap.from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out', delay: 0.4 });
  gsap.from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', delay: 0.6 });
  gsap.from('.hero-trust', { opacity: 0, y: 15, duration: 0.6, ease: 'power2.out', delay: 0.75 });
  gsap.from('.hero-phone', { opacity: 0, scale: 0.85, rotateY: -30, duration: 1.1, ease: 'back.out(1.4)', delay: 0.3 });
  gsap.from('.phone-glow-ring', { opacity: 0, scale: 0.6, duration: 1.2, stagger: 0.15, ease: 'power2.out', delay: 0.5 });
  gsap.from('.scroll-indicator', { opacity: 0, y: 10, duration: 0.6, ease: 'power2.out', delay: 1.1 });
}

/* ── CANVAS PARTICLES ───────────────────────────────────────── */
function initParticles() {
  const canvas = qs('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [], W, H, raf;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const colors = ['rgba(99,102,241,', 'rgba(139,92,246,', 'rgba(6,182,212,'];

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.3,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35 - 0.1,
      alpha: Math.random() * 0.6 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }

  for (let i = 0; i < 90; i++) particles.push(createParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
      if (p.y > H + 10) p.y = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
    });
    raf = requestAnimationFrame(draw);
  }
  draw();

  // Pause when tab hidden for perf
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else draw();
  });
}

/* ── CURSOR ─────────────────────────────────────────────────── */
function initCursor() {
  const cursor = qs('cursor');
  const follower = qs('cursorFollower');
  if (!cursor || !follower || window.matchMedia('(hover:none)').matches) return;

  let mx = 0, my = 0, fx = 0, fy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animate() {
    cursor.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    fx += (mx - fx) * 0.14;
    fy += (my - fy) * 0.14;
    follower.style.transform = `translate(${fx}px,${fy}px) translate(-50%,-50%)`;
    requestAnimationFrame(animate);
  }
  animate();

  const hoverTargets = 'a,button,.phone-card,.acc-card,.offer-card,.exp-card,.filter-btn,.brand-filter-btn';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) follower.classList.add('hovered');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) follower.classList.remove('hovered');
  });
}

/* ── NAVBAR ─────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = qs('navbar');
  const hamburger = qs('hamburger');
  const navMenu = qs('navMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navMenu.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

function initNavActiveLinks() {
  const sections = $$('section[id], .hero[id]');
  const links = $$('.nav-link');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const link = $$(`.nav-link[href="#${entry.target.id}"]`);
        link.forEach(l => l.classList.add('active'));
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => obs.observe(s));
}

/* ── SCROLL PROGRESS ────────────────────────────────────────── */
function initScrollProgress() {
  const bar = qs('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

/* ── BACK TO TOP ────────────────────────────────────────────── */
function initBackToTop() {
  const btn = qs('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 500), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── SMOOTH SCROLL ──────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 72;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
  });
}

/* ── REVEAL ON SCROLL ───────────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });

  $$('.reveal').forEach(el => obs.observe(el));

  const cardObs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        cardObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  $$('.reveal-card').forEach(el => cardObs.observe(el));
}

/* ── GSAP SCROLL ANIMATIONS ─────────────────────────────────── */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Stats count-up with GSAP
  $$('.stat-item').forEach(el => {
    const numEl = el.querySelector('.stat-number');
    const target = parseInt(el.dataset.count);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => gsap.to({val:0}, {
        val: target, duration: 1.6, ease: 'power2.out',
        onUpdate: function() { numEl.textContent = Math.floor(this.targets()[0].val) + (el.dataset.suffix || ''); }
      })
    });
  });

  // Section headers
  gsap.utils.toArray('.section-header').forEach(el => {
    gsap.from(el.children, {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%', once: true }
    });
  });
});

/* ── COUNTER FALLBACK (no GSAP) ─────────────────────────────── */
function initCounters() {
  if (typeof gsap !== 'undefined') return; // GSAP handles it
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const numEl = el.querySelector('.stat-number');
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let start = 0;
      const step = target / 60;
      const id = setInterval(() => {
        start += step;
        if (start >= target) { start = target; clearInterval(id); }
        numEl.textContent = Math.floor(start) + suffix;
      }, 25);
      obs.unobserve(el);
    });
  }, { threshold: 0.3 });
  $$('.stat-item').forEach(el => obs.observe(el));
}

/* ── RENDER PHONES ──────────────────────────────────────────── */
function renderPhones(phones) {
  const grid = qs('phonesGrid');
  if (!grid) return;
  grid.innerHTML = phones.map(ph => `
    <article class="phone-card reveal-card" data-category="${ph.category}" data-brand="${ph.brand}"
      role="article" aria-label="${ph.name} - ${formatPrice(ph.price)}">
      ${ph.badge ? `<span class="phone-badge" aria-label="${ph.badge}">${ph.badge}</span>` : ''}
      ${ph.trending ? `<span class="trending-badge" aria-label="Trending"><i class="fas fa-fire" aria-hidden="true"></i> Trending</span>` : ''}
      <div class="phone-mockup-wrap" aria-hidden="true">
        <div class="phone-mockup-small" style="background:${ph.gradient}">
          <div class="phone-mockup-screen"></div>
          <div class="phone-mockup-shimmer"></div>
        </div>
      </div>
      <div class="phone-brand">${ph.brand}</div>
      <h3 class="phone-name">${ph.name}</h3>
      <div class="phone-price-row">
        <span class="phone-price">${formatPrice(ph.price)}</span>
        <span class="phone-original-price">${formatPrice(ph.originalPrice)}</span>
        <span class="phone-discount">${ph.discount}% off</span>
      </div>
      <div class="phone-specs">
        <div class="spec-row"><i class="fas fa-microchip" aria-hidden="true"></i><span>${ph.specs.processor}</span></div>
        <div class="spec-row"><i class="fas fa-memory" aria-hidden="true"></i><span>${ph.specs.ram} • ${ph.specs.storage}</span></div>
        <div class="spec-row"><i class="fas fa-camera" aria-hidden="true"></i><span>${ph.specs.camera}</span></div>
        <div class="spec-row"><i class="fas fa-battery-three-quarters" aria-hidden="true"></i><span>${ph.specs.battery}</span></div>
      </div>
      <div class="phone-rating">
        <span class="stars" aria-label="${ph.specs.rating} stars">${getStars(ph.specs.rating)}</span>
        <span>${ph.specs.rating} (${ph.specs.reviews.toLocaleString('en-IN')} reviews)</span>
      </div>
      <div class="phone-actions">
        <a href="https://wa.me/919925388988?text=Hi%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(ph.name)}"
           class="btn-buy" target="_blank" rel="noopener noreferrer" aria-label="Enquire about ${ph.name} on WhatsApp">
          <i class="fab fa-whatsapp" aria-hidden="true"></i> Enquire
        </a>
        <a href="tel:+919925388988" class="btn-call" aria-label="Call to buy ${ph.name}">
          <i class="fas fa-phone" aria-hidden="true"></i> Call
        </a>
      </div>
    </article>
  `).join('');

  // Re-run reveal observer after render
  setTimeout(initReveal, 50);
}

/* ── RENDER ACCESSORIES ─────────────────────────────────────── */
function renderAccessories(items) {
  const grid = qs('accessoriesGrid');
  if (!grid) return;
  grid.innerHTML = items.map(item => `
    <article class="acc-card reveal-card" role="article" aria-label="${item.name}">
      <div class="acc-icon-wrap">
        <i class="fas ${item.icon}" aria-hidden="true"></i>
      </div>
      <div class="acc-brand">${item.brand}</div>
      <h3 class="acc-name">${item.name}</h3>
      <p class="acc-desc">${item.desc}</p>
      <div class="acc-price-row">
        <span class="acc-price">${formatPrice(item.price)}</span>
        <span class="acc-original">${formatPrice(item.originalPrice)}</span>
        <span class="acc-discount">${item.discount}% off</span>
      </div>
    </article>
  `).join('');
  setTimeout(initReveal, 50);
}

/* ── RENDER REVIEWS ─────────────────────────────────────────── */
function renderReviews(reviews) {
  const carousel = qs('reviewsCarousel');
  const dotsContainer = qs('reviewsDots');
  if (!carousel) return;

  carousel.innerHTML = reviews.map(rev => `
    <article class="review-card" aria-label="Review by ${rev.name}">
      <div class="review-header">
        <div class="review-avatar" aria-hidden="true">${rev.avatar}</div>
        <div class="review-meta">
          <strong>${rev.name}</strong>
          <span class="review-location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ${rev.location}</span>
        </div>
      </div>
      <div class="review-stars" aria-label="${rev.rating} out of 5 stars">${'★'.repeat(rev.rating)}</div>
      <p class="review-text">"${rev.text}"</p>
      <div class="review-footer">
        <span class="review-phone"><i class="fas fa-mobile-alt" aria-hidden="true"></i> ${rev.phone}</span>
        <span class="review-date">${rev.date}</span>
      </div>
    </article>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = reviews.map((_, i) =>
      `<button class="dot${i === 0 ? ' active' : ''}" aria-label="Review ${i + 1}" data-index="${i}"></button>`
    ).join('');
  }
}

/* ── REVIEWS CAROUSEL ───────────────────────────────────────── */
function initReviewsCarousel() {
  const carousel = qs('reviewsCarousel');
  const prev = qs('reviewPrev');
  const next = qs('reviewNext');
  const dotsContainer = qs('reviewsDots');
  if (!carousel) return;

  let current = 0;
  let autoTimer;
  const total = REVIEWS.length;

  function getVisible() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function slideTo(idx) {
    const cards = $$('.review-card', carousel);
    const cardW = cards[0] ? cards[0].offsetWidth + 24 : 344;
    current = Math.max(0, Math.min(idx, total - getVisible()));
    carousel.scrollTo({ left: current * cardW, behavior: 'smooth' });
    $$('.dot', dotsContainer).forEach((d, i) => d.classList.toggle('active', i === current));
  }

  next?.addEventListener('click', () => { slideTo(current + 1 >= total - getVisible() + 1 ? 0 : current + 1); resetAuto(); });
  prev?.addEventListener('click', () => { slideTo(current - 1 < 0 ? total - getVisible() : current - 1); resetAuto(); });
  $$('.dot', dotsContainer).forEach(d => d.addEventListener('click', () => { slideTo(+d.dataset.index); resetAuto(); }));

  function startAuto() { autoTimer = setInterval(() => slideTo(current + 1 >= total - getVisible() + 1 ? 0 : current + 1), 4500); }
  function resetAuto() { clearInterval(autoTimer); startAuto(); }

  startAuto();
  carousel.addEventListener('touchstart', () => clearInterval(autoTimer), { passive: true });
  carousel.addEventListener('touchend', startAuto, { passive: true });
}

/* ── FILTERS ────────────────────────────────────────────────── */
function initFilters() {
  let activeCategory = 'all';
  let activeBrand = 'all';
  let searchQuery = '';

  function applyFilters() {
    const cards = $$('.phone-card');
    let visibleCount = 0;
    cards.forEach(card => {
      const cat = card.dataset.category;
      const brand = card.dataset.brand;
      const name = card.querySelector('.phone-name')?.textContent.toLowerCase() || '';
      const spec = card.querySelector('.spec-row span')?.textContent.toLowerCase() || '';
      const matchCat = activeCategory === 'all' || cat === activeCategory;
      const matchBrand = activeBrand === 'all' || brand === activeBrand;
      const matchSearch = !searchQuery || name.includes(searchQuery) || brand.toLowerCase().includes(searchQuery) || spec.includes(searchQuery);
      const show = matchCat && matchBrand && matchSearch;
      card.classList.toggle('hidden', !show);
      if (show) visibleCount++;
    });

    const viewBtn = qs('viewAllBtn');
    if (viewBtn) viewBtn.style.display = visibleCount >= PHONES.length ? '' : 'none';
  }

  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filter;
      applyFilters();
    });
  });

  $$('.brand-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.brand-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeBrand = btn.dataset.brand;
      applyFilters();
    });
  });

  const searchInput = qs('phoneSearch');
  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', e => {
      clearTimeout(debounce);
      debounce = setTimeout(() => { searchQuery = e.target.value.trim().toLowerCase(); applyFilters(); }, 280);
    });
  }

  const viewBtn = qs('viewAllBtn');
  if (viewBtn) {
    viewBtn.addEventListener('click', () => {
      $$('.phone-card.hidden').forEach(c => c.classList.remove('hidden'));
      viewBtn.style.display = 'none';
    });
  }
}

/* ── MAGNETIC BUTTONS ───────────────────────────────────────── */
function initMagneticButtons() {
  if (window.matchMedia('(hover:none)').matches) return;
  $$('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
      btn.style.transform = `translate(${x}px,${y}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

/* ── NOTIFICATIONS ──────────────────────────────────────────── */
function initNotifications() {
  const popup = qs('notifPopup');
  if (!popup) return;
  let notifIdx = 0;

  function showNotif() {
    const n = NOTIFICATIONS[notifIdx % NOTIFICATIONS.length];
    popup.querySelector('.notif-avatar').textContent = n.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    popup.querySelector('.notif-text').innerHTML = `<strong>${n.name}</strong> ${n.action} <em>${n.item}</em><span class="notif-time">${n.time}</span>`;
    popup.classList.add('show');
    notifIdx++;
    setTimeout(() => popup.classList.remove('show'), 4500);
  }

  // First show after 5s, then every 12s
  setTimeout(() => { showNotif(); setInterval(showNotif, 12000); }, 5000);
}

window.closeNotif = function() {
  const popup = qs('notifPopup');
  if (popup) popup.classList.remove('show');
};

const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
let savedMotion;
try { savedMotion = localStorage.getItem('estilo-motion'); } catch {}
let fullMotion = savedMotion ? savedMotion === 'full' : !preference.matches;
const motionToggle = document.querySelector('.motion-toggle');
function applyMotion() {
  document.body.classList.toggle('motion-full', fullMotion);
  if (motionToggle) {
    motionToggle.hidden = false;
    motionToggle.textContent = fullMotion ? 'Animações: completas' : 'Animações: suaves';
    motionToggle.setAttribute('aria-pressed', String(fullMotion));
    motionToggle.setAttribute('aria-label', fullMotion ? 'Ativar animações suaves' : 'Ativar animações completas');
  }
}
applyMotion();
motionToggle?.addEventListener('click', () => {
  fullMotion = !fullMotion;
  savedMotion = fullMotion ? 'full' : 'reduced';
  try { localStorage.setItem('estilo-motion', savedMotion); } catch {}
  applyMotion();
});
preference.addEventListener('change', event => {
  if (!savedMotion) { fullMotion = !event.matches; applyMotion(); }
});
let menuAnimation;
function setMenu(open, restoreFocus = false) {
  menuAnimation?.cancel();
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  if (open) nav.classList.add('open');
  if (window.innerWidth <= 1023 && typeof nav.animate === 'function') {
    const offset = fullMotion ? -12 : 0;
    menuAnimation = nav.animate(open
      ? [{opacity:0,transform:`translateY(${offset}px)`},{opacity:1,transform:'translateY(0)'}]
      : [{opacity:getComputedStyle(nav).opacity,transform:'translateY(0)'},{opacity:0,transform:`translateY(${offset}px)`}],
      {duration:open ? 320 : 220,easing:'cubic-bezier(.22,1,.36,1)'});
    menuAnimation.finished.then(() => {
      if (!open && menu.getAttribute('aria-expanded') === 'false') nav.classList.remove('open');
    }).catch(() => {});
  } else if (!open) nav.classList.remove('open');
  if (restoreFocus) menu.focus();
}
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') setMenu(false,true);
});
document.querySelectorAll('[data-wa],[data-service]').forEach(link => {
  const service = link.dataset.service;
  const text = service ? `Olá, Brenda! Vim pelo site do Atelier Estilo Único e gostaria de um orçamento para ${service}.` : 'Olá, Brenda! Vim pelo site do Atelier Estilo Único e gostaria de pedir um orçamento.';
  link.href = `https://wa.me/5531993121498?text=${encodeURIComponent(text)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#quote').addEventListener('submit', event => {
  event.preventDefault();
  const piece = document.querySelector('#piece').value;
  const service = document.querySelector('#service').value;
  const message = `Olá, Brenda! Vim pelo site do Atelier Estilo Único.\nPeça: ${piece}\nServiço: ${service}\nGostaria de conversar sobre um orçamento.`;
  const url = `https://wa.me/5531993121498?text=${encodeURIComponent(message)}`;
  const fallback = document.querySelector('#quote-fallback');
  fallback.href = url; fallback.target = '_blank'; fallback.rel = 'noopener noreferrer'; fallback.hidden = false;
  window.open(url,'_blank','noopener,noreferrer');
});
// Each item re-enters from the edge it came through, with a shorter exit.
// The page stays fully readable when JavaScript/IntersectionObserver is unavailable.
if ('IntersectionObserver' in window) {
  const targets = document.querySelectorAll(
    '.hero-top > *, .hero-line, .hero-copy > *, .hero-art, ' +
    '.section-intro > *, .service-list > details, .portfolio > .wrap > .chapter, ' +
    '.portfolio h2, .portfolio-intro, .gallery-main, .work-note > *, ' +
    '.mini-gallery > a, .instagram-link, .process > .chapter, .process > h2, ' +
    '.steps > article, .contact-copy > *, .address, .faq > h2, .faq > details'
  );
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const element = entry.target;
      const inside = entry.isIntersecting || element.contains(document.activeElement);
      element.classList.toggle('is-in', inside);
      if (!inside) {
        const above = entry.boundingClientRect.bottom < window.innerHeight / 2;
        element.classList.toggle('is-above', above);
        element.classList.toggle('is-below', !above);
      }
    });
  }, {threshold:0,rootMargin:'-6% 0px -6% 0px'});
  targets.forEach(element => {
    const index = Array.from(element.parentElement.children).indexOf(element);
    element.style.setProperty('--motion-delay', `${Math.min(index,3) * 80}ms`);
    element.classList.add('motion-item');
    if (element.matches('h1,h2,h3,.hero-line')) element.classList.add('motion-title');
    if (element.matches('.hero-art,.gallery-main,.mini-gallery > a')) element.classList.add('motion-photo');
    const rect = element.getBoundingClientRect();
    const inside = rect.bottom > window.innerHeight * .06 && rect.top < window.innerHeight * .94;
    element.classList.add(inside ? 'is-in' : rect.bottom <= 0 ? 'is-above' : 'is-below');
    observer.observe(element);
  });
  document.body.classList.add('motion-enabled');
  // Commit the initial state before enabling transitions.
  requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('motion-ready')));
  document.addEventListener('focusin', event => {
    event.target.closest('.motion-item')?.classList.add('is-in');
  });
  document.addEventListener('focusout', event => {
    const element = event.target.closest('.motion-item');
    if (!element) return;
    requestAnimationFrame(() => {
      if (element.contains(document.activeElement)) return;
      const rect = element.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight * .06 || rect.top >= window.innerHeight * .94) {
        element.classList.remove('is-in');
        element.classList.toggle('is-above',rect.bottom <= window.innerHeight * .06);
        element.classList.toggle('is-below',rect.top >= window.innerHeight * .94);
      }
    });
  });
}
document.querySelectorAll('.service-list details,.faq details').forEach(details => {
  details.addEventListener('toggle', () => {
    if (!details.open) return;
    const content = details.querySelector('.detail,p');
    content?.animate?.([
      {opacity:0,transform:fullMotion ? 'translateY(10px)' : 'none'},
      {opacity:1,transform:fullMotion ? 'translateY(0)' : 'none'}
    ],{duration:360,easing:'cubic-bezier(.22,1,.36,1)'});
  });
});

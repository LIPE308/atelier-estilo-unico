const menu=document.querySelector('.menu');
const nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');menu.focus()}});
document.querySelectorAll('[data-wa],[data-service]').forEach(a=>{const service=a.dataset.service;const text=service?`Olá, Brenda! Vim pelo site do Atelier Estilo Único e gostaria de um orçamento para ${service}.`:'Olá, Brenda! Vim pelo site do Atelier Estilo Único e gostaria de pedir um orçamento.';a.href=`https://wa.me/5531993121498?text=${encodeURIComponent(text)}`;a.target='_blank';a.rel='noopener noreferrer'});
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#quote').addEventListener('submit',e=>{e.preventDefault();const piece=document.querySelector('#piece').value;const service=document.querySelector('#service').value;const message=`Olá, Brenda! Vim pelo site do Atelier Estilo Único.\nPeça: ${piece}\nServiço: ${service}\nGostaria de conversar sobre um orçamento.`;const url=`https://wa.me/5531993121498?text=${encodeURIComponent(message)}`;const fallback=document.querySelector('#quote-fallback');fallback.href=url;fallback.target='_blank';fallback.rel='noopener noreferrer';fallback.hidden=false;window.open(url,'_blank','noopener,noreferrer')});

// Reveal individual elements once, as they enter the reading area.
// Reduced motion keeps a gentle fade, without any spatial movement.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const targets = document.querySelectorAll(
    '.section-intro > *, .service-list > details, .portfolio > .wrap > .chapter, ' +
    '.portfolio h2, .portfolio-intro, .gallery-main, .work-note > *, ' +
    '.mini-gallery > a, .instagram-link, .process > .chapter, .process > h2, ' +
    '.steps > article, .contact-copy > *, .address, .faq > h2, .faq > details'
  );
  const reveal = element => element.classList.add('is-visible');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        reveal(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  targets.forEach(element => {
    const siblingIndex = Array.from(element.parentElement.children).indexOf(element);
    element.style.setProperty('--reveal-delay', `${Math.min(siblingIndex, 2) * 65}ms`);
    element.classList.add('reveal-on');
    observer.observe(element);
  });
  // Keyboard navigation must never have to wait for a scroll animation.
  document.addEventListener('focusin', event => {
    const element = event.target.closest('.reveal-on');
    if (element) { reveal(element); observer.unobserve(element); }
  });
  motionPreference.addEventListener('change', event => {
    if (event.matches) { targets.forEach(reveal); observer.disconnect(); }
  });
}

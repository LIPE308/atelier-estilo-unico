const menu=document.querySelector('.menu');
const nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');menu.focus()}});
document.querySelectorAll('[data-wa],[data-service]').forEach(a=>{const service=a.dataset.service;const text=service?`Olá, Brenda! Vim pelo site do Atelier Estilo Único e gostaria de um orçamento para ${service}.`:'Olá, Brenda! Vim pelo site do Atelier Estilo Único e gostaria de pedir um orçamento.';a.href=`https://wa.me/5531993121498?text=${encodeURIComponent(text)}`;a.target='_blank';a.rel='noopener noreferrer'});
document.querySelector('#year').textContent=new Date().getFullYear();

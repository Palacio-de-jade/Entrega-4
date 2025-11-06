// NAV TOGGLE - adicione ao seu js/main.js
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  if(btn && mobileNav){
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      mobileNav.classList.toggle('open');
    });

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && mobileNav.classList.contains('open')){
        mobileNav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }
});


import { initRouter } from "./router.js";
import { initFormValidation } from "./formValidation.js";

// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌱 Aplicação iniciada");

  // Inicia o sistema SPA (router)
  initRouter();

  // Inicia validação de formulários
  initFormValidation();
});

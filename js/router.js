
import { templates } from "./templates.js";

export function initRouter() {
  const app = document.querySelector("#app");
  const links = document.querySelectorAll("a[data-route]");

  // Função para carregar páginas dinamicamente
  function navigateTo(route) {
    if (templates[route]) {
      app.innerHTML = templates[route];
      window.history.pushState({}, "", route);
      document.title = "Plataforma ONG | " + route.replace("/", "");
    } else {
      app.innerHTML = `<h2>Página não encontrada 😢</h2>`;
    }
  }

  // Eventos de navegação
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = link.getAttribute("href");
      navigateTo(route);
    });
  });

  // Lida com o botão "voltar" do navegador
  window.addEventListener("popstate", () => {
    const currentPath = window.location.pathname;
    navigateTo(currentPath);
  });

  // Carrega página inicial
  navigateTo(window.location.pathname === "/" ? "/index" : window.location.pathname);
}

// formValidation.js
import { saveProject, loadProjects } from "./storage.js";

export function initFormValidation() {
  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (form.id === "formProjeto") {
      e.preventDefault();
      validateForm(form);
    }
  });
}

function validateForm(form) {
  const nome = form.querySelector("#nomeProjeto");
  const desc = form.querySelector("#descProjeto");
  const cat = form.querySelector("#catProjeto");

  let valid = true;

  // Reset mensagens
  form.querySelectorAll(".field-error").forEach(el => el.textContent = "");

  // Nome
  if (nome.value.trim().length < 3) {
    document.querySelector("#erroNome").textContent = "O nome deve ter pelo menos 3 caracteres.";
    valid = false;
  }

  // Descrição
  if (desc.value.trim().length < 10) {
    document.querySelector("#erroDesc").textContent = "A descrição deve ter pelo menos 10 caracteres.";
    valid = false;
  }

  // Categoria
  if (cat.value === "") {
    document.querySelector("#erroCat").textContent = "Selecione uma categoria.";
    valid = false;
  }

  if (valid) {
    const projeto = {
      nome: nome.value.trim(),
      desc: desc.value.trim(),
      categoria: cat.value,
      data: new Date().toLocaleDateString("pt-BR")
    };

    saveProject(projeto);
    showToast("✅ Projeto cadastrado com sucesso!");
    form.reset();
  } else {
    showToast("⚠️ Corrija os campos destacados.");
  }
}

// Feedback visual (alert/toast)
function showToast(msg) {
  const container = document.querySelector(".toast-container") || createToastContainer();
  const toast = document.createElement("div");
  toast.className = "toast show";
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function createToastContainer() {
  const container = document.createElement("div");
  container.className = "toast-container";
  document.body.appendChild(container);
  return container;
}

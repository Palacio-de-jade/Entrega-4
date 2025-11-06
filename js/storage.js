// storage.js - gerenciamento de dados (localStorage)
export function saveProject(projeto) {
  const projetos = loadProjects();
  projetos.push(projeto);
  localStorage.setItem("projetos", JSON.stringify(projetos));
  renderProjects();
}

export function loadProjects() {
  return JSON.parse(localStorage.getItem("projetos")) || [];
}

export function renderProjects() {
  const container = document.querySelector("#listaProjetos");
  if (!container) return;

  const projetos = loadProjects();
  container.innerHTML = "";

  if (projetos.length === 0) {
    container.innerHTML = `<p class="text-muted">Nenhum projeto cadastrado ainda.</p>`;
    return;
  }

  projetos.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card col-span-4";
    card.innerHTML = `
      <div class="card__body">
        <h3 class="card__title">${p.nome}</h3>
        <p>${p.desc}</p>
        <span class="badge badge--primary">${p.categoria}</span>
        <p class="text-muted small mt-8">Adicionado em ${p.data}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

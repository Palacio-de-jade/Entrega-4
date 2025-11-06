// templates.js - define conteúdo de cada "página" SPA
export const templates = {
  "/index": `
    <section class="hero container">
      <div class="hero-body">
        <h1>Bem-vindo à Plataforma ONG</h1>
        <p class="lead">Conecte causas e pessoas para mudar o mundo.</p>
        <a href="/projetos" data-route class="btn">Ver Projetos</a>
      </div>
      <div class="hero-media">
        <img src="./img/hero.jpg" alt="Voluntários trabalhando">
      </div>
    </section>
  `,

  "/projetos": `
    <section class="container mt-24">
      <h2>Projetos Cadastrados</h2>
      <div class="grid-12 mt-16" id="listaProjetos">
        <!-- Os cards serão renderizados dinamicamente -->
      </div>
    </section>
  `,

  "/cadastro": `
    <section class="container mt-24 max-w-600">
      <h2>Cadastro de Projeto</h2>
      <form id="formProjeto" novalidate>
        <label class="form-label">Nome do Projeto</label>
        <input type="text" id="nomeProjeto" class="form-control" required minlength="3">
        <span class="field-error" id="erroNome"></span>

        <label class="form-label mt-16">Descrição</label>
        <textarea id="descProjeto" class="form-control" required minlength="10"></textarea>
        <span class="field-error" id="erroDesc"></span>

        <label class="form-label mt-16">Categoria</label>
        <select id="catProjeto" class="form-control" required>
          <option value="">Selecione...</option>
          <option value="educacao">Educação</option>
          <option value="saude">Saúde</option>
          <option value="meioambiente">Meio Ambiente</option>
        </select>
        <span class="field-error" id="erroCat"></span>

        <button type="submit" class="btn mt-16">Cadastrar Projeto</button>
      </form>
    </section>
  `
};

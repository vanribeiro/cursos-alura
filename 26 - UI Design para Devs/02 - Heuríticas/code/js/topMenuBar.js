const template = `
        <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <h1 class="m-0"><img class="d-block" src="./assets/logo-meteora.png" alt="Logo da loja Meteora"></h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item dropdown" id="menu-translation">
            <a 
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-globe"></i>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" data-language-to-translate="BR">Brasil</a></li>
              <li><a class="dropdown-item" href="#" data-language-to-translate="EUA">EUA</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Lojas</a>
          </li>
        </ul>
        <form class="d-flex form__search" role="search">
          <div class="form__input-search-group mr-1">
            <input id="input-search" class="form-control me-2 rounded-0" type="search" placeholder="Digite o produto" aria-label="Pesquisar">
            <div id="suggestions-search"></div>
          </div>
          <button class="btn btn-outline-light rounded-0" type="submit">Buscar</button>
        </form>
        <a title="sacola de compras" class="ps-2 pe-3 ms-3 bag-link " href="sacola.html">
          <div class="position-relative">
            <i class="bag-icon bi bi-cart2"></i>
            <span class="position-absolute top-0 start-100 badge translate-middle rounded-pill bag-items-counter-container">
              <span class="bag-items-counter">0</span>
              <span class="visually-hidden">itens na sacola</span>
            </span>        
          </div>
        </a>
      </div>
    </div>
`;

export const loadTopMenuBar = () => {
    const topMenuBarContainer = document.getElementById('top-bar-menu');
    topMenuBarContainer.innerHTML = template;
};
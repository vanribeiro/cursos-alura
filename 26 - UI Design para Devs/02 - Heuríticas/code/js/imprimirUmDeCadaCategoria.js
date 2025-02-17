import { adicionarProdutoAoLocalStorage } from "./adicionarProdutoAoLocalStorage.js";
import { getItemsFromLocalStorage, setItemsInLocalStorage } from "./localStorage.utils.js";

function adicionarProduto(camiseta) {
  adicionarProdutoAoLocalStorage({
    nome: camiseta.nome,
    preco: camiseta.preco,
    descricao: camiseta.descricao,
    imagens: camiseta.imagens
  });
}

function addFavoriteIcon(button, isFavorite) {
  !isFavorite
    ? button.innerHTML = "<i class='bi bi-heart'></i>"
    : button.innerHTML = "<i class='bi bi-heart-fill'></i>";
}

function isProductItemOnTheBag(produto) {
  const bag = getItemsFromLocalStorage('sacola');
  const itemsBagName = bag.map(item => item.nome);
  return itemsBagName.includes(produto.nome);
}

export function imprimirUmDeCadaCategoria(produtos) {
  const row = document.querySelector("#produtos");
  if(row) {
    for (const categoria in produtos.produtos) {
      if (produtos.produtos.hasOwnProperty(categoria)) {
        const produto = produtos.produtos[categoria][0];
        const col = document.createElement("div");
        const card = document.createElement("div");

        col.classList.add('col-12', 'col-md-6', 'col-xxl-4', 'pb-4');
        card.classList.add('card');

        row.appendChild(col);
        col.append(card);

        const images = `
          <img class="d-block d-md-none" src="${produto.imagens.mobile}" alt="${produto.nome}">
          <img class="d-none d-md-block d-xl-none" src="${produto.imagens.tablet}" alt="${produto.nome}">
          <img class="d-none d-xl-block" src="${produto.imagens.desktop}" alt="${produto.nome}">
        `;
  
        const cardBody = `
          <div class="card-body">
            <h5 class="card-title fw-bold">${produto.nome}</h5>
            <p class="card-text">${produto.descricao}</p>
            <p class="fw-bold">${produto.preco}</p>
            <button type="button" class="btn btn-primary botao-lilas rounded-0 border-0" data-bs-toggle="modal" data-bs-target="#modal${categoria}">Ver mais</button>
              <button type="button" class="favorite-button" id="favorite-btn-${produto.nome.replace(/\s+/g, "-")}">
                <i class="bi bi-heart"></i>
              </button>
          </div>
        `;
  
        card.innerHTML = images + cardBody;
  
        const modalContent = `
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-header-icon">
                <img src="assets/check-circle.svg">
                <h1 class="modal-title fs-5" id="modalLabel${categoria}">Confira detalhes sobre o produto</h1>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img class="modal-imagem" src="${produto.imagens.desktop}" alt="${produto.nome
          }">
              <div>
                <div id="mensagem-carrinho-${produto.nome.replace(/\s+/g, "-")}"></div>
                <h3>${produto.nome}</h3>
                <p class="modal-description">${produto.descricao}</p>
  
                <hr class="divider-principal">
  
                <p class="modal-price">${produto.preco}</p>
                <p class="modal-seller">Vendido e entregue por Riachuelo</p>
  
                <hr class="divider-secondary">
                <p><b>Cores</b></p>
                <form>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Amarelo
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                      Offwhite
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                    <label class="form-check-label" for="flexRadioDefault3">
                      Preto
                    </label>
                  </div>
                </form>
  
                <hr class="divider-secondary">
  
                <p><b>Tamanho</b></p>
                <form>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio1">
                    <label class="form-check-label" for="flexRadio1">
                      P
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio2">
                    <label class="form-check-label" for="flexRadio2">
                      M
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio3">
                    <label class="form-check-label" for="flexRadio3">
                      G
                    </label>
                  </div>
                </form>
              </div>
            </div>
      <div class="modal-footer">
              <button type="button" class="btn botao-lilas" id="adicionar-btn-${produto.nome.replace(/\s+/g, "-")}">Adicionar à sacola</button>
              <button type="button" class="favorite-button" id="favorite-btn-${produto.nome.replace(/\s+/g, "-")}">
                <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        `;
  
        const modal = `
          <div class="modal fade" id="modal${categoria}" tabindex="-1" aria-labelledby="modalLabel${categoria}" aria-hidden="true">
            <div class="modal-dialog">
              ${modalContent}
            </div>
          </div>
        `;
  
        document.body.insertAdjacentHTML("beforeend", modal);
  
        const botao = document.querySelector(`#adicionar-btn-${produto.nome.replace(/\s+/g, "-")}`);
        botao.addEventListener("click", () => adicionarProduto(produto));

        const favoriteButton = document.querySelector(`#favorite-btn-${produto.nome.replace(/\s+/g, "-")}`);
        favoriteButton.addEventListener("click", function () {
          const favorites = getItemsFromLocalStorage('favoritos');
          const index = favorites.indexOf(produto.nome);

          if(index !== -1) {
            favorites.splice(index, 1);
          } else {
            favorites.push(produto.nome);
          }

          setItemsInLocalStorage('favoritos', favorites);
          
          addFavoriteIcon(this, index === -1);
          
          const alertWarning = document.querySelector(`#mensagem-carrinho-${produto.nome.replace(/\s+/g, "-")}`);

          console.log(isProductItemOnTheBag(produto))
          if(isProductItemOnTheBag(produto)){
            alertWarning.innerHTML = '<div class="alert alert-warning" role="alert">Este produto já está no seu carrinho.</div>';
          }
          

        });


        if(card) {
          // Adicionando o container ao corpo da página
          row.appendChild(col);
        }
      }
    }

  }

}
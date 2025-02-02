import { carregarItensDaSacola } from "./carregarItensDaSacola.js";
import { imprimirCamisetas } from "./imprimirCamisetas.js";
import { imprimirUmDeCadaCategoria } from "./imprimirUmDeCadaCategoria.js";
import { getItemsFromLocalStorage } from "./localstorage.js";

function isPaginaCamisetas() {
  return window.location.pathname.includes("/camisetas.html");
}

function isPaginaSacola() {
  return window.location.pathname.includes("/sacola.html");
}

if (isPaginaSacola()) {
  carregarItensDaSacola();
}

function separarCamisetas(produtos) {
  const camisetas = produtos.produtos.camisetas;

  if (isPaginaCamisetas()) {
    imprimirCamisetas(camisetas);
  }
}

const products = document.getElementById('produtos');

const loadProducts = (localization = 'BR') => {
  if (products) {
    products.innerHTML = ''
  }

  let url = "./json/produtos.json";

  if(localization === 'EUA') {
    url = "./json/products.json";
  }

  fetch(url)
    .then(response => response.json())
    .then((produtosJSON) => {
      if (isPaginaCamisetas()) {
        separarCamisetas(produtosJSON);
      }
      imprimirUmDeCadaCategoria(produtosJSON);
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });

}

loadProducts();

const allLanguagesToTranslate = document.querySelectorAll('[data-language-to-translate]');

if(allLanguagesToTranslate) {
  allLanguagesToTranslate.forEach(language => 
    language.addEventListener('click', () => {
      const selectedLanguage = language.dataset.languageToTranslate;
      loadProducts(selectedLanguage);
    })
  );
}


const bagLink = document.querySelector('.bag-link');
const bagBadgeCounter = document.querySelector('.bag-items-counter');

if(bagLink) {
  const items = getItemsFromLocalStorage('sacola');
  if(items) {
    const itemsQuantity = items.length || 0;
  
    if(bagBadgeCounter) {
      bagBadgeCounter.innerText = itemsQuantity;
    }
  }
}
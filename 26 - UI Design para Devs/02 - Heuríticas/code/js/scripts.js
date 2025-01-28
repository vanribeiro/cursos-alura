
import { carregarItensDaSacola } from "./carregarItensDaSacola.js";
import { imprimirCamisetas } from "./imprimirCamisetas.js";
import { imprimirUmDeCadaCategoria } from "./imprimirUmDeCadaCategoria.js";
import { getItemsFromLocalStorage } from "./localstorage.js";


// Chama a função para carregar os itens da sacola ao carregar a página



// Função para verificar se a página atual é /camisetas.html
function isPaginaCamisetas() {
  return window.location.pathname.includes("/camisetas.html");
}

function isPaginaSacola() {
  return window.location.pathname.includes("/sacola.html");
}

if (isPaginaSacola()) {
  carregarItensDaSacola();
}

// Função para imprimir somente as camisetas
function separarCamisetas(produtos) {
  const camisetas = produtos.produtos.camisetas;

  // Verifica se a página atual é /camisetas.html
  if (isPaginaCamisetas()) {
    imprimirCamisetas(camisetas);
  }
}

fetch("./json/produtos.json")
  .then((response) => response.json())
  .then((produtosJSON) => {
    if (isPaginaCamisetas()) {
      separarCamisetas(produtosJSON);
    } 
    
    imprimirUmDeCadaCategoria(produtosJSON);
  })
  .catch((error) => console.error("Erro ao carregar o arquivo JSON:", error));

const bagLink = document.querySelector('.bag-link');
const bagBadgeCounter = document.querySelector('.bag-items-counter');

if(bagLink) {
  const items = getItemsFromLocalStorage('sacola');
  const itemsQuantity = items.length || 0;

  if(bagBadgeCounter) {
    bagBadgeCounter.innerText = itemsQuantity;
  }
  // console.log()
}
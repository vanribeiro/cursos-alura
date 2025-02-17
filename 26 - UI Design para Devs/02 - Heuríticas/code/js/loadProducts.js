import { imprimirUmDeCadaCategoria } from "./imprimirUmDeCadaCategoria.js";
import { isPaginaCamisetas, separarCamisetas } from "./utils.js";

export const loadProducts = (localization = 'BR') => {
  const products = document.getElementById('produtos');
  
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
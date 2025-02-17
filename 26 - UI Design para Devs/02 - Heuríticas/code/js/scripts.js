import { bagBadgeCounterProducts } from "./badgeBagCounter.js";
import { carregarItensDaSacola } from "./carregarItensDaSacola.js";
import { loadProducts } from "./loadProducts.js";
import { initSuggestionsSearch } from "./suggestionSearch.js";
import { loadTopMenuBar } from "./topMenuBar.js";
import { translateProducts } from "./translation.js";
import { isPaginaSacola } from "./utils.js";

if (isPaginaSacola()) {
  carregarItensDaSacola();
}

window.addEventListener('load', () => {
  loadTopMenuBar();
  initSuggestionsSearch()
  loadProducts();
  translateProducts();
  bagBadgeCounterProducts();
});
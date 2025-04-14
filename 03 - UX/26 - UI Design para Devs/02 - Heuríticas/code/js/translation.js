import { loadProducts } from "./loadProducts.js";

export const translateProducts = () => {
    const menuTranslate = document.getElementById('menu-translation');
    
    if(menuTranslate) {

      const allLanguagesToTranslate = document.querySelectorAll('[data-language-to-translate]');

      allLanguagesToTranslate.forEach(language => 
        language.addEventListener('click', () => {
          const selectedLanguage = language.dataset.languageToTranslate;
          loadProducts(selectedLanguage);
        })
      );
    }
    
}
import { getItemsFromLocalStorage } from "./localStorage.utils.js";

export const bagBadgeCounterProducts = () => {

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
}

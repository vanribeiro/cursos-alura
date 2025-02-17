export const initSuggestionsSearch = () => {
    const inputSearch = document.querySelector("#input-search");
    
    if(inputSearch) {
        const divSuggestions = document.querySelector("#suggestions-search");
        
        inputSearch.addEventListener("input", () => {
          const searchTerm = inputSearch.value.trim();
        
          if (searchTerm) {
            const suggestions = ["Camiseta", "Calça", "Sapato"];
        
            const suggestionsHTML = suggestions
                .filter(suggestion => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(suggestion => `<div class="suggestion">${suggestion}</div>`)
                .join("");
            
            divSuggestions.innerHTML = suggestionsHTML;
        
            } else {
              divSuggestions.innerHTML = "";
            }
        });
    
    }
}

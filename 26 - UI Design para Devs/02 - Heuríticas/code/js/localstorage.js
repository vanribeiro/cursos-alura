export const getItemsFromLocalStorage = (key) => {
    const item = JSON.parse(localStorage.getItem(key));
    if(item !== null || item !== undefined) {
        return item;
    }
    return [];
}
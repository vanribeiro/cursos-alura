export const getItemsFromLocalStorage = (key) => {
    const item = JSON.parse(localStorage.getItem(key));
    if(item === null || item === undefined) {
        return [];
    }
    return item;
}

export const setItemsInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
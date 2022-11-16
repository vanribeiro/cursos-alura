import { configureStore } from '@reduxjs/toolkit';
import categoriasSlices from "./reducers/categorias";
import itensSlice from './reducers/itens';

const store = configureStore({
    reducer: {
        categorias: categoriasSlices,
        itens: itensSlice
    }
});

export default store;
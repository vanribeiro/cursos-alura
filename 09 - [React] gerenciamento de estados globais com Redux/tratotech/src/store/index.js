import { configureStore } from '@reduxjs/toolkit';
import categoriasSlices from "./reducers/categorias";
import itensSlice from './reducers/itens';
import carrinhoSlice from './reducers/carrinho';
import buscaSlice from './reducers/busca';

const store = configureStore({
    reducer: {
        categorias: categoriasSlices,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice
    }
});

export default store;
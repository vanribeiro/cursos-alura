import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import IFiltroDeEventos from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./seletores";

const listaDeEventosState = atom<IEvento[]>({
	key: 'listaDeEventosState',
	default: eventosAsync
});


const filtroDeEventos = atom<IFiltroDeEventos>({
	key: 'filtroDeEventos',
	default: {}
})

export { listaDeEventosState, filtroDeEventos };

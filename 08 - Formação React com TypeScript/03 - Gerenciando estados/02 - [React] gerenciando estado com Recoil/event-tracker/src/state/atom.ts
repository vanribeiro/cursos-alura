import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import IFiltroDeEventos from "../interfaces/IFiltroDeEventos";

const listaDeEventosState = atom<IEvento[]>({
	key: "listaDeEventosState",
	default: [
		{
			descricao: "Estudar React",
			inicio: new Date("2022-10-27T09:00"),
			fim: new Date("2022-10-27T13:00"),
			completo: false,
			id: 1642342747,
		},
		{
			descricao: "Estudar Recoil",
			inicio: new Date("2022-10-28T09:00"),
			fim: new Date("2022-10-28T11:00"),
			completo: false,
			id: 1642342959,
		},
	],
});


const filtroDeEventos = atom<IFiltroDeEventos>({
	key: 'filtroDeEventos',
	default: {}
})

export { listaDeEventosState, filtroDeEventos };

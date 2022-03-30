import React, { ChangeEvent } from "react";
import style from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
	busca: string;
	setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ({ busca, setBusca }: Props) => {
	const handlerChangeBusca = (evento: ChangeEvent<HTMLInputElement>) =>
		setBusca(evento.target.value);

	return (
		<div className={style.buscador}>
			<input type="text" value={busca} onChange={handlerChangeBusca} />
			<CgSearch size={20} color="#4c4d5e" />
		</div>
	);
};

export default Buscador;

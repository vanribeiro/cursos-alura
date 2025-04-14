import React from "react";
import filtros from "./filtros.json";
import style from "./Filtros.module.scss";
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
	filtro: number | null;
	setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros = ({ filtro, setFiltro }: Props) => {
	const selecionarOpcao = (opcao: IOpcao) => {
		return filtro !== opcao.id ? setFiltro(opcao.id) : setFiltro(null);
	};

	return (
		<div className={style.filtros}>
			{filtros.map((opcao) => {
				return (
					<button
						className={classNames({
							[style.filtros__filtro]: true,
							[style["filtros__filtro--ativo"]]: filtro === opcao.id
						})}
						key={opcao.id}
						onClick={() => selecionarOpcao(opcao)}>
						{opcao.label}
					</button>
				);
			})}
		</div>
	);
};

export default Filtros;

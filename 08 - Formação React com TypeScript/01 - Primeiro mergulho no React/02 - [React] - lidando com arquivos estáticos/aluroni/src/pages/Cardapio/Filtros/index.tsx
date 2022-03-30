import filtros from "./filtros.json";
import style from "./Filtros.module.scss";

// import { useState } from 'react';

type IOpcao = typeof filtros[0];

const Filtros = () => {
	const selecionarOpcao = (opcao: IOpcao) => {};

	return (
		<div className={style.filtros}>
			{filtros.map((opcao) => {
                console.log(opcao)
                return (
                
				<button
					className={style.filtros__filtro}
					key={opcao.id}
					onClick={() => selecionarOpcao(opcao)}>
					{opcao.label}
				</button>
			)})}
		</div>
	);
};

export default Filtros;

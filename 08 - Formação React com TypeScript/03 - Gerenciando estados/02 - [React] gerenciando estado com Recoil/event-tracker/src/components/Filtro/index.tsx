import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import IFiltroDeEventos from "../../interfaces/IFiltroDeEventos";
import { filtroDeEventos } from "../../state/atom";
import style from "./Filtro.module.scss";

const Filtro: React.FC = () => {
	const [data, setData] = useState("");
	const [completo, setCompleto] = useState(false);
	const [incompleto, setIncompleto] = useState(false);
	const setFiltroDeEvento =
		useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);

	const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		const filtro: IFiltroDeEventos = {};
		if (data) {
			filtro.data = new Date(data);
      filtro.completo = completo;
      filtro.incompleto = incompleto;
		} else {
			filtro.data = null;
      filtro.completo = null;
      filtro.incompleto = null;
		}

		setFiltroDeEvento(filtro);
	};

	return (
		<form className={style.Filtro} onSubmit={submeterForm}>
			<h3 className={style.titulo}>Filtrar por data</h3>
			<input
				type="date"
				name="data"
				className={style.input}
				onChange={(evento) => setData(evento.target.value)}
				placeholder="Por data"
				value={data}
			/>
			<div className={style.checkboxesContainer}>
				<label htmlFor="completos" className={style.checkbox}>
					<input
						id="completos"
						type="checkbox"
						onChange={(evento) =>
							setCompleto(evento.target.checked)
						}
					/>{" "}
					completo
				</label>
				<label htmlFor="incompletos" className={style.checkbox}>
					<input
						id="incompletos"
						type="checkbox"
						onChange={(evento) =>
							setIncompleto(evento.target.checked)
						}
					/>{" "}
					incompleto
				</label>
			</div>
			<br />
			<button className={style.botao}>Filtrar</button>
		</form>
	);
};

export default Filtro;

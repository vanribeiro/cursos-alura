import { ChangeEvent, FormEvent, useState } from "react";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({
	setTarefas,
}: {
	setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) => {
	const [titulo, setTitulo] = useState("");
	const [tempo, setTempo] = useState("00:00:00");

	const handleChangeTitulo = (event: ChangeEvent<HTMLInputElement>) => {
		setTitulo(event.target.value);
	};

	const handleChangeTempo = (event: ChangeEvent<HTMLInputElement>) => {
		setTempo(event.target.value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		setTarefas((tarefasAntigas) => [
			...tarefasAntigas,
			{
				titulo,
				tempo,
				selecionado: false,
				completado: false,
				id: uuidv4(),
			},
		]);
		setTitulo("");
		setTempo("00:00");
	};

	return (
		<form className={style.novaTarefa} onSubmit={handleSubmit}>
			<div className={style.inputContainer}>
				<label htmlFor="tarefa">Adicione um novo estudo</label>
				<input
					value={titulo}
					onChange={handleChangeTitulo}
					id="tarefa"
					name="tarefa"
					type="text"
					placeholder="O que você quer estudar?"
					required
				/>
			</div>
			<div className={style.inputContainer}>
				<label htmlFor="tempo">Tempo</label>
				<input
					value={tempo}
					onChange={handleChangeTempo}
					id="tempo"
					name="tempo"
					type="time"
					step="1"
					min="00:00:00"
					max="01:30:00"
					required
				/>
			</div>
			<Botao texto="Adicionar" type="submit" />
		</form>
	);
};

export default Formulario;

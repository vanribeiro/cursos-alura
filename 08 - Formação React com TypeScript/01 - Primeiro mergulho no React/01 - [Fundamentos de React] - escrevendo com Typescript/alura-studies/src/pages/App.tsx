import { useState } from "react";
import { ITarefa } from "../types/tarefas";
import Cronometro from "../components/Cronometro";
import Formulario from "./../components/Formulario";
import Lista from "./../components/Lista";
import style from "./App.module.scss";

function App() {
	const [tarefas, setTarefas] = useState<ITarefa[]>([]);
	const [selecionado, setSelecionado] = useState<ITarefa>();

	const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
		setSelecionado(tarefaSelecionada);
	}

	return (
		<div className={style.AppStyle}>
			<Formulario setTarefas={setTarefas} />
			<Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
			<Cronometro />
		</div>
	);
}

export default App;

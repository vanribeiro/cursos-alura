import { ITarefa } from "../../types/tarefas";
import style from "./Lista.module.scss";
import Item from "./Item";

interface Props {
	tarefas: ITarefa[],
	selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Lista = ({ tarefas, selecionaTarefa }: Props) => {

	return (
		<aside>
			<h2>Estudos do dia</h2>
			<ul className={style.listaTarefas}>
				{tarefas.map((tarefa, index) => {
					return (
						<>
							<Item
								selecionaTarefa={selecionaTarefa}
								id={tarefa.id}
								key={`${tarefa.id}-${index}`}
								titulo={tarefa.titulo}
								tempo={tarefa.tempo}
								completado={tarefa.completado}
								selecionado={tarefa.selecionado}
							/>
						</>
					);
				})}
			</ul>
		</aside>
	);
	
};

export default Lista;

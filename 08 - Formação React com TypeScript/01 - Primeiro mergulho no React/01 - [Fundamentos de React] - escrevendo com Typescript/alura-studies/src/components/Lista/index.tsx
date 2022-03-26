import { ITarefa } from "../../types/tarefas";
import style from "./Lista.module.scss";
import Item from "./Item";

const Lista = ({ tarefas }: { tarefas: ITarefa[] }) => {

	return (
		<aside>
			<h2>Estudos do dia</h2>
			<ul className={style.listaTarefas}>
				{tarefas.map((tarefa, index) => {
					return (
						<>
							<Item
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

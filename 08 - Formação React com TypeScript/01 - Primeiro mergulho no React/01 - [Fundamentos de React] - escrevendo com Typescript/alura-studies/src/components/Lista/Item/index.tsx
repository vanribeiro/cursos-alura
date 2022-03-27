import { ITarefa } from "../../../types/tarefas";
import style from "./../Lista.module.scss";

interface Props extends ITarefa {
	selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

const Item = ({ titulo, tempo, selecionado, completado, id, selecionaTarefa }: Props) => {
	
	console.log("item atual:", { titulo, tempo, selecionado, completado, id });

	return (
		<li
			className={style.item}
			onClick={() =>
				selecionaTarefa({titulo, tempo, selecionado, completado, id})
			}>
			<h3>{titulo}</h3>
			<span>{tempo}</span>
		</li>
	);
};

export default Item;

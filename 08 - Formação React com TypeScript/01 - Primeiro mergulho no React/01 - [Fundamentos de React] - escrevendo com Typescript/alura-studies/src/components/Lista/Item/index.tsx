import { ITarefa } from "../../../types/tarefas";
import style from "./../Lista.module.scss";

const Item = ({ titulo, tempo, selecionado, completado, id }: ITarefa) => {
    console.log('item atual:', { titulo, tempo, selecionado, completado, id })
	return (
		<li className={style.item}>
			<h3>{titulo}</h3>
			<span>{tempo}</span>
		</li>
	);
};

export default Item;

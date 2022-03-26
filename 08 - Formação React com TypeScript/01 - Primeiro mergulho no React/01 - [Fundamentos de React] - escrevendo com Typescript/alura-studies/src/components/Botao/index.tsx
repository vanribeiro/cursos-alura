import style from "./Botao.module.scss";

const Botao = ({
	texto,
	type,
}: {
	texto: string;
	type?: "button" | "submit" | "reset" | undefined;
}) => {
	return (
		<button className={style.botao} type={type}>
			{texto}
		</button>
	);
};

export default Botao;

import style from "./Botao.module.scss";

const Botao = ({
	texto,
	type,
	onClick,
}: {
	texto: string;
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
}) => {
	return (
		<button className={style.botao} type={type} onClick={onClick}>
			{texto}
		</button>
	);
};

export default Botao;

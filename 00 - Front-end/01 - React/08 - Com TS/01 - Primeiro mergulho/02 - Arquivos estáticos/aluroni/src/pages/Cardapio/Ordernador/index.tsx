import style from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import { Dispatch, SetStateAction, useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface IOrdenador {
	ordenador: string,
	setOrdenador: Dispatch<SetStateAction< string | string>>
}

const Ordenador = ({ ordenador, setOrdenador }: IOrdenador) => {

	const [aberto, setAberto] = useState(false);
	const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
	const handleClickButton = () => setAberto(!aberto);
	const handleBlurButton = () => setAberto(false);
	const handleClickOrdenador = (opcao: string) => setOrdenador(opcao);
	
	return (
		<button
			className={classNames({
				[style.ordenador]: true,
				[style["ordenador--ativo"]]: ordenador !== ""
			})}
			onClick={handleClickButton}
			onBlur={handleBlurButton}>
			<span>{nomeOrdenador || "Ordenar Por"}</span>
			{aberto ? (
				<MdKeyboardArrowUp size={20} />
			) : (
				<MdKeyboardArrowDown size={20} />
			)}
			<div
				className={classNames({
					[style.ordenador__options]: true,
					[style["ordenador__options--ativo"]]: aberto,
				})}>
				{opcoes.map((opcao) => {
					return (
						<div
							onClick={() => handleClickOrdenador(opcao.value)}
							className={style.ordenador__option}
							key={opcao.value}>
							{opcao.nome}
						</div>
					);
				})}
			</div>
		</button>
	);
};

export default Ordenador;

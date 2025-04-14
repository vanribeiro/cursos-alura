import styles from "./Header.module.scss";
import TituloComImagem from "./TituloComImagem";
import TituloSemImagem from "./TituloSemImagem";

const Header = ({ titulo, descricao, className = "", imagem }) => {
	return (
		<header className={styles.header}>
			{titulo && !imagem && (
				<TituloSemImagem descricao={descricao} titulo={titulo} />
			)}
			{titulo && imagem && (
				<TituloComImagem
					descricao={descricao}
					titulo={titulo}
					imagem={imagem}
					className={className}
				/>
			)}
		</header>
	);
};

export default Header;

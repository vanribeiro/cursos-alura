import Header from "components/Header";
import Item from "components/Item";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './Categoria.module.scss';

const Categoria = () => {
	const { nomeDaCategoria } = useParams();
	const { categoria, itens } = useSelector((state) => {

		const regexp = new RegExp(state.busca, 'i');

		return {
			categoria: state.categorias.find((categoria) => categoria.id === nomeDaCategoria),
			itens: state.itens.filter((item) => item.categoria === nomeDaCategoria && item.titulo.match(regexp)),
		}
	});

	return (
		<div>
			<Header
				titulo={categoria.nome}
				descricao={categoria.descricao}
				imagem={categoria.header}
			/>
			<div className={styles.itens}>
				{itens?.map(item => (
					<Item key={item.id} {...item}/>
				))}
			</div>
		</div>
	);
};

export default Categoria;

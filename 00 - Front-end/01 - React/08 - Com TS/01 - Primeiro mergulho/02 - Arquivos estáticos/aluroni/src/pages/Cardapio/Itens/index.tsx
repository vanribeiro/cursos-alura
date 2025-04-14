import style from "./Itens.module.scss";
import itens from "./itens.json";
import Item from "./Item";
import { useEffect, useState } from "react";

interface Props {
	busca: string;
	filtro: number | null;
	ordenador: string;
}

const Itens = (props: Props) => {
	const [lista, setLista] = useState(itens);
	const { busca, filtro, ordenador } = props;

	const testaBusca = (title: string) => {
		const regex = new RegExp(busca, "i");
		return regex.test(title);
	};

	const testaFiltro = (id: number) => {
		return filtro !== null ? filtro === id : true;
	};

	const ordernarDeFormaCrescente = (
		novaLista: typeof itens,
		tipoDeOrdenacao: "size" | "serving" | "price"
	) => {
		return novaLista.sort((a, b) =>
			a[tipoDeOrdenacao] > b[tipoDeOrdenacao] ? 1 : -1
		);
	};

	const ordenar = (novaLista: typeof itens) => {
		switch (ordenador) {
			case "porcao":
				return ordernarDeFormaCrescente(novaLista, "size");
			case "qtd_pessoas":
				return ordernarDeFormaCrescente(novaLista, "serving");
			case "preco":
				return ordernarDeFormaCrescente(novaLista, "price");
			default:
				return novaLista;
		}
	};

	useEffect(() => {
		const novaLista = itens.filter(
			(item) => testaBusca(item.title) && testaFiltro(item.category.id)
		);
		setLista(ordenar(novaLista));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [busca, filtro, ordenador]);

	return (
		<div className={style.itens}>
			{lista.map((item) => {
				return (
					<>
						<Item key={item.id} {...item} />
					</>
				);
			})}
		</div>
	);
};

export default Itens;

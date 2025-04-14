import styles from "./Busca.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { mudarBusca, resetarBusca } from "store/reducers/busca";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Busca = () => {
	const dispatch = useDispatch();
	const busca = useSelector(state => state.busca);
	const location = useLocation();
	useEffect(() => {
		dispatch(resetarBusca());
	}, [location.pathname, dispatch]);

	return (
		<div className={styles.busca}>
			<input
				value={busca}
				className={styles.input}
				placeholder="O que você procura..."
				onChange={evento => dispatch(mudarBusca(evento.target.value))}
			/>
		</div>
	);
};

export default Busca;

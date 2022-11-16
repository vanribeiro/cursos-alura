import styles from "./Item.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";

const iconeProps = {
	size: 24,
	color: "#041833",
};

const Item = ({ titulo, foto, preco, descricao, favorito }) => {
	return (
		<div className={styles.item}>
			<div className={styles["item-imagem"]}>
				<img src={foto} alt={titulo} />
			</div>
			<div className={styles["item-descricao"]}>
				<div className={styles["item-titulo"]}>
					<h2>{titulo}</h2>
					<p>{descricao}</p>
				</div>
				<div className={styles["item-info"]}>
					<div className={styles["item-preco"]}>
						{preco.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
					</div>
					<div className={styles["item-acoes"]}>
						{favorito ? (
							<AiFillHeart
								{...iconeProps}
								color="#ff0000"
								className={styles["item-acao"]}
							/>
						) : (
							<AiOutlineHeart
								{...iconeProps}
								className={styles["item-acao"]}
							/>
						)}
						<FaCartPlus
							{...iconeProps}
							color={false ? "#1875E8" : iconeProps.color}
							className={styles["item-acao"]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;

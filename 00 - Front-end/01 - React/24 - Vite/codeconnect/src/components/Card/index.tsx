import "./style.css";
import CodeIcon from "./assets/code-icon.svg";
import CommentsIcon from "./assets/comments-icon.svg";
import ShareIcon from "./assets/share-icon.svg";
import { ICard } from "../../interfaces";


function Card({
	imagem_capa,
	titulo,
	resumo,
	compartilhamentos,
	linhas_de_codigo,
	comentarios,
	usuario
}: ICard) {

	return (
		<>
			<article className="card">
				<header className="card__header">
					<img
						className="card__cover-image"
						src={imagem_capa}
						alt="Capa do Card"
					/>
				</header>
				<div className="card__body">
					<div className="card__container">
						<h2 className="card__title">{titulo}</h2>
						<p className="card__text">{resumo}</p>
					</div>
				</div>
				<footer className="card__footer">
					<div className="card__container card__footer--container">
						<div className="card__footer__actions">
							<a className="card__footer__link" href="#">
								<img
									className="card__footer__icon"
									src={CodeIcon}
									alt="Ícone de Código"
								/>
								<span className="card__actions__number">
									{linhas_de_codigo}
								</span>
							</a>
							<a className="card__footer__link" href="#">
								<img
									className="card__footer__icon"
									src={ShareIcon}
									alt="Ícone de Compartilhamento"
								/>
								<span className="card__actions__number">
									{compartilhamentos}
								</span>
							</a>
							<a className="card__footer__link" href="#">
								<img
									className="card__footer__icon"
									src={CommentsIcon}
									alt="Ícone de Comentários"
								/>
								<span className="card__actions__number">
									{comentarios}
								</span>
							</a>
						</div>
						<div className="card__author">
							<a
								className="card__footer__link card__footer__link--author"
								href="#">
								<img
									className="card__footer__avatar"
									src={usuario.imagem}
									alt="Perfil de autor(a) do post"
								/>{" "}
								<span className="card__footer__author-username">
									{usuario.nome}
								</span>
							</a>
						</div>
					</div>
				</footer>
			</article>
		</>
	);
}

export default Card;

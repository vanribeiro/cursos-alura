import { AbBotao, AbCard } from "./../../vcr-comp-lib";
import IconeSacola from './../assets/sacola.svg';
import IconeFavoritos from './../assets/favoritos.svg';
import { IBookCard } from "./../interfaces";
import { Body, BookCardContainer, Footer, Header, IconsContainer, Img, PriceContainer } from "./style";

function BookCard({
    title,
    description,
    author,
    price,
}: IBookCard) {
    return (
		<>
			<AbCard>
				<>
					<BookCardContainer>
						<Header>
							<h3>Sobre o livro:</h3>
							<h2>{title}</h2>
						</Header>
						<Body>
							<p>{description}</p>
							<p>Por: {author}</p>
							<PriceContainer>
								<p>
									A partir de:
									<span>
										{" "}
										{price.toLocaleString("pt-br", {
											style: "currency",
											currency: "BRL",
										})}
									</span>
								</p>
							</PriceContainer>
						</Body>
						<Footer>
							<IconsContainer>
                                <a href="/">
                                    <Img
                                        src={IconeFavoritos}
                                        alt="Ícone favoritos"
                                    />
                                </a>
                                <a href="/">
                                    <Img
                                        src={IconeSacola}
                                        alt="Icone sacola de compras"
                                    />
                                </a>
							</IconsContainer>
							<AbBotao type="button" texto="Comprar" />
						</Footer>
					</BookCardContainer>
				</>
			</AbCard>
		</>
	);
}

export default BookCard;
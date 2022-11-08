import styled from "styled-components";
import logoDesktop from "./../../assets/logo-branco-vertical.png";
import logoMobile from "./../../assets/logo-branco-horizontal.png";
import hearderArt from "./../../assets/wavy-buddies-out-of-stock.png";
import { Box, ResponsiveImage } from "./../UI";

const RowFlex = styled.div`
	margin-top: 8%;
	display: flex;

	@media screen and (max-width: 991px) {
		flex-direction: column;
		justify-content: center;

		picture,
		figure {
			display: inherit;
			justify-content: center;
		}
	}

	@media screen and (min-width: 992px) {
		flex-direction: row;
		justify-content: space-around;
	}
`;

const Header = () => {
	return (
		<header>
			<Box>
				<RowFlex>
					<picture>
						<source
							srcSet={logoDesktop}
							media="(max-width: 1024px)"
						/>
						<ResponsiveImage
							src={logoMobile}
							alt="logo - título: sorteador de amigo secreto"
						/>
					</picture>
					<figure>
						<ResponsiveImage
							src={hearderArt}
							alt="Pessoa de cabelo cacheado segurando uma bolsa"
						/>
					</figure>
				</RowFlex>
			</Box>
		</header>
	);
};

export default Header;

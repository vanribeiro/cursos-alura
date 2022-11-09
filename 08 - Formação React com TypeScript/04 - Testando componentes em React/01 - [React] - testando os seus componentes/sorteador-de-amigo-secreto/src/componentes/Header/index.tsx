import styled from "styled-components";
import logoDesktop from "./../../assets/logo-branco-vertical.png";
import logoMobile from "./../../assets/logo-branco-horizontal.png";
import hearderArt from "./../../assets/wavy-buddies-out-of-stock.png";
import { Box, ResponsiveImage } from "../UI";

const RowFlex = styled.div`	
	display: flex;
	margin-top: 8%;

	@media screen and (max-width: 991px) {
		flex-direction: column;
		justify-content: center;
		position: relative;
		
		picture{
			display: inherit;
			justify-content: center;
			margin-bottom: -48px;
		}
	}
	
	@media screen and (min-width: 992px) {
		flex-direction: row;
		justify-content: space-around;
	}
	`;

const Figure = styled.figure`
	position: relative;
	display: inherit;
	align-items: flex-end;
	justify-content: center;
	margin: 0;
	padding: 0;
	position: relative;
	z-index: 1;
	
	@media screen and (min-width: 260px) {
		top: 18px;
	}

	@media screen and (min-width: 300px) {
		top: 20px;
	}

	@media screen and (min-width: 360px) {
		top: 24px;
	}

	@media screen and (min-width: 400px) {
		top: 25px;
	}

	@media screen and (min-width: 460px) {
		top: 29px;
	}
	
	@media screen and (min-width: 500px) {
		top: 32px;
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
					<Figure>
						<ResponsiveImage
							src={hearderArt}
							alt="Pessoa de cabelo cacheado segurando uma bolsa"
						/>
					</Figure>
				</RowFlex>
			</Box>
		</header>
	);
};

export default Header;

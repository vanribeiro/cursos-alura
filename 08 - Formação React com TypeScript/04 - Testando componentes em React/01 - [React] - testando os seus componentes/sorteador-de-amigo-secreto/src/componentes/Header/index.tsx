import logoDesktop from "./../../assets/logo-branco-vertical.png";
import logoMobile from "./../../assets/logo-branco-horizontal.png";
import hearderArt from "./../../assets/wavy-buddies-out-of-stock.png";
import { Box, ResponsiveImage } from "../UI";
import { Figure, RowFlex } from "./style";


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

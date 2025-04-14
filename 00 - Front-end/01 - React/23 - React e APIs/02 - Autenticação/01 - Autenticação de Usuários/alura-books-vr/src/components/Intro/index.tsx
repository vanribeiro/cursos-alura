import ImgLeft from './assets/ilustracao-esquerda.png';
import ImgRight from './assets/ilustracao-direita.png';
import { Banner, BannerText, Bg, H1, H2, ImageBackground, ImagesContainer } from "./style";

function Intro() {
    return (
        <Banner>
            <Bg>
                <ImageBackground>
                    <ImagesContainer>
                        <img src={ImgLeft} alt="Ilustração" />
                        <img src={ImgRight} alt="Ilustração" />
                    </ImagesContainer>
                </ImageBackground>
                <BannerText>
                    <H1>Já sabe por onde começar?</H1>
                    <H2>Encontre em nossa estante o que precisa para seu desenvolvimento!</H2>
                </BannerText>
            </Bg>
        </Banner>
	);
}

export default Intro;
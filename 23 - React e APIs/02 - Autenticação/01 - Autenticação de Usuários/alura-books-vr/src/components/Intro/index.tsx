import styled from "styled-components";
import ImgLeft from './assets/ilustracao-esquerda.png';
import ImgRight from './assets/ilustracao-direita.png';

const Banner = styled.section`
    position: relative;
    z-index: 0;
    margin: 0;
    padding: 0;
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
`;

const ImageBackground = styled.div`
    position: absolute;
    width: 100%;
    z-index: 1;
`;

const ImagesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    img{
        opacity: 0.1;
        max-width: 100%;
        max-height: 315px;

        @media screen and (max-width: 428px){
            width: 50%;
        }

        @media screen and (min-width: 429px){
            height: 315px;
        }

        @media screen and (min-width: 1728px){
            width: 25%;
        }
    }


`;

const Bg = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

    @media screen and (max-width: 428px){
        height: 215px;
    }

    @media screen and (min-width: 429px){
        height: 315px;
    }

    @media screen and (min-width: 1728px){
        height: 375px;
    }

`;

const BannerText = styled.div`
    position: relative;
    z-index: 2;
    color: #FFFFFF;
    letter-spacing: 0em;
    text-align: center;

    @media screen and (max-width: 428px){
        padding: 0 24px;
    }   

`;

const H1 = styled.h1`
    font-weight: 700;
    line-height: 27px;
    
    @media screen and (max-width: 428px){
        font-size: 18px;
        line-height: 27px;
    }

    @media screen and (min-width: 768px){
        font-size: 22px;
        line-height: 30px;
    }

    @media screen and (min-width: 1024px){
        font-size: 36px;
        line-height: 54px;
    }
`;

const H2 = styled.h2`
    font-weight: 500;
    line-height: 24px;
    font-size: 16px;

    @media screen and (min-width: 1024px){
        margin-top: -30px;
    }
`;

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
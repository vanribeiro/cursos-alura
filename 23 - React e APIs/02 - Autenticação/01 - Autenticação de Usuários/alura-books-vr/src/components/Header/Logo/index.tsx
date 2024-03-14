import styled from "styled-components";
import LogoIcone from './../assets/logo-icone.svg';
import LogoLetras from './../assets/logo-letras.svg';

const LogoContainer = styled.figure`
    margin: 0;
    padding: 0;
    margin-right: 24px;

    @media screen and (min-width: 1024px){
        padding-left: 80px;
    }

`;

const Img = styled.img`
    padding: 0 4px;
`;

const Letters = styled(Img)`

    @media screen and (max-width: 428px){
        display: none;
    }
`;


function Logo() {
    return (
        <LogoContainer>
            <a href="/">
                <Img src={LogoIcone} alt="Ícone do Logo" />
                <Letters src={LogoLetras} alt="Letras do Logo" />
            </a>
        </LogoContainer>
    );
}

export default Logo;
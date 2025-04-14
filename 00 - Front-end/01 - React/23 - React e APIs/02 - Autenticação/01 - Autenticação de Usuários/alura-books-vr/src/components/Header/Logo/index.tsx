import styled from "styled-components";
import LogoIcone from './../assets/logo-icone.svg';
import LogoLetras from './../assets/logo-letras.svg';

const LogoContainer = styled.figure`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    
    @media screen and (min-width: 769px){
        padding-left: 80px;
        margin-right: 24px;

        a{
            display: flex;
            margin-right: 8px;
        }
    }

`;

const Img = styled.img`
    padding: 0 4px;

    @media screen and (max-width: 767.99px){
        margin-left: 8px;
    }
`;

const Letters = styled(Img)`

    @media screen and (max-width: 767.99px){
        display: none;
    }
`;

function Logo() {

    return (
		<LogoContainer>
			<a href="/">
				<Img
					src={LogoIcone}
					height={40}
					width={40}
					alt="Ícone do Logo"
				/>
				<Letters src={LogoLetras} alt="Letras do Logo" />
			</a>
		</LogoContainer>
	);
}

export default Logo;
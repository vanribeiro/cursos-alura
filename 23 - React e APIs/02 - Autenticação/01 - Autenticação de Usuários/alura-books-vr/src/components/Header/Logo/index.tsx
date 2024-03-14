import styled from "styled-components";
import LogoIcone from './../assets/logo-icone.svg';
import LogoLetras from './../assets/logo-letras.svg';
import HamburgerBlueIcon from './../assets/hambuger-blue.svg';
import HamburgerWhiteIcon from './../assets/hamburger-white.svg';
import { useState } from "react";

const LogoContainer = styled.figure`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    
    @media screen and (min-width: 1024px){
        padding-left: 80px;
        margin-right: 24px;
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

const MenuButton = styled.button`
    background-color: white;
    border: none;
    height: 90px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    
    &:active{
        cursor: pointer;
        color: #FFFFFF;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        text-decoration: none;
    }

    @media screen and (min-width: 428px){
        display: none;

    }

`

function Logo() {
    const [menuIcon, setMenuIcon] = useState<string>(HamburgerBlueIcon);
    
    const handleClick = () => {
        menuIcon === HamburgerBlueIcon ?
        setMenuIcon(HamburgerWhiteIcon):
        setMenuIcon(HamburgerBlueIcon);
    }

    return (
		<LogoContainer>
			<MenuButton
				type="button"
				onClick={() => handleClick()}>
				<Img
					height={48}
					width={48}
					src={menuIcon}
					alt="Ícone do Menu"
				/>
			</MenuButton>
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
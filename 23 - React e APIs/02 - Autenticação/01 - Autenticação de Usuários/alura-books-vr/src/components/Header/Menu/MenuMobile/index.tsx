import { useState } from "react";
import styled from "styled-components";
import Submenu from "../Submenu";
import HamburgerBlueIcon from './../../assets/hambuger-blue.svg';
import HamburgerWhiteIcon from './../../assets/hamburger-white.svg';

const HamButtom = styled.button`
    background-color: white;
    border: none;
    height: 90px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:active,
    &:hover{
        cursor: pointer;
        color: #FFFFFF;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        text-decoration: none;
    }

    @media screen and (min-width: 769px){
        display: none;

    }

`;

const Img = styled.img`
    padding: 0 4px;
`;

function MenuMobile() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    
    const handleClick = () => {
        if(!openMenu){
            setOpenMenu(true);
        } else {
            setOpenMenu(false);
        }
    }
    
    return (
        <>
            <div className="menu-mobile">
                <HamButtom
                    type="button"
                    onClick={() => handleClick()}>
                        <Img src={openMenu ? HamburgerWhiteIcon : HamburgerBlueIcon}
                            className="hamburguer-icon"
                            alt="Ícone do menu" />
                    
                </HamButtom>
                <Submenu top={"90px"} left="0" hidden={!openMenu}/>
            </div>
        </>
	);
}

export default MenuMobile;
import styled from "styled-components";
import { Button, ResponsiveImage } from "../UI";

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 991px){
        flex-direction: column;
    }

    @media screen and (min-width: 992px){
        width: 100%;
        justify-content: space-between;
    }
`;

const BotaoIniciarBrincadeira = styled(Button)`
    background-color: rgba(254, 101, 43, 0.99);
    font-weight: 600;
    color: #FFFFFF;
    padding: 10px 26px;
    
    @media screen and (max-width: 991px){
        width: 155px;
        font-size: 16px;
        line-height: 24px;
        
        img{
            display: none;
        }
    }
    
    @media screen and (min-width: 992px){
        font-size: 20px;
        line-height: 30px;
        width: 351px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        letter-spacing: 0.0125em;
    }
`;

const FooterResponsiveImage = styled(ResponsiveImage)`
    
    @media screen and (max-width: 991px){
        width: 127px;
        margin-top: 28px;
    }
    
    @media screen and (min-width: 992px){
        width: 237px;
    }
    
`;

export {
    Footer,
    BotaoIniciarBrincadeira,
    FooterResponsiveImage
}
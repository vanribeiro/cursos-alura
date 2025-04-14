import styled from "styled-components";
import { ResponsiveImage } from "../UI";

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
    FooterResponsiveImage
}
import styled from "styled-components";

const FooterContainer = styled.footer`
    background: #F9F9F9;
    border: 1px solid #858585;
`;

const FooterContent = styled.div`
    height: 65px;
    
    align-items: center;
    padding-left: 24px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 599.99px){
        justify-content: left;
    }
    
    @media screen and (min-width: 600px){
        justify-content: center;
    }

`;

function Footer() {
    
    return (
        <FooterContainer>
            <FooterContent>
                <p>Grupo Alura</p>
            </FooterContent>
        </FooterContainer>
	);
}

export default Footer;
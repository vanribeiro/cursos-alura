import styled from "styled-components";

const Section = styled.footer`
    background: #F9F9F9;
    border: 1px solid #858585;
`;

const FooterContainer = styled.div`
    
`;

const MobileFooter = styled.div`
    height: 65px;
    
    align-items: center;
    padding-left: 24px;

    @media screen and (max-width: 599.99px){
        display: flex;
    }
    
    @media screen and (min-width: 600px){
        display: none;
    }

`;


function Footer() {

    
    return (
		<Section>
            <FooterContainer>
                <MobileFooter>
                    <p>Grupo Alura</p>
                </MobileFooter>
            </FooterContainer>
		</Section>
	);
}

export default Footer;
import styled from 'styled-components';
import IconeSacola from './../assets/sacola.svg';
import IconePerfil from './../assets/perfil.svg';
import IconeFavoritos from './../assets/favoritos.svg';

const Section = styled.section`
	height: 44px;
	display: flex;
	align-items: center;
	flex: 1;
	gap: 16px;

	span {
		display: none;
	}
    
	@media screen and (max-width: 428px) {
        padding-right: 16px;
    }

    @media screen and (min-width: 429px) {
        justify-content: flex-end;
        padding-right: 80px;
    }

	@media screen and (min-width: 1728px) {
        gap: 48px;
        width: 30%;

		span {
			display: block;
		}
	}
`;


const ActionItem = styled.div`
    height: 44px;

    display: inline-flex;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;


    button, a{

        display: inline-flex;
        align-items: center;
        gap: 8px;
        background-color: white;
        color: #000000;
        border: none;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
    }

`;


const Img = styled.img`
    height: 24px;
    width: 24px;
`;

const Favorites = styled(ActionItem)`

    @media screen and (min-width: 767.99px) {
        display: none;
    }
`;

function Action() {
    return (
        <Section>
            <Favorites>
                <a href="#">
                    <Img src={IconeFavoritos} alt="Ícone Favoritos" />
                </a>
            </Favorites>
            <ActionItem>
                <a href="#">
                    <Img src={IconeSacola} alt="Ícone Sacola" />
                    <span>Minha Sacola</span>
                </a>
            </ActionItem>
            <ActionItem>
                <button>
                    <Img src={IconePerfil} alt="Ícone Perfil" />
                    <span>Meu Perfil</span>
                </button>
            </ActionItem>
        </Section>
    );
}

export default Action;
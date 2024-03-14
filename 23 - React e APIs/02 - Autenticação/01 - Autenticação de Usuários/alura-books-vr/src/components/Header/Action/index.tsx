import styled from 'styled-components';
import IconeSacola from './../assets/sacola.svg';
import IconePerfil from './../assets/perfil.svg';
import IconeFavoritos from './../assets/favoritos.svg';

const Section = styled.section`
  height: 44px;
  width: 30%;
  padding-top: 24px;
  display: flex;
  align-items: center;
  flex: 1;
  gap: 48px;
`;


const ActionItem = styled.div`
    height: 44px;

    display: inline-flex;
    align-items: center;
    a{
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
`;


const Img = styled.img`
    height: 24px;
    width: 24px;
`;

const Favorites = styled.div`

    @media screen and (min-width: 428px) {
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
                <a href="#">
                    <Img src={IconePerfil} alt="Ícone Perfil" />
                    <span>Meu Perfil</span>
                </a>
            </ActionItem>
        </Section>
    );
}

export default Action;
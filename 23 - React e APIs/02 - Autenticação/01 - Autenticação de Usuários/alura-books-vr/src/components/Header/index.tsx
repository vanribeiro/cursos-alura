import styled from 'styled-components';
import Menu from "./Menu";
import Logo from './Logo';
import Action from './Action';
import MenuMobile from './Menu/MenuMobile';

const HeaderContainer = styled.header`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 769px) {
    
    .menu-mobile{
        display: none;
    }
  }
`;

function Header() {

    return (
        <HeaderContainer>
            <MenuMobile />
            <Logo />
            <Menu />
            <Action />
        </HeaderContainer>
    );
}

export default Header;
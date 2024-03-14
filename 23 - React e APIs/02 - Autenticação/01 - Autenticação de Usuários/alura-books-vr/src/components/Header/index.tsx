import styled from 'styled-components';
import Menu from "./Menu";
import Logo from './Logo';
import Action from './Action';

const HeaderContainer = styled.header`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
            <Action />
        </HeaderContainer>
    );
}

export default Header;
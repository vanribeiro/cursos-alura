import styled from 'styled-components';
import Menu from "../Menu";

const HeaderContainer = styled.header`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

function Header() {
    return (
        <HeaderContainer>
            <Menu />
        </HeaderContainer>
    );
}

export default Header;
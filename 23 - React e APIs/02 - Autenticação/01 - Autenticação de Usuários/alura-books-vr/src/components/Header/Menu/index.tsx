import styled from 'styled-components';
import Submenu from './Submenu';

const Nav = styled.nav`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 44px;
`;

const GroupLinks = styled.div`
    &:hover{
        cursor: pointer;
    }
`;

const Link = styled.a`
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding: 14px 16px;
    text-align: center;

    &:hover{
        cursor: pointer;
        color: #FFFFFF;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        text-decoration: none;
    }

`;

const HeadLink = styled(Link)`
    display: inline-flex;
`;



const ListLinks = styled.ul`
    display: flex;
    text-align: left;
    list-style: none;
    padding: 0;
    margin: 0;
    
    .submenu{
        display: none;
    }

    li:hover .submenu{
        display: block;
    }

    li:hover .link-head{
        cursor: pointer;
        color: #FFFFFF;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        text-decoration: none;
    }

    @media screen and (max-width: 767.99px) {
        display: none;
    }

`;


function Menu() {
    return (
		<Nav>
			<GroupLinks>
				<ListLinks>
					<li>
						<HeadLink className='link-head' href="#">Categorias</HeadLink>
						<Submenu />
					</li>
					<li>
						<HeadLink href="#">Favoritos</HeadLink>
					</li>
					<li>
						<HeadLink href="#">Minha estante</HeadLink>
					</li>
				</ListLinks>
			</GroupLinks>
		</Nav>
	);
}

export default Menu;
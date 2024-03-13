import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: start;
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
    }

`;

const HeadLink = styled(Link)`
    display: inline-flex;
`;


const ListLink = styled(Link)`
    display: flex;
`;

const SubmenuList = styled.ul`
    text-align: left;
    list-style: none;
    padding: 0;
    margin: 0;

    li a{
        padding: 16px 16px 16px 48px;
        justify-content: start;
    }
`;

function Menu() {
    return (
		<Nav>
			<GroupLinks>
				<HeadLink href="#">Categorias</HeadLink>
				<SubmenuList>
					<li>
						<ListLink href="#">Programação</ListLink>
					</li>
					<li>
						<ListLink href="#">Front-End</ListLink>
					</li>
					<li>
						<ListLink href="#">Infraestrutura</ListLink>
					</li>
					<li>
						<ListLink href="#">Business</ListLink>
					</li>
					<li>
						<ListLink href="#">Design & UX</ListLink>
					</li>
				</SubmenuList>
			</GroupLinks>
			<HeadLink href="#">Favoritos</HeadLink>
			<HeadLink href="#">Minha estante</HeadLink>
		</Nav>
	);
}

export default Menu;
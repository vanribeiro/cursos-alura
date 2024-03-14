import styled from "styled-components";

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

const List = styled.div`
    position: absolute;
    z-index: 1000;

    a{
        padding: 16px 16px 16px 40px;
        justify-content: start;
    }
`;


const ListItem = styled(Link)`
    display: flex;
`;

function Submenu() {
    return (
        <List className='submenu'>
            <ListItem href="#">Programação</ListItem>
            <ListItem href="#">Front-End</ListItem>
            <ListItem href="#">Infraestrutura</ListItem>
            <ListItem href="#">Business</ListItem>
            <ListItem href="#">Design & UX</ListItem>
        </List>
	);
}

export default Submenu;
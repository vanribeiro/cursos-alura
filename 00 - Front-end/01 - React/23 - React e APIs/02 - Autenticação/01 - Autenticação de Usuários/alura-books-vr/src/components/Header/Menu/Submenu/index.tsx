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

const List = styled.div<{$top?: string, $left?: string}>`
    background-color: #ffffff;
    position: absolute;
    z-index: 1000;
    top: ${props => props.$top};
    left: ${props => props.$left};
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.251);
    width: 300px;

    a{
        padding: 16px 16px 16px 40px;
        justify-content: start;
    }
`;


const ListItem = styled(Link)`
    display: flex;
`;

interface ISubmenu{
    top?: string;
    left?: string;
    className?: string;
    hidden?: boolean
}

function Submenu({ top, left, hidden }: ISubmenu) {
    return (
        <List $top={top} $left={left} hidden={hidden} className='submenu'>
            <ListItem href="#">Programação &#62;</ListItem>
            <ListItem href="#">Front-End &#62;</ListItem>
            <ListItem href="#">Infraestrutura &#62;</ListItem>
            <ListItem href="#">Business &#62;</ListItem>
            <ListItem href="#">Design & UX &#62;</ListItem>
        </List>
	);
}

export default Submenu;
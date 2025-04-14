import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dictionaryLinks from "./dictionaryLinks";

const Aside = styled.aside`

    @media screen and (max-width: 767.99px){
        width: 100%;
        margin-top: 32px;
    }

    @media screen and (min-width: 768px){
        width: 22%;
        margin-top: 40px;
    }

    @media screen and (min-width: 1024px){
        width: 24%;
    }

    @media screen and (min-width: 1728px){
        width: 14%;
    }

`;


const List = styled.ul`
    list-style: none;
    text-align: center;
    margin: 60px auto;
    padding: 0;
    width: 90%;
    
    @media screen and (max-width: 767.99px){
        width: 100%;
    }
    
`;

const Li = styled.li<{$active?: boolean}>`
    padding: 0;
    margin: 0;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${props => props.$active ? '#0E3E61' : '#C4C4C4'};

    a{
        width: 100%;
        height: 100%;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        color: #002F52;
    }
`;

function Sidebar() {
    const [pathname, setPathname] = useState<string>('');
    useEffect(() => {
        const currentPathname = window.location.pathname.replace('/', '');
        setPathname(currentPathname);
    }, []);

    return (
		<>
			<Aside>
				<nav>
					<List>
						{dictionaryLinks.map((link, index) => (
							<Li
								$active={pathname === link.to}
								key={`${link.to}-${index}`}>
								<Link to={`/${link.to}`}>{link.title}</Link>
							</Li>
						))}
					</List>
				</nav>
			</Aside>
		</>
	);
}

export default Sidebar;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Images = styled.div<{vwidth: number;}>`
    text-align: center;
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 599.99px) {
        white-space: nowrap;
        overflow-x: auto;
        width:  ${(props: any) => `${props.vwidth}px`};
        padding: 10px;

    }

    @media screen and (min-width: 600px) {
        align-items: center;
    }
    
`;

const Highlight = styled.img`

    @media screen and (max-width: 599.99px) {
        width: 179px;
        height: 249px;
    }

    @media screen and (min-width: 600px) {
        width: 280px;
        height: 388px;
    }


    @media screen and (min-width: 1728px) {
        width: 263px;
        height: 370px;
    }

`;


const Img = styled.img`
    @media screen and (max-width: 599.99px) {
        width: 179px;
        height: 249px;
    }
    
    @media screen and (min-width: 600px) {
        width: 179px;
        height: 249px;
    }

    @media screen and (min-width: 1024px) {
        width: 192px;
        height: 266px;
    }

    @media screen and (min-width: 1728px) {
        width: 180px;
        height: 254px;
    }
`;

interface ICarousel {
    src01: string;
    src02: string;
    src03: string;
}

function Carousel({src01, src02, src03}: ICarousel) {
    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        const handleViewportWidth = () => {
            const viewportWidth = window.innerWidth;
            setViewportWidth(viewportWidth);
        }
        handleViewportWidth();
        window.addEventListener('resize', handleViewportWidth);
    }, []);

    return (
		<>
			<CarouselContainer>
				<Images vwidth={viewportWidth}>
					<a href="/">
						<Img src={src01}></Img>
					</a>
					<a href="/">
						<Highlight src={src02}></Highlight>
					</a>
					<a href="/">
						<Img src={src03}></Img>
					</a>
				</Images>
			</CarouselContainer>
		</>
	);
}

export default Carousel;
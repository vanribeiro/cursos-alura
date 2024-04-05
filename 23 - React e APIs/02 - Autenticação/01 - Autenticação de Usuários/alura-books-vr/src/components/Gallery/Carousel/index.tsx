import styled from "styled-components";

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Images = styled.div`
    text-align: center;
    
    @media screen and (max-width: 599.99px) {
        white-space: nowrap;
        overflow-x: auto;
        display: flex;

    }
    
`;

const Img = styled.img`
    @media screen and (max-width: 599.99px) {
        width: 180px;
    }
    
    @media screen and (min-width: 600px) {
        max-width: 100%;
        width: 30%;
    }
`;

interface ICarousel {
    src01: string;
    src02: string;
    src03: string;
}

function Carousel({src01, src02, src03}: ICarousel) {
    return (
        <>
            <CarouselContainer>
                <Images>
                    <a href="/">
                        <Img src={src01}></Img>
                    </a>
                    <a href="/">
                        <Img src={src02}></Img>
                    </a>
                    <a href="/">
                        <Img src={src03}></Img>
                    </a>
                </Images>
            </CarouselContainer>
        </>
    )
}

export default Carousel;
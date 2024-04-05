import { ReactNode } from "react";
import styled from "styled-components";

const Section = styled.section`
    margin-top: 60px;
`;

const Header = styled.h2`
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    text-align: center;
    color: #EB9B00;
    text-transform: uppercase;
    margin-bottom: 24px;
`;

const Body = styled.section`
    background-color: #EBECEE;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 24px;
`;

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 428px) {
        flex-direction: column;
    }
    
    @media screen and (min-width: 429px) {
        flex-direction: column;
        max-width: 725px;
    }
    
	@media screen and (min-width: 1728px) {
        flex-direction: row;
        max-width: 1266px;
	}
`;

const BookCardContainer = styled.div`

    @media screen and (max-width: 428px) {
        padding: 24px;
    }

    @media screen and (min-width: 429px) {
        padding: 24px;
    }

	@media screen and (min-width: 1728px) {
        padding: 66px;
	}

`;

const CarouselContainer = styled.div`

    @media screen and (max-width: 428px) {

    }

    @media screen and (min-width: 429px) {

    }

	@media screen and (min-width: 1728px) {
        width: 50%;
	}

`;

interface IGallery {
    title: string;
    carousel?: ReactNode;
    bookCard?: ReactNode;
}

function Gallery({ title, carousel, bookCard } : IGallery) {
    return (
        <Section>
            <Header>{title}</Header>
            <Body>
                <Container>
                    <CarouselContainer>
                        {carousel}
                    </CarouselContainer>
                    <BookCardContainer>
                        {bookCard}
                    </BookCardContainer>
                </Container>
            </Body>
        </Section>
	);
}

export default Gallery;
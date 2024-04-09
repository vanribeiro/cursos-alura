import { bookElement } from "../../mock/data";
import Gallery from "../Gallery";
import BookCard from "../Gallery/BookCard";
import Carousel from "../Gallery/Carousel";
import Intro from "../Intro";
import Image01 from './../Gallery/assets/capa-01.png';
import Image02 from './../Gallery/assets/capa-02.png';
import Image03 from './../Gallery/assets/capa-03.png';
import styled from "styled-components";

const MainContainer = styled.main`
    position: relative;
`;

function Main() {

    const imagesBook01 = {
        src01: Image01,
        src02: Image02,
        src03: Image03
    }

    const imagesBook02 = {
        src01: Image01,
        src02: Image03,
        src03: Image02
    }

    return (
        <>
            <MainContainer>
                <Intro />
                <Gallery 
                    title="Últimos Lançamentos" 
                    bookCard={<BookCard {...bookElement} /> }
                    carousel={<Carousel {...imagesBook01} />}
                />
                <Gallery 
                    title="Mais Vendidos" 
                    bookCard={<BookCard {...bookElement} /> }
                    carousel={<Carousel {...imagesBook02} />}
                />
            </MainContainer>
        </>
    );
}

export default Main;
import { useEffect, useState } from "react";
import Gallery from "../Gallery";
import BookCard from "../Gallery/BookCard";
import Carousel from "../Gallery/Carousel";
import Intro from "../Intro";
import styled from "styled-components";
import { IBookCard } from "./../Gallery/interfaces";
import { localhost } from "../../service/api";

const MainContainer = styled.main`
    position: relative;
`;

function Main() {
    const [apiData, setApiData] = useState<Array<IBookCard>>([
		{ id: 0, title: "", description: "", author: "", price: 0 },
	]);

    useEffect(() => {
        
        fetch(`${localhost}/book-list`)
        .then(res => res.json())
        .then(data => setApiData(data))
        .catch(error => error);
        
    }, []);

    return (
        <>
            <MainContainer>
                <Intro />
                {
                    apiData.map((data) => {
                        if(data.id === 2)
                            return (
								<Gallery
									key={data.id}
									title="Últimos Lançamentos"
									bookCard={<BookCard {...data} />}
									carousel={
										<Carousel
											apiData={apiData}
										/>
									}
								/>
							);
                    })
                }
                {
                    apiData.map((data) => {
                        if(data.id === 2)
                            return (
								<Gallery
									key={data.id}
									title="Mais vendidos"
									bookCard={<BookCard {...data} />}
									carousel={
										<Carousel
											apiData={apiData}
										/>
									}
								/>
							);
                    })
                }


            </MainContainer>
        </>
    );
}

export default Main;
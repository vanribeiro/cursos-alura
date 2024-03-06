/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import Card from "../Card";
import './style.css';

const BASE_API = 'https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes';

function ListCards() {
    const [cardsData, setCardsData] = useState<unknown>([{}]);

    useEffect(() => {
        fetch(BASE_API)
            .then(response => response.json())
            .then(data => setCardsData(data))
            .catch(error => error);
    }, [])

    return (
		<section className="cards__container">
			{
                // @ts-expect-error
                cardsData.map((cardData: object, index: number) => (
                // @ts-ignore
				<Card {...cardData} key={index} />
			))}
		</section>
	);
}

export default ListCards;
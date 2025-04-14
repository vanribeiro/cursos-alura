/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SetStateAction, useEffect, useState } from "react";
import Card from "../Card";
import './style.css';
import { ICard } from "../../interfaces";
import Loader from "../Loader";
import { useFetchAPI } from "../hooks/useFetchAPI";



function ListCards() {
    const [data, setData] = useState<ICard[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(true);
    const [ response, isLoading ] = useFetchAPI();
    let content;

    useEffect(() => {
        response()
			.then((data: SetStateAction<ICard[]>) => setData(data))
			.catch((error: unknown) => {
				throw error;
			});
    }, [response]);


    if(isLoading) {
        content = <Loader />
    } else{
        content = data.map((cardData) => {
            const {
                id,
                imagem_capa,
                titulo,
                resumo,
                compartilhamentos,
                linhas_de_codigo,
                comentarios,
                usuario,
            } : ICard = cardData;
            return (
            
                <Card
                    id={id}
                    imagem_capa={imagem_capa}
                    titulo={titulo}
                    resumo={resumo}
                    compartilhamentos={compartilhamentos}
                    linhas_de_codigo={linhas_de_codigo}
                    comentarios={comentarios}
                    usuario={usuario}
                    key={id}
                />
            )
        });
    }
        return (
            <section className="cards__container">
                { content }
            </section>
        );
}



export default ListCards;
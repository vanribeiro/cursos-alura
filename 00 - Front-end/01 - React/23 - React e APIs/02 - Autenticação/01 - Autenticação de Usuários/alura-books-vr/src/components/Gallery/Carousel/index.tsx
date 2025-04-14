/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { IBookCard, ICarousel } from "./../interfaces";
import { CarouselContainer, Images, Img } from "./style";
import { Link } from "react-router-dom";

function Carousel({ apiData }: ICarousel) {
    const [viewportWidth, setViewportWidth] = useState(0);
    const PATH: string = 'http://localhost:5173/src/assets/';

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
				<Images width={viewportWidth}>
					{apiData.map((data: IBookCard) => 
                        (
                            <Link to="/" key={data.id}>
                                <Img
                                    src={`${PATH}${data.imageCover}`}
                                    alt={`Livro ${data.title}, por ${data.author}`}
                                    title={`Livro ${data.title}, por ${data.author}`} />
                            </Link>
                        )
                    )}
				</Images>
			</CarouselContainer>
		</>
	);
}

export default Carousel;
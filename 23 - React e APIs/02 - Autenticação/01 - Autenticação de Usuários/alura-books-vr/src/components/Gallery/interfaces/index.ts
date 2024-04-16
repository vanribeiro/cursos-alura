interface IBookCard {
    id: number;
    title: string;
    description: string;
    author: string;
    price: number;
    imageCover?: string;
}

interface ICarousel {
    apiData: IBookCard[];
}

export type {
    IBookCard,
    ICarousel
}
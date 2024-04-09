const bookElement = {
    about: "Sobre o livro:",
    title: "Liderança em Design",
    description: "Habilidades de gestão para alavancar sua carreira",
    author: "Vitor Zanini",
    price: 29.9,
    buttonLabel: "Comprar"
}

const tagList: Array<string> = [
    'Android', 'Marketing Digital', 'Agile',
    'Startups', 'HTML & CSS', 'Python', 'OO', 'Java'
];



const ordersBooks = [
    {
        orderNumber: 89019041,
        orderDate: '26/05/2022',
        total: 48,
        deliveryDate: '30/05/2022'
    },
    {
        orderNumber: 89019049,
        orderDate: '27/05/2022',
        total: 101.5,
        deliveryDate: '01/06/2022'
    },
    {
        orderNumber: 89019100,
        orderDate: '18/08/2022',
        total: 59.9,
        deliveryDate: '23/08/2022'
    },
];

export {
    bookElement,
    tagList,
    ordersBooks
}
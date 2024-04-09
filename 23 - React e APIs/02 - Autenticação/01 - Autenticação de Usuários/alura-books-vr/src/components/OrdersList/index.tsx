import styled from "styled-components";
import { ordersBooks } from "../../mock/data";
import OrderSummary from "./OrderSummary";

const Orders = styled.div`
    margin-top: 60px;
    margin-bottom: 60px;

    h2{
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
    }

    @media screen and (min-width: 768px) {
        width: 76%;
    }
`;

const List = styled.div`
    padding-left: 16px;
`;

function OrdersList() {

    return (
		<>
            <Orders>
                <h2>Pedidos</h2>
                <List>
                    {ordersBooks.map((order) => (
                        <OrderSummary
                            key={order.orderNumber}
                            order={order.orderNumber}
                            orderDate={order.orderDate}
                            total={order.total}
                            deliveryDate={order.deliveryDate}
                        />
                    ))}
                </List>
            </Orders>
		</>
	);
}

export default OrdersList;
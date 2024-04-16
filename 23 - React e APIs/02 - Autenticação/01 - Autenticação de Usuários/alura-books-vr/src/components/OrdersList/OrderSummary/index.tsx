import styled from "styled-components";
import { AbBotao } from "../../vcr-comp-lib";
import { IOrderSummary } from "../interface";

const Article = styled.article`
    border-bottom: 1px solid #326589;

    &:last-child{
        border-color: #FFFFFF;
    }


    h3{
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: #002F52;
    }

    p{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin: 0;
    }

    button[type="button"]{
        font-family: Poppins;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        padding: 8px 16px;
        
        @media screen and (max-width: 767px) {
            margin-bottom: 16px;
            width: 100%;
        }

    }


    @media screen and (max-width: 767.99px) {
        width: 90%;
        margin: auto;
    }

    @media screen and (min-width: 768px) {
        padding-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

`;

function OrderSummary({
    orderNumber, orderDate, total, deliveryDate
}: IOrderSummary) {

    return (
		<>
			<Article>
				<div>
					<h3>Resumo da Compra</h3>

					<p>
						Pedido: <strong>{orderNumber}</strong>
					</p>
					<p>
						Data do pedido: <strong>{orderDate}</strong>
					</p>
					<p>
						Valor total:{" "}
						<strong>
							{total.toLocaleString("pt-br", {
								style: "currency",
								currency: "BRL",
							})}
						</strong>
					</p>
					<p>
						Entrega realizada em: <strong>{deliveryDate}</strong>
					</p>
				</div>
				<AbBotao variante="primario" type="button" texto="Detalhes" />
			</Article>
		</>
	);
}

export default OrderSummary;
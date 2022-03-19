import { useState, useContext, createContext } from 'react';

const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

const PagamentoProvider = ({
    children
}) => {

    const tiposDePagamento = [
        {
            id: 1,
            nome: "Dinheiro",
            juros: 1
        },
        {
            id: 2,
            nome: "Boleto",
            juros: 1
        },
        {
            id: 3,
            nome: "PIX",
            juros: 1
        },
        {
            id: 4,
            nome: "Cartão de Crédito",
            juros: 1.3
        },
        {
            id: 5,
            nome: "Crediário",
            juros: 1.5
        }
    ];

    const [formaDePagamento, setFormaDePagamento] = useState(tiposDePagamento[0]);

    return (
        <PagamentoContext.Provider
            value={{
                tiposDePagamento,
                formaDePagamento,
                setFormaDePagamento
            }}
        >
            {children}
        </PagamentoContext.Provider>
    )
}

const usePagamentoContext = () => {
    const {                
        tiposDePagamento,
        formaDePagamento,
        setFormaDePagamento
    } = useContext(PagamentoContext);

    function mudarFormaDePagamento(id){
        const pagamentoAtual = tiposDePagamento.find(pagamento => pagamento.id === id);
        setFormaDePagamento(pagamentoAtual);
    }

    return{
        tiposDePagamento,
        formaDePagamento,
        mudarFormaDePagamento
    }
}


export{
    PagamentoContext,
    PagamentoProvider,
    usePagamentoContext
}
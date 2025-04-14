import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePagamentoContext } from './Pagamento';
import { UsuarioContext } from './Usuario';

const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
    const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
    return (
        <>
            <CarrinhoContext.Provider value={{
                carrinho, 
                setCarrinho,
                setQuantidadeProdutos,
                quantidadeProdutos,
                valorTotalCarrinho,
                setValorTotalCarrinho
            }}>
                {children}
            </CarrinhoContext.Provider>
        </>
    )
}

const useCarrinhoContext = () => {
    const { 
        carrinho, 
        setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotalCarrinho,
        setValorTotalCarrinho
    } = useContext(CarrinhoContext);
    const { formaDePagamento } = usePagamentoContext();
    const { setSaldo } = useContext(UsuarioContext);


    const mudarQuantidade = (id, quantidade) => {
        return carrinho.map(itemDoCarrinho => {
            if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
            return itemDoCarrinho;
        })
    }

    const adicionarProduto = (novoPoduto) => {
        const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoPoduto.id);

        if(!temOProduto){
          novoPoduto.quantidade = 1;
          return setCarrinho((carrinhoAnterior) => [...carrinhoAnterior, novoPoduto]);
        } 
    
        setCarrinho(mudarQuantidade(novoPoduto.id, 1))
    }

    const removerProduto = (id) => {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
        const ehOultimo = produto.quantidade === 1;

        if(ehOultimo){
            const carrinhoFiltering = carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id)
            return setCarrinho(carrinhoFiltering)
        }

        setCarrinho(mudarQuantidade(id, -1));
    }

    const efetuarCompra = () => {
        setCarrinho([]);
        setSaldo(saldoAtual => saldoAtual - valorTotalCarrinho);
    }

    useEffect(() => {

        const reducing = (contador, produto) => ({
            novaQuantidade: contador.novaQuantidade + produto.quantidade,
            novoTotal: contador.novoTotal + (produto.valor * produto.quantidade)
        });

        const { 
            novaQuantidade, 
            novoTotal 
        } = carrinho.reduce(reducing, {
            novaQuantidade: 0,
            novoTotal: 0
        });

        setQuantidadeProdutos(novaQuantidade);
        setValorTotalCarrinho(novoTotal * formaDePagamento.juros);

    }, [carrinho, setQuantidadeProdutos, setValorTotalCarrinho, formaDePagamento]);

    return {
        carrinho, setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotalCarrinho,
        adicionarProduto,
        removerProduto,
        efetuarCompra
    }
}

export {
    CarrinhoContext,
    CarrinhoProvider,
    useCarrinhoContext
}
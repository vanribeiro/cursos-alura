import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    return(
        <>
            <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
                {children}
            </CarrinhoContext.Provider>
        </>
    )
}

const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

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

    const removerProduto= (id) => {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
        const ehOultimo = produto.quantidade === 1;

        if(ehOultimo){
            return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id))
        }

        setCarrinho(mudarQuantidade(id, -1));
    }

    return {
        carrinho, setCarrinho,
        adicionarProduto,
        removerProduto
    }
}

export {
    CarrinhoContext,
    CarrinhoProvider,
    useCarrinhoContext,
}
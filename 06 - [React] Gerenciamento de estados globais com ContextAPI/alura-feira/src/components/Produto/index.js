import { Container } from './styles';
import React,{ memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCarrinhoContext } from '../../common/contexts/Carrinho';

function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {

  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);

  const handleClickAdicionar = () => adicionarProduto({nome, foto, id, valor, unidade});
  const handleClickRemover = () => removerProduto(id);
  
  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton 
            color="secondary"
            onClick={handleClickRemover}
            disabled={!produtoNoCarrinho}
          >
            <RemoveIcon />
          </IconButton>
          {produtoNoCarrinho?.quantidade || 0}
          <IconButton 
            color="primary"
            onClick={handleClickAdicionar}>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto);
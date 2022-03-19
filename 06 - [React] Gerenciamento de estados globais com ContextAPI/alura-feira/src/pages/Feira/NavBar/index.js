import React from 'react';
import { Nav } from './styles';
import { ReactComponent as Logo } from './../../../assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCarrinhoContext } from './../../../common/contexts/Carrinho';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const { quantidadeProdutos } = useCarrinhoContext();
  const history = useHistory();

  const handleClickCarrinho = () => {
    history.push('/carrinho');
  }

  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={quantidadeProdutos === 0}
        onClick={handleClickCarrinho}
      >
        <Badge
          color="primary"
          badgeContent={quantidadeProdutos}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}
import React,{ useContext } from 'react';
import {
  Container,
  Header,
  Lista,
} from './styles';
import feira from './feira.json';
import Produto from './../../components/Produto';
import NavBar from './NavBar';
import { UsuarioContext } from './../../common/contexts/Usuario';
import useFormatadorDeMoedas from './../../hooks/useFormatadorDeMoedas';

function Feira() {
  const { nome, saldo } = useContext(UsuarioContext);
  const { converteParaMoedaBrasileira } = useFormatadorDeMoedas();
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá, {nome}!</h2>
          <h3> Saldo: {converteParaMoedaBrasileira(saldo)}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
        {feira.map(produto => (
          <Produto
            {...produto}
            key={produto.id}
          />
        ))}
      </Lista>
    </Container>
  )
}

export default Feira;
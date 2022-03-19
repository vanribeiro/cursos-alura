import React, { useState, useContext, useMemo } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import Produto from 'components/Produto';
import { useHistory } from 'react-router-dom';
import { useCarrinhoContext } from 'common/contexts/Carrinho';
import { usePagamentoContext } from './../../common/contexts/Pagamento';
import { UsuarioContext } from 'common/contexts/Usuario';
import useFormatadorDeMoedas from './../../hooks/useFormatadorDeMoedas';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho, valorTotalCarrinho, efetuarCompra } = useCarrinhoContext();
  const { saldo = 0 } = useContext(UsuarioContext);
  const { formaDePagamento, tiposDePagamento, mudarFormaDePagamento } = usePagamentoContext();
  const history = useHistory();
  const total = useMemo(() => saldo - valorTotalCarrinho, [saldo, valorTotalCarrinho]);
  const { converteParaMoedaBrasileira } = useFormatadorDeMoedas();

  const handleClickVoltar = () => history.goBack();
  const handleChangeSelect = (event) => mudarFormaDePagamento(event.target.value);


  return (
    <Container>
      <Voltar onClick={handleClickVoltar}/>
      <h2>
        Carrinho
      </h2>
      {carrinho.map(produto => (
        <Produto 
          {...produto}
          key={produto.id}
        />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={formaDePagamento.id}
          onChange={handleChangeSelect}
        >
          {tiposDePagamento.map(tipoDePagamento => {
            return(
              <MenuItem 
                key={tipoDePagamento.id}
                value={tipoDePagamento.id}
              >
                {tipoDePagamento.nome}
              </MenuItem>
            )
          })}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>{converteParaMoedaBrasileira(valorTotalCarrinho)}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span>{converteParaMoedaBrasileira(saldo)}</span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span style={{color: `${total < 0 ? "#bf4b4b" : "#000000"}`}}> 
              {converteParaMoedaBrasileira(total)}
            </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          efetuarCompra();
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
        disabled={total < 0 || carrinho.length === 0}
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;
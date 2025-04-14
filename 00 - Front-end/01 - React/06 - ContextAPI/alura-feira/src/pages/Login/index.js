import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React,{ useContext } from 'react';
import { UsuarioContext } from './../../common/contexts/Usuario';


function Login() {
  const history = useHistory();
  const {nome, setNome, saldo, setSaldo} = useContext(UsuarioContext);

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  }

  const handleChangeSaldo = (event) => {
    setSaldo(event.target.value);
  }

  const handleClickAvancar = () => {
    history.push('/feira');
  }

  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          value={nome}
          onChange={handleChangeNome}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
        type="number"
        value={saldo}
        onChange={handleChangeSaldo}
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickAvancar}
        disabled={nome.length < 3}
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;
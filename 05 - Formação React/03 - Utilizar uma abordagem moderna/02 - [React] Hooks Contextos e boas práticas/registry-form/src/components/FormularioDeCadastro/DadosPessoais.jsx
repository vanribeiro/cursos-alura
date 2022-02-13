import React, { useState, useContext } from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Box,
} from "@mui/material";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: { valido: true, texto: "" },
    nome: { valido: true, texto: "" },
  });

  const sxBoxButton = { display: "flex", justifyContent: "space-between" };

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar(){
    for(let campo in erros){
      if(!erros[campo].valido){
        return false;
      }
    }
    return true
  }

  const handleNome = (event) => {
    setNome(event.target.value);
  };

  const handleSobrenome = (event) => {
    setSobrenome(event.target.value);
  };

  const handleCPF = (event) => {
    setCPF(event.target.value);
  };

  const handlePromocoes = (event) => {
    setPromocoes(event.target.checked);
  };

  const handleNovidades = (event) => {
    setNovidades(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(possoEnviar()){
      aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={nome}
        onChange={handleNome}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        value={sobrenome}
        onChange={handleSobrenome}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        value={cpf}
        onChange={handleCPF}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />

      <Box sx={sxBoxButton}>
        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              checked={promocoes}
              onChange={handlePromocoes}
              name="promocoes"
            />
          }
        />

        <FormControlLabel
          sx={{ flex: "1" }}
          label="Novidades"
          control={
            <Switch
              checked={novidades}
              name="novidades"
              onChange={handleNovidades}
            />
          }
        />

        <Button variant="contained" type="submit">
          Próximo
        </Button>
      </Box>
    </form>
  );
}

export default DadosPessoais;

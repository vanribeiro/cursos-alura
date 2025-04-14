import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function FormularioDeCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros]= useState({ cpf:{ valido:true, texto:"" } });

  const handleNome = (event) => {
    setNome(event.target.value);
  }

  const handleSobrenome = (event) => {
    setSobrenome(event.target.value);
  }

  const handleCPF = (event) => {
    setCPF(event.target.value);
  }

  const handlePromocoes = (event) => {
    setPromocoes(event.target.checked);
  }

  const handleNovidades = (event) => {
    setNovidades(event.target.checked);
  }

  const handleForm = (event) => {
    event.preventDefault();
    aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
  }

  return (
    <form
      onSubmit={handleForm}
    >
      <TextField
        value={nome}
        onChange={handleNome}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={handleSobrenome}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        />
      <TextField
        value={cpf}
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value);
          console.log(ehValido)
          setErros({ cpf: ehValido });
        }}
        onChange={handleCPF}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

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
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioDeCadastro;

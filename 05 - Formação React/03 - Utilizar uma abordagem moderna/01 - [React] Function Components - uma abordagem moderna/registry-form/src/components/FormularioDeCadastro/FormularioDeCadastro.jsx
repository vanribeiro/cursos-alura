import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function FormularioDeCadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCPF] = useState('');

  const handleNome = (event) => {
    let tempNome = event.target.value;
    if(tempNome.length >= 3){
      tempNome = tempNome.substring(0, 3);
    }
    setNome(tempNome);
  }

  const handleSobrenome = (event) => {
    setSobrenome(event.target.value);
  }

  const handleCPF = (event) => {
    setCPF(event.target.value);
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(`${nome} ${sobrenome} | CPF: ${cpf}`);
    }}>
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
        onChange={handleCPF}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked={true} />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked={true} />}
      />

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioDeCadastro;
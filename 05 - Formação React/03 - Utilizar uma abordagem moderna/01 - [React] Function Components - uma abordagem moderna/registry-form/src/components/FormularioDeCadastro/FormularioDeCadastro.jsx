import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function FormularioDeCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
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

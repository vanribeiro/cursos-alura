import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function DadosUsuario({aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleSenha = (event) => {
    setSenha(event.target.value);
  }

  const handleSubmit = (evento) =>{
    evento.preventDefault();
    aoEnviar({email, senha});
  }

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={handleEmail}
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        fullWidth
        margin="normal"
        value={senha}
        onChange={handleSenha}
      />
      
      <Button variant="contained" type="submit">
          Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;

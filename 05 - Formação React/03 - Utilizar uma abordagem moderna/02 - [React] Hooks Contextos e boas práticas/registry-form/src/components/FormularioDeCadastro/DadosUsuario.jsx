import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const[erros, validarCampos, possoEnviar] = useErros(validacoes);
  const sxBoxButton = { display: 'flex', justifyContent: 'flex-end' };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleSenha = (event) => {
    setSenha(event.target.value);
  }

  const handleSubmit = (evento) =>{
    evento.preventDefault();
    if(possoEnviar()){
      aoEnviar({email, senha});
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <TextField
        id="email"
        type="email"
        name="email"
        label="email"
        required
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={handleEmail}
      />
      <TextField
        id="senha"
        type="password"
        name="senha"
        label="senha"
        required
        variant="outlined"
        fullWidth
        margin="normal"
        value={senha}
        onChange={handleSenha}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
      />
      <Box sx={sxBoxButton}>
        <Button variant="contained" type="submit">
            Próximo
        </Button>
      </Box>
    </form>
  );
}

export default DadosUsuario;

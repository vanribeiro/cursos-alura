import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ senha:{ valido:true, texto:"" } });

  const validacoes = useContext(ValidacoesCadastro);

  const sxBoxButton = { display: 'flex', justifyContent: 'flex-end' };

  function validarCampos(event){
    const {name, value} = event.target; 
    const novoEstado = {...erros};
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

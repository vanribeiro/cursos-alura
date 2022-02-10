import React, { Component } from "react";
import FormularioDeCadastro from "./components/FormularioDeCadastro/FormularioDeCadastro";
import { Container, Typography } from "@mui/material";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <FormularioDeCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

const aoEnviarForm = (dados) => {
  console.log(dados);
};

const validarCPF = (cpf) => {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos" };
  } else{
    return { valido: true, texto: "" };
  }
  
};

export default App;

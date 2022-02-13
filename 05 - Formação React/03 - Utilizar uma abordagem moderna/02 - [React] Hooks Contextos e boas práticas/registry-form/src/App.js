import React, { Component } from "react";
import FormularioDeCadastro from "./components/FormularioDeCadastro/FormularioDeCadastro";
import { Container, Typography } from "@mui/material";
import { validarCPF, validarSenha, validarNome } from "./models/cadastro.js";
import "fontsource-roboto";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

// Link do curso: https://github.com/alura-cursos/1898-react-multpartForm/

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}
        >
          <FormularioDeCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

const aoEnviarForm = (dados) => {
  console.log(dados);
};

export default App;

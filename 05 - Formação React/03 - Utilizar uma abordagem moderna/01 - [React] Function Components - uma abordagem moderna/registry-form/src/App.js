import React, { Component } from "react";
import "./App.css";
import FormularioDeCadastro from "./components/FormularioDeCadastro/FormularioDeCadastro";
import { Container, Typography } from "@mui/material";
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <FormularioDeCadastro />
      </Container>
    );
  }
}

export default App;

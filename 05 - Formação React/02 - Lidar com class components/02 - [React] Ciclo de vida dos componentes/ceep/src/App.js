import React, { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from './components/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas';
import Categorias from './dados/Categorias';
import ArryDeNotas from './dados/Notas';

// Repositoio do curso:
// https://github.com/alura-cursos/1841-react-observable

// Ciclos de vida: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class App extends Component {
  constructor(){
    super();
    this.notas = new ArryDeNotas();
    this.categorias = new Categorias();
  }

  render(){
    return (
      <section className='conteudo'>
        <FormularioCadastro 
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className='conteudo-principal'>
          <ListaDeCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas 
            notas={this.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;

import React, { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from './components/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas';

//Componente statefull
class App extends Component {
  constructor(){
    super();
    this.state = {
      notas: [],
      categorias: []
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado =  { notas: novoArrayDeNotas}
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeDaCategoria){
    const novoArrayDeCategorias = [...this.state.categorias, nomeDaCategoria];
    const novoEstado = { ...this.state.categorias, categorias: novoArrayDeCategorias };
    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayDeNotas = this.state.notas;
    arrayDeNotas.splice(index, 1);
    this.setState({nota: arrayDeNotas});
  }

  render(){
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className='conteudo-principal'>
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas 
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;

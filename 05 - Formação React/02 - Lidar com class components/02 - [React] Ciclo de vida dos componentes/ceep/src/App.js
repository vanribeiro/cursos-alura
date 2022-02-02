import React, { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from './components/ListaDeNotas';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado =  { notas: novoArrayDeNotas}
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
        <ListaDeNotas 
          notas={this.state.notas}
          apagarNota={this.deletarNota.bind(this)}
        />
      </section>
    );
  }
}

export default App;

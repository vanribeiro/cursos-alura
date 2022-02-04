import React, { Component } from 'react';
import './estilo.css';

// Stateless Components não fazem gerenciamento de estado.
// Stateful fazem gerenciamento de estado.
class ListaDeCategorias extends Component{

    constructor(){
        super();
        this.state = { categorias: [] }
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    // https://pt-br.reactjs.org/docs/react-component.html#componentdidmount
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    // https://pt-br.reactjs.org/docs/react-component.html#componentwillunmount
    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }

    _handlerEventoInput(e){
        if(e.key === "Enter"){
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render(){
        return (
            <section className='lista-categorias'>
                <ul className='lista-categorias_lista'>
                    {
                        this.state
                            .categorias
                            .map((categoria, indice) => 
                                <li key={indice} className='lista-categorias_item'>
                                    {categoria}
                                </li>
                        )
                    }
                </ul>
                <input 
                    type="text"
                    className='lista-categorias_input'
                    placeholder='Adicionar categoria'
                    onKeyUp={this._handlerEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;
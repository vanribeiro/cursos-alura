import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem categoria";
        this.state = { categorias: [] }
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }
    
    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }

    _handleCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _handlerMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }
    
    _handlerMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
        evento.target.reset();
    }

    render(){
        return (
            <form 
                className='form-cadastro'
                onSubmit={this._criarNota.bind(this)}
            >
                <select 
                    onChange={this._handleCategoria.bind(this)}
                    className='form-cadastro_input'
                >
                    <option>Sem categoria</option>
                    {
                        this.state
                            .categorias
                            .map((categoria, indice) => 
                                <option key={indice}>
                                    {categoria}
                                </option>
                        )
                    }
                </select>
                <input 
                    className='form-cadastro_input'
                    type='text' 
                    placeholder='Título'
                    onChange={this._handlerMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    className='form-cadastro_input'
                    placeholder='Escreva sua nota...'
                    onChange={this._handlerMudancaTexto.bind(this)}
                />
                <button className='form-cadastro_input form-cadastro_submit'>
                    Criar Nota
                </button>
            </form>
        );
    }
    
}

export default FormularioCadastro;
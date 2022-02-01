import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
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
        this.props.criarNota(this.titulo, this.texto);
        evento.target.reset();
    }

    render(){
        return (
            <form 
                className='form-cadastro'
                onSubmit={this._criarNota.bind(this)}
            >
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
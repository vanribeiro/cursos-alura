import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component{
    constructor(){
        super();
        this.titulo = "";
        this.nota = "";
    }

    handlerMudancaTitulo(evento){
        this.titulo = evento.target.value;
        console.log(this.titulo);
    }

    render(){
        return (
            <form className='form-cadastro'>
                <input 
                    className='form-cadastro_input'
                    type='text' 
                    placeholder='Título'
                    onChange={this.handlerMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    className='form-cadastro_input'
                    placeholder='Escreva sua nota...' 
                />
                <button className='form-cadastro_input form-cadastro_submit'>
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
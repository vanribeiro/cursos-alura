import React, { Component } from 'react';
import CardNota from '../CardNota';
import './estilo.css';

class ListaDeNotas extends Component{
    constructor(){
        super();
        this.state ={ notas: [] };
        this._novasNotas = this._novasNotas.bind(this);
    }
    componentDidMount(){
        this.props.notas.inscrever(this._novasNotas);
    }
    
    componentWillUnmount(){
        this.props.notas.desinscrever(this._novasNotas);
    }

    _novasNotas(notas){
        this.setState({...this.setState, notas})
    }

    render(){
        return (
            <ul className='lista-notas'>
                {this.state.notas.map((nota, index) => {
                    return(
                        <li className='lista-notas_item' key={index}>
                            <CardNota
                                indice={index}
                                titulo={nota.titulo} 
                                texto={nota.texto}
                                categoria ={nota.categoria}
                                apagarNota={this.props.apagarNota}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }

}

export default ListaDeNotas;
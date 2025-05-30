import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

class NegociacoesService{

    public obterNegociacoesDoDia(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
        .then(response => response.json())
        .then((dados: NegociacoesDoDia[]) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(
                    new Date(), 
                    dadoDeHoje.vezes, 
                    dadoDeHoje.montante
                )
            })
        })
    }
}

export {
    NegociacoesService
}
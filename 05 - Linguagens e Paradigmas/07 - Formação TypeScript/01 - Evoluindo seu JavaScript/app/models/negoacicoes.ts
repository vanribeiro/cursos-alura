import Negociacao from "./negociacao.js";

class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}

export default Negociacoes;

/**
 * Isto:
 * private negociacoes: Array<Negociacao> = [];
 * 
 * Tem o mesmo efeito disto:
 * private negociacoes: Negociacao[] = [];
 * --------------------------------------------
 * 
 * Isto:
 * lista(): ReadonlyArray<Negociacao>{}
 * 
 * Tem o mesmo efeito disto:
 * lista(): readonly Negociacao[]{}
 */
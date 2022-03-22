class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
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

class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
export default Negociacao;
/**
 * Isto:
 * A classe atual como se encontra
 *
 * Tem o mesmo efeito disto:
 * class Negociacao{

        constructor(
            private readonly _data: Date,
            private readonly _quantidade: number,
            private readonly _valor: number
        ){}

        get volume(): number{
            return this._quantidade * this._valor;
        }
    }
 */ 

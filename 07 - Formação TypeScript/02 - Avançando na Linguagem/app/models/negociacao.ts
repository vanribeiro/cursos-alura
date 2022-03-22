class Negociacao{

    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
    ){}

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number{
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
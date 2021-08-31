class Negociacao{
    //Underline = convenção para não permitir alteração daquela propriedade
    //Isso sinaliza para o programador que ele não deve alterar a propriedade
    constructor(data, quantidade, valor){
        this._data =  new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    // Programação Defensiva
    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
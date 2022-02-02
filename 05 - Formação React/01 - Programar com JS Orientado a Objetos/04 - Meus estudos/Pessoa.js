class Pessoa{
    constructor(nome, telefone){
        this._nome = nome;
        this._telefone = telefone;
    }

    get nome (){
        return this._nome;
    }

    get telefone (){
        return this._telefone;
    }

    imprimeDados(){
        console.log(`Nome: ${this._nome} \nTelefone: ${this._telefone}`);
    }
}

export default Pessoa;
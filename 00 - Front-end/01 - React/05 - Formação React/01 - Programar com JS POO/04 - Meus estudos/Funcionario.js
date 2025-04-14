import Pessoa from "./Pessoa.js";

class Funcionario extends Pessoa{
    constructor(nome, telefone, matricula){
        super(nome, telefone);
        this._matricula = matricula;
    }

    get matricula (){
        return this._matricula;
    }

    imprimeDados(){
        console.log(`Nome: ${this._nome} \nTelefone: ${this._telefone}\nMatrícula: ${this._matricula}`);
    }
}

export default Funcionario;
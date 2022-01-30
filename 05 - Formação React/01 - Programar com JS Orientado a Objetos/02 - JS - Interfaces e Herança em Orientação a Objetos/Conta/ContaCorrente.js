import Conta from "./Conta.js";

class ContaCorrente extends Conta{
    static numerosDeConta = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numerosDeConta += 1;
    }

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}

export default ContaCorrente;
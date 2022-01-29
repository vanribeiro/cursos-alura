import Conta from "./Conta.js";

class ContaPoupanca extends Conta{

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    depositar(valor){
        if(valor >= 100) this._saldo += valor;
        return;
    }
}

export default ContaPoupanca;
import Cliente from "./Cliente.js";

class ContaCorrente{
    static numerosDeConta = 0;
    agencia;
    _cliente;

    // #saldo; Proposta de JS ainda não aprovada para atributos privados
    _saldo = 0; // Convenção da comunidade

    set cliente(novoValor){
        if(novoValor instanceof Cliente) this._cliente = novoValor;
    }

    get cliente(){ 
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numerosDeConta += 1;
    }

    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        // Early Return
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}

export default ContaCorrente;
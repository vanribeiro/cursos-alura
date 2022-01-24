class ContaCorrente{
    agencia;
    cliente;

    // #saldo; Proposta de JS ainda não aprovada para atributos privados
    _saldo = 0; // Convenção da comunidade

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
class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // #saldo; Proposta de JS ainda não aprovada para atributos privados
    _saldo = 0; // Convenção da comunidade

    sacar(valor){
        if(this._saldo >= valor) return this._saldo -= valor;
    }

    depositar(valor){
        // Early return
        if(valor <= 0) return;
        this._saldo += valor;
    }

}

const cliente01 = new Cliente();
cliente01.nome = "Ricardo";
cliente01.cpf = 111111111111;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);
//Classe Abstrata é classe que não pode ser instanciada, apenas herdada.
class Conta{
    constructor(saldo, cliente, agencia){
        if(this.constructor === Conta) {
            throw new Error("Você não deveria instanciar uma objeto do tipo Conta diretamente, pois esta é uma classe abstrata.");
        } 

        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;

    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente) this._cliente = novoValor;
    }

    get cliente(){ 
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Método abstrato é um método que é criado para ser sobrescrito e não ser chamado diretamente.
    sacar(valor){
        throw new Error("O método sacar() da Conta é abstrato");
    }
    
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}

export default Conta;
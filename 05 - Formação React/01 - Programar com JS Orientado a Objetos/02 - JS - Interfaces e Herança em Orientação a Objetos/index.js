import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';
import ContaPoupanca from './ContaPoupanca.js';
import Conta from './Conta.js';

const cliente01 = new Cliente("Ricardo", 11111111111);

const contaCorrenteRicardo = new Conta(0, cliente01, 1001);
contaCorrenteRicardo.depositar(1500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente01, 1001);

console.log(contaCorrenteRicardo);
console.log(contaPoupanca);
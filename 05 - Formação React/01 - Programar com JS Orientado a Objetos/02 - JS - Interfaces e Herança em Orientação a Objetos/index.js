import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';
import ContaPoupanca from './ContaPoupanca.js';

const cliente01 = new Cliente("Ricardo", 11111111111);

const contaCorrenteRicardo = new ContaCorrente(cliente01, 1001);
contaCorrenteRicardo.depositar(1500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(100, cliente01, 1001);
contaPoupanca.depositar(100);
contaPoupanca.sacar(15);

console.log(contaCorrenteRicardo);
console.log(contaPoupanca);
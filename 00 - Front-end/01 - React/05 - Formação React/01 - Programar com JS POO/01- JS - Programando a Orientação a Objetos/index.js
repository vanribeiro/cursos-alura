import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';

const cliente01 = new Cliente("Ricardo", 11111111111);
const cliente02 = new Cliente("Alice", 22222222222);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente01);
const contaCorrenteAlice = new ContaCorrente(1002, cliente02);

contaCorrenteRicardo.depositar(1500);
contaCorrenteAlice.depositar(600);

let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);

console.log(ContaCorrente.numerosDeConta);
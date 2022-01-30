import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';
import ContaSalario from './ContaSalario.js';

const cliente01 = new Cliente("Ricardo", 11111111111);

const contaCorrenteRicardo = new ContaCorrente(cliente01, 1001);
contaCorrenteRicardo.depositar(1500);
contaCorrenteRicardo.sacar(100);

const contaSalario = new ContaSalario(cliente01);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
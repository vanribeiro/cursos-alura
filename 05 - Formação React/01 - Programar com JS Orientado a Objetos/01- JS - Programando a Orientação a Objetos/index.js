import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';

const cliente01 = new Cliente();
cliente01.nome = "Ricardo";
cliente01.cpf = 11111111111;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente01;
contaCorrenteRicardo.depositar(1500);

const cliente02 = new Cliente();
cliente02.nome = "Alice";
cliente02.cpf = 22222222222;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1002;
contaCorrenteAlice.cliente = cliente02;
contaCorrenteAlice.depositar(600);


contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
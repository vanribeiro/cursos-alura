import Gerente from "./Funcionarios/Gerente.js";
import Diretor from "./Funcionarios/Diretor.js";
import SistemaDeAutenticacao from "./SistemaDeAutenticacao.js";
import Cliente from "./Cliente.js";

const diretor = new Diretor("Rodrigo", 10000, 11111111111);
diretor.cadastraSenha("123456789");

const gerente = new Gerente("Ricardo", 5000, 22222222222);
gerente.cadastraSenha("123456");

const cliente = new Cliente("Lais", 33333333333, "456")

const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, "123456");
console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, "456");

console.log(clienteEstaLogado);

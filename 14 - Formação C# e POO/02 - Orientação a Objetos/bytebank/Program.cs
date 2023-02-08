using bytebank.Contas;
using bytebank.Titular;

// ContaCorrente contaDoAndre = new ContaCorrente(15, "1010-X", "André Silva", 100);
// ContaCorrente contaDaMaria = new ContaCorrente(18, "1118-X", "Maria Santos", 300);

// Console.WriteLine("[Conta do André Silva]: " + contaDoAndre.saldo);
// contaDoAndre.Depositar(100);
// Console.WriteLine("[Conta do André Silva]: " + contaDoAndre.saldo);
// if(contaDoAndre.Sacar(100)){
//     Console.WriteLine("[Conta do André Silva]: " + contaDoAndre.saldo);
// } else{
//     Console.WriteLine("[Conta do André Silva]: " + "Saldo Insuficiente");
// }

// contaDoAndre.Transferir(50, contaDaMaria);
// Console.WriteLine("[Conta do André Silva]: " + contaDoAndre.saldo);
// Console.WriteLine("[Conta do Maria Santos]: " + contaDaMaria.saldo);

// Cliente cliente = new Cliente();
// cliente.nome = "André Silva";
// cliente.cpf = "12345678910";
// cliente.profissao = "Analista";

// ContaCorrente conta = new ContaCorrente();
// conta.titular = cliente;
// conta.numero_agencia = 15;
// conta.conta = "1010-X";

// ContaCorrente conta3 = new ContaCorrente();
// conta3.Numero_Agencia = 15;
// conta3.Conta = "1018-Y";
// conta3.SetSaldo(-10);
// Console.WriteLine(conta3.GetSaldo());
// Console.WriteLine(conta3.Numero_Agencia);
// Console.WriteLine(conta3.Conta);

ContaCorrente conta4 = new ContaCorrente(18, "1018-Y");
ContaCorrente conta5 = new ContaCorrente(19, "1019-Y");
ContaCorrente conta6 = new ContaCorrente(20, "1020-Y");

Console.WriteLine(ContaCorrente.TotalDeContasCriadas);

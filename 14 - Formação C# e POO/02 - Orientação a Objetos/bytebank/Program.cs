using bytebank;

ContaCorrente contaDoAndre = new ContaCorrente(15, "1010-X", "André Silva", 100);
ContaCorrente contaDaMaria = new ContaCorrente(18, "1118-X", "Maria Santos", 300);

Console.WriteLine("[Conta do André Silva]: " + contaDoAndre.saldo);
// contaDoAndre.Depositar(100);
// Console.WriteLine("[Conta do André Silva]: " + contaDoAndre.saldo);
// if(contaDoAndre.Sacar(100)){
//     Console.WriteLine("[Conta do André Silva]: " + contaDoAndre.saldo);
// } else{
//     Console.WriteLine("[Conta do André Silva]: " + "Saldo Insuficiente");
// }

contaDoAndre.Transferir(50, contaDaMaria);
Console.WriteLine("[Conta do André Silva]: " + contaDoAndre.saldo);
Console.WriteLine("[Conta do Maria Santos]: " + contaDaMaria.saldo);
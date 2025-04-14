// using csharp_exception.Contas;
// using csharp_exception.Exceptions;
using csharp_exception.Utils;

/*
try {
    ContaCorrente conta1 = new ContaCorrente(0, "1234-X");
    // conta1.Sacar(50);
    // Console.WriteLine(conta1.GetSaldo());
    // conta1.Sacar(150);
    // Console.WriteLine(conta1.GetSaldo());
} catch(ArgumentException ex) {
    Console.WriteLine("Parâmetro com erro" + ex.ParamName);
    Console.WriteLine("Não é possível criar uma conta com o número de agência menor ou igual a zero!");
    Console.WriteLine(ex.StackTrace);
    Console.WriteLine(ex.Message);
    //Message pega a mensagem passada pelo ArgumentException() quando o throw é usado
    //ParamName pega o argumento que está lançando a exceção
} catch (SaldoInsuficienteException erro){
    Console.WriteLine("Operação negada! Saldo Insuficiente!");
    Console.WriteLine(erro.Message);
}
*/

LeitorDeArquivo leitor = new LeitorDeArquivo("contas.txt");
try{
    
    leitor.LerProximaLinha();
    leitor.LerProximaLinha();
}
catch (IOException) {
    Console.WriteLine("Leitura de Arquivo Interrompida!");
}finally {
    leitor.Dispose();
}

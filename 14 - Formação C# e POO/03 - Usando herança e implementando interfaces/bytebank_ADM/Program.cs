using bytebank_ADM.Funcionarios;
using bytebank_ADM.Utilitario;

Funcionario funcionario = new Funcionario();
funcionario.Nome = "Pedro";
funcionario.Cpf = "12345678910";
funcionario.Salario = 2000;

Console.WriteLine(funcionario.Nome);
Console.WriteLine(funcionario.GetBonificacao());


Diretor diretora = new Diretor();
diretora.Nome = "Roberta";
diretora.Cpf = "99999999999";
diretora.Salario = 5000;

Console.WriteLine(diretora.Nome);
Console.WriteLine(diretora.GetBonificacao());

GerenciadorDeBonificacao gerenciador = new GerenciadorDeBonificacao();
gerenciador.Registrar(funcionario);
gerenciador.Registrar(diretora);

Console.WriteLine("Total de bonificações: " + gerenciador.TotalBonificacao);
using bytebank_ADM.Funcionarios;
using bytebank_ADM.Utilitario;
using bytebank_ADM.SistemaIterno;
using bytebank_ADM.Parceria;

#region 


Diretor diretora = new Diretor("99999999999");
diretora.Nome = "Roberta";

Console.WriteLine(diretora.Nome);
Console.WriteLine(diretora.GetBonificacao());

GerenciadorDeBonificacao gerenciador = new GerenciadorDeBonificacao();
gerenciador.Registrar(diretora);

Console.WriteLine("Total de bonificações: " + gerenciador.TotalBonificacao);
Console.WriteLine("Total de funcionários: " + Funcionario.TotalDeFuncionarios);

diretora.AumentarSalario();

Console.WriteLine("Salário Aumentado: " + diretora.Salario);
#endregion

void CalcularBonificacao() {
    GerenciadorDeBonificacao gerenciador = new GerenciadorDeBonificacao();

    Designer ulisses = new Designer("12345678910");
    ulisses.Nome = "Ulisses Souza";

    Diretor paula = new Diretor("99999999999");
    paula.Nome = "Paula Souza";

    Auxiliar igor = new Auxiliar("88888888888");
    igor.Nome = "Igor Silva";

    GerenteDeContas camila = new GerenteDeContas("88888888888");
    camila.Nome = "Camila Oliveira";

    gerenciador.Registrar(camila);
    gerenciador.Registrar(paula);
    gerenciador.Registrar(igor);
    gerenciador.Registrar(ulisses);

    Console.WriteLine("Total de Bonificação = " + gerenciador.TotalBonificacao);

}

CalcularBonificacao();

void UsarSistema() {
    SistemaInterno sistema = new SistemaInterno();

    Diretor ingrid = new Diretor("77777777777");
    ingrid.Nome = "Ingrid Muniz";
    ingrid.Senha = "Secreta123";

    sistema.Logar(ingrid, "Secreta123");

    GerenteDeContas ursula = new GerenteDeContas("66666666666");
    ursula.Nome = "Ursula Ruiz";
    ursula.Senha = "Secreta123";

    sistema.Logar(ursula, "Secreta12");

    ParceiroComercial caio = new ParceiroComercial();
    ursula.Nome = "Caio Silva";
    ursula.Senha = "Se123";

}

UsarSistema();
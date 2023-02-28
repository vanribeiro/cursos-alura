using CursoDesignPatternsI;
using CursoDesignPatternsI.impostos;
using CursoDesignPatternsI.investimentos;

Console.WriteLine("Hello, World!");

IImposto iss = new ISS();
IImposto icms = new ICMS();
IImposto iccc = new ICCC();

Orcamento orcamento = new Orcamento(3500);

CalculadorDeImpostos calculadora = new CalculadorDeImpostos();

calculadora.RealizaCalculo(iss, orcamento);
calculadora.RealizaCalculo(icms, orcamento);
calculadora.RealizaCalculo(iccc, orcamento);


Investimento investimento = new Investimento(1000);
IPerfilDeInvestidor conservador = new Conservador();
SimuladorDeInvestimentos simulador = new SimuladorDeInvestimentos();

simulador.RealizaCalculo(conservador, investimento);


using CursoDesignPatternsI;
using CursoDesignPatternsI.impostos;
using CursoDesignPatternsI.models;
using CursoDesignPatternsI.investimentos;

#region 
// IImposto iss = new ISS();
// IImposto icms = new ICMS();
// IImposto iccc = new ICCC();

// Orcamento orcamento = new Orcamento(3500);

// CalculadorDeImpostos calculadora = new CalculadorDeImpostos();

// calculadora.RealizaCalculo("ISS", iss, orcamento);
// calculadora.RealizaCalculo("ICMS", icms, orcamento);
// calculadora.RealizaCalculo("ICCC", iccc, orcamento);

// Investimento investimento = new Investimento(1000);
// IPerfilDeInvestidor conservador = new Conservador();
// IPerfilDeInvestidor moderado = new Moderado();
// IPerfilDeInvestidor arrojado = new Arrojado();
// SimuladorDeInvestimentos simulador = new SimuladorDeInvestimentos();

// simulador.RealizaCalculo("Conservador", conservador, investimento);
// simulador.RealizaCalculo("Moderado", moderado, investimento);
// simulador.RealizaCalculo("Arrojado", arrojado, investimento);
#endregion

CalculadorDeDescontos calculador = new CalculadorDeDescontos();
Orcamento orcamento = new Orcamento(1500.0);
orcamento.AdicionarItem(new Item("Caneta", 250.0));
orcamento.AdicionarItem(new Item("Lápis", 250.0));
orcamento.AdicionarItem(new Item("Borracha", 250.0));
orcamento.AdicionarItem(new Item("Papel", 250.0));
orcamento.AdicionarItem(new Item("Caderno", 250.0));
orcamento.AdicionarItem(new Item("Apontador", 250.0));

double desconto = calculador.Calcula(orcamento);
Console.WriteLine(desconto);
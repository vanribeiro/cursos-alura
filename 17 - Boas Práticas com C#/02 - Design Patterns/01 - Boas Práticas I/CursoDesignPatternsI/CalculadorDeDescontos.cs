using CursoDesignPatternsI;
using CursoDesignPatternsI.impostos;
using CursoDesignPatternsI.descontos;

namespace CursoDesignPatternsI;

public class CalculadorDeDescontos{

    public double Calcula(Orcamento orcamento)
    {
        IDesconto desconto5itens = new DescontoPorCincoItens();
        IDesconto descontoMais500Reais = new DescontoPorMaisDeQuinhentosReais();
        IDesconto descontoVendaCasada = new DescontoPorVendaCasada();
        IDesconto semDesconto = new SemDesconto();

        // Chain of Responsability
        // Quando usar: muitos regras de negócios com condições
        desconto5itens.Proximo = descontoMais500Reais;
        descontoMais500Reais.Proximo = descontoVendaCasada;
        descontoVendaCasada.Proximo = semDesconto;
        
        return desconto5itens.Desconta(orcamento);
    }
}
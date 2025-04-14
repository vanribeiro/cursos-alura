using CursoDesignPatternsI;
using CursoDesignPatternsI.models;

namespace CursoDesignPatternsI.descontos;

public class DescontoPorMaisDeQuinhentosReais: IDesconto
{
    public IDesconto Proximo { get; set; } = default!;
    public double Desconta(Orcamento orcamento)
    {
        if(orcamento.Itens.Count > 500.0){
            return orcamento.Valor * 0.07;
        } 

        return Proximo.Desconta(orcamento);
    }
}
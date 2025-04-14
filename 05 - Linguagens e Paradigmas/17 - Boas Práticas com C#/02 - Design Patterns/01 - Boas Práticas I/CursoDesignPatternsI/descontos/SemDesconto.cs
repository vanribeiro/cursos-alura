using CursoDesignPatternsI;
using CursoDesignPatternsI.models;

namespace CursoDesignPatternsI.descontos;

public class SemDesconto: IDesconto
{
    public IDesconto Proximo { get; set; } = default!;
    public double Desconta(Orcamento orcamento)
    {
        return 0;
    }
}
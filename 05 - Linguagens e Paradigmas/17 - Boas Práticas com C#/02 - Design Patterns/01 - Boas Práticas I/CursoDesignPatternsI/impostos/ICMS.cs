namespace CursoDesignPatternsI.impostos;

public class ICMS : IImposto {
    public double Valor { get; private set; }

    public double Calcula(Orcamento orcamento)
    {
        return (orcamento.Valor * 0.05) + 50;
    }
}
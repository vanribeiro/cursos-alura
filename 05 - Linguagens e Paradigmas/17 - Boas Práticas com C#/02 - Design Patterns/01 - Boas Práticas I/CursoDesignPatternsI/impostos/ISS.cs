namespace CursoDesignPatternsI.impostos;

public class ISS : IImposto{
    public double Valor { get; private set; }

    public double Calcula(Orcamento orcamento)
    {
        return orcamento.Valor * 0.06;
    }
}
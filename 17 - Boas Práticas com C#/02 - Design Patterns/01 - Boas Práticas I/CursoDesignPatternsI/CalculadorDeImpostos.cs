using CursoDesignPatternsI.impostos;

namespace CursoDesignPatternsI;

public class CalculadorDeImpostos{
    public double Valor { get; private set; }

    public void RealizaCalculo(IImposto imposto, Orcamento orcamento)
    {
        double icms = imposto.Calcula(orcamento);
        Console.WriteLine(icms);
    }

}
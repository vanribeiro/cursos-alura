using CursoDesignPatternsI.impostos;

namespace CursoDesignPatternsI;

public class CalculadorDeImpostos{
    public double Valor { get; private set; }

    public void RealizaCalculo(string nomeDoImposto, IImposto imposto, Orcamento orcamento)
    {
        double calculo = imposto.Calcula(orcamento);
        Console.WriteLine($"[{nomeDoImposto}]: {calculo}");
    }

}
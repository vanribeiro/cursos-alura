using CursoDesignPatternsI.investimentos;

namespace CursoDesignPatternsI;

public class SimuladorDeInvestimentos{
    public double Valor { get; private set; }

    public void RealizaCalculo(
        string nomeDoPerfilInvestidor,
        IPerfilDeInvestidor perfilDeInvestidor, 
        Investimento investimento
    ){
        double simulacao = perfilDeInvestidor.CalculaChanceDeRetorno(investimento);
        Console.WriteLine($"[{nomeDoPerfilInvestidor}]: {simulacao}");
    }

}
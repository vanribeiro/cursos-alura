namespace CursoDesignPatternsI.investimentos;

public class Moderado : IPerfilDeInvestidor{
    public double Valor { get; private set; }

    public double CalculaChanceDeRetorno(Investimento investimento)
    {
        return investimento.Valor * 0.8;
    }
}
namespace CursoDesignPatternsI.investimentos;

public class Conservador : IPerfilDeInvestidor{
    public double Valor { get; private set; }

    public double CalculaChanceDeRetorno(Investimento investimento)
    {
        double PERCENTUAL_0_8 = 0.8/100;

        return investimento.Valor * PERCENTUAL_0_8;
    }
}
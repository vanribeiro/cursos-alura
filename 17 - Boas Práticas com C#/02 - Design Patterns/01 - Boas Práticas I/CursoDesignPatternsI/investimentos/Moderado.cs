namespace CursoDesignPatternsI.investimentos;

public class Moderado : IPerfilDeInvestidor{
    public double Valor { get; private set; }

    public double CalculaChanceDeRetorno(Investimento investimento)
    {
        bool escolhido = new Random().Next(2) == 0;
        double PERCENTUAL_2_5 = 2.5/100;
        double PERCENTUAL_0_7 = 0.7/100;

        if(escolhido) {
            return investimento.Valor * PERCENTUAL_2_5;
        } else {
            return investimento.Valor * PERCENTUAL_0_7;
        }
    }
}
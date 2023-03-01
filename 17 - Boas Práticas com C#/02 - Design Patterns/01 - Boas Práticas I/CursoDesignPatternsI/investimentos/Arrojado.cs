namespace CursoDesignPatternsI.investimentos;

public class Arrojado : IPerfilDeInvestidor{
    public double Valor { get; private set; }

    public double CalculaChanceDeRetorno(Investimento investimento)
    {
        int chance = new Random().Next(10);
        double PERCENTUAL_5 = 5/100;
        double PERCENTUAL_3 = 3/100;
        double PERCENTUAL_0_6 = 0.6/100;

        if(chance >= 0 && chance <= 1) {
            return investimento.Valor * PERCENTUAL_5;
        } else if(chance >= 2 && chance <= 4) {
            return investimento.Valor * PERCENTUAL_3;
        } else {
            return investimento.Valor * PERCENTUAL_0_6;
        }
    }
}
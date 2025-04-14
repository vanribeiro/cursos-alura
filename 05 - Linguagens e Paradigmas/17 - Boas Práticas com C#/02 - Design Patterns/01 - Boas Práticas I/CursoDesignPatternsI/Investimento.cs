namespace CursoDesignPatternsI;

public class Investimento{
    public double Valor { get; private set; }
    
    public Investimento(double valor)
    {
        this.Valor = valor;
    }
}
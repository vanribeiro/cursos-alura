namespace CursoDesignPatternsI.models;

public class Item{
    public string Nome { get; private set; }
    public double Valor { get; private set; }
    
    public Item(string nome, double valor)
    {
        this.Valor = valor;
        this.Nome = nome;
    }


}
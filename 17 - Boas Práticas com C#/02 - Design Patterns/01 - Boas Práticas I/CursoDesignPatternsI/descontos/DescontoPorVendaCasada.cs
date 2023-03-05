using CursoDesignPatternsI;
using CursoDesignPatternsI.models;

namespace CursoDesignPatternsI.descontos;

public class DescontoPorVendaCasada: IDesconto
{
    public IDesconto Proximo { get; set; } = default!;
    
    public double Desconta(Orcamento orcamento)
    {
        if(AconteceuVendaCasadaEm(orcamento)){
            return orcamento.Valor * 0.05;
        } 

        return Proximo.Desconta(orcamento);
    }

    
    private bool AconteceuVendaCasadaEm(Orcamento orcamento) 
    {
        return Existe("Caneta", orcamento) && Existe("Lápis", orcamento);
    }

    private bool Existe(String nomeDoItem, Orcamento orcamento) 
    {
        foreach (Item item in orcamento.Itens) 
        {
            if(item.Nome.Equals(nomeDoItem)) return true;
        }
        return false;        
    }

}
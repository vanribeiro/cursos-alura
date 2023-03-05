using CursoDesignPatternsI.requisicao;

namespace CursoDesignPatternsI;

public class RespostaEmPorcento: IResposta{
    public Resposta OutraResposta { get; set; }
    
    public RespostaEmPorcento(Resposta outraResposta) 
    {
        this.OutraResposta = outraResposta;
    }

    public RespostaEmPorcento() 
    {
        this.OutraResposta = null;
    }

    public void Responde(Requisicao requisicao, Conta conta) 
    {
        if(requisicao.Formato == Formato.PORCENTO) 
        {
            Console.WriteLine(conta.Titular + "%" + conta.Saldo);
        } 
        else if(OutraResposta != null)
        {
            OutraResposta.Responde(requisicao, conta);
        }
        else 
        {
            throw new Exception("Formato de resposta não encontrado");
        }
    }  

}
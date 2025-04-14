using CursoDesignPatternsI.requisicao;

namespace CursoDesignPatternsI;

public class RespostaEmCsv: IResposta{
    public Resposta OutraResposta { get; set; }

    public RespostaEmCsv(IResposta outraResposta) 
    {
        this.outraResposta = outraResposta;
    }

    public RespostaEmCsv() 
    {
        this.OutraResposta = null;
    }

    public void Responde(Requisicao requisicao, Conta conta) 
    {
        if(requisicao.Formato == Formato.CSV) 
        {
            Console.WriteLine(conta.Titular + ";" + conta.Saldo);
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
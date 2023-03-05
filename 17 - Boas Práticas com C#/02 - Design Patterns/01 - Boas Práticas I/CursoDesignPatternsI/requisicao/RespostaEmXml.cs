using CursoDesignPatternsI.requisicao;

namespace CursoDesignPatternsI;

public class RespostaEmXml: IResposta{
    public Resposta OutraResposta { get; set; }

    public RespostaEmXml(IResposta outraResposta) 
    {
        this.OutraResposta = outraResposta;
    }

    public RespostaEmXml() 
    {
        this.OutraResposta = null;
    }

    public void Responde(Requisicao requisicao, Conta conta) 
    {
        if(requisicao.Formato == Formato.XML) 
        {
            Console.WriteLine("<conta><titular>" + conta.Titular + "</titular><saldo>" + conta.Saldo + "</saldo></conta>");
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
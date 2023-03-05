using CursoDesignPatternsI.requisicao;

public interface IResposta{

    void Responde(Requisicao requisicao, Conta conta);
    IResposta OutraResposta { get; set; }
}
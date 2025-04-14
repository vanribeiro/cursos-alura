namespace csharp_exception.Exceptions
{
    public class SaldoInsuficienteException : OperacaoFinanceiraException
    {
        public SaldoInsuficienteException(string mensagem):base(mensagem) {}
    }
}

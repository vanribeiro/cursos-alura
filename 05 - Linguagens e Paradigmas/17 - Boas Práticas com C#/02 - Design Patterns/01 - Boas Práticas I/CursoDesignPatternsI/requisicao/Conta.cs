using CursoDesignPatternsI.requisicao;

namespace CursoDesignPatternsI;

public class Conta{
    public string Titular { get; private set; }
    public double Saldo { get; private set; }

    public Conta(string titular, double saldo)
    {
        this.Titular = titular;
        this.Saldo = saldo;
    }

}

// "agencia:0056;conta:0123456"
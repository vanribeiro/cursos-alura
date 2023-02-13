using bytebank_ADM.Pagamento;

namespace bytebank_ADM.Funcionarios{
    public abstract class Funcionario: IBonificacao, ISalario{
        public string Nome { get; set; } = "";
        public string Cpf { get; private set; } = "";
        public double Salario { get; protected set; } = 0;
        public static int TotalDeFuncionarios { get; private set; }

        public Funcionario(string cpf, double salario) {
            this.Cpf = cpf;
            this.Salario = salario;
            TotalDeFuncionarios++;
        }

        public abstract double GetBonificacao();
        public abstract void AumentarSalario();
    }
}
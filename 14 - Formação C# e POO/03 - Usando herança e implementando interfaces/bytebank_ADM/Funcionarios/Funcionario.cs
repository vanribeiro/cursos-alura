namespace bytebank_ADM.Funcionarios{
    public class Funcionario{
        public string Nome { get; set; } = "";
        public string Cpf { get; set; } = "";
        public double Salario { get; set; } = 0;

        public int tipo = 0;

        public virtual double GetBonificacao(){
            return this.Salario * 0.1;
        }

    }
}
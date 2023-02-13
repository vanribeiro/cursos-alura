namespace bytebank_ADM.Funcionarios{
    public class Auxiliar : Funcionario{

        public Auxiliar(string cpf) : base(cpf, 2000) { }

        public override double GetBonificacao(){
            return this.Salario * 0.2;
        }

        public override void AumentarSalario(){
            double PERCENTUAL_DE_AUMENTO = 0.10;
            double QUANTIDADE_DE_SALARIOS = 1;
            this.Salario *= (QUANTIDADE_DE_SALARIOS + PERCENTUAL_DE_AUMENTO);
        }

    }
}
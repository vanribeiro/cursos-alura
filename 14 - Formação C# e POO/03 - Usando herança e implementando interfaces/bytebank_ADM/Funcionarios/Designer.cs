namespace bytebank_ADM.Funcionarios{
    public class Designer : Funcionario{

        public Designer(string cpf) : base(cpf, 3000) { }

        public override double GetBonificacao(){
            return this.Salario * 0.17;
        }

        public override void AumentarSalario(){
            double PERCENTUAL_DE_AUMENTO = 0.11;
            double QUANTIDADE_DE_SALARIOS = 1;
            this.Salario *= (QUANTIDADE_DE_SALARIOS + PERCENTUAL_DE_AUMENTO);
        }

    }
}
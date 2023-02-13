using bytebank_ADM.SistemaIterno;

namespace bytebank_ADM.Funcionarios{
    public class Diretor : FuncionarioAutenticavel {

        public Diretor(string cpf) : base(cpf, 5000) { }

        public override double GetBonificacao(){
            return this.Salario * 0.5;
        }

        public override void AumentarSalario(){
            double PERCENTUAL_DE_AUMENTO = 0.15;
            double QUANTIDADE_DE_SALARIOS = 1;
            this.Salario *= (QUANTIDADE_DE_SALARIOS + PERCENTUAL_DE_AUMENTO);
        }

    }
}
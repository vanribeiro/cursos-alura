using bytebank_ADM.SistemaIterno;

namespace bytebank_ADM.Funcionarios{
    public class GerenteDeContas: FuncionarioAutenticavel{
        public GerenteDeContas(string cpf):base(cpf, 4000) { }

        public override double GetBonificacao(){
            return this.Salario * 0.25;
        }

        public override void AumentarSalario(){
            double PERCENTUAL_DE_AUMENTO = 0.05;
            double QUANTIDADE_DE_SALARIOS = 1;
            this.Salario *= (QUANTIDADE_DE_SALARIOS + PERCENTUAL_DE_AUMENTO);
        }

    }
}
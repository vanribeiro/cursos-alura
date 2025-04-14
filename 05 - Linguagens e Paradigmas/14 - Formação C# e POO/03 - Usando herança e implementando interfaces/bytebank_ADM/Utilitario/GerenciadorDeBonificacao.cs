using bytebank_ADM.Funcionarios;

namespace bytebank_ADM.Utilitario{
    public class GerenciadorDeBonificacao{
        public double TotalBonificacao { get; private set; } = 0;

        public void Registrar(Funcionario funcionario){
            this.TotalBonificacao += funcionario.GetBonificacao();
        }

    }
}
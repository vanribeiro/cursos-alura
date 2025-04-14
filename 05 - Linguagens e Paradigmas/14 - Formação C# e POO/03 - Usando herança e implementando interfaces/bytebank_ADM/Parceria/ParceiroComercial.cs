
using bytebank_ADM.SistemaIterno;

namespace bytebank_ADM.Parceria{
    public class ParceiroComercial: IAutenticavel{

        public string Senha { get; set; } = "";
        public bool Autenticar(string senha) => this.Senha == senha;
    }
}
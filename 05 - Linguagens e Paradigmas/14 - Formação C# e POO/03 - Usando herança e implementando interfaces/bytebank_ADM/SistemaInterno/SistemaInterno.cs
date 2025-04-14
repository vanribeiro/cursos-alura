using bytebank_ADM.Funcionarios;
using bytebank_ADM.Parceria;

namespace bytebank_ADM.SistemaIterno{
    public class SistemaInterno{

        public bool Logar(IAutenticavel autenticavel, string senha){
            bool usuarioAutenticado = autenticavel.Autenticar(senha);
            if(usuarioAutenticado){
                Console.WriteLine("Bem-vindo(a) ao sistema!");
                return true;
            } else{
                Console.WriteLine("Senha incorreta...");
                return false;
            }
        }

    }
}
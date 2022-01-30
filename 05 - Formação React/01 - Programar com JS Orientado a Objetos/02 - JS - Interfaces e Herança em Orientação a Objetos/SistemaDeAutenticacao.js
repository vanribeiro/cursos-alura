/**
 * Ser autenticável significa ter o metodo autenticar
 */
class SistemaDeAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}

export default SistemaDeAutenticacao;
/**
 * Ser autenticável significa ter o metodo autenticar
 * Duck typing - "If it walks like a duck and it quacks like a duck, then it must be a duck"
 */
class SistemaDeAutenticacao{
    static login(autenticavel, senha){
        if (SistemaDeAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}

export default SistemaDeAutenticacao;
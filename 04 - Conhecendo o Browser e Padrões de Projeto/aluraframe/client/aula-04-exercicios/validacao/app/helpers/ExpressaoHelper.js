class ExpressaoHelper{
    constructor(){
        throw new Error("Esta classe não precisa ser instanciada");
    }
    
    static validaCodigo(codigo){
        return new Expressao().getExpressao.test(codigo) ? 
               alert(`${codigo} é um código válido!`) : 
               alert(`${codigo} é um código inválido`);
    }
}
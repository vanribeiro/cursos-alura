class Expressao{
    constructor(){
        this._expressao = /\D{3}-\D{2}-\d{2}/;
    }
    
    get getExpressao(){
        return this._expressao;
    }
}
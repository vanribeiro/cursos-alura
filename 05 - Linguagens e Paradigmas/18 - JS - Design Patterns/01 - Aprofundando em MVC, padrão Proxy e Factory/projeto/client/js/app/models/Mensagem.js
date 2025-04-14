class Mensagem {
    
    constructor(texto = '', bootstrapColorName = '') {
        
        this._texto = texto;
        this._bootstrapColorName = bootstrapColorName;
    }
    
    get texto() {
        
        return this._texto;
    }
    
    set texto(texto) {
        
        this._texto = texto;
    }

    get bootstrapColorName() {
        
        return this._bootstrapColorName;
    }
    
    set bootstrapColorName(bootstrapColorName) {
        
        this._bootstrapColorName = bootstrapColorName;
    }

    resetaMensagem (){
        this.bootstrapColorName = '';
        this.texto = '';
    }
}
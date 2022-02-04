class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }
    /**
     * Sobre o padrão observable:
     * https://www.stackchief.com/tutorials/JavaScript%20Observables%20in%205%20Minutes
     */
    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        console.log(this._inscritos.length)
        this._inscritos = this._inscritos.filter(f => f !== func);
        console.log(this._inscritos.length)
    }

    notificar(){
        this._inscritos.forEach(func => func(this.categorias));
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}

export default Categorias;
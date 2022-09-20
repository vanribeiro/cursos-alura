abstract class View<T> {

    /*
        protected permite que as classes herdadas 
        "tenham acesso" a campos/metodos privados da classe pai
    */
    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    abstract template(model: T): string;
}

export {
    View
}
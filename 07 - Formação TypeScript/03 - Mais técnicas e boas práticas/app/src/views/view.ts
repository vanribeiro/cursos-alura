abstract class View<T> {

    /*
        protected permite que as classes herdadas 
        "tenham acesso" a campos/metodos privados da classe pai
    */
    protected elemento: HTMLElement;

    constructor(seletor: string){

        const elemento = document.querySelector(seletor);
        
        if(elemento){
            this.elemento = elemento as HTMLInputElement;
        } else{
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique!`);
        }

    }

    public update(model: T): void{
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}

export {
    View
}
abstract class View<T> {

    /*
        protected permite que as classes herdadas 
        "tenham acesso" a campos/metodos privados da classe pai
    */
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean){

        const elemento = document.querySelector(seletor);
        
        if(elemento){
            this.elemento = elemento as HTMLInputElement;
        } else{
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique!`);
        }

        if(escapar) this.escapar = escapar;
    }

    public update(model: T): void{
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}

export {
    View
}
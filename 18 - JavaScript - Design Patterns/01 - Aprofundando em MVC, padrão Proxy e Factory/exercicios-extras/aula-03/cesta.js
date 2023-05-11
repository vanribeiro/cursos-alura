class Cesta{
    constructor(tipo, ...items){
        this.tipo = tipo;
        this.items = items
    }

    get content () {
        const singularOrPlural = this.items.length === 1 ? `${this.tipo}`: `${this.tipo}s`;
        return `${singularOrPlural}: ${this.items.join(', ')}.`;
    }
}

let cesta = new Cesta('fruta', 'banana', 'tomate', 'maçã');
console.log(cesta.content);
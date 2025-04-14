import { Imprimivel } from "./imprimivel.js";

function imprimir(...objetos: Imprimivel[]) {
    for(let objeto of objetos){
        console.log(objeto.paraTexto());
    }
}

export {
    imprimir
}
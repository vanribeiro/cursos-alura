import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

/** Estende uma ou mais interface para criar um atalho */
interface Modelo<T> extends Imprimivel, Comparavel<T>{

}

export {
    Modelo
}
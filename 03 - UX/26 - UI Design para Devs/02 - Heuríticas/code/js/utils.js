import { imprimirCamisetas } from "./imprimirCamisetas.js";

export function separarCamisetas(produtos) {
    const camisetas = produtos.produtos.camisetas;

    if (isPaginaCamisetas()) {
        imprimirCamisetas(camisetas);
    }
}

export function isPaginaCamisetas() {
    return window.location.pathname.includes("/camisetas.html");
}

export function isPaginaSacola() {
    return window.location.pathname.includes("/sacola.html");
}
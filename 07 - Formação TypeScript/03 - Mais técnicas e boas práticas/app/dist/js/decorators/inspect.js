function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const nomeDoMetodo = propertyKey;
            const argumentos = args;
            const retorno = metodoOriginal.apply(this, args);
            console.log(`--- Método: ${nomeDoMetodo}`);
            console.log(`----- parâmetro: ${JSON.stringify(argumentos)}`);
            console.log(`----- retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
export { inspect };
//# sourceMappingURL=inspect.js.map
function inspect(){
    return function (
        target: any, 
        propertyKey: string, 
        descriptor : PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {

            const nomeDoMetodo: string = propertyKey;
            const argumentos: any[] = args;
            const retorno: PropertyDescriptor = metodoOriginal.apply(this, args);

            console.log(`--- Método: ${nomeDoMetodo}`);
            console.log(`----- parâmetro: ${JSON.stringify(argumentos)}`);
            console.log(`----- retorno: ${JSON.stringify(retorno)}`);

            return retorno;
        }

        return descriptor;
    }
}

export {
    inspect
}
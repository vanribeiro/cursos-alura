let funcionario = {
    email: 'abc@abc.com'
};


// console.log(funcionario.email);

const proxyHandler = {
    get (target, props, receiver) {
        if(target[props]) {
            console.log("Armadilha aqui!");
            return function () {

                return Reflect.apply(target[props], props, arguments);
            }
        }

        return Reflect.apply(target, props, receiver);
    }
}

const proxy = new Proxy(funcionario, proxyHandler);
console.log(funcionario.email);
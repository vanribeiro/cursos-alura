let funcionario = {
    email: 'abc@abc.com',
    get: function () {
        return this.email;
    }
};


// console.log(funcionario.email);

const proxyHandler = {
    get (target, props, receiver) {
        if(target[props] && typeof(target[props]) === typeof(Function)) {
            return "Armadilha aqui!";
        }

        return Reflect.apply(target, props, receiver);
    }
}

const proxy = new Proxy(funcionario, proxyHandler);
console.log(funcionario.email);
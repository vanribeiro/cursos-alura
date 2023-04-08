let funcionario = {
    email: 'abc@abc.com'
};

const proxy = new Proxy(funcionario, {
    get (target) {
        if(target.email){
            return 'Armadilha aqui!';
        }
    }
});

console.log(proxy.email);
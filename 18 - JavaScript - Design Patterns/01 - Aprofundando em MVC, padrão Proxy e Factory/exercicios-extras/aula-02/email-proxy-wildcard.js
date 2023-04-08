let funcionario = {
    email: 'abc@abc.com'
};

const proxy = new Proxy(funcionario, {
    get (target) {
        return `Armadilha aqui!\n**${target.email}**`
    }
});

console.log(proxy.email);
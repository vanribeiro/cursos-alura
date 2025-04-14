let funcionario = {
    email: 'abc@abc.com'
};

const proxy = new Proxy(funcionario, {
    get (target) {
        return target.email;
    },
    set (target, prop, value){
        target[prop] = value;
    }
});

console.log(proxy.email);
proxy.email = 'new__abc@abc.com';
console.log(proxy.email);

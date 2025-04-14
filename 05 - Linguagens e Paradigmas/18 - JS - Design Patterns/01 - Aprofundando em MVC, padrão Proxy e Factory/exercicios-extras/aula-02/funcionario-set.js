class Funcionario {

    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

}

const funcionario = new Proxy(
    new Funcionario('abc@abc.com'), 
    {
        get (target) {
            return target.email;
        },
        set (target, prop, value) {
            return target[prop] = value;
        }
    }
);

console.log(funcionario.email);
funcionario.email = 'new__abc@abc.com';
console.log(funcionario.email);

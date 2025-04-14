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
        get () {
            return "Armadilha aqui";
        }
    }
);

console.log(funcionario.email);
console.log(funcionario._email);
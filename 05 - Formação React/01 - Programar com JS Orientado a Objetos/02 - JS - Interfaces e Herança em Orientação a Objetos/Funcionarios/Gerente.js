import Funcionario from "./Funcionario.js";

class Gerente extends Funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf);
        this.bonificacao = 1.1;
    }
}

export default Gerente;
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros1 = [numerosPares, numerosImpares];
console.log(numeros1); // [ [ 2, 4, 6 ], [ 1, 3, 5 ] ]

const numeros2 = [...numerosPares, ...numerosImpares];
console.log(numeros2); // [ 2, 4, 6, 1, 3, 5 ]

const num1 = 1;
const num2 = 2;
const num1num2 = [num1, num2]; 
console.log(num1num2); // [ 1, 2 ]

const [num3, num4] = [3, 4];
console.log(num3, num4); // 3 4

const [num5, num6] = [5, 6, 7, 8];
console.log(num5, num6); // 5 6

const [num7, num8, ...outrosNumeros] = [7, 8, 9, 10];
console.log(num7, num8, outrosNumeros); // 7 8 [ 9, 10 ]

const [nome1 = 'Ju'] = [1];
console.log(nome1); // 1

const [nome2 = 'Ju'] = [];
console.log(nome2); // Ju

// ------------------------------------------------------------

const pessoa = {
    nome: "Ju",
    idade: 25
}

const pessoaComTelefone = {...pessoa, telefone: 12312312312};

console.log(pessoa); // { nome: 'Ju', idade: 25 }
console.log(pessoaComTelefone); // { nome: 'Ju', idade: 25, telefone: 12312312312 }

const nome = pessoa.nome;
console.log(nome); // Ju

const { idade } = pessoa;
console.log(idade); // 25

// ---------------------------------------------------------------

function imprimeDados1(dados){
    console.log(dados); // { nome: 'Ju', idade: 25 }
}

imprimeDados1(pessoa);

function imprimeDados2(dados){
    const { nome, idade } = dados
    console.log(nome, idade); // Ju 25
}

imprimeDados2(pessoa);

function imprimeDados3({ nome, idade }){
    console.log(nome, idade); // Ju 25
}

imprimeDados3(pessoa);


import { clienteService } from './../service/cliente-service.js';
const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');

const formulario = document.querySelector('[data-form]');
const inputNome = formulario.querySelector('[data-nome]');
const inputEmail = formulario.querySelector('[data-email]');


clienteService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.nome;
    inputEmail.value = dados.email;
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(()=> window.location.href = "../telas/edicao_concluida.html");
});
// console.log();
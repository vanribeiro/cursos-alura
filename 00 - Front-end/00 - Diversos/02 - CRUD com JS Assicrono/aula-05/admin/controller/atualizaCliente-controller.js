import { clienteService } from './../service/cliente-service.js';
(async () => {
    const pegaURL = new URL(window.location);
    const id = pegaURL.searchParams.get('id');
    
    const formulario = document.querySelector('[data-form]');
    const inputNome = formulario.querySelector('[data-nome]');
    const inputEmail = formulario.querySelector('[data-email]');
    try {
        const dados = await clienteService.detalhaCliente(id)
        inputNome.value = dados.nome;
        inputEmail.value = dados.email;
    } catch (erro) {
        console.log(erro);
        window.location.href = '../telas/erro.html';
    }
    
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault();
        try {
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value);
            window.location.href = "../telas/edicao_concluida.html";
        } catch (erro) {
            console.log(erro);
            window.location.href = '../telas/erro.html';
        }
    });

});
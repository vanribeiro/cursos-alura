import { emitirAdicionarDocumento } from './socket-front-index.js';
const listaDeDocumentos = document.querySelector('#lista-documentos');

function inserirLinkDocumento(nomeDocumento) {
    if(listaDeDocumentos){
        listaDeDocumentos.innerHTML += `
            <a 
                href="documento.html?nome=${nomeDocumento}" 
                class="list-group-item list-group-item-action"
                id="documento-${nomeDocumento}"
            >
                ${nomeDocumento}
            </a>
        `;
    }
}

function removerLinkDoDocumento(nomeDoDocumento) {
    const documento = document.querySelector(`#documento-${nomeDoDocumento}`)
    listaDeDocumentos.removeChild(documento);
}

const formulario = document.querySelector('#form-adiciona-documento');

if(formulario){
    const input = formulario.querySelector('#input-documento');
    
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        emitirAdicionarDocumento(input.value);
        input.value = '';
    });
}



export {
    inserirLinkDocumento,
    removerLinkDoDocumento
}
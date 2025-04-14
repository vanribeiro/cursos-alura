import { 
    adicionarDocumento, 
    atualizarDocumento, 
    encontrarDocumento, 
    excluirDocumento, 
    obterDocumentos 
} from './documentos-db.js';
import io from './servidor.js';

io.on("connection", (socket) => {

    socket.on("obter_documentos", async (devolverDocumentos) => {
        console.log("O cliente está solicitando os documentos!");
        const documentos = await obterDocumentos();
        devolverDocumentos(documentos);
    });

    socket.on("selecionar_documento", async (nomeDoDocumento, devolverTexto) => {
        socket.join(nomeDoDocumento);

        const documento = await encontrarDocumento(nomeDoDocumento);

        if(documento){
            devolverTexto(documento.texto);
        }
    });

    socket.on("adicionar_documento", async (nome) => {
        const documentoExiste = (await encontrarDocumento(nome)) !== null;
        if(documentoExiste){
            socket.emit("documento_existente", nome);
        } else {
            const resultado = await adicionarDocumento(nome);
            if(resultado.acknowledged){
                io.emit("adicionar_documento_interface", nome);
            }
        }
    })

    socket.on("texto_editor", async ({ texto, nomeDoDocumento }) => {
        const atualizacao = await atualizarDocumento(nomeDoDocumento, texto);

        if(atualizacao.modifiedCount){
            socket.to(nomeDoDocumento).emit("texto_editor_clientes", texto);
        }
    });

    socket.on("excluir_documento", async (nome) => {
        const resultado = await excluirDocumento(nome);
        if(resultado.deletedCount){
            io.emit("excluir_documento_sucesso", nome);
        }
        console.log(resultado);
    });

});


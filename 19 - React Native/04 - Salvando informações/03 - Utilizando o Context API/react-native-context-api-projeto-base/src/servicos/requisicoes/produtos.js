import api from '../api';

async function salvarProduto(produto) {
    try {
        const resultado = await api.post('/produtos', produto);
        return resultado.data;
    } catch (error) {
        console.error(error);
        return {};
    }
}

async function pegarProdutos() {
    try {
        const resultado = await api.get('/produtos');
        return resultado.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function deletarProduto(id) {
    try {
        await api.delete(`/produtos/${id}`);
        return 'sucesso';
    } catch (error) {
        console.error(error);
        return;
    }
}

export {
    salvarProduto,
    pegarProdutos,
    deletarProduto
}
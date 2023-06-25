import api from '../api';

async function pegarRepositorios(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`);
        return resultado.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function buscarPorRepositorio(postId, nomeRepo) {
    try {
        const resultado = await api.get(`/repos?postId=${postId}&q=${nomeRepo}`);
        return resultado.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function criarRepositorio(name, data, postId) {
    try {
        await api.post(`/repos`, {
            name: name,
            data: data, 
            postId: postId,
        });

        return 'sucesso';
    } catch (error) {
        console.error(error);
        return 'erro';
    }
}

async function atualizarRepositorio(postId, name, data, id) {
    try {
        await api.put(`/repos/${id}`, {
            postId: postId,
            name: name,
            data: data, 
            id: id 
        });

        return 'sucesso';
    } catch (error) {
        console.error(error);
        return 'erro';
    }
}

async function deletarRepositorio(id) {
    try {
        await api.delete(`/repos/${id}`);

        return 'sucesso';
    } catch (error) {
        console.error(error);
        return 'erro';
    }
}

export {
    pegarRepositorios,
    atualizarRepositorio,
    buscarPorRepositorio,
    criarRepositorio,
    deletarRepositorio
}
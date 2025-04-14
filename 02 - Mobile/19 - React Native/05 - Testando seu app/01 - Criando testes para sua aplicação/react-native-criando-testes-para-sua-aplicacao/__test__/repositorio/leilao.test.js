import { obtemLeiloes, obtemLeilao } from '../../src/repositorio/leilao';
import apiLeiloes from '../../src/servicos/apiLeiloes';

jest.mock('../../src/servicos/apiLeiloes');

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'Descricao do leilão'
    }
];

const mockLeilao = {
        id: 1,
        nome: 'Leilão',
        descricao: 'Descricao do leilão'
}

const mockRequisicaoSucesso = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno
            })
        }, 200);
    });
}

const mockRequisicaoErro = () => {
    return new Promise((___, reject) => {
        setTimeout(() => reject(), 200);
    });
}

describe('repositorio/leilao', () => {
    
    beforeEach(() => {
        apiLeiloes.get.mockClear();
    });

    describe('obtemLeiloes', () => {
        test('deve retornar uma lista de leilões', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoSucesso(mockLeiloes))
            const leiloes = await obtemLeiloes();

            expect(leiloes).toEqual(mockLeiloes);
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });
    });
    
    describe('obtemLeiloes', () => {
        test('deve retornar uma lista vazia', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoErro())
            const leiloes = await obtemLeiloes();
            
            expect(leiloes).toEqual([]);
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });
    });

    describe('obtemLeilao', () => {
        test('deve retornar um leilao', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoSucesso(mockLeilao))
            const leilao = await obtemLeilao(1);

            expect(leilao).toEqual(mockLeilao);
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes/1');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });
    });

    describe('obtemLeilao', () => {
        test('deve retornar um objeto vazio', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoErro())
            const leilao = await obtemLeilao(2);

            expect(leilao).toEqual({});
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes/2');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });
    });
});
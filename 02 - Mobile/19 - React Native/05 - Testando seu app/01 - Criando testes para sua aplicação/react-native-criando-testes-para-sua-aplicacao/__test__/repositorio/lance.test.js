import { obtemLancesDoLeilao, adicionaLance } from "../../src/repositorio/lance";
import apiLeiloes from '../../src/servicos/apiLeiloes';

jest.mock('../../src/servicos/apiLeiloes');

const mockLances = [
    {
      "valor": 1000,
      "leilaoId": 1,
      "id": 2
    },
    {
      "valor": 800,
      "leilaoId": 1,
      "id": 3
    },
    {
      "valor": 500,
      "leilaoId": 1,
      "id": 1
    }
];

const mockLancePost = {
    "valor": 1100,
    "leilaoId": 1,
    "id": 4
}

const mockRequisicaoSucesso = (retorno) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve({data: retorno})
        }, 200);
    });
}

const mockRequisicaoErro = () => {
    return new Promise ((___, reject) => {
        setTimeout(() => reject(), 200);
    });
}

describe('repositorio/lance', () => {

    beforeEach(() => {
        apiLeiloes.get.mockClear();
        apiLeiloes.post.mockClear();
    });

    describe('obtemLancesDoLeilao', () => {
        
        test('deve retornar lista de lances do leilão de TV ', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoSucesso(mockLances));
            const resultado = await obtemLancesDoLeilao(1);

            expect(resultado).toEqual(mockLances);
            expect(apiLeiloes.get).toHaveBeenCalledWith('/lances?leilaoId=1&_sort=valor&_order=desc');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });

        test('deve retornar lista vazia ', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoErro());
            const resultado = await obtemLancesDoLeilao(3);

            expect(resultado).toEqual([]);
            expect(apiLeiloes.get).toHaveBeenCalledWith('/lances?leilaoId=3&_sort=valor&_order=desc');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });

    });

    describe('adicionaLance', () => {

        test('deve adicionar retornar true ao adicionar um novo lance ', async () => {
            apiLeiloes.post.mockImplementation(() => mockRequisicaoSucesso(mockLancePost));
            const resultado = await adicionaLance(mockLancePost);

            expect(resultado).toBeTruthy();
            expect(apiLeiloes.post).toHaveBeenCalledWith('/lances', mockLancePost);
            expect(apiLeiloes.post).toHaveBeenCalledTimes(1);
        });

        test('deve retornar false quando falhar em adicionar um novo lance', async () => {
            apiLeiloes.post.mockImplementation(() => mockRequisicaoErro());
            const resultado = await adicionaLance(mockLancePost);

            expect(resultado).toBeFalsy();
            expect(apiLeiloes.post).toHaveBeenCalledWith('/lances', mockLancePost);
            expect(apiLeiloes.post).toHaveBeenCalledTimes(1);
        });
    });
    
});
import { act, renderHook } from '@testing-library/react-hooks';
import useListaLeiloes from '../../src/hooks/useListaLeiloes';

import { obtemLeiloes } from '../../src/repositorio/leilao';

jest.mock('../../src/repositorio/leilao');

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'Descricao do leilão'
    }
];

const mockLeiloesAtualizada = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'Descricao do leilão'
    },
    {
        id: 2,
        nome: 'Leilão 2',
        descricao: 'Descricao do leilão 2'
    }
];

describe('hooks/useListaLeiloes', () => {

    test('deve retornar uma lista de leiloes e uma função para atualizar ', async () => {
        obtemLeiloes.mockImplementation(() => mockLeiloes);

        const { result, waitForNextUpdate } = renderHook(() => useListaLeiloes());
        expect(result.current[0]).toEqual([]);

        await waitForNextUpdate();
        expect(result.current[0]).toEqual(mockLeiloes);

        obtemLeiloes.mockImplementation(() => mockLeiloesAtualizada);

        await act(() => result.current[1]());
        expect(result.current[0]).toEqual(mockLeiloesAtualizada);
    });

});
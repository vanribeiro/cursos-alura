import { obtemLeilao } from '../../src/repositorio/leilao';
import { adicionaLance, obtemLancesDoLeilao } from '../../src/repositorio/lance';
import useLeilao from '../../src/hooks/useLeilao';
import { act, renderHook } from '@testing-library/react-hooks';
import { ENVIADO, INVALIDO, MENOR_OU_IGUAL_AOS_LANCES, MENOR_QUE_VALOR_INICIAL, NAO_ENVIADO } from '../../src/negocio/constantes/estadosLance';

jest.mock('../../src/repositorio/leilao');
jest.mock('../../src/repositorio/lance');

jest.useFakeTimers();

describe('hooks/useLeilao', () => {

    beforeEach(() => {
        obtemLeilao.mockClear(mockLeilao);
        obtemLancesDoLeilao.mockReturnValue(mockLancesDoLeilao);
        adicionaLance.mockClear();
        jest.clearAllMocks();
    });
    
    test('deve retornar um leilao como primeiro para parâmetro', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useLeilao());
        expect(result.current[0]).toEqual({});

        await waitForNextUpdate();
        act(() => { 
            result.current[0] = {...mockLeilao, lances: mockLancesDoLeilao};
        });

        expect(result.current[0]).toEqual({...mockLeilao, lances: mockLancesDoLeilao});
    });

    test('deve retornar uma funcão para atualizar como segundo parâmetro', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useLeilao());
        await waitForNextUpdate();
        
        obtemLeilao.mockReturnValue(mockLeilaoAtualizada);
        obtemLancesDoLeilao.mockReturnValue(mockLancesDoLeilaoAtualizada);
        
        await act(() => result.current[1]());
        expect(result.current[0]).toEqual({ ...mockLeilaoAtualizada, lances: mockLancesDoLeilaoAtualizada });
    });

    describe('[__] enviaLance', () => {

        test('deve retornar "Lance enviado com sucesso" quando o envio do lance der certo', async () => {
            adicionaLance.mockReturnValue(true);

            const { result, waitForNextUpdate } = renderHook(() => useLeilao());
            await waitForNextUpdate();
            
            let statusLance;
            await act(async () => { 
                statusLance = await result.current[2]('2000');
            });
    
            expect(statusLance).toEqual(ENVIADO);
            expect(adicionaLance).toHaveBeenCalledWith({ leilaoId: mockLeilao.id, valor: 2000 });
        });

        test('deve retornar erro se o lance enviado não for numérico', async () => {
            
            const { result, waitForNextUpdate } = renderHook(() => useLeilao());
            await waitForNextUpdate();
            
            let statusLance;
            await act(async () => { 
                statusLance = await result.current[2]('dois mil reais');
            });
    
            expect(statusLance).toEqual(INVALIDO);
            expect(adicionaLance).not.toHaveBeenCalled();
        });

        test('deve retornar erro se o lance enviado for igual a um lance já realizado', async () => {

            const { result, waitForNextUpdate } = renderHook(() => useLeilao());
            await waitForNextUpdate();
            
            let statusLance;
            await act(async () => {
                statusLance = await result.current[2]('1000');
            });

            expect(statusLance).toEqual(MENOR_OU_IGUAL_AOS_LANCES);
            expect(adicionaLance).not.toHaveBeenCalled();
        });

        test('deve retornar erro se o lance enviado for menor que o lance iniciado', async () => {
            
            const { result, waitForNextUpdate } = renderHook(() => useLeilao());
            await waitForNextUpdate();
            
            let statusLance;
            await act(async () => {
                statusLance = await result.current[2]('100');
            });
    
            expect(statusLance).toEqual(MENOR_OU_IGUAL_AOS_LANCES);
            expect(adicionaLance).not.toHaveBeenCalled();
        });

        test('deve rejeitar um lance quando a função adicionaLance retorne false', async () => {

            adicionaLance.mockReturnValue(false);

            const { result, waitForNextUpdate } = renderHook(() => useLeilao());
            await waitForNextUpdate();
            
            let statusLance;
            await act(async () => {
                statusLance = await result.current[2]('2001');
            });
    
            expect(statusLance).toEqual(NAO_ENVIADO);
            expect(adicionaLance).toHaveBeenCalledWith({ leilaoId: mockLeilao.id, valor: 2001 });
        });

    });

});

const mockLeilao = {
    id: 1,
    nome: 'Leilão',
    descricao: 'Descrição do leilão',
    valorInicial: 100,
};

const mockLeilaoAtualizada = {
    id: 1,
    nome: 'Leilão atualizado',
    descricao: 'Descrição do leilão atualizado',
    valorInicial: 101,
};

const mockLancesDoLeilao = [
    {
      valor: 1000,
      id: 2
    },
    {
      valor: 800,
      id: 3
    }
];

const mockLancesDoLeilaoAtualizada = [
    {
      valor: 1000,
      id: 2
    },
    {
      valor: 800,
      id: 3
    },
    {
      valor: 500,
      id: 1
    }
];
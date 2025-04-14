import { act, renderHook } from '@testing-library/react';
import { buscaTransacoes } from '../services/transacoes';
import useListaTransacoes from './useListaTransacoes';
import { mockTransactionDepositGet } from '../test/mocks/data';

jest.mock('../services/transacoes');

describe('useListaTransacoes Hook',  () => {
    it('should render the deposit transaction list', async() => {
        buscaTransacoes.mockImplementation(() => mockTransactionDepositGet);
        const { result } = renderHook(() => useListaTransacoes());
        expect(result.current[0]).toEqual([]);

        await act(async () => {
            result.current[1]();
        });

        expect(result.current[0]).toEqual(mockTransactionDepositGet);
    });
});
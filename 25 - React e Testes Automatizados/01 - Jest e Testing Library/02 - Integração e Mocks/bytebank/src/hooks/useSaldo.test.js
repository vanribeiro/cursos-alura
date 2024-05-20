import { act, renderHook } from '@testing-library/react';
import useSaldo from './useSaldo';
import { buscaSaldo } from '../services/saldo';
import { mockAccountBalanceGet } from '../test/mocks/data';

jest.mock('../services/saldo');

describe('useSaldo Hook', () => {

    it('should render the account balance value', async () => {
        buscaSaldo.mockImplementation(() => mockAccountBalanceGet)
        const { result } = renderHook(() => useSaldo());
        expect(result.current[0]).toBe(0);

        await act(async () => {
            result.current[1]();
        });

        expect(result.current[0].valor).toBe(mockAccountBalanceGet.valor);
    });
});
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../paginas/Principal/App';
import { buscaTransacoes, salvaTransacao } from './transacoes';
import api from './api';
import {
  mockRequestError,
  mockRequestPostSuccess,
  mockRequestGetSuccess,
  timerId,
} from '../test/promises/requests';
import {
  mockAccountBalanceGet,
  mockTransactionDepositGet,
  mockTransactionDepositPost,
} from '../test/mocks/data';
import { buscaSaldo } from './saldo';

jest.mock('./api');

beforeEach(() => {
    api.get.mockClear();
});

describe('Resquest API: GET - Transactions', () => {

    it('should return a transaction list', async () => {
        api.get.mockImplementation(() => mockRequestGetSuccess(mockTransactionDepositGet));

        const transactions = await buscaTransacoes();
        expect(transactions).toEqual(mockTransactionDepositGet);
        expect(api.get).toHaveBeenCalledWith('/transacoes');

    });

    it('should return an empty list when the request fails', async () => {
        api.get.mockImplementation(() => mockRequestError());

        const transactions = await buscaTransacoes();
        expect(transactions).toEqual([]);
        expect(api.get).toHaveBeenCalledWith('/transacoes');

    });
});

describe('Resquest API: POST - Deposit', () => {

    it('should return a 201 as successful status', async () => {
        api.post.mockImplementation(() => mockRequestPostSuccess());

        const deposit = await salvaTransacao(mockTransactionDepositPost[0]);
        expect(deposit).toBe(201);
        expect(api.post).toHaveBeenCalledWith('/transacoes', mockTransactionDepositPost[0]);

    });

    it('should return an error message when post fail', async () => {
        api.post.mockImplementation(() => mockRequestError());

        const transactions = await salvaTransacao();
        expect(transactions).toBe('Erro na requisição');
    });
});

describe('Resquest API: GET - Account Balance', () => {

    it('should return an object with account balance value', async () => {
        api.get.mockImplementation(() => mockRequestGetSuccess(mockAccountBalanceGet));

        const balanceAccount = await buscaSaldo();
        expect(balanceAccount).toBe(mockAccountBalanceGet.valor);
        expect(api.get).toHaveBeenCalledWith('/saldo');

    });

    it('should return an empty list when the request fails', async () => {
        api.get.mockImplementation(() => mockRequestError());

        const balanceAccount = await buscaSaldo();
        expect(balanceAccount).toBe(1000);
        expect(api.get).toHaveBeenCalledWith('/saldo');

    });
});



describe.skip('Requisições para API', () => {
    test.skip('Deve retornar uma lista de transações', async () => {
        const transacoes = await buscaTransacoes();
        expect(transacoes).toHaveLength(3);

        render(<App />, { wrapper: BrowserRouter });
        const transacao = await screen.findAllByText('Novembro');
        transacao.forEach(transacao => expect(transacao).toBeInTheDocument())
    });
});

afterEach(() => {
    if(timerId > 0) clearTimeout(timerId);
})
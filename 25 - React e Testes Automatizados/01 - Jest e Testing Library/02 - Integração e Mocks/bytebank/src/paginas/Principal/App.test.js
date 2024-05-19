import { findByTestId, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../routes';

const date = Date.now();
const today = new Date(date);
const formattedToday = `${today.toLocaleDateString('pt-BR')}`;
let timerId = 0;

describe('App', () => {
    it('should let add a new extract transaction', () => {

        render(<BrowserRouter><App /></BrowserRouter>);

        const selectList = screen.getByRole('combobox');
        const inputValue = screen.getByPlaceholderText('Digite um valor');
        const buttonSubmit = screen.getByRole('button');

        userEvent.selectOptions(selectList, ['Depósito']);
        userEvent.type(inputValue, '2500');
        userEvent.click(buttonSubmit);

        const transactionList = screen.getByTestId('lista-transacoes');
        const transactionItem = screen.getByRole('listitem');
        const transactionType = transactionItem.querySelector('[data-testid="tipoTransacao"]').textContent;
        const transactionDate = transactionItem.querySelector('span').textContent;
        const transactionValue = transactionItem.querySelector('[data-testid="valorTransacao"]').textContent;

        expect(transactionList).toContainElement(transactionItem);
        expect(transactionType).toBe('Depósito');
        expect(transactionDate).toBe(formattedToday);
        expect(transactionValue).toBe('2500');

    });

    it('should go to the right page when the link Cartões is clicked', async () => {
        render(<AppRoutes />, { wrapper: BrowserRouter });

        const creditCardPageLink = screen.getByText('Cartões');

        userEvent.click(creditCardPageLink);

        const creditCardPageTitle = await screen.findByText('Meus cartões');
        expect(creditCardPageTitle).toBeInTheDocument();

    });

    it('should go to the right page when the link Investimentos is clicked', async () => {
        render(<AppRoutes />, { wrapper: BrowserRouter });

        const investimentsPageLink = screen.getByText('Investimentos');

        userEvent.click(investimentsPageLink);

        const investiments = await screen.findByTestId('investimentos');
        expect(investiments).toBeInTheDocument();

    });

    it('should go to the right page when the link Serviços is clicked', async () => {
        render(<AppRoutes />, { wrapper: BrowserRouter });

        const investimentsPageLink = screen.getByText('Serviços');

        userEvent.click(investimentsPageLink);

        const investiments = await screen.findByTestId('servicos');
        expect(investiments).toBeInTheDocument();

    });

    it('should go to the right page when the link Início is clicked', async () => {
        render(<AppRoutes />, { wrapper: BrowserRouter });

        const investimentsPageLink = screen.getByText('Início');

        userEvent.click(investimentsPageLink);

        const investiments = await screen.findByText('Nova Transação');
        expect(investiments).toBeInTheDocument();

    });
});

afterEach(() => {
    clearTimeout(timerId);
})
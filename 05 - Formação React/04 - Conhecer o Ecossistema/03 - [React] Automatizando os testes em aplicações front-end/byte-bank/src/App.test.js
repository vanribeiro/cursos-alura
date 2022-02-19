import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App';

// https://stackoverflow.com/questions/60604572/react-jest-no-tests-found-exiting-with-code-0

describe('Componente principal', () => {

    describe('Quando eu abro o app do banco', () => {

        test('o nome é exibido', () => {
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });
    
        it('o saldo é exibido', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        });
    
        it('o botão de realizar transação é exibido', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        });

    });

    describe('Quando eu realizado uma transação', () => {

        it('que é um saque, o valor vai diminuir', () => {

            const saldo = 150;
            const valores = {
                transacao: 'saque',
                valor: 50
            }

            const novoSaldo = calcularNovoSaldo(valores, saldo);
            expect(novoSaldo).toBe(100);
        });

        it('que é um saque, a transação deve ser realizada', async () => {

            render(<App />);

            const saldo = screen.getByText('R$ 1000');
            const transacao = screen.getByLabelText('Saque');
            const valor = screen.getByTestId('valor');
            const botaoTransacao = screen.getByText('Realizar operação');

            expect(saldo.textContent).toBe('R$ 1000');
            fireEvent.click(transacao, { target: { value: 'saque'} });
            fireEvent.change(valor, { target: { value: 10 } });
            fireEvent.click(botaoTransacao);

            expect(saldo.textContent).toBe('R$ 990');
        });

        it('que é um depósito, o valor vai aumentar', () => {
            const saldo = 150;
            const valores = {
                transacao: 'deposito',
                valor: 50
            }

            const novoSaldo = calcularNovoSaldo(valores, saldo);
            expect(novoSaldo).toBe(200);
        })
    });

});
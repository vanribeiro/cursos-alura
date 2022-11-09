import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Rodape from '.';
import useListaParticipantes from '../../state/hooks/useListaParticipantes';

jest.mock('../../state/hooks/useListaParticipantes');

const mockDeNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockDeNavegacao
    }
});

describe('quando não existem participantes', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([]);
    });

    test('a brincadeira não pode ser iniciada', () => {

        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        expect(botao).toBeDisabled();
    });

});

describe('quando existem participantes suficientes', () =>{

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(["Ana", "Felipe", "Duda"]);
    });

    test('a brincadeira pode ser iniciada', () => {

        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );
        
        const botao = screen.getByRole('button');
        expect(botao).not.toBeDisabled();
        
    });
    
    test('a brincadeira foi iniciada', () => {

        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        fireEvent.click(botao);

        expect(mockDeNavegacao).toHaveBeenCalledTimes(1);
        expect(mockDeNavegacao).toHaveBeenCalledWith('/sorteio');
    });

});
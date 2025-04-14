import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ListaParticipantes from './index';
import useListaParticipantes from '../../state/hooks/useListaParticipantes';

jest.mock('../../state/hooks/useListaParticipantes');

describe('uma lista vazia de participantes', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([]);
    });

    test('deve ser redenrizada sem elementos', () => {
        
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        );

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0);

    });

});

describe('uma lista preenchida de participantes', () => {

    const participantes: Array<string> = [
        "Ana",
        "Catarina"
    ];

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    });
    

    test('deve ser redenrizada sem elementos', () => {

        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        );

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);

    });

});
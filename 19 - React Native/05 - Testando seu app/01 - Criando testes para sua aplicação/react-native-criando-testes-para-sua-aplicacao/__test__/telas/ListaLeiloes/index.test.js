import React from 'react';
import { act, render, waitFor } from '@testing-library/react-native';
import ListaLeiloes from '../../../src/telas/ListaLeiloes';

jest.useFakeTimers();

describe('telas/ListaLeiloes', () => {

    test('deve renderizar o componente sem erros', async () => {
        
        const { toJSON } = render(<ListaLeiloes />);

        act(() => {
            jest.useFakeTimers();
        });

        await waitFor(() => expect(toJSON()).toMatchSnapshot());

    });

});
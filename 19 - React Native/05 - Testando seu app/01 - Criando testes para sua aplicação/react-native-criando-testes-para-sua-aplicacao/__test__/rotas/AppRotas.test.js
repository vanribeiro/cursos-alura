import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import AppRotas from '../../src/rotas/AppRotas';

jest.useFakeTimers();

describe('rotas/AppRotas', () => {
    
    test('deve redenrizar os componentes de rotas', async () => {

        const { toJSON } = render(<AppRotas />);

        act(() => {
            jest.useFakeTimers();
        });

        await waitFor(() => expect(toJSON()).toMatchSnapshot());
    });
});
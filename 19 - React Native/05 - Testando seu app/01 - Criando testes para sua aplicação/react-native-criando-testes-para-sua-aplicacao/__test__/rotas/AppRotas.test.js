import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import AppRotas from '../../src/rotas/AppRotas';
import { act } from 'react-test-renderer';

describe('rotas/AppRotas', () => {
    
    test('deve redenrizar os componentes de rotas', async () => {

        const { toJSON } = render(<AppRotas />);

        await waitFor(() => expect(toJSON()).toMatchSnapshot());
    });
});
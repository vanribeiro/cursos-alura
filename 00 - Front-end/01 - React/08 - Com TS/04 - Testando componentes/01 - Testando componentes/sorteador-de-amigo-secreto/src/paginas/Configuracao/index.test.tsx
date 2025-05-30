import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Configuracao from '.';

const mockDeNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockDeNavegacao
    }
});

describe('a página de configuração', () => {
    
    test('deve ser renderizada corretamente', () => {
        
        const { container } = render(
            <RecoilRoot>
                <Configuracao />
            </RecoilRoot>
        );

        expect(container).toMatchSnapshot();

    });

});
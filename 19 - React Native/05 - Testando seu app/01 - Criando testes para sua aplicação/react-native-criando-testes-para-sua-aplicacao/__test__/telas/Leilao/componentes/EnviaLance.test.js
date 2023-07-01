import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import EnviaLance from "../../../../src/telas/Leilao/componentes/EnviaLance";
import { ENVIADO, NAO_ENVIADO } from '../../../../src/negocio/constantes/estadosLance';
import { act } from 'react-test-renderer';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('telas/Leilao/componentes/EnviaLance', () => {

    test('deve enviar o lance quando o botão for pressionado', async () => {
        let enviaLance;

        act(() => {
            enviaLance = jest.fn(() => new Promise((resolve => resolve(ENVIADO))));
        });

        const { 
            getByPlaceholderText, 
            getByAccessibilityHint,
            getByText
        } = render (
            <EnviaLance 
                cor="blue"
                enviaLance={enviaLance}
            />
        );
        
        const novoLance = '100';
        
        const input = getByPlaceholderText('R$');
        const botao = getByAccessibilityHint('Enviar lance');

        fireEvent.changeText(input, novoLance);
        fireEvent.press(botao);

        expect(enviaLance).toHaveBeenCalledWith(novoLance);

        await waitFor(() => {
            expect(() => getByText(ENVIADO)).toBeTruthy();
        });

        expect(() => getByText(NAO_ENVIADO)).toThrow();

    });

    test('deve lançar erro quando um lance não puder ser enviado', async () => {
        let enviaLanceErro;

        act(() => {
            enviaLanceErro = jest.fn(() => new Promise(resolve => resolve(NAO_ENVIADO)));
        })

        const { 
            getByPlaceholderText, 
            getByAccessibilityHint,
            getByText
        } = render (
            <EnviaLance 
                cor="blue"
                enviaLance={enviaLanceErro}
            />
        );
        
        const novoLance = '0';
        
        const input = getByPlaceholderText('R$');
        const botao = getByAccessibilityHint('Enviar lance');

        fireEvent.changeText(input, novoLance);
        fireEvent.press(botao);

        expect(enviaLanceErro).toHaveBeenCalledWith(novoLance);

        await waitFor(() => {
            expect(() => getByText(NAO_ENVIADO)).toBeTruthy();
        });

        expect(() => getByText(ENVIADO)).toThrow();
    });

});
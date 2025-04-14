import React from 'react';
import Leilao from '../../../../src/telas/ListaLeiloes/componentes/Leilao';
import { fireEvent, render } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';


jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn().mockReturnValue({
      navigate: jest.fn(),
    }),
}));

describe('telas/ListaLeiloes/componentes/Leilao', () => {
    const navigation = useNavigation();

    beforeEach(() => {
        navigation.navigate.mockClear();
    });
    
    test('deve exibir um card da lista de leilão', () =>{
        const {
            getByText
        } = render( 
            <Leilao
                id={1}
                nome="TV"
                valorInicial={1000}
                cor="#ffba05"
                icone="tv"
            />
        );
        
        const produto = 'TV';
        const valorInicial = 'R$ 1.000,00';

        expect(getByText(produto).children[0]).toBe(produto);
        expect(getByText(valorInicial).children[0]).toMatch(/R\$\s1\.000,00/);

    });

    test('deve levar o usuario para tela de leilão quando o componente é pressionado', async () => {

        const {
            getByText
        } = render( 
            <Leilao
                id={1}
                nome="TV"
                valorInicial={1000}
                cor="#ffba05"
                icone="tv"
            />
        );

        const card = getByText('TV');
        
        fireEvent.press(card);
        expect(navigation.navigate).toHaveBeenCalledWith('Leilao', {id: 1});

    });
});
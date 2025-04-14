import React from 'react';
import Topo from '../../../../src/telas/Leilao/componentes/Topo'
import { render } from '@testing-library/react-native';

describe('telas/Leilao/componentes/Topo', () => {
    
    test('deve exibir o melhor lance e valor inicial no Topo da tela de leilao', () => {

        const { 
            getByText
        } = render ( 
            <Topo 
                nome="TV"
                descricao={"TV de LED 50"}
                lances={mockDeLances}
                valorInicial={1000}
                cor="#ffba05"
                icone="tv"
            />
        );

        const valorInicial = getByText('R$ 1.000,00').children[0];
        const melhorLance = getByText('R$ 1.500,00').children[0];

        expect(valorInicial).toMatch(/R\$\s1\.000,00/);
        expect(melhorLance).toMatch(/R\$\s1\.500,00/);
    });
});
 
const mockDeLances = [
    {
      "valor": 1000,
      "leilaoId": 1,
      "id": 1
    },
    {
      "valor": 1000.01,
      "leilaoId": 1,
      "id": 2
    },
    {
      "valor": 800.01,
      "leilaoId": 3,
      "id": 3
    },
    {
      "valor": 800.02,
      "leilaoId": 3,
      "id": 4
    },
    {
      "valor": 1500,
      "leilaoId": 1,
      "id": 5
    }
];
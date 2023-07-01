import React from "react";
import Lance from "../../../../src/telas/Leilao/componentes/Lance";
import { render } from '@testing-library/react-native';

describe('telas/Leilao/componentes/Lance', () => {
    
    test('deve exibir o card com um lance que foi feito pelo usuário', () => {
        const {
            getByAccessibilityHint,
            getByText
        } = render (
            <Lance 
                id="1"
                valor={1200}
                cor="#ffba05"
            />
        );

        const idDoLance = getByAccessibilityHint('Ordem do Lance').children.join('');
        const lance = getByText('R$ 1.200,00').children[0];

        expect(idDoLance).toBe('#1');
        expect(lance).toMatch(/R\$\s1\.200,00/);

    });
});
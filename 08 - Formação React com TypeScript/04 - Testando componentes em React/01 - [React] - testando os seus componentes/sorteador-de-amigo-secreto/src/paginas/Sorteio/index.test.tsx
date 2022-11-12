import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import useListaParticipantes from "../../state/hooks/useListaParticipantes";
import Sorteio from ".";

jest.mock('../../state/hooks/useListaParticipantes');

describe('na pagina de sorteio', () => {
    const participantes = [
        "Ana",
        "Catarina",
        "Bela"
    ];

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    });

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const opcoes = screen.queryAllByRole('option');
        expect(opcoes).toHaveLength(participantes.length);
        

    });

});
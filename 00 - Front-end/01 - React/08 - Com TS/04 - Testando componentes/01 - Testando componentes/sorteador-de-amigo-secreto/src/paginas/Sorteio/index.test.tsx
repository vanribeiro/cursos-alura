import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import useListaParticipantes from "../../state/hooks/useListaParticipantes";
import Sorteio from ".";
import useResultadoDoSorteio from "../../state/hooks/useResultadoDoSorteio";

jest.mock('../../state/hooks/useListaParticipantes');
jest.mock('../../state/hooks/useResultadoDoSorteio');

describe('na pagina de sorteio', () => {
    const participantes = [
        "Ana",
        "Catarina",
        "Bela"
    ];

    const resultado = new Map([
        ["Ana", "Catarina"],
        ["Catarina", "Bela"],
        ["Bela", "Ana"],
    ])

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
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
    
    test('o amigo secreto é exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );
        
        const select = screen.getByTitle('Escolha seu amigo(a) secreto(a)');
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        });

        const botao = screen.getByRole('button');

        fireEvent.click(botao);

        const amigoSecreto = screen.getByRole('alert');
        expect(amigoSecreto).toBeInTheDocument();
    });
});
import { render } from "@testing-library/react";
import Transacoes from "./Transacoes";

describe('Componente que lista todas as transações do extrato', () => {
    it('O snapshot do component deve ser sempre o mesmo', () => {
        const infoTransacoes = [{
            id: 4, 
            transacao: "deposito", 
            valor: 50, 
            data:"19/02/2022"
        }];

        const { container } = render(<Transacoes transacoes={infoTransacoes} />);

        expect(container.firstChild).toMatchSnapshot()
    });
});
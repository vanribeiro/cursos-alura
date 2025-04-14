import { formataMaiorLanceDoLeilao } from "../../../src/negocio/formatadores/lance";

describe('negocio/formatadores/lance', () => {
    
    describe('formataMaiorLanceDoLeilao', () => {

        test('deve retornar 1500 como maior lance', () => {
            const resultado = formataMaiorLanceDoLeilao(lances, 799);
            expect(resultado).toBe(1500);
        });
    });
});

const lances = [
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
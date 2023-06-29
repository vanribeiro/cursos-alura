import { INVALIDO, MENOR_OU_IGUAL_AOS_LANCES, MENOR_QUE_VALOR_INICIAL, VALIDO } from "../../../src/negocio/constantes/estadosLance";
import { validaFormatoNumericoDoLance, validaLance } from "../../../src/negocio/validadores/lance";

describe('negocio/validadores/lance', () => {
    
    describe('validaFormatoNumericoDoLance', () => {

        test('deve retornar VALIDO para o número 1000 ', () => {
            const resultado = validaFormatoNumericoDoLance('1000');
            expect(resultado).toBe(VALIDO);
        });

        test('deve retornar VALIDO para 100,00 ', () => {
            const resultado = validaFormatoNumericoDoLance('100,00');
            expect(resultado).toBe(VALIDO);
        });

        test('deve retornar INVALIDO para 100.00 ', () => {
            const resultado = validaFormatoNumericoDoLance('100.00');
            expect(resultado).toBe(INVALIDO);
        });

        test('deve retornar INVALIDO para quando não for um número ', () => {
            const resultado = validaFormatoNumericoDoLance('mil (1000)');
            expect(resultado).toBe(INVALIDO);
        });

    });

    describe('validaLance', () => {
        
        test('deve ser MENOR_OU_IGUAL_AOS_LANCES quando o valor for igual ao maior lance do leilao ', () => {
            const valorDoLance = 400;
            const leilao = {
                valorInicial: 200,
                lances: [ { valor: 300 }, { valor: 400 }, ],
            };
            const resultado = validaLance(valorDoLance, leilao);
            expect(resultado).toBe(MENOR_OU_IGUAL_AOS_LANCES);
        });

        test('deve ser MENOR_QUE_VALOR_INICIAL quando o valor for menor que valor inicial do leilao ', () => {
            const valorDoLance = 50;
            const leilao = {
                valorInicial: 100,
                lances: [],
            };
            const resultado = validaLance(valorDoLance, leilao);
            expect(resultado).toBe(MENOR_QUE_VALOR_INICIAL);
        });

        test('deve retornar VALIDO se o valor do lance for maior do que todos os outros lances', () => {
            const valorDoLance = 500;
            const leilao = {
                valorInicial: 100,
                lances: [ { valor: 300 }, { valor: 400 }, ],
            };
            const resultado = validaLance(valorDoLance, leilao);
            expect(resultado).toBe(VALIDO);
        });
    });
});


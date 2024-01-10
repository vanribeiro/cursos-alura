-- ATIVIDADE

-- 01. Quantidade de vendas

-- Cada item da nota fiscal representa uma venda de um determinado produto. 
-- Vimos na atividade anterior que temos várias vendas com quantidade igual a 99 litros para o produto 1101035.

-- Quantas vendas foram feitas com quantidade igual a 99 litros para o produto 1101035?

-- Minha Resposta:
SELECT COUNT(QUANTIDADE) AS VENDAS
    FROM ITENS_NOTAS_FISCAIS
    WHERE CODIGO_DO_PRODUTO = 1101035 
        AND QUANTIDADE = 99
    GROUP BY QUANTIDADE;

-- VENDAS: 79
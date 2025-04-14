SELECT
    NOME_DO_PRODUTO,
    PRECO_DE_LISTA,
    (
        CASE
            WHEN PRECO_DE_LISTA >= 12 THEN
                'produto caro'
            WHEN PRECO_DE_LISTA >= 7 AND PRECO_DE_LISTA < 12 THEN
                'produto em conta'
            ELSE
                'produto barato'
        END
    )  AS CLASSIFICACAO
FROM TABELA_DE_PRODUTOS;

--------------------------------------------------------------------------------------------------------

-- ATIVIDADES

-- 01.  Classificando os clientes

-- Para cada cliente, temos seus limites de crédito mensais. Liste somente os nomes dos clientes e os classifique por:

--     Acima ou igual a 150.000 de limite de crédito - Clientes grandes
--     Entre 150.000 e 110.000 de limite de crédito - Clientes médios
--     Menores que 110.000 de limite de crédito - Clientes pequenos


-- Minha Resposta:

SELECT
    NOME,
    LIMITE_DE_CREDITO,
    (
        CASE
            WHEN LIMITE_DE_CREDITO < 110000 THEN
                'Clientes pequenos'
            WHEN LIMITE_DE_CREDITO >= 110.000 AND LIMITE_DE_CREDITO < 150000 THEN
                'Clientes médios'
            ELSE
                'Clientes grandes'
        END
    )  AS CLASSIFICACAO
FROM TABELA_DE_CLIENTES;
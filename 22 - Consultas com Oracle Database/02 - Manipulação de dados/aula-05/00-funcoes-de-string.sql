---------------------------------------------------------------------------------------
-- ATIVIDADE

-- Listando expressão natural

-- Queremos construir um SQL cujo resultado seja, para cada cliente:

--     O cliente NOME DO CLIENTE comprou QUANTIDADE no ano de ANO

-- Faça isso somente para o ano de 2016.

-- Minha resposta:

SELECT TC.NOME, INF.QUANTIDADE, NF.DATA_VENDA
    FROM TABELA_DE_CLIENTES TC
    INNER JOIN NOTAS_FISCAIS NF
    ON TC.CPF = NF.CPF
    INNER JOIN ITENS_NOTAS_FISCAIS INF
    ON NF.NUMERO = INF.NUMERO
    WHERE TO_CHAR(NF.DATA_VENDA, 'YYYY') = 2016;


SELECT CONCAT(
        (
            CONCAT(
                CONCAT('O cliente ', TC.NOME), 
                CONCAT(' comprou R$', 
                    TO_CHAR(
                        ROUND(SUM((INF.QUANTIDADE * INF.PRECO)), 2),
                        '0,000,000.00')
                )
            )
        ),
        CONCAT(' no ano de ', TO_CHAR(NF.DATA_VENDA, 'YYYY'))
    ) AS EXPRESSAO_NATURAL
    FROM TABELA_DE_CLIENTES TC
    INNER JOIN NOTAS_FISCAIS NF
    ON TC.CPF = NF.CPF
    INNER JOIN ITENS_NOTAS_FISCAIS INF
    ON NF.NUMERO = INF.NUMERO
    WHERE TO_CHAR(NF.DATA_VENDA, 'YYYY') = 2016
    GROUP BY TC.NOME, TO_CHAR(NF.DATA_VENDA, 'YYYY');


-- Solução do instrutor:

SELECT 'O cliente ' || TC.NOME || ' comprou ' || 
TO_CHAR(ROUND(SUM(INF.QUANTIDADE * INF.preco),2)) || ' no ano de ' || TO_CHAR(DATA_VENDA, 'YYYY') AS SENTENCA 
FROM notas_fiscais NF
INNER JOIN ITENS_NOTAS_FISCAIS INF ON NF.NUMERO = INF.NUMERO
INNER JOIN TABELA_DE_CLIENTES TC ON NF.CPF = TC.CPF
WHERE TO_CHAR(DATA_VENDA, 'YYYY') = '2016'
GROUP BY TC.NOME, TO_CHAR(DATA_VENDA, 'YYYY');

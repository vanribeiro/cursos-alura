-- ROUND --------------------------------------------------------------
---- Se maior ou igual a .5, arredonda para o próximo inteiro
---- Se não, arredonda para baixo

-- RETORNA: 3
SELECT ROUND(3.4) FROM DUAL;

-- RETORNA: 4
SELECT ROUND(3.5) FROM DUAL;

-- RETORNA: 4
SELECT ROUND(3.6) FROM DUAL;

-- TRUNC ---------------------------------------------------------------
---- Sempre arredonda baixo

-- RETORNA: 3
SELECT TRUNC(3.4) FROM DUAL;

-- RETORNA: 3
SELECT TRUNC(3.5) FROM DUAL;

-- RETORNA: 3
SELECT TRUNC(3.6) FROM DUAL;

-- CEIL ---------------------------------------------------------------
---- Sempre arredonda para cima

-- RETORNA: 4
SELECT CEIL(3.4) FROM DUAL;

-- RETORNA: 3
SELECT CEIL(3.5) FROM DUAL;

-- RETORNA: 3
SELECT CEIL(3.6) FROM DUAL;

-- FLOOR ---------------------------------------------------------------
---- Igual a TRUNC

-- RETORNA: 3
SELECT FLOOR(3.4) FROM DUAL;

-- RETORNA: 3
SELECT FLOOR(3.5) FROM DUAL;

-- RETORNA: 3
SELECT FLOOR(3.6) FROM DUAL;

-- POWER ---------------------------------------------------------------

-- RETORNA: 10000
SELECT POWER(10, 4) FROM DUAL;

-- RETORNA: 1336336
SELECT POWER(34,4) FROM DUAL;

-- EXP ---------------------------------------------------------------

-- RETORNA: 54.59815003314423907811026120286087840308
SELECT EXP(4) FROM DUAL;

-- SQRT ---------------------------------------------------------------

-- RETORNA: 12
SELECT SQRT(144) FROM DUAL;

-- RETORNA: 3.16227766016837933199889354443271853372
SELECT SQRT(10) FROM DUAL;

-- SQRT ---------------------------------------------------------------

-- RETORNA: 10
SELECT ABS(10) FROM DUAL;

-- RETORNA: 10
SELECT ABS(-10) FROM DUAL;

-- SQRT ---------------------------------------------------------------

-- RETORNA: 4
SELECT MOD(10, 6) FROM DUAL;

------------------------------------------------------------------------------------------------------------

-- ATIVIDADE

-- 01. Formato do faturamento

-- Na tabela de notas fiscais, temos o valor do imposto. Já na tabela de itens, temos a quantidade e o faturamento. 
-- Calcule o valor do imposto pago no ano de 2016, arredondando para o menor inteiro.

-- Minha Resposta:

-- Sem agrupamento
SELECT 
    NF.*,
    INF.NUMERO, 
    INF.CODIGO_DO_PRODUTO,
    TP.NOME_DO_PRODUTO, 
    INF.QUANTIDADE, 
    TP.PRECO_DE_LISTA,
    INF.PRECO,
    (INF.QUANTIDADE * INF.PRECO) AS FATURAMENTO,
    FLOOR(NF.IMPOSTO * (INF.QUANTIDADE * INF.PRECO)) AS IMPOSTO_PAGO
    FROM NOTAS_FISCAIS NF
    INNER JOIN ITENS_NOTAS_FISCAIS INF
    ON NF.NUMERO = INF.NUMERO
    INNER JOIN TABELA_DE_PRODUTOS TP
    ON INF.CODIGO_DO_PRODUTO = TP.CODIGO_DO_PRODUTO
    WHERE TO_CHAR(NF.DATA_VENDA, 'YYYY') = 2016
        AND ROWNUM < 10;

-- Com agrupamento
SELECT
    TO_CHAR(NF.DATA_VENDA, 'YYYY') AS ANO,
    ROUND((SUM(INF.QUANTIDADE * INF.PRECO)), 2) AS FATURAMENTO,
    FLOOR(SUM(NF.IMPOSTO * (INF.QUANTIDADE * INF.PRECO))) AS IMPOSTO_PAGO
    FROM NOTAS_FISCAIS NF
    INNER JOIN ITENS_NOTAS_FISCAIS INF
    ON NF.NUMERO = INF.NUMERO
    WHERE TO_CHAR(NF.DATA_VENDA, 'YYYY') = 2016
    GROUP BY TO_CHAR(NF.DATA_VENDA, 'YYYY');
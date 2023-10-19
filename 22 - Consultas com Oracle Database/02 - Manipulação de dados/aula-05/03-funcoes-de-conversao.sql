
-- EXTRACT extrai um pedaço da data:


-- RETORNA: 11
SELECT 
    EXTRACT(MONTH FROM TO_DATE('12/11/2019','DD/MM/YYYY')) 
    FROM DUAL;

-- Formas de representar um número:

    -- 9 - Posição numérica - Ex: 9999 - 1234

    -- 0 - Zeros antes do número - Ex: 009999 = 001234

    -- $ - Símbolo de moeda - Ex: $9999 = $1234

    -- . - Usar o ponto como separador - EX: 9999.99 = 1234.12

    -- , - Usar a vígula como separador - Ex: 9999,99 = 1234,12

    -- MI - Símbolo negativo do lado direito do número

    -- PR - Número negativo em parênteses

    -- EEEE - Notação científica


-- RETORNA: 1234
SELECT TO_CHAR(1234.123, '9999') FROM DUAL;

-- NVL ---------------------------------------------------------------------------------
----- Testa de o valor é nulo

-- RETORNA: 0, pois o valor é nulo
SELECT NVL(null, 0) FROM DUAL;

SELECT
    TV.NOME AS NOME_VENDEDOR,
    TV.BAIRRO AS NOME_BAIRRO_VENDEDOR,
    TC.NOME AS NOME_CLIENTE,
    TC.BAIRRO AS NOME_BAIRRO_CLIENTE
    FROM
    TABELA_DE_VENDEDORES TV
    FULL JOIN
    TABELA_DE_CLIENTES TC
    ON TV.BAIRRO = TC.BAIRRO;

SELECT
    NVL(TV.NOME,'NÃO ENCONTRADO') AS NOME_VENDEDOR,
    NVL(TV.BAIRRO,'NÃO ENCONTRADO') AS NOME_BAIRRO_VENDEDOR,
    NVL(TC.NOME,'NÃO ENCONTRADO') AS NOME_CLIENTE,
    NVL(TC.BAIRRO,'NÃO ENCONTRADO') AS NOME_BAIRRO_CLIENTE
    FROM
    TABELA_DE_VENDEDORES TV
    FULL JOIN
    TABELA_DE_CLIENTES TC
    ON TV.BAIRRO = TC.BAIRRO;

-- GREATEST ----------------------------------------------------------------------------
----- numa lista de números separada por vírgula, retorna qual é o maior.

-- RETORNA: 100
SELECT GREATEST(50, 1, 100, 18) FROM DUAL;

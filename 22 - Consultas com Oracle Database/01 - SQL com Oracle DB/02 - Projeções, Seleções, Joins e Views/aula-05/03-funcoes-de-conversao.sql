
-- EXTRACT extrai um peda�o da data:


-- RETORNA: 11
SELECT 
    EXTRACT(MONTH FROM TO_DATE('12/11/2019','DD/MM/YYYY')) 
    FROM DUAL;

-- Formas de representar um n�mero:

    -- 9 - Posi��o num�rica - Ex: 9999 - 1234

    -- 0 - Zeros antes do n�mero - Ex: 009999 = 001234

    -- $ - S�mbolo de moeda - Ex: $9999 = $1234

    -- . - Usar o ponto como separador - EX: 9999.99 = 1234.12

    -- , - Usar a v�gula como separador - Ex: 9999,99 = 1234,12

    -- MI - S�mbolo negativo do lado direito do n�mero

    -- PR - N�mero negativo em par�nteses

    -- EEEE - Nota��o cient�fica


-- RETORNA: 1234
SELECT TO_CHAR(1234.123, '9999') FROM DUAL;

-- NVL ---------------------------------------------------------------------------------
----- Testa de o valor � nulo

-- RETORNA: 0, pois o valor � nulo
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
    NVL(TV.NOME,'N�O ENCONTRADO') AS NOME_VENDEDOR,
    NVL(TV.BAIRRO,'N�O ENCONTRADO') AS NOME_BAIRRO_VENDEDOR,
    NVL(TC.NOME,'N�O ENCONTRADO') AS NOME_CLIENTE,
    NVL(TC.BAIRRO,'N�O ENCONTRADO') AS NOME_BAIRRO_CLIENTE
    FROM
    TABELA_DE_VENDEDORES TV
    FULL JOIN
    TABELA_DE_CLIENTES TC
    ON TV.BAIRRO = TC.BAIRRO;

-- GREATEST ----------------------------------------------------------------------------
----- numa lista de n�meros separada por v�rgula, retorna qual � o maior.

-- RETORNA: 100
SELECT GREATEST(50, 1, 100, 18) FROM DUAL;

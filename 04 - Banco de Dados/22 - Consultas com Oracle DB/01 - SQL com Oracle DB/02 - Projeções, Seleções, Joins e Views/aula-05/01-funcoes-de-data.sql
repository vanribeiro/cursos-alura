-- ORACLE armazena datas assim:

-- ano + mes + dia: parte inteira (7 bytes)

-- horas + minutos + segundos: parte decimal

-- Exemplo:

-- 04/09/2022 �s 19:30:23 = 20220904,193023

SELECT SYSDATE FROM DUAL;

SELECT TO_CHAR(SYSDATE, 'DD/MM/YYYY HH:MI:SS') FROM DUAL;

SELECT NOME, TO_CHAR(DATA_DE_NASCIMENTO, 'DD MONTH YYYY, DAY') FROM TABELA_DE_CLIENTES;

-- HOJE: 18-OCT-2023
-- RETORNA: 22/02/2024
SELECT TO_CHAR(SYSDATE + 127, 'DD/MM/YYYY')  FROM DUAL;

SELECT 
    NOME, 
    IDADE AS IDADE_CADASTRADA, 
    (SYSDATE - DATA_DE_NASCIMENTO)/365 AS IDADE_ATUAL 
    FROM TABELA_DE_CLIENTES;

SELECT 
    NOME,
    MONTHS_BETWEEN(SYSDATE, DATA_DE_NASCIMENTO) AS MESES_DE_VIDA
    FROM TABELA_DE_CLIENTES;

-- HOJE: 18-OCT-2023
-- RETORNA: 18-AUG-2024
SELECT ADD_MONTHS(SYSDATE, 10) FROM DUAL;

-- HOJE: 18-OCT-2023
-- PROXIMO_DIA: 20-AUG-2024
SELECT 
    SYSDATE AS HOJE, 
    NEXT_DAY(SYSDATE, 'FRIDAY') AS PROXIMO_DIA 
    FROM DUAL;

-- HOJE: 18-OCT-2023
-- ULTIMO_DIA_DO_MES: 31-OCT-2024
SELECT 
    SYSDATE AS HOJE, 
    LAST_DAY(SYSDATE) AS ULTIMO_DIA_DO_MES
    FROM DUAL;

-- HOJE: 18-OCT-2023
-- PRIMEIRO_DIA_DO_ANO: 01-JAN-2023
SELECT 
    SYSDATE AS HOJE, 
    TRUNC(SYSDATE, 'YEAR') AS PRIMEIRO_DIA_DO_ANO
    FROM DUAL;

-- HOJE_MAIS_200_DIAS: 18-OCT-2023 + 200 DIAS = 05-MAY-2024
-- PRIMEIRO_DIA_MES_DATA_ESPECIFICADA: 01-MAY-2024
SELECT 
    (SYSDATE + 200) AS HOJE_MAIS_200_DIAS, 
    TRUNC(SYSDATE + 200, 'MONTH') AS PRIMEIRO_DIA_MES_DATA_ESPECIFICADA
    FROM DUAL;

-- HOJE_MAIS_200_DIAS: 18-OCT-2023 + 200 DIAS = 05-MAY-2024
-- PRIMEIRO_DIA_MES_DATA_ESPECIFICADA: 01-JAN-2024
SELECT 
    (SYSDATE + 200) AS HOJE_MAIS_200_DIAS, 
    ROUND(SYSDATE + 200, 'YEAR') AS PRIMEIRO_DIA_ANO_DATA_ESPECIFICADA
    FROM DUAL;

-- HOJE: 18-OCT-2023
-- PRIMEIRO_DIA: 01-JAN-2024
SELECT 
    SYSDATE AS HOJE, 
    ROUND(SYSDATE, 'YEAR') AS PRIMEIRO_DIA_ANO_A_PARTIR_DE_HOJE
    FROM DUAL;

-- ROUND usa arredondamento matem�tico. Considerando o par�metro 'YEAR':
---- Se estiver na primeira metade do ano, retorna o primeiro dia daquele ano,
---- Se estiver na segunda metade do ano, retorna o primeiro dia do ano seguinte.
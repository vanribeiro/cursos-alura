-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

-- Volume total de vendas para cada cliente no m�s

SELECT * FROM notas_fiscais NF 
    INNER JOIN itens_notas_fiscais I_NF 
    ON NF.NUMERO = I_NF.NUMERO;

SELECT NF.CPF, NF.DATA_VENDA, I_NF.QUANTIDADE 
    FROM notas_fiscais NF 
    INNER JOIN itens_notas_fiscais I_NF 
    ON NF.NUMERO = I_NF.NUMERO;

SELECT NF.CPF, 
    DATE_FORMAT(NF.DATA_VENDA, '%Y-%m') AS MES_ANO, 
    I_NF.QUANTIDADE 
    FROM notas_fiscais NF 
    INNER JOIN itens_notas_fiscais I_NF 
    ON NF.NUMERO = I_NF.NUMERO;

-- Consulta com vendas de clientes por m�s

SELECT NF.CPF, 
    DATE_FORMAT(NF.DATA_VENDA, '%Y-%m') AS MES_ANO, 
    SUM(I_NF.QUANTIDADE) AS QUANTIDADE_VENDAS
    FROM notas_fiscais NF 
    INNER JOIN itens_notas_fiscais I_NF 
    ON NF.NUMERO = I_NF.NUMERO
    GROUP BY NF.CPF, DATE_FORMAT(NF.DATA_VENDA, '%Y-%m');


-- Limite de compra por cliente
SELECT * FROM tabela_de_clientes;
SELECT clientes.cpf,
    clientes.nome,
    clientes.volume_de_compra as quantidade_limite
    FROM tabela_de_clientes clientes;

-- Vers�o final
SELECT RELATORIO.CPF, RELATORIO.NOME, RELATORIO.QUANTIDADE_VENDAS, RELATORIO.QUANTIDADE_LIMITE,
CASE 
    WHEN (RELATORIO.QUANTIDADE_LIMITE - RELATORIO.QUANTIDADE_VENDAS) < 0 THEN 'INV�LIDA' 
    ELSE 'V�LIDA'
END AS STATUS_VENDA
FROM (
    SELECT NF.CPF, CLIENTES.NOME,
        DATE_FORMAT(NF.DATA_VENDA, '%Y-%m') AS MES_ANO, 
        SUM(I_NF.QUANTIDADE) AS QUANTIDADE_VENDAS,
        MAX(CLIENTES.VOLUME_DE_COMPRA) AS QUANTIDADE_LIMITE
        FROM notas_fiscais NF 
        INNER JOIN itens_notas_fiscais I_NF
        ON NF.NUMERO = I_NF.NUMERO
        INNER JOIN tabela_de_clientes CLIENTES
        ON CLIENTES.CPF = NF.CPF
        GROUP BY 
            NF.CPF, 
            CLIENTES.NOME, 
            DATE_FORMAT(NF.DATA_VENDA, '%Y-%m')
) RELATORIO;

-- Exerc�cio: 
-- Nesta aula constru�mos um relat�rio que apresentou os clientes que tiveram vendas inv�lidas. 
-- Complemente este relat�rio listando somente os que tiveram vendas inv�lidas e calculando 
-- a diferen�a entre o limite de venda m�ximo e o realizado, em percentuais.
-- Minha resposta:
SELECT
    RELATORIO.CPF,
    RELATORIO.NOME,
    RELATORIO.QUANTIDADE_VENDAS,
    RELATORIO.QUANTIDADE_LIMITE,
    ROUND(
            ((1 - (RELATORIO.QUANTIDADE_LIMITE / RELATORIO.QUANTIDADE_VENDAS)) * 100), 2
        ) AS DIFERENCA_PERCENTUAL,
CASE 
    WHEN (RELATORIO.QUANTIDADE_LIMITE - RELATORIO.QUANTIDADE_VENDAS) < 0 THEN 'INV�LIDA' 
    ELSE 'V�LIDA'
END AS STATUS_VENDA
FROM (
    SELECT NF.CPF, CLIENTES.NOME,
        DATE_FORMAT(NF.DATA_VENDA, '%Y-%m') AS MES_ANO, 
        SUM(I_NF.QUANTIDADE) AS QUANTIDADE_VENDAS,
        MAX(CLIENTES.VOLUME_DE_COMPRA) AS QUANTIDADE_LIMITE
        FROM notas_fiscais NF 
        INNER JOIN itens_notas_fiscais I_NF
        ON NF.NUMERO = I_NF.NUMERO
        INNER JOIN tabela_de_clientes CLIENTES
        ON CLIENTES.CPF = NF.CPF
        GROUP BY 
            NF.CPF, 
            CLIENTES.NOME, 
            DATE_FORMAT(NF.DATA_VENDA, '%Y-%m')
        HAVING (QUANTIDADE_LIMITE - QUANTIDADE_VENDAS) < 0
) RELATORIO;



SELECT * FROM tabela_de_clientes;
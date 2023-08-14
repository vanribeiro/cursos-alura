-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

-- Relatório vendas por sabores em 2016

SELECT produtos.SABOR, nf.DATA_VENDA, i_nf.QUANTIDADE  FROM 
    tabela_de_produtos produtos
    INNER JOIN itens_notas_fiscais i_nf
    ON produtos.CODIGO_DO_PRODUTO = i_nf.CODIGO_DO_PRODUTO
    INNER JOIN notas_fiscais nf
    ON nf.NUMERO = i_nf.NUMERO;

-- Quantidade vendida por sabor ano 2016
SELECT produtos.SABOR, 
    YEAR(nf.DATA_VENDA) AS ANO, 
    SUM(i_nf.QUANTIDADE) AS QUANTIDADE 
    FROM tabela_de_produtos produtos
    INNER JOIN itens_notas_fiscais i_nf
    ON produtos.CODIGO_DO_PRODUTO = i_nf.CODIGO_DO_PRODUTO
    INNER JOIN notas_fiscais nf
    ON nf.NUMERO = i_nf.NUMERO
    WHERE YEAR(nf.DATA_VENDA) = 2016
    GROUP BY produtos.SABOR, YEAR(nf.DATA_VENDA)
    ORDER BY SUM(i_nf.QUANTIDADE) DESC;

-- Venda total em 2016
SELECT
    YEAR(nf.DATA_VENDA) AS ANO, 
    SUM(i_nf.QUANTIDADE) AS QUANTIDADE 
    FROM tabela_de_produtos produtos
    INNER JOIN itens_notas_fiscais i_nf
    ON produtos.CODIGO_DO_PRODUTO = i_nf.CODIGO_DO_PRODUTO
    INNER JOIN notas_fiscais nf
    ON nf.NUMERO = i_nf.NUMERO
    WHERE YEAR(nf.DATA_VENDA) = 2016
    GROUP BY YEAR(nf.DATA_VENDA);


-- INNER JOIN ENTRE SUBCONSULTAS
SELECT * FROM
(
    SELECT produtos.SABOR, YEAR(nf.DATA_VENDA) AS ANO, 
        SUM(i_nf.QUANTIDADE) AS QUANTIDADE 
        FROM tabela_de_produtos produtos
        INNER JOIN itens_notas_fiscais i_nf
        ON produtos.CODIGO_DO_PRODUTO = i_nf.CODIGO_DO_PRODUTO
        INNER JOIN notas_fiscais nf
        ON nf.NUMERO = i_nf.NUMERO
        WHERE YEAR(nf.DATA_VENDA) = 2016
        GROUP BY produtos.SABOR, YEAR(nf.DATA_VENDA)
) AS VENDA_SABOR
INNER JOIN
(
    SELECT YEAR(nf.DATA_VENDA) AS ANO, 
        SUM(i_nf.QUANTIDADE) AS QUANTIDADE 
        FROM tabela_de_produtos produtos
        INNER JOIN itens_notas_fiscais i_nf
        ON produtos.CODIGO_DO_PRODUTO = i_nf.CODIGO_DO_PRODUTO
        INNER JOIN notas_fiscais nf
        ON nf.NUMERO = i_nf.NUMERO
        WHERE YEAR(nf.DATA_VENDA) = 2016
        GROUP BY YEAR(nf.DATA_VENDA)
) AS VENDA_TOTAL
ON VENDA_SABOR.ANO = VENDA_TOTAL.ANO;

-- Versão final do relatório
SELECT 
    VENDA_SABOR.SABOR,
    VENDA_SABOR.ANO,
    VENDA_SABOR.QUANTIDADE,
    ROUND((VENDA_SABOR.QUANTIDADE / VENDA_TOTAL.QUANTIDADE) * 100, 2) AS PARTICIPACAO
FROM (
    SELECT produtos.SABOR, YEAR(nf.DATA_VENDA) AS ANO, 
        SUM(i_nf.QUANTIDADE) AS QUANTIDADE 
        FROM tabela_de_produtos produtos
        INNER JOIN itens_notas_fiscais i_nf
        ON produtos.CODIGO_DO_PRODUTO = i_nf.CODIGO_DO_PRODUTO
        INNER JOIN notas_fiscais nf
        ON nf.NUMERO = i_nf.NUMERO
        WHERE YEAR(nf.DATA_VENDA) = 2016
        GROUP BY produtos.SABOR, YEAR(nf.DATA_VENDA)
) AS VENDA_SABOR
INNER JOIN
(
    SELECT YEAR(nf.DATA_VENDA) AS ANO, 
        SUM(i_nf.QUANTIDADE) AS QUANTIDADE 
        FROM tabela_de_produtos produtos
        INNER JOIN itens_notas_fiscais i_nf
        ON produtos.CODIGO_DO_PRODUTO = i_nf.CODIGO_DO_PRODUTO
        INNER JOIN notas_fiscais nf
        ON nf.NUMERO = i_nf.NUMERO
        WHERE YEAR(nf.DATA_VENDA) = 2016
        GROUP BY YEAR(nf.DATA_VENDA)
) AS VENDA_TOTAL
ON VENDA_SABOR.ANO = VENDA_TOTAL.ANO
ORDER BY VENDA_SABOR.QUANTIDADE DESC;

-- Exercício: Modifique o relatório mas agora para ver o ranking das vendas por tamanho.

-- Minha resposta:
SELECT 
    VENDA_TAMANHO.TAMANHO,
    VENDA_TAMANHO.ANO,
    VENDA_TAMANHO.QUANTIDADE,
    ROUND((VENDA_TAMANHO.QUANTIDADE / VENDA_TOTAL.QUANTIDADE) * 100, 2) AS PARTICIPACAO
FROM (
    SELECT produtos.TAMANHO, YEAR(nf.DATA_VENDA) AS ANO, 
        SUM(i_nf.QUANTIDADE) AS QUANTIDADE 
        FROM tabela_de_produtos produtos
        INNER JOIN itens_notas_fiscais i_nf
        ON produtos.CODIGO_DO_PRODUTO = i_nf.CODIGO_DO_PRODUTO
        INNER JOIN notas_fiscais nf
        ON nf.NUMERO = i_nf.NUMERO
        WHERE YEAR(nf.DATA_VENDA) = 2016
        GROUP BY produtos.TAMANHO, YEAR(nf.DATA_VENDA)
) AS VENDA_TAMANHO
INNER JOIN
(
    SELECT YEAR(nf.DATA_VENDA) AS ANO, 
        SUM(i_nf.QUANTIDADE) AS QUANTIDADE 
        FROM tabela_de_produtos produtos
        INNER JOIN itens_notas_fiscais i_nf
        ON produtos.CODIGO_DO_PRODUTO = i_nf.CODIGO_DO_PRODUTO
        INNER JOIN notas_fiscais nf
        ON nf.NUMERO = i_nf.NUMERO
        WHERE YEAR(nf.DATA_VENDA) = 2016
        GROUP BY YEAR(nf.DATA_VENDA)
) AS VENDA_TOTAL
ON VENDA_TAMANHO.ANO = VENDA_TOTAL.ANO
ORDER BY VENDA_TAMANHO.QUANTIDADE DESC;

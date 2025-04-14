-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

-- CEILING: Retorna o menor valor inteiro maior ou igual ao numero a ser arrendodado
SELECT CEILING(12.333322222) AS resultado;

-- FLOOR: Retorna o maior valor inteiro menor ou igual ao numero a ser arredondado
SELECT FLOOR(12.333322222) AS resultado;

-- ROUND: arredonda de acordo com as casas decimais especificada.
SELECT ROUND(12.333322222, 3) AS resultado;

SELECT
    numero,
    quantidade,
    preco,
    ROUND(quantidade * preco, 2) AS faturamento
FROM itens_notas_fiscais;

-- Exercício: Na tabela de notas fiscais temos o valor do imposto.
-- Já na tabela de itens temos a quantidade e o faturamento.
-- Calcule o valor do imposto pago no ano de 2016 arredondando para o menor inteiro.

SELECT
    YEAR(NF.DATA_VENDA) AS ANO,
    ROUND(SUM(I_NF.QUANTIDADE * I_NF.PRECO), 2) AS FATURAMENTO,
    FLOOR(SUM((I_NF.QUANTIDADE * I_NF.PRECO) * NF.IMPOSTO)) AS IMPOSTO
FROM notas_fiscais NF
    INNER JOIN itens_notas_fiscais I_NF on NF.numero = I_NF.numero
WHERE
    YEAR(NF.DATA_VENDA) = 2016
GROUP BY 
    YEAR(NF.DATA_VENDA);
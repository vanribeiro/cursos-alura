USE sucos_vendas;

-- Podem ser usados para agrupar:
-- SUM: soma
-- MAX: maximo
-- MIN: mínimo
-- AVG: média
-- COUNT: contar ocorrências

-- SUM

SELECT estado, limite_de_credito FROM tabela_de_clientes;

SELECT estado, SUM(limite_de_credito) AS limite_total 
        FROM tabela_de_clientes GROUP BY estado;

-- MAX

SELECT embalagem, preco_de_lista FROM tabela_de_produtos;

SELECT embalagem, MAX(preco_de_lista) AS maior_preco 
        FROM tabela_de_produtos GROUP BY embalagem 
        ORDER BY maior_preco DESC;

-- MIN
SELECT embalagem, 
        MAX(preco_de_lista) AS maior_preco, 
        MIN(preco_de_lista) AS menor_preco
        FROM tabela_de_produtos GROUP BY embalagem
        ORDER BY embalagem;

-- COUNT
SELECT embalagem, COUNT(*) AS contador
        FROM tabela_de_produtos GROUP BY embalagem;

-- Filtro
SELECT bairro, SUM(limite_de_credito) AS limite_total 
        FROM tabela_de_clientes
        WHERE cidade = 'Rio de Janeiro'
        GROUP BY bairro;

-- Agrupando mais de uma coluna
SELECT estado, bairro, SUM(limite_de_credito) AS limite_total 
        FROM tabela_de_clientes
        WHERE cidade = 'Rio de Janeiro'
        GROUP BY estado, bairro;

-- Exercício: quantos itens de venda existem para o produto '1101035' ?
SELECT COUNT(*) AS total_de_produtos FROM itens_notas_fiscais 
        WHERE codigo_do_produto = '1101035' 
        AND quantidade = 99
        GROUP BY codigo_do_produto;
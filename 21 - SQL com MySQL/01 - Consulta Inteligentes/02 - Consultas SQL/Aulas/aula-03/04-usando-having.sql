USE sucos_vendas;

-- HAVING é filtro que se aplica ao resultado de resultado agrupado

SELECT estado, SUM(limite_de_credito) AS soma_limite 
        FROM tabela_de_clientes GROUP BY estado;

SELECT estado, SUM(limite_de_credito) AS soma_limite 
        FROM tabela_de_clientes GROUP BY estado
        HAVING SUM(limite_de_credito) > 900000;

SELECT embalagem, 
        MIN(preco_de_lista) AS menor_preco,
        MAX(preco_de_lista) AS maior_preco 
        FROM tabela_de_produtos GROUP BY embalagem;

SELECT embalagem, 
        MIN(preco_de_lista) AS menor_preco,
        MAX(preco_de_lista) AS maior_preco 
        FROM tabela_de_produtos GROUP BY embalagem
        HAVING SUM(preco_de_lista) <= 80;

SELECT embalagem, 
        MIN(preco_de_lista) AS menor_preco,
        MAX(preco_de_lista) AS maior_preco 
        FROM tabela_de_produtos GROUP BY embalagem
        HAVING SUM(preco_de_lista) <= 80 
        AND MAX(preco_de_lista) > 5;

-- Exercício: Quais foram os clientes que fizeram mais de 2000 compras em 2016?
SELECT cpf, COUNT(cpf) AS mais_compras
        FROM notas_fiscais
        WHERE data_venda LIKE '%2016%'
        GROUP by cpf
        HAVING COUNT(cpf) > 2000;

-- Minha Resposta: 03

-- No lugar de "data LIKE '%2016%'", dá para substituir por YEAR(DATA_VENDA) = 2016:
SELECT cpf, COUNT(cpf) AS mais_compras
        FROM notas_fiscais
        WHERE YEAR(data_venda) = 2016
        GROUP by cpf
        HAVING COUNT(cpf) > 2000;
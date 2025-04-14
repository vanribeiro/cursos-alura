USE sucos_vendas;

/*
    SELECT x,
    CASE
        WHEN y >= 8 AND y <= 10 THEN '10'
        WHEN y >= 7 AND y < 8 THEN '8'
        WHEN y >= 5 AND y <= 7 THEN '7'
        ELSE '0'
    END AS nome_da_coluna
    FROM tabela
*/

SELECT * FROM tabela_de_produtos LIMIT 5;

SELECT nome_do_produto, preco_de_lista,
CASE
    WHEN preco_de_lista >= 12 THEN 'produto caro'
    WHEN preco_de_lista >= 7 AND preco_de_lista < 12 THEN 'produto em conta'
    ELSE 'produto barato'
END AS status_preco
FROM tabela_de_produtos;

SELECT embalagem,
CASE
    WHEN preco_de_lista >= 12 THEN 'produto caro'
    WHEN preco_de_lista >= 7 AND preco_de_lista < 12 THEN 'produto em conta'
    ELSE 'produto barato'
END AS status_preco, AVG(preco_de_lista) AS preco_medio
FROM tabela_de_produtos
GROUP BY embalagem,
CASE
    WHEN preco_de_lista >= 12 THEN 'produto caro'
    WHEN preco_de_lista >= 7 AND preco_de_lista < 12 THEN 'produto em conta'
    ELSE 'produto barato'
END
ORDER BY embalagem;

-- Exercício:
-- Veja o ano de nascimento dos clientes e classifique-os como: 
-- Nascidos antes de 1990 são velhos, 
-- nascidos entre 1990 e 1995 são jovens e 
-- nascidos depois de 1995 são crianças. 
-- Liste o nome do cliente e esta classificação.

SELECT nome, data_de_nascimento,
CASE
    WHEN YEAR(data_de_nascimento) < 1990 THEN 'velhos'
    WHEN YEAR(data_de_nascimento) >= 1990 AND YEAR(data_de_nascimento) <= 1995 THEN 'jovens'
    ELSE 'crianças'
END AS ciclos
FROM tabela_de_clientes
ORDER BY ciclos;


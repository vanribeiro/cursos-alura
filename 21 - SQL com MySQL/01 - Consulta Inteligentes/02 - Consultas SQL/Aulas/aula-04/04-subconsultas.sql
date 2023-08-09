-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

SELECT * FROM tabela_de_clientes 
    WHERE bairro IN(
        SELECT DISTINCT bairro FROM tabela_de_vendedores
    );


SELECT x.embalagem, x.preco_maximo FROM
    (
        SELECT embalagem, 
            MAX(preco_de_lista) AS preco_maximo 
            FROM tabela_de_produtos
            GROUP BY embalagem
    ) x WHERE x.preco_maximo >= 10;

-- Exercício:
-- Qual seria a consulta usando subconsulta que seria equivalente a:
SELECT CPF, COUNT(*) FROM notas_fiscais
    WHERE YEAR(DATA_VENDA) = 2016
    GROUP BY CPF
    HAVING COUNT(*) > 2000;

-- Minha resposta:
SELECT notas_emitidas.cpf, notas_emitidas.total FROM
    (
        SELECT cpf, COUNT(*) AS total
            FROM notas_fiscais
            WHERE YEAR(data_venda) = 2016
            GROUP BY cpf
    ) notas_emitidas WHERE notas_emitidas.total > 2000;
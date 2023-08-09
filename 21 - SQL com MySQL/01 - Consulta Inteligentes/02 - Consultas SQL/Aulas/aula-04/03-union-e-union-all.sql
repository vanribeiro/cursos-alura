-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas
SELECT DISTINCT bairro FROM tabela_de_clientes;
SELECT DISTINCT bairro FROM tabela_de_vendedores;


SELECT bairro, nome, 'cliente' AS tipo FROM tabela_de_clientes
UNION
SELECT bairro, nome, 'vendedor' AS tipo FROM tabela_de_vendedores;

SELECT bairro, nome, 'cliente' AS tipo FROM tabela_de_clientes
UNION ALL
SELECT bairro, nome, 'vendedor' AS tipo FROM tabela_de_vendedores;
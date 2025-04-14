-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

-- CURDATE: data atual
SELECT CURDATE();

-- CURRENT_TIME: hora atual
SELECT CURRENT_TIME();

-- CURRENT_TIMESTAMP: data e hora atual
SELECT CURRENT_TIMESTAMP();

SELECT YEAR(CURRENT_TIMESTAMP());

SELECT MONTH(CURRENT_TIMESTAMP());

SELECT DAY(CURRENT_TIMESTAMP());

SELECT DAYNAME(CURRENT_TIMESTAMP());

SELECT DATEDIFF(CURRENT_TIMESTAMP(), '1965-09-04');

SELECT 
    CURRENT_TIMESTAMP() AS dia_hoje, 
    DATE_SUB(CURRENT_TIMESTAMP(), INTERVAL 5 DAY) AS resultado;

SELECT DISTINCT 
    data_venda, 
    DAYNAME(data_venda) as dia, 
    MONTHNAME(data_venda) as mes, 
    YEAR(data_venda) as ano 
    FROM notas_fiscais;

-- Exercício: Crie uma consulta que mostre o nome e a idade atual dos clientes.
-- Minha resposta:
SELECT 
    nome, 
    TIMESTAMPDIFF(YEAR, data_de_nascimento, CURRENT_DATE()) as idade_atual
    from tabela_de_clientes;
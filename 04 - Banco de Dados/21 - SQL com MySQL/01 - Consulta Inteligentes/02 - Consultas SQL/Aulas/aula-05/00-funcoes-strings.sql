-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

-- LTRIM

SELECT LTRIM(' OLÁ') AS resultado;

-- RTRIM

SELECT RTRIM('OLÁ ') AS resultado;

-- TRIM

SELECT TRIM(' OLÁ ') AS resultado;

-- CONCAT

SELECT CONCAT('Olá', ', ', 'tudo bem', '?') AS resultado;

-- UPPER

SELECT UPPER('Olá, tudo bem?') AS resultado;

-- LOWER

SELECT LOWER('OLÁ, PESSOAS!') AS resultado;

-- SUBSTRING

SELECT SUBSTRING('Olá, tudo bem?', 6) AS resultado;

SELECT SUBSTRING('Olá, tudo bem?', 6, 4) AS resultado;

SELECT CONCAT(nome, ' (', cpf, ')') from tabela_de_clientes;

-- Exercício:
-- Faça uma consulta listando o nome do cliente e o endereço completo
-- (Com rua, bairro, cidade e estado).

-- Minha resposta:
SELECT
    nome,
    CONCAT(
        ENDERECO_1, ', ',
        BAIRRO, ', ',
        CIDADE, '-', ESTADO
    ) as endereco_completo
from tabela_de_clientes;

-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

-- LTRIM

SELECT LTRIM(' OL�') AS resultado;

-- RTRIM

SELECT RTRIM('OL� ') AS resultado;

-- TRIM

SELECT TRIM(' OL� ') AS resultado;

-- CONCAT

SELECT CONCAT('Ol�', ', ', 'tudo bem', '?') AS resultado;

-- UPPER

SELECT UPPER('Ol�, tudo bem?') AS resultado;

-- LOWER

SELECT LOWER('OL�, PESSOAS!') AS resultado;

-- SUBSTRING

SELECT SUBSTRING('Ol�, tudo bem?', 6) AS resultado;

SELECT SUBSTRING('Ol�, tudo bem?', 6, 4) AS resultado;

SELECT CONCAT(nome, ' (', cpf, ')') from tabela_de_clientes;

-- Exerc�cio:
-- Fa�a uma consulta listando o nome do cliente e o endere�o completo
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

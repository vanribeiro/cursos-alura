-- Active: 1691456479247@@127.0.0.1@3306@vendas_sucos

-- usando outra base para inserir dados na minha tabela

SELECT 
    CODIGO_DO_PRODUTO AS CODIGO,
    NOME_DO_PRODUTO AS DESCRITOR,
    EMBALAGEM, TAMANHO, SABOR, PRECO_DE_LISTA AS PRECO_LISTA
    FROM sucos_vendas.tabela_de_produtos 
    WHERE CODIGO_DO_PRODUTO NOT IN (SELECT CODIGO FROM produtos);

DESC PRODUTOS;

INSERT INTO produtos
SELECT 
    CODIGO_DO_PRODUTO AS CODIGO,
    NOME_DO_PRODUTO AS DESCRITOR,
    SABOR, TAMANHO, EMBALAGEM, PRECO_DE_LISTA AS PRECO_LISTA
    FROM sucos_vendas.tabela_de_produtos 
    WHERE CODIGO_DO_PRODUTO NOT IN (SELECT CODIGO FROM produtos);

SELECT * FROM produtos;

-- Exercícios:
-- Inclua todos os clientes na tabela CLIENTES baseados nos 
-- registros da tabela TABELA_DE_CLIENTES da base SUCOS_VENDAS.

DESC cliente;
DESC sucos_vendas.tabela_de_clientes;

INSERT INTO cliente
SELECT CPF, NOME, ENDERECO_1 AS ENDERECO, BAIRRO, 
    CIDADE, ESTADO, CEP, DATA_DE_NASCIMENTO, IDADE, SEXO,
    LIMITE_DE_CREDITO, VOLUME_DE_COMPRA, PRIMEIRA_COMPRA
    FROM sucos_vendas.tabela_de_clientes 
    WHERE CPF NOT IN (SELECT CPF FROM cliente);

SELECT * FROM cliente;
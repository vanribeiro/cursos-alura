-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

SELECT SABOR FROM tabela_de_produtos WHERE CODIGO_DO_PRODUTO = '2001010';
SELECT CODIGO_DO_PRODUTO, SABOR FROM tabela_de_produtos;

DROP PROCEDURE IF EXISTS acha_sabor_produto;
DELIMITER $$
    CREATE PROCEDURE acha_sabor_produto(vProduto VARCHAR(50))
        BEGIN

            DECLARE vSabor VARCHAR(50);
            SELECT SABOR INTO vSabor 
                FROM tabela_de_produtos 
                WHERE CODIGO_DO_PRODUTO = vProduto;
            SELECT vSabor;

        END$$
DELIMITER;

CALL acha_sabor_produto('1000889');

---------------------------------

-- Exercícios:
-- Crie uma variável chamada NUMNOTAS e atribua a ela o número de notas fiscais do dia 01/01/2017. 
-- Mostre na saída do script o valor da variável. 
-- (Chame esta Stored Procedure de Quantidade_Notas).

SELECT COUNT(*) AS NUMNOTAS 
        FROM notas_fiscais 
        WHERE `DATA_VENDA` = '2017-01-01';

DROP PROCEDURE IF EXISTS Quantidade_Notas;
DELIMITER $$
    CREATE PROCEDURE Quantidade_Notas(data_da_nota DATETIME)
        BEGIN

            DECLARE NUMNOTAS INTEGER;
            SELECT COUNT(*) INTO NUMNOTAS 
            FROM notas_fiscais 
            WHERE DATA_VENDA = data_da_nota;
            
            SELECT NUMNOTAS AS QUANTIDADE_NOTAS;

        END$$
DELIMITER;

CALL Quantidade_Notas('2017-01-01');
-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

SELECT `CODIGO_DO_PRODUTO`, `PRECO_DE_LISTA` FROM tabela_de_produtos LIMIT 5;
SELECT 
    `CODIGO_DO_PRODUTO`, `PRECO_DE_LISTA` 
    FROM tabela_de_produtos 
    WHERE PRECO_DE_LISTA >= 6.309 AND PRECO_DE_LISTA <= 6.310;

DROP PROCEDURE IF EXISTS Acha_Status_Preco_Case;

DELIMITER $$
    CREATE PROCEDURE Acha_Status_Preco_Case(codigo VARCHAR(50))
        BEGIN
            DECLARE mensagem VARCHAR(20);
            DECLARE preco FLOAT;

            SELECT `PRECO_DE_LISTA` INTO preco
            FROM tabela_de_produtos 
            WHERE `CODIGO_DO_PRODUTO` = codigo;

            CASE 
                WHEN preco >= 12.00 THEN 
                    SET mensagem = 'Produto Caro'; 
                WHEN preco >= 7.00 AND preco < 12.00 THEN
                    SET mensagem = 'Produto Em Conta';
                ELSE  
                    SET mensagem = 'Produto Barato';
            END CASE;

            SELECT codigo, preco, mensagem;
        END$$
DELIMITER ;

-- Produto Barato
CALL Acha_Status_Preco_Case('1000889'); 

-- Produto Em Conta
CALL Acha_Status_Preco_Case('1002334');

-- Produto Caro
CALL Acha_Status_Preco_Case('1004327');

-----------------------------------------------

-- Exercício:
-- Implemente a Stored Procedure do exercício do vídeo 2, agora usando CASE CONDICIONAL. 
-- Chame de Comparativo_Vendas_Case_Cond.

-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

SELECT `CODIGO_DO_PRODUTO`, `PRECO_DE_LISTA` FROM tabela_de_produtos LIMIT 5;
SELECT 
    `CODIGO_DO_PRODUTO`, `PRECO_DE_LISTA` 
    FROM tabela_de_produtos 
    WHERE PRECO_DE_LISTA >= 6.309 AND PRECO_DE_LISTA <= 6.310;

DROP PROCEDURE IF EXISTS Acha_Status_Preco;

DELIMITER $$
    CREATE PROCEDURE Acha_Status_Preco(codigo VARCHAR(50))
        BEGIN
            DECLARE mensagem VARCHAR(20);
            DECLARE preco FLOAT;

            SELECT `PRECO_DE_LISTA` INTO preco
            FROM tabela_de_produtos 
            WHERE `CODIGO_DO_PRODUTO` = codigo;

            IF preco >= 12.00 THEN
                SET mensagem = 'Produto Caro';
            ELSEIF preco >= 7.00 AND preco < 12.00 THEN
                SET mensagem = 'Produto Em Conta';
            ELSE
                SET mensagem = 'Produto Barato';
            END IF;

            SELECT codigo, preco, mensagem;
        END$$
DELIMITER ;

CALL Acha_Status_Preco('1000889');
CALL Acha_Status_Preco('1002334');
CALL Acha_Status_Preco('1004327');
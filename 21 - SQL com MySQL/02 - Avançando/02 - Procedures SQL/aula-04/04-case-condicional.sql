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

-- Minha Resposta:
DROP PROCEDURE IF EXISTS Comparativo_Vendas_Case_Cond;

DELIMITER $$
CREATE PROCEDURE Comparativo_Vendas_Case_Cond(dia01 DATE, dia02 DATE)
    BEGIN  
        DECLARE TOTAL_VENDA_DIA_01 FLOAT;
        DECLARE TOTAL_VENDA_DIA_02 FLOAT;
        DECLARE CALCULO_VARIACAO FLOAT;
        DECLARE MENSAGEM VARCHAR(20);

        SELECT SUM(B.QUANTIDADE * B.PRECO) INTO TOTAL_VENDA_DIA_01 
            FROM NOTAS_FISCAIS A 
            INNER JOIN ITENS_NOTAS_FISCAIS B
            ON A.NUMERO = B.NUMERO
            WHERE A.DATA_VENDA = dia01;

        SELECT SUM(B.QUANTIDADE * B.PRECO) INTO TOTAL_VENDA_DIA_02 
            FROM NOTAS_FISCAIS A 
            INNER JOIN ITENS_NOTAS_FISCAIS B
            ON A.NUMERO = B.NUMERO
            WHERE A.DATA_VENDA = dia02;
        
        SET CALCULO_VARIACAO = ROUND(((TOTAL_VENDA_DIA_01/TOTAL_VENDA_DIA_02) - 1) * 100, 2);

        CASE 
            WHEN CALCULO_VARIACAO > 10 THEN 
                SET MENSAGEM = 'VERDE';
            WHEN CALCULO_VARIACAO >= -10 AND CALCULO_VARIACAO < 10 THEN
                SET MENSAGEM = 'AMARELO';
            WHEN CALCULO_VARIACAO < -10 THEN
                SET MENSAGEM = 'VERMELHO'; 
        END CASE;

        SELECT MENSAGEM;

    END$$
DELIMITER ;

SELECT * FROM notas_fiscais;

CALL Comparativo_Vendas_Case_Cond('2015-01-01', '2015-01-31'); -- VERDE
CALL Comparativo_Vendas_Case_Cond('2015-01-01', '2015-01-02'); -- AMARELO
CALL Comparativo_Vendas_Case_Cond('2015-01-01', '2015-01-05'); -- VERMELHO

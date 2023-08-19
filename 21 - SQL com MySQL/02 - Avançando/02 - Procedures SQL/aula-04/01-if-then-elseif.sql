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

-- Produto Barato
CALL Acha_Status_Preco('1000889'); 

-- Produto Em Conta
CALL Acha_Status_Preco('1002334');

-- Produto Caro
CALL Acha_Status_Preco('1004327');

------------------------------------------

-- Exercício:
-- Construa uma Stored Procedure chamada Comparativo_Vendas que compara as vendas em duas datas 
-- (Estas duas datas serão parâmetros da SP). 
-- Se a variação percentual destas vendas for maior que 10% a resposta deve ser "Verde". 
-- Se for entre -10% e 10% deve retornar "Amarela". 
-- Se o retorno form menor que -10% deve retornar "Vermelho".

SELECT ROUND(SUM(B.QUANTIDADE * B.PRECO), 2) AS TOTAL_VENDA 
    FROM NOTAS_FISCAIS A 
    INNER JOIN ITENS_NOTAS_FISCAIS B
    ON A.NUMERO = B.NUMERO
    WHERE A.DATA_VENDA = '2017-03-01';

-- Minha Resposta:
DROP PROCEDURE IF EXISTS Comparativo_Vendas;

DELIMITER $$
CREATE PROCEDURE Comparativo_Vendas(dia01 DATE, dia02 DATE)
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

        IF CALCULO_VARIACAO > 10 THEN
            SET MENSAGEM = 'VERDE';
        ELSEIF CALCULO_VARIACAO >= -10 AND CALCULO_VARIACAO < 10 THEN
            SET MENSAGEM = 'AMARELA';
        ELSE 
            SET MENSAGEM = 'VERMELHA';
        END IF;

        SELECT MENSAGEM;

    END$$
DELIMITER ;

SELECT * FROM notas_fiscais;

CALL Comparativo_Vendas('2015-01-01', '2015-01-31'); -- VERDE
CALL Comparativo_Vendas('2015-01-01', '2015-01-02'); -- AMARELA
CALL Comparativo_Vendas('2015-01-01', '2015-01-05'); -- VERMELHA
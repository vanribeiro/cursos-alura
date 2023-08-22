-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas
DROP PROCEDURE IF EXISTS cursor_looping;
DELIMITER $$
CREATE PROCEDURE cursor_looping()
    BEGIN
        DECLARE fim_do_cursor INT DEFAULT 0;
        DECLARE vNome VARCHAR(50);
        DECLARE c CURSOR FOR SELECT NOME FROM tabela_de_clientes LIMIT 4;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET fim_do_cursor = 1;


        OPEN c;
            WHILE fim_do_cursor = 0
            DO
                FETCH c INTO vNome;
                IF fim_do_cursor = 0 THEN
                    SELECT vNome;
                END IF;
            END WHILE;

        CLOSE c;

    END$$
DELIMITER;

CALL cursor_looping();

-------------------------------------

-- Exercício: Achando o valor total do crédito.
-- Crie uma Stored Procedure usando um cursor para achar o valor total de todos os créditos de todos os clientes. 
-- Chame esta SP de Limite_Creditos.

-- Minha resposta:

SELECT `LIMITE_DE_CREDITO` FROM tabela_de_clientes LIMIT 4;
SELECT SUM(`LIMITE_DE_CREDITO`) AS LIMITE_DE_CREDITO
    FROM tabela_de_clientes;

DROP PROCEDURE IF EXISTS Limite_Creditos;
DELIMITER $$
CREATE PROCEDURE Limite_Creditos()
    BEGIN
        DECLARE fim_do_cursor INT DEFAULT 0;
        DECLARE limite_por_cliente FLOAT DEFAULT 0;
        DECLARE total_de_limites_de_credito FLOAT DEFAULT 0;
        DECLARE limite CURSOR FOR SELECT LIMITE_DE_CREDITO FROM tabela_de_clientes;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET fim_do_cursor = 1;

        OPEN limite;
            WHILE fim_do_cursor = 0
            DO
                FETCH limite INTO limite_por_cliente;
                IF fim_do_cursor = 0 THEN
                    SET total_de_limites_de_credito = total_de_limites_de_credito + limite_por_cliente;
                END IF;
            END WHILE;

            SELECT total_de_limites_de_credito;
        CLOSE limite;

    END$$
DELIMITER;

CALL Limite_Creditos();


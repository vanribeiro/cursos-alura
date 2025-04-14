-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas
SET GLOBAL log_bin_trust_function_creators = 1;

SELECT FLOOR(RAND() * (10 - 0 + 1) + 0);

DROP FUNCTION IF EXISTS f_numero_aleatorio;

DELIMITER $$

CREATE FUNCTION f_numero_aleatorio(minimo INT, maximo INT)
    RETURNS INTEGER
    BEGIN
        DECLARE numero INT DEFAULT 0;
        SELECT FLOOR(RAND() * (maximo - minimo + 1) + minimo) INTO numero;

        RETURN numero;
    END$$
DELIMITER ;

SELECT f_numero_aleatorio(1, 10);

-------------------------------------
-- Exercício: Tabela com números aleatórios
--Crie uma tabela chamada TABELA_ALEATORIOS. O comando para cria-la é mostrado abaixo:

CREATE TABLE TABELA_ALEATORIOS(NUMERO INT);

-- Faça uma SP (Chame-a de Tabela_Numeros) que use um loop para gravar nesta tabela 100 números aleatórios entre 0 e 1000. 
-- Depois liste numa consulta esta tabela.
-- (Use a função f_numero_aleatorio criado no vídeo desta aula).

-- Minha resposta

DESC TABELA_ALEATORIOS;

DROP PROCEDURE IF EXISTS Tabela_Numeros;
DELIMITER $$
    CREATE PROCEDURE Tabela_Numeros()
        BEGIN
            DECLARE contador INT;
            DECLARE numeroRandomico INT DEFAULT 0;
            SET contador = 0;

            WHILE contador <= 100
                DO
                    SET numeroRandomico = f_numero_aleatorio(0, 1000);
                    INSERT INTO tabela_aleatorios(numero) VALUES(numeroRandomico);
                    SET contador = contador + 1;
            END WHILE;
        END$$
DELIMITER;

CALL Tabela_Numeros();

SELECT * FROM tabela_aleatorios;
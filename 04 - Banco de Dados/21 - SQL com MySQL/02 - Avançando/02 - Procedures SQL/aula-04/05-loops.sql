-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

CREATE TABLE TAB_LOOPING (ID INT);

DROP PROCEDURE IF EXISTS LOOPING_WHILE;
DELIMITER $$
CREATE PROCEDURE LOOPING_WHILE(vNumInicial INT, vNumFinal INT)
    BEGIN

        DECLARE vContador INT;
        DELETE FROM tab_looping;
        SET vContador = vNumInicial;

        WHILE vContador <= vNumFinal
            DO
                INSERT INTO tab_looping (ID) VALUES (vContador);
                SET vContador = vContador + 1;
        END WHILE;

        SELECT * FROM tab_looping;

    END$$

DELIMITER;

CALL LOOPING_WHILE(1, 10);

----------------------------------------

-- Exercício: Número de notas para diversos dias

-- Sabendo que a função abaixo soma de 1 dia uma data:
-- SELECT ADDDATE(DATA_VENDA, INTERVAL 1 DAY);
-- Faça uma Stored Procedure que, a partir do dia 01/01/2017, 
-- iremos contar o número de notas fiscais até o dia 10/01/2017.
-- Devemos imprimir a data e o número de notas fiscais. 
-- Chame esta Stored Procedure de Soma_Dias_Notas.

DROP PROCEDURE IF EXISTS Soma_Dias_Notas;
DELIMITER $$
CREATE PROCEDURE Soma_Dias_Notas(dataInicial date, dataFinal date)
    BEGIN

        DECLARE NUMNOTAS INT;

        WHILE dataInicial <= dataFinal
        DO
            SELECT COUNT(*) INTO NUMNOTAS  
            FROM notas_fiscais 
            WHERE DATA_VENDA = dataInicial;
            
            SELECT CONCAT(DATE_FORMAT(dataInicial, '%d/%m/%Y'), '-' , CAST(NUMNOTAS as CHAR(50)));

            SELECT ADDDATE(dataInicial, INTERVAL 1 DAY) INTO dataInicial;
        END WHILE;


        
    END$$
DELIMITER;

SELECT * FROM notas_fiscais WHERE `DATA_VENDA`='2017-01-01' AND `DATA_VENDA`='2017-01-10';

CALL Soma_Dias_Notas('2017-01-01', '2017-01-10')

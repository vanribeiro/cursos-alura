-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas
DROP PROCEDURE IF EXISTS ola;
DELIMITER $$
CREATE PROCEDURE ola()
    BEGIN
        SELECT 'Olá!!!';
    END$$
DELIMITER;


DROP PROCEDURE IF EXISTS mostra_numero;
DELIMITER $$
CREATE PROCEDURE mostra_numero()
    BEGIN
        SELECT (1 + 9) - 5;
    END$$
DELIMITER;

DROP PROCEDURE IF EXISTS mostra_numero_alias;
DELIMITER $$
CREATE PROCEDURE mostra_numero_alias()
    BEGIN
        SELECT (1 + 9) - 5 as resultado;
    END$$
DELIMITER;

DROP PROCEDURE IF EXISTS sp_com_funcoes;
DELIMITER $$
CREATE PROCEDURE sp_com_funcoes()
    BEGIN
        SELECT CONCAT('Olá', '!!!!... ', ((1 + 9) - 5)) as resultado;
    END$$
DELIMITER;



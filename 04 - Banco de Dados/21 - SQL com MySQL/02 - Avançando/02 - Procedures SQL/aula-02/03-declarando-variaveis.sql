
DROP PROCEDURE IF EXISTS exibe_variavel;
DELIMITER $$
CREATE PROCEDURE exibe_variavel()
    BEGIN
        DECLARE texto CHAR(12) DEFAULT 'Olá!!!!!';
        SELECT texto;
    END$$
DELIMITER ;

CALL exibe_variavel;

-------------------------------------------------------

DROP PROCEDURE IF EXISTS tipos_de_dados;
DELIMITER $$
CREATE PROCEDURE tipos_de_dados()
    BEGIN
        DECLARE v VARCHAR(5) DEFAULT 'texto';
        DECLARE i INTEGER DEFAULT 10;
        DECLARE d DECIMAL(4, 2) DEFAULT 56.12;
        DECLARE dt DATE DEFAULT '2023-08-15';
        SELECT v, i, d, dt;
    END$$
DELIMITER ;

CALL tipos_de_dados;

-------------------------------------------------------

DROP PROCEDURE IF EXISTS data_local_hora;
DELIMITER $$
CREATE PROCEDURE data_local_hora()
    BEGIN
        DECLARE ts DATETIME DEFAULT LOCALTIMESTAMP;
        SELECT ts;
    END$$
DELIMITER ;

CALL data_local_hora;

-------------------------------------------------------

DROP PROCEDURE IF EXISTS atribui_valor;
DELIMITER $$
CREATE PROCEDURE atribui_valor()
    BEGIN
        DECLARE texto VARCHAR(30) DEFAULT 'texto inicial';
        SELECT texto;
        SET texto = 'texto modificado';
        SELECT texto;
    END$$
DELIMITER ;

CALL atribui_valor;

-----------------------------------------------------

-- Exercício
-- Construa um script declarando estas variáveis, atribuindo valores a elas 
-- e exibindo na saída do MYSQL.(Dê o nome da procedure de sp_Exerc01).

-- Minha Resposta:
DROP PROCEDURE IF EXISTS sp_Exerc01;
DELIMITER $$
CREATE PROCEDURE sp_Exerc01()
    BEGIN

        DECLARE Cliente CHAR(10);
        DECLARE Idade INTEGER;
        DECLARE DataNascimento DATETIME;
        DECLARE Custo DECIMAL(4, 2);

        SET Cliente = 'João';
        SET Idade = 10;
        SET DataNascimento = '2007-01-10';
        SET Custo = 10.23;

        SELECT Cliente, Idade, DataNascimento, Custo;

    END$$

DELIMITER ;

CALL sp_Exerc01;
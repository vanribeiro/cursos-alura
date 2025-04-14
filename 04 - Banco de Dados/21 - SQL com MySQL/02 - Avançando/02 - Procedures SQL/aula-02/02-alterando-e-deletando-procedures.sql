

DROP PROCEDURE IF EXISTS ola_deleta;

-- Criação e Alteração:
DELIMITER $$
CREATE PROCEDURE ola_deleta()
    BEGIN
        SELECT 'Olá, não me deleta, me edita!!! ';
    END$$
DELIMITER;

CALL ola_deleta;

-- Deleção:
DROP PROCEDURE ola_deleta;
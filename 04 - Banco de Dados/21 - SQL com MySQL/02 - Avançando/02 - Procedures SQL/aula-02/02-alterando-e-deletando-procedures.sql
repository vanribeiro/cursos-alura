

DROP PROCEDURE IF EXISTS ola_deleta;

-- Cria��o e Altera��o:
DELIMITER $$
CREATE PROCEDURE ola_deleta()
    BEGIN
        SELECT 'Ol�, n�o me deleta, me edita!!! ';
    END$$
DELIMITER;

CALL ola_deleta;

-- Dele��o:
DROP PROCEDURE ola_deleta;
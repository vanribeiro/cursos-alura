-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas
SET GLOBAL log_bin_trust_function_creators = 1;

DROP FUNCTION IF EXISTS f_acha_tipo_sabor;

DELIMITER $$
CREATE FUNCTION f_acha_tipo_sabor(vSabor VARCHAR(50))
RETURNS VARCHAR(20)
    BEGIN
        DECLARE vRetorno VARCHAR(20) DEFAULT '';

        CASE vSabor
            WHEN 'Lima/Lim�o' THEN 
                SET vRetorno = 'C�trico';
            WHEN 'Laranja' THEN 
                SET vRetorno = 'C�trico';
            WHEN 'Morango/Lim�o' THEN 
                SET vRetorno = 'C�trico';
            WHEN 'Morango' THEN 
                SET vRetorno = 'Neutro';
            WHEN 'Uva' THEN 
                SET vRetorno = 'Neutro';
            ELSE 
                SET vRetorno = '�cidos';
        END CASE;

        RETURN vRetorno;
    END$$

DELIMITER ;

SELECT f_acha_tipo_sabor('Uva');

SELECT 
    NOME_DO_PRODUTO, SABOR, 
    f_acha_tipo_sabor(SABOR) AS TIPO 
    FROM tabela_de_produtos;

SELECT 
    NOME_DO_PRODUTO, SABOR
    FROM tabela_de_produtos
    WHERE f_acha_tipo_sabor(SABOR) = 'Neutro' COLLATE 'utf8mb4_unicode_ci';

---------------------------------------------------
-- Exerc�cio: Fun��o para obter o n�mero
-- Veja a Stored Procedure abaixo:
CREATE PROCEDURE `sp_numero_notas` ()
    BEGIN
        DECLARE NUMNOTAS INT;
        SELECT COUNT(*) INTO NUMNOTAS FROM notas_fiscais WHERE DATA_VENDA = '20170101';
        SELECT NUMNOTAS;
    END

-- Transforme esta SP em uma fun��o onde passamos como par�metro da data e retornamos o n�mero de notas. 
-- Chame esta fun��o de NumeroNotas. 
-- Ap�s a cria��o da fun��o teste seu uso com um SELECT.

DROP FUNCTION IF EXISTS NumeroNotas;

DELIMITER $$

CREATE FUNCTION NumeroNotas(vData date)
    RETURNS INTEGER
    BEGIN
        DECLARE NUMNOTAS INT DEFAULT 0;
        SELECT COUNT(*) INTO NUMNOTAS 
            FROM notas_fiscais 
            WHERE DATA_VENDA = vData;

        RETURN NUMNOTAS;
    END$$
DELIMITER ;

SELECT NumeroNotas('20170101');
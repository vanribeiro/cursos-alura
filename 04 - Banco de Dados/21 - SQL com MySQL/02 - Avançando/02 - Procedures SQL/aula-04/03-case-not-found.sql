-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas
DROP PROCEDURE IF EXISTS acha_tipo_de_sabor_erro;
DELIMITER $$
CREATE PROCEDURE acha_tipo_de_sabor_erro(vProduto VARCHAR(50))
BEGIN

    DECLARE vSabor VARCHAR(50);
    DECLARE mensagemErro VARCHAR(30);
    DECLARE CONTINUE HANDLER FOR 1339 
        SET mensagemErro = 'O CASE não está completo';

    SELECT SABOR INTO vSabor 
    FROM tabela_de_produtos
    WHERE codigo_do_produto = vProduto;

    CASE vSabor
        WHEN 'Lima/Limão' THEN 
            SELECT 'Cítrico';
        WHEN 'Laranja' THEN 
            SELECT 'Cítrico';
        WHEN 'Morango/Limão' THEN 
            SELECT 'Cítrico';
        WHEN 'Morango' THEN 
            SELECT 'Neutro';
        WHEN 'Uva' THEN 
            SELECT 'Neutro';
    END CASE;

    SELECT mensagemErro;

END$$
DELIMITER;

-- Uva
CALL acha_tipo_de_sabor_erro('1000889'); 

-- Laranja
CALL acha_tipo_de_sabor_erro('1037797'); 

-- Sabor que não está no case: Açaí
CALL acha_tipo_de_sabor_erro('231776'); 


SELECT CODIGO_DO_PRODUTO, SABOR 
    FROM tabela_de_produtos 
    WHERE SABOR IN('Uva', 'Laranja', 'Morango', 'Açaí');
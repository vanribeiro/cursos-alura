-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas
DROP PROCEDURE IF EXISTS acha_tipo_de_sabor;
DELIMITER $$
CREATE PROCEDURE acha_tipo_de_sabor(vProduto VARCHAR(50))
BEGIN

    DECLARE vSabor VARCHAR(50);

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
        ELSE 
            SELECT 'Ácidos';
    END CASE;
END$$
DELIMITER;

-- Uva
CALL acha_tipo_de_sabor('1000889'); 

-- Laranja
CALL acha_tipo_de_sabor('1037797'); 

-- Açaí
CALL acha_tipo_de_sabor('231776'); 


SELECT CODIGO_DO_PRODUTO, SABOR 
    FROM tabela_de_produtos 
    WHERE SABOR IN('Uva', 'Laranja', 'Morango', 'Açaí');
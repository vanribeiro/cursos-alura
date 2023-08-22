-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas
SET GLOBAL log_bin_trust_function_creators = 1;

DROP FUNCTION IF EXISTS f_cliente_aleatorio;

DELIMITER $$

CREATE FUNCTION f_cliente_aleatorio()
    RETURNS VARCHAR(11)
    BEGIN
        DECLARE vCpf VARCHAR(11);
        DECLARE num_max_tabela INT;
        DECLARE num_aleatorio INT;

        SELECT COUNT(*) INTO num_max_tabela FROM tabela_de_clientes;

        SET num_aleatorio = f_numero_aleatorio(1, num_max_tabela);
        SET num_aleatorio = num_aleatorio - 1;

        SELECT cpf INTO vCpf 
            FROM tabela_de_clientes
            LIMIT num_aleatorio, 1;

        RETURN vCpf;
    END$$
DELIMITER ;

SELECT COUNT(*) FROM tabela_de_clientes;

SELECT f_cliente_aleatorio();

----------------------------------

-- Exercício: Fazendo função para produto aleatório
-- Neste exercício crie outra função para obter o produto também usando a função aleatório.

-- Minha resposta:

DROP FUNCTION IF EXISTS f_produto_aleatorio;

DELIMITER $$

CREATE FUNCTION f_produto_aleatorio()
    RETURNS VARCHAR(10)
    BEGIN
        DECLARE vCodido_Do_Produto VARCHAR(10);
        DECLARE num_max_tabela INT;
        DECLARE num_aleatorio INT;

        SELECT COUNT(*) INTO num_max_tabela FROM tabela_de_produtos;

        SET num_aleatorio = f_numero_aleatorio(1, num_max_tabela);
        SET num_aleatorio = num_aleatorio - 1;

        SELECT CODIGO_DO_PRODUTO INTO vCodido_Do_Produto 
            FROM tabela_de_produtos
            LIMIT num_aleatorio, 1;

        RETURN vCodido_Do_Produto;
    END$$
DELIMITER ;

SELECT f_produto_aleatorio();

----------------------------------

-- Exercício: Fazendo função para vendedor aleatório
-- Neste exercício crie outra função para obter o vendedor também usando a função aleatório.

-- Minha resposta:

DROP FUNCTION IF EXISTS f_vendedor_aleatorio;

DELIMITER $$

CREATE FUNCTION f_vendedor_aleatorio()
    RETURNS VARCHAR(5)
    BEGIN
        DECLARE vMatricula VARCHAR(5);
        DECLARE num_max_tabela INT;
        DECLARE num_aleatorio INT;

        SELECT COUNT(*) INTO num_max_tabela FROM tabela_de_vendedores;

        SET num_aleatorio = f_numero_aleatorio(1, num_max_tabela);
        SET num_aleatorio = num_aleatorio - 1;

        SELECT MATRICULA INTO vMatricula 
            FROM tabela_de_vendedores
            LIMIT num_aleatorio, 1;

        RETURN vMatricula;
    END$$
DELIMITER ;

SELECT f_vendedor_aleatorio();


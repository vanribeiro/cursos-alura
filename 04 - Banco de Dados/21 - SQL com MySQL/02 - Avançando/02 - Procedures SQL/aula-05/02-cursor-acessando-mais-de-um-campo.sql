-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

DROP PROCEDURE IF EXISTS cursor_mais_de_uma_coluna;
DELIMITER $$
CREATE PROCEDURE cursor_mais_de_uma_coluna()
    BEGIN
        DECLARE fim_do_cursor INT DEFAULT 0;
        DECLARE vCidade, vEstado, vCEP VARCHAR(50);
        DECLARE vNome, vEndereco VARCHAR(150);

        DECLARE cursor_clientes CURSOR FOR 
            SELECT NOME, ENDERECO_1, CIDADE, ESTADO, CEP 
            FROM tabela_de_clientes LIMIT 4;

        DECLARE CONTINUE HANDLER FOR NOT FOUND SET fim_do_cursor = 1;

        OPEN cursor_clientes;
            WHILE fim_do_cursor = 0
            DO
                FETCH cursor_clientes 
                    INTO 
                        vNome, 
                        vEndereco,
                        vCidade,
                        vEstado,
                        vCEP;
                IF fim_do_cursor = 0 THEN
                    SELECT CONCAT(
                        vNome, 
                        ' , Endereço: ', vEndereco, 
                        ', ', vCidade, 
                        '-', vEstado, 
                        ', CEP: ', vCEP
                    ) AS endereco;
                END IF;
            END WHILE;

        CLOSE cursor_clientes;

    END$$
DELIMITER;

CALL cursor_mais_de_uma_coluna();

---------------------------------
-- Exercício: Calculando o valor total do faturamento
-- Crie uma Stored Procedure usando um cursor para achar o valor total do faturamento para um mês e um ano.
-- Chame esta Stored Procedure de Mais_Um_Campo.

-- consulta que obtem o faturamento dentro de um mês e ano.

SELECT MONTH(NF.DATA_VENDA) AS MES, INF.QUANTIDADE, INF.PRECO FROM ITENS_NOTAS_FISCAIS INF
INNER JOIN NOTAS_FISCAIS  NF ON NF.NUMERO = INF.NUMERO
WHERE MONTH(NF.DATA_VENDA) = 1 AND YEAR(NF.DATA_VENDA) = 2017;

-- Minha Resposta

SELECT 
    MONTH(NF.DATA_VENDA) AS MES, 
    YEAR(NF.DATA_VENDA) AS ANO, 
    ROUND(SUM(INF.QUANTIDADE), 2) AS QUANTIDADE,
    ROUND(SUM(INF.PRECO), 2) AS PRECO,
    ROUND(SUM(INF.PRECO * INF.QUANTIDADE), 2) AS FATURAMENTO
    FROM ITENS_NOTAS_FISCAIS INF
    INNER JOIN NOTAS_FISCAIS  NF ON NF.NUMERO = INF.NUMERO
    WHERE MONTH(NF.DATA_VENDA) = 1 AND YEAR(NF.DATA_VENDA) = 2017
    GROUP BY MONTH(NF.DATA_VENDA), YEAR(NF.DATA_VENDA);
    -- R$ 3.838.334,10


DROP PROCEDURE IF EXISTS Mais_Um_Campo;

DELIMITER$$
    CREATE PROCEDURE Mais_Um_Campo()

    BEGIN
        DECLARE fim_do_cursor INT DEFAULT 0;
        DECLARE vPreco FLOAT DEFAULT 0;
        DECLARE vQuantidade INT DEFAULT 0;
        DECLARE faturamento FLOAT DEFAULT 0;
        DECLARE multipica FLOAT DEFAULT 0;

        DECLARE cursor_precos CURSOR FOR
            SELECT INF.QUANTIDADE, INF.PRECO FROM ITENS_NOTAS_FISCAIS INF
            INNER JOIN NOTAS_FISCAIS NF ON NF.NUMERO = INF.NUMERO
            WHERE MONTH(NF.DATA_VENDA) = 1 AND YEAR(NF.DATA_VENDA) = 2017;

        DECLARE CONTINUE HANDLER FOR NOT FOUND SET fim_do_cursor = 1;

        OPEN cursor_precos;
            WHILE fim_do_cursor = 0
                DO
                    FETCH cursor_precos INTO vQuantidade, vPreco;
                    IF fim_do_cursor = 0 THEN
                        SET faturamento = faturamento + ROUND(vPreco * CAST(vQuantidade AS FLOAT), 2);
                    END IF;
                END WHILE;
                SELECT faturamento;

        CLOSE cursor_precos;

    END$$

DELIMITER ;

CALL Mais_Um_Campo();
-- R$ 3.838.320,00


DESC itens_notas_fiscais;


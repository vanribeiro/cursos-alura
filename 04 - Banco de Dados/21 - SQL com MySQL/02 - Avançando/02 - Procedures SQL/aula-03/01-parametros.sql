-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

DROP PROCEDURE IF EXISTS inclui_novo_parametro;
DELIMITER $$
CREATE PROCEDURE inclui_novo_parametro(
    vCodigo VARCHAR(50),
    vNome VARCHAR(50),
    vSabor VARCHAR(50),
    vTamanho VARCHAR(50),
    vEmbalagem VARCHAR(50),
    vPrecoLista DECIMAL(10, 2)
)
    BEGIN

        INSERT INTO tabela_de_produtos (
            CODIGO_DO_PRODUTO, NOME_DO_PRODUTO, SABOR, TAMANHO, EMBALAGEM, PRECO_DE_LISTA
        ) VALUES (
            vCodigo, vNome, vSabor, vTamanho, vEmbalagem, vPrecoLista
        );

    END$$
DELIMITER ;

CALL inclui_novo_parametro ('2001008', 'Sabor da Serra  1 Litro - Graviola', 'Graviola', '1 Litro', 'Garrafa', 7.50);

SELECT * FROM tabela_de_produtos WHERE NOME_DO_PRODUTO LIKE 'Sabor da Serra do Mar%';

-------------------------

-- Exercício:
-- Crie uma Stored procedure para reajustar o % de comissão dos vendedores. 
-- Inclua como parâmetro da SP o %, expresso em valor (Ex: 0,90).
-- Nome da Stored Procedure: Reajuste_Comissao.

SELECT NOME, PERCENTUAL_COMISSAO FROM tabela_de_vendedores LIMIT 1;

DROP PROCEDURE IF EXISTS Reajuste_Comissao;

DELIMITER $$
    CREATE PROCEDURE Reajuste_Comissao(valor_da_comissao DECIMAL(10, 4))
        BEGIN
            UPDATE tabela_de_vendedores
            SET PERCENTUAL_COMISSAO = PERCENTUAL_COMISSAO * (1 + valor_da_comissao);
        END$$
DELIMITER;

START TRANSACTION;

CALL Reajuste_Comissao(0.9);

SELECT NOME, PERCENTUAL_COMISSAO FROM tabela_de_vendedores;

ROLLBACK;

COMMIT;
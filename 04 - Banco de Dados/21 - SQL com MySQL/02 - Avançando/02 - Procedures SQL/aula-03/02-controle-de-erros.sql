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

        DECLARE mensagem VARCHAR(50);
        DECLARE EXIT HANDLER FOR 1062
            BEGIN
                SET mensagem = 'Problema de chave primária!';
                SELECT mensagem;
            END;

        INSERT INTO tabela_de_produtos (
            CODIGO_DO_PRODUTO, NOME_DO_PRODUTO, SABOR, TAMANHO, EMBALAGEM, PRECO_DE_LISTA
        ) VALUES (
            vCodigo, vNome, vSabor, vTamanho, vEmbalagem, vPrecoLista
        );

        SET mensagem = 'Produto incluído com sucesso!';
        SELECT mensagem;

    END$$
DELIMITER ;

CALL inclui_novo_parametro ('2001018', 'Sabor da Serra  1 Litro - Graviola', 'Graviola', '1 Litro', 'Garrafa', 7.50);

SELECT * FROM tabela_de_produtos WHERE `CODIGO_DO_PRODUTO` = '2001010';
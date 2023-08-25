-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas
DROP PROCEDURE IF EXISTS p_inserir_venda;
DELIMITER $$
CREATE PROCEDURE p_inserir_venda(vData DATE, max_itens INT, max_quantidade INT)
    BEGIN
        DECLARE vCliente VARCHAR(11);
        DECLARE vProduto VARCHAR(10);
        DECLARE vVendedor VARCHAR(5);
        DECLARE vQuantidade INT;
        DECLARE vPreco FLOAT;
        DECLARE vItens INT;
        DECLARE vNumItensNota INT;
        DECLARE vNumeroNota INT;
        DECLARE contador INT DEFAULT 1;

        SELECT (MAX(numero) + 1) INTO vNumeroNota FROM notas_fiscais;
        SET vCliente = f_cliente_aleatorio();
        SET vVendedor = f_vendedor_aleatorio();


        INSERT INTO notas_fiscais(cpf, matricula, data_venda, numero, imposto) 
            VALUES(vCliente, vVendedor, vData, vNumeroNota, 0.18);

        SET vItens = f_numero_aleatorio(1, max_itens);

        WHILE contador <= vItens
        DO
            SET vProduto = f_produto_aleatorio();
            SELECT COUNT(*) INTO vNumItensNota
                FROM itens_notas_fiscais
                WHERE numero = vNumItensNota 
                AND codigo_do_produto = vProduto;

            IF vNumItensNota = 0 THEN

                SET vQuantidade = f_numero_aleatorio(10, max_quantidade);
                SELECT preco_de_lista INTO vPreco 
                    FROM tabela_de_produtos
                    WHERE codigo_do_produto = vProduto;

                INSERT INTO itens_notas_fiscais(numero, codigo_do_produto, quantidade, preco) 
                    VALUES(vNumeroNota, vProduto, vQuantidade, vPreco);
            END IF;
            
            SET contador = contador + 1;
        END WHILE;

    END$$
DELIMITER;

CALL p_inserir_venda('2019-05-17', 3, 100);

SELECT * FROM itens_notas_fiscais INF 
    INNER JOIN notas_fiscais NF 
    ON INF.NUMERO = NF.NUMERO 
    WHERE DATA_VENDA = '2019-05-17';
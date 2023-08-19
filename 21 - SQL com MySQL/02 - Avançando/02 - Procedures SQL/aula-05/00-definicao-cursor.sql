-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

DROP PROCEDURE IF EXISTS cursor_primeiro_contato;
DELIMITER $$
CREATE PROCEDURE cursor_primeiro_contato()
    BEGIN
        DECLARE vNome VARCHAR(50);
        DECLARE c CURSOR FOR SELECT NOME FROM tabela_de_clientes LIMIT 4;

        OPEN c;

            FETCH c INTO vNome;
            SELECT vNome;

            FETCH c INTO vNome;
            SELECT vNome;

            FETCH c INTO vNome;
            SELECT vNome;

            FETCH c INTO vNome;
            SELECT vNome;
        
        CLOSE c;

    END$$
DELIMITER;

CALL cursor_primeiro_contato();
-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

SELECT `CPF`, `NOME`, `DATA_DE_NASCIMENTO` FROM tabela_de_clientes;

DROP PROCEDURE IF EXISTS cliente_novo_velho;

DELIMITER $$
    CREATE PROCEDURE cliente_novo_velho(vCPF VARCHAR(11))
        BEGIN

            DECLARE vResultado VARCHAR(20);
            DECLARE vDataNascimento DATE;

            SELECT `DATA_DE_NASCIMENTO` INTO vDataNascimento 
            FROM tabela_de_clientes WHERE `CPF` = vCPF;

            IF vDataNascimento < '2000-01-01' THEN
                SET vResultado = 'Cliente Velho';
            ELSE 
                SET vResultado = 'Cliente Novo';
            END IF;

            SELECT vResultado;

        END$$
DELIMITER ;

CALL cliente_novo_velho('1471156710');
CALL cliente_novo_velho('19290992743');

------------------------------------------

-- Exercício
-- Crie uma Stored Procedure que, baseado em uma data, contamos o número de notas fiscais. 
-- Se houverem mais que 70 notas exibimos a mensagem: ‘Muita nota’. 
-- Ou então exibimos a mensagem ‘Pouca nota’. Também exibir o número de notas. 
-- Chame esta Stored Procedure de Testa_Numero_Notas.
-- A data a ser usada para testar a nota será um parâmetro da Stored Procedure.

-- Minha resposta:
SELECT * FROM notas_fiscais LIMIT 10;
SELECT COUNT (*) FROM notas_fiscais WHERE `DATA_VENDA` = '2015-01-01';

DROP PROCEDURE IF EXISTS Testa_Numero_Notas;

DELIMITER $$
    CREATE PROCEDURE Testa_Numero_Notas(data_da_nota_fiscal DATE)

        BEGIN
            DECLARE CONTAGEM_NOTA_FISCAL INTEGER;
            DECLARE MENSAGEM VARCHAR(20);

            SELECT COUNT(*) INTO CONTAGEM_NOTA_FISCAL
            FROM notas_fiscais 
            WHERE `DATA_VENDA` = data_da_nota_fiscal;

            IF CONTAGEM_NOTA_FISCAL > 70 THEN
                SET MENSAGEM = 'Muita nota';
            ELSE
                SET MENSAGEM = 'Pouca nota';
            END IF;

            SELECT MENSAGEM, CONTAGEM_NOTA_FISCAL;

        END$$
DELIMITER ;

CALL Testa_Numero_Notas('2015-01-01');
CALL Testa_Numero_Notas('2018-03-29');


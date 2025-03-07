-- Active: 1691456479247@@127.0.0.1@3306@vendas_sucos
CREATE TABLE TAB_IDENTITY (
    ID INT AUTO_INCREMENT, 
    DESCRITOR VARCHAR(20),
    PRIMARY KEY(ID)
);

INSERT INTO tab_identity(DESCRITOR) VALUES ('CLIENTE 1');

SELECT * FROM tab_identity;

INSERT INTO tab_identity(DESCRITOR) VALUES ('CLIENTE 2'), ('CLIENTE 3');

INSERT INTO tab_identity(ID, DESCRITOR) VALUES (NULL, 'CLIENTE 4');

DELETE FROM tab_identity WHERE ID = 2;

INSERT INTO tab_identity(DESCRITOR) VALUES ('CLIENTE 5');

DELETE FROM tab_identity WHERE ID = 5;

INSERT INTO tab_identity(DESCRITOR) VALUES ('CLIENTE 6');

INSERT INTO tab_identity(ID, DESCRITOR) VALUES (1000, 'CLIENTE 1000');

INSERT INTO tab_identity(DESCRITOR) VALUES (CONCAT('CLIENTE ', ID));

UPDATE tab_identity SET DESCRITOR = 'CLIENTE 1001' WHERE ID = 1001;


-- Exerc�cio:
-- Qual ser� o valor final da sequ�ncia ap�s a execu��o dos comandos abaixo?
-- Minha resposta: 6

CREATE TABLE TAB_IDENTITY2 (ID INT AUTO_INCREMENT, DESCRITOR VARCHAR(20), PRIMARY KEY(ID));

INSERT INTO TAB_IDENTITY2 (DESCRITOR) VALUES ('CLIENTE1');

INSERT INTO TAB_IDENTITY2 (DESCRITOR) VALUES ('CLIENTE2');

INSERT INTO TAB_IDENTITY2 (DESCRITOR) VALUES ('CLIENTE3');

INSERT INTO TAB_IDENTITY2 (ID, DESCRITOR) VALUES (NULL, 'CLIENTE4');

DELETE FROM TAB_IDENTITY2 WHERE ID = 3;

INSERT INTO TAB_IDENTITY2 (ID, DESCRITOR) VALUES (NULL, 'CLIENTE6');

INSERT INTO TAB_IDENTITY2 (ID, DESCRITOR) VALUES (NULL, 'CLIENTE7');

DELETE FROM TAB_IDENTITY2 WHERE ID = 2;

SELECT * FROM tab_identity2;
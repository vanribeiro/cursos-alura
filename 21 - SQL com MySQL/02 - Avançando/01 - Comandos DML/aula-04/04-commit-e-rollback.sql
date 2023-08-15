-- Active: 1691456479247@@127.0.0.1@3306@vendas_sucos
START TRANSACTION;

SELECT * FROM vendedores;

UPDATE vendedores SET COMISSAO = COMISSAO * 1.15;

ROLLBACK;

COMMIT;

--------------------------------

START TRANSACTION;

INSERT INTO vendedores (
    MATRICULA,
    NOME,
    BAIRRO,
    COMISSAO,
    DATA_DE_ADMISSAO,
    FERIAS
) VALUES(
    '99999',
    'João da Silva',
    'Icaraí',
    '0.08',
    '2012-01-15',
    0
);

INSERT INTO vendedores (
    MATRICULA,
    NOME,
    BAIRRO,
    COMISSAO,
    DATA_DE_ADMISSAO,
    FERIAS
) VALUES(
    '99981',
    'João da Silva 2',
    'Icaraí',
    '0.08',
    '2012-01-15',
    0
);

UPDATE vendedores SET COMISSAO = COMISSAO * 1.15;

ROLLBACK;

COMMIT;
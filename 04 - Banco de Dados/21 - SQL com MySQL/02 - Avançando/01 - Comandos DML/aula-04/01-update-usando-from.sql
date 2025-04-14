-- Active: 1691456479247@@127.0.0.1@3306@vendas_sucos

SELECT * FROM vendedores;

SELECT * FROM sucos_vendas.tabela_de_vendedores;

SELECT 
    A.NOME,
    B.NOME, 
    A.FERIAS,
    B.DE_FERIAS 
    FROM vendedores A
    INNER JOIN sucos_vendas.tabela_de_vendedores B
    ON A.MATRICULA = SUBSTRING(B.MATRICULA, 3, 3);

UPDATE vendedores A
    INNER JOIN sucos_vendas.tabela_de_vendedores B
    ON A.MATRICULA = SUBSTRING(B.MATRICULA, 3, 3)
    SET A.FERIAS = B.DE_FERIAS;

UPDATE vendedores A
    INNER JOIN sucos_vendas.tabela_de_vendedores B
    ON A.MATRICULA = SUBSTRING(B.MATRICULA, 3, 3)
    SET A.NOME = B.NOME;

-- Exercício: 
-- Podemos observar que os vendedores possuem bairro associados a eles. 
-- Vamos aumentar em 30% o volume de compra dos clientes que possuem, em seus endereços 
-- bairros onde os vendedores possuam escritórios.

SELECT NOME, BAIRRO, VOLUME_DE_COMPRA FROM cliente;

-- Minha resposta:
UPDATE cliente A 
    INNER JOIN sucos_vendas.tabela_de_vendedores B 
    ON A.BAIRRO = B.BAIRRO
    SET VOLUME_DE_COMPRA = (VOLUME_DE_COMPRA * 1.3);


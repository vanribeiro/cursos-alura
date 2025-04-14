-- Active: 1691456479247@@127.0.0.1@3306@vendas_sucos

INSERT INTO PRODUTOS (
    CODIGO, DESCRITOR, SABOR, TAMANHO, EMBALAGEM, PRECO_LISTA
) VALUES 
    ('1001001','Sabor dos Alpes 700 ml - Manga','Manga','700 ml','Garrafa',7.50),
    ('1001000','Sabor dos Alpes 700 ml - Melão','Melão','700 ml','Garrafa',7.50),
    ('1001002','Sabor dos Alpes 700 ml - Graviola','Graviola','700 ml','Garrafa',7.50),
    ('1001003','Sabor dos Alpes 700 ml - Tangerina','Tangerina','700 ml','Garrafa',7.50),
    ('1001004','Sabor dos Alpes 700 ml - Abacate','Abacate','700 ml','Garrafa',7.50),
    ('1001005','Sabor dos Alpes 700 ml - Açai','Açai','700 ml','Garrafa',7.50),
    ('1001006','Sabor dos Alpes 1 Litro - Manga','Manga','1 Litro','Garrafa',7.50),
    ('1001007','Sabor dos Alpes 1 Litro - Melão','Melão','1 Litro','Garrafa',7.50),
    ('1001008','Sabor dos Alpes 1 Litro - Graviola','Graviola','1 Litro','Garrafa',7.50),
    ('1001009','Sabor dos Alpes 1 Litro - Tangerina','Tangerina','1 Litro','Garrafa',7.50),
    ('1001010','Sabor dos Alpes 1 Litro - Abacate','Abacate','1 Litro','Garrafa',7.50),
    ('1001011','Sabor dos Alpes 1 Litro - Açai','Açai','1 Litro','Garrafa',7.50);


SELECT * FROM PRODUTOS WHERE SUBSTRING(DESCRITOR, 1, 15) = 'Sabor dos Alpes';

DELETE FROM produtos WHERE CODIGO = '1001000';

DELETE FROM produtos
    WHERE TAMANHO = '1 Litro' 
    AND SUBSTRING(DESCRITOR, 1, 15) = 'Sabor dos Alpes';

SELECT CODIGO FROM produtos 
    WHERE CODIGO NOT IN(
        SELECT CODIGO_DO_PRODUTO FROM sucos_vendas.tabela_de_produtos
    );

DELETE FROM produtos
    WHERE CODIGO NOT IN(
        SELECT CODIGO_DO_PRODUTO FROM sucos_vendas.tabela_de_produtos
    );

-- Exerc�cio: 
-- Desafio: Vamos excluir as notas fiscais (Apenas o cabe�alho) 
-- cujos clientes tenham a idade menor ou igual a 18 anos.
-- Minha resposta

-- populando a tabela

INSERT INTO notas     
SELECT 
    NUMERO,
    DATA_VENDA, 
    CPF, 
    SUBSTRING(MATRICULA, 3, 3) AS MATRICULA, 
    IMPOSTO  
    FROM sucos_vendas.notas_fiscais;

SELECT * FROM notas LIMIT 10;

SELECT NF.NUMERO  
    FROM notas NF
    INNER JOIN cliente CLI 
    ON NF.CPF = CLI.CPF    
    WHERE IDADE <= 18;

DELETE NF FROM notas NF
    INNER JOIN cliente CLI 
    ON NF.CPF = CLI.CPF    
    WHERE IDADE <= 18;

SELECT COUNT(*) FROM notas;
-- Antes de deletar: 87.877 registros
-- Linhas afetadas: 12.466
-- Depois de deletar: 75.411 registros
-- Active: 1691456479247@@127.0.0.1@3306@vendas_sucos

INSERT INTO produtos(
    CODIGO,
    DESCRITOR,
    SABOR,
    TAMANHO,
    EMBALAGEM,
    PRECO_LISTA
) VALUES(
    '1040104',
    'Light - 350 ml - Mel�ncia',
    'Mel�ncia',
    '350 ml',
    'Lata',
    4.56
);

INSERT INTO produtos VALUES(
    '1040109',
    'Light - 350 ml - A�a�',
    'A�a�',
    '350 ml',
    'Lata',
    4.00
);

INSERT INTO produtos 
VALUES
    ('1040110', 'Light - 350 ml - Laranja', 'Laranja', '350 ml', 'Lata', 4.50),
    ('1040111', 'Light - 350 ml - Uva', 'Uva', '350 ml', 'Lata', 5.10),
    ('1040112', 'Light - 350 ml - Manga', 'Manga', '350 ml', 'Lata', 4.8);

SELECT * FROM produtos;

-- Exerc�cios inserir dados na tabela de cliente

INSERT INTO cliente (
    CPF,
    NOME,
    ENDERECO,
    BAIRRO,
    CIDADE,
    ESTADO,
    CEP,
    DATA_DE_NASCIMENTO,
    IDADE,
    SEXO,
    VOLUME_DE_COMPRA,
    PRIMEIRA_COMPRA,
    LIMITE_DE_CREDITO
) VALUES
('1471156710', '�rica Carvalho', 'R. Iriquitia', 'Jardins' ,'S�o Paulo', 'SP', '80012212', '1990-09-01', 27, 'F', 170000, 0, 24500),
('19290992743', 'Fernando Cavalcante', 'R. Dois de Fevereiro', '�gua Santa' ,'Rio de Janeiro', 'RJ', '22000000', '2000-02-12', 18, 'M', 100000, 1, 20000),
('2600586709', 'C�sar Teixeira', 'Rua Conde de Bonfim', 'Tijuca' ,'Rio de Janeiro', 'RJ', '22020001', '2000-03-12', 18, 'M', 120000, 0, 22000);


DESC cliente;
SELECT * FROM cliente;
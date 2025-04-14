-- Active: 1691456479247@@127.0.0.1@3306@vendas_sucos

SELECT * FROM produtos LIMIT 10;

UPDATE produtos SET PRECO_LISTA = 5 WHERE CODIGO = '1000889';

UPDATE produtos SET 
    EMBALAGEM = 'PET',
    DESCRITOR = 'Sabor da Montanha - 1 Litro - Uva',
    TAMANHO = '1 Litro'
    WHERE CODIGO = '1000889';

SELECT * FROM produtos WHERE SABOR = 'Maracujá';

-- Atualização em lote
UPDATE produtos SET 
    PRECO_LISTA = (PRECO_LISTA * 1.10) 
    WHERE SABOR = 'Maracujá';

-- Exercício:
-- Atualize o endereço do cliente com cpf 19290992743 para R. Jorge Emílio 23 o bairro para Santo Amaro, 
-- a cidade para São Paulo, o estado para SP e o CEP para 8833223.
SELECT * FROM cliente WHERE cpf = '19290992743';

-- Minha resposta:
UPDATE cliente SET 
    ENDERECO = 'R. Jorge Emílio 23',
    BAIRRO = 'Santo Amaro',
    CIDADE = 'São Paulo',
    ESTADO = 'SP' 
    WHERE cpf = '19290992743';
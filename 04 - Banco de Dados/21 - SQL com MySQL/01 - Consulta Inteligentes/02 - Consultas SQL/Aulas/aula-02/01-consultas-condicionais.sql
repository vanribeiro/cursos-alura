USE sucos_vendas;
-- Exercício: A expressão abaixo é verdadeira ou falsa?
--(NOT ((3 > 2) OR (4 >= 5)) AND (5 > 4)) OR (9 > 0)

-- Minha resposta:
/*  
    (NOT ((3 > 2) OR (4 >= 5)) AND (5 > 4)) OR (9 > 0)
    (NOT ((V) OR (F)) AND (V)) OR (V)
    (NOT (V) AND (V)) OR (V)
    (NOT (V) AND (V)) OR (V)
    (F AND (V)) OR (V)
    (F) OR (V)
    (V)
*/

-- OR

SELECT * FROM tabela_de_produtos 
        WHERE sabor = 'manga' 
        OR tamanho = '470 ml';

-- AND

SELECT * FROM tabela_de_produtos 
        WHERE sabor = 'manga' 
        AND tamanho = '470 ml';

-- NOT

SELECT * FROM tabela_de_produtos 
        WHERE NOT(sabor = 'manga' 
        AND tamanho = '470 ml');

SELECT * FROM tabela_de_produtos 
        WHERE NOT(sabor = 'manga' 
        OR tamanho = '470 ml');

SELECT * FROM tabela_de_produtos 
        WHERE sabor = 'manga' 
        AND NOT(tamanho = '470 ml');

-- IN
SELECT * FROM tabela_de_produtos 
        WHERE sabor IN('laranja', 'manga');

-- usar o IN é semelhante a:
SELECT * FROM tabela_de_produtos 
        WHERE sabor = 'laranja' 
        OR sabor = 'manga';

-- MESCLANDO CONDIÇÕES

SELECT * FROM tabela_de_clientes 
        WHERE cidade IN('Rio de Janeiro', 'São Paulo')
        AND (idade >= 20 AND idade <= 22);


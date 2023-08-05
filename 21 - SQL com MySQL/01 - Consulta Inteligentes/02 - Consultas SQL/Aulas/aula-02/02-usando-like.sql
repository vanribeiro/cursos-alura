USE sucos_vendas;

SELECT * FROM tabela_de_produtos 
        WHERE sabor LIKE '%maça%';

SELECT * FROM tabela_de_produtos 
        WHERE sabor LIKE '%maça%'
        AND embalagem = 'pet';

-- Exercício: 
-- Quantos clientes possuem o último sobrenome Mattos?
-- Minha resposta: 2
SELECT * FROM tabela_de_clientes
        WHERE nome LIKE '%Mattos';
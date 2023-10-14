-- ATIVIDADE

-- 01. Obtendo a maior venda de um produto

-- Utilizando duas queries SQL, qual foi a maior venda do produto 
-- Linha Refrescante - 1 Litro - Morango/Limao, em quantidade?

-- Minha Resposta
SELECT CODIGO_DO_PRODUTO FROM TABELA_DE_PRODUTOS
    WHERE NOME_DO_PRODUTO = 'Linha Refrescante - 1 Litro - Morango/Limao';

SELECT CODIGO_DO_PRODUTO, QUANTIDADE, PRECO 
    FROM ITENS_NOTAS_FISCAIS
    WHERE CODIGO_DO_PRODUTO = 1101035
    ORDER BY QUANTIDADE DESC;

-- QUANTIDADE: 99
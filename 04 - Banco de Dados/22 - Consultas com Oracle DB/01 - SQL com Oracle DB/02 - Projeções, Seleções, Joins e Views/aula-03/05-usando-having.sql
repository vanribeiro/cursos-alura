SELECT * FROM TABELA_DE_CLIENTES;

SELECT ESTADO, SUM(LIMITE_DE_CREDITO) 
    FROM TABELA_DE_CLIENTES 
    GROUP BY ESTADO
    HAVING SUM(LIMITE_DE_CREDITO) > 900000;

--------------------------------------------------------------------------------------------------------

-- ATIVIDADES

-- 01.  Produtos mais vendidos

-- Vamos voltar aos itens das notas fiscais. As duas atividades anteriores olharam as vendas do produto 1101035, 
-- mas nossa empresa vendeu mais produtos. Verifique as quantidades totais de vendas de cada produto e ordene da maior para a menor.

-- Minha Resposta:
SELECT * FROM ITENS_NOTAS_FISCAIS WHERE ROWNUM < 2;

SELECT CODIGO_DO_PRODUTO, 
    SUM(QUANTIDADE) AS QUANTIDADE_VENDIDA
    FROM ITENS_NOTAS_FISCAIS 
    GROUP BY CODIGO_DO_PRODUTO
    ORDER BY QUANTIDADE_VENDIDA DESC;

---------------------------------------------------------------

-- 02.  Filtrando os produtos mais vendidos

-- Vimos os produtos mais vendidos na atividade anterior. 
-- Agora, liste somente os produtos que venderam mais que 394000 unidades.
SELECT CODIGO_DO_PRODUTO, 
    SUM(QUANTIDADE) AS QUANTIDADE_VENDIDA
    FROM ITENS_NOTAS_FISCAIS 
    GROUP BY CODIGO_DO_PRODUTO
    HAVING SUM(QUANTIDADE) > 394000
    ORDER BY QUANTIDADE_VENDIDA DESC;

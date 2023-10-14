SELECT * FROM TB_PRODUTOS WHERE ROWNUM <= 10;

SELECT ROWNUM, P.* FROM TB_PRODUTOS P WHERE ROWNUM <= 10;

-- ATIVIDADE
-- 01. Primeiras vendas de um determinado dia
-- Qual é o comando SQL para listar as 10 primeiras vendas do dia 01/10/2017?

-- Minha Resposta:

SELECT * FROM NOTAS_FISCAIS 
    WHERE DATA_VENDA = TO_DATE('01/10/2017', 'DD/MM/YYYY')
    AND ROWNUM <= 10;
SELECT * FROM TB_CLIENTES 
    WHERE DATA_NASCIMENTO < TO_DATE('03/25/1992', 'MM/DD/YYYY');

SELECT * FROM TB_CLIENTES 
    WHERE TO_CHAR(DATA_NASCIMENTO, 'MM') = 1;

-- ATIVIDADES ---------------------------------------------------------------------------------------------------------

-- 01. Vendedor que tem determinado intervalo de comissões

-- Surgiu uma demanda para listar vendedores que têm comissões menores que 0,17.
-- Como poderia ser esse comando SQL?

-- Minha resposta:
SELECT * FROM TB_VENDEDORES WHERE PERCENTUAL_COMISSAO < 0.17;

-------------------------------------------------------------

-- 02. Vendedores mais novos

-- Qual comando SQL podemos executar para mapear as pessoas vendedoras mais novas da empresa, 
-- que foram admitidas de 2020 em diante?

-- Minha resposta:

SELECT * FROM TB_VENDEDORES WHERE TO_CHAR(DATA_ADMISSAO, 'YYYY') >= 2020;

-- Resposta do Instrutor:
SELECT * FROM TB_VENDEDORES WHERE DATA_ADMISSAO >= '01-JAN-2020';

---------------------------------------------------------------

-- 03. Vendedores com diferentes comissões

-- Quais os vendedores que possuem comissões maiores que 0,19 ou menores que 0,15?

-- Minha resposta:
SELECT * FROM TB_VENDEDORES WHERE PERCENTUAL_COMISSAO < 0.15 OR PERCENTUAL_COMISSAO > 0.19;


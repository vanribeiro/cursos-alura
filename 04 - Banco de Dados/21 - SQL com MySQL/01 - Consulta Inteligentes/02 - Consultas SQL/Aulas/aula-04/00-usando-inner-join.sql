USE sucos_vendas;

SELECT * FROM tabela_de_vendedores;

SELECT * FROM notas_fiscais;

-- INNER JOIN

SELECT * FROM tabela_de_vendedores A
        INNER JOIN notas_fiscais B 
        ON A.matricula = B.matricula;

SELECT A.matricula, A.nome, COUNT(*)
        FROM tabela_de_vendedores A
        INNER JOIN notas_fiscais B 
        ON A.matricula = B.matricula
        GROUP BY A.matricula, A.nome;

-- Exercício:
-- Obtenha o faturamento anual da empresa. 
-- Leve em consideração que o valor financeiro das vendas consiste em multiplicar a quantidade pelo preço.
SELECT YEAR(NF.data_venda) AS ano, SUM(NFItens.quantidade * NFItens.preco) AS faturamento
        FROM notas_fiscais NF
        INNER JOIN itens_notas_fiscais NFItens
        ON NF.numero = NFItens.numero
        GROUP BY YEAR(NF.data_venda);

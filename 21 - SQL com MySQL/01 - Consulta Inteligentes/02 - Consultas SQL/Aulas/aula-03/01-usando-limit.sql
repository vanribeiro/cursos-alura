USE sucos_vendas;

-- Assim como em arrays, o indice da primeira linha inicia em 0;

SELECT * FROM tabela_de_produtos limit 5;

-- Retorna 03 linhas a partir da linha 02
SELECT * FROM tabela_de_produtos limit 2,3;

-- Retorna 02 linhas a partir da linha 00
SELECT * FROM tabela_de_produtos limit 0,2;

-- Exercício: 
-- Queremos obter as 10 primeiras vendas do dia 01/01/2017. 
-- Qual seria o comando SQL para obter este resultado?
-- Minha resposta:
SELECT * FROM notas_fiscais 
        WHERE data_venda = '2017-01-01' limit 10;
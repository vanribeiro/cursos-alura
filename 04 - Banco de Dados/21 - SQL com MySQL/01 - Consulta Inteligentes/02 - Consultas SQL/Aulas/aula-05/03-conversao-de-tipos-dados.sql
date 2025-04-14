-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas
SELECT CONCAT('data de hoje: ', DATE_FORMAT(CURRENT_TIMESTAMP(), '%d/%m/%Y')) as resultado;

SELECT SUBSTRING(CONVERT(23.3, CHAR), 1, 1) AS resultado;

-- Exercício:
-- Queremos construir um SQL cujo resultado seja, para cada cliente:
-- “O cliente João da Silva faturou 120000 no ano de 2016”.
-- Somente para o ano de 2016.

-- Minha resposta:
-- Consegui montar a consulta, mas não consegui fazer a concatenação funcionar... :'(

SELECT 
    CONCAT (
        'O cliente ',
        tabela_de_clientes.nome,
        ' faturou ',
        SUM (
            ROUND (
                itens_notas_fiscais.quantidade * itens_notas_fiscais.preco
            )
        ),
        ' no ano de ',
        DATE_FORMAT(notas_fiscais.data_venda, '%Y')
    )
    FROM notas_fiscais
    INNER JOIN itens_notas_fiscais
    ON notas_fiscais.numero = itens_notas_fiscais.numero 
    INNER JOIN tabela_de_clientes
    ON notas_fiscais.cpf = tabela_de_clientes.cpf
    WHERE YEAR(notas_fiscais.data_venda) = 2016
    GROUP BY tabela_de_clientes.CPF, YEAR(notas_fiscais.data_venda);

SELECT 
    -- CONCAT (
        tabela_de_clientes.nome,
        tabela_de_clientes.cpf,
        YEAR(notas_fiscais.data_venda) as ano,
        SUM(
            ROUND(
                itens_notas_fiscais.quantidade * .itens_notas_fiscais.PRECO, 0
                )
            ) as faturamento
    -- )
    FROM notas_fiscais
    INNER JOIN itens_notas_fiscais
    ON notas_fiscais.numero = itens_notas_fiscais.numero 
    INNER JOIN tabela_de_clientes
    ON notas_fiscais.cpf = tabela_de_clientes.cpf
    WHERE YEAR(notas_fiscais.data_venda) = 2016
    GROUP BY tabela_de_clientes.cpf, YEAR(notas_fiscais.data_venda);
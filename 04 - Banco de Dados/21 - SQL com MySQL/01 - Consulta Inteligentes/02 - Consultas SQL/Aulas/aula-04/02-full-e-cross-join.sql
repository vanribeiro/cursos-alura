-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

SELECT * FROM tabela_de_vendedores;

SELECT COUNT(*) FROM tabela_de_clientes;
-- contou 15 clientes

SELECT tabela_de_vendedores.bairro,
       tabela_de_vendedores.nome, de_ferias,
       tabela_de_clientes.bairro,
       tabela_de_clientes.nome
       FROM tabela_de_vendedores
       INNER JOIN tabela_de_clientes
       ON tabela_de_vendedores.bairro = tabela_de_clientes.bairro;
-- contou: 7 clientes

SELECT tabela_de_vendedores.bairro,
       tabela_de_vendedores.nome, de_ferias,
       tabela_de_clientes.bairro,
       tabela_de_clientes.nome
       FROM tabela_de_vendedores
       LEFT JOIN tabela_de_clientes
       ON tabela_de_vendedores.bairro = tabela_de_clientes.bairro;

SELECT tabela_de_vendedores.bairro,
       tabela_de_vendedores.nome, de_ferias,
       tabela_de_clientes.bairro,
       tabela_de_clientes.nome
       FROM tabela_de_vendedores
       RIGHT JOIN tabela_de_clientes
       ON tabela_de_vendedores.bairro = tabela_de_clientes.bairro;

-- FULL JOIN
SELECT tabela_de_vendedores.bairro,
       tabela_de_vendedores.nome, de_ferias,
       tabela_de_clientes.bairro,
       tabela_de_clientes.nome
       FROM tabela_de_vendedores
       LEFT JOIN tabela_de_clientes
       ON tabela_de_vendedores.bairro = tabela_de_clientes.bairro
UNION
SELECT tabela_de_vendedores.bairro,
       tabela_de_vendedores.nome, de_ferias,
       tabela_de_clientes.bairro,
       tabela_de_clientes.nome
       FROM tabela_de_vendedores
       RIGHT JOIN tabela_de_clientes
       ON tabela_de_vendedores.bairro = tabela_de_clientes.bairro;


-- CROSS JOIN
SELECT tabela_de_vendedores.bairro, tabela_de_vendedores.nome,
       tabela_de_clientes.bairro, tabela_de_clientes.nome
       FROM tabela_de_vendedores, tabela_de_clientes;

-- Active: 1691456479247@@127.0.0.1@3306@sucos_vendas

SELECT COUNT(*) FROM tabela_de_clientes;
-- conta 15 clientes

SELECT cpf, COUNT(*) FROM notas_fiscais GROUP BY cpf;
-- conta 14 clientes

SELECT DISTINCT cliente.cpf, cliente.nome, notas.cpf
       FROM tabela_de_clientes cliente
       INNER JOIN notas_fiscais notas
       ON cliente.cpf = notas.cpf;

-- LEFT JOIN

-- Neste caso, por exemplo, um dos clientes está cadastrado, mas
-- não tem nenhuma NF registrada em seu nome, o que pode indicar que, 
-- apesardo cadastro, ele(a) nunca fez uma compra nesta base de dados
SELECT DISTINCT cliente.cpf, cliente.nome, notas.cpf
       FROM tabela_de_clientes cliente
       LEFT JOIN notas_fiscais notas
       ON cliente.cpf = notas.cpf
       WHERE notas.cpf IS NULL;

-- RIGHT JOIN: o mesmo resultado de LEFT JOIN
SELECT DISTINCT cliente.cpf, cliente.nome, notas.cpf
       FROM notas_fiscais notas
       RIGHT JOIN tabela_de_clientes cliente
       ON cliente.cpf = notas.cpf
       WHERE notas.cpf IS NULL;

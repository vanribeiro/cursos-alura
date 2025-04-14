USE sucos_vendas;

SELECT * FROM notas_fiscais limit 5;

SELECT cpf, data_venda FROM notas_fiscais limit 5;

SELECT cpf AS identificador, nome AS cliente 
        FROM tabela_de_clientes limit 5;

SELECT * FROM tabela_de_produtos 
        WHERE codigo_do_produto = '1000889';

SELECT * FROM tabela_de_produtos 
        WHERE sabor = 'uva';

SELECT * FROM tabela_de_produtos 
        WHERE sabor = 'manga';

SELECT * FROM tabela_de_produtos 
        WHERE preco_de_lista 
        BETWEEN 19.50 and 19.52;
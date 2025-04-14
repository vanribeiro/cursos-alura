USE sucos_vendas;

-- Ascendente

SELECT * FROM tabela_de_produtos
        ORDER BY preco_de_lista;

SELECT * FROM tabela_de_produtos
        ORDER BY nome_do_produto;

-- Descedente

SELECT * FROM tabela_de_produtos
        ORDER BY preco_de_lista DESC;

SELECT * FROM tabela_de_produtos
        ORDER BY nome_do_produto DESC;

-- Composto

SELECT * FROM tabela_de_produtos
        ORDER BY embalagem, nome_do_produto DESC;

SELECT * FROM tabela_de_produtos
        ORDER BY embalagem DESC, nome_do_produto;

-- Exercício: 
-- Qual (ou quais) foi (foram) a(s) maior(es) venda(s) do produto 
--“Linha Refrescante - 1 Litro - Morango/Limão”, em quantidade? 
-- (Obtenha este resultado usando 2 SQLs).

SELECT codigo_do_produto, nome_do_produto 
        FROM tabela_de_produtos 
        WHERE nome_do_produto = 'Linha Refrescante - 1 Litro - Morango/Limão' 
        LIMIT 5;

-- Código do Produto: 1101035

SELECT * FROM itens_notas_fiscais 
        WHERE codigo_do_produto = '1101035' 
        ORDER BY quantidade DESC LIMIT 1;

-- Minha Resposta: 99
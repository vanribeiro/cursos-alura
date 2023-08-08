USE sucos_vendas;

-- Traz todos as embalagens e tamanhos
SELECT embalagem, tamanho 
    FROM tabela_de_produtos;

-- Traz somente as embalagens e tamanhos distintos
SELECT DISTINCT embalagem, tamanho 
    FROM tabela_de_produtos;

-- Traz somente as embalagens e tamanhos distintos
-- com uma condição
SELECT DISTINCT embalagem, tamanho 
    FROM tabela_de_produtos
    WHERE sabor = 'uva';

-- Exercício: Quais são os bairros da cidade do Rio de Janeiro que possuem clientes?
-- Minha resposta: 07 bairros
SELECT DISTINCT bairro
    FROM tabela_de_clientes
    WHERE cidade = 'Rio de Janeiro';
-- SEM DISTINCT: 500 LINHAS
-- COM DISTINCT: 15 clientes
SELECT DISTINCT
    TC.CPF AS CPF_CADASTRO,
    TC.NOME,
    NF.CPF AS CPF_NF
    FROM TABELA_DE_CLIENTES TC
    INNER JOIN NOTAS_FISCAIS NF
    ON TC.CPF = NF.CPF;

-- novo cliente adicionado a base de dados
INSERT INTO TABELA_DE_CLIENTES 
    (CPF, NOME, ENDERECO_1, ENDERECO_2, BAIRRO, CIDADE, ESTADO, CEP, DATA_DE_NASCIMENTO, IDADE, 
    SEXO, LIMITE_DE_CREDITO, VOLUME_DE_COMPRA, PRIMEIRA_COMPRA) 
    VALUES ('23412632331', 'Juliana Silva', 'R. Tramandai', '', 'Bangu', 'Rio de Janeiro', 
    'RJ', '23400000', TO_DATE('1989-02-04','YYYY-MM-DD'), 28, 'F', 180000.0000, 24500, 0);

-- 16 clientes
SELECT COUNT(*) FROM TABELA_DE_CLIENTES;

-- LEFT JOIN --------------------------------------------------------------------------------------

-- Obter cliente que nunca comprou

-- Retorna o CPF_NF como null
SELECT DISTINCT
    TC.CPF AS CPF_CADASTRO,
    TC.NOME,
    NF.CPF AS CPF_NF
    FROM TABELA_DE_CLIENTES TC
    LEFT JOIN NOTAS_FISCAIS NF
    ON TC.CPF = NF.CPF;


-- Retorna só o cliente que ainda não comprou nada, mas está cadastrado
SELECT DISTINCT
    TC.CPF AS CPF_CADASTRO, TC.NOME
    FROM TABELA_DE_CLIENTES TC
    LEFT JOIN NOTAS_FISCAIS NF
    ON TC.CPF = NF.CPF
    WHERE NF.CPF IS NULL;
DESC TB_CLIENTE;

DELETE FROM TB_CLIENTE WHERE CPF = '00333434577';

INSERT INTO TB_CLIENTE
(   
    CPF,
    NOME,
    ENDERECO1,
    ENDERECO2,
    BAIRRO,
    CIDADE,
    ESTADO,
    CEP,
    DATA_DE_NASCIMENTO,
    IDADE,
    SEXO,
    LIMITE_CREDITO,
    VOLUME_COMPRA,
    PRIMERA_COMPRA
) VALUES (   
    '00333434577',
    'João da Silva',
    'Rua Projetada número 10',
    NULL,
    'VILA ROMAN',
    'TRÉS RIOS',
    'RJ',
    '22222222',
    TO_DATE('12/10/1965', 'DD/MM/YYYY'),
    56,
    'M',
    100000,
    2000,
    0
);

INSERT INTO TB_CLIENTE
(   
    CPF,
    NOME,
    ENDERECO1,
    ENDERECO2,
    BAIRRO,
    CIDADE,
    ESTADO,
    CEP,
    DATA_DE_NASCIMENTO,
    IDADE,
    SEXO,
    LIMITE_CREDITO,
    VOLUME_COMPRA,
    PRIMERA_COMPRA
) VALUES (   
    '00333434588',
    'Marcia da Silva',
    'Rua Projetada número 10',
    NULL,
    'VILA ROMAN',
    'TRÉS RIOS',
    'RJ',
    '22222222',
    TO_DATE('12/10/1965', 'MM/DD/YYYY'),
    55,
    'F',
    200000,
    4000,
    0
);

SELECT * FROM TB_CLIENTE;

-- Atividade: Novos vendedores

-- Nossa empresa é multinacional, e surgiu a necessidade de incluir duas pessoas vendedoras da filial americana, 
-- ou seja, do exterior, cujas datas de admissão vieram no padrão americano. 
-- Além disso, também será necessário incluir duas pessoas vendedoras da filial brasileira.
-- Sabendo que Jonh e Katy são vendedores(as) da filial americana e Rodrigo e Patricia são da filial brasileira, 
-- como podemos inserí-los no banco de dados?

INSERT INTO TB_VENDEDORES (MATRICULA, NOME, DATA_ADMISSAO, PERCENTUAL_COMISSAO)
VALUES ('00265', 'Jonh Wayne', TO_DATE('03/27/2019', 'MM/DD/YYYY'), 0.12);

INSERT INTO TB_VENDEDORES (MATRICULA, NOME, DATA_ADMISSAO, PERCENTUAL_COMISSAO)
VALUES ('00777', 'Katy Peterson', TO_DATE('02/04/2020', 'MM/DD/YYYY'), 0.10);

INSERT INTO TB_VENDEDORES (MATRICULA, NOME, DATA_ADMISSAO, PERCENTUAL_COMISSAO)
VALUES ('00342', 'Rodrigo Almeida', TO_DATE('18/01/2022', 'DD/MM/YYYY'), 0.09);

INSERT INTO TB_VENDEDORES (MATRICULA, NOME, DATA_ADMISSAO, PERCENTUAL_COMISSAO)
VALUES ('00729', 'Patricia Martins', TO_DATE('02/01/2022', 'DD/MM/YYYY'), 0.09);

SELECT * FROM TB_VENDEDORES;
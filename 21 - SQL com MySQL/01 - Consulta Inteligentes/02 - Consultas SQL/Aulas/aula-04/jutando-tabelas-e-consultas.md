# Juntando tabelas e consultas

## Usando Joins

### Inner Join

- Retorna somente termos chaves correspondentes.
- Os campos comparados não precisam ter o mesmo nome, mas precisam ter o mesmo conteúdo.

### Left Join

- Retorna todos da tabela esquerda e somente os correspondentes da tabela direita.

### Right Join

- Retorna todos da tabela direita e somente os correspondentes da tabela esquerda.

### Full Join

- Retorna todos os registros de todas as tabelas.

### Cross Join 

- Retorna o produto cartesiano das duas tabelas.

## Union e Union All

### Union

- Junta duas consultas e faz o `distinct`.
- Restrição: colunas e tipos de colunas devem ser iguais para que a união seja permitida.

### Union All

- Não se aplica o `distinct` sobre o resultado final da consulta.

# Testes E2E com Cypress

Comando para rodar o Cypress:

`npx cypress open`

## ESLint

É possível que o ESLint não reconheça os comandos do Cypress. Então será necessário instalar o plugin:

`npm i eslint-plugin-cypress`

E no arquivo `.eslintrc`, em `extends`, acima do plugin do `prettier` adicionar:

`"plugin:cypress/recommended"`

## Selecionando elementos

Considere:

```html
<button
  id="main"
  class="btn btn-large"
  name="submit"
  role="button"
  data-cy="submit"
>
  Enviar
</button>
```

A prática recomendada é utilizar `data-attributes` e evitar usar seletores que mudam seus valores com frequência como `id` ou `classes`

### Exemplo de seletores:

```javascript
// data-attr
cy.get('[data-cy="submit"]').click();    

// textContext
cy.contains('Enviar').click();

// classes, id's e tags
cy.get('.btn').click()
cy.get('#main').click();
cy.get('button').click();
```

## Links úteis: 
- [Documentação do Cypress](https://docs.cypress.io/guides/overview/why-cypress).


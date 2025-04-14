# Testes E2E com Cypress

Comando para rodar o Cypress:

- Versão Gráfica:
  - `npx cypress open`
- Versão CLI:
  - `npx cypress run`
  - Rodando navegadores instalados no dispositivo atual, exemplo:
    - Edge: `npx cypress run -- browser edge`
    - Firefox: `npx cypress run -- browser firefox`
  - Rodando e resoluções menores, exemplo:
    - `npx cypress open --config viewportWidth=375,viewportHeight=667`

Também é possível configurar o navegador a ser testado em cada teste, exemplo:

```javascript
describe('Jornada do usuario', () => {

    it('should ...', { browser: 'edge' } () => {
      // assertions
    });

    it('should ...', { browser: 'firefox' } () => {
      // assertions
    });
    
});
```



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

## Viewport:

```javascript
describe('Menu de navegação', () => {
  context('Resolução de 720p', () => {
    beforeEach(() => {
      // Roda os testes como se fossem em um monitor de 720p de resolução
      cy.viewport(1280, 720)
    })

    // seu teste aqui
  })

  context('Resolução do iphone-5 ', () => {
    beforeEach(() => {
      // roda os testes como se fossem em um dispositivo com a resolução de um iphone-5
      cy.viewport('iphone-5')
    })

    // seu teste aqui
  })
})
```

## Links úteis: 
- [Documentação do Cypress](https://docs.cypress.io/guides/overview/why-cypress).


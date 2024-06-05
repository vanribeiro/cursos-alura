describe('User Journey', () => {

    it('should allow access the application, realize a task and logout', () => {
        cy.visit('/');
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('vanribeiro@contato.com.br');
        cy.getByData('senha-input').type('secreta123456');
        cy.getByData('botao-enviar').click();

        cy.location('pathname').should('eq', '/home');
        
        cy.getByData('select-opcoes').select('Depósito');
        cy.getByData('form-input').type('200');
        cy.getByData('realiza-transacao').click();

        cy.getByData('lista-transacoes').find('li').last().contains('R$ 200');

        cy.getByData('botao-sair').click();
        cy.location('pathname').should('eq', '/');
    });

    it.skip('should allow create a new account and login with this new account', () => {
        cy.visit('/');

        cy.getByData('botao-cadastro').click();        
        cy.getByData('nome-input').type('Marcos Eduardo Luiz Jr');
        cy.getByData('email-input').type('m.edu.luiz.jr@contato.com.br');
        cy.getByData('senha-input').type('secreta456789');
        cy.getByData('checkbox-input').click();
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-sucesso')
            .should('exist')
            .and('have.text', 'Usuário cadastrado com sucesso!');

        cy.getByData('modal-registry-form__close-button').click();

        cy.getByData('modal-login-form')
            .should('not.exist');

        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('m.edu.luiz.jr@contato.com.br');
        cy.getByData('senha-input').type('secreta456789');
        cy.getByData('botao-enviar').click();

        cy.location('pathname').should('eq', '/home');

    });
});
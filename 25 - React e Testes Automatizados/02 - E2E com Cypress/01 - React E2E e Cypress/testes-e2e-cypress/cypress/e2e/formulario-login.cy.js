describe('Formulário de Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should close modal when button \'x\' is clicked', () => {
        cy.getByData('botao-login').click();
        cy.getByData('modal-login-form__close-button').click();

        cy.getByData('modal-login-form')
            .should('not.exist');
    });

    it('should not access the application with an invalid e-mail', () => {
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('vanribeiro@contato');
        cy.getByData('senha-input').type('secreta123456');
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-erro')
            .should('exist')
            .and('have.text', 'O email digitado é inválido');
    });

    it('should not submit the form with input e-mail empty', () => {
        cy.getByData('botao-login').click();
        cy.getByData('senha-input').type('secreta123456');
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-erro')
            .should('exist')
            .and('have.text', 'O campo email é obrigatório');
    });

    it('should not submit the form with input password empty', () => {
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('vanribeiro@contato');
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-erro')
            .should('exist')
            .and('have.text', 'O campo de senha é obrigatório');
    });

    it('should not submit the form with input password empty', () => {
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('vanribeiro@contato');
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-erro')
            .should('exist')
            .and('have.text', 'O campo de senha é obrigatório');
    });


});
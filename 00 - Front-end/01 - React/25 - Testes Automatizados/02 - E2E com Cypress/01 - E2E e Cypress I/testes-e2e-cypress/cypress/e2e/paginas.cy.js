describe('Pages', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('vanribeiro@contato.com.br');
        cy.getByData('senha-input').type('secreta123456');
        cy.getByData('botao-enviar').click();
    });

    it('should access the page Home', () => {
        cy.location('pathname').should('eq', '/home');
        
        cy.getByData('app-home')
            .find('a')
            .eq(0)
            .should('have.text', 'Início');
        
    });

    it('should access the page Cartões', () => {
        cy.getByData('app-home').find('a').eq(1).click();
        
        cy.getByData('titulo-cartoes')
            .should('exist')
            .and('have.text', 'Meus cartões')

        cy.location('pathname').should('eq', '/home/cartoes');
        
    });
});
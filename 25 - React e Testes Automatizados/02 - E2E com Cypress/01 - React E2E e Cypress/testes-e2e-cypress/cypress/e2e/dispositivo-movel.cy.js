describe('Mobile Devices', () => {

    context('Resolution: 375p', () => {
        beforeEach(() => {
            cy.viewport(375, 667);
            cy.visit('/');
            cy.getByData('botao-login').click();
            cy.getByData('email-input').type('vanribeiro@contato.com.br');
            cy.getByData('senha-input').type('secreta123456');
            cy.getByData('botao-enviar').click();
        });
    
        it('should have a menu icon burger', () => {
            cy.location('pathname').should('eq', '/home');
            
            cy.getByData('menu-burguer').should('be.visible');
            cy.getByData('menu-burguer').click();
    
            cy.getByData('menu-lateral')
                .find('a')
                .eq(3)
                .should('have.text', 'Investimentos');
    
            cy.getByData('menu-lateral')
                .find('a')
                .eq(3)
                .click();
    
            cy.location('pathname').should('eq', '/home/investimentos');
        });


    });

    context('Resolution: 720', () => {
        beforeEach(() => {
            cy.viewport(1280, 720);
            cy.visit('/');
            cy.getByData('botao-login').click();
            cy.getByData('email-input').type('vanribeiro@contato.com.br');
            cy.getByData('senha-input').type('secreta123456');
            cy.getByData('botao-enviar').click();
        });
    
        it('should not have a menu icon burger', () => {
            cy.location('pathname').should('eq', '/home');

            cy.getByData('menu-burguer').should('not.be.visible');
            cy.getByData('menu-lateral').should('not.exist');
        });


    });

    context('iphone-xr', () => {

        beforeEach(() => {
            cy.viewport('iphone-xr')
            cy.visit('/');
            cy.getByData('botao-login').click();
            cy.getByData('email-input').type('vanribeiro@contato.com.br');
            cy.getByData('senha-input').type('secreta123456');
            cy.getByData('botao-enviar').click();
        });

        it('should have a menu icon burger', () => {
            cy.location('pathname').should('eq', '/home');

            cy.getByData('menu-burguer').should('be.visible');

        });


    });

    context('macbook-13', () => {

        beforeEach(() => {
            cy.viewport('macbook-13')
            cy.visit('/');
            cy.getByData('botao-login').click();
            cy.getByData('email-input').type('vanribeiro@contato.com.br');
            cy.getByData('senha-input').type('secreta123456');
            cy.getByData('botao-enviar').click();
        });
    
        it('should not have a menu icon burger', () => {
            cy.location('pathname').should('eq', '/home');

            cy.getByData('menu-burguer').should('not.be.visible');
        });

    });
});
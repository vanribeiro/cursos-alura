describe('Formulário de Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it.skip('should allow user to registry correctly', () => {
        cy.getByData('botao-cadastro').click();        
        cy.getByData('nome-input').type('Marcos Luiz');
        cy.getByData('email-input').type('marcos.luiz2@contato.com.br');
        cy.getByData('senha-input').type('secreta456789');
        cy.getByData('checkbox-input').click();
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-sucesso')
            .should('exist')
            .and('have.text', 'Usuário cadastrado com sucesso!');
    });

    it.skip('should return a message error if the e-mail has already been registred', () => {
        cy.getByData('botao-cadastro').click();        
        cy.getByData('nome-input').type('Marcos Luiz');
        cy.getByData('email-input').type('marcos.luiz@contato.com.br');
        cy.getByData('senha-input').type('secreta456789');
        cy.getByData('checkbox-input').click();
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-erro')
            .should('exist')
            .and('have.text', 'E-mail já cadastrado!');
    });

    it('should return a message error if the input nome is empty', () => {
        cy.getByData('botao-cadastro').click();        
        cy.getByData('email-input').type('livia.tatiana@contato.com.br');
        cy.getByData('senha-input').type('secreta456789');
        cy.getByData('checkbox-input').click();
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-erro')
            .should('exist')
            .and('have.text', 'O campo de nome é obrigatório');
    });

    it('should return a message error if the email is empty', () => {
        cy.getByData('botao-cadastro').click();
        cy.getByData('nome-input').type('Ana Carvalho');    
        cy.getByData('senha-input').type('secreta456789');
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-erro')
            .should('exist')
            .and('have.text', 'O campo email é obrigatório');
    });

    
    it('should return a message error if the e-mail is registred', () => {
        cy.getByData('botao-cadastro').click();
        cy.getByData('nome-input').type('Ana Carvalho');      
        cy.getByData('email-input').type('ana.carvalho13@contato.com.br');
        cy.getByData('checkbox-input').click();
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-erro')
            .should('exist')
            .and('have.text', 'E-mail já cadastrado!');
    });

    it.skip('should return a message error if the input senha is empty', () => {
        cy.getByData('botao-cadastro').click();
        cy.getByData('nome-input').type('Ana Carvalho');      
        cy.getByData('email-input').type('ana.carvalho@contato.com');
        cy.getByData('checkbox-input').click();
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-erro')
            .should('exist')
            .and('have.text', 'O campo senha é obrigatório');
    });
});
describe('Bytebank home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render the home CTA with right text', () => {
    cy.get('[data-test="titulo-principal"]').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });

  it('should have the bytebank benefits', () => {

    cy.get('h2').contains('Vantagens do nosso banco:');
    cy.contains('Conta e cartão gratuitos');
    cy.contains('Saques sem custo');
    cy.contains('Programa de pontos');
    cy.contains('Seguro Dispositivos');
  });

  it('should renders the buttons correctly', () => {

    cy.getByData('botao-login').contains('Já tenho conta');
    cy.getByData('botao-cadastro').contains('Abrir minha conta');
    
  });

  it('should check the main title', () => {

    cy.isTheCorrectText(
      'titulo-principal',
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );

  });
})
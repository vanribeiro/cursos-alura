describe('Bytebank home', () => {
  it('should access home page successfully', () => {
    cy.visit('http://localhost:3000');
  });

  it('should render the home CTA with right text', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-test="titulo-principal"]').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });

  it('should have the bytebank benefits', () => {

    cy.visit('http://localhost:3000');
    cy.get('h2').contains('Vantagens do nosso banco:');
    cy.contains('Conta e cartão gratuitos');
    cy.contains('Saques sem custo');
    cy.contains('Programa de pontos');
    cy.contains('Seguro Dispositivos');
  });
})
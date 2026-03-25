// Cenário isolado: após login válido, adiciona o primeiro produto ao carrinho.
describe('AutomationExercise — Carrinho: adicionar produto', () => {
  const baseUrl = 'https://www.automationexercise.com/';
  let usuarioValido;

  before(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarioValido = dados.usuarioValido;
    });
  });

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('adiciona um produto e mostra confirmação', () => {
    cy.login(usuarioValido.email, usuarioValido.senha);

    cy.contains('Products').click();
    cy.contains('View Product').first().click();
    cy.contains('Add to cart').click();
    cy.contains('Added!').should('be.visible');
  });
});

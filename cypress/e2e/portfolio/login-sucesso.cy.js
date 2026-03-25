// Cenário isolado: login com credenciais válidas (fixture usuarioValido).
describe('AutomationExercise — Login com sucesso', () => {
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

  it('autentica e exibe estado de logado', () => {
    cy.login(usuarioValido.email, usuarioValido.senha);
    cy.contains('Logged in as').should('be.visible');
  });
});

// Cenário isolado: email e senha que não existem no cadastro do site.
describe('AutomationExercise — Login com credenciais inválidas', () => {
  const baseUrl = 'https://www.automationexercise.com/';
  let usuarioInvalido;

  before(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarioInvalido = dados.usuarioInvalido;
    });
  });

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('exibe mensagem de erro e não autentica', () => {
    cy.login(usuarioInvalido.email, usuarioInvalido.senha);
    cy.contains('Your email or password is incorrect!').should('be.visible');
    cy.contains('Logged in as').should('not.exist');
  });
});

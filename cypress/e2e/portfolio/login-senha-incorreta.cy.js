// Cenário isolado: email cadastrado no site, mas senha propositalmente errada
// (diferente do teste de “usuário inexistente”, que usa email+senha fictícios).
describe('AutomationExercise — Login com senha incorreta', () => {
  const baseUrl = 'https://www.automationexercise.com/';
  let usuarioValido;
  let senhaIncorreta;

  before(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarioValido = dados.usuarioValido;
      senhaIncorreta = dados.senhaIncorretaParaUsuarioCadastrado;
    });
  });

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('exibe mensagem de erro e não autentica', () => {
    cy.login(usuarioValido.email, senhaIncorreta);
    cy.contains('Your email or password is incorrect!').should('be.visible');
    cy.contains('Logged in as').should('not.exist');
  });
});

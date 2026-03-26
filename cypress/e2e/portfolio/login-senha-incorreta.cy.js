describe('AutomationExercise - Login com senha incorreta', () => {
  let usuarioSenhaIncorreta

  before(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarioSenhaIncorreta = dados.usuarioSenhaIncorreta
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('Não deve autenticar e deve exibir mensagem de erro', () => {
    cy.contains('Signup / Login').click()

    cy.get('[data-qa="login-email"]').type(usuarioSenhaIncorreta.email)
    cy.get('[data-qa="login-password"]').type(usuarioSenhaIncorreta.senha)
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Your email or password is incorrect!').should('be.visible')
    cy.contains('Logged in as').should('not.exist')
  })
})
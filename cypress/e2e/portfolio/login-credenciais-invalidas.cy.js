describe('AutomationExercise - Login com credenciais inválidas', () => {
  let usuarioInvalido

  before(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarioInvalido = dados.usuarioInvalido
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('Não deve autenticar e deve exibir mensagem de erro', () => {
    cy.contains('Signup / Login').click()

    cy.get('[data-qa="login-email"]').type(usuarioInvalido.email)
    cy.get('[data-qa="login-password"]').type(usuarioInvalido.senha)
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Your email or password is incorrect!').should('be.visible')
    cy.contains('Logged in as').should('not.exist')
  })
})
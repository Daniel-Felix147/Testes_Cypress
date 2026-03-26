describe('AutomationExercise - Login com sucesso', () => {
  let usuarioValido

  before(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarioValido = dados.usuarioValido
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve realizar login com credenciais válidas', () => {
    cy.login(usuarioValido.email, usuarioValido.senha)
  })
})
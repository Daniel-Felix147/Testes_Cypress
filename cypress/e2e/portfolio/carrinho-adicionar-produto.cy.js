import productPage from '../../pages/productPage'
import cartPage from '../../pages/cartPage'

describe('AutomationExercise - Adicionar produto ao carrinho', () => {
  let usuarioValido

  before(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarioValido = dados.usuarioValido
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve adicionar o primeiro produto ao carrinho com sucesso', () => {
    cy.login(usuarioValido.email, usuarioValido.senha)

    productPage.acessarProdutos()
    productPage.selecionarPrimeiroProduto()
    productPage.adicionarAoCarrinho()
    productPage.validarProdutoAdicionado()

    cartPage.acessarCarrinho()
    cartPage.validarPaginaCarrinho()
  })
})
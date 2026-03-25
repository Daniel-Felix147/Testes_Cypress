# Cypress (E2E) - Portfolio

Este repositório contém testes automatizados em Cypress (E2E) para estudo e portfólio.

## Pré-requisitos

1. `Node.js` instalado
2. (Opcional) `npm` atualizado

## Rodar os testes

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Abra o Cypress (modo interface):
   ```bash
   npm run cypress:open
   ```
3. Ou execute em modo headless **todos os cenários da pasta portfolio**:
   ```bash
   npm run cypress:run
   ```
4. Para rodar **um arquivo só** (exemplo):
   ```bash
   npx cypress run --spec "cypress/e2e/portfolio/login-sucesso.cy.js"
   ```

## O que entra no GitHub (e o que fica só na sua máquina)

**Versionado no repositório (portfólio “limpo”):**

- `cypress/e2e/portfolio/*.cy.js` — cenários E2E do portfólio
- `cypress/fixtures/usuarios.json` — dados dos testes
- `cypress/support/e2e.js` e `cypress/support/commands.js` — suporte ao Cypress (`cy.login`, etc.)
- `cypress.config.js`, `package.json`, `README.md`, `.gitignore`

**Não vai para o GitHub** (está listado no `.gitignore`):

- `cypress/e2e/estudo-local/` — specs antigos que você usou para estudar (continuam na sua pasta local se já estiverem aí)
- `cypress/pages/` — Page Objects usados só por esses estudos
- `cypress/support/component.js` e `component-index.html` — modo *component* não usado neste projeto

O `cypress.config.js` define `e2e.specPattern` só para `cypress/e2e/portfolio/**/*.cy.js`, então `npm run cypress:open` e `npm run cypress:run` **só enxergam o portfólio**, mesmo que a pasta `estudo-local` exista no disco.

**Primeiro commit:** se algum arquivo de estudo já tiver sido commitado antes, remova do índice com `git rm -r --cached cypress/e2e/estudo-local cypress/pages` (ajuste os caminhos) e faça um novo commit.

## Estrutura dos cenários (um arquivo por teste)

Os cenários do portfólio ficam em `cypress/e2e/portfolio/`. Cada arquivo tem um `describe` e um fluxo independente; assim fica fácil achar, manter e mostrar no GitHub.

| Arquivo | O que valida |
|--------|----------------|
| `login-sucesso.cy.js` | Login com `usuarioValido` do fixture e texto `Logged in as`. |
| `login-credenciais-invalidas.cy.js` | Email e senha **inexistentes** no site (`usuarioInvalido`); mensagem de erro e usuário **não** logado. |
| `login-senha-incorreta.cy.js` | Email **cadastrado** (`usuarioValido.email`) com senha **errada** (`senhaIncorretaParaUsuarioCadastrado`); mensagem de erro e usuário **não** logado. |
| `carrinho-adicionar-produto.cy.js` | Login válido, abre produtos, adiciona ao carrinho e verifica `Added!`. |

### Dados em `cypress/fixtures/usuarios.json`

- `usuarioValido` — conta que existe no Automation Exercise (para fluxos felizes).
- `usuarioInvalido` — email/senha fictícios (nenhum cadastro no site).
- `senhaIncorretaParaUsuarioCadastrado` — string usada só no teste “senha incorreta” com o email válido.

### Comandos reutilizados

- `cy.login(email, senha)` está em `cypress/support/commands.js` (abre “Signup / Login”, preenche e envia).

## Observação sobre credenciais

As credenciais são de um site de testes público. Ajuste o fixture se quiser outra conta, mas mantenha `usuarioInvalido` e a senha incorreta apenas para cenários negativos.

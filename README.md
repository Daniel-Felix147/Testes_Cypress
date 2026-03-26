# 🧪 Projeto de Automação de Testes E2E com Cypress (Portfólio)

Este repositório contém um projeto de automação de testes **End-to-End (E2E)** utilizando **Cypress**, desenvolvido para fins de estudo e portfólio na área de **Quality Assurance (QA)**.

O objetivo é validar fluxos reais de um usuário em um e-commerce, aplicando boas práticas utilizadas em projetos profissionais.

🔗 Site testado: https://www.automationexercise.com/

---

## 🚀 Tecnologias utilizadas
- Cypress
- JavaScript
- Node.js
- npm

---

## 🎯 Objetivo do projeto
Automatizar cenários funcionais importantes do sistema, validando:
- autenticação do usuário
- mensagens de erro em login inválido
- navegação no catálogo de produtos
- adição de produto ao carrinho

---

## ✅ Boas práticas aplicadas
- Organização por cenários (`1 arquivo de teste por fluxo`)
- Uso de **Fixtures** para dados de teste (`usuarios.json`)
- Uso de **Custom Commands** (`cy.login()`)
- Uso de `before()` e `beforeEach()` para setup e reutilização
- Validações com `should()` garantindo resultados esperados
- Testes com escrita clara e foco em comportamento do usuário

---

## 🧪 Cenários automatizados

| Arquivo | Cenário |
|--------|---------|
| `login-sucesso.cy.js` | Login com credenciais válidas e validação de usuário autenticado |
| `login-credenciais-invalidas.cy.js` | Login com usuário inexistente e validação de mensagem de erro |
| `login-senha-incorreta.cy.js` | Login com email válido e senha incorreta validando erro |
| `carrinho-adicionar-produto.cy.js` | Login + seleção de produto + adição ao carrinho e validação de confirmação |

---

## 📂 Estrutura do projeto
 
cypress/
e2e/
portfolio/
fixtures/
usuarios.json
support/
commands.js
e2e.js


---

## 📌 Dados de teste (Fixtures)

Os dados utilizados nos testes estão no arquivo:

`cypress/fixtures/usuarios.json`

Exemplo de estrutura:

```json
{
  "usuarioValido": {
    "email": "exemplo@gmail.com",
    "senha": "123456"
  },
  "usuarioInvalido": {
    "email": "inexistente@teste.com",
    "senha": "senha_errada"
  }
}


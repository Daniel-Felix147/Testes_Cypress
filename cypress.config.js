const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Só descobre/roda os testes do portfólio (pasta versionada no GitHub).
    specPattern: "cypress/e2e/portfolio/**/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

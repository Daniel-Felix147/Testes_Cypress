const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    specPattern: "cypress/e2e/portfolio/**/*.cy.js",
    setupNodeEvents(on, config) {},
  },
});
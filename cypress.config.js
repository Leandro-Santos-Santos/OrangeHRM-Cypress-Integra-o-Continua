const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pwxho8",
  // ...rest of the Cypress project config
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

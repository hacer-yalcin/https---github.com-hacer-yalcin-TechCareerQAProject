const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    projectId: 'se9z1r',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

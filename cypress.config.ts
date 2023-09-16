const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  video: false,
  viewportWidth: 1440,
  viewportHeight: 1000,
  trashAssetsBeforeRuns: true,
  responseTimeout: 120000,
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  taskTimeout: 90000,
  pageLoadTimeout: 90000,
  requestTimeout: 90000,
  reporterOptions: {
    allure: true,
    allureResultPath: "allure-results",
  },

  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});

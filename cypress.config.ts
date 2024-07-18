import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 20000, // Increase default command timeout
    pageLoadTimeout: 240000, // Increase page load timeout
    responseTimeout: 60000, // Increase response timeout
    requestTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

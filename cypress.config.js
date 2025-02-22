const { defineConfig } = require('cypress');

module.exports = defineConfig({
  
  //For Auto run
  //watchForFileChanges:false,
  
  //for report
  reporter:'cypress-mochawesome-reporter', 

  //For Video-Test Execution Recording 
	video:true,

  


  e2e: {
    //Ensure that the experimentalOriginDependencies flag is enabled in your Cypress configuration file (cypress.config.js
    experimentalOriginDependencies: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    
      //for report
      require('cypress-mochawesome-reporter/plugin')(on);
    
    },
    experimentalStudio:true
  },
});

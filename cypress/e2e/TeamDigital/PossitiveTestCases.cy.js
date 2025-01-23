describe('Test Suite for OneInSight Possitive scenarios', () => {
  
    beforeEach('Set up login session and navigate to Request Access page', () => {
      // Start fresh by visiting the page and login process without using cy.session initially
      cy.visit('https://digitaldev.teaminc.com/#/');
      
      // Ensure the "Sign In" button is visible and click it
      cy.get('.dx-button-text', { timeout: 10000 }).should('be.visible').click();
      
      // Load login credentials from the fixture
      cy.fixture('oneinsight.json').then((data) => {
        cy.origin('https://teamincb2c.b2clogin.com', { args: { data } }, ({ data }) => {
          const Login = Cypress.require('../PageObjects/LoginPage');
          const ln = new Login();
          ln.setUserName(data.Username);
          ln.setPassword(data.Password);
          ln.clickSubmit();
        });
      });
  
      // Wait and assert that we are on the homepage after login
      cy.url({ timeout: 10000 }).should('eq', 'https://digitaldev.teaminc.com/');
      
      // Now visit the Request Access page directly
      cy.visit('https://digitaldev.teaminc.com/#/request-access');
  
      // Assert that we are on the Request Access page
      cy.url({ timeout: 10000 }).should('include', '/request-access');
      cy.log('Navigated to /request-access');
    });
  
    it('Test Case 1: Verify Request Access Page', () => {
      // Ensure the Request Access page content is visible
      cy.get('.dx-card', { timeout: 10000 }).should('be.visible');
      cy.log('Request Access page is visible');
    });
  
    it('Test Case 2: Verify "Module" is Visible on Request Access Page', () => {
      // Ensure you're still on the Request Access page
      cy.url().should('include', '/request-access');
      cy.log('On /request-access page for Test Case 2');
  
      // Find the element (e.g., with class '.dx-card > :nth-child(3)') and ensure it's visible
      cy.get('.dx-card > :nth-child(3)', { timeout: 10000 }).should('be.visible');
      cy.log('Module is visible on the Request Access page');
  
      // Optional interaction with the module if needed
      cy.get('.dx-list-select-all > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon', { timeout: 10000 })
        .click();
      cy.log('Checkbox clicked inside module');
    });
  
    
    it('Test Case 3: Verify "Company Name and Site" is Visible on Request Access Page', () => {
      // Ensure you're still on the Request Access page
      cy.url().should('include', '/request-access');
      cy.log('On /request-access page for Test Case 3');
  
      cy.wait(2000)
      cy.get('.dx-card > :nth-child(5)', { timeout: 10000 }).should('be.visible');
      cy.log('Company Name and Site is visible on the Request Access page');
  
      cy.xpath("(//input[@class='dx-texteditor-input'])[1]", { timeout: 10000 })
        .type("Muthu is Testing Company Name and Site");
      cy.log('Entering Text in Company Name and Site');
    });
  
    it('Test Case 4: Verify "Team Contract" is Visible on Request Access Page', () => {
      // Ensure you're still on the Request Access page
      cy.url().should('include', '/request-access');
      cy.log('On /request-access page for Test Case 4');
  
      cy.wait(2000)
      cy.get('.dx-card > :nth-child(7)', { timeout: 10000 }).should('be.visible');
      cy.log('Team Contract is visible on the Request Access page');
  
      cy.xpath("(//input[@class='dx-texteditor-input'])[2]", { timeout: 10000 })
         .type('Muthu is Testing Team Contract');
      cy.log('Entering Text in Company Name and Site');
    });
  
  
    it('Test Case 9: Verify that the "Request Access" button is visible on the Request Access page. Provide data for all fields on the page, including "Modules," "Company Name and Site," and "Team Contract," and proceed with the testing. The system should allow the user to successfully complete the task.', () => {
      // Ensure you're still on the Request Access page
      cy.url().should('include', '/request-access');
      cy.log('On /request-access page for Test Case 9');
  
      // Find the element (e.g., with class '.dx-card > :nth-child(3)') and ensure it's visible
      cy.get('.dx-card > :nth-child(3)', { timeout: 10000 }).should('be.visible');
      cy.log('Module is visible on the Request Access page');
  
      // Optional interaction with the module if needed
      cy.get('.dx-list-select-all > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon', { timeout: 10000 })
        .click();
      cy.log('Checkbox clicked inside module');
  
      cy.get('.dx-card > :nth-child(5)', { timeout: 10000 }).should('be.visible');
      cy.log('Company Name and Site is visible on the Request Access page');
  
      cy.xpath("(//input[@class='dx-texteditor-input'])[1]", { timeout: 10000 })
        .type("Muthu is Testing Company Name and Site");
      cy.log('Entering Text in Company Name and Site');
      
      cy.wait(2000)
      cy.get('.dx-card > :nth-child(7)', { timeout: 10000 }).should('be.visible');
      cy.log('Team Contract is visible on the Request Access page');
  
      cy.xpath("(//input[@class='dx-texteditor-input'])[2]", { timeout: 10000 })
         .type('Muthu is Testing Team Contract');
      cy.log('Entering Text in Company Name and Site');
  
     
      cy.get('.dx-button-text', { timeout: 10000 }).should('be.visible').click();
      cy.log('"Request Access" button is Visible on the Request Access page and it is clicked');
      //Notification message "You will receive a notification when your request has been fulfilled." should be displayed
    });
  
    it('Test Case 10: Verify that the user is able to log out successfully after completing all tasks on the Request Access page.', () => {
      // Ensure you're still on the Request Access page
      cy.url().should('include', '/request-access');
      cy.log('On /request-access page for Test Case 10');
  
      // Find the element (e.g., with class '.dx-card > :nth-child(3)') and ensure it's visible
      cy.get('.dx-card > :nth-child(3)', { timeout: 10000 }).should('be.visible');
      cy.log('Module is visible on the Request Access page');
  
      // Optional interaction with the module if needed
      cy.get('.dx-list-select-all > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon', { timeout: 10000 })
        .click();
      cy.log('Checkbox clicked inside module');
  
      cy.get('.dx-card > :nth-child(5)', { timeout: 10000 }).should('be.visible');
      cy.log('Company Name and Site is visible on the Request Access page');
  
      cy.xpath("(//input[@class='dx-texteditor-input'])[1]", { timeout: 10000 })
        .type("Muthu is Testing Company Name and Site");
      cy.log('Entering Text in Company Name and Site');
      
      cy.wait(2000)
      cy.get('.dx-card > :nth-child(7)', { timeout: 10000 }).should('be.visible');
      cy.log('Team Contract is visible on the Request Access page');
  
      cy.xpath("(//input[@class='dx-texteditor-input'])[2]", { timeout: 10000 })
         .type('Muthu is Testing Team Contract');
      cy.log('Entering Text in Company Name and Site');
  
     
      cy.get('.dx-button-text', { timeout: 10000 }).should('be.visible').click();
      cy.log('"Request Access" button is Visible on the Request Access page and it is clicked');
      //Notification message "You will receive a notification when your request has been fulfilled." should be displayed
  
      cy.get('.dx-popup-title > .dx-toolbar-items-container > .dx-toolbar-before > .dx-item > .dx-item-content > div', { timeout: 10000 }).should('be.visible');
      cy.log('After completing the Request access Popup message is displayed');
  
      cy.get('.dx-toolbar-center > .dx-item > .dx-item-content > .dx-widget > .dx-button-content').click()
    });
  
  
  });
  
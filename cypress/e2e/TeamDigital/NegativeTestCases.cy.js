describe('Test Suite for OneInSight Negative Scenarios', () => {
  
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
  
  
    it('Test Case 5: Verify that the "Request Access" button is visible on the Request Access page. Select only the "Module" option and proceed with the testing. The system should not allow the user to complete the task.', () => {
      // Ensure you're still on the Request Access page
      cy.url().should('include', '/request-access');
      cy.log('On /request-access page for Test Case 5');
  
      // Find the element (e.g., with class '.dx-card > :nth-child(3)') and ensure it's visible
      cy.get('.dx-card > :nth-child(3)', { timeout: 10000 }).should('be.visible');
      cy.log('Module is visible on the Request Access page');
  
      // Optional interaction with the module if needed
      cy.get('.dx-list-select-all > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon', { timeout: 10000 })
        .click();
      cy.log('Checkbox clicked inside module');
  
     
      cy.get('.dx-button-text', { timeout: 10000 }).should('be.visible').click();
      cy.log('"Request Access" button is Visible on the Request Access page and it is clicked');
    });
  
    it('Test Case 6: Verify that the "Request Access" button is visible on the Request Access page. Provide data only in "Company Name and Site" and proceed with the testing. The system should not allow the user to complete the task.', () => {
      // Ensure you're still on the Request Access page
      cy.url().should('include', '/request-access');
      cy.log('On /request-access page for Test Case 6');
  
      cy.wait(2000)
      cy.get('.dx-card > :nth-child(5)', { timeout: 10000 }).should('be.visible');
      cy.log('Company Name and Site is visible on the Request Access page');
  
      cy.xpath("(//input[@class='dx-texteditor-input'])[1]", { timeout: 10000 })
        .type("Muthu is Testing Company Name and Site");
      cy.log('Entering Text in Company Name and Site');
  
     
      cy.get('.dx-button-text', { timeout: 10000 }).should('be.visible').click();
      cy.log('"Request Access" button is Visible on the Request Access page and it is clicked');
    });
  
    it('Test Case 7: Verify that the "Request Access" button is visible on the Request Access page. Provide data only in "Team Contract" and proceed with the testing. The system should not allow the user to complete the task.', () => {
      // Ensure you're still on the Request Access page
      cy.url().should('include', '/request-access');
      cy.log('On /request-access page for Test Case 7');
      
      cy.wait(2000)
      cy.get('.dx-card > :nth-child(7)', { timeout: 10000 }).should('be.visible');
      cy.log('Team Contract is visible on the Request Access page');
  
      cy.xpath("(//input[@class='dx-texteditor-input'])[2]", { timeout: 10000 })
         .type('Muthu is Testing Team Contract');
      cy.log('Entering Text in Company Name and Site');
  
     
      cy.get('.dx-button-text', { timeout: 10000 }).should('be.visible').click();
      cy.log('"Request Access" button is Visible on the Request Access page and it is clicked');
    });
  
    it('Test Case 8: Verify that the "Request Access" button is visible on the Request Access page. Provide data on both "Company Name and Site" and "Team Contract" and proceed with the testing. The system should not allow the user to complete the task.', () => {
      // Ensure you're still on the Request Access page
      cy.url().should('include', '/request-access');
      cy.log('On /request-access page for Test Case 8');
  
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
      //Notification message "You must select at least one feature module to request access" should be displayed
    });
  
  
  });
  
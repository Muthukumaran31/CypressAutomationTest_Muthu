import { each } from "bluebird";
import Login from "../PageObjects/LoginPage2";

describe('Test Suite for OneInSight', () => {

  before('Running Before All Test', ()=>{
    cy.log('Running before all test!')
    cy.visit('https://digitaldev.teaminc.com/#/')
    cy.log("Landed in Digital Dev TeamInc Website")
    cy.get('.dx-button-text').click()
    cy.wait(3000)
  
   })
 
 /* //General Approach
  it.skip('Test cases for OneINSight 1', () => {   
    cy.visit('https://digitaldev.teaminc.com/#/')
    cy.log("Landed in Digital Dev TeamInc Website")
    cy.get('.dx-button-text').click()
    cy.wait(3000)

    cy.origin('https://teamincb2c.b2clogin.com', () => {
      cy.log("Landed in TeamInc B2C Website")
      cy.get('input#logonIdentifier').type('muthukumaran.dakshinamurthy@psiog.com')
      cy.get('input#password').type('Muthu1234team@')
      cy.get('button#next').click()
      })    
    cy.wait(3000)
    cy.get('div.user-name').contains(' D, Muthukumaran')
    //cy.get('div.user-name').should('be.visible')
    cy.xpath("(//span[@class='dx-checkbox-icon'])[1]").click()
    cy.xpath("(//div[@class='dx-texteditor-input-container'])[1]").type('Sample test 123')
    cy.xpath("(//input[@class='dx-texteditor-input'])[2]").type('Demo Team contach')
    cy.get("span.dx-button-text").click()
    cy.get('.dx-popup-title > .dx-toolbar-items-container > .dx-toolbar-before > .dx-item > .dx-item-content > div').contains('Successfully Submitted Access Request')
    cy.get('.dx-item-content > .dx-widget > .dx-button-content > .dx-button-text').click()
    })*/
  

  /*  //Using POM
    it.skip('Login Test 2', () => {   
      cy.origin('https://teamincb2c.b2clogin.com', () => {
        const Login = Cypress.require('../PageObjects/LoginPage');
        const ln = new Login();
        ln.setUserName("muthukumaran.dakshinamurthy@psiog.com");
        ln.setPassword("Muthu1234team@");
        ln.clickSubmit();
        cy.wait(4000);
        })
        
       // Wait for the exact URL to be visible
       cy.url().should('eq', 'https://digitaldev.teaminc.com/'); // Adjusted to check for the specific path
        cy.wait(4000);
         cy.get('.dx-card').should('contain', 'Request Access'); // Further actions or assertions
          cy.get('div.user-name').contains(' D, Muthukumaran'); // Check for user name display

      })*/

   //Using POM with fixtures
   it.only('Login Test-3', () => {
    cy.fixture('oneinsight.json').then((data) => {
      cy.origin('https://teamincb2c.b2clogin.com', { args: { data } }, ({ data }) => {
        const Login = Cypress.require('../PageObjects/LoginPage');
        const ln = new Login();
        ln.setUserName(data.Username); // Use fixture data without quotes
        ln.setPassword(data.Password); // Use fixture data without quotes
        ln.clickSubmit();
        cy.wait(4000); // Optional, remove if not needed
      });
// Wait for the exact URL to be visible
cy.url().should('eq', 'https://digitaldev.teaminc.com/'); // Adjusted to check for the specific path
cy.wait(4000);
cy.get('.dx-card').should('contain', 'Request Access'); // Further actions or assertions
cy.get('div.user-name').contains(' D, Muthukumaran'); // Check for user name display
    })
  })
})

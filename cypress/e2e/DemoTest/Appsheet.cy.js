///<reference types="cypress"/>

describe('Test Suite for Appsheet', () => {
    it('TestCase for Appsheet', () => {
      // Step 1: Visit the Login App Sheet
      cy.visit('https://www.appsheet.com/Account/Login?returnUrl=%2Fhome%2Fapps')
  
      //Step 2: Select SignIn with Microsoft Account
      cy.get("button[id='Microsoft'] span[class='description']").click()

      // cy.origin('https://login.microsoftonline.com/',() => {
      //   cy.get('#i0116').type('muthukumaran.dakshinamurthy@psiog.com');
      //   cy.get('#idSIButton9').click();
      //   cy.get('#i0118').type('Ms21012025@');
      //   cy.get('#idSIButton9').click();
      // })
    })

  })

  


     
     

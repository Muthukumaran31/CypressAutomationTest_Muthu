import 'cypress-iframe'

describe('IFrame Suite', () => {

    it('IFrame Test method 1', () => {
  
      cy.visit('https://www.automationtesting.co.uk/iframes.html')
      const iframe=cy.get("iframe[src='index.html']")
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap)
      
      
      .find('.toggle').click()
  


    })

    it('IFrame Test method 2', () => {
  
      cy.visit('https://www.automationtesting.co.uk/iframes.html')

     cy.frameLoaded("iframe[src='index.html']"); //Load the frame
      cy.iframe("iframe[src='index.html']")
      .should('be.visible')
      .then(cy.wrap)
      
      
      .find('.toggle').click()
  
    })
  
  })
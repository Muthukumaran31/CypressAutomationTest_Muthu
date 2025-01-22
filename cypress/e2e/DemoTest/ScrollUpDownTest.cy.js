describe('Cypress Scroll Suite',()=>{ //Test suite
    it('Cypress Scroll TestCase1',()=>{ //Test cases
        cy.visit('https://example.cypress.io/commands/actions')
        cy.wait(5000);

        //Scroll
        cy.contains('.scrollIntoView()').
        scrollIntoView().should('be.visible').click();

    })
           })
   
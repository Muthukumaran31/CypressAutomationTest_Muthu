// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })

// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(false)
//     })
//   })

// describe('My First Test', () => {
    
//     it('Visits the Kitchen Sink', () => {
//       cy.log(" Step 1: Visit a page")
//       cy.visit('https://example.cypress.io')
//       cy.log("Step 2: Query for an element")
//       //cy.contains('type') //Pass
//        //cy.contains('Hype') //Fail
//       cy.log("Step 3: Click an element")
//       cy.contains('type').click()
//       cy.log("Step 4: Make an assertion")
//       // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     })
//   })


describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Get an input, type into it
      cy.get('.action-email').type('fake@email.com')
  
      //  Verify that the value has been updated
      cy.get('.action-email').should('have.value', 'fake@email.com')
    })
  })
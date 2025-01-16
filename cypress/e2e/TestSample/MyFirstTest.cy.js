
describe('My First Test',()=>{ //Test suite
     it('test1-VerifyTitle-Possitive',()=>{ //Test cases
       cy.log("Starting the test")
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.title().should('eq','OrangeHRM') //assertion
     })
     it('test2-VerifyTitle-Negative',()=>{
       cy.log("Second test cases 002")
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM122')
      })
    
})
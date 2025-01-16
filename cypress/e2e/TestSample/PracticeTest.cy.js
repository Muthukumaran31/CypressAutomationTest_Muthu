describe('My First Test 161224',()=>{ //Test suite
       
     it('Verify URL and Title of the website is correct',()=>{ //Test cases
            cy.visit('https://practicetestautomation.com/practice-test-login/')
            cy.title().should('eq','Test Login | Practice Test Automation') //assertion
     })

     it('Verify Username and Password is correct- Positive LogIn test',()=>{ //Test cases
       cy.visit("https://practicetestautomation.com/practice-test-login/")
       cy.get('input#username').type('student') //Id Locator Tag is optional
       cy.get('input#password').type('Password123')  //Name Locator
      // cy.get("[name='password']").type('Password123')  // Attribute and value
      // cy.get('button#submit').click()  // Id locator
     // cy.get('.btn').click()   //Class Locator
     cy.get('button.btn[id="submit"]').click()  //Tag class Attribute Value
      })

      it('Verify Invalide Username and correct Password- Negative username test',()=>{ //Test cases
       cy.visit("https://practicetestautomation.com/practice-test-login/")
       cy.get('input#username').type('incorrectUser') //Invalide Username
       cy.get('input#password').type('Password123')  //Name Locator
       cy.get('button#submit').click() 
       cy.get("#error").contains("Your username is invalid!")//Assert
      })

      it('Verify Correct Username and Invalide Password- Negative password test',()=>{ //Test cases
       cy.visit("https://practicetestautomation.com/practice-test-login/")
       cy.get('input#username').type('student') //Invalide Username
       cy.get('input#password').type('Password123@asd')  //Name Locator
       cy.get('button#submit').click() 
       cy.get("#error").contains("Your password is invalid!")//Assert

      })

       it('Verify User can able to login sucessfully',()=>{ //Test cases
              cy.log("completed test cases5")
              cy.visit("https://practicetestautomation.com/practice-test-login/")
              cy.get('input#username').type('student') //Id Locator
              cy.get('input#password').type('Password123')  //Name Locator
              cy.get('button#submit').click() 
              //cy.title().should('eq','Logged In Successfully | Practice Test Automation')
              cy.get(".post-title").contains("Logged In Successfully")
              cy.log("Completed test 0501c2")
              
              })
    
})
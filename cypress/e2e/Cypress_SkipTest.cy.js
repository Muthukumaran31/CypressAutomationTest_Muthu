describe('Cypress Skip Test Suite',()=>{ //Test suite
   
  
    it.skip('Skip Test 1',()=>{ //Test cases
           
        //to.equal
        cy.visit('https://www.google.co.in/search?q=cypress+assertions')
        cy.log("Executing Assertion on to.equal") 
        cy.get('textarea[aria-label="Search"]').then((element)=>{
                expect(element.text()).to.equal("cypress assertions");
            })

        //have.text
        cy.log("Executing Assertion on have.text")    
        cy.get('textarea[aria-label="Search"]').should("have.text","cypress assertions")
    })

    it.skip('Skip Test 2',()=>{ //Test cases
           
        //to.equal
        cy.visit('https://www.google.co.in/search?q=cypress+assertions')
        cy.log("Executing Assertion on to.equal") 
        cy.get('textarea[aria-label="Search"]').then((element)=>{
                expect(element.text()).to.equal("cypress assertions");
            })

        //have.text
        cy.log("Executing Assertion on have.text")    
        cy.get('textarea[aria-label="Search"]').should("have.text","cypress assertions")
    })

    it.skip('Skip Test 3',()=>{ //Test cases
           
        //to.equal
        cy.visit('https://www.google.co.in/search?q=cypress+assertions')
        cy.log("Executing Assertion on to.equal") 
        cy.get('textarea[aria-label="Search"]').then((element)=>{
                expect(element.text()).to.equal("cypress assertions");
            })

        //have.text
        cy.log("Executing Assertion on have.text")    
        cy.get('textarea[aria-label="Search"]').should("have.text","cypress assertions")
    })

})

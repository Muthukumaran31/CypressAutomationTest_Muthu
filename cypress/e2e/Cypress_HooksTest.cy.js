describe('Cypress Hook Suite',()=>{ //Test suite
   
    before('Running Before All Test', ()=>{
        cy.log('Running before all test!')
            })

    after('Running after All Test', ()=>{
        cy.log('Running after all test')
    })        

    beforeEach('Running Before Each Test', ()=>{
        cy.log('Running before each test!')
        cy.visit('https://www.google.co.in/search?q=cypress+assertions')
            })
    
    afterEach('Running After Each Test', ()=>{
        cy.log('Running after each test!')
          })       

    it('Hooks Test 1',()=>{ //Test cases
           
        //to.equal
       // cy.visit('https://www.google.co.in/search?q=cypress+assertions')
        cy.log("Executing Assertion on to.equal") 
        cy.get('textarea[aria-label="Search"]').then((element)=>{
                expect(element.text()).to.equal("cypress assertions");
            })

        //have.text
        cy.log("Executing Assertion on have.text")    
        cy.get('textarea[aria-label="Search"]').should("have.text","cypress assertions")
    })

    it('Hooks Test 2',()=>{ //Test cases
           
        //to.equal
       // cy.visit('https://www.google.co.in/search?q=cypress+assertions')
        cy.log("Executing Assertion on to.equal") 
        cy.get('textarea[aria-label="Search"]').then((element)=>{
                expect(element.text()).to.equal("cypress assertions");
            })

        //have.text
        cy.log("Executing Assertion on have.text")    
        cy.get('textarea[aria-label="Search"]').should("have.text","cypress assertions")
    })

})

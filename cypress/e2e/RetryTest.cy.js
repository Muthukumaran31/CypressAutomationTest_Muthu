describe('Retry Test Suite',()=>{ //Test suite
   


        it('Repeat Test 1',{retries:2},()=>{ //Test cases
           
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

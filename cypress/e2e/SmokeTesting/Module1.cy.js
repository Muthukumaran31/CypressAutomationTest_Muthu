describe('Module 1 Suite',()=>{ //Test suite
    it('Module 1 Test',()=>{ //Test cases
           
        //to.equal
        
        cy.visit('https://www.google.co.in/search?q=cypress+assertions')
        cy.log("Executing Assertion on to.equal") 
        cy.get('textarea[aria-label="Search"]').then((element)=>{
                expect(element.text()).to.equal("cypress assertions");
        
        //have.text
        cy.log("Executing Assertion on have.text")    
        cy.get('textarea[aria-label="Search"]').should("have.text","cypress assertions")
            
        //contain
        cy.log("Executing Assertion on contain")    
        cy.get('textarea[aria-label="Search"]').should("contain","cypress assertions")
            
        //be.visible
        cy.log("Executing Assertion on be.visible")    
        cy.get('textarea[aria-label="Search"]').should("be.visible")
          
        //have.html
        cy.log("Executing Assertion on have.html")    
        cy.get('textarea[aria-label="Search"]').should("have.html","cypress assertions")
          
        //have.attr
        cy.log("Executing Assertion on have.attr")    
        cy.get('textarea[aria-label="Search"]').should("have.html","cypress assertions").and("have.attr","value")
          
        //have.attr & Include
        cy.log("Executing Assertion on have.attr & Include")    
        cy.get('textarea[aria-label="Search"]').should("have.html","cypress assertions").and("have.attr","value").and("include","cypress assertions")
          
        //to.have.length
        cy.log("Executing Assertion on to.have.length")    
        cy.get('textarea[aria-label="Search"]').then((element)=>{
            expect(element.text()).to.have.length(18);
        })

            })
    })
})

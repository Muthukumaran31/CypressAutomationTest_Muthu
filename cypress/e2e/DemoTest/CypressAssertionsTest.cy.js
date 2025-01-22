describe('Cypress Assertion Suite',()=>{ //Test suite
    it.skip('Cypress Assertion Test',()=>{ //Test cases
           
        //to.equal
        
        cy.visit('https://www.google.co.in/search?q=cypress+assertions&sca_esv=76438c6487a38795&sxsrf=ADLYWIIW91pguJcvuyaKCa4utjdwUbu5zg%3A1737354078875&ei=XuuNZ5P8NP2A5OUP3aDQkAI&ved=0ahUKEwiTo-Gl1IOLAxV9ALkGHV0QFCIQ4dUDCBA&uact=5&oq=cypress+assertions&gs_lp=Egxnd3Mtd2l6LXNlcnAiEmN5cHJlc3MgYXNzZXJ0aW9uczIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzINEAAYgAQYsAMYQxiKBTINEAAYgAQYsAMYQxiKBUj-AlAAWABwAXgBkAEAmAEAoAEAqgEAuAEDyAEAmAIBoAIGmAMAiAYBkAYKkgcBMaAHAA&sclient=gws-wiz-serp')
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

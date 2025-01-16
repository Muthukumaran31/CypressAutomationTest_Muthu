
describe('My First Test 281224',()=>{ //Test suite
    it('test1-VerifyTitle-Possitive',()=>{ //Test cases
        cy.log("Test is started")
           cy.visit('https://www.youtube.com/')
           cy.get("input[role='combobox']").type("Cypress")
           cy.log("clicking search button")
           cy.get("button.ytSearchboxComponentSearchButton").click()
           cy.log("Test one is completed")
           
    })
    
})
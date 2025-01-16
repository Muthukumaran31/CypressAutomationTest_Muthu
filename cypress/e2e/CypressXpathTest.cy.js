describe('Cypress Xpath Suite',()=>{ //Test suite
    it('Cypress Xpath TestCase1',()=>{ //Test cases
          // cy.visit('http://www.automationpractice.pl/index.php')
            cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
           cy.xpath('//*[@id="center_column"]/ul/li').should('have.length','7')
          })

          //or

          it('Chanined Xpath TestCase2',()=>{ //Test cases
            cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
              cy.xpath('//*[@id="center_column"]/ul').xpath('./li').should('have.length','7')
             })

             it('Search using Xpath TestCase3',()=>{ //Test cases
                cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
                   cy.xpath("//input[contains(@class,'search_query form-control')]").type("Mens Dress")
                   cy.xpath("(//button[contains(@class,'btn btn-default')])[1]").click()
                   cy.xpath("//input[contains(@class,'search_query form-control')]").clear().type("T-shirts")
                   cy.xpath("(//button[contains(@class,'btn btn-default')])[1]").click()
                       
                 })

             
})
describe('My First Test',()=>{ //Test suite
    it('Find number of product',()=>{ //Test cases
          // cy.visit('http://www.automationpractice.pl/index.php')
            cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
           cy.xpath('//*[@id="center_column"]/ul/li').should('have.length','7')
          })
          it('Chanined Xpath',()=>{ //Test cases
            // cy.visit('http://www.automationpractice.pl/index.php')
              cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
             cy.xpath('//*[@id="center_column"]/ul').xpath('./li').should('have.length','7')
             
            })
})
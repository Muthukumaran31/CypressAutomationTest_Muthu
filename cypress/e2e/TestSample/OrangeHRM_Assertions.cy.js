describe('Assert demo',()=>{ //Test suite
    it('test1-VerifyTitle-Possitive',()=>{ //Test cases
           cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


           // should -typping multiple time cy.url
          // cy.url().should('include','orangehrmlive.com')
           //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          // cy.url().should('contain','orange')

          //or

          //can include only one time cy.url and .should will work fine
            /*cy.url().should('include','orangehrmlive.com')
            .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain','orange')*/

            //or
            //can change should to and it will also work fine



// Possitive assertion
            cy.url().should('include','orangehrmlive.com')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain','orange') 
            
//Negative assertion
            .and('not.eq','https:/red-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('not.contain','redhrm')

            cy.title().should('include','Orange')
            .and('eq',"OrangeHRM")
            .and('contain',"HRM")
           
            
// within the should parameter has been provided
            cy.get('.orangehrm-login-branding > img').should('be.visible')// logo visible or not
            .and('exist')// logo exist or not

//Captcher all the link in the web page by using ancer link text
           // cy.xpath('//a').should('have.lenght','5')  // No of links
        
        //type is a method to provide a value in a input box
           cy.get("[name='username']").type('Admin')
           //provide a assertion
           cy.get("[name='username']").should('have.value','Admin')

           cy.get("input[placeholder='Username']").type('Admin')
           cy.get("input[placeholder='Password']").type('admin123')
           cy.get("button[type='submit']").click()

     
          })

    
})
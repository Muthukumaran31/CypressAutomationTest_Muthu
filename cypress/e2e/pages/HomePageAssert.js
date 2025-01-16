class HomePageAssert {

    elements = {
        Pagevalidation : () => // Possitive assertion
        cy.url().should('include','orangehrmlive.com')
        
    }

    goToPage() {
        this.elements.Pagevalidation().and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        .and('contain','orange') 
    }

}

module.exports = new HomePageAssert();

describe(" Suite 2 ",()=>{
    it("Suite 2 Test",()=>{
    
    //Selectors

    //Attribute
        cy.visit("https://www.google.co.in/search?q=javascript+cypress+by+muthu&sca_"),{failOnStatusCode: false}
        cy.get('textarea[class="gLFyf"]').then((element)=>{
            cy.log("Text from google : " +element.text())
        })

        //ID
        cy.get('#APjFqb').then((element)=>{
        cy.log("Text from google : " +element.text())
        })

     
    })
})
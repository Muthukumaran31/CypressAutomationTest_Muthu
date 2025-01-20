import { fail } from "assert-plus"

describe("Cypress Selectors Suite",()=>{
    it.skip("Cypress Selector Test",()=>{
    
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

        //Class, First, Last, Index
        //cy.get('[class="crJ18e"] > div > div').first().click();
        //cy.get('[class="crJ18e"] > div > div').last().click();
        //cy.get('[class="crJ18e"] > div > div').eq(6).click();

        //Starts-with
        //cy.get('button[type^="sub"]').click();

        //Ends-with
        //cy.get('button[type$="mit"]').click();

         //contains - CSS
         //cy.get('button[type*="ubmi"]').click();

          //contains - Cypress
        //  cy.contains('Cypress').click();      

        
        //tag name
        cy.get('[class="crJ18e"] > div > div').eq(2).click();
 

       
    })
})
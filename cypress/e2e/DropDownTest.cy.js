import { values } from "lodash"

describe('Cypress Dropdown',()=>{ //Test suite
    it('Cypress Dropdown TestCase1',()=>{ //Test cases
            cy.visit('https://example.cypress.io/commands/actions')
         //cy.get("select.form-control.action-select").select(1)  //index
        
         cy.get("select.form-control.action-select").select('bananas') //Visible text
         //cy.get("select.form-control.action-select").select('fr-oranges') //value
        
        })

})
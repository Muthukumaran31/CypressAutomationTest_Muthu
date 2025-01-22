const jsonData = require('../../fixtures/datadriventest2.json')

describe('Data Driven Suite2',()=>{ //Test suite
   
    jsonData.forEach((testData)=>{

        it.skip('Data Driven TestCase1',()=>{ //Test cases

            cy.visit('https://www.google.co.in/search?q=cypress+documentation&')
            cy.get('textarea[name="q"]').clear();
            cy.get('textarea[name="q"]').type(testData.skill1);
            cy.get('button[aria-label="Search"]').click();
          })
        })

    })
   
    


       
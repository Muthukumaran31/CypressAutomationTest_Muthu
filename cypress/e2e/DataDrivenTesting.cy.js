describe('Data Driven Suite',()=>{ //Test suite
   
    let testData;

    before('Run Before All Test', ()=>{
        cy.fixture('datadriventest1.json').then((jsonData)=>{
            testData = jsonData;
        })

    })
   
   
    // it('Data Driven TestCase1',()=>{ //Test cases

    //         cy.visit('https://www.google.co.in/search?q=cypress+documentation&')
    //         cy.get('textarea[name="q"]').clear();
    //         cy.get('textarea[name="q"]').type("CypressVideos");
    //         cy.get('button[aria-label="Search"]').click();
    //       })
    //     })


       
    it('Data Driven TestCase2',()=>{ //Test cases

        cy.visit('https://www.google.co.in/search?q=cypress+documentation&')
        cy.get('textarea[name="q"]').clear();
        cy.get('textarea[name="q"]').type(testData.skill1);
        cy.get('button[aria-label="Search"]').click();
      })
    })
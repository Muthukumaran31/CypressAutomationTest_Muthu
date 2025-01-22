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


       
    it.skip('Data Driven TestCase2',()=>{ //Test cases

        cy.visit('https://www.google.co.in/search?q=cypress+documentation&sca_esv=76438c6487a38795&sxsrf=ADLYWIJvImZ9QVZzKLNeWY-HPWqIZVm5Qg%3A1737354493586&ei=_eyNZ67DI5TR1sQPooKJ2A4&ved=0ahUKEwjutcHr1YOLAxWUqJUCHSJBAusQ4dUDCBA&uact=5&oq=cypress+documentation&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWN5cHJlc3MgZG9jdW1lbnRhdGlvbjIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzINEAAYgAQYsAMYQxiKBTINEAAYgAQYsAMYQxiKBUiwA1AAWABwAXgBkAEAmAEAoAEAqgEAuAEDyAEAmAIBoAIFmAMAiAYBkAYKkgcBMaAHAA&sclient=gws-wiz-serp')
        cy.get('textarea[name="q"]').clear();
        cy.get('textarea[name="q"]').type(testData.skill1);
        cy.get('button[aria-label="Search"]').click();
      })
    })
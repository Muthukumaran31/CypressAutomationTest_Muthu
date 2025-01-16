describe('Record and play suite',()=>{
    /* ==== Test Created with Cypress Studio ==== */
    it('InvalideEntry', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('I');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Invalide122');
        cy.get('.oxd-button').click();
        /* ==== End Cypress Studio ==== */
    });

   
})
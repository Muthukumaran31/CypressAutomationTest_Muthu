describe('Record & play suite 2712',()=>{
    it('Valide-Testcases Is recording', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
        cy.get(':nth-child(6) > .oxd-main-menu-item').click();
        cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').click();
        cy.get('.oxd-userdropdown-tab').click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
        /* ==== End Cypress Studio ==== */
    });

})
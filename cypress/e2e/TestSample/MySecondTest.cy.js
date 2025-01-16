describe('Testing Login for orange HRM',()=>{
    it('test1-VerifyTitle-Possitive',()=>{
           cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
           cy.title().should('eq','OrangeHRM')
           cy.get('input[name="username"]').type("Admin")
           cy.get('input[name="password"]').type("admin123")  
           cy.get("button[type='submit']").click() 
           
    })
})
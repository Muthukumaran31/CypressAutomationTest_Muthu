class LoginPage {

    elements = {
        UserName : () => cy.get('input[name="username"]'),
        PassWord : () => cy.get('input[name="password"]'),
        Submit: () =>  cy.get("button[type='submit']")
    }

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    //abstraction method
    LoginHRM() {
        this.elements.UserName().type('Admin');
        this.elements.PassWord().type('admin123')
        this.elements.Submit().click();
    }

}

//export for current class
module.exports = new LoginPage();
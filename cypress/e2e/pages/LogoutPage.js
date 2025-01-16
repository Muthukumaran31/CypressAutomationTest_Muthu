class LogoutPage {

    elements = {
        Playlist : () => cy.get(".oxd-userdropdown-name"),
        LogoutButton : () => cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)')
    }

        //abstraction method
        LogoutHRM() {
              this.elements.Playlist().click();
              this.elements.LogoutButton().click();
        }

}

module.exports = new LogoutPage();
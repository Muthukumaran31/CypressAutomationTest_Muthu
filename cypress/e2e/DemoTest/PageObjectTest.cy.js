import Login from '../pages/LoginPage'
import Homepage from '../pages/HomePageAssert'
import Logout from '../pages/LogoutPage'

describe('Page Object Test Suite', ()=>{

    it('Page Object Test1', ()=>{

        //Visit 
        Login.visit();

        //Open https://example.cypress.io/commands/actions
        Login.LoginHRM();

        //Assertion on URL
        Homepage.goToPage();
     

        //Logout from website
        Logout.LogoutHRM();
    
    
    })

})
class Login
{
    //Methods
    setUserName(username)
    {
        //Elemnts and Actions
      cy.get('input#logonIdentifier').type(username);
    }
    setPassword(password)
    {
      cy.get('input#password').type(password);
    }
    clickSubmit()
    {
      cy.get('button#next').click();
    }
   
}

//Finally It should be Exported
export default Login;
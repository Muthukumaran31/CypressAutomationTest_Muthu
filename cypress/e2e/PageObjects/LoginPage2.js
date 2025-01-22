class Login
{

  //elements
  txtUserName="input#logonIdentifier";
  txtPassword=" input#password"
  txtSubmit="button#next"
  labelmsg=".dx-card"
  

  //Methods
    setUserName(username)
    {
        //Elemnts and Actions
      cy.get(this.txtUserName).type(username);
    }
    setPassword(password)
    {
      cy.get(this.txtPassword).type(password);
    }
    clickSubmit()
    {
      cy.get(this.txtSubmit).click();
    }
    LabelMassage()
    {
      cy.get(this.labelmsg).should('contain', 'Request Access'); // Further actions or assertions
    }
}

//Finally It should be Exported
export default Login;
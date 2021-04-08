
import PageElements from "../../support/selectors";

describe('Login Test Suite ', function() {

    beforeEach(function(){
        cy.visit('https://www.caseative.com/');
    })
    
    it('Open login page', function() {
    const pageElements = new PageElements();

    pageElements.getLoginButton().should('be.visible');
    pageElements.getLoginButton().click();
    cy.url().should('include','/account/login');
    pageElements.getEmail().should('be.visible');
    pageElements.getPassword().should('be.visible');
    pageElements.getSubmitButton().should('be.visible');
})

it('Login valid user and logout', function(){
      
    cy.pause();
    const pageElements = new PageElements();

    pageElements.getLoginButton().click();
    pageElements.getEmail().clear();
    pageElements.getPassword().clear(); 
    pageElements.getEmail().type("thomasshelbytest@gmail.com");
    pageElements.getPassword().type("Qwerty11111@");
    pageElements.getSubmitButton().click();
    pageElements.getUserName().should('contain','Thomas');
    pageElements.getLogOutButton().should('be.visible');
    pageElements.getLogOutButton().click();
    pageElements.getLoginButton().should('be.visible');
    })

    it('Does not work with empty Email field', function(){
      
        const pageElements = new PageElements();
    
        pageElements.getLoginButton().click();
        pageElements.getEmail().clear();
        pageElements.getPassword().clear(); 
        pageElements.getPassword().type("testPassword");
        pageElements.getEmail().type(" ");
        pageElements.getSubmitButton().click();
        pageElements.getAlertMessage().should('be.visible');
        })

      it('Does not work with empty Password field', function(){
      
        const pageElements = new PageElements();
        
        pageElements.getLoginButton().click();
        pageElements.getEmail().clear();
        pageElements.getPassword().clear(); 
        pageElements.getPassword().type(" ");
        pageElements.getEmail().type("thomasshelbytest@gmail.com");
        pageElements.getSubmitButton().click();
        pageElements.getAlertMessage().should('be.visible');
        })

     it('Does not work with unregistered email', function(){
      
        const pageElements = new PageElements();
            
        pageElements.getLoginButton().click();
        pageElements.getEmail().clear();
        pageElements.getPassword().clear(); 
        pageElements.getPassword().type("testPassword");
        pageElements.getEmail().type("leleka@gmail.com");
        pageElements.getSubmitButton().click();
        pageElements.getAlertMessage().should('be.visible');
        })
})
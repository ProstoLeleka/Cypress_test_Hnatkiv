class PageElements{
    getLoginButton(){
        return cy.get('#customer_login_link');
    }
    getEmail(){
        return cy.get('#customer_email');
    }
    getPassword(){
        return cy.get('#customer_password');
    }
    getSubmitButton(){
        return cy.get('#customer_login').find('input.btn'); 
    }
    getRegisterButton() {
        return cy.get('.woocommerce-Button');
    }
    getAlertMessage(){
        return cy.get('#customer_login > .note');
    }
    getUserName(){
        return cy.get('div.site-header--text-links > span > a:nth-child(1)');
    }
    getLogOutButton(){
        return cy.get('#customer_logout_link');
    }
}
export default PageElements
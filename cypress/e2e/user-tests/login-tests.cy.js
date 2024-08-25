///<reference types="cypress" />
describe('Login Tests', () => {

    it('Successful Login', () => {
        cy.visit("https://www.saucedemo.com/");
        cy.wait(6000)
        cy.get("[id='user-name']").type("standard_user")
        cy.get("[id='password']").type("secret_sauce");
        cy.get("[id='login-button']").click();
        cy.get("[class='app_logo']").should("have.text","Swag Labs");
    })

    it('Mandatory Field Validation', () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get("[id='user-name']").type("standard_user")
        cy.get("[id='login-form:login']").click();
        cy.get("[data-test='error']").should("have.text","Epic sadface: Password is required");
        cy.get("[id='user-name']").clear();
        cy.get("[id='password']").type("secret_sauce");
        cy.get("[id='login-button']").click();
        cy.get("[data-test='error']").should("have.text","Epic sadface: Username is required");
        cy.get("[id='user-name']").type("standard_user")
        cy.get("[id='password']").type("secret_sauce");
        cy.get("[id='login-button']").click();
        cy.get("[class='app_logo']").should("have.text","Swag Labs");
    })

    it('Invalid User Login', () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get("[id='user-name']").type("standard_user");
        cy.get("[id='password']").type("45855ldshsglds");
        cy.get("[id='login-button']").click();
        cy.get("[data-test='error']").should("have.text","Epic sadface: Username and password do not match any user in this service");
    })

    it('User Logout', () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get("[id='user-name']").type("standard_user")
        cy.get("[id='password']").type("secret_sauce");
        cy.get("[id='login-button']").click();
        cy.get("[id='react-burger-menu-btn']").click();
        cy.get("[id='logout_sidebar_link']").click();
        cy.url().should('eq', 'https://www.saucedemo.com/');
        
    })
})

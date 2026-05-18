// cypress/e2e/before_each_practice.cy.js

describe('Task 2: beforeEach Hook Demonstration', () => {

  // This block runs automatically before every individual test case 
  beforeEach(() => {
    // Navigate to the target practice website once here 
    cy.visit('https://www.saucedemo.com');
  });

  it('Test 1: should verify the page title on initial load', () => {
    // cy.visit() has already run automatically before this test
    cy.title().should('eq', 'Swag Labs');
  });

  it('Test 2: should verify the login button is visible', () => {
    // cy.visit() has already run automatically before this test as well
    cy.get('[data-test="login-button"]').should('be.visible');
  });

});
// cypress/e2e/negative_assertion.cy.js

describe('Task 2: Negative Assertion Test', () => {
  
  // Use a beforeEach hook to visit the site before the test runs
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('should assert that the login error message element does NOT exist on initial load', () => {
    // Target the error container element and assert it does not exist in the DOM
    cy.get('[data-test="error"]').should('not.exist');
  });
});
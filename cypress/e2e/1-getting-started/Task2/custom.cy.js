// cypress/e2e/custom_command_practice.cy.js

describe('Task 2: Custom Command Test', () => {

  beforeEach(() => {
    // Visit the target practice website
    cy.visit('https://www.saucedemo.com');
  });

  it('should successfully log in using the custom login command', () => {
    // Call the custom command defined in commands.js instead of repeating manual steps
    cy.login('standard_user', 'secret_sauce');

    // Assert that the application successfully transitioned to the inventory dashboard
    cy.url().should('include', '/inventory.html');
  });
});
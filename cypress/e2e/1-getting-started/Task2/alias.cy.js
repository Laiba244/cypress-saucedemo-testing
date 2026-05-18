// cypress/e2e/alias_practice.cy.js

describe('Task 2: Alias Practice Test', () => {
  
  beforeEach(() => {
    // Visit the target practice website
    cy.visit('https://www.saucedemo.com');
  });

  it('should save the username field as an alias and interact with it later', () => {
    // 1. Find the element and save it as an alias using .as('myAlias')
    cy.get('[data-test="username"]').as('usernameInput');

    // 2. Reference and interact with the alias later in the test using '@myAlias'
    cy.get('@usernameInput').type('standard_user');

    // 3. Re-use the alias to assert that the value was typed correctly
    cy.get('@usernameInput').should('have.value', 'standard_user');
  });
});
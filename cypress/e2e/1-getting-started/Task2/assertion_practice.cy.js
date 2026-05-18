// cypress/e2e/task2/assertion_practice.cy.js

describe('Task 2: Assertion Practice (3 Separate Tests)', () => {

  // Run before each individual test to visit the page
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  // Test 1: Using 'be.visible' on Element #1 (Login Button)
  it('Test 1: Verifies that the login button is visible on the page', () => {
    cy.get('[data-test="login-button"]').should('be.visible'); // [cite: 55]
  });

  // Test 2: Using 'have.text' on Element #2 (The main heading/logo text)
  it('Test 2: Verifies that the website heading logo displays the correct text', () => {
    cy.get('.login_logo').should('have.text', 'Swag Labs'); // 
  });

  // Test 3: Using 'have.attr' on Element #3 (Username Input Field)
  it('Test 3: Verifies that the username input field has the correct placeholder attribute', () => {
    cy.get('[data-test="username"]').should('have.attr', 'placeholder', 'Username'); // 
  });

});
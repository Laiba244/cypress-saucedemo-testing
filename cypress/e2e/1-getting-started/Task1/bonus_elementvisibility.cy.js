describe('Bonus: Element Visibility Suite', () => {
  it('should verify that the logo text and login button are visible', () => {
    cy.visit('https://www.saucedemo.com');

    // 1. Check text visibility via a class
    cy.get('.login_logo').should('be.visible');

    // 2. Check button component visibility
    cy.get('[data-test="login-button"]').should('be.visible');
  });
});
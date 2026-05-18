describe('Bonus: User Logout Suite', () => {
  it('should log out successfully and return to the login interface', () => {
    cy.visit('https://www.saucedemo.com');

    // Perform standard login steps
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Trigger the responsive navigation sidebar menu
    cy.get('#react-burger-menu-btn').click();

    // Click on the targeted logout navigation link
    cy.get('[data-test="logout-sidebar-link"]').click();

    // Assert that user is brought back to the base url and login controls are visible again
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="login-button"]').should('be.visible');
  });
});
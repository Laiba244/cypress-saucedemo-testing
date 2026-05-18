describe('Bonus: Execution Screenshot Suite', () => {
  it('should capture a visual screen image state of the login screen', () => {
    cy.visit('https://www.saucedemo.com');

    // Saves a image file named 'initial-login-view.png' into your cypress/screenshots folder
    cy.screenshot('initial-login-view');
  });
});
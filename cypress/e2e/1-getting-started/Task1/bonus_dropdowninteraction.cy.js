describe('Bonus: Dropdown Menu Suite', () => {
  it('should select an option from a dropdown and verify the value updates', () => {
    // Visiting the suggested QA playground dropdown route
    cy.visit('https://the-internet.herokuapp.com/dropdown');

    // Select 'Option 1' from the dropdown list element
    cy.get('#dropdown').select('Option 1');

    // Assert that the dropdown's active state value updated correctly to '1'
    cy.get('#dropdown').should('have.value', '1');
  });
});
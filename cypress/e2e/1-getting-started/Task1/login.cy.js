describe('SauceDemo Login', () => {
  it('logs in with valid username and password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  it('shows error for wrong password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrong_password')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('shows error when fields are empty', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})
describe('SauceDemo Form Test', () => {
  it('adds an item to cart and verifies it', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('have.length', 1)
    cy.get('.cart_item').should('be.visible')
  })
})
# Cypress End-to-End (E2E) Testing Project

## Project Structure & Deliverables

### Task 1: Functional UI Test Suite
* **Location**: `cypress/e2e/1-getting-started/Task1/`
* **Core Spec Files**:
  * `login.cy.js` (Valid/invalid and empty validation tests) 
  * `navigation.cy.js` (Sequential menu page navigation assertions)
  * `form.cy.js` (Form fill, submit, and success validation test)
* **Bonus Practice Specs**: `bonus_elemcypress/e2e/1-getting-started/Task1/README.mdentvisibility.cy.js`, `bonus_dropdowninteraction.cy.js`, `bonus_logout.cy.js`, and `bonus_screenshot.cy.js`

### Task 2: Assertions, Aliases & Custom Commands
* **Location**: `cypress/e2e/1-getting-started/Task2/`
* **Spec Files**:
  * `assertion_practice.cy.js` (Using `be.visible`, `have.text`/`have.value`, and `have.attr`) 
  * `negative_assertion.cy.js` (Using `not.exist` to check absence of elements) 
  * `alias.cy.js` (Demonstrating DOM element aliasing via `.as()`)
  * `custom.cy.js` (Utilizing the custom login command) 
  * `beforeEach.cy.js` (Using `beforeEach()` hooks to optimize site visitation)
* **Global Configurations**: `cypress/support/commands.js` (Houses the reusable `login()` custom command).

---

## How to Run the Test Suites

### 1. Installation
Clone the repository, open your terminal in the root directory, and install dependencies:
```bash
npm install

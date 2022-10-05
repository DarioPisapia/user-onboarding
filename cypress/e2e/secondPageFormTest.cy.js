/// <reference types="cypress"/>

describe(("Second page form"), () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        cy.visit('http://localhost:3000/step2')
    })

    it("money buttons", () => {
        cy.get('input[value="No"]').click()
        /* if min > max */
        cy.get("#minMoney").clear().type("500")
        cy.get("#maxMoney").clear().type("5")
        cy.contains("Next step").click()
        /* if contains not valid characters */
        cy.get("#minMoney").clear().type("50!0")
        cy.contains("Next step").click()
        cy.get("#minMoney").clear().type("5")
        cy.get("#maxMoney").clear().type("54.")
        cy.get("#maxMoney").clear().type("5000")
        cy.get("#minMoney").clear().type("50e0")
        cy.contains("Next step").click()
        cy.get("#minMoney").clear().type("5,")
        cy.get("#maxMoney").clear().type("54")
        /* ok */
        cy.get("#minMoney").clear().type("5")
        cy.get("#maxMoney").clear().type("54")
        cy.contains("Next step").click()
        cy.contains("Finish")
    })

    it("accredited radio test", () => {
        /* not selected */
        cy.contains("Next step").click()
        /* selected No */
        cy.get('input[value="No"]').click()
        cy.contains("Next step").click()
        cy.contains("Finish")
        /* selected Yes */
        cy.visit('http://localhost:3000/step2')
        cy.get('input[value="Yes"]').click()
        cy.contains("Next step").click()
        cy.contains("Finish")
    })
})
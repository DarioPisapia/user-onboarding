/// <reference types="cypress"/>

describe(("buttons test"), () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("buttons exists", () =>{
        cy.contains("Back to the homepage")
        cy.contains("Skip for now")
        cy.contains("Next step")
    })

    it("back button test", () =>{
        cy.contains("Back to the homepage").click()
        cy.contains("Back to the homepage")
        cy.contains("Skip for now").click()
        cy.contains("Back to the previous step").click()
        cy.contains("Back to the homepage")
    })

    it("Skip button limit", ()=>{
        cy.contains("Skip for now").click()
        cy.contains("Skip for now").click()
        cy.contains("Skip for now").should("have.class", "disabled")
    })

    it("Next button", () => {
        cy.get("#name").type("dario")
        cy.get("#number").type("1234567")
        cy.get("#email").type("test@test.com")
        cy.contains("Next step").click()
        cy.get("#minMoney")
        cy.get('input[value="No"]').click()
        cy.contains("Next step").click()
        cy.contains("Finish")
    })
})
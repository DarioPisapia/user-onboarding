/// <reference types="cypress"/>

describe(("Third page"), () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it("checkbox empty", () => {
        cy.get("#name").type("cdre")
        cy.get("#number").type("1234567")
        cy.get("#email").type("test@test.com")
        cy.contains("Next step").click()

        cy.get('input[value="Yes"]').click()
        cy.contains("Next step").click()

        cy.contains("Finish").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please select your investment preferences')
        })

        
    })

    it("other", () => {
        cy.get("#name").type("cdre")
        cy.get("#number").type("1234567")
        cy.get("#email").type("test@test.com")
        cy.contains("Next step").click()

        cy.get('input[value="Yes"]').click()
        cy.contains("Next step").click()

        cy.get('#box7').click()
        cy.contains("Finish").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Name: cdre\n Phone: +39 1234567\n Email: test@test.com\n Country: Italy\n Investment between 10000$ and 50000$\n Accredited: Yes\n Interests: Other ' )
        })
    })

    it("adding/removing/adding", () => {
        cy.get("#name").type("cdre")
        cy.get("#number").type("1234567")
        cy.get("#email").type("test@test.com")
        cy.contains("Next step").click()

        cy.get('input[value="Yes"]').click()
        cy.contains("Next step").click()

        cy.get('#box7').click()
        cy.get('#box3').click()
        cy.get('#box2').click()
        cy.get('#box7').click()
        cy.get('#box4').click()
        cy.get('#box2').click()
        cy.get('#box3').click()
        cy.get('#box7').click()

        cy.contains("Finish").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Name: cdre\n Phone: +39 1234567\n Email: test@test.com\n Country: Italy\n Investment between 10000$ and 50000$\n Accredited: Yes\n Interests: Commercial industrial, Other ' )
        })
    })

})
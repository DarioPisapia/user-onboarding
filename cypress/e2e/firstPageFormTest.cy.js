/// <reference types="cypress"/>

describe(("first page form test"), () => {


    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    /* this test works checking if the next button switch to next page.
    if the input is wrong you remain in the same page and can click again.
    So if i can type next text on same input means that the validation function worked properly */
    it("name test", () => {
        /* if empty remain in the same page*/
        cy.get("#number").type("1234567")
        cy.get("#email").type("test@test.com")
        cy.contains("Next step").click()
        /* if length < 3 */
        cy.get("#name").clear().type("cd")
        cy.contains("Next step").click()
       /* if contains number */
        cy.get("#name").clear().type("cdr4")
        cy.contains("Next step").click()
        /* if ok go to next */
        cy.get("#name").clear().type("cdre")
        cy.get("#name").should("have.value", "cdre")
        cy.contains("Next step").click()
        cy.get("#minMoney")
    })

    it('Phone number test', () => {

        /* if empty */
        cy.get("#name").type("cdre")
        cy.get("#email").type("test@test.com")
        cy.contains("Next step").click()
        /* if too short */
        cy.get("#number").type("12345")
        cy.contains("Next step").click()
        /* if contains letters */
        cy.get("#number").clear().type("1234567e")
        cy.contains("Next step").click()
        /* if contains symbols */
        cy.get("#number").clear().type("1234567!")
        cy.contains("Next step").click()
        /* if ok */
        cy.get("#number").clear().type("1234567")
        cy.get("#number").should("have.value", "1234567")
        cy.contains("Next step").click()
        
        cy.get("#minMoney")
    })

    it('Email test', () => {
        /* if empty */
        cy.get("#name").type("cdre")
        cy.get("#number").clear().type("1234567")
        cy.contains("Next step").click()
        /* problems with @ */
        cy.get("#email").type("testtest.com")
        cy.contains("Next step").click()
        cy.get("#email").clear().type("testt@@est.com")
        cy.contains("Next step").click()
        cy.get("#email").clear().type("te@stt@est.com")
        cy.contains("Next step").click()
        /* if not has "." after @*/
        cy.get("#email").clear().type("test@testcom")
        cy.contains("Next step").click()
        /* other possible errors */
        cy.get("#email").clear().type("te@test.com")
        cy.contains("Next step").click()
        cy.get("#email").clear().type("testt@est.co3m")
        cy.contains("Next step").click()
        cy.get("#email").clear().type("te!stt@est.com")
        cy.contains("Next step").click()
        /* ok */
        cy.get("#email").clear().type("test@test.com")
        cy.get("#email").should("have.value", "test@test.com")
        cy.contains("Next step").click()
        cy.get("#minMoney")
    })
})
/// <reference types="cypress" />

describe("Homepage", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("should display hello world", () => {
        cy.contains("Hello World").should("be.visible")
    })

    it("spining logo is visible", () =>{
        cy.get('header').find('img').should('have.attr', 'src').should('include','logo')
    })
    /*
    it("should display habit card when new habit is added", () => {
        cy.contains("button", "Add").click()
        cy.get("input[placeholder='Habit']").type("Drink a cup of water")
        cy.contains("Save Changes").click()
        cy
        .contains("Drink a cup of water")
        .should('be.visible')
        .and('have.class', "HabitCard__habit-container")
    })

    it("should toggle icon when habit card is clicked", () => {
        cy.contains("button", "Add").click()
        cy.get("input[placeholder='Habit']").type("Drink a cup of water")
        cy.contains("Save Changes").click()
        cy.contains("Drink a cup of water").click()
        cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")
        cy.contains("Drink a cup of water").click()
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
    })
    */
})
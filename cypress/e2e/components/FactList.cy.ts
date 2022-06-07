context("FactListSection", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    it("Check if search button add new facts", () => {
      cy.get(".cy_search input").type('bba')
      cy.get(".cy_search button").click()
      cy.get(".cy_card").should('have.length', 11)
    })

    it("Check if the delete button is removing the card", () => {
        cy.get(".cy_card path").click({force: true})
        cy.get(".cy_card").should("not.visible")
    })
})

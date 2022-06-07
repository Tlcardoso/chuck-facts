context("FactsPhoto", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
      cy.intercept('GET', '**/random').as('onClick')

    })
  
    it("Check if have a Fact", () => {
      cy.get(".cy_fact p").should("be.visible")
      })

    it("Check if load another fact when click on button", () => {
        cy.get('.cy_fact p').invoke('text').then(($value1) => {
            cy.get(".cy_fact path").click({force: true})
            cy.wait('@onClick')
            cy.get('.cy_fact p').invoke('text').then(($value2) => {
                expect($value1).to.not.equal($value2)
            })
        })
     })
})

context("Home", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
      cy.intercept('GET', '**/random').as('onClick')
      cy.intercept('GET', '**').as('getFactCategory')
    })
  
    it("Check if have a Fact", () => {
        cy.get(".cy_fact p").should("be.visible")
        })
  
    it("Check if load and record another fact when click on button", () => {
        cy.get('.cy_fact p').invoke('text').then(($value1) => {
            cy.get(".cy_fact path").click({force: true})
            cy.wait('@onClick')
            cy.get('.cy_card').should('have.length', 2)
            cy.get('.cy_fact p').invoke('text').then(($value2) => {
                 expect($value1).to.not.equal($value2)
            })
        })
    })

    it("Should load and record another fact when click on category button", () => {
        cy.get(".cy_categories button").each((button) => {
          cy.wrap(button).click()
          cy.wait('@getFactCategory')
        })
    
        cy.get('.cy_card').should('have.length', 17)
    })
})
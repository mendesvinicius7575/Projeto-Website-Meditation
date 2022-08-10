describe('empty spec', () => {
  beforeEach('testweb', () => {
    cy.visit('/index.html')
  })
    it.only('passes', () => {
      cy.get('#titulo').should('be.visible').and('have.text', 'Daily Meditation')
      cy.get('#subtitulo').should('be.visible').and('have.text', 'The Benefits of Meditation.')
      cy.get('.yo').should('be.visible')
    })
 
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Login-Logout', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://dev.morclinic.id/');
    cy.get('#username').type('Ro01');
    cy.get('#password').type('12345678');
    cy.get('.btn-dark').click();
    cy.get('.nav-link > .avatar > img').click();
    cy.get('[href="https://dev.morclinic.id/logout"]').click();
    /* ==== End Cypress Studio ==== */
  });
})
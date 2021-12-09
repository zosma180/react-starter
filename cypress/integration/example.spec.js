/// <reference types="cypress" />

describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Visits the home page', () => {
    cy.get('h1').contains('Hero Page');
  });
});

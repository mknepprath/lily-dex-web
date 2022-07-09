describe("Home", () => {
  before(() => {
    cy.visit("/");
  });

  it("should render Home page", () => {
    cy.get('[data-cy="home-page"]').should("be.visible");
  });
});

describe("Home", () => {
  before(() => {
    cy.visit("/");
  });

  it("renders the page title", () => {
    cy.get('[data-cy="home-page"]').should("be.visible").and("contain", "lily dex");
  });

  it("shows the App Store badge link", () => {
    cy.get('a[href*="apps.apple.com"]').should("be.visible");
  });

  it("shows all six feature cards", () => {
    cy.contains("Current GO Dex").should("be.visible");
    cy.contains("Raid Bosses").should("be.visible");
    cy.contains("PvP Battle Rankings").should("be.visible");
    cy.contains("Shiny Tracking").should("be.visible");
    cy.contains("Detailed Stats").should("be.visible");
    cy.contains("Widgets").should("be.visible");
  });

  it("API Docs link navigates to docs page", () => {
    cy.contains("API Documentation").click();
    cy.url().should("include", "/docs");
    cy.contains("h1", "API Documentation").should("be.visible");
  });
});

describe("Docs", () => {
  before(() => {
    cy.visit("/docs");
  });

  it("renders the API docs page", () => {
    cy.contains("h1", "API Documentation").should("be.visible");
  });

  it("shows all endpoint sections", () => {
    cy.contains("Pokedex").should("be.visible");
    cy.contains("PvP Rankings").should("be.visible");
    cy.contains("Events").should("be.visible");
    cy.contains("Meta").should("be.visible");
  });

  it("shows the base URL", () => {
    cy.contains("mknepprath.github.io/lily-dex-api").should("be.visible");
  });

  it("home link returns to index", () => {
    cy.get('a[href="/"]').first().click();
    cy.url().should("not.include", "/docs");
    cy.get('[data-cy="home-page"]').should("be.visible");
  });
});

describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the page title", () => {
    cy.get('[data-cy="home-page"]').should("be.visible").and("contain", "lily dex");
  });

  it("shows the App Store badge link", () => {
    cy.get('a[href*="apps.apple.com"]').should("exist");
  });

  it("shows all six feature cards", () => {
    cy.contains("Current GO Dex").should("exist");
    cy.contains("Raid Bosses").should("exist");
    cy.contains("PvP Battle Rankings").should("exist");
    cy.contains("Shiny Tracking").should("exist");
    cy.contains("Detailed Stats").should("exist");
    cy.contains("Widgets").should("exist");
  });

  it("API Docs link navigates to docs page", () => {
    cy.contains("API Documentation").scrollIntoView().click();
    cy.url().should("include", "/docs");
    cy.contains("h1", "API Documentation").should("be.visible");
  });
});

describe("Docs", () => {
  beforeEach(() => {
    cy.visit("/docs");
  });

  it("renders the API docs page", () => {
    cy.contains("h1", "API Documentation").should("be.visible");
  });

  it("shows all endpoint sections", () => {
    cy.contains("Pokedex").should("exist");
    cy.contains("PvP Rankings").should("exist");
    cy.contains("Events").should("exist");
    cy.contains("Meta").should("exist");
  });

  it("shows the base URL", () => {
    cy.contains("mknepprath.github.io/lily-dex-api").should("exist");
  });

  it("home link returns to index", () => {
    cy.get('a[href="/"]').first().click();
    cy.url().should("not.include", "/docs");
    cy.get('[data-cy="home-page"]').should("be.visible");
  });
});

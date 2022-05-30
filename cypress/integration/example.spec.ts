// https://docs.cypress.io/api/introduction/api.html

describe("My only E2E test", () => {
  it("visits the home page and about page", () => {
    //home page
    cy.visit("/");
    cy.location("pathname").should("eq", "/");
    // cy.get("[data-testid=greeting]").should("contain.text", "You did it");
    cy.percySnapshot("Home Page");

    // about page
    cy.contains("About").click();
    cy.location("pathname").should("eq", "/about");
    // cy.get("[data-testid=about-content]").should("contain.text","This is an about page");
    cy.percySnapshot("About Page");
  });
});

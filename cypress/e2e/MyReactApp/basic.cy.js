describe("My React App Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("App start Test", () => {
    //
  });

  it("Login Test", () => {
    cy.get('[href="/login"]').click();

    cy.get('[data-cy="login-btn"]').click();
  });
});

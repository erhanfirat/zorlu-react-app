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

  it("Login Email format error", () => {
    cy.get('[href="/login"]').click();

    cy.get('[data-cy="login-email"]').type("ali@com");

    cy.contains("Lütfen geçerli bir email adresi giriniz.").should(
      "be.visible"
    );
  });

  it("Login Email submit test", () => {
    cy.get('[href="/login"]').click();

    cy.get('[data-cy="login-email"]').type("customer@commerce.com");
    cy.get('[data-cy="login-password"]').type("123456");
    cy.get('[data-cy="login-age"]').type("24");
    cy.get('[data-cy="login-remember"]').check();

    cy.get('[data-cy="login-btn"]').click();

    cy.contains("Cust Omer");
  });
});

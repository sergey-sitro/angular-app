describe("JSON placehloder", () => {
  it("should return post by id", () => {
    cy.api({
      url: `${Cypress.env("API_URL")}/posts/1`,
    }).as("getPosts");

    cy.get("@getPosts").its("status").should("eq", 200);
    cy.get("@getPosts").its("body.userId").should("eq", 1);
    cy.get("@getPosts").its("body.id").should("eq", 1);
    cy.get("@getPosts")
      .its("body.title")
      .should(
        "eq",
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
    cy.get("@getPosts")
      .its("body.body")
      .should(
        "eq",
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      );
  });

  it("should return 404 if post is not found", () => {
    cy.api({
      url: `${Cypress.env("API_URL")}/posts/abc`,
      failOnStatusCode: false,
    }).as("getPosts");

    cy.get("@getPosts").its("status").should("eq", 404);
  });

  it("should return list of all posts", () => {
    cy.api({
      url: `${Cypress.env("API_URL")}/posts`,
    }).as("getTodo");

    cy.get("@getTodo").its("status").should("eq", 200);
    cy.get("@getTodo").its("body").should("have.length", 100);
  });

  it("should create post", () => {
    const requestBody = {
      title: "test post",
      body: "test body",
      userId: 1,
    };

    cy.api({
      method: "POST",
      url: `${Cypress.env("API_URL")}/posts`,
      body: requestBody,
    }).as("createPost");

    cy.get("@createPost").its("status").should("eq", 201);
    cy.get("@createPost").its("body").should("contain", requestBody);
    cy.get("@createPost").its("body.id").should("eq", 101);
  });

  it("should update post", () => {
    const requestBody = {
      title: "test post",
      body: "test body",
      userId: 1,
    };

    cy.api({
      method: "PATCH",
      url: `${Cypress.env("API_URL")}/posts/1`,
      body: requestBody,
    }).as("updatePost");

    cy.get("@updatePost").its("status").should("eq", 200);
    cy.get("@updatePost").its("body").should("contain", requestBody);
    cy.get("@updatePost").its("body.id").should("eq", 1);
  });

  it("should delete post", () => {
    cy.api({
      method: "DELETE",
      url: `${Cypress.env("API_URL")}/posts/1`,
    }).as("deletePost");

    cy.get("@deletePost").its("status").should("eq", 200);
    cy.get("@deletePost").its("body").should("be.empty");
  });
});

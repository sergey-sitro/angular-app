describe("Dialog tests", () => {
    it("verify dialog flow", () => {
        cy.visit("/pages/modal-overlays/dialog");

        const dialogContainerSelector = 'nb-dialog-container';

        // Click 'Enter Name' button
        cy.get('button').contains('Enter Name').click();

        // Verify dialog content
        cy.get(`${dialogContainerSelector}`).should('be.visible');
        cy.get(`${dialogContainerSelector} nb-card`).contains('Enter your name').should('be.visible');
        cy.get(`${dialogContainerSelector} input`).should('have.attr', 'placeholder', 'Name').and('be.enabled').and('be.visible');
        cy.get(`${dialogContainerSelector} button`).contains('Cancel').should('be.enabled').and('be.visible');
        cy.get(`${dialogContainerSelector} button`).contains('Submit').should('be.enabled').and('be.visible');

        // Click 'Cancel' button
        cy.get(`${dialogContainerSelector} button`).contains('Cancel').click();
        cy.get(`${dialogContainerSelector}`).should('not.exist');

        // Click 'Enter Name' button
        cy.get('button').contains('Enter Name').click();

        // Verify adding a Name
        const testName = 'test';
        cy.get(`${dialogContainerSelector} input`).type(testName);
        cy.get(`${dialogContainerSelector} button`).contains('Submit').click();
        cy.get('nb-card-body li').first().contains(testName).should('be.visible');
    })
})
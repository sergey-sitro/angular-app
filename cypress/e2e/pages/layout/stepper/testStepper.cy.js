describe("Stepper tests", () => {
    it("verify steps text content", () => {
        cy.visit("/pages/layout/stepper");

        const containerSelector = 'nb-stepper[orientation="horizontal"]';

        // Verify Step 1
        cy.get(`${containerSelector} h3`).should("have.text", "Step content #1");
        cy.get(`${containerSelector} button`).contains("prev").should("be.disabled");
        cy.get(`${containerSelector} button`).contains("next").should("be.enabled");

        cy.get(`${containerSelector} button`).contains("next").click();

        // Verify Step 2
        cy.get(`${containerSelector} h3`).should("have.text", "Step content #2");
        cy.get(`${containerSelector} button`).contains("prev").should("be.enabled");
        cy.get(`${containerSelector} button`).contains("next").should("be.enabled");

        cy.get(`${containerSelector} button`).contains("next").click();

        // Varify Step 3
        cy.get(`${containerSelector} h3`).should("have.text", "Step content #3");
        cy.get(`${containerSelector} button`).contains("prev").should("be.enabled");
        cy.get(`${containerSelector} button`).contains("next").should("be.enabled");

        cy.get(`${containerSelector} button`).contains("next").click();

        // Verify Step 4
        cy.get(`${containerSelector} h3`).should("have.text", "Step content #4");
        cy.get(`${containerSelector} button`).contains("prev").should("be.enabled");
        cy.get(`${containerSelector} button`).contains("next").should("be.disabled");
    })
})
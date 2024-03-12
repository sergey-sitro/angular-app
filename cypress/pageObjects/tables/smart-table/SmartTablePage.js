export default class SmartTablePage {
    _url = '/pages/tables/smart-table';
    _plusButton = '.nb-plus';
    _addUserSection = 'table .ng-star-inserted tr:nth-of-type(3)';
    _confirmButton = '.nb-checkmark';
    _firstUser = 'table tbody tr:first-of-type';
    _firstEditButton = 'a:first-of-type .nb-edit';

    navigate() {
        cy.visit(this._url);
    }

    clickPlusButton() {
        cy.get(this._plusButton).should('be.visible');
        cy.get(this._plusButton).click();
        cy.get(this._addUserSection).should('be.visible');
    }

    clickConfirmButton() {
        cy.get(this._confirmButton).should('be.visible');
        cy.get(this._confirmButton).click();
    }

    clickFirstEditButton() {
        cy.get(this._firstEditButton).first().should('be.visible');
        cy.get(this._firstEditButton).first().click();
    }

    fillAddUserSection({ id, firstName, lastName, userName, email, age }) {
        this.idInput.type(id);
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.userNameInput.type(userName);
        this.emailInput.type(email);
        this.ageInput.type(age);
    }
    
    get idInput() {
        return cy.get(this._addUserSection).find('input[placeholder="ID"]');
    }
    
    get firstNameInput() {
        return cy.get(this._addUserSection).find('input[placeholder="First Name"]');
    }
    
    get lastNameInput() {
        return cy.get(this._addUserSection).find('input[placeholder="Last Name"]');
    }
    
    get userNameInput() {
        return cy.get(this._addUserSection).find('input[placeholder="Username"]');
    }
    
    get emailInput() {
        return cy.get(this._addUserSection).find('input[placeholder="E-mail"]');
    }
    
    get ageInput() {
        return cy.get(this._addUserSection).find('input[placeholder="Age"]');
    }


    fillEditUserSection({ id, firstName, lastName, userName, email, age }) {
        this.editIdInput.clear().type(id);
        this.editFirstNameInput.clear().type(firstName);
        this.editLastNameInput.clear().type(lastName);
        this.editUserNameInput.clear().type(userName);
        this.editEmailInput.clear().type(email);
        this.editAgeInput.clear().type(age);
    }
    
    get editIdInput() {
        return cy.get(this._firstUser).find('input[placeholder="ID"]');
    }
    
    get editFirstNameInput() {
        return cy.get(this._firstUser).find('input[placeholder="First Name"]');
    }
    
    get editLastNameInput() {
        return cy.get(this._firstUser).find('input[placeholder="Last Name"]');
    }
    
    get editUserNameInput() {
        return cy.get(this._firstUser).find('input[placeholder="Username"]');
    }
    
    get editEmailInput() {
        return cy.get(this._firstUser).find('input[placeholder="E-mail"]');
    }
    
    get editAgeInput() {
        return cy.get(this._firstUser).find('input[placeholder="Age"]');
    }
}

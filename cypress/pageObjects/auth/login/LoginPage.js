export default class LoginPage {
    _url = '/auth/login';
    _loginInput = 'input[id="input-email"]';
    _passwordInput = 'input[id="input-password"]';
    _rememberMeCheckbox = 'nb-checkbox[name="rememberMe"]';
    _logInSection = 'nb-auth-block';

    navigate() {
        cy.visit(this._url);
    }

    fillLoginInput(login) {
        this.loginInput.type(login);
    }

    fillPasswordInput(pwd) {
        this.passwordInput.type(pwd);
    }

    clickRememberMeCheckbox() {
        cy.get(this._rememberMeCheckbox).should('be.visible');
        cy.get(this._rememberMeCheckbox).click();
    }

    clickLogInBtn() {
        cy.get(this._logInSection).find('button').click();
    }

    get loginInput() {
        return cy.get(this._logInSection).find(this._loginInput);
    }
    
    get passwordInput() {
        return cy.get(this._logInSection).find(this._passwordInput);
    }
}

import LoginPage from "../../pageObjects/auth/login/LoginPage";

describe('Login tests', () => {
    
    const loginPage = new LoginPage();

    beforeEach(()=>{
        loginPage.navigate();
    })
    
    it('verify successful login', () => {
        
        loginPage.fillLoginInput('test@test.test');
        loginPage.fillPasswordInput('password');
        loginPage.clickRememberMeCheckbox();
        loginPage.clickLogInBtn();
        cy.url().should('include', '/pages/dashboard');
    })
})

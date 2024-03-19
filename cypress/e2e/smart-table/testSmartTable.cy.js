import SmartTablePage from '../../pageObjects/tables/smart-table/SmartTablePage';


describe('Smart table tests', () => {
    
    const smartTablePage = new SmartTablePage();

    beforeEach(()=>{
        smartTablePage.navigate();
    })
    
    it('verify adding a user', () => {
        
        const userData = {
            id: '230823',
            firstName: 'Serhii',
            lastName: 'Matkobozhyk',
            userName: '@sitro',
            email: 'sitro@gmail.com',
            age: '29'
        };

        smartTablePage.clickPlusButton();

        smartTablePage.fillAddUserSection(userData);

        smartTablePage.clickConfirmButton();

        // Check ID
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(2)').invoke('text').then(userId => {
            expect(userId).to.deep.equal(userData.id);
        });
        
        // Check First Name
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(3)').invoke('text').then(firstName => {
            expect(firstName).to.deep.equal(userData.firstName);
        });
        
        // Check Last Name
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(4)').invoke('text').then(lastName => {
            expect(lastName).to.deep.equal(userData.lastName);
        });
        
        // Check Username
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(5)').invoke('text').then(userName => {
            expect(userName).to.deep.equal(userData.userName);
        });
        
        // Check Email
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(6)').invoke('text').then(email => {
            expect(email).to.deep.equal(userData.email);
        });
        
        // Check Age
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(7)').invoke('text').then(age => {
            expect(age).to.deep.equal(userData.age);
        });

        smartTablePage.clickFirstEditButton();

        const newUserData = {
            id: 'new230823',
            firstName: 'newSerhii',
            lastName: 'newMatkobozhyk',
            userName: '@newSitro',
            email: 'newSitro@gmail.com',
            age: 'new29'
        };

        smartTablePage.fillEditUserSection(newUserData);
        
        smartTablePage.clickConfirmButton();

        // Check newID
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(2)').invoke('text').then(userId => {
            expect(userId).to.deep.equal(newUserData.id);
        });
        
        // Check newFirst Name
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(3)').invoke('text').then(firstName => {
            expect(firstName).to.deep.equal(newUserData.firstName);
        });
        
        // Check newLast Name
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(4)').invoke('text').then(lastName => {
            expect(lastName).to.deep.equal(newUserData.lastName);
        });
        
        // Check newUsername
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(5)').invoke('text').then(userName => {
            expect(userName).to.deep.equal(newUserData.userName);
        });
        
        // Check newEmail
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(6)').invoke('text').then(email => {
            expect(email).to.deep.equal(newUserData.email);
        });
        
        // Check Age
        cy.get('table tbody tr:nth-of-type(1) td:nth-of-type(7)').invoke('text').then(age => {
            expect(age).to.deep.equal(newUserData.age);
        });
    })
})

import GenericfunctionHelper from '../../support/helpers/genericfunction'


export default  class AddEmployeePage{
    elements = {
     
        firstName: () => cy.get('[placeholder = "First Name"]'),
        middleName: () => cy.get('[placeholder = "Middle Name"]'),
        lastName: () => cy.get('[placeholder = "Last Name"]'),
        employeeId: () => cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'),
        loginswitch:()=> cy.get('.oxd-switch-input'),
        userName: () => cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        password: () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmPassword: () => cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        saveBtn: () => cy.get('button[type="submit"]'),
    }
 
     addWithLogin = (firstName: string, middleName: string, lastName: string, userName: string, password: string) => {
        this.elements.firstName().type(firstName);
        this.elements.middleName().type(middleName);
        this.elements.lastName().type(lastName);
        this.elements.loginswitch().click();
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        this.elements.confirmPassword().type(password);
        this.elements.saveBtn().click();
    }


    addEmployeeViaAPI = (data:any) => {  
        return cy.api({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
            body:{
                
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                empPicture: null,
                employeeId: `${GenericfunctionHelper.genericRandomString(1000)}`
          
            }
        })
    }

    addEmployeeWithLogin = (data:any) => {  
        return this.addEmployeeViaAPI(data).then((res) => {
              cy.api({
                method: 'POST',
                url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
                body:{
                    username: data.username,
                    password: data.password,
                    status: true,
                    userRoleId: 2,
                    empNumber: res.body.data.empNumber
                }
            }).its('body');
        })
    }

   
}
 
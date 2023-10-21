import loginPage  from "../../support/pageObject/loginpage";
import addemployee from "../../support/pageObject/addempobj";
 
const loginObj:loginPage=new loginPage();
const empobj:addemployee=new addemployee();
describe('Employee functionality', () => {
     
    beforeEach(()=>{
     // cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('Login Page')
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      loginObj.login("Admin","admin123")
      cy.fixture('employeeinfo').as('EmpInfo');
    })

    it('Add New Employee', () => {
       cy.get('.oxd-sidepanel-body').contains('PIM').click();
       //cy.get('[placeholder="Password"]').('admin123')
      //empobj.addemployeef("Aya","H","Abu mtawea","aya889","asd123456789","asd123456789")
       
      cy.get('@EmpInfo').then((info:any)=>{
        empobj.addemployeef(info.FirstName,info.MiddleName,info.LastName,info.UserName,info.Password, info.ConfirmPassword)
    
     empobj.elements.employeeId().eq(4)
     //  const t=$el.val();
     //  info.employeeId = t

      cy.request({
          method: "POST",
          url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
          body: {
              lastName: info.FirstName,
              firstName: info.LastName,
              middleName: info.MiddleName,
              employeeId: info.employeeId,
          },
      }).then((response) => {
        expect(response).property('status').to.equal(200)
        console.log(response.body.data.employeeId)
       // this.addUser(response.body.data.empNumber, username, password)
    })

  });
    })
    

 
});
 




 

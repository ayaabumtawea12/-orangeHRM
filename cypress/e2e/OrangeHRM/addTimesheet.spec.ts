import addEmployeePage from "../../support/pageObject/addEmployeethenlogin";
import loginpage from "../../support/pageObject/loginpage";
import Timesheets from "../../support/pageObject/addTimesheet";
import assertionTimeSheet from "../../support/pageObject/assertion/assertionTimesheet"

const myAddEmployeePage: addEmployeePage = new addEmployeePage();
const myLogin: loginpage = new loginpage();
const timesheet:Timesheets = new Timesheets();
const assertion:assertionTimeSheet=new assertionTimeSheet();
describe('add new Employee with login', () => {
    beforeEach(() => {
        cy.visit(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
          );
         // myLogin.login("admin", "admin123");
        cy.fixture("addEmpwithlogin").as("addemp");
    })


    it('add new Employee with login via API', () => {
        cy.get('@addemp').then((data: any) => {
           // myAddEmployeePage.addEmployeeWithLogin(data).then((res: any) => {
               // myLogin.logout();
                cy.visit("https://opensource-demo.orangehrmlive.com/web/auth/login");
                myLogin.login("admin", "admin123");
               // myLogin.login(data.username, data.password);
               // cy.get('.oxd-main-menu').contains('Time').click();
               cy.visit("https://opensource-demo.orangehrmlive.com/web/time/viewMyTimesheet")
               
               timesheet.getIDforTimeSheet().then((Id) => {
                timesheet.editTimesheet(Id,data);
                timesheet.submitTimesheet(Id);
      });

      // myLogin.logout();
    //  myLogin.login("admin", "admin123");
    // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet");
   // assertion.assertionTimeSheet(" aya abumtawea");


           // });
        })
    })
 
})

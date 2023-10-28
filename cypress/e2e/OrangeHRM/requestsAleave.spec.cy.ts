import addEmployeePage from "../../support/pageObject/addEmployeethenlogin";
import loginpage from "../../support/pageObject/loginpage";
import addEntitlement from "../../support/pageObject/addEntitlement";
import requestLeave from "../../support/pageObject/RequestLeave";
import LeaveRequest from "../../support/pageObject/ApproveLeaveReaquest";
//import checkstatues from "../../support/pageObject/checkLeavestatues"

const myAddEmployeePage: addEmployeePage = new addEmployeePage();
const myLogin: loginpage = new loginpage();
const addentitlement :addEntitlement = new addEntitlement();
const request:requestLeave = new requestLeave();
const approvereaquest:LeaveRequest =new LeaveRequest();
//const leavestatues:checkstatues = new checkstatues();

describe('add new Employee with login', () => {
    beforeEach(() => {
        cy.visit(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
          );
          myLogin.login("admin", "admin123");
        cy.fixture("addEmpwithlogin").as("addemp");
   


    cy.get('@addemp').then((data: any) => {
        myAddEmployeePage.addEmployeeWithLogin(data).then((item: any) => {
           
            
              addentitlement.addEntitlement(data);//add entitlement
 
        });
    })
        myLogin.logout();

    })
it('requests a leave day in the future And The admin approves the leave request',() => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('@addemp').then((data: any) => {
       myLogin.login(data.username, data.password);
       
        request.requestLeaveViaAPI(data.leaverequest).then((res: any) => { //employee requests a leave
            data.Id = res.data.id;
            cy.writeFile('cypress/fixtures/addEmpwithlogin.json', JSON.stringify(data));
 
        }).then(() => {
            myLogin.logout();
            myLogin.login("Admin", "admin123");
            cy.wait(3000);
            approvereaquest.approveLeaveRequest(data.Id);//approves the leave request
        })
        myLogin.logout();
        myLogin.login(data.username, data.password);
        cy.wait(2000);
        
        cy.get('.oxd-main-menu').contains('Leave').click();
  
    })
    
})




  









})
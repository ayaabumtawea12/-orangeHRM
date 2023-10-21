import addEmployeePage from "../../support/pageObject/addEmployeethenlogin";
import loginpage from "../../support/pageObject/loginpage";

const myAddEmployeePage: addEmployeePage = new addEmployeePage();
const myLogin: loginpage = new loginpage();
describe('add new Employee with login', () => {
    beforeEach(() => {
        cy.visit(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
          );
          myLogin.login("admin", "admin123");
        cy.fixture("addEmpwithlogin").as("addemp");
    })


    it('add new Employee with login via API', () => {
        cy.get('@addemp').then((data: any) => {
            myAddEmployeePage.addEmployeeWithLogin(data).then((res: any) => {
                data.id = res.data.id;
                data.username = res.data.userName;
                 myLogin.logout();
                cy.visit("https://opensource-demo.orangehrmlive.com/web/auth/login");
                myLogin.login(data.username, data.password);
            });
            
        })
        
    });
})
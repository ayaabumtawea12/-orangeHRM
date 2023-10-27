import loginpage from "../../support/pageObject/loginpage";
import addFileToVacancy from '../../support/pageObject/addfileTovacancy';

 
const myLogin: loginpage = new loginpage();
const addfile:addFileToVacancy=new addFileToVacancy();
describe('add file to vacancy  ', () => {
    beforeEach(() => {
        cy.visit(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
          );
          myLogin.login("admin", "admin123");
        cy.fixture('vacancyinfo').as('vacancy');
    })


    it('uploadFileToVacancy', () => {
       
         //cy.get('@vacancy').then((vacancyData:any) => {
            addfile.uploadFileToVacancy()

         // })
    })















})
import loginpage from "../../support/pageObject/loginpage";
import addCandidate from "../../support/pageObject/addcandidateuI";

const loginObj: loginpage = new loginpage();
const importfile: addCandidate = new addCandidate();

describe("verify Recruitment", () => {
  beforeEach( ()=> {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginObj.login("admin", "admin123");
  });

  it('Import file from  Candidate',() => {
    importfile.addCandidate();

  })


});


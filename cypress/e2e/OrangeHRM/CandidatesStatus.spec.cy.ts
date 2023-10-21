import addCandidate from "../../support/helpers/CandidateHelper";
import addCandidatePage from "../../support/pageObject/addcandidate";
import scheduleInterviewPage from "../../support/pageObject/scedualeinterview"
import loginpage from "../../support/pageObject/loginpage";

const addnewCandidate: addCandidate = new addCandidate();
 const ApplicationStage: addCandidatePage = new addCandidatePage();
const changeCandidateVacancyStatus: scheduleInterviewPage = new scheduleInterviewPage();
const loginObj : loginpage=new loginpage();

describe('schedule candidate', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
        cy.fixture('login').as('Log');
        cy.get('@Log').then((infoData:any)=>{
   
            loginObj.login(infoData[3].userName,infoData[3].password);

        
        cy.fixture('candidateInfo').as('candidate');
    })


    it('test', () => {
        
         cy.get('@candidate').then(( result) => {
             addnewCandidate.addCandidateViaAPI(result.data).then((response) => {
                let id = response.data.id;
                
                

                cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${id}`);
                ApplicationStage.elements.btnchangestatues().click({force: true} );
                 changeCandidateVacancyStatus.elements.interviewTitle().type('proplemsolving');
                changeCandidateVacancyStatus.elements.interviewer().type('Odis  Adalwin');
                 changeCandidateVacancyStatus.elements.date().type('2023-10-15');
                changeCandidateVacancyStatus.elements.savebtn().click();
                ApplicationStage.elements.Applicationstatus().should('have.text', 'Status: Interview Scheduled')
            });
        })
        
        
    })
})
})
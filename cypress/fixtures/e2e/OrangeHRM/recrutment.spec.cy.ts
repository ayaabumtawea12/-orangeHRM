import recruitmentPage from "../../support/ApiRecruitment/recruitmentPage";
import loginpage from "../../support/pageObject/loginpage";
const loginObj : loginpage=new loginpage;
const recruitment:recruitmentPage=new recruitmentPage();



describe('Recruitment Functinality',()=>{
   
   
        beforeEach(function(){
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'),
            cy.fixture('login').as('Log');
            cy.get('@Log').then((infoData:any)=>{
       
                loginObj.login(infoData[3].userName,infoData[3].password);
            
            })

          
           recruitment.gotoRecruitment()


        })
      
    
    it('count candicate rows',() => {
        recruitment.getCandidateCountApi()
    })
})
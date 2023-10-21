import candidateInit from "../../support/init/candididite"

export const URLs = {
    candidates: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates'
}

export default class addCandidate{

       addCandidateViaAPI = (data:any) => {
     cy.addNewCandidate(URLs.candidates, candidateInit.initCandidate(data))
    }
}
 

 
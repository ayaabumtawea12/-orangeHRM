import { ICreatrEmployeePay } from "../../payload/userApipayload";
import {ICreatrEmployeeRes} from "../../response/userApiresponse";

 declare global{
    namespace Cypress{
        interface  Chainable<Subject>{
            addnewuser:(requestURL:string,employeePayload:ICreatrEmployeePay)=> Chainable<ICreatrEmployeePay>
                 
            }

        }
    }
 
    Cypress.Commands.add('addnewuser',(requestURL:string,userpayload:ICreatrEmployeePay) =>{


    return cy.api({
        method:'POST',
        url:requestURL,
        body: userpayload,
        headers:{
            'Content-Type': 'application/json'
        }
    }).its('body')
    
})


 
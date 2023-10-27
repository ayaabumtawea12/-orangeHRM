export default class requestLeave{

    requestLeaveViaAPI = (data: any) => {
        return cy.api({
            method: 'POST',
            url:"https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/leave-requests",
            body:data
        }).its('body');
    }
    
}



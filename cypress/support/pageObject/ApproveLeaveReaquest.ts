
export default class LeaveRequest{

    approveLeaveRequest = (id: number) => {
        return cy.api({
            method: 'PUT',
            url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/employees/leave-requests/${id}`,
            body:{
                action: "APPROVE"
            }
        }).its('body')
    }
    
}

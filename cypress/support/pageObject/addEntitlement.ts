export default class addEntitlement{
    
    addEntitlement= (data: any) => {
        cy.api({
            url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/leave-entitlements",
            method: 'POST',
            body: {
                empNumber: data.addentitlement.empNumber,
                leaveTypeId: data.addentitlement.leaveTypeId,
                entitlement: data.addentitlement.entitlement,
                fromDate: data.addentitlement.fromDate,
                toDate: data.addentitlement.toDate,
            }
        })
    }
}

export default class Timesheets {
     getIDforTimeSheet(){
      return cy.api({
          method: "GET",
          url: `https://opensource-demo.orangehrmlive.com/web/api/v2/time/timesheets/default?date=2023-10-28`,
        })
        .then((res) => {
       //   expect(res.status).to.eq(200);
        //  console.log(res.body.data.id);
          return res.body.data.id;
        });
    }

 editTimesheet(timeSheetId: number,data:any) {
      return cy.api({
          method: "PUT",
          url: `https://opensource-demo.orangehrmlive.com/web/api/v2/time/timesheets/${timeSheetId}/entries`,
          body: {
            entries: data.timesheets.entries,
            deletedEntries: data.timesheets.deletedEntries
          }
            
           
          

        })
       // .then((response) => {
        //  expect(response.status).to.eq(200);
      //  });
    }
  
 
   submitTimesheet(timeSheetId: number) {
      return cy.api({
          method: "PUT",
          url: `https://opensource-demo.orangehrmlive.com/web/api/v2/time/timesheets/${timeSheetId}`,
          body: {
            action: "SUBMIT",
          },
        })
         
    }
  }
  

 
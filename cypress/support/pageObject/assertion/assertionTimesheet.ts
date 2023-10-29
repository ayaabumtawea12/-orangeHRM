export default  class  assertionTimeSheet {
    elements = {
        EmployeeName: () => cy.get(".oxd-autocomplete-text-input > input"),
        Viewbtn: () => cy.get(".oxd-form-actions > .oxd-button"),
        title: () => cy.get(".orangehrm-timesheet-header--title > .oxd-text"),
     };


    assertionTimeSheet(EmployeeName: string) {
      this.elements.EmployeeName().type(EmployeeName);
      this.elements.Viewbtn().click({ force: true });
      this.elements.title().should("contain", `Timesheet for ${EmployeeName}`);
    }


  }
 
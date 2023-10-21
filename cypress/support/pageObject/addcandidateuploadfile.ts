  
export  default class addCandidate{

    elements = {
        firstName: () =>
        cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"  ),
      lastName: () => cy.get(":nth-child(3) > :nth-child(2) > .oxd-input"),
      email: () =>  cy.get(":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input" ),
     saveBtn: () => cy.get('.oxd-button--secondary')
    }
    
    addCandidate() {
        cy.visit(
          "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate"
        );
        this.elements.firstName().type("aya");
        this.elements.lastName().type("abumtawea");
        this.elements.email().type("ayaabumtawea@gmail.com");
        cy.get('input[type="file"]').selectFile("cypress/fixtures/filecandidate.xlsx", { force: true,});
        this.elements.saveBtn().click()    
      }
}
 
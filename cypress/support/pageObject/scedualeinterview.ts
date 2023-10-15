

export default class scheduleInterviewPage{
    elements = {
        interviewTitle: () => cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        interviewer: () => cy.get('.oxd-autocomplete-text-input > input'),
        date: () => cy.get('.oxd-date-input > .oxd-input'),
        savebtn: () => cy.get('.oxd-button--secondary').contains('Save'),
      }
}

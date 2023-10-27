export default class Table {

    elements = {
      PIMbtn: () => cy.get('.oxd-sidepanel-body'),
      candidateTable: () => cy.get('.oxd-table-body'),
    }
  
    gotoRecruitment() {
      this.elements.PIMbtn().contains('Recruitment').click();
    }
  
    countCandidateRows(count: number) {
      this.elements.candidateTable().find('.oxd-table-card').should('have.length', count);
    }
  
    getCandidateCountApi() {
      cy.intercept(
        "GET",
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC'
      ).as('getCandidates');
  
      cy.wait('@getCandidates').then((interception) => {
        const res = interception.response;
        if (res && res.body && res.body.meta && res.body.meta.total) {
          const count = res.body.meta.total;
          this.countCandidateRows(count);
        } else {
          throw new Error('Invalid API response structure');
        }
      });
    }
  }
  
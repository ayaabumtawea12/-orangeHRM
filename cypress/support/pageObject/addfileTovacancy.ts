export default class addFileToVacancy{

elements={
    Recruitment:()=>cy.get('.oxd-main-menu').contains('Recruitment'),
    Vacanciesbtn: () => cy.get('.oxd-topbar-body-nav-tab').contains('Vacancies'),
   // Vacanciesrecord: () => cy.get('.oxd-table-body').children(),
  // Vacanciesrecord: () => cy.get('.div.oxd-table-body > div:nth-child(1) > div > div:nth-child(4)'),
    addVacancybtn: () => cy.get('[type="button"]').contains('Add'),
    editbtn:()=>cy.get('div.oxd-table-body > div:nth-child(1) > div > div:nth-div.oxd-table-body > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1)  > div:nth-child(2) > .oxd-table-cell > .oxd-table-cell-actions > .oxd-icon-button:nth-child(2)'),
    addFileBTN: () => cy.get('.oxd-button'),
    fileInput: () => cy.get('input[type = "file"]'),
    saveBTNs: () => cy.get('[type = submit]'),
}

uploadFileToVacancy(){
    
this.elements.Recruitment().click();
this.elements.Vacanciesbtn().click();
this.elements.editbtn().click();
this.elements.addFileBTN().click();
this.elements.fileInput().selectFile("cypress/fixtures/cv.pdf", {force: true});
this.elements.saveBTNs().eq(1).click();

}








}
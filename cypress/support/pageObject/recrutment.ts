export default class table {

    elements ={
         PIMbtn:()=> cy.get('.oxd-sidepanel-body'),
         candiditeTable:()=> cy.get('.oxd-table.body'),


    }

 
    toRecuruitment(){
        this.elements.candiditeTable().contains('Recruitment').click();
     }
     
     
     
     countCandicateRows(count: number){
         this.elements.candiditeTable().find('.oxd-table-card').should('have.length',count)
     }
     
}

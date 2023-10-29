import loginpage from "../../support/pageObject/loginpage";


const myLogin: loginpage = new loginpage();

describe('add new Employee with login', () => {
    beforeEach(() => {
        cy.visit(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
          );
          myLogin.login("admin", "admin123");
         
    })

    it('add post', () => {
   
      cy.get('.oxd-main-menu').contains('Buzz').click();
      cy.fixture('addpost.txt').then((Post) => {
      cy.get('.oxd-buzz-post-input').type(Post);
      cy.get('.oxd-buzz-post-slot > .oxd-button').click({force:true});
       }) 
       cy.contains('Hiii!')
    })
})
    
 


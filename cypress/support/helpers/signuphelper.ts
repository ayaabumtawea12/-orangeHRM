//const baseurl = Cypress.config().baseurl

import userInit from "../init/inituser"

export const URLs={
users: "https://conduit.productionready.io/api/users"
};


export default class addUser{
    static addNewUserViaApi(){
        cy.addnewuser("POST",URLs.users,userInit.initUser())
    }
 }
 
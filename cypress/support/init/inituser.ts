import { ICreatrEmployeePay } from "../payload/userApipayload"
import GenericfunctionHelper from "../helpers/genericfunction"

export  default class userInit{

static initUser():ICreatrEmployeePay{

let createUserPayload:ICreatrEmployeePay={
    user:{
        email:`email_${GenericfunctionHelper.genericRandomString()}@gmail.com`,
        password:"231",
        username:`aya${GenericfunctionHelper.genericRandomString()}`
}
}
return createUserPayload;

}
}

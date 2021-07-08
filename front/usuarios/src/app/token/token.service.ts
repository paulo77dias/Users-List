import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";
@Injectable({providedIn:'root'})

export class TokenService{
   

    constructor(){

    }

    getToken(){
        return localStorage.getItem('currentUser')
    }
    getUserName(){
        var token:any = this.getToken()
        var tokenDecode:any = jwt_decode(token)
        var name = tokenDecode.sub
        return name

        
    }


}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({providedIn:'root'})
export class LoginService{
   
    constructor(private http:HttpClient){}

    cadastro(user:string,senha:string){
       return this.http.post('http://127.0.0.1:5000/login',{user,senha})
       .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(localStorage.getItem('currentUser'))
        return user;
    }));
    }
}
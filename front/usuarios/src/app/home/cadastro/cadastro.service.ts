import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CadastroService{
    constructor(private http:HttpClient){}

    cadastro(user:string,senha:string,email:string){
       
        
        return this.http.post('http://127.0.0.1:5000/cadastro',{user,senha,email} )
    }
}
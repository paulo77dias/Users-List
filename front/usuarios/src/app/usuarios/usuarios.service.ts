import { error } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class UsuariosService{
    
    numeroUser = 0

    constructor( private http:HttpClient){}

    buscarUsuarios(){
        return this.http.get<any>('https://randomuser.me/api/?results=2000')
           
        
    }

   

}
import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { TokenService } from '../token/token.service';

@Component({
    selector:'ap-header',
    templateUrl:'./header.component.html',
    styleUrls : ['./header.component.css']
})

export class HeaderComponent{

    nome!:string

    constructor(private route:Router,private token:TokenService){
        this.nome = token.getUserName()
    }


logout(){
    localStorage.removeItem("currentUser");
    this.route.navigateByUrl("/login");
}

}
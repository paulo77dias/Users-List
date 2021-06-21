import { Router } from '@angular/router';
import { Component } from "@angular/core";

@Component({
    selector:'ap-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{

    constructor(private route:Router){}
logout(){
    localStorage.removeItem("currentUser");
    this.route.navigateByUrl("/login");
}

}
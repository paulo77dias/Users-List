import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from "@angular/router";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate {
    constructor(private router:Router){}
    canActivate(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean>{
            if(!localStorage.getItem('currentUser')){
                this.router.navigate(['/login']);
                return false
            }
            return true
    }
}
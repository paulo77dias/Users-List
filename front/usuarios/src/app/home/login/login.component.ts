
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { error } from '@angular/compiler/src/util';
import { SenhaConfirmada } from 'src/app/helpers/senha-confirmada.validator';
import { LoginService } from "./login.service";

@Component({
    templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit {
    loginForm = new FormGroup({});

    constructor(private formBuilder:FormBuilder,private loginService:LoginService,private router:Router){}


        ngOnInit():void{
            this.loginForm = this.formBuilder.group({
                loginUsername:['',Validators.required],
                loginPassword:['',Validators.required]
            })
        }
          

        logar(){
            const username = this.loginForm.get('loginUsername')?.value;
            const userPassword = this.loginForm.get('loginPassword')?.value;
            this.loginService.cadastro(username,userPassword).subscribe(
                ()=>{console.log("logado");
                    this.router.navigate(['/'])},
                err => {
                    console.log(err);
                }
            )
        }


}


import { CadastroService } from './cadastro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { error } from '@angular/compiler/src/util';
import { SenhaConfirmada } from 'src/app/helpers/senha-confirmada.validator';

@Component({
    templateUrl:'./cadastro.component.html'
})

export class CadastroComponent implements OnInit  {
    cadastroForm = new FormGroup({});
    
       

    constructor(private formBuilder:FormBuilder,
                private cadService:CadastroService,
                private router:Router){}

    ngOnInit():void{
        this.cadastroForm = this.formBuilder.group({
            cadastroUsername:['',Validators.required],
            cadastroUserPassword:['',[Validators.required,Validators.minLength(8)]],
            cadastroUserEmail:['',Validators.required],
            cadastroUserConfirmPassword:['',Validators.required]
        },{
            validator: SenhaConfirmada('cadastroUserPassword', 'cadastroUserConfirmPassword')
        }
        )
    }
    get f() { return this.cadastroForm.controls;}

   

    cadastrar() {
        
       
        const username = this.cadastroForm.get('cadastroUsername')?.value;
        const userPassword = this.cadastroForm.get('cadastroUserPassword')?.value;
        const userEmail = this.cadastroForm.get('cadastroUserEmail')?.value;
        // TODO: Use EventEmitter with form value
        this.cadService.cadastro(username,userPassword,userEmail).subscribe(
            () => { this.router.navigate(['/login']);
                console.log('Cadastrado com sucesso')
        
        }
            ,
           
            error => {
                console.log(error);
                this.cadastroForm.reset();
            }
        
        )
      }


    
    
   

}
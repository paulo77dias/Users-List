


import { HeaderComponent } from './header/header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './home/login/login.component';
import { CadastroService } from './home/cadastro/cadastro.service';
import { CadastroComponent } from './home/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './home/login/login.service';
import { LoadButtonComponent } from './load button/load-button.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TokenService } from './token/token.service';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    UsuariosComponent,
    HeaderComponent,
    LoadButtonComponent,
    
    
   
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    
   
    
  ],
  providers: [CadastroService,LoginService,TokenService,LoadButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

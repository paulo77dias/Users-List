import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './home/login/login.component';
import { CadastroComponent } from './home/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/ath.guard';

const routes: Routes = [
  {
  path:'cadastro',
  component:CadastroComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:UsuariosComponent,
    canActivate:[AuthGuard]
    
    
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

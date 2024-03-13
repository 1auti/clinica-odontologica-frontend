import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { SecurityRoutes } from './security.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensajeModule } from '../mensaje/mensaje.module';




@NgModule({
  declarations: [LoginUsuarioComponent,SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SecurityRoutes),
    ReactiveFormsModule,
    FormsModule,
    MensajeModule
   
    
  ],
 

})
export class SecurityModule { }

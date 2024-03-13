import { Routes } from "@angular/router";
import { LoginUsuarioComponent } from "./login-usuario/login-usuario.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

export const SecurityRoutes: Routes = [
{

    path:'login',
    component:LoginUsuarioComponent,
    
},
{
    path:'register',
    component:SignUpComponent
},
{
    path: '',
    component:LoginUsuarioComponent
}
]
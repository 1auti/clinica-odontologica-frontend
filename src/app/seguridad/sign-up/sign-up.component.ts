import { Component ,ElementRef,OnInit, ViewChild} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenServiceService } from '../service/token-service.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/modelo/nuevo-usuario';
import { Persona } from 'src/app/modelo/persona';
import { OdontologosService } from 'src/app/component/odontologos/odontologos.service';
import { FormGroup } from '@angular/forms';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


   //User
   id:number =  0 ;
   pass!:string;
   email!:string;
   nombre!:string;
   apellido!:string;
   rol!:string;
   persona!:Persona;
   isManager:Boolean = false;
   isAdmin:Boolean = false;
   errorMessage: string | undefined;
   messageType: 'success' | 'info' | 'error' = 'error';
   @ViewChild('mensajeElement', { static: false }) mensajeElement!: ElementRef;
   isSigned = false;
   isSingingFail = false;
   errorMjs!:string;
   roles:string = '';
   showInfo: { [key: string]: boolean } = { email: false, pass: false };

  constructor(
    private authService:AuthService,
    private tokenService:TokenServiceService,
    private router:Router,
    private odontologoService:OdontologosService
  ){
      
      

  }

  ngOnInit(): void {
  
  }


onSubmit(): void {
 
  // Validacion del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(this.email)) {
    this.errorMessage = 'El formato del correo electrónico no es válido.';
    this.messageType = 'error';
    return;
  }

  // Validación de contraseña con al menos una mayúscula y números
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
  if (!passwordRegex.test(this.pass)) {
    this.errorMessage = 'La contraseña debe contener al menos una mayúscula y números.';
    this.messageType = 'error';
    return;
  }

  this.buscarManager(this.email);

  // Validacion de Rol
    let rolAux: string;

  if (this.isManager) {
    rolAux = 'MANAGER';
  } else if (this.email === "admin@gmail.com") {
    rolAux = 'ADMIN';
  } else {
    rolAux = 'USER';
  }

  const user = new NuevoUsuario(this.id, this.nombre, this.apellido, this.email, this.pass, rolAux, this.persona);

  this.authService.nuevo(user).subscribe(
    data => {
      this.isSigned = true;
      this.isSingingFail = false;
      this.roles = this.rol;
      this.messageType = 'success';
      this.errorMessage = 'Inicio de sesión exitoso.';
      setTimeout(() => {
        this.hideMessage();
      }, 5000);
      this.router.navigate(['login']);
    },
    err => {
      this.isSigned = false;
      this.isSingingFail = true;
      console.error('Error al registrar usuario:', err);
      this.messageType = 'error';
      this.errorMessage = 'No se pudo registrar. Por favor, verifica tus credenciales.';
      setTimeout(() => {
        this.hideMessage();
      }, 5000);
    }
  );

}


private buscarManager(email: string) {
  this.odontologoService.buscarPorEmail(email).subscribe(response =>{
    this.isManager = true;
  })
}

toggleInfo(field: string): void {
  this.showInfo[field] = !this.showInfo[field];
}

hideMessage(): void {
  // Añade la clase 'hide' al mensaje
  this.mensajeElement.nativeElement.classList.add('hide');
}


}

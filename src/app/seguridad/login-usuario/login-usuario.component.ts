import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { LoginUsuario } from 'src/app/modelo/login-usuario';
import { TokenServiceService } from '../service/token-service.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuairo:LoginUsuario = new LoginUsuario("","");
  email!:string;
  password!:string;
  authorities:string[] = [];
  errorMjs!:string;
  errorMessage: string | undefined;
  messageType: 'success' | 'info' | 'error' = 'error';
  @ViewChild('mensajeElement') mensajeElement!: ElementRef;
  mostrarMensaje:boolean=false;

  constructor(
    private TokenService:TokenServiceService,
    private authService:AuthService,
    private router:Router,
  ){}

  


  ngOnInit(): void {
      
    if(this.TokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
    }

  }

  onLogin(): void {
    console.log("Antes de la llamada al servicio. Usuario:", this.loginUsuairo);
  
    this.authService.login(this.loginUsuairo).subscribe(
      (jwt: any) => {

        console.log('Respuesta del servicio:', jwt);

        const tokenParts = jwt.access_token.split(".");
        const decodedPayload = atob(tokenParts[1]);
        const payload = JSON.parse(decodedPayload);
        const email = payload.sub;
        const rol = payload.rol;
  
        this.isLogged = true;
        this.isLogginFail = false;
        
        
        this.TokenService.SetToken(jwt.token);
        this.TokenService.setEmail(email);
        this.TokenService.setRol([rol]);

       
        this.router.navigate(['/dashboard']);
        
        

        
     
      },
      (err: any) => {
        console.error("Error en la llamada al servicio:", err);
  
        this.isLogged = false;
        this.isLogginFail = true;
        this.errorMjs = err.error.mensaje;
        console.log(this.errorMjs);
        this.messageType = 'error';
        this.errorMessage = 'No se pudo iniciar sesión. Por favor, verifica tus credenciales.';
        setTimeout(() => {
          this.hideMessage();
        }, 5000);
      }
      
       
      
      
    );
  }
  
  



  togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    this.mostrarMensaje = !this.mostrarMensaje;

    // Cambia el tipo de entrada de contraseña según el estado del checkbox
    passwordInput.type = this.mostrarMensaje ? 'text' : 'password';
    
  }
  
  irRegistrar(): void {
    this.router.navigate(['security/register']);
  }

  hideMessage(): void {
    // Añade la clase 'hide' al mensaje
    this.mensajeElement.nativeElement.classList.add('hide');
  }


}

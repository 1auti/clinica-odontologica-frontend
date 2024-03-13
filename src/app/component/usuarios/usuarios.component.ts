import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/modelo/nuevo-usuario';
import { Persona } from 'src/app/modelo/persona';
import { TokenServiceService } from 'src/app/seguridad/service/token-service.service';
import { UserService } from 'src/app/seguridad/service/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  users:NuevoUsuario[] = [];
  persona!:Persona;
  user:NuevoUsuario = new NuevoUsuario(0,"","","","","",this.persona);
  email:string= "";
  rol:string[]=[];
  bandera: boolean = false;
  errorMjs!:string;
  errorMessage: string | undefined;
  messageType: 'success' | 'info' | 'error' = 'error';
  @ViewChild('mensajeElement') mensajeElement!: ElementRef;


  constructor(
    private usuariosService:UserService,
    private tokenService:TokenServiceService,
    private router:Router
  ){

  }

  ngOnInit(): void {
      this.traerUsuarios();
      
  }

  traerUsuarios(){
    this.usuariosService.traerUsuarios().subscribe(NuevoUsuario =>{
      this.users = NuevoUsuario;
    })
  }

  borrarUsuario(id:number){
    this.usuariosService.borrarUsuario(id).subscribe(NuevoUsuario =>{
      this.messageType = 'success';
       this.errorMessage = 'Paciente borrado';
       setTimeout(() => {
         this.hideMessage();
       }, 5000);
       this.recargarPagina();

    })
  }

  traerUser(email:string) {
   this.usuariosService.traerUsuario(email).subscribe(NuevoUsuario =>{
    this.user = NuevoUsuario;
    this.bandera = true;
    this.messageType = 'success';
       this.errorMessage = 'User encontrado';
       setTimeout(() => {
         this.hideMessage();
       }, 5000);
    console.log("USER",this.user);
   })
  }


  reiniciar():void{
    this.user.id = 0 ;
    this.bandera = true;
    this.traerUsuarios();
    
  }

  recargarPagina() {
    // Obten la ruta actual
    const currentRoute = this.router.url;

    // Navega a una ruta vacía y luego a la ruta actual para recargar la página
    this.router.navigate(['/empty']).then(() => {
      this.router.navigate([currentRoute]);
    });
  }  
  
  
  
  hideMessage(): void {
    // Añade la clase 'hide' al mensaje
    this.mensajeElement.nativeElement.classList.add('hide');
  }
 

  reiniciarFiltro(){
    this.traerUsuarios();
  }

}

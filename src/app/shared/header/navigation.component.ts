import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/component/pacientes/paciente.service';
import { NuevoUsuario } from 'src/app/modelo/nuevo-usuario';
import { Paciente } from 'src/app/modelo/paciente';
import { Persona } from 'src/app/modelo/persona';
import { AuthService } from 'src/app/seguridad/service/auth.service';
import { TokenServiceService } from 'src/app/seguridad/service/token-service.service';
import { UserService } from 'src/app/seguridad/service/user.service';

declare var $: any;

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports:[NgbDropdownModule,CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls : ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public showSearch = false;
  nombre:string = "";
  apellido:string = "";
  persona:any = {"nombre":"","apellido":"","dni":"","fechaNacimiento":"","telefono":"","direccion":"","email":"","img":"",}
  user:NuevoUsuario =  new NuevoUsuario(0,"","","","","",this.persona);
  email :string = "";
  paciente!:Paciente;

  constructor(
    private authService:AuthService,
    private toastr:ToastrService,
    private tokenService:TokenServiceService,
    private userService:UserService,
    private router:Router,
    private pacienteService:PacienteService
    ) {
  }

  ngOnInit(): void {
   this.email = this.tokenService.getEmail();
   this.buscarPersona();
   this.Buscaruser();
   this.buscarPaciente();
  }
  

  buscarPersona(){

    this.userService.traerUsuario(this.email).subscribe(response =>{
      console.log("Persona:",response.persona)
      this.persona = response.persona;
     

    })
    

  }

  Buscaruser(){
    this.userService.traerUsuario(this.email).subscribe(response =>{
      this.user = response;
    })
  }


  irAlPerfil():void{
    this.router.navigate(['/profile']);
  }

  irMisTurnos():void{
    this.router.navigate(['component/turno/mostrarTurno',this.paciente.id]);
  }

  buscarPaciente():void{
    this.pacienteService.buscarPorEmail(this.email).subscribe(response =>{
      this.paciente = response;
      console.log("Paciente",this.paciente);
    })
  }
    



 

        cerrarSesion(): void {
          this.authService.logout().subscribe(
            response => {
              this.toastr.success('Sesión cerrada exitosamente', 'Éxito');
              this.router.navigate(["/"]);
            },
            error => {
              if (error.status === 401) {
                this.toastr.warning('No se pudo cerrar sesión. Sesión ya cerrada o no autorizada.', 'Advertencia');
              } else {
                this.toastr.error('Ha ocurrido un error al cerrar sesión', 'Error');
              }
            }
          );
        }
  
}

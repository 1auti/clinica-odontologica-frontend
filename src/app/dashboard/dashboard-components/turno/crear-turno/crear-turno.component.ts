import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/component/pacientes/paciente.service';
import { TurnoService } from 'src/app/component/turnos/turno.service';
import { Odontologo } from 'src/app/modelo/odontologo';
import { Paciente } from 'src/app/modelo/paciente';
import { Turno } from 'src/app/modelo/turno';
import { TokenServiceService } from 'src/app/seguridad/service/token-service.service';

@Component({
  selector: 'app-crear-turno',
  templateUrl: './crear-turno.component.html',
  styleUrls: ['./crear-turno.component.scss']
})
export class CrearTurnoComponent implements OnInit {

  paciente:any = {nombre:"",apellido:"",fechaNacimiento:new Date(0,0,0),email:"",telefono:"",dni:0,direccion:"",tipo_sangre:"",tieneObraSocial:false,obraSocial:""}
  odontologo:any = {especialidad:""}
  tipoSangreOptions: string[] = ['A+', 'O+', 'B+', 'AB+', 'A-', 'O-', 'B-', 'AB-'];
  selectedImage!: File;
  esPaciente:boolean = false;
  turno:Turno = new Turno(0,new Date(0,0,0),this.odontologo,this.paciente,"","")
  errorMessage: string | undefined;
   messageType: 'success' | 'info' | 'error' = 'error';
   @ViewChild('mensajeElement', { static: false }) mensajeElement!: ElementRef;



  constructor(
    private turnoService:TurnoService,
    private toastr:ToastrService,
    private router:Router,
    private pacienteService:PacienteService,
    private tokenService:TokenServiceService

  ){

  }

  ngOnInit(): void {
      const email = this.tokenService.getEmail()
      this.buscarPaciente(email);
  }

  crearTurno():void{
    console.log("Turno",this.turno);
    this.turnoService.crearTurno(this.turno,this.selectedImage).subscribe(Turno =>{
      this.turno = Turno;
      console.log("Turno",this.turno);
      this.messageType = 'success';
      this.errorMessage = 'Inicio de sesión exitoso.';
      setTimeout(() => {
        this.hideMessage();
      }, 5000);
      this.router.navigate(['/dashboard']);
      this.recargarPagina();

    })
  }

  siguienteEtapa(): void {

      document.getElementById('etapa1')!.style.display = 'none';
      document.getElementById('etapa2')!.style.display = 'block';
    
  }
  
  recargarPagina() {
    // Obten la ruta actual
    const currentRoute = this.router.url;

    // Navega a una ruta vacía y luego a la ruta actual para recargar la página
    this.router.navigate(['/empty']).then(() => {
      this.router.navigate([currentRoute]);
    });
  }  
  

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0] as File;
  }

  buscarPaciente(email:string):void{
   this.pacienteService.buscarPorEmail(email).subscribe(response =>{
    this.esPaciente = true;
    this.turno.paciente = response;
    console.log("Paciente encontrado",this.turno.paciente)
    
    
   },error => {
    this.esPaciente = false;
   })
    
  }

  hideMessage(): void {
    // Añade la clase 'hide' al mensaje
    this.mensajeElement.nativeElement.classList.add('hide');
  }
  



}

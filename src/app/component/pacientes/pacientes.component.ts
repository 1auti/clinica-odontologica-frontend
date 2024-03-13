import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Paciente } from 'src/app/modelo/paciente';
import { PacienteService } from './paciente.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {


  pacientes: Paciente[] = [];
  paciente!:Paciente;
  tipoSangreOptions: string[] = ['A+', 'O+', 'B+', 'AB+', 'A-', 'O-', 'B-', 'AB-'];
  selectedTipoSangre: string = '';
  fechaFiltro: string = "";
  TipoObraSocial: string = '';
  obraSocial:boolean = false;
  email:string ="";
  bandera:boolean = false;
  errorMjs!:string;
  errorMessage: string | undefined;
  messageType: 'success' | 'info' | 'error' = 'error';
  @ViewChild('mensajeElement') mensajeElement!: ElementRef;



  constructor(private service:PacienteService,private router:Router){

  }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes() {
    this.service.traerPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  filtrarPorTipoSangre(tipoSangreOptions:string[]) {
    if (this.selectedTipoSangre) {
      this.service.traerPacientesPorTipoSangre(this.selectedTipoSangre).subscribe(pacientes => {
        this.pacientes = pacientes;
      });
    } else {
      this.obtenerPacientes();
    }
  }

  filtrarMenores() {
    this.service.traerPacientesMenores().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  filtrarMayores() {
    this.service.traerPacientesMayores().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  filtrarConObraSocial(obraSocial : boolean) {
    this.service.traerPacientesTenganObraSocial(obraSocial).subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  filtrarPorObraSocial(TipoObraSocial: string) {
    this.service.traerPacientesPorTipoObraSocial(TipoObraSocial).subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  showDetalles(pacienteId: number) {
    // Utiliza el Router para navegar al componente detalles-paciente con el ID del paciente
    this.router.navigate(['/component/pacientes/detalles-paciente', pacienteId]);
  }

  buscarPacientePorEmail(email:string):void{
    this.service.buscarPorEmail(email).subscribe(response =>{
       this.paciente = response;
       this.bandera = true;
       this.messageType = 'success';
       this.errorMessage = 'Paciente encontrado';
       setTimeout(() => {
         this.hideMessage();
       }, 5000);

    })
  }

  reiniciar():void{

    this.bandera = false;
    this.obtenerPacientes();
    
  }

  hideMessage(): void {
    // Añade la clase 'hide' al mensaje
    this.mensajeElement.nativeElement.classList.add('hide');
  }


}

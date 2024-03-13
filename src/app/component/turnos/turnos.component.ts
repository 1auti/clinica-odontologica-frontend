import { Component, OnInit } from '@angular/core';
import { TurnoService } from './turno.service';
import { Turno } from 'src/app/modelo/turno';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../pacientes/paciente.service';
import { Paciente } from 'src/app/modelo/paciente';
import { TokenServiceService } from 'src/app/seguridad/service/token-service.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit {

  pacienteId:number= 0;
  turnos:Turno[] = [];
  paciente!:Paciente;
  rol:string = '';

  constructor(
    private turnoService:TurnoService,
    private pacienteService:PacienteService,
    private route:ActivatedRoute,
    private router:Router,
    private tokenService:TokenServiceService
  ){}


  ngOnInit(): void {
      this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));
      this.cargarTurnos();
      this.obtenerPaciente();
      this.rol = this.tokenService.getRol();
  }

  cargarTurnos(): void {
  
    this.turnoService.traerTurnosPorPaciente(this.pacienteId).subscribe({
      next: (turnos: Turno[]) => {
        this.turnos = turnos 
      },
      error: (error) => {
        console.error('Error al cargar turnos', error);
      }
    });
  }

  agregarDiagnostico(id: number) {
    if (this.pacienteId && id) {
      this.router.navigate(['/component/historial/altaDiagnostico', this.pacienteId, id]);
    } else {
      console.error('Paciente ID o ID de Turno indefinidos');
    }
  }


  obtenerPaciente(){
    this.pacienteService.buscarPaciente(this.pacienteId).subscribe({
      next:(paciente:Paciente) =>{
        this.paciente = paciente;
      },
      error:(error) =>{
        console.error('Error a encontrar paciente',error);
      }
    })
  }
  

  volverPacientes(){
    this.router.navigate(['/component/pacientes/mostrar-pacientes'])
  }
  

 




}

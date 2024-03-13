import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/modelo/paciente';
import { PacienteService } from '../paciente.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-pacientes',
  templateUrl: './mostrar-pacientes.component.html',
  styleUrls: ['./mostrar-pacientes.component.scss']
})
export class MostrarPacientesComponent implements OnInit {

  pacientes:Paciente[] = [];

  constructor(  
    private service:PacienteService,
    private toastr:ToastrService,
    private router:Router
    ){
  

  
  }


  ngOnInit(): void {
      this.obtenerPacientes();
  }

  obtenerPacientes() {
    this.service.traerPacientes().subscribe((pacientes) => {
      this.pacientes = pacientes;
    });
  }

  editarPaciente(pacienteId :number) {
      this.router.navigate(['/component/pacientes/editar-paciente', pacienteId]);
  }

  borrarPaciente(id: number) {
    this.service.borrarPaciente(id).subscribe(() => {
      this.toastr.success('Paciente eliminado con éxito', 'Éxito');
      this.obtenerPacientes(); // Vuelve a cargar la lista después de borrar
    });
  }

  mostrarHistorial(id:number){
    this.router.navigate(['/component/historial/mostrarHistorial',id])
  }

  mostrarTurnos(id:number){
    this.router.navigate(['/component/turno/mostrarTurno/',id])
  }


}

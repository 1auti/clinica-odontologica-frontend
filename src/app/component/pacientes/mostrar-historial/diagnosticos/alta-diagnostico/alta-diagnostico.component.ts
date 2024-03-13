import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { forkJoin } from 'rxjs';
import { HistorialMedico } from 'src/app/modelo/historial-medico';
import { Odontologo } from 'src/app/modelo/odontologo';
import { DiagnosticosService } from '../diagnosticos.service';
import { HistorialService } from '../../../historial.service';
import { OdontologosService } from 'src/app/component/odontologos/odontologos.service';
import { Diagnostico } from 'src/app/modelo/diagnostico';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PacienteService } from '../../../paciente.service';
import { DatePipe } from '@angular/common';
import { Turno } from 'src/app/modelo/turno';
import { TurnoService } from 'src/app/component/turnos/turno.service';

@Component({
  selector: 'app-alta-diagnostico',
  templateUrl: './alta-diagnostico.component.html',
  styleUrls: ['./alta-diagnostico.component.scss']
})

export class AltaDiagnosticoComponent implements OnInit {

  pacienteId: number = 0;
  odontologos: Odontologo[] = [];
  diagnostico: string = "";
  odontologo!: Odontologo;
  historial!: HistorialMedico;
  fechaTratamiento:Date = new Date()
  nuevoDiagnostico: Diagnostico = new Diagnostico(0, this.diagnostico,  this.odontologo, this.historial,this.fechaTratamiento);


  constructor(
    private diagnosticoService: DiagnosticosService,
    private odontologoService: OdontologosService,
    private pacienteService: PacienteService,
    private turnoService : TurnoService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadOdontologos();
  }

  loadOdontologos(): void {
    this.odontologoService.getOdontologos().subscribe({
      next: (odontologos: Odontologo[]) => {
        this.odontologos = odontologos;
        // Puedes inicializar el odontólogo con el primero de la lista (ajusta según tu lógica)
        this.odontologo = odontologos[0];
      },
      error: (error) => {
        console.error('Error al cargar odontólogos', error);
      }
    });
  }

  submitForm(): void {
    const pacienteId = Number(this.route.snapshot.paramMap.get('id'));
  
    // Obtener el historial médico
    this.pacienteService.obtenerHistorialMedicoId(pacienteId).subscribe({
      next: (historial) => {
        // Verificar si this.odontologo está definido antes de acceder a la propiedad 'id'
        if (this.odontologo) {
          // Crear un objeto Odontologo con el ID
          const odontologo = { id: this.odontologo.id } as Odontologo;
          const historialMedico = { id_historial:historial} as HistorialMedico;
          
          
  
          // Crear un objeto Diagnostico con el objeto HistorialMedico
          this.nuevoDiagnostico = new Diagnostico(0,this.diagnostico,odontologo,historialMedico,this.fechaTratamiento);
  
          this.diagnosticoService.crearDiagnostico(historial,this.nuevoDiagnostico).subscribe({
            next: (Diagnostico) => {
              console.log('Diagnóstico creado exitosamente', Diagnostico);
              this.toastr.success('Diagnostico creado con exito');
              this.mostrarHistorial(pacienteId)
              
            },
            error: (error) => console.error('Error al crear diagnóstico', error)
          });
        } else {
          console.error('this.odontologo no está definido');
        }
      },
      error: (error) => console.error('Error al obtener historial médico', error)
    });

  

   
  }
  


  mostrarHistorial(id:number){
    this.router.navigate(['/component/historial/mostrarHistorial',id])
  }
  
  
}  
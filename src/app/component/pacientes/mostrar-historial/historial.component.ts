import { Component, OnInit } from '@angular/core';
import { HistorialMedico } from 'src/app/modelo/historial-medico';
import { ActivatedRoute, Router } from '@angular/router';
import { HistorialService } from '../historial.service';
import { DiagnosticosService } from './diagnosticos/diagnosticos.service';
import { Odontologo } from 'src/app/modelo/odontologo';
import { Horario } from 'src/app/modelo/horario';
import { Diagnostico } from 'src/app/modelo/diagnostico';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/modelo/paciente';
import { OdontologosService } from '../../odontologos/odontologos.service';

@Component({
  selector: 'app-mostrar-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  historialMedico!: HistorialMedico ;
  pacienteId: number = 0 ;
  odontologoId: number = 0 ;
  diagnostico: string = '';
  fechaInicio:Date = new Date(0,0,0);
  fechaFin:Date = new Date(0,0,0);
  diagnosticos : Diagnostico[] = [];
  listaDiagnosticos:Diagnostico[] = [];
  private diagnosticosRespaldo:Diagnostico[] = [];
 odontologos:Odontologo[] = [];
  



  constructor(
    private route: ActivatedRoute,
    private historialService: HistorialService,
    private diagnosticosService:DiagnosticosService,
    private toastr: ToastrService,
    private router:Router,
    private odontologoService:OdontologosService
  ) { }

  ngOnInit(): void {
    // Obtener el ID del paciente desde los parámetros de la ruta
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));
    // Cargar historial médico del paciente
    this.obtenerHistorialPorPaciente();
    this.obtenerDiagnosticosPorPaciente();
    this.obtenerOdontologos();
  }

   obtenerHistorialPorPaciente(): void {
    this.historialService.traerHistorialPorPaciente(this.pacienteId)
      .subscribe(HistorialMedico => {
        
        this.historialMedico = HistorialMedico
        console.log("Historial medico",this.historialMedico);
      
      });
  }

  obtenerDiagnosticosPorPaciente(): void {
    this.diagnosticosService
      .obtenerDiagnosticosPorPaciente(this.pacienteId)
      .subscribe(diagnosticos => {
        this.diagnosticos = diagnosticos;
        this.diagnosticosRespaldo = diagnosticos
        console.log('Diagnosticos:',this.diagnosticos)
      });

  }

  obtenerOdontologos():void{
   this.odontologoService.getOdontologos().subscribe(Odontologo => {
    this.odontologos = Odontologo
   })

   }
  
  



    
 

  eliminarDiagnostico(diagnosticoId: number): void {
   this.diagnosticosService.borrarDiagnostico(diagnosticoId).subscribe( Diagnostico =>{
       this.toastr.info("Borrado con exito");
       this.obtenerDiagnosticosPorPaciente();
   })
  }

  editarDiagnostico(diagnosticoId: number): void {
    // Implementa la lógica para editar un diagnóstico
    // Puedes navegar a la página de edición o mostrar un modal, según tus necesidades
     this.router.navigate(['component/historial/editarDiagnostico', diagnosticoId]);
  }

  buscarPorOdontologo(): void {
      this.diagnosticosService.traerDiagnosticosPorOdontologo(this.odontologoId).subscribe({
        next: (Diagnostico) => {
          // Crear instancias de HistorialMedico a partir de los diagnósticos
          this.diagnosticos = Diagnostico
          this.toastr.success("Diagnosticos encontrados por odontólogo");
          console.log('Diagnosticos encontrados:', this.diagnosticos);
        },
        error: (error) => {
          console.error('Error al buscar por odontólogo', error);
        }
      });
    }
  
  

  buscarPorDiagnostico(): void {
      this.diagnosticosService.traerDiagnosticosPorDiagnostico(this.diagnostico).subscribe({
        next: (diagnosticos) => {
          // Crear instancias de HistorialMedico a partir de los diagnósticos
          this.diagnosticos = diagnosticos
          this.toastr.success("Diagnosticos encontrados");
          console.log('Diagnosticos encontrados:', diagnosticos);
        },
        error: (error) => {
          console.error('Error al buscar por diagnóstico', error);
        }
      });
    }
  
  

  buscarPorFechas(): void {
   
      this.diagnosticosService.traerDiagnosticosPorFechas(this.fechaInicio, this.fechaFin).subscribe({
        next: (Diagnostico) => {
          // Crear instancias de HistorialMedico a partir de los diagnósticos
          this.diagnosticos = Diagnostico
          this.toastr.success("Diagnosticos encontrados por fechas");
          console.log('Diagnosticos encontrados:', Diagnostico);
        },
        error: (error) => {
          console.error('Error al buscar por fechas', error);
        }
      });
    }
  
  
  

  
  
  

 reiniciarFiltros(): void {
    this.diagnosticos = this.diagnosticosRespaldo;
    this.odontologoId = 0;
    this.diagnostico = '';
    this.fechaInicio = new Date(0,0,0);
    this.fechaFin = new Date;
    this.toastr.success('Filtros reiniciados', 'Éxito');
  }
  


  
  
  

 
  agregarDiagnostico(): void {
   this.router.navigate(['/component/historial/altaDiagnostico', this.pacienteId]);
  }

 

}

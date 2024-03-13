import { Component, OnInit } from '@angular/core';
import { OdontologosService } from '../../odontologos.service';
import { DiagnosticosService } from 'src/app/component/pacientes/mostrar-historial/diagnosticos/diagnosticos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Diagnostico } from 'src/app/modelo/diagnostico';
import { Odontologo } from 'src/app/modelo/odontologo';
import { HistorialService } from 'src/app/component/pacientes/historial.service';
import { HistorialMedico } from 'src/app/modelo/historial-medico';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mostrar-diagnosticos',
  templateUrl: './mostrar-diagnosticos.component.html',
  styleUrls: ['./mostrar-diagnosticos.component.scss']
})
export class MostrarDiagnosticosComponent implements OnInit {

  odontologoId:number = 0 ;
  odontologo!:Odontologo
  diagnosticos:Diagnostico[] = [];
  historialMedico:HistorialMedico[] = [];
  diagnosticosCopia:Diagnostico[] = [];
  historialMedicoCopia:HistorialMedico[] = [];

  diagnostico:string = "";
  fechaInicio:Date = new Date(0,0,0);
  fechaFin:Date = new Date(0,0,0);


  constructor(
    private odontologoService:OdontologosService,
    private diagnosticoService:DiagnosticosService,
    private historialMedicoService:HistorialService,
    private route:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService
  ){

  }

  ngOnInit(): void {
    // Obtener el ID del paciente desde los parámetros de la ruta
    this.odontologoId = Number(this.route.snapshot.paramMap.get('id'));
    this.obtenerOdontologo(this.odontologoId);
    this.obtenerDiagnosticos(this.odontologoId);
    this.obtenerDiagnosticosPorHistorialDeOdontologos(this.odontologoId);
   
  }


  obtenerDiagnosticos(id:number){
    this.diagnosticoService.traerDiagnosticosPorOdontologo(id).subscribe(Diagnostico =>{
      console.log("Diagnosticos",Diagnostico);
      this.diagnosticos = Diagnostico;
      this.diagnosticosCopia = Diagnostico;
    })

  }

  obtenerDiagnosticosPorHistorialDeOdontologos(id:number){
    this.historialMedicoService.getHistorialMedicoPorOdontologo(id).subscribe(HistorialMedico =>{
      this.historialMedico = HistorialMedico;
      this.historialMedicoCopia = HistorialMedico;
    })
  }



  obtenerOdontologo(id:number){
    this.odontologoService.buscarOdontologo(id).subscribe(Odontologo => {
      console.log("Odontologo",Odontologo);
      this.odontologo = Odontologo;
    })
  }

  buscarPorDiagnostico(){
    this.diagnosticoService.traerDiagnosticosPorDiagnostico(this.diagnostico).subscribe(Diagnostico =>{
      this.diagnosticos = Diagnostico;
      this.toastr.success("Diagnosticos encontrados por diagnostico");
      console.log("Diagnosticos encontrados por diagnostico")
    })
  }

  buscarPorFechas(){
    this.diagnosticoService.traerDiagnosticosPorFechas(this.fechaInicio,this.fechaFin).subscribe(Diagnostico => {
      this.diagnosticos = Diagnostico;
      this.toastr.success("Diagnosticos encontrados por fechas");
      console.log('Diagnosticos encontrados por fechas :', Diagnostico);
    })
  }

  eliminarDiagnostico(id:number):void{
     this.diagnosticoService.borrarDiagnostico(id).subscribe(Diagnostico =>{
      this.toastr.success('Eliminado con exito', 'Éxito');
     })
  }

  editarDiagnostico(id:number){
    this.router.navigate(['/component/odontologos/editar-diagnosticos', id]);
  }

  reiniciarFiltros(){
  this.diagnosticos = this.diagnosticosCopia;
  this.historialMedicoCopia = this.historialMedicoCopia;
  this.fechaInicio = new Date(0,0,0);
  this.fechaFin = new Date(0,0,0);
  this.toastr.success('Filtros reiniciados', 'Éxito');
  }




}

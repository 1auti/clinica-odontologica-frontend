import { Component, OnInit } from '@angular/core';
import { DiagnosticosService } from '../diagnosticos.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Diagnostico } from 'src/app/modelo/diagnostico';
import { delay } from 'rxjs';
import { OdontologosService } from 'src/app/component/odontologos/odontologos.service';
import { Odontologo } from 'src/app/modelo/odontologo';

@Component({
  selector: 'app-editar-diagnostico',
  templateUrl: './editar-diagnostico.component.html',
  styleUrls: ['./editar-diagnostico.component.scss']
})
export class EditarDiagnosticoComponent implements OnInit {

  diagnosticoId:number = 0 ;
  diagnosticoForm:FormGroup;
  odontologos:Odontologo[] = [];


  constructor(
    private diagnosticoService:DiagnosticosService,
    private route:ActivatedRoute,
    private router:Router,
    private toast:ToastrService,
    private FB:FormBuilder,
    private odontologoService:OdontologosService

  ){

    this.diagnosticoForm = this.FB.group({

      id:[null],
      diagnostico:['',Validators.required],
      fechaTratamienteo:[new Date(0,0,0)],
      odontologo:[null]



    })
    
  }

  ngOnInit(): void {
       this.diagnosticoId = Number(this.route.snapshot.paramMap.get('id'));
       this.buscarDiagnostico(this.diagnosticoId);
       this.obtenerOdontologos();
       
  }

  buscarDiagnostico(diagnosticoId:number){
    this.diagnosticoService.obtenerDiagnosticoPorId(diagnosticoId).subscribe(Diagnostico =>{
      this.diagnosticoForm.patchValue = Diagnostico;
    })
  }

  guardarCambios(): void {
    if (this.diagnosticoForm.valid) {
      const diagnosticoEditado = this.diagnosticoForm.value;
      console.log(diagnosticoEditado);
      this.diagnosticoService.actualizarDiagnostico(this.diagnosticoId, diagnosticoEditado).pipe(
        delay(1000) // Ajusta el valor según tus necesidades (1 segundo en este caso)
      ).subscribe(() => {
        console.log("Diagnostico",diagnosticoEditado);
        this.mostrarNotificacion();
        this.router.navigate(['/component/historial/mostrarHistorial',this.diagnosticoId])
      });
    }
  }

  obtenerOdontologos():void{
    this.odontologoService.getOdontologos().subscribe(Odontologo => {
     this.odontologos = Odontologo
    })
 
    }
  
  mostrarNotificacion() {
    this.toast.success('Paciente guardado con éxito', 'Éxito');
  }




}

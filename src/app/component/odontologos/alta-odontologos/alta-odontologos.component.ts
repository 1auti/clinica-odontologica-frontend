import { Component, OnInit } from '@angular/core';
import { Odontologo } from 'src/app/modelo/odontologo';
import { OdontologosService } from '../odontologos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Horario } from 'src/app/modelo/horario';
import { HistorialMedico } from 'src/app/modelo/historial-medico';
import { NuevoUsuario } from 'src/app/modelo/nuevo-usuario';

@Component({
  selector: 'app-alta-odontologos',
  templateUrl: './alta-odontologos.component.html',
  styleUrls: ['./alta-odontologos.component.scss']
})
export class AltaOdontologosComponent implements OnInit {

  nuevoOdontologo:any = {nombre:"",apellido:"",fechaNacimiento:new Date(0,0,0),email:"",telefono:"",dni:0,direccion:"",especialidad:""}
  nuevoHorario: any = {dias:"",horario_inicio:"",horario_fin:""}
  selectedImage!: File;
  diasSemanaOptions: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];


  constructor(
    private service: OdontologosService,
    private router: Router,
    private toastr: ToastrService
  ) {
   
    
   
  }

  ngOnInit(): void {
  }

  guardarOdontologo() {
    this.nuevoOdontologo.horario = this.nuevoHorario;
    console.log(this.nuevoOdontologo);
    this.service.crearOdontologo(this.nuevoOdontologo,this.selectedImage).subscribe(Odontologo =>{
      this.nuevoOdontologo = Odontologo;
      console.log('Odontologo nuevo',this.nuevoOdontologo);
      this.mostrarNotificacion();
      this.volverPacientes();
    })
  }
  
  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0] as File;
  }

  mostrarNotificacion() {
    this.toastr.success('Odontologo guardado con éxito', 'Éxito');
  }

  volverPacientes() {
    this.router.navigate(['/component/odontologos/mostrar-odontologos']);
  }
}

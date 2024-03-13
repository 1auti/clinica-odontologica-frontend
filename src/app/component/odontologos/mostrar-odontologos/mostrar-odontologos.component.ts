import { Component,OnInit } from '@angular/core';
import { Odontologo } from 'src/app/modelo/odontologo';
import { OdontologosService } from '../odontologos.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-odontologos',
  templateUrl: './mostrar-odontologos.component.html',
  styleUrls: ['./mostrar-odontologos.component.scss']
})
export class MostrarOdontologosComponent implements OnInit {

  odontologos:Odontologo[] = [];

  constructor(
    private service:OdontologosService,
    private toastr:ToastrService,
    private router:Router
  ){

  }

  ngOnInit(): void {
      this.obtenerOdontologos();
  }

  obtenerOdontologos() {
    this.service.getOdontologos().subscribe((odontologos) => {
      this.odontologos = odontologos; 
    });
  }

  editarOdontologo(odontologoId :number) {
      this.router.navigate(['/component/odontologos/editar-odontologo', odontologoId]);
  }

  borrarOdontologo(id: number) {
    this.service.borrarOdontologo(id).subscribe(() => {
      this.toastr.success('Odontologo eliminado con éxito', 'Éxito');
      this.obtenerOdontologos(); // Vuelve a cargar la lista después de borrar
    },
    (error) => {
      console.error('Error al obtener odontólogos:', error);
      // Puedes mostrar un mensaje de error al usuario o realizar otras acciones necesarias.
    });
  }

  mostrarDiagnosticosOdontologo(odontologoId :number) {
    this.router.navigate(['/component/odontologos/mostrar-diagnosticos', odontologoId]);
}

 

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-especialidades-odontologos',
  templateUrl: './mostrar-especialidades-odontologos.component.html',
  styleUrls: ['./mostrar-especialidades-odontologos.component.scss']
})
export class MostrarEspecialidadesOdontologosComponent {

    especialidades = [
      {
        id: 1,
        nombre: 'Cirugía Dental',
        descripcionCorta: 'Especialidad enfocada en procedimientos quirúrgicos.',
      
      },
      {
        id: 2,
        nombre: 'Ortodoncia General',
        descripcionCorta: 'Corrección de mal posiciones dentales y alineación dental.',
      
      },
      {
        id: 3,
        nombre: 'Odontopediatra',
        descripcionCorta: 'Atención dental especializada para niños.',
      
      },
      {
        id: 4,
        nombre: 'Endodoncia',
        descripcionCorta: 'Tratamiento de enfermedades de la pulpa dental.',

      },
      {
        id: 5,
        nombre: 'Prostodoncia',
        descripcionCorta: 'Restauración y reemplazo de dientes ausentes.',
      
      },
      {
        id: 6,
        nombre: 'Patólogo Oral',
        descripcionCorta: 'Especialista en el estudio de enfermedades orales.',
      },
      {
        id: 7,
        nombre: 'Periodoncista',
        descripcionCorta: 'Especialista en enfermedades de las encías.',
      },
      {
        id: 8,
        nombre: 'Dentista General',
        descripcionCorta: 'Atención dental general y preventiva.',
      }
      
    ];

  constructor(private router: Router) {}

  verMas(id: number) {
    // Redirige a la página de la especialidad según el ID
    this.router.navigate(['dashboard/especialidades-odontologos/especialidad', id]);
  }


}

import { Injectable } from '@angular/core';
import { Servicio } from './servicios';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Limpieza Dental',
      descripcion: 'Eliminación de placa y sarro para mantener una buena salud bucal.',
      imagenUrl: '../../../../../assets/images/servicios/limpieza dental.jpg',
    },
    {
      id: 2,
      nombre: 'Blanqueamiento Dental',
      descripcion: 'Procedimiento para aclarar el tono de los dientes y mejorar la estética dental.',
      imagenUrl: '../../../../../assets/images/servicios/blanqueamiento.jpg',
    },
    {
      id: 8,
      nombre: 'Cirugía Dental',
      descripcion: 'Procedimientos quirúrgicos para abordar problemas dentales complejos.',
      imagenUrl: '../../../../../assets/images/servicios/64593463-implantes-de-cirugía-dental-en-paciente-real.jpg',
    },
    {
      id: 3,
      nombre: 'Endodoncia',
      descripcion: 'Tratamiento de conducto para salvar dientes con pulpas dañadas.',
      imagenUrl: '../../../../../assets/images/servicios/endodoncia.jpg',
    },
    {
      id: 4,
      nombre: 'Implantes Dentales',
      descripcion: 'Reemplazo de dientes perdidos con implantes dentales duraderos.',
      imagenUrl: '../../../../../assets/images/servicios/implantes dentales.jpg',
    },
    {
      id: 5,
      nombre: 'Odontopediatría',
      descripcion: 'Atención dental especializada para niños y adolescentes.',
      imagenUrl: '../../../../../assets/images/servicios/odontopediatria.avif',
    },
    {
      id: 6,
      nombre: 'Ortodoncia',
      descripcion: 'Corrección de la alineación de los dientes y mandíbulas para una sonrisa recta.',
      imagenUrl: '../../../../../assets/images/servicios/ortodoncia.jpg',
    },
    {
      id: 7,
      nombre: 'Periodoncia',
      descripcion: 'Tratamiento de enfermedades de las encías y estructuras de soporte dental.',
      imagenUrl: '../../../../../assets/images/servicios/periodoncia.avif',
    },
    
  ];

  obtenerServicios(): Observable<Servicio[]> {
    return of(this.servicios);
  }
}

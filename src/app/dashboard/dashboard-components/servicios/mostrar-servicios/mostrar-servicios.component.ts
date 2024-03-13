import { Component, OnInit } from '@angular/core';
import { Servicio } from './servicios';
import { ServiciosComponent } from '../servicios.component';
import { ServiciosService } from './servicios.service';

@Component({
  selector: 'app-mostrar-servicios',
  templateUrl: './mostrar-servicios.component.html',
  styleUrls: ['./mostrar-servicios.component.scss']
})
export class MostrarServiciosComponent implements OnInit {
 
  servicios:Servicio[] = [];

  constructor(private serviciosService:ServiciosService){

  }

  ngOnInit(): void {
    this.serviciosService.obtenerServicios().subscribe((servicios) => {
      this.servicios = servicios;
    });
  }
  }




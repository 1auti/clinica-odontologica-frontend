import { Component, OnInit } from '@angular/core';
import { Especialidad } from './especialidad';
import { especialidades } from './especialidades';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-especialidad',
  templateUrl: './descripcion-especialidad.component.html',
  styleUrls: ['./descripcion-especialidad.component.scss']
})
export class DescripcionEspecialidadComponent implements OnInit{

  especialidad: Especialidad = {
    id: 0,
    nombre: '',
    descripcion: '',
    procedimientos: '',
    importancia: '',
    imagen: '',  
    videoUrl: ''
  };


  constructor(private sanitizer: DomSanitizer,
              private route:ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const especialidadId =  Number(this.route.snapshot.paramMap.get('id'));
      this.especialidad = especialidades.find(e => e.id == especialidadId) || this.especialidad ;
     })
  
  }

  getSafeUrl(videoUrl: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  

}

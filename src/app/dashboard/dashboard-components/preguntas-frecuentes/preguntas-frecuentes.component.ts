import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss']
})
export class PreguntasFrecuentesComponent  implements OnInit{


constructor(private router:Router){

}


ngOnInit(): void {
    
}

redirectToPreguntasFrecuentes() {
  this.router.navigate(['dashboard/preguntas-frecuentes/mostrar']);
}

}

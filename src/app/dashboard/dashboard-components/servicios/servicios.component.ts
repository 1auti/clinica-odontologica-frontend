import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent  implements OnInit{


  constructor(private router:Router){

  }

  ngOnInit(): void {
      
  }


  redirectToPreguntasFrecuentes() {
    this.router.navigate(['dashboard/servicios/mostrar']);
  }
}

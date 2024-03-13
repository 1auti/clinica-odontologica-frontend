import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidades-odontologos',
  templateUrl: './especialidades-odontologos.component.html',
  styleUrls: ['./especialidades-odontologos.component.scss']
})
export class EspecialidadesOdontologosComponent implements OnInit {

 
  constructor(private router:Router){

  }

  ngOnInit(): void {
      
  }

  redirectToEspecialidadesOdontologos(){
    this.router.navigate(['dashboard/especialidades-odontologos/mostrar']);
  }

}

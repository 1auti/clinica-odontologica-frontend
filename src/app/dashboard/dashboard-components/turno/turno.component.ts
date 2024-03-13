import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.scss']
})
export class TurnoComponent implements OnInit {


  constructor(private router: Router) { }


  ngOnInit(): void {
      
  }

  redirectToCrearTurno() {
    this.router.navigate(['dashboard/turno/crearTurno']);
  }



}

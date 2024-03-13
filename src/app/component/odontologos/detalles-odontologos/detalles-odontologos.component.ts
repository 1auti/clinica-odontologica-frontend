import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Odontologo } from 'src/app/modelo/odontologo';
import { OdontologosService } from '../odontologos.service';

@Component({
  selector: 'app-detalles-odontologos',
  templateUrl: './detalles-odontologos.component.html',
  styleUrls: ['./detalles-odontologos.component.scss']
})
export class DetallesOdontologosComponent implements OnInit {

  odontologo:Odontologo | null = null;


  constructor(
    private route:ActivatedRoute,
    private service:OdontologosService,
    private router:Router
  ){
   
  }



  ngOnInit(): void {
    this.obtenerDetalles();
  }

  obtenerDetalles(): void {
    const  odontologoId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.detallesOdontologo(odontologoId)
      .subscribe(odontologo => this.odontologo = odontologo);
  }

  volverAOdontologo():void{
    this.router.navigate(['/component/odontologos'])
  }

  
}

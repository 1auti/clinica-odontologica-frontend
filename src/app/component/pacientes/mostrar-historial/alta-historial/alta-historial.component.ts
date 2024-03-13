import { Component, OnInit } from '@angular/core';
import { HistorialMedico } from 'src/app/modelo/historial-medico';
import { HistorialService } from '../../historial.service';
import { OdontologosService } from 'src/app/component/odontologos/odontologos.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-historial',
  templateUrl: './alta-historial.component.html',
  styleUrls: ['./alta-historial.component.scss']
})
export class AltaHistorialComponent  implements OnInit{

  
constructor(){

}

ngOnInit(): void {
    
}


}

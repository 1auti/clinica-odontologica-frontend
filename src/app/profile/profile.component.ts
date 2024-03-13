import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../component/pacientes/paciente.service';
import { OdontologosService } from '../component/odontologos/odontologos.service';
import { TokenServiceService } from '../seguridad/service/token-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../seguridad/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  email:string = "";
  persona:any = {"nombre":"","apellido":"","dni":"","fechaNacimiento":"","telefono":"","direccion":"","email":"","img":"",}

  constructor(private pacienteService:PacienteService,
              private odontologoService:OdontologosService,
              private tokenService:TokenServiceService,
              private userService:UserService,
              private route:ActivatedRoute,
              
              ){

  }

  ngOnInit(): void {
      this.email = this.tokenService.getEmail();
      this.buscarPersona();

  }

  buscarPersona(){

    this.userService.traerUsuario(this.email).subscribe(response =>{
      console.log("Persona:",response.persona)
      this.persona = response.persona;
     

    })
    

  }


}

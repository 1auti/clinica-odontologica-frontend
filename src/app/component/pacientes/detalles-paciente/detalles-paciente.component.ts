import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/modelo/paciente';
import { PacienteService } from '../paciente.service';


@Component({
  selector: 'app-detalles-paciente',

  templateUrl: './detalles-paciente.component.html',
  styleUrls: ['./detalles-paciente.component.scss']
})
export class DetallesPacienteComponent implements OnInit{


  paciente: Paciente | null = null;

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private router:Router
  ){

  }

  ngOnInit(): void {
    this.obtenerDetalles();
  }

  obtenerDetalles(): void {
    const pacienteId = Number(this.route.snapshot.paramMap.get('id'));
    this.pacienteService.obtenerDetallesPaciente(pacienteId)
      .subscribe(paciente => this.paciente = paciente);
  }

  volverAPacientes():void{
    this.router.navigate(['/component/pacientes'])
  }
}

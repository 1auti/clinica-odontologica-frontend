import { Component , ElementRef, OnInit, ViewChild} from '@angular/core';
import { Odontologo } from 'src/app/modelo/odontologo';
import { OdontologosService } from './odontologos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odontologos',
  templateUrl: './odontologos.component.html',
  styleUrls: ['./odontologos.component.scss']
})
export class OdontologosComponent implements OnInit {

  
  odontologos: Odontologo[] = [];
  odontologosFiltrados: Odontologo[] = [];
  especialidades: string[] = [];
  filtroEspecialidad: string | null = null;
  odontologo!:Odontologo;
  bandera:boolean = false;
  errorMjs!:string;
  errorMessage: string | undefined;
  messageType: 'success' | 'info' | 'error' = 'error';
  @ViewChild('mensajeElement') mensajeElement!: ElementRef;
  email:string = "";


  constructor(
    private odontologosService: OdontologosService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.odontologosService.getOdontologos().subscribe(odontologos => {
      this.odontologos = odontologos;
      this.odontologosFiltrados = [...odontologos];
      this.especialidades = this.obtenerEspecialidades();
    });
  }

  aplicarFiltroEspecialidad(): void {
    if (this.filtroEspecialidad) {
      this.odontologosService.getOdontologosPorEspecialidad(this.filtroEspecialidad).subscribe(
        odontologos => this.odontologosFiltrados = odontologos,
        error => console.error('Error al filtrar por especialidad:', error)
      );
    } else {
      this.odontologosFiltrados = [...this.odontologos];
    }
  }

  reiniciarFiltros(): void {
    this.filtroEspecialidad = null;
    this.odontologosFiltrados = [...this.odontologos];
  }

  

  private obtenerEspecialidades(): string[] {
    const especialidadesUnicas = new Set<string>();
    this.odontologos.forEach(odontologo => {
      especialidadesUnicas.add(odontologo.especialidad);
    });
    return Array.from(especialidadesUnicas);
  }

  showDetalles(odontologoId:number):void{
    
    this.router.navigate(['component/odontologos/detalles-odontologo', odontologoId]);

  }

  buscarOdontologo(email:string):void{
    this.odontologosService.buscarPorEmail(email).subscribe(response=>{
      this.odontologo = response;
      this.bandera = true;
      this.messageType = 'success';
      this.errorMessage = 'Paciente encontrado';
      setTimeout(() => {
        this.hideMessage();
      }, 5000);

    })
  }

  hideMessage(): void {
    // Añade la clase 'hide' al mensaje
    this.mensajeElement.nativeElement.classList.add('hide');
  }

}





